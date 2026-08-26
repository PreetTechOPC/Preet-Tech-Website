import { google } from 'googleapis';

const getGoogleCalendarAuth = () => {
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
        ?.replace(/^"|"$/g, '')
        ?.replace(/\\n/g, '\n');

    if (!clientEmail || !privateKey) {
        throw new Error("Missing Google Service Account credentials for Calendar API.");
    }

    return new google.auth.GoogleAuth({
        credentials: {
            client_email: clientEmail,
            private_key: privateKey,
        },
        scopes: [
            'https://www.googleapis.com/auth/calendar',
            'https://www.googleapis.com/auth/calendar.events'
        ]
    });
};

const getCalendarId = () => {
    // If a specific calendar ID is provided, use it, else use the service account email (primary)
    return process.env.GOOGLE_CALENDAR_ID || process.env.GOOGLE_CLIENT_EMAIL;
};

export const googleCalendarService = {
    /**
     * Get busy periods for a specific date range
     */
    getBusySlots: async (timeMin: string, timeMax: string, timeZone: string = 'Asia/Kolkata') => {
        try {
            const auth = getGoogleCalendarAuth();
            const calendar = google.calendar({ version: 'v3', auth });
            const calendarId = getCalendarId();

            if (!calendarId) {
                console.warn('No GOOGLE_CALENDAR_ID or GOOGLE_CLIENT_EMAIL provided for calendar check.');
                return [];
            }

            const response = await calendar.freebusy.query({
                requestBody: {
                    timeMin,
                    timeMax,
                    timeZone,
                    items: [{ id: calendarId }],
                }
            });

            const busySlots = response.data.calendars?.[calendarId]?.busy || [];
            return busySlots;
        } catch (error: any) {
            console.error("Error fetching busy slots from Calendar:", error?.message || error);
            throw new Error(`Google Calendar API Error: ${error?.message || 'Failed to fetch availability'}`);
        }
    },

    /**
     * Create a meeting event with Google Meet link
     */
    createMeetingEvent: async (data: {
        summary: string;
        description: string;
        startTime: string; // ISO String
        endTime: string;   // ISO String
        timeZone: string;
        attendees: { email: string; displayName: string }[];
    }) => {
        try {
            const auth = getGoogleCalendarAuth();
            const calendar = google.calendar({ version: 'v3', auth });
            const calendarId = getCalendarId();

            if (!calendarId) {
                throw new Error("Missing calendar ID.");
            }

            const event = {
                summary: data.summary,
                description: data.description,
                start: {
                    dateTime: data.startTime,
                    timeZone: data.timeZone,
                },
                end: {
                    dateTime: data.endTime,
                    timeZone: data.timeZone,
                }
            };

            const response = await calendar.events.insert({
                calendarId,
                requestBody: event,
            });

            const eventId = response.data.id;
            const meetLink = process.env.STATIC_MEETING_LINK || response.data.hangoutLink || 'Google Meet link not available for this account type.';

            return {
                eventId,
                meetLink
            };
        } catch (error: any) {
            console.error("Error creating Google Calendar event:", error?.message || error);
            throw new Error(`Google Calendar API Error: ${error?.message || 'Failed to create event'}`);
        }
    },

    /**
     * Update an existing meeting event
     */
    updateMeetingEvent: async (eventId: string, data: {
        startTime: string;
        endTime: string;
        timeZone: string;
    }) => {
         try {
            const auth = getGoogleCalendarAuth();
            const calendar = google.calendar({ version: 'v3', auth });
            const calendarId = getCalendarId();

            if (!calendarId) {
                throw new Error("Missing calendar ID.");
            }
            
            // First get the event
            const event = await calendar.events.get({
                calendarId,
                eventId
            });
            
            const updatedEvent = {
                ...event.data,
                start: {
                    dateTime: data.startTime,
                    timeZone: data.timeZone,
                },
                end: {
                    dateTime: data.endTime,
                    timeZone: data.timeZone,
                }
            };

            await calendar.events.update({
                calendarId,
                eventId,
                requestBody: updatedEvent
            });
            
            return true;
         } catch (error: any) {
            console.error("Error updating Google Calendar event:", error?.message || error);
            throw new Error(`Google Calendar API Error: ${error?.message || 'Failed to update event'}`);
        }
    },

    /**
     * Delete/Cancel an existing meeting event
     */
    deleteMeetingEvent: async (eventId: string) => {
         try {
            const auth = getGoogleCalendarAuth();
            const calendar = google.calendar({ version: 'v3', auth });
            const calendarId = getCalendarId();

            if (!calendarId) {
                throw new Error("Missing calendar ID.");
            }

            await calendar.events.delete({
                calendarId,
                eventId
            });
            
            return true;
         } catch (error: any) {
            console.error("Error deleting Google Calendar event:", error?.message || error);
            throw new Error(`Google Calendar API Error: ${error?.message || 'Failed to delete event'}`);
        }
    }
};
