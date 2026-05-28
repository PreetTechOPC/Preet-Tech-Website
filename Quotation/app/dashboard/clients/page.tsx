import { Search, Plus, MoreVertical } from 'lucide-react'

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Clients</h1>
          <p className="mt-1 text-muted-foreground">Manage your client database and history.</p>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          <Plus className="h-4 w-4" /> Add Client
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="p-4 border-b border-border">
          <div className="relative max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search clients..." 
              className="w-full rounded-md border border-border bg-background py-2 pl-9 pr-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-muted-foreground">
            <thead className="border-b border-border bg-muted/50 text-xs uppercase text-foreground">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Company</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">Total Quotes</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {/* Dummy Data */}
              {[1, 2, 3].map((i) => (
                <tr key={i} className="transition-colors hover:bg-muted/50">
                  <td className="px-6 py-4 font-medium text-foreground">John Doe {i}</td>
                  <td className="px-6 py-4">Acme Corp {i}</td>
                  <td className="px-6 py-4">john{i}@acmecorp.com</td>
                  <td className="px-6 py-4">{i * 2}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-muted-foreground hover:text-foreground">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
