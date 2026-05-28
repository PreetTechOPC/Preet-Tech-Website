'use client'

import { useState, useEffect } from 'react'
import { Plus, Trash2, Save, FileText, Printer, Download, User, Building, Mail, Phone, MapPin, Receipt, ChevronRight, Hash, X, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid'
import dynamic from 'next/dynamic'
import { QuotationPDF } from '@/components/QuotationPDF'
import { cn } from '@/lib/utils'
import { sendQuotationEmail } from '../actions'

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <div className="h-full w-full bg-white"></div>,
  }
)

interface QuotationItem {
  id: string
  serviceName: string
  description: string
  quantity: number
  rate: number
  discount: number
  taxRate: number
}

interface ClientInfo {
  name: string
  company: string
  email: string
  phone: string
  address: string
  gst: string
}

export default function CreateQuotationPage() {
  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    name: '', company: '', email: '', phone: '', address: '', gst: ''
  })
  
  const [items, setItems] = useState<QuotationItem[]>([
    { id: 'initial-item-1', serviceName: '', description: '', quantity: 1, rate: 0, discount: 0, taxRate: 18 }
  ])

  // Modal states
  const [isFinalizeModalOpen, setIsFinalizeModalOpen] = useState(false)

  // Calculation logic
  const calculateTotals = (itemsList: QuotationItem[]) => {
    let subtotal = 0
    let totalDiscount = 0
    let totalTax = 0

    itemsList.forEach(item => {
      const amount = item.quantity * item.rate
      const discountAmount = amount * (item.discount / 100)
      const afterDiscount = amount - discountAmount
      const taxAmount = afterDiscount * (item.taxRate / 100)

      subtotal += amount
      totalDiscount += discountAmount
      totalTax += taxAmount
    })

    return {
      subtotal,
      totalDiscount,
      totalTax,
      grandTotal: subtotal - totalDiscount + totalTax
    }
  }

  const totals = calculateTotals(items)

  const handleAddItem = () => {
    setItems([...items, { id: uuidv4(), serviceName: '', description: '', quantity: 1, rate: 0, discount: 0, taxRate: 18 }])
  }

  const handleRemoveItem = (id: string) => {
    setItems(items.filter(item => item.id !== id))
  }

  const handleItemChange = (id: string, field: keyof QuotationItem, value: any) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item))
  }

  // Debounce state for PDF to prevent extreme lag during typing
  const [debouncedClientInfo, setDebouncedClientInfo] = useState(clientInfo)
  const [debouncedItems, setDebouncedItems] = useState(items)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedClientInfo(clientInfo)
      setDebouncedItems(items)
    }, 800) // Only update PDF 800ms after user stops typing
    
    return () => {
      clearTimeout(handler)
    }
  }, [clientInfo, items])

  const debouncedTotals = calculateTotals(debouncedItems)

  return (
    <div className="flex flex-col gap-8 lg:flex-row xl:h-[calc(100vh-6rem)]">
      {/* Left Column: Form Controls */}
      <div className="flex w-full flex-col gap-6 lg:w-1/2 xl:w-7/12 overflow-y-auto pr-2 pb-10 scrollbar-hide">
        <div className="flex items-center justify-between sticky top-0 z-10 bg-background/80 backdrop-blur-md pb-4 pt-2 border-b border-border/50">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">New Quotation</h1>
            <p className="text-sm text-muted-foreground">Fill in the details to generate</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium shadow-sm transition-all hover:bg-muted hover:shadow">
              <Save className="h-4 w-4" /> Save Draft
            </button>
            <button 
              onClick={() => setIsFinalizeModalOpen(true)}
              className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
            >
              <ChevronRight className="h-4 w-4" /> Finalize
            </button>
          </div>
        </div>

        {/* Client Info Section */}
        <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-md">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-600">
              <User className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">Client Details</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="group relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <User className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              </div>
              <input 
                type="text" 
                value={clientInfo.name}
                onChange={(e) => setClientInfo({...clientInfo, name: e.target.value})}
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 pl-10 text-sm transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" 
                placeholder="Client Full Name" 
              />
            </div>
            <div className="group relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Building className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              </div>
              <input 
                type="text" 
                value={clientInfo.company}
                onChange={(e) => setClientInfo({...clientInfo, company: e.target.value})}
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 pl-10 text-sm transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" 
                placeholder="Company Name" 
              />
            </div>
            <div className="group relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Mail className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              </div>
              <input 
                type="email" 
                value={clientInfo.email}
                onChange={(e) => setClientInfo({...clientInfo, email: e.target.value})}
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 pl-10 text-sm transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" 
                placeholder="Email Address" 
              />
            </div>
            <div className="group relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Phone className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              </div>
              <input 
                type="tel" 
                value={clientInfo.phone}
                onChange={(e) => setClientInfo({...clientInfo, phone: e.target.value})}
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 pl-10 text-sm transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" 
                placeholder="Phone Number" 
              />
            </div>
            <div className="group relative sm:col-span-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Hash className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              </div>
              <input 
                type="text" 
                value={clientInfo.gst}
                onChange={(e) => setClientInfo({...clientInfo, gst: e.target.value.toUpperCase()})}
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 pl-10 text-sm transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" 
                placeholder="Client GSTIN (Optional)" 
              />
            </div>
            <div className="group relative sm:col-span-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex pt-3 pl-3">
                <MapPin className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              </div>
              <textarea 
                value={clientInfo.address}
                onChange={(e) => setClientInfo({...clientInfo, address: e.target.value})}
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 pl-10 text-sm transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" 
                placeholder="Full Billing Address"
                rows={2}
              />
            </div>
          </div>
        </div>

        {/* Services & Pricing Section */}
        <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-md">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-600">
                <Receipt className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Services & Pricing</h2>
            </div>
          </div>
          
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={item.id} className="group relative rounded-xl border border-border/40 bg-background p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
                {items.length > 1 && (
                  <button 
                    onClick={() => handleRemoveItem(item.id)}
                    className="absolute -right-2 -top-2 rounded-full bg-destructive/10 p-1.5 text-destructive opacity-0 backdrop-blur-sm transition-all hover:bg-destructive hover:text-white group-hover:opacity-100 shadow-sm"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                  <div className="space-y-1.5 md:col-span-12">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Service Description</label>
                    <input 
                      type="text" 
                      value={item.serviceName}
                      onChange={(e) => handleItemChange(item.id, 'serviceName', e.target.value)}
                      className="w-full rounded-lg border-transparent bg-muted/20 px-3 py-2 text-sm font-medium text-foreground transition-colors placeholder:font-normal focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary" 
                      placeholder="E.g., Advanced Website Development"
                      list={`services-list-${item.id}`}
                    />
                    <datalist id={`services-list-${item.id}`}>
                      <option value="Advanced Website Development" />
                      <option value="Eco Website Development" />
                      <option value="E-Commerce Development" />
                      <option value="Software Development" />
                      <option value="App Development (iOS/Android)" />
                      <option value="SaaS Development" />
                      <option value="CRM & ERP Systems" />
                      <option value="AI Solutions" />
                      <option value="Social Media Handling" />
                      <option value="Performance Marketing" />
                      <option value="Partnership Marketing" />
                      <option value="Content Creation" />
                      <option value="Business Tools" />
                      <option value="Onboarding Mentors" />
                      <option value="Party Dial" />
                      <option value="Start Your Business Package" />
                    </datalist>
                  </div>
                  <div className="space-y-1.5 md:col-span-3">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Quantity</label>
                    <input 
                      type="number" 
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                      className="w-full rounded-lg border-transparent bg-muted/20 px-3 py-2 text-sm transition-colors focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary" 
                    />
                  </div>
                  <div className="space-y-1.5 md:col-span-3">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Rate (₹)</label>
                    <input 
                      type="number" 
                      value={item.rate}
                      onChange={(e) => handleItemChange(item.id, 'rate', parseFloat(e.target.value) || 0)}
                      className="w-full rounded-lg border-transparent bg-muted/20 px-3 py-2 text-sm transition-colors focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary" 
                    />
                  </div>
                  <div className="space-y-1.5 md:col-span-3">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Discount %</label>
                    <input 
                      type="number" 
                      value={item.discount}
                      onChange={(e) => handleItemChange(item.id, 'discount', parseFloat(e.target.value) || 0)}
                      className="w-full rounded-lg border-transparent bg-muted/20 px-3 py-2 text-sm transition-colors focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary" 
                    />
                  </div>
                  <div className="space-y-1.5 md:col-span-3">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Tax (GST) %</label>
                    <input 
                      type="number" 
                      value={item.taxRate}
                      onChange={(e) => handleItemChange(item.id, 'taxRate', parseFloat(e.target.value) || 0)}
                      className="w-full rounded-lg border-transparent bg-muted/20 px-3 py-2 text-sm transition-colors focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={handleAddItem}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-primary/50 bg-primary/5 px-4 py-3 text-sm font-medium text-primary transition-all hover:border-primary hover:bg-primary/10"
          >
            <Plus className="h-4 w-4" /> Add Another Service
          </button>

          {/* Premium Totals Box */}
          <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50">
            <div className="p-6">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground font-medium">Subtotal</span>
                  <span className="font-semibold text-foreground">₹{totals.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground font-medium">Total Discount</span>
                  <span className="font-semibold text-green-600">-₹{totals.totalDiscount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground font-medium">Estimated Tax (GST)</span>
                  <span className="font-semibold text-foreground">₹{totals.totalTax.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="bg-primary px-6 py-4">
              <div className="flex items-center justify-between text-primary-foreground">
                <span className="text-lg font-medium opacity-90">Grand Total</span>
                <span className="text-2xl font-bold tracking-tight">₹{totals.grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Live Preview Panel */}
      <div className="flex w-full flex-col lg:w-1/2 xl:w-5/12 h-full min-h-[600px] rounded-2xl border border-border/60 bg-muted/20 p-2 shadow-inner">
        <div className="mb-2 flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Live PDF Preview</h2>
          </div>
        </div>
        
        {/* PDF Preview Container */}
        <div className="flex-1 w-full overflow-hidden rounded-xl border border-border/40 bg-white shadow-lg">
          <PDFViewer width="100%" height="100%" className="border-none">
            <QuotationPDF clientInfo={debouncedClientInfo} items={debouncedItems} totals={debouncedTotals} />
          </PDFViewer>
        </div>
      </div>

      {/* Send Email Modal */}
      <SendEmailModal 
        isOpen={isFinalizeModalOpen} 
        onClose={() => setIsFinalizeModalOpen(false)} 
        clientInfo={clientInfo} 
        items={items}
        totals={totals}
      />
    </div>
  )
}

function SendEmailModal({ 
  isOpen, 
  onClose, 
  clientInfo,
  items,
  totals
}: { 
  isOpen: boolean
  onClose: () => void
  clientInfo: ClientInfo
  items: QuotationItem[]
  totals: any
}) {
  const [emailMessage, setEmailMessage] = useState('')
  const [subject, setSubject] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })

  // Initialize and reset states when modal is opened
  useEffect(() => {
    if (isOpen) {
      setEmailMessage(`Hi ${clientInfo.name || 'Client'},\n\nPlease find attached the quotation for the requested digital services.\n\nLooking forward to working with you!\n\nBest regards,\nPreet Tech (OPC) Private Limited`)
      setSubject(`Quotation from Preet Tech for ${clientInfo.company || clientInfo.name || 'Digital Services'}`)
      setStatus({ type: null, message: '' })
      setIsLoading(false)
    }
  }, [isOpen, clientInfo])

  if (!isOpen) return null

  const handleSendEmail = async () => {
    if (!clientInfo.email) {
      setStatus({ type: 'error', message: 'Client email is required. Please edit client details and enter an email address.' })
      return
    }

    setIsLoading(true)
    setStatus({ type: null, message: '' })

    try {
      const response = await sendQuotationEmail({
        to: clientInfo.email,
        subject,
        body: emailMessage,
        clientInfo,
        items,
        totals
      })

      if (response.success) {
        setStatus({ type: 'success', message: 'Quotation email has been successfully sent to the client!' })
        setTimeout(() => {
          onClose()
        }, 2200)
      } else {
        setStatus({ type: 'error', message: response.error || 'Failed to send email. Please check configuration.' })
      }
    } catch (err: any) {
      console.error('Send email error:', err)
      setStatus({ type: 'error', message: err?.message || 'An unexpected error occurred while sending.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8 animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          disabled={isLoading}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-50"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Send className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground">Send Quotation</h2>
            <p className="text-sm text-muted-foreground">Review and send email directly to your client.</p>
          </div>
        </div>

        {status.type && (
          <div className={cn(
            "mb-4 flex items-start gap-3 rounded-xl p-4 text-sm border",
            status.type === 'success' 
              ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" 
              : "bg-destructive/10 text-destructive border-destructive/20"
          )}>
            {status.type === 'success' ? (
              <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-semibold">{status.type === 'success' ? 'Success' : 'Error'}</p>
              <p className="opacity-90">{status.message}</p>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">To</label>
            <div className="flex w-full items-center rounded-xl border border-border bg-muted/20 px-3 py-2.5 text-sm font-medium text-foreground">
              {clientInfo.email || <span className="italic text-muted-foreground font-normal">No email provided</span>}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subject</label>
            <input 
              type="text" 
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              disabled={isLoading}
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-60"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Message</label>
            <textarea 
              value={emailMessage}
              onChange={(e) => setEmailMessage(e.target.value)}
              disabled={isLoading}
              className="w-full rounded-xl border border-border bg-background px-3 py-3 text-sm transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-60"
              rows={5}
            />
          </div>
          
          {/* Attachment Box */}
          <div className="space-y-1.5 pt-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Attachments</label>
            <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-600">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="truncate text-sm font-medium text-foreground">
                  Quotation_{clientInfo.company ? clientInfo.company.replace(/[^a-zA-Z0-9]/g, '') : 'PreetTech'}.pdf
                </p>
                <p className="text-xs text-muted-foreground">PDF Document</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button 
            onClick={onClose}
            disabled={isLoading}
            className="rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-50"
          >
            Cancel
          </button>
          <button 
            onClick={handleSendEmail}
            disabled={isLoading}
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-md transition-all hover:bg-primary/90 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg className="h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Send Email
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
