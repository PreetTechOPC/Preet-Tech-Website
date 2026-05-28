'use server'

import nodemailer from 'nodemailer'

interface SendReceiptParams {
  to: string
  quoteId: string
  amount: string
  client: string
  paymentMethod: string
}

export async function sendPaymentReceiptEmail({ to, quoteId, amount, client, paymentMethod }: SendReceiptParams) {
  console.log(`[sendPaymentReceiptEmail] Preparing payment receipt email for: ${to}`)
  
  if (!to) {
    console.log('[sendPaymentReceiptEmail] No destination email provided. Skipping email sending.')
    return { success: false, error: 'No email address provided' }
  }

  try {
    // 1. Verify SMTP configuration
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      throw new Error('SMTP configuration parameters are missing in env.')
    }

    // 2. Initialize nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // 3. Format dynamic fields
    const formattedAmount = parseFloat(amount || '0').toLocaleString('en-IN', { minimumFractionDigits: 2 })
    const formattedDate = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
    
    const baseUrl = (process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000').replace(/\/$/, '')

    // 4. Construct beautiful HTML receipt
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Receipt</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;">
  <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 30px rgba(0,0,0,0.03);">
    
    <!-- Premium Header -->
    <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 40px; text-align: center;">
      <div style="display: inline-block; padding: 8px 16px; background-color: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 100px; margin-bottom: 16px;">
        <span style="color: #10b981; font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase;">Payment Received</span>
      </div>
      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">Thank You for Your Payment!</h1>
      <p style="margin: 10px 0 0; color: #94a3b8; font-size: 14px;">Preet Tech (OPC) Private Limited</p>
    </div>

    <!-- Receipt Details -->
    <div style="padding: 40px;">
      <div style="text-align: center; margin-bottom: 32px;">
        <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;">Amount Paid</p>
        <p style="margin: 8px 0 0; color: #0f172a; font-size: 42px; font-weight: 800; letter-spacing: -1px;">₹${formattedAmount}</p>
      </div>

      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 20px; padding: 24px; margin-bottom: 32px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
          <tr>
            <td style="padding-bottom: 12px; color: #64748b; font-size: 13px; font-weight: 500;">Invoice / Quotation ID</td>
            <td style="padding-bottom: 12px; text-align: right; color: #0f172a; font-size: 13px; font-weight: 700;">${quoteId}</td>
          </tr>
          <tr>
            <td style="padding-bottom: 12px; color: #64748b; font-size: 13px; font-weight: 500;">Client Name</td>
            <td style="padding-bottom: 12px; text-align: right; color: #0f172a; font-size: 13px; font-weight: 700;">${client}</td>
          </tr>
          <tr>
            <td style="padding-bottom: 12px; color: #64748b; font-size: 13px; font-weight: 500;">Date & Time</td>
            <td style="padding-bottom: 12px; text-align: right; color: #0f172a; font-size: 13px; font-weight: 700;">${formattedDate}</td>
          </tr>
          <tr>
            <td style="padding-top: 12px; border-top: 1px dashed #cbd5e1; color: #64748b; font-size: 13px; font-weight: 500;">Payment Method</td>
            <td style="padding-top: 12px; border-top: 1px dashed #cbd5e1; text-align: right; color: #0f172a; font-size: 13px; font-weight: 700; text-transform: uppercase;">${paymentMethod}</td>
          </tr>
        </table>
      </div>

      <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 16px; padding: 16px; text-align: center; margin-bottom: 32px;">
        <p style="margin: 0; color: #166534; font-size: 13px; font-weight: 600;">Your payment was securely processed and credited successfully.</p>
      </div>

      <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.6; text-align: center;">
        This payment confirmation receipt has been sent to your registered email address (<strong style="color: #0f172a;">${to}</strong>).
      </p>

      <div style="margin-top: 40px; text-align: center;">
        <a href="${baseUrl}" style="display: inline-block; background-color: #3b82f6; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 12px; font-size: 14px; font-weight: 700; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);">
          Visit Preet Tech
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
      <p style="margin: 0; color: #94a3b8; font-size: 12px;">© 2026 Preet Tech (OPC) Private Limited. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`

    const mailOptions = {
      from: process.env.EMAIL_FROM || '"Preet Tech" <hello@preettech.com>',
      to,
      subject: `Receipt for your payment to Preet Tech (OPC) 🧾 [${quoteId}]`,
      html: emailHtml,
    }

    console.log('[sendPaymentReceiptEmail] Dispatching receipt email...')
    const info = await transporter.sendMail(mailOptions)
    console.log('[sendPaymentReceiptEmail] Receipt email sent successfully:', info.messageId)

    return { success: true }
  } catch (error: any) {
    console.error('[sendPaymentReceiptEmail] Error sending receipt email:', error)
    return { success: false, error: error?.message || 'Unknown error occurred' }
  }
}
