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

    addCareerApplication: async (data: {
        position: string;
        name: string;
        email: string;
        phone: string;
        experience: string;
        portfolio: string;
        motivation: string;
        resumeLink: string;
    }) => {
        try {
            const auth = getGoogleSheetsAuth();
            const sheets = google.sheets({ version: 'v4', auth });
            const sheetName = 'Career Leads';

            const now = new Date();
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

            // Ensure tab exists
            try {
                const sheetMeta = await sheets.spreadsheets.get({ spreadsheetId: SHEET_ID });
                const tabExists = sheetMeta.data.sheets?.some(
                    (s: any) => s.properties?.title === sheetName
                );

                if (!tabExists) {
                    await sheets.spreadsheets.batchUpdate({
                        spreadsheetId: SHEET_ID,
                        requestBody: {
                            requests: [{ addSheet: { properties: { title: sheetName } } }]
                        }
                    });
                    await sheets.spreadsheets.values.update({
                        spreadsheetId: SHEET_ID,
                        range: `'${sheetName}'!A1:I1`,
                        valueInputOption: 'USER_ENTERED',
                        requestBody: {
                            values: [['Timestamp', 'Job Position', 'Candidate Name', 'Email', 'Phone', 'Experience', 'Portfolio/LinkedIn', 'Why Hire You', 'Resume Link']]
                        }
                    });
                }
            } catch (tabErr: any) {
                console.warn(`Tab check warning for ${sheetName}:`, tabErr?.message);
            }

            await sheets.spreadsheets.values.append({
                spreadsheetId: SHEET_ID,
                range: `'${sheetName}'!A:I`,
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [[
                        dateTime,
                        data.position,
                        data.name,
                        data.email,
                        `'${data.phone}`,
                        data.experience,
                        data.portfolio,
                        data.motivation,
                        data.resumeLink,
                    ]]
                }
            });
            return true;
        } catch (error: any) {
            console.error(`Error appending lead to Career Leads:`, error?.message || error);
            return false;
        }
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

    getMeetingSettings: async () => {
        try {
            const auth = getGoogleSheetsAuth();
            const sheets = google.sheets({ version: 'v4', auth });
            const sheetId = process.env.MEETING_SHEET_ID || process.env.SHEET_ID;

            const response = await sheets.spreadsheets.values.get({
                spreadsheetId: sheetId,
                range: 'Settings!A2:B', 
            });

            const rows = response.data.values || [];
            const settings: any = {};
            rows.forEach(row => {
                if (row[0] && row[1]) {
                    const key = row[0].trim();
                    const value = row[1].trim();
                    if (key === 'Meeting Duration') settings.duration = parseInt(value, 10);
                    if (key === 'Buffer Time') settings.bufferTime = parseInt(value, 10);
                    if (key === 'Working Start Time') settings.workingHours = { ...settings.workingHours, start: value };
                    if (key === 'Working End Time') settings.workingHours = { ...settings.workingHours, end: value };
                    if (key === 'Timezone') settings.timezone = value;
                    if (key === 'Working Days') settings.workingDays = value.split(',').map((d: string) => d.trim());
                    if (key === 'Admin Email') settings.adminEmail = value;
                    if (key === 'Meeting Title Template') settings.titleTemplate = value;
                    if (key === 'Max Advance Booking Days') settings.maxAdvanceBookingDays = parseInt(value, 10);
                    if (key === 'Min Booking Notice Minutes') settings.minBookingNoticeMinutes = parseInt(value, 10);
                }
            });

            return {
                duration: settings.duration || 30,
                bufferTime: settings.bufferTime || 10,
                timezone: settings.timezone || "Asia/Kolkata",
                workingHours: settings.workingHours || { start: "10:00", end: "19:00" },
                workingDays: settings.workingDays || ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                adminEmail: settings.adminEmail || process.env.SMTP_USER,
                maxAdvanceBookingDays: settings.maxAdvanceBookingDays || 30,
                minBookingNoticeMinutes: settings.minBookingNoticeMinutes || 60,
                titleTemplate: settings.titleTemplate || "Strategy Call with {{name}}"
            };
        } catch (error: any) {
            console.error("Error fetching meeting settings:", error?.message || error);
            return {
                duration: 30,
                bufferTime: 10,
                timezone: "Asia/Kolkata",
                workingHours: { start: "10:00", end: "19:00" },
                workingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                adminEmail: process.env.SMTP_USER,
                maxAdvanceBookingDays: 30,
                minBookingNoticeMinutes: 60,
                titleTemplate: "Strategy Call with {{name}}"
            };
        }
    },

    getBlockedDates: async () => {
        try {
            const auth = getGoogleSheetsAuth();
            const sheets = google.sheets({ version: 'v4', auth });
            const sheetId = process.env.MEETING_SHEET_ID || process.env.SHEET_ID;

            const response = await sheets.spreadsheets.values.get({
                spreadsheetId: sheetId,
                range: 'Blocked Dates!A2:C',
            });

            const rows = response.data.values || [];
            return rows.filter(row => row[2] === 'Blocked').map(row => row[0]);
        } catch (error) {
            console.error("Error fetching blocked dates:", error);
            return [];
        }
    },

    createMeeting: async (data: any) => {
        try {
            const auth = getGoogleSheetsAuth();
            const sheets = google.sheets({ version: 'v4', auth });
            const sheetId = process.env.MEETING_SHEET_ID || process.env.SHEET_ID;

            const now = new Date().toISOString();

            try {
                const sheetMeta = await sheets.spreadsheets.get({ spreadsheetId: sheetId });
                const tabExists = sheetMeta.data.sheets?.some(
                    (s: any) => s.properties?.title === 'Meetings'
                );
                if (!tabExists) {
                    await sheets.spreadsheets.batchUpdate({
                        spreadsheetId: sheetId,
                        requestBody: {
                            requests: [{ addSheet: { properties: { title: 'Meetings' } } }]
                        }
                    });
                    await sheets.spreadsheets.values.update({
                        spreadsheetId: sheetId,
                        range: `'Meetings'!A1:T1`,
                        valueInputOption: 'USER_ENTERED',
                        requestBody: {
                            values: [['Meeting ID', 'Customer Name', 'Customer Email', 'Customer Phone', 'Meeting Purpose', 'Meeting Date', 'Start Time', 'End Time', 'Duration', 'Timezone', 'Google Meet Link', 'Google Calendar Event ID', 'Status', 'Source', 'Created At', 'Updated At', 'Customer Email Sent', 'Admin Email Sent', 'Reminder Status', 'Notes']]
                        }
                    });
                }
            } catch (tabErr: any) {
                console.warn(`Tab check warning for Meetings:`, tabErr?.message);
            }

            await sheets.spreadsheets.values.append({
                spreadsheetId: sheetId,
                range: `'Meetings'!A:T`,
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [[
                        data.meetingId,
                        data.name,
                        data.email,
                        `'${data.phone}`,
                        data.purpose,
                        data.date,
                        data.startTime,
                        data.endTime,
                        data.duration,
                        data.timezone,
                        data.meetLink,
                        data.eventId,
                        data.status || 'Confirmed',
                        data.source,
                        now,
                        now,
                        data.customerEmailSent ? 'Yes' : 'No',
                        data.adminEmailSent ? 'Yes' : 'No',
                        'Pending',
                        data.notes || ''
                    ]]
                }
            });
            return true;
        } catch (error: any) {
             console.error(`Error saving meeting:`, error?.message || error);
             throw new Error(`Google Sheets Meeting Error: ${error?.message || 'Failed to save meeting'}`);
        }
    },
};
