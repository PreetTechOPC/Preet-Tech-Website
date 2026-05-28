import React from 'react'
import { Document, Page, Text, View, StyleSheet, Image, Font, Link } from '@react-pdf/renderer'
import { format } from 'date-fns'

// Define styles for the PDF to match the letterhead layout exactly.
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    position: 'relative',
    backgroundColor: '#ffffff',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  content: {
    paddingTop: 130, // Clear the top header
    paddingBottom: 130, // Clear the bottom wave and signature area
    paddingLeft: 50,
    paddingRight: 50,
  },
  // Document Title
  docTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 2,
    borderBottomColor: '#2D7EFF', // Preet Tech Blue
    paddingBottom: 8,
    marginBottom: 25,
  },
  docTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    letterSpacing: 1.5,
  },
  quoteNumberTop: {
    fontSize: 10,
    color: '#444444',
    fontWeight: 'bold',
  },
  
  // Info Grid
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 35,
  },
  infoBlock: {
    width: '48%',
  },
  infoLabel: {
    fontSize: 8,
    color: '#888888',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  clientName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 3,
  },
  clientDetails: {
    fontSize: 9,
    color: '#444444',
    lineHeight: 1.5,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  metaLabel: {
    fontSize: 9,
    color: '#666666',
  },
  metaValue: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'right',
  },

  // Table
  table: {
    width: '100%',
    marginBottom: 30,
  },
  tableHeaderRow: {
    flexDirection: 'row',
    backgroundColor: '#f1f5f9', // Very subtle slate background
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e1',
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  col1: { width: '40%' },
  col2: { width: '12%', textAlign: 'center' },
  col3: { width: '18%', textAlign: 'right' },
  col4: { width: '12%', textAlign: 'right' },
  col5: { width: '18%', textAlign: 'right' },
  tableHeader: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#475569',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  tableCellTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 3,
  },
  tableCellDesc: {
    fontSize: 8,
    color: '#64748b',
    lineHeight: 1.3,
  },
  tableCell: {
    fontSize: 9,
    color: '#334155',
    paddingTop: 1, 
  },
  tableCellBold: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#0f172a',
    paddingTop: 1,
  },

  // Totals Area
  summarySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  notesBox: {
    width: '55%',
    paddingRight: 20,
  },
  notesTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  notesText: {
    fontSize: 8,
    color: '#64748b',
    lineHeight: 1.6,
  },
  payLinkContainer: {
    marginTop: 15,
    backgroundColor: '#eff6ff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#bfdbfe',
    alignSelf: 'flex-start',
  },
  payLinkText: {
    fontSize: 9,
    color: '#1e40af',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  totalsBox: {
    width: '38%',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  grandTotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#94a3b8',
  },
  totalLabel: {
    fontSize: 9,
    color: '#475569',
  },
  totalValue: {
    fontSize: 9,
    color: '#0f172a',
    textAlign: 'right',
  },
  grandTotalLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#0f172a',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  grandTotalValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2D7EFF',
    textAlign: 'right',
  },

  // Signature
  footerSection: {
    position: 'absolute',
    bottom: 50, // Stick to the absolute bottom of the Page, above the wave
    left: 50,
    right: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  thankYou: {
    fontSize: 10,
    color: '#475569',
    fontWeight: 'bold',
  },
  signatureBox: {
    width: '45%',
    textAlign: 'center',
  },
  signatureLine: {
    borderTopWidth: 1,
    borderTopColor: '#94a3b8',
    paddingTop: 8,
  },
  signatureText: {
    fontSize: 8,
    color: '#475569',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  }
})

