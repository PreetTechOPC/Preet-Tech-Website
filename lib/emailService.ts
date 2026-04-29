import nodemailer from 'nodemailer';
import { portfolioItems } from './eco-portfolio';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const emailService = {
    sendConfirmationEmail: async (email: string) => {
        try {
            const mailOptions = {
                from: process.env.EMAIL_FROM || '"Preet Tech" <hello@preettech.com>',
                to: email,
                subject: "Welcome to Preet Tech 🚀",
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
                        <h2 style="color: #0f172a;">Welcome to the Inner Circle!</h2>
                        <p style="color: #475569; font-size: 16px;">
                            Thank you for joining our newsletter. You're now on the VIP list to receive our best actionable growth frameworks directly to your inbox. Zero fluff. Pure signal.
                        </p>
                        <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/blog" style="display: inline-block; padding: 12px 24px; background-color: #0ed3e6; color: #0f172a; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 15px;">
                            Read Latest Blogs
                        </a>
                        <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
                            Need help? <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/contact" style="color: #0ed3e6;">Contact Support</a><br>
                            To unsubscribe, <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/unsubscribe?email=${email}" style="color: #94a3b8; text-decoration: underline;">click here</a>.
                        </p>
                    </div>
                `
            };
            await transporter.sendMail(mailOptions);
            return true;
        } catch (error) {
            console.error("Nodemailer confirmation email error:", error);
            return false;
        }
    },

    sendBlogNotification: async (emails: string[], blogData: { title: string, excerpt: string, slug: string }) => {
        try {
            const mailOptions = {
                from: process.env.EMAIL_FROM || '"Preet Tech" <hello@preettech.com>',
                bcc: emails.join(','),
                subject: `New Blog: ${blogData.title} ✨`,
                html: `
                     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
                        <h2 style="color: #0f172a;">New Intelligence Dropped!</h2>
                        <h3 style="color: #0ed3e6;">${blogData.title}</h3>
                        <p style="color: #475569; font-size: 16px;">
                            ${blogData.excerpt}
                        </p>
                        <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/blog/${blogData.slug}" style="display: inline-block; padding: 12px 24px; background-color: #0f172a; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 15px;">
                            Read Full Article
                        </a>
                        <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
                            To stop receiving these notifications, click to <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/unsubscribe" style="color: #94a3b8; text-decoration: underline;">unsubscribe</a>.
                        </p>
                    </div>
                `
            };
            await transporter.sendMail(mailOptions);
            return true;
        } catch (error) {
            console.error("Nodemailer blog notification error:", error);
            return false;
        }
    },

    // ─── ECO Lead Admin Notification ───────────────────────────────────────────
    sendEcoLeadNotification: async (lead: {
        name: string;
        businessName: string;
        email: string;
        phone: string;
        industry: string;
        budget: string;
        submittedAt: string;
        service?: string;
    }) => {
        try {
            const adminEmail = process.env.SMTP_USER || '';
            const whatsappPhone = lead.phone.replace(/[^0-9]/g, '');
            const serviceName = lead.service || 'ECO';

            const mailOptions = {
                from: process.env.EMAIL_FROM || '"Preet Tech" <hello@preettech.com>',
                to: adminEmail,
                subject: `🚀 New ${serviceName} Lead: ${lead.name} (${lead.industry})`,
                html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>New Lead Notification</title>
                    </head>
                    <body style="margin: 0; padding: 0; background-color: #f4f7fa; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                        <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #e1e8f0;">
                            
                            <!-- Header with Gradient Area -->
                            <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 60px 40px; text-align: center; position: relative;">
                                <div style="display: inline-block; padding: 8px 16px; background-color: rgba(57, 148, 250, 0.1); border: 1px solid rgba(57, 148, 250, 0.2); border-radius: 100px; margin-bottom: 24px;">
                                    <span style="color: #3994fa; font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase;">Incoming ${serviceName} Lead</span>
                                </div>
                                <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 800; letter-spacing: -1px; line-height: 1.2;">
                                    <span style="color: #3994fa;">New</span> Consultation Request
                                </h1>
                                <p style="margin: 16px 0 0; color: #94a3b8; font-size: 15px; font-weight: 500;">Details from the ${serviceName} landing page</p>
                            </div>

                            <!-- Dashboard Container -->
                            <div style="padding: 40px;">
                                
                                <!-- User Info Grid -->
                                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                                    <tr>
                                        <td style="padding-bottom: 24px;">
                                            <div style="padding: 24px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 20px;">
                                                <table width="100%" cellpadding="0" cellspacing="0">
                                                    <tr>
                                                        <td width="50%" style="vertical-align: top; padding-right: 20px;">
                                                            <p style="margin: 0; color: #64748b; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px;">Full Name</p>
                                                            <p style="margin: 0; color: #0f172a; font-size: 17px; font-weight: 700;">${lead.name}</p>
                                                        </td>
                                                        <td width="50%" style="vertical-align: top;">
                                                            <p style="margin: 0; color: #64748b; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px;">Business</p>
                                                            <p style="margin: 0; color: #0f172a; font-size: 17px; font-weight: 700;">${lead.businessName || '—'}</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style="padding: 24px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 20px;">
                                                <table width="100%" cellpadding="0" cellspacing="0">
                                                    <tr>
                                                        <td style="padding-bottom: 16px; border-bottom: 1px dashed #cbd5e1;">
                                                            <p style="margin: 0; color: #64748b; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 4px;">Industry Vertical</p>
                                                            <span style="display: inline-block; padding: 4px 12px; background-color: #3994fa; color: #ffffff; border-radius: 8px; font-size: 13px; font-weight: 800;">${lead.industry}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding-top: 16px;">
                                                            <p style="margin: 0; color: #64748b; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px;">Budget Range</p>
                                                            <p style="margin: 0; color: #059669; font-size: 18px; font-weight: 800;">${lead.budget}</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                </table>

                                <!-- Contact Details Card -->
                                <div style="background-color: #ffffff; border-radius: 20px; border: 2px solid #f1f5f9; padding: 24px; margin-bottom: 40px;">
                                    <table width="100%" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td style="padding-bottom: 16px;">
                                                <p style="margin: 0 0 4px; color: #64748b; font-size: 11px; font-weight: 600;">Email Address</p>
                                                <a href="mailto:${lead.email}" style="color: #3b82f6; font-size: 16px; font-weight: 700; text-decoration: none;">${lead.email}</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p style="margin: 0 0 4px; color: #64748b; font-size: 11px; font-weight: 600;">Phone Number</p>
                                                <a href="tel:${lead.phone}" style="color: #0f172a; font-size: 20px; font-weight: 800; text-decoration: none; letter-spacing: -0.5px;">${lead.phone}</a>
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                                <!-- Action Footer -->
                                <table width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td style="padding-right: 10px;">
                                            <a href="https://wa.me/${whatsappPhone}" style="display: block; text-align: center; padding: 18px; background-color: #25d366; color: #ffffff; text-decoration: none; border-radius: 16px; font-size: 14px; font-weight: 800; letter-spacing: 0.5px;">
                                                WhatsApp Now 💬
                                            </a>
                                        </td>
                                        <td style="padding-left: 10px;">
                                            <a href="mailto:${lead.email}" style="display: block; text-align: center; padding: 18px; background-color: #0f172a; color: #ffffff; text-decoration: none; border-radius: 16px; font-size: 14px; font-weight: 800; letter-spacing: 0.5px;">
                                                Send Email 📧
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <!-- Footer Metadata -->
                            <div style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                                <p style="margin: 0; color: #94a3b8; font-size: 12px; font-weight: 500;">📍 Submitted on ${lead.submittedAt} IST</p>
                                <p style="margin: 8px 0 0; color: #cbd5e1; font-size: 11px;">Powered by Preet Tech Intelligence Systems</p>
                            </div>
                        </div>
                    </body>
                    </html>
                `
            };

            await transporter.sendMail(mailOptions);
            return true;
        } catch (error) {
            console.error('Nodemailer ECO lead notification error:', error);
            return false;
        }
    },

    // ─── Lead Thank You Email to User ─────────────────────────────────────────
    sendEcoLeadThankYouEmail: async (lead: { name: string; email: string; industry?: string; service?: string }) => {
        console.log(`[EmailService] Attempting to send thank you email to: ${lead.email}`);
        try {
            const isAppDev = lead.service === 'App Development';
            const serviceItem = isAppDev ? 'app' : 'website';

            // Find a sample website link for their industry
            const industrySample = portfolioItems.find(item =>
                item.category.toLowerCase() === (lead.industry || '').toLowerCase() &&
                item.link !== '#'
            );

            // Sanitized App URL for links
            const baseUrl = (process.env.NEXT_PUBLIC_APP_URL || 'https://preettech.com').replace(/\/$/, '');

            // Email clients cannot load localhost images. Force production domain or public fallback for the logo.
            const publicLogoUrl = baseUrl.includes('localhost')
                ? 'https://preettech.com/logo-preet-tech.png'
                : `${baseUrl}/logo-preet-tech.png`;

            const sampleContent = industrySample
                ? `
                <div style="background:#3994fa;border-radius:16px;padding:24px;margin-bottom:32px;text-align:center;">
                    <p style="margin:0;color:#ffffff;font-size:14px;font-weight:700;">Handpicked for you:</p>
                    <p style="margin:8px 0 16px;color:#ffffff;font-size:18px;font-weight:800;letter-spacing:-0.5px;">Check out this ${lead.industry} ${serviceItem} project</p>
                    <a href="${industrySample.link}" target="_blank" style="display:inline-block;background:#ffffff;color:#3994fa;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:13px;font-weight:800;">
                        View Industry Demo ✨
                    </a>
                </div>
                `
                : `
                <div style="background:#f1f5f9;border-radius:16px;padding:24px;margin-bottom:32px;text-align:left;">
                    <p style="margin:0;color:#0f172a;font-size:14px;font-weight:700;">Exploring your industry: ${lead.industry || 'General'}</p>
                    <p style="margin:8px 0 0;color:#64748b;font-size:13px;line-height:1.6;">
                        Since your industry is unique, we&apos;re preparing some custom design concepts for you. In the meantime, you can explore our full portfolio below.
                    </p>
                </div>
                `;

            const mailOptions = {
                from: process.env.EMAIL_FROM || '"Preet Tech" <hello@preettech.com>',
                to: lead.email,
                subject: `Thanks for reaching out! We'll be in touch soon 🚀`,
                html: `
                    <!DOCTYPE html>
                    <html>
                    <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
                    <body style="margin:0;padding:0;background:#f8fafc;font-family:'Segoe UI',Arial,sans-serif;">
                        <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
                            <tr><td align="center">
                                <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #e2e8f0;border-radius:24px;overflow:hidden;box-shadow:0 20px 25px -5px rgba(0,0,0,0.1);">
                                    <tr><td style="padding:48px 40px;text-align:center;">
                                        <!-- Brand Identity -->
                                        <div style="margin-bottom: 40px;">
                                            <img src="${publicLogoUrl}" alt="Preet Tech" style="height: 52px; width: auto; display: block; margin: 0 auto;">
                                        </div>
                                        <h1 style="margin:0;color:#0f172a;font-size:28px;font-weight:800;letter-spacing:-0.5px;">Hi ${lead.name},</h1>
                                        <p style="margin:16px 0 0;color:#475569;font-size:16px;line-height:1.6;font-weight:500;">
                                            Thanks for your interest in building an <strong>${serviceItem}</strong> with <strong>Preet Tech</strong>! We&apos;ve received your request for a consultation.
                                        </p>
                                        <p style="margin:16px 0 24px;color:#475569;font-size:16px;line-height:1.6;font-weight:500;">
                                            Our team is reviewing your details, and we&apos;ll get back to you within the next <strong>24 hours</strong> to discuss how we can help your business grow.
                                        </p>

                                        ${sampleContent}

                                        <div style="background:#f1f5f9;border-radius:16px;padding:24px;margin-bottom:32px;text-align:left;">
                                            <p style="margin:0;color:#0f172a;font-size:14px;font-weight:700;">What happens next?</p>
                                            <ul style="margin:12px 0 0;padding-left:20px;color:#64748b;font-size:13px;line-height:1.6;">
                                                <li>We review your business needs and industry benchmarks.</li>
                                                <li>A strategy expert will contact you via WhatsApp or Email.</li>
                                                <li>We share a custom project roadmap and timeline.</li>
                                            </ul>
                                        </div>
                                        <a href="${baseUrl}" style="display:inline-block;background:#3994fa;color:#ffffff;text-decoration:none;padding:16px 32px;border-radius:12px;font-size:14px;font-weight:800;letter-spacing:1px;">
                                            Visit Our Website
                                        </a>
                                    </td></tr>
                                    <tr><td style="background:#0f172a;padding:24px;text-align:center;">
                                        <p style="margin:0;color:#94a3b8;font-size:11px;">&copy; 2025 Preet Tech. All Rights Reserved.</p>
                                    </td></tr>
                                </table>
                            </td></tr>
                        </table>
                    </body>
                    </html>
                `
            };
            await transporter.sendMail(mailOptions);
            return true;
        } catch (error) {
            console.error('Nodemailer ECO thank you email error:', error);
            return false;
        }
    },
};
