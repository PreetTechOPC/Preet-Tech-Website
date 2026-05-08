import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { position, name, email, phone, experience, portfolio, motivation, resumeName } = body;

        // Verify environment variables
        const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;

        if (!clientEmail || !privateKey || !spreadsheetId) {
            console.error('Missing Google API credentials');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: privateKey,
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A:I',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [timestamp, position, name, email, phone, experience, portfolio, motivation, resumeName],
                ],
            },
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Google Sheets Error:', error);
        return NextResponse.json({ error: error.message || 'Failed to submit to Google Sheets' }, { status: 500 });
    }
}
