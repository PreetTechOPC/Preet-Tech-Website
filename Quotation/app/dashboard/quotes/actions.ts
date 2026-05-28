'use server'

import nodemailer from 'nodemailer'
import React from 'react'
import { renderToBuffer } from '@react-pdf/renderer'
import { QuotationPDF } from '@/components/QuotationPDF'
import path from 'path'

interface SendEmailParams {
  to: string
  subject: string
  body: string
  clientInfo: any
  items: any[]
  totals: any
}

export async function sendQuotationEmail({ to, subject, body, clientInfo, items, totals }: SendEmailParams) {
  console.log(`[sendQuotationEmail] Initiating email sending to: ${to}`)
  try {
    // 1. Check if SMTP configuration exists
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      throw new Error('SMTP configuration parameters are missing in env.')
    }

    // 2. Prepare SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // 3. Resolve letterhead path on server for PDF generation
    const letterheadSrc = path.join(process.cwd(), 'public', 'letterhead.png')
    console.log(`[sendQuotationEmail] Resolved letterhead path: ${letterheadSrc}`)

    // 4. Generate PDF Buffer using react-pdf/renderer on the server
    const pdfElement = React.createElement(QuotationPDF, {
      clientInfo,
      items,
      totals,
      letterheadSrc,
    })
    console.log('[sendQuotationEmail] Rendering PDF to buffer...')
    const pdfBuffer = await renderToBuffer(pdfElement)
    console.log('[sendQuotationEmail] PDF buffer rendered successfully')

    // 5. Send the email with the attachment
    const pdfFilename = `Quotation_${clientInfo.company ? clientInfo.company.replace(/[^a-zA-Z0-9]/g, '') : 'PreetTech'}.pdf`

    const mailOptions = {
      from: process.env.EMAIL_FROM || '"Preet Tech" <hello@preettech.com>',
      to,
      subject,
      text: body, // plaintext fallback
      html: body.replace(/\n/g, '<br>'), // simple conversion to html
      attachments: [
        {
          filename: pdfFilename,
          content: pdfBuffer,
          contentType: 'application/pdf',
        },
      ],
    }

    console.log('[sendQuotationEmail] Dispatching mail via nodemailer...')
    const info = await transporter.sendMail(mailOptions)
    console.log('[sendQuotationEmail] Email sent successfully:', info.messageId)

    return { success: true }
  } catch (error: any) {
    console.error('[sendQuotationEmail] Error sending email:', error)
    return { success: false, error: error?.message || 'Unknown error occurred' }
  }
}
