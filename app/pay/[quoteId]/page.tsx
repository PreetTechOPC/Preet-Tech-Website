'use client'

import { useState, useEffect, Suspense } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import { CreditCard, Smartphone, CheckCircle2, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { sendPaymentReceiptEmail } from '@/app/pay/actions'

function CheckoutContent() {
  const params = useParams()
  const searchParams = useSearchParams()
  const quoteId = params.quoteId as string
  
  const [amount, setAmount] = useState('0')
  const [client, setClient] = useState('Client')
  const [email, setEmail] = useState('')
  
  useEffect(() => {
    setAmount(searchParams.get('amount') || '0')
    setClient(searchParams.get('client') || 'Client')
    setEmail(searchParams.get('email') || '')
  }, [searchParams])

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('card')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate API delay
    setTimeout(async () => {
      setIsProcessing(false)
      setIsSuccess(true)
      
      // Fire and forget email receipt sending
      if (email) {
        try {
          await sendPaymentReceiptEmail({
            to: email,
            quoteId,
            amount,
            client,
            paymentMethod
          })
        } catch (error) {
          console.error('[CheckoutContent] Failed to dispatch receipt email:', error)
        }
      }
    }, 2000)
  }

  if (isSuccess) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4 font-sans">
        <div className="w-full max-w-md overflow-hidden rounded-3xl bg-white p-8 text-center shadow-2xl shadow-indigo-100 animate-in zoom-in-95 duration-500">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-emerald-500">
            <CheckCircle2 className="h-12 w-12 animate-in zoom-in spin-in-12 duration-700" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Payment Successful!</h2>
          <p className="mt-4 text-slate-500">Thank you for your business. Your payment of <strong className="text-slate-900">₹{parseFloat(amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</strong> for Invoice {quoteId} has been successfully processed.</p>
          {email && (
            <p className="mt-2 text-sm text-slate-500">
              A copy of the payment receipt has been dispatched to <strong className="text-slate-600">{email}</strong>.
            </p>
          )}
          <div className="mt-10">
            <Link href="/" className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:shadow-indigo-600/40">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-blue-50 p-4 font-sans sm:p-8">
      
      {/* Brand Header */}
      <div className="mb-8 flex flex-col items-center animate-in slide-in-from-top-4 duration-700">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 shadow-xl shadow-indigo-600/30">
          <span className="text-xl font-bold text-white tracking-tighter">PT</span>
        </div>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">Preet Tech (OPC)</h1>
        <p className="text-sm font-medium text-slate-500">Secure Payment Checkout</p>
      </div>

      <div className="w-full max-w-4xl overflow-hidden rounded-[2.5rem] bg-white/80 backdrop-blur-2xl shadow-2xl shadow-slate-200/50 ring-1 ring-border/50 lg:flex animate-in fade-in zoom-in-95 duration-500">
        
        {/* Left Side: Order Summary */}
        <div className="bg-slate-900 p-8 text-white lg:w-5/12 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">Order Summary</p>
          <h2 className="mt-2 text-3xl font-light tracking-tight">{client}</h2>
          
          <div className="mt-12 space-y-6">
            <div className="flex justify-between border-b border-slate-700/50 pb-6 text-sm">
              <span className="text-slate-400">Quotation ID</span>
              <span className="font-semibold">{quoteId}</span>
            </div>
            <div className="flex justify-between border-b border-slate-700/50 pb-6 text-sm">
              <span className="text-slate-400">Date</span>
              <span className="font-semibold">{new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric'})}</span>
            </div>
            <div className="flex items-end justify-between pt-4">
              <span className="text-lg text-slate-300">Total Amount</span>
              <span className="text-4xl font-bold tracking-tighter">₹{parseFloat(amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
            </div>
          </div>

          <div className="mt-16 flex items-center gap-3 rounded-2xl bg-white/5 p-4 text-sm text-slate-300 ring-1 ring-white/10">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            <p>Your payment is 100% secure and encrypted.</p>
          </div>
        </div>

        {/* Right Side: Payment Methods */}
        <div className="p-8 lg:w-7/12 lg:p-12">
          <h3 className="text-xl font-bold text-slate-900">Select Payment Method</h3>
          
          <div className="mt-6 grid grid-cols-2 gap-4">
            <button 
              onClick={() => setPaymentMethod('card')}
              className={`flex flex-col items-center gap-3 rounded-2xl border-2 p-4 transition-all ${paymentMethod === 'card' ? 'border-indigo-600 bg-indigo-50/50 text-indigo-700' : 'border-border/60 bg-white text-slate-600 hover:border-border hover:bg-slate-50'}`}
            >
              <CreditCard className="h-6 w-6" />
              <span className="text-sm font-semibold">Credit Card</span>
            </button>
            <button 
              onClick={() => setPaymentMethod('upi')}
              className={`flex flex-col items-center gap-3 rounded-2xl border-2 p-4 transition-all ${paymentMethod === 'upi' ? 'border-indigo-600 bg-indigo-50/50 text-indigo-700' : 'border-border/60 bg-white text-slate-600 hover:border-border hover:bg-slate-50'}`}
            >
              <Smartphone className="h-6 w-6" />
              <span className="text-sm font-semibold">UPI / Apps</span>
            </button>
          </div>

          <form onSubmit={handlePay} className="mt-8 space-y-5">
            {paymentMethod === 'card' ? (
              <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Card Number</label>
                  <input type="text" placeholder="0000 0000 0000 0000" required className="w-full rounded-xl border border-border/80 bg-white px-4 py-3.5 text-sm font-medium tracking-widest text-slate-900 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Expiry</label>
                    <input type="text" placeholder="MM/YY" required className="w-full rounded-xl border border-border/80 bg-white px-4 py-3.5 text-sm font-medium text-slate-900 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">CVC</label>
                    <input type="text" placeholder="123" required className="w-full rounded-xl border border-border/80 bg-white px-4 py-3.5 text-sm font-medium text-slate-900 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Cardholder Name</label>
                  <input type="text" placeholder="John Doe" required className="w-full rounded-xl border border-border/80 bg-white px-4 py-3.5 text-sm font-medium text-slate-900 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                </div>
              </div>
            ) : (
              <div className="space-y-5 animate-in fade-in slide-in-from-left-4 duration-300">
                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-6 text-center">
                  <Smartphone className="mx-auto h-12 w-12 text-indigo-500" />
                  <h4 className="mt-4 font-bold text-indigo-900">Scan to Pay via UPI</h4>
                  <p className="mt-2 text-sm text-indigo-700/80">Use Google Pay, PhonePe, Paytm or any UPI app to scan and complete your payment.</p>
                  <div className="mx-auto mt-6 h-40 w-40 rounded-xl bg-white p-2 shadow-sm ring-1 ring-border/50">
                    <div className="h-full w-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg')] bg-cover bg-center opacity-80" style={{ filter: 'grayscale(100%) brightness(80%) sepia(100%) hue-rotate(200deg) saturate(300%) contrast(150%)' }}></div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Or Enter UPI ID</label>
                  <input type="text" placeholder="username@upi" className="w-full rounded-xl border border-border/80 bg-white px-4 py-3.5 text-sm font-medium text-slate-900 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                </div>
              </div>
            )}

            {/* Receipt Email Address */}
            <div className="space-y-1.5 pt-2 animate-in fade-in duration-300">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Receipt Email Address</label>
              <input 
                type="email" 
                placeholder="client@example.com" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-border/80 bg-white px-4 py-3.5 text-sm font-medium text-slate-900 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" 
              />
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-4 text-sm font-bold tracking-wide text-white shadow-xl shadow-indigo-600/30 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-2xl hover:shadow-indigo-600/40 disabled:pointer-events-none disabled:opacity-70"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Processing Payment...
                </>
              ) : (
                <>
                  Pay ₹{parseFloat(amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })} <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-slate-50"><Loader2 className="h-8 w-8 animate-spin text-indigo-600" /></div>}>
      <CheckoutContent />
    </Suspense>
  )
}
