import Link from 'next/link'
import { Plus, MessageSquare, ExternalLink } from 'lucide-react'
import { hygraphRequest } from '@/lib/hygraph'

export const dynamic = 'force-dynamic'

export default async function TestimonialsPage() {
  let testimonials = []
  let error = null

  try {
    const query = `
      query GetTestimonials {
        testimonials(orderBy: createdAt_DESC) {
          id
          authorName
          company
          quote
          stage
        }
      }
    `
    const data = await hygraphRequest(query)
    testimonials = data?.testimonials || []
  } catch (e: any) {
    error = e.message
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <MessageSquare className="h-7 w-7 text-primary" />
            Testimonials
          </h1>
          <p className="text-muted-foreground mt-1">Manage client reviews directly connected to your Hygraph CMS.</p>
        </div>
        <Link 
          href="/dashboard/testimonials/new"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
        >
          <Plus className="h-4 w-4" /> Add Testimonial
        </Link>
      </div>

      {error ? (
        <div className="rounded-xl border border-rose-500/20 bg-rose-500/10 p-4">
          <p className="text-sm font-bold text-rose-600">Error connecting to Hygraph: {error}</p>
          <p className="text-xs text-rose-500 mt-2">Make sure your endpoint and token are correct, and the `Testimonial` model exists in Hygraph with `authorName`, `company`, and `quote` fields.</p>
        </div>
      ) : testimonials.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/60 bg-muted/20 py-24">
          <MessageSquare className="h-12 w-12 text-muted-foreground/30 mb-4" />
          <h3 className="text-lg font-medium text-foreground">No testimonials found</h3>
          <p className="text-sm text-muted-foreground mt-1 mb-6 max-w-sm text-center">Add your first client testimonial to display on the Preet Tech website.</p>
          <Link 
            href="/dashboard/testimonials/new"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
          >
            Create New
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t: any) => (
            <div key={t.id} className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-all hover:shadow-md">
              <div className="flex justify-between items-start mb-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {t.authorName.charAt(0)}
                </div>
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600">
                  {t.stage}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3 italic">"{t.quote}"</p>
              <div>
                <p className="font-bold text-foreground text-sm">{t.authorName}</p>
                <p className="text-xs text-muted-foreground">{t.company || 'Client'}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
