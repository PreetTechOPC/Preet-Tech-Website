import { Search, Filter, MoreHorizontal, Plus, Download, Eye, FileEdit, Trash2, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function QuotationsPage() {
  return (
    <div className="space-y-6 pb-8">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Quotations</h1>
          <p className="mt-1 text-slate-500">Manage, track, and create your client quotations.</p>
        </div>
        <Link 
          href="/dashboard/quotes/new"
          className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:shadow-md"
        >
          <Plus className="h-4 w-4" /> Create Quotation
        </Link>
      </div>

      {/* Main Content Card */}
      <div className="rounded-2xl border border-border/50 bg-white shadow-sm animate-in fade-in zoom-in-[0.98] duration-500 fill-mode-both">
        
        {/* Toolbar (Tabs, Search, Filter) */}
        <div className="flex flex-col gap-4 border-b border-border/50 p-5 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Status Tabs */}
          <div className="flex space-x-1 rounded-xl bg-slate-100/80 p-1">
            <button className="rounded-lg bg-white px-4 py-1.5 text-sm font-semibold text-slate-900 shadow-sm">All</button>
            <button className="rounded-lg px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 transition-colors">Drafts</button>
            <button className="rounded-lg px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 transition-colors">Sent</button>
            <button className="rounded-lg px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 transition-colors">Approved</button>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by client or ID..." 
                className="w-full sm:w-64 rounded-xl border border-border/60 bg-slate-50 py-2 pl-9 pr-4 text-sm transition-colors focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <button className="flex items-center gap-2 rounded-xl border border-border/60 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              <Filter className="h-4 w-4 text-slate-400" /> Filter
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50/80 text-xs uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-6 py-4 font-semibold">Quote Info</th>
                <th className="px-6 py-4 font-semibold">Client</th>
                <th className="px-6 py-4 font-semibold">Amount</th>
                <th className="px-6 py-4 font-semibold text-center">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {/* Dummy Data - Premium Styling */}
              {[
                { id: 'PT-QTN-2026-001', client: 'Acme Corp', contact: 'Alice Smith', date: 'May 21, 2026', amount: '₹45,000.00', status: 'Sent', sColor: 'bg-blue-100 text-blue-700' },
                { id: 'PT-QTN-2026-002', client: 'Global Tech Ltd.', contact: 'Bob Johnson', date: 'May 20, 2026', amount: '₹1,20,000.00', status: 'Approved', sColor: 'bg-emerald-100 text-emerald-700' },
                { id: 'PT-QTN-2026-003', client: 'Creative Solutions', contact: 'Carol Williams', date: 'May 19, 2026', amount: '₹15,000.00', status: 'Draft', sColor: 'bg-slate-100 text-slate-700' },
                { id: 'PT-QTN-2026-004', client: 'Nexus Systems', contact: 'David Brown', date: 'May 18, 2026', amount: '₹85,000.00', status: 'Approved', sColor: 'bg-emerald-100 text-emerald-700' },
                { id: 'PT-QTN-2026-005', client: 'Stark Industries', contact: 'Tony Stark', date: 'May 15, 2026', amount: '₹5,50,000.00', status: 'Draft', sColor: 'bg-slate-100 text-slate-700' },
              ].map((item, index) => (
                <tr 
                  key={item.id} 
                  className="group transition-colors hover:bg-slate-50/50 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <td className="px-6 py-4">
                    <p className="font-semibold text-indigo-600">{item.id}</p>
                    <div className="flex items-center gap-1 mt-1 text-xs text-slate-500">
                      <Calendar className="h-3 w-3" /> {item.date}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-900">{item.client}</p>
                    <p className="text-xs text-slate-500">{item.contact}</p>
                  </td>
                  <td className="px-6 py-4 font-semibold text-slate-900">
                    {item.amount}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${item.sColor}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors tooltip-trigger" title="Preview PDF">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors" title="Download PDF">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors" title="Edit">
                        <FileEdit className="h-4 w-4" />
                      </button>
                    </div>
                    {/* Fallback for when not hovered on mobile */}
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors group-hover:hidden">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination / Footer */}
        <div className="flex items-center justify-between border-t border-border/50 px-6 py-4 bg-slate-50/50 rounded-b-2xl">
          <p className="text-sm text-slate-500">Showing <span className="font-medium text-slate-900">1</span> to <span className="font-medium text-slate-900">5</span> of <span className="font-medium text-slate-900">124</span> results</p>
          <div className="flex gap-2">
            <button className="rounded-lg border border-border/60 bg-white px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
            <button className="rounded-lg border border-border/60 bg-white px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-50">Next</button>
          </div>
        </div>

      </div>
    </div>
  )
}
