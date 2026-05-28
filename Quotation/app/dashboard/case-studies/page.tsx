import Link from 'next/link'
import { Plus, Briefcase, Calendar, Tag, BarChart3 } from 'lucide-react'
import { hygraphRequest } from '@/lib/hygraph'

export const dynamic = 'force-dynamic'

export default async function CaseStudiesPage() {
  let caseStudies = []
  let error = null

  try {
    const query = `
      query GetCaseStudies {
        caseStudies(orderBy: createdAt_DESC) {
          id
          title
          slug
          client
          category
          stat1Label
          stat1Value
          stage
        }
      }
    `
    const data = await hygraphRequest(query)
    caseStudies = data?.caseStudies || []
  } catch (e: any) {
    error = e.message
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Briefcase className="h-7 w-7 text-primary" />
            Case Studies
          </h1>
          <p className="text-muted-foreground mt-1">Manage project success stories, customer achievements, and growth metrics.</p>
        </div>
        <Link 
          href="/dashboard/case-studies/new"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
        >
          <Plus className="h-4 w-4" /> Add Case Study
        </Link>
      </div>

      {error ? (
        <div className="rounded-xl border border-rose-500/20 bg-rose-500/10 p-4">
          <p className="text-sm font-bold text-rose-600">Error connecting to Hygraph: {error}</p>
          <p className="text-xs text-rose-500 mt-2">
            This usually means the `CaseStudy` model does not exist in Hygraph yet, or has different fields.
          </p>
          <div className="mt-4 bg-black/30 p-3 rounded-lg text-xs font-mono text-muted-foreground text-left overflow-x-auto space-y-1">
            <p className="text-foreground font-semibold">Suggested Fix: Create a model named 'CaseStudy' in Hygraph with fields:</p>
            <p>• title: String!</p>
            <p>• slug: String! (Unique)</p>
            <p>• client: String</p>
            <p>• excerpt: String</p>
            <p>• content: String!</p>
            <p>• category: String</p>
            <p>• featuredImage: String</p>
            <p>• tags: [String!]</p>
            <p>• stat1Label: String, stat1Value: String</p>
            <p>• stat2Label: String, stat2Value: String</p>
            <p>• stat3Label: String, stat3Value: String</p>
            <p>• seoTitle: String</p>
            <p>• seoDescription: String</p>
            <p>• seoKeywords: String</p>
          </div>
        </div>
      ) : caseStudies.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/60 bg-muted/20 py-24">
          <Briefcase className="h-12 w-12 text-muted-foreground/30 mb-4" />
          <h3 className="text-lg font-medium text-foreground">No case studies found</h3>
          <p className="text-sm text-muted-foreground mt-1 mb-6 max-w-sm text-center">Add your first case study to showcase customer success and technical prowess.</p>
          <Link 
            href="/dashboard/case-studies/new"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
          >
            Create Case Study
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border/60 bg-muted/30">
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Client & Project</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Category</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Primary Metric</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {caseStudies.map((cs: any) => (
                  <tr key={cs.id} className="transition-colors hover:bg-muted/10">
                    <td className="p-4">
                      <div className="font-bold text-foreground text-sm max-w-md truncate">{cs.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Client: {cs.client}</div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        <Tag className="h-3.5 w-3.5" />
                        {cs.category || 'General'}
                      </span>
                    </td>
                    <td className="p-4">
                      {cs.stat1Value && cs.stat1Label ? (
                        <div className="flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                          <BarChart3 className="h-4 w-4" />
                          <span>{cs.stat1Value} {cs.stat1Label}</span>
                        </div>
                      ) : (
                        <span className="text-xs text-muted-foreground">No metrics set</span>
                      )}
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600">
                        {cs.stage}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
