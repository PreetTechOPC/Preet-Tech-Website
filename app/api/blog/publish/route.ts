import { NextResponse } from 'next/server';
import { googleSheetsService } from '@/lib/googleSheetsService';
import { emailService } from '@/lib/emailService';

export async function POST(req: Request) {
    try {
        // You should add an authorization header check here in production to prevent unauthorized broadcasts
        const secret = req.headers.get('Authorization');
        if (secret !== `Bearer ${process.env.ADMIN_NOTIFY_SECRET || 'SECRET_NOTIFY_KEY_123'}`) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        const { title, excerpt, slug } = body;

        if (!title || !slug) {
            return NextResponse.json({ success: false, message: "Title and slug are required" }, { status: 400 });
        }

        const activeSubscribers = await googleSheetsService.getActiveSubscribers();
        const emails = activeSubscribers.map((sub: any) => sub.email);

        if (emails.length === 0) {
            return NextResponse.json({ success: true, message: "No active subscribers found." }, { status: 200 });
        }

        // Send notifications in batches of 50 asynchronously (fire and forget)
        const batchSize = 50;
        const promises = [];
        for (let i = 0; i < emails.length; i += batchSize) {
            const batch = emails.slice(i, i + batchSize);
            promises.push(emailService.sendBlogNotification(batch, { title, excerpt, slug }));
        }

        await Promise.all(promises);

        return NextResponse.json({
            success: true,
            message: `Blog broadcast queued for ${emails.length} subscribers.`
        }, { status: 200 });
    } catch (error: any) {
        console.error("Publish Broadcast Error:", error);
        return NextResponse.json({ success: false, message: "Broadcast failed." }, { status: 500 });
    }
}
