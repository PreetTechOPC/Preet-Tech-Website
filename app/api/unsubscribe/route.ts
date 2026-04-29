import { NextResponse } from 'next/server';
import { googleSheetsService } from '@/lib/googleSheetsService';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const email = searchParams.get('email');

        if (!email) {
            return new NextResponse("Email parameter required.", { status: 400 });
        }

        const updated = await googleSheetsService.updateSubscriberStatus(email, "Unsubscribed");

        if (updated) {
            return new NextResponse(`<div style="font-family: Arial; padding: 40px; text-align: center;"><h1>Successfully unsubscribed ${email}.</h1><p>We are sad to see you go! You will no longer receive emails from us.</p></div>`, {
                status: 200,
                headers: { 'Content-Type': 'text/html' }
            });
        } else {
            return new NextResponse(`<div style="font-family: Arial; padding: 40px; text-align: center;"><h1>Email not found</h1><p>We couldn't find ${email} in our active subscriber list.</p></div>`, {
                status: 404,
                headers: { 'Content-Type': 'text/html' }
            });
        }
    } catch (error: any) {
        console.error("Unsubscribe Error:", error);
        return new NextResponse("Failed to process unsubscription.", { status: 500 });
    }
}
