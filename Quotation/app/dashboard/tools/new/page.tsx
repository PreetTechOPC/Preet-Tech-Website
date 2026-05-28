'use client'

import Link from 'next/link'
import { ArrowLeft, Wrench, AlertCircle, Sparkles } from 'lucide-react'
import { createTool } from '../actions'
import { useActionState } from 'react'

const TOOL_CATEGORIES = [
  "🔥 New & Premium",
  "⭐ Top Selling",
  "🎓 Career / Education",
  "⚡ Developer Utilities",
  "💼 Productivity Systems"
]

export default function NewToolPage() {
  const [state, formAction, isPending] = useActionState(createTool, null)

  return (
    <div className="mx-auto max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4">
        <Link 
          href="/dashboard/tools"
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-card text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            Add Business Tool
          </h1>
          <p className="text-sm text-muted-foreground">List premium developer utilities, AI credits packages, and SaaS memberships.</p>
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
                    Fix: Verify your Permanent Auth Token permissions in Hygraph Settings.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Name and Variant */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tool Name</label>
              <input 
                name="name"
                required
                placeholder="e.g. CodeRabbit"
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Variant Name</label>
              <input 
                name="variant"
                required
                placeholder="e.g. CodeRabbit Pro"
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
              />
            </div>
          </div>

          {/* Category & Duration */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Category</label>
              <select 
                name="category"
                className="w-full rounded-xl border border-border/60 bg-card px-3 py-2.5 text-sm transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
              >
                {TOOL_CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Duration</label>
              <input 
                name="duration"
                required
                placeholder="e.g. 1M, 1Y, Lifetime, 50K Credits"
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Description</label>
            <textarea 
              name="description"
              required
              rows={4}
              placeholder="Provide a compelling description of the software membership, seats count, credits details, etc..."
              className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner resize-none"
            />
          </div>

          {/* Pricing Grid */}
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Original Price (numerical value)</label>
              <input 
                name="originalPrice"
                required
                placeholder="e.g. 199"
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Discounted Price (numerical value)</label>
              <input 
                name="discountPrice"
                required
                placeholder="e.g. 29"
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Discount Percentage Badge</label>
              <input 
                name="discountBadge"
                placeholder="e.g. 85% OFF"
                defaultValue="85% OFF"
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
              />
            </div>
          </div>

          {/* Status & Highlights */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Highlight Badge (Optional)</label>
              <input 
                name="badge"
                placeholder="e.g. Trending, Hot, New"
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Status</label>
              <select 
                name="status"
                className="w-full rounded-xl border border-border/60 bg-card px-3 py-2.5 text-sm transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
              >
                <option value="Active">Active / In Stock</option>
                <option value="Inactive">Inactive / Out of Stock</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end border-t border-border/60 pt-6">
            <button 
              type="submit"
              disabled={isPending}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:pointer-events-none"
            >
              <Wrench className="h-4 w-4" /> {isPending ? 'Publishing...' : 'Publish Business Tool'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
