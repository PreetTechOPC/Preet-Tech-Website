import { NextRequest, NextResponse } from 'next/server';
import { googleSheetsService } from '@/lib/googleSheetsService';
import { googleCalendarService } from '@/lib/googleCalendarService';

export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const dateStr = url.searchParams.get('date');

        if (!dateStr) {
            return NextResponse.json({ success: false, error: 'Date is required (YYYY-MM-DD)' }, { status: 400 });
        }

        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(dateStr)) {
            return NextResponse.json({ success: false, error: 'Invalid date format. Use YYYY-MM-DD' }, { status: 400 });
        }

        const settings = await googleSheetsService.getMeetingSettings();
        const blockedDates = await googleSheetsService.getBlockedDates();

        if (blockedDates.includes(dateStr)) {
            return NextResponse.json({ success: true, date: dateStr, timezone: settings.timezone, slots: [] });
        }

        const dateObj = new Date(dateStr);
        const dayOfWeek = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
        
        if (!settings.workingDays.includes(dayOfWeek)) {
            return NextResponse.json({ success: true, date: dateStr, timezone: settings.timezone, slots: [] });
        }

        const getOffset = (timeZone: string) => {
            try {
                // A reliable way to get offset:
                const date = new Date();
                const str = date.toLocaleString('en-US', { timeZone, timeZoneName: 'longOffset' });
                // str looks like "10/3/2026, 3:00:00 PM GMT+05:30"
                const match = str.match(/GMT([+-]\d{2}:\d{2})/);
                if (match) return match[1];
                
                // Fallback for just GMT
                const matchZ = str.match(/GMT$/);
                if (matchZ) return '+00:00';

                return '+00:00';
            } catch (e) {
                return '+00:00';
            }
        };

        const offset = getOffset(settings.timezone);
        const timeMinIso = `${dateStr}T${settings.workingHours.start}:00${offset}`;
        const timeMaxIso = `${dateStr}T${settings.workingHours.end}:00${offset}`;

        const busySlots = await googleCalendarService.getBusySlots(timeMinIso, timeMaxIso, settings.timezone);

        const durationMinutes = settings.duration;
        const bufferMinutes = settings.bufferTime;
        const totalSlotMinutes = durationMinutes + bufferMinutes;

        const availableSlots = [];
        let currentSlotStart = new Date(timeMinIso);
        const endWorkingHours = new Date(timeMaxIso);
        
        const now = new Date();
        const minNoticeTime = new Date(now.getTime() + settings.minBookingNoticeMinutes * 60000);

        while (currentSlotStart.getTime() + durationMinutes * 60000 <= endWorkingHours.getTime()) {
            const slotStartMs = currentSlotStart.getTime();
            const slotEndMs = slotStartMs + durationMinutes * 60000;
            const slotNextMs = slotStartMs + totalSlotMinutes * 60000;

            if (currentSlotStart > minNoticeTime) {
                let isBusy = false;
                for (const busy of busySlots) {
                    const busyStart = new Date(busy.start).getTime();
                    const busyEnd = new Date(busy.end).getTime();

                    // Check overlap
                    if (slotStartMs < busyEnd && slotEndMs > busyStart) {
                        isBusy = true;
                        break;
                    }
                }

                if (!isBusy) {
                    const startStr = currentSlotStart.toLocaleTimeString('en-US', { timeZone: settings.timezone, hour: '2-digit', minute: '2-digit', hour12: false });
                    const endStr = new Date(slotEndMs).toLocaleTimeString('en-US', { timeZone: settings.timezone, hour: '2-digit', minute: '2-digit', hour12: false });
                    const displayStr = currentSlotStart.toLocaleTimeString('en-US', { timeZone: settings.timezone, hour: 'numeric', minute: '2-digit', hour12: true });

                    availableSlots.push({
                        start: startStr,
                        end: endStr,
                        display: displayStr,
                        isoStart: new Date(slotStartMs).toISOString(),
                        isoEnd: new Date(slotEndMs).toISOString()
                    });
                }
            }

            currentSlotStart = new Date(slotNextMs);
        }

        return NextResponse.json({
            success: true,
            date: dateStr,
            timezone: settings.timezone,
            slots: availableSlots
        });

    } catch (error: any) {
        console.error("Available Slots API error:", error);
        return NextResponse.json(
            { success: false, error: 'Failed to check availability.' },
            { status: 500 }
        );
    }
}
