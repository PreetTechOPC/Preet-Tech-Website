import Link from 'next/link'
import { Plus, PenTool, ExternalLink, Calendar, Tag } from 'lucide-react'
import { hygraphRequest } from '@/lib/hygraph'

export const dynamic = 'force-dynamic'

export default async function BlogsPage() {
  let blogPosts = []
  let error = null

  try {
    const query = `
      query GetBlogPosts {
        blogPosts(orderBy: createdAt_DESC) {
          id
          title
          slug
          category
          date
          readTime
          stage
        }
      }
    `
    const data = await hygraphRequest(query)
    blogPosts = data?.blogPosts || []
  } catch (e: any) {
    error = e.message
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <PenTool className="h-7 w-7 text-primary" />
            Blogs & Insights
          </h1>
          <p className="text-muted-foreground mt-1">Manage articles, industry insights, and news for Preet Tech.</p>
        </div>
        <Link 
          href="/dashboard/blogs/new"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
        >
          <Plus className="h-4 w-4" /> Add Blog Post
        </Link>
      </div>

      {error ? (
        <div className="rounded-xl border border-rose-500/20 bg-rose-500/10 p-4">
          <p className="text-sm font-bold text-rose-600">Error connecting to Hygraph: {error}</p>
          <p className="text-xs text-rose-500 mt-2">
            This usually means the `BlogPost` model does not exist in Hygraph yet, or has different fields.
          </p>
          <div className="mt-4 bg-black/30 p-3 rounded-lg text-xs font-mono text-muted-foreground text-left overflow-x-auto space-y-1">
            <p className="text-foreground font-semibold">Suggested Fix: Create a model named 'BlogPost' in Hygraph with fields:</p>
            <p>• title: String!</p>
            <p>• slug: String! (Unique)</p>
            <p>• excerpt: String</p>
            <p>• content: String!</p>
            <p>• category: String</p>
            <p>• date: String</p>
            <p>• readTime: String</p>
            <p>• featuredImage: String</p>
            <p>• tags: [String!]</p>
            <p>• seoTitle: String</p>
            <p>• seoDescription: String</p>
            <p>• seoKeywords: String</p>
          </div>
        </div>
      ) : blogPosts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/60 bg-muted/20 py-24">
          <PenTool className="h-12 w-12 text-muted-foreground/30 mb-4" />
          <h3 className="text-lg font-medium text-foreground">No blog posts found</h3>
          <p className="text-sm text-muted-foreground mt-1 mb-6 max-w-sm text-center">Write and publish your first article to share tech insights with the world.</p>
          <Link 
            href="/dashboard/blogs/new"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
          >
            Create New Post
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border/60 bg-muted/30">
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Title</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Category</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Published Date</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Read Time</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {blogPosts.map((post: any) => (
                  <tr key={post.id} className="transition-colors hover:bg-muted/10">
                    <td className="p-4">
                      <div className="font-bold text-foreground text-sm max-w-md truncate">{post.title}</div>
                      <div className="text-xs text-muted-foreground font-mono mt-0.5">/{post.slug}</div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        <Tag className="h-3.5 w-3.5" />
                        {post.category || 'General'}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date || 'Draft'}
                      </div>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{post.readTime || 'N/A'}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600">
                        {post.stage}
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
