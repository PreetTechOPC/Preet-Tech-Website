'use client'

import Link from 'next/link'
import { ArrowLeft, MessageSquare, AlertCircle } from 'lucide-react'
import { createTestimonial } from '../actions'
import { useActionState } from 'react'

export default function NewTestimonialPage() {
  const [state, formAction, isPending] = useActionState(createTestimonial, null)

  return (
    <div className="mx-auto max-w-2xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4">
        <Link 
          href="/dashboard/testimonials"
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-card text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            Add Testimonial
          </h1>
          <p className="text-sm text-muted-foreground">Publish a new client review to your website via Hygraph.</p>
        </div>
      </div>

      <div className="rounded-2xl border border-border/60 bg-card shadow-sm">
        <form action={formAction} className="space-y-6 p-6">
          {state?.error && (
            <div className="rounded-xl border border-rose-500/20 bg-rose-500/10 p-4 flex gap-3 items-start">
              <AlertCircle className="h-5 w-5 text-rose-600 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-rose-600">Hygraph API Error</p>
                <p className="text-xs text-rose-500 mt-1">{state.error}</p>
                {state.error.includes('permission') && (
                  <p className="text-xs text-rose-500 mt-2 font-semibold">
                    Fix: In Hygraph, go to Project Settings &gt; Permanent Auth Tokens &gt; Content API, and check the "Create" mutation box.
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Author Name</label>
              <input 
                name="authorName"
                required
                placeholder="Jane Doe"
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Company</label>
              <input 
                name="company"
                placeholder="Acme Corp"
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Quote / Review</label>
            <textarea 
              name="quote"
              required
              rows={5}
              placeholder="Preet Tech transformed our digital presence..."
              className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner resize-none"
            />
          </div>

          <div className="flex justify-end border-t border-border/60 pt-6">
            <button 
              type="submit"
              disabled={isPending}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:pointer-events-none"
            >
              <MessageSquare className="h-4 w-4" /> {isPending ? 'Publishing...' : 'Publish to Website'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
