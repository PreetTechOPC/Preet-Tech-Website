import { google } from 'googleapis';

export const getGoogleSheetsAuth = () => {
    // If running in edge or missing vars this might complain, but we assume node runtime
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    // Strip surrounding literal quotes if they accidentally got parsed, and ensure actual newline characters
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
        ?.replace(/^"|"$/g, '')
        ?.replace(/\\n/g, '\n');

    if (!clientEmail || !privateKey) {
        throw new Error("Missing Google Service Account credentials.");
    }

    return new google.auth.GoogleAuth({
        credentials: {
            client_email: clientEmail,
            private_key: privateKey,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });
};

const SHEET_ID = process.env.SHEET_ID;
const ECO_LEADS_SHEET_ID = process.env.ECO_LEADS_SHEET_ID;
const RANGE = 'A:D';
const ECO_LEADS_RANGE = 'ECO Leads!A:F';

export const googleSheetsService = {
    checkIfEmailExists: async (email: string) => {
        try {
            const auth = getGoogleSheetsAuth();
            const sheets = google.sheets({ version: 'v4', auth });
            const response = await sheets.spreadsheets.values.get({
                spreadsheetId: SHEET_ID,
                range: RANGE,
            });
            const rows = response.data.values || [];

            // Assume Email is Column B (index 1)
            return rows.some(row => row[1] === email);
        } catch (error: any) {
            console.error("Error checking sheet for email:", error?.message || error);
            throw new Error(`Google Sheets API Error: ${error?.message || 'Failed to read subscriber data'}`);
        }
    },

    addSubscriber: async (name: string, email: string) => {
        try {
            const auth = getGoogleSheetsAuth();
            const sheets = google.sheets({ version: 'v4', auth });

            const date = new Date().toISOString();
            const status = 'Active';

            await sheets.spreadsheets.values.append({
                spreadsheetId: SHEET_ID,
                range: RANGE,
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [[name || 'Subscriber', email, date, status]]
                }
            });
            return true;
        } catch (error: any) {
            console.error("Error appending to sheets:", error?.message || error);
            throw new Error(`Google API Append Error: ${error?.message || 'Failed to add subscriber'}`);
        }
    },

    getActiveSubscribers: async () => {
        try {
            const auth = getGoogleSheetsAuth();
            const sheets = google.sheets({ version: 'v4', auth });
            const response = await sheets.spreadsheets.values.get({
                spreadsheetId: SHEET_ID,
                range: RANGE,
            });
            const rows = response.data.values || [];

            // Skip the header row and filter active users
            return rows.slice(1).filter(row => row[3] === 'Active').map(row => ({
                name: row[0],
                email: row[1]
            }));
        } catch (error) {
            console.error("Error fetching subscribers list:", error);
            return [];
        }
    },

    updateSubscriberStatus: async (email: string, status: string) => {
        try {
            const auth = getGoogleSheetsAuth();
            const sheets = google.sheets({ version: 'v4', auth });
            const response = await sheets.spreadsheets.values.get({
                spreadsheetId: SHEET_ID,
                range: RANGE,
            });

            const rows = response.data.values || [];

            // Find row by email
            const rowIndex = rows.findIndex(row => row[1] === email);
            if (rowIndex === -1) return false;
            const cellRange = `D${rowIndex + 1}`;
            await sheets.spreadsheets.values.update({
                spreadsheetId: SHEET_ID,
                range: cellRange,
                valueInputOption: 'USER_ENTERED',
                requestBody: { values: [[status]] }
            });

            return true;
        } catch (error: any) {
            console.error("Error updating sheet status:", error?.message || error);
            throw new Error(`Google API Update Error: ${error?.message || 'Failed to update status'}`);
        }
    },

    addEcoLead: async (data: {
        service?: string;
        name: string;
        businessName: string;
        email: string;
        phone: string;
        industry: string;
        budget: string;
    }) => {
        return googleSheetsService.addLeadToSpecificSheet('ECO Leads', data);
    },

    addAppLead: async (data: {
        service?: string;
        name: string;
        businessName: string;
        email: string;
        phone: string;
        industry: string;
        budget: string;
    }) => {
        return googleSheetsService.addLeadToSpecificSheet('App Leads', data);
    },

    addSoftwareLead: async (data: {
        service?: string;
        name: string;
        businessName: string;
        email: string;
        phone: string;
        industry: string;
        budget: string;
    }) => {
        return googleSheetsService.addLeadToSpecificSheet('Software Leads', data);
    },

    addMarketingLead: async (data: {
        service?: string;
        name: string;
        businessName: string;
        email: string;
        phone: string;
        industry: string;
        budget: string;
    }) => {
        return googleSheetsService.addLeadToSpecificSheet('Perform Market Lead', data);
    },

    addAdvanceWebsiteLead: async (data: {
        service?: string;
        name: string;
        businessName: string;
        email: string;
        phone: string;
        industry: string;
        budget: string;
    }) => {
        return googleSheetsService.addLeadToSpecificSheet('Advance Website Leads', data);
    },

    addSocialMediaLead: async (data: {
        service?: string;
        name: string;
        businessName: string;
        email: string;
        phone: string;
        industry: string;
        budget: string;
    }) => {
        return googleSheetsService.addLeadToSpecificSheet('Social Media Leads', data);
    },

    addPartnershipMarketingLead: async (data: {
        service?: string;
        name: string;
        businessName: string;
        email: string;
        phone: string;
        industry: string;
        budget: string;
    }) => {
        return googleSheetsService.addLeadToSpecificSheet('Partnership Marketing Lead', data);
    },

    addContentCreationLead: async (data: {
        service?: string;
        name: string;
        businessName: string;
        email: string;
        phone: string;
        industry: string;
        budget: string;
    }) => {
        return googleSheetsService.addLeadToSpecificSheet('Content Creation Lead', data);
    },

    addStartBusinessLead: async (data: {
        service?: string;
        name: string;
        businessName: string;
        email: string;
        phone: string;
        industry: string;
        budget: string;
    }) => {
        return googleSheetsService.addLeadToSpecificSheet('Start Business Lead', data);
    },

    addLeadToSpecificSheet: async (sheetName: string, data: {
        service?: string;
        name: string;
        businessName: string;
        email: string;
        phone: string;
        industry: string;
        budget: string;
    }) => {
        try {
            const auth = getGoogleSheetsAuth();
            const sheets = google.sheets({ version: 'v4', auth });

            // Format date-time in IST (India Standard Time)
            const now = new Date();

            // Full date-time string (e.g. "10/03/2026, 02:30:45 pm")
            const dateTime = now.toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            });

            // Date-only string for easy day-wise filtering (e.g. "10/03/2026")
            const dateOnly = now.toLocaleDateString('en-IN', {
                timeZone: 'Asia/Kolkata',
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            });

            // Check if tab exists; if not, create it with headers
            try {
                const sheetMeta = await sheets.spreadsheets.get({ spreadsheetId: SHEET_ID });
                const tabExists = sheetMeta.data.sheets?.some(
                    (s: any) => s.properties?.title === sheetName
                );

                if (!tabExists) {
                    // Add the sheet tab
                    await sheets.spreadsheets.batchUpdate({
                        spreadsheetId: SHEET_ID,
                        requestBody: {
                            requests: [{ addSheet: { properties: { title: sheetName } } }]
                        }
                    });
                    // Write header row — now includes a dedicated "Date" column for day-wise filtering
                    await sheets.spreadsheets.values.update({
                        spreadsheetId: SHEET_ID,
                        range: `'${sheetName}'!A1:I1`,
                        valueInputOption: 'USER_ENTERED',
                        requestBody: {
                            values: [['Date', 'Date & Time', 'Service', 'Name', 'BusinessName', 'Email', 'Phone Number', 'Industry', 'Budget Range']]
                        }
                    });
                }
            } catch (tabErr: any) {
                console.warn(`Tab check warning for ${sheetName}:`, tabErr?.message);
            }

            // Append the lead data — Date Only in col A for filter, full DateTime in col B
            await sheets.spreadsheets.values.append({
                spreadsheetId: SHEET_ID,
                range: `'${sheetName}'!A:I`,
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [[
                        dateOnly,
                        dateTime,
                        data.service || 'Not specified',
                        data.name,
                        data.businessName,
                        data.email,
                        `'${data.phone}`,
                        data.industry,
                        data.budget,
                    ]]
                }
            });
            return true;
        } catch (error: any) {
            console.error(`Error appending lead to ${sheetName}:`, error?.message || error);
            throw new Error(`Google Sheets Lead Error: ${error?.message || 'Failed to save lead'}`);
        }
    },
};
