import Link from 'next/link'
import { Plus, Wrench, Tag, DollarSign, Activity } from 'lucide-react'
import { hygraphRequest } from '@/lib/hygraph'

export const dynamic = 'force-dynamic'

export default async function ToolsPage() {
  let businessTools = []
  let error = null

  try {
    const query = `
      query GetBusinessTools {
        businessTools(orderBy: createdAt_DESC) {
          id
          name
          variant
          duration
          category
          originalPrice
          discountPrice
          status
          stage
        }
      }
    `
    const data = await hygraphRequest(query)
    businessTools = data?.businessTools || []
  } catch (e: any) {
    error = e.message
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Wrench className="h-7 w-7 text-primary" />
            Business Tools
          </h1>
          <p className="text-muted-foreground mt-1">Manage subscription products, SaaS variants, pricing, and discount offers.</p>
        </div>
        <Link 
          href="/dashboard/tools/new"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
        >
          <Plus className="h-4 w-4" /> Add Business Tool
        </Link>
      </div>

      {error ? (
        <div className="rounded-xl border border-rose-500/20 bg-rose-500/10 p-4">
          <p className="text-sm font-bold text-rose-600">Error connecting to Hygraph: {error}</p>
          <p className="text-xs text-rose-500 mt-2">
            This usually means the `BusinessTool` model does not exist in Hygraph yet, or has different fields.
          </p>
          <div className="mt-4 bg-black/30 p-3 rounded-lg text-xs font-mono text-muted-foreground text-left overflow-x-auto space-y-1">
            <p className="text-foreground font-semibold">Suggested Fix: Create a model named 'BusinessTool' in Hygraph with fields:</p>
            <p>• name: String!</p>
            <p>• variant: String!</p>
            <p>• duration: String!</p>
            <p>• category: String!</p>
            <p>• description: String!</p>
            <p>• originalPrice: String!</p>
            <p>• discountPrice: String!</p>
            <p>• discountBadge: String!</p>
            <p>• badge: String</p>
            <p>• status: String!</p>
          </div>
        </div>
      ) : businessTools.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/60 bg-muted/20 py-24">
          <Wrench className="h-12 w-12 text-muted-foreground/30 mb-4" />
          <h3 className="text-lg font-medium text-foreground">No business tools found</h3>
          <p className="text-sm text-muted-foreground mt-1 mb-6 max-w-sm text-center">List premium developer resources, AI systems, and SaaS discount subscription packages.</p>
          <Link 
            href="/dashboard/tools/new"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
          >
            Add First Tool
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border/60 bg-muted/30">
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Tool Name & Variant</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Category</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Duration</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Pricing</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">App Status</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">CMS Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {businessTools.map((tool: any) => (
                  <tr key={tool.id} className="transition-colors hover:bg-muted/10">
                    <td className="p-4">
                      <div className="font-bold text-foreground text-sm max-w-md truncate">{tool.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{tool.variant}</div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        <Tag className="h-3.5 w-3.5" />
                        {tool.category || 'Tools'}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{tool.duration}</td>
                    <td className="p-4">
                      <div className="flex items-center text-sm font-bold text-foreground">
                        <DollarSign className="h-3.5 w-3.5 text-muted-foreground" />
                        {tool.discountPrice}
                        <span className="text-xs text-muted-foreground line-through ml-1.5 font-normal">
                          ${tool.originalPrice}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        tool.status === 'Active' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'
                      }`}>
                        <Activity className="h-3 w-3" />
                        {tool.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600">
                        {tool.stage}
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
