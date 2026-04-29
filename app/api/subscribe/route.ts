import { NextResponse } from 'next/server';
import { googleSheetsService } from '@/lib/googleSheetsService';
import { emailService } from '@/lib/emailService';
import { validateEmail } from '@/lib/validateEmail';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email } = body;

        if (!email || !validateEmail(email)) {
            return NextResponse.json({ success: false, message: "Valid email is required" }, { status: 400 });
        }

        const exists = await googleSheetsService.checkIfEmailExists(email);

        if (exists) {
            return NextResponse.json({ success: true, message: "Already Subscribed" }, { status: 200 });
        }

        await googleSheetsService.addSubscriber(name || 'Subscriber', email);

        // Send email notification to subscriber
        await emailService.sendConfirmationEmail(email);

        return NextResponse.json({ success: true, message: "Subscription successful" }, { status: 200 });
    } catch (error: any) {
        console.error("Subscription Error:", error);
        return NextResponse.json({ success: false, message: error.message || "Failed to subscribe." }, { status: 500 });
    }
}
