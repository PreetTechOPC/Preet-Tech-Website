'use client'

import Link from 'next/link'
import { ArrowLeft, Briefcase, AlertCircle, Sparkles, BarChart3 } from 'lucide-react'
import { createCaseStudy } from '../actions'
import { useActionState, useState } from 'react'
import ContentEditor from '@/components/ContentEditor'

const CATEGORIES = [
  "Performance Marketing",
  "App Development",
  "Software",
  "Content",
  "Partnerships",
  "Business Tools",
  "Web Design",
  "AI & Tech",
  "Vibe Coders",
  "E-Commerce"
]

export default function NewCaseStudyPage() {
  const [state, formAction, isPending] = useActionState(createCaseStudy, null)
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')

  // Automatically generate slugs
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setTitle(val)
    const generatedSlug = val
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_]+/g, '-')
      .replace(/^-+|-+$/g, '')
    setSlug(generatedSlug)
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4">
        <Link 
          href="/dashboard/case-studies"
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-card text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            Create Case Study
          </h1>
          <p className="text-sm text-muted-foreground">Publish project success stories and customer ROI reports to your website.</p>
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

          {/* Title and Slug */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Case Study Title</label>
              <input 
                name="title"
                required
                value={title}
                onChange={handleTitleChange}
                placeholder="E-Commerce Scale-up Case"
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                URL Slug
                <span className="text-[10px] lowercase text-muted-foreground/70">(auto-generated)</span>
              </label>
              <input 
                name="slug"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="ecommerce-scale-up-case"
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
              />
            </div>
          </div>

          {/* Client & Category */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Client Name / Company</label>
              <input 
                name="client"
                placeholder="e.g. Acme Corp"
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Category</label>
              <select 
                name="category"
                className="w-full rounded-xl border border-border/60 bg-card px-3 py-2.5 text-sm transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Excerpt */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Excerpt / Summary</label>
            <input 
              name="excerpt"
              placeholder="How we drove 10x ROI for Acme Corp by modernizing their cloud architecture..."
              className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
            />
          </div>

          {/* Content Body */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Strategy & Execution details (HTML/Markdown)</label>
            <ContentEditor 
              name="content"
              required
              rows={14}
              placeholder="<h2>The Challenge</h2><p>Acme Corp was struggling with site load times...</p>"
              defaultValue={`<h2>The Challenge</h2>\n<p>Acme Corp was struggling with site load times...</p>`}
            />
          </div>

          {/* Key Metrics / Stats */}
          <div className="border-t border-border/60 pt-6">
            <h3 className="text-sm font-bold text-foreground mb-4 flex items-center gap-1.5">
              <BarChart3 className="h-4 w-4 text-primary" />
              Key Project Metrics (Up to 3)
            </h3>
            
            <div className="grid gap-4 sm:grid-cols-3">
              {/* Stat 1 */}
              <div className="space-y-3 p-4 rounded-xl border border-border/60 bg-muted/5">
                <p className="text-xs font-bold text-primary">Metric 1</p>
                <div className="space-y-2">
                  <input 
                    name="stat1Value"
                    placeholder="e.g. +300%"
                    className="w-full rounded-lg border border-border/60 bg-muted/10 px-2.5 py-1.5 text-xs transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
                  />
                  <input 
                    name="stat1Label"
                    placeholder="e.g. Traffic Growth"
                    className="w-full rounded-lg border border-border/60 bg-muted/10 px-2.5 py-1.5 text-xs transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
                  />
                </div>
              </div>
              
              {/* Stat 2 */}
              <div className="space-y-3 p-4 rounded-xl border border-border/60 bg-muted/5">
                <p className="text-xs font-bold text-primary">Metric 2</p>
                <div className="space-y-2">
                  <input 
                    name="stat2Value"
                    placeholder="e.g. 10x"
                    className="w-full rounded-lg border border-border/60 bg-muted/10 px-2.5 py-1.5 text-xs transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
                  />
                  <input 
                    name="stat2Label"
                    placeholder="e.g. ROI"
                    className="w-full rounded-lg border border-border/60 bg-muted/10 px-2.5 py-1.5 text-xs transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
                  />
                </div>
              </div>

              {/* Stat 3 */}
              <div className="space-y-3 p-4 rounded-xl border border-border/60 bg-muted/5">
                <p className="text-xs font-bold text-primary">Metric 3</p>
                <div className="space-y-2">
                  <input 
                    name="stat3Value"
                    placeholder="e.g. 2.4s"
                    className="w-full rounded-lg border border-border/60 bg-muted/10 px-2.5 py-1.5 text-xs transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
                  />
                  <input 
                    name="stat3Label"
                    placeholder="e.g. Load Time Saved"
                    className="w-full rounded-lg border border-border/60 bg-muted/10 px-2.5 py-1.5 text-xs transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Configs */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Featured Image URL</label>
              <input 
                name="featuredImage"
                placeholder="/images/services/software-development.png"
                defaultValue="/images/services/software-development.png"
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tags (comma-separated)</label>
              <input 
                name="tags"
                placeholder="Case Study, Cloud, AWS"
                defaultValue="Case Study"
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
              />
            </div>
          </div>

          {/* SEO Details */}
          <div className="border-t border-border/60 pt-6">
            <h3 className="text-sm font-bold text-foreground mb-4 flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-primary" />
              SEO Configurations
            </h3>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2 col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">SEO Title</label>
                <input 
                  name="seoTitle"
                  placeholder="Acme Corp Cloud Scaling case study | Preet Tech"
                  className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
                />
              </div>

              <div className="space-y-2 col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">SEO Description</label>
                <textarea 
                  name="seoDescription"
                  rows={2}
                  placeholder="Describe your case study accurately for search engines..."
                  className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner resize-none"
                />
              </div>

              <div className="space-y-2 col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">SEO Keywords (comma-separated)</label>
                <input 
                  name="seoKeywords"
                  placeholder="case study, optimization, scale"
                  className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end border-t border-border/60 pt-6">
            <button 
              type="submit"
              disabled={isPending}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:pointer-events-none"
            >
              <Briefcase className="h-4 w-4" /> {isPending ? 'Publishing...' : 'Publish Case Study'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
