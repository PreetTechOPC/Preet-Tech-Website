'use client'

import Link from 'next/link'
import { ArrowLeft, PenTool, AlertCircle, Sparkles } from 'lucide-react'
import { createBlog } from '../actions'
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

export default function NewBlogPage() {
  const [state, formAction, isPending] = useActionState(createBlog, null)
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')

  // Automatically generate slugs
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setTitle(val)
    // Convert to slug: lowercase, replace spaces and special chars with hyphens
    const generatedSlug = val
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // remove non-alphanumeric (except spaces/hyphens)
      .replace(/[\s_]+/g, '-') // replace spaces/underscores with hyphens
      .replace(/^-+|-+$/g, '') // remove leading/trailing hyphens
    setSlug(generatedSlug)
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4">
        <Link 
          href="/dashboard/blogs"
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-card text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            Create Blog Post
          </h1>
          <p className="text-sm text-muted-foreground">Publish articles and intelligence updates to the Preet Tech website.</p>
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
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Article Title</label>
              <input 
                name="title"
                required
                value={title}
                onChange={handleTitleChange}
                placeholder="Scaling SaaS Companies in 2026"
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
                placeholder="scaling-saas-companies-2026"
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Excerpt / Summary</label>
            <input 
              name="excerpt"
              placeholder="A brief overview of the growth methodologies used to scale subscription models..."
              className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
            />
          </div>

          {/* Content Body */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Content (Rich Text / HTML)</label>
            <ContentEditor 
              name="content"
              required
              rows={14}
              placeholder="<h2>Introduction</h2><p>Provide your insights here...</p>"
              defaultValue={`<h2>Introduction</h2>\n<p>Provide your insights here...</p>`}
            />
          </div>

          {/* Metadata Grid */}
          <div className="grid gap-6 sm:grid-cols-3">
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
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Read Time</label>
              <input 
                name="readTime"
                placeholder="5 min read"
                defaultValue="5 min read"
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Featured Image URL</label>
              <input 
                name="featuredImage"
                placeholder="/images/services/software-development.png"
                defaultValue="/images/services/software-development.png"
                className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tags (comma-separated)</label>
            <input 
              name="tags"
              placeholder="SaaS, Growth, AI"
              className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
            />
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
                  placeholder="Recommended length: under 60 characters"
                  className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
                />
              </div>

              <div className="space-y-2 col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">SEO Description</label>
                <textarea 
                  name="seoDescription"
                  rows={2}
                  placeholder="Describe your article content accurately for search engines..."
                  className="w-full rounded-xl border border-border/60 bg-muted/10 px-3 py-2.5 text-sm transition-all focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary shadow-inner resize-none"
                />
              </div>

              <div className="space-y-2 col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">SEO Keywords (comma-separated)</label>
                <input 
                  name="seoKeywords"
                  placeholder="tech, saas, coding"
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
              <PenTool className="h-4 w-4" /> {isPending ? 'Publishing...' : 'Publish Blog Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
