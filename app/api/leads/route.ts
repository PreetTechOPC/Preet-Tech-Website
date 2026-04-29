import { NextResponse } from 'next/server';
import { googleSheetsService } from '@/lib/googleSheetsService';
import { emailService } from '@/lib/emailService';
import { validateEmail } from '@/lib/validateEmail';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, businessName, email, phone, industry, budget, service } = body;

        // Basic validation
        if (!name || !email || !phone) {
            return NextResponse.json(
                { success: false, message: 'Name, email, and phone are required.' },
                { status: 400 }
            );
        }

        if (!validateEmail(email)) {
            return NextResponse.json(
                { success: false, message: 'Please provide a valid email address.' },
                { status: 400 }
            );
        }

        // Format submitted time in IST
        const submittedAt = new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        });

        const leadData = {
            service: service || 'General Inquiry',
            name: name.trim(),
            businessName: (businessName || '').trim(),
            email: email.trim(),
            phone: phone.trim(),
            industry: industry || 'Not specified',
            budget: budget || '₹19,999',
        };

        // 1️⃣ Save to Google Sheets
        console.log(`[API/Leads] Saving lead for ${leadData.name} to Sheets...`);
        if (leadData.service === 'App Development') {
            await googleSheetsService.addAppLead(leadData);
        } else if (leadData.service === 'Software Development') {
            await googleSheetsService.addSoftwareLead(leadData);
        } else if (leadData.service === 'Performance Marketing') {
            await googleSheetsService.addMarketingLead(leadData);
        } else if (leadData.service === 'Advance Website') {
            await googleSheetsService.addAdvanceWebsiteLead(leadData);
        } else if (leadData.service === 'Social Media Handling') {
            await googleSheetsService.addSocialMediaLead(leadData);
        } else if (leadData.service === 'Partnership Marketing') {
            await googleSheetsService.addPartnershipMarketingLead(leadData);
        } else if (leadData.service === 'Content Creation') {
            await googleSheetsService.addContentCreationLead(leadData);
        } else if (leadData.service === 'Start Business') {
            await googleSheetsService.addStartBusinessLead(leadData);
        } else {
            await googleSheetsService.addEcoLead(leadData);
        }

        // 2️⃣ Send admin notification email (non-blocking)
        emailService.sendEcoLeadNotification({
            ...leadData,
            submittedAt,
        }).then(sent => {
            console.log(`[API/Leads] Admin notification result house: ${sent}`);
        }).catch((err) => {
            console.error('[API/Leads] Admin email notification failed:', err);
        });

        // 3️⃣ Send Thank You email to user (non-blocking)
        emailService.sendEcoLeadThankYouEmail({
            name: leadData.name,
            email: leadData.email,
            industry: leadData.industry,
            service: leadData.service,
        }).then(sent => {
            console.log(`[API/Leads] User thank you email result: ${sent}`);
        }).catch((err) => {
            console.error('[API/Leads] User thank you email failed:', err);
        });

        return NextResponse.json(
            { success: true, message: 'Your consultation request has been received! We will contact you shortly.' },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('ECO Lead submission error:', error);
        return NextResponse.json(
            { success: false, message: error.message || 'Failed to submit your request. Please try again.' },
            { status: 500 }
        );
    }
}
