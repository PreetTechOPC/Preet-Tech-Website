import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { Readable } from 'stream';
import { emailService } from '@/lib/emailService';
import { googleSheetsService } from '@/lib/googleSheetsService';

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const position = formData.get('position') as string;
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const experience = formData.get('experience') as string;
        const portfolio = formData.get('portfolio') as string;
        const motivation = formData.get('motivation') as string;
        const resumeFile = formData.get('resume') as File | null;

        let resumeBuffer: Buffer | null = null;
        if (resumeFile) {
            resumeBuffer = Buffer.from(await resumeFile.arrayBuffer());
        }

        // Verify Google environment variables for Sheets & Drive saving
        const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
        let privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
        if (privateKey && privateKey.startsWith('"') && privateKey.endsWith('"')) {
            privateKey = privateKey.slice(1, -1);
        }
        const spreadsheetId = process.env.SHEET_ID;

        let resumeLink = 'No file';

        if (clientEmail && privateKey && spreadsheetId) {
            try {
                if (resumeFile && resumeBuffer) {
                    const auth = new google.auth.GoogleAuth({
                        credentials: {
                            client_email: clientEmail,
                            private_key: privateKey,
                        },
                        scopes: ['https://www.googleapis.com/auth/drive.file'],
                    });
                    const drive = google.drive({ version: 'v3', auth });

                    const stream = new Readable();
                    stream.push(resumeBuffer);
                    stream.push(null);

                    const driveRes = await drive.files.create({
                        requestBody: {
                            name: `Resume_${name.replace(/\s+/g, '_')}_${resumeFile.name}`,
                            mimeType: resumeFile.type || 'application/octet-stream',
                        },
                        media: {
                            mimeType: resumeFile.type || 'application/octet-stream',
                            body: stream,
                        },
                        fields: 'id, webViewLink',
                    });

                    const fileId = driveRes.data.id;
                    if (fileId) {
                        await drive.permissions.create({
                            fileId: fileId,
                            requestBody: {
                                role: 'reader',
                                type: 'anyone',
                            },
                        });
                        resumeLink = driveRes.data.webViewLink || 'File Uploaded';
                    }
                }

                // Save application data directly to 'Career Leads' tab in your Google Sheet
                await googleSheetsService.addCareerApplication({
                    position,
                    name,
                    email,
                    phone,
                    experience,
                    portfolio,
                    motivation,
                    resumeLink,
                });
            } catch (err) {
                console.error('Google Drive/Sheets integration error:', err);
            }
        } else {
            console.warn('Google Credentials or SHEET_ID not present. Skipping Google Sheets step.');
        }

        // Prepare PDF attachment for email
        const attachedResume = (resumeFile && resumeBuffer) ? {
            filename: resumeFile.name,
            content: resumeBuffer,
            contentType: resumeFile.type || 'application/pdf',
        } : null;

        // 2️⃣ Send notification email to admin/HR with attached PDF resume
        emailService.sendCareerApplicationNotification({
            position,
            name,
            email,
            phone,
            experience,
            portfolio,
            motivation,
            resumeLink,
            resumeFile: attachedResume,
        }).catch(err => {
            console.error('Error sending career application admin email:', err);
        });

        // 3️⃣ Send Thank You email to Candidate: "our HR recruiter will connect with you very soon"
        emailService.sendCareerThankYouEmail({
            name,
            email,
            position,
        }).catch(err => {
            console.error('Error sending candidate career thank you email:', err);
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Application submission error:', error);
        return NextResponse.json({ error: error.message || 'Failed to submit application' }, { status: 500 });
    }
}