// Props match the state in CreateQuotationPage
export const QuotationPDF = ({ clientInfo, items, totals, letterheadSrc = '/letterhead.png' }: any) => {
  const quoteNumber = `PT-QTN-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`
  const quoteDate = format(new Date(), 'dd MMM yyyy')
  const validUntil = format(new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), 'dd MMM yyyy')

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* Letterhead Background Image */}
        <View style={styles.backgroundContainer} fixed>
          <Image src={letterheadSrc} style={styles.backgroundImage} />
        </View>

        {/* Main Content Area */}
        <View style={styles.content}>
          
          <View style={styles.docTitleContainer}>
            <Text style={styles.docTitle}>QUOTATION</Text>
            <Text style={styles.quoteNumberTop}>{quoteNumber}</Text>
          </View>
          
          <View style={styles.infoSection}>
            <View style={styles.infoBlock}>
              <Text style={styles.infoLabel}>Quotation For</Text>
              <Text style={styles.clientName}>{clientInfo.name || 'Client Name'}</Text>
              {clientInfo.company && <Text style={styles.clientDetails}>{clientInfo.company}</Text>}
              {clientInfo.gst && <Text style={styles.clientDetails}>GSTIN: {clientInfo.gst}</Text>}
              {clientInfo.address && <Text style={styles.clientDetails}>{clientInfo.address}</Text>}
              {clientInfo.phone && <Text style={styles.clientDetails}>{clientInfo.phone}</Text>}
              {clientInfo.email && <Text style={styles.clientDetails}>{clientInfo.email}</Text>}
            </View>
            
            <View style={styles.infoBlock}>
              <Text style={styles.infoLabel}>Quotation Details</Text>
              <View style={styles.metaRow}>
                <Text style={styles.metaLabel}>Date Issued:</Text>
                <Text style={styles.metaValue}>{quoteDate}</Text>
              </View>
              <View style={styles.metaRow}>
                <Text style={styles.metaLabel}>Valid Until:</Text>
                <Text style={styles.metaValue}>{validUntil}</Text>
              </View>
              <View style={styles.metaRow}>
                <Text style={styles.metaLabel}>Prepared By:</Text>
                <Text style={styles.metaValue}>Preet Tech (OPC) Pvt Ltd</Text>
              </View>
            </View>
          </View>

          {/* Table */}
          <View style={styles.table}>
            <View style={styles.tableHeaderRow}>
              <Text style={[styles.tableHeader, styles.col1]}>Service Description</Text>
              <Text style={[styles.tableHeader, styles.col2]}>Qty</Text>
              <Text style={[styles.tableHeader, styles.col3]}>Rate</Text>
              <Text style={[styles.tableHeader, styles.col4]}>Tax</Text>
              <Text style={[styles.tableHeader, styles.col5]}>Amount</Text>
            </View>

            {/* Table Rows */}
            {items.map((item: any) => {
              const amount = item.quantity * item.rate
              const discountAmt = amount * (item.discount / 100)
              const taxAmt = (amount - discountAmt) * (item.taxRate / 100)
              const lineTotal = amount - discountAmt + taxAmt

              return (
                <View key={item.id} style={styles.tableRow}>
                  <View style={styles.col1}>
                    <Text style={styles.tableCellTitle}>{item.serviceName || 'Service Item'}</Text>
                    {item.description && <Text style={styles.tableCellDesc}>{item.description}</Text>}
                  </View>
                  <Text style={[styles.tableCell, styles.col2]}>{item.quantity}</Text>
                  <Text style={[styles.tableCell, styles.col3]}>Rs. {item.rate.toFixed(2)}</Text>
                  <Text style={[styles.tableCell, styles.col4]}>{item.taxRate}%</Text>
                  <Text style={[styles.tableCellBold, styles.col5]}>Rs. {lineTotal.toFixed(2)}</Text>
                </View>
              )
            })}
          </View>

          {/* Bottom Summary Section */}
          <View style={styles.summarySection}>
            
            {/* Terms & Conditions */}
            <View style={styles.notesBox}>
              <Text style={styles.notesTitle}>Terms & Conditions</Text>
              <Text style={styles.notesText}>
                1. 50% advance payment required to initiate the project.{'\n'}
                2. Quotation is valid for 15 days from the date of issue.{'\n'}
                3. Final delivery upon receipt of remaining 50% payment.{'\n'}
                4. Domain and hosting charges are separate unless specified.{'\n'}
              </Text>

              <View style={styles.payLinkContainer}>
                <Link 
                  src={`${(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000').replace(/\/$/, '')}/pay/${quoteNumber}?amount=${totals.grandTotal}&client=${encodeURIComponent(clientInfo.company || clientInfo.name || 'Client')}&email=${encodeURIComponent(clientInfo.email || '')}`} 
                  style={styles.payLinkText}
                >
                  Click Here to Pay Online ↗
                </Link>
              </View>
            </View>

            {/* Totals */}
            <View style={styles.totalsBox}>
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Subtotal</Text>
                <Text style={styles.totalValue}>Rs. {totals.subtotal.toFixed(2)}</Text>
              </View>
              {totals.totalDiscount > 0 && (
                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>Discount</Text>
                  <Text style={styles.totalValue}>-Rs. {totals.totalDiscount.toFixed(2)}</Text>
                </View>
              )}
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Tax (GST)</Text>
                <Text style={styles.totalValue}>Rs. {totals.totalTax.toFixed(2)}</Text>
              </View>
              <View style={styles.grandTotalRow}>
                <Text style={styles.grandTotalLabel}>Grand Total</Text>
                <Text style={styles.grandTotalValue}>Rs. {totals.grandTotal.toFixed(2)}</Text>
              </View>
            </View>
            
          </View>

        </View>

        {/* Footer Signature Area - OUTSIDE OF CONTENT SO IT FIXES TO THE BOTTOM */}
        <View style={styles.footerSection} fixed>
          <Text style={styles.thankYou}>Thank you for choosing Preet Tech.</Text>
          <View style={styles.signatureBox}>
            <View style={styles.signatureLine}>
              <Text style={styles.signatureText}>For Preet Tech (OPC) Private Limited</Text>
            </View>
          </View>
        </View>

      </Page>
    </Document>
  )
}
