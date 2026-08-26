import { NextResponse } from 'next/server';
import { googleSheetsService } from '@/lib/googleSheetsService';

export async function GET() {
    try {
        const settings = await googleSheetsService.getMeetingSettings();
        return NextResponse.json({ success: true, settings });
    } catch (error: any) {
        console.error("Settings API error:", error);
        return NextResponse.json(
            { success: false, error: 'Failed to retrieve meeting settings.' },
            { status: 500 }
        );
    }
}
