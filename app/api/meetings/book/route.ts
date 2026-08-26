import { NextRequest, NextResponse } from 'next/server';
import { googleSheetsService } from '@/lib/googleSheetsService';
import { googleCalendarService } from '@/lib/googleCalendarService';
import { emailService } from '@/lib/emailService';

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        
        // Basic Validation
        if (!data.name || !data.email || !data.phone || !data.purpose || !data.date || !data.isoStart || !data.isoEnd || !data.timezone) {
            return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        // Final Availability Check
        const settings = await googleSheetsService.getMeetingSettings();
        const busySlots = await googleCalendarService.getBusySlots(data.isoStart, data.isoEnd, data.timezone);
        
        if (busySlots.length > 0) {
             return NextResponse.json({ success: false, error: 'Sorry, this time slot was just booked by another customer. Please select another available time.', refresh: true }, { status: 409 });
        }

        // Create Google Calendar Event
        const eventTitle = settings.titleTemplate.replace('{{name}}', data.name);
        const eventDescription = `Meeting Purpose: ${data.purpose}\nCustomer: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}`;
        
        const eventResult = await googleCalendarService.createMeetingEvent({
            summary: eventTitle,
            description: eventDescription,
            startTime: data.isoStart,
            endTime: data.isoEnd,
            timeZone: data.timezone,
            attendees: [{ email: data.email, displayName: data.name }]
        });

        const meetingId = `PT-MTG-${data.date.replace(/-/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`;

        const displayTimeStr = new Date(data.isoStart).toLocaleTimeString('en-US', { timeZone: data.timezone, hour: 'numeric', minute: '2-digit', hour12: true });
        const displayEndTimeStr = new Date(data.isoEnd).toLocaleTimeString('en-US', { timeZone: data.timezone, hour: 'numeric', minute: '2-digit', hour12: true });

        // Save to Google Sheets
        await googleSheetsService.createMeeting({
            meetingId,
            name: data.name,
            email: data.email,
            phone: data.phone,
            purpose: data.purpose,
            date: data.date,
            startTime: displayTimeStr,
            endTime: displayEndTimeStr,
            duration: settings.duration,
            timezone: data.timezone,
            meetLink: eventResult.meetLink,
            eventId: eventResult.eventId,
            source: data.source || 'Website',
            customerEmailSent: false,
            adminEmailSent: false
        });

        // Send Emails
        const customerEmailSent = await emailService.sendMeetingCustomerConfirmation({
            name: data.name,
            email: data.email,
            date: data.date,
            displayTime: displayTimeStr,
            timezone: data.timezone,
            duration: settings.duration,
            purpose: data.purpose,
            meetLink: eventResult.meetLink
        });

        const adminEmailSent = await emailService.sendMeetingAdminNotification(settings.adminEmail, {
            meetingId,
            name: data.name,
            email: data.email,
            phone: data.phone,
            purpose: data.purpose,
            date: data.date,
            displayTime: displayTimeStr,
            timezone: data.timezone,
            source: data.source || 'Website',
            meetLink: eventResult.meetLink
        });

        return NextResponse.json({
            success: true,
            meeting: {
                meetingId,
                date: data.date,
                time: displayTimeStr,
                endTime: displayEndTimeStr,
                meetLink: eventResult.meetLink
            }
        });

    } catch (error: any) {
        console.error("Booking API error:", error);
        return NextResponse.json(
            { success: false, error: error.message || 'We are unable to schedule your meeting right now. Please try again in a moment.' },
            { status: 500 }
        );
    }
}
