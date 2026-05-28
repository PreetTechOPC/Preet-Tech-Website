import { FileText, CheckCircle, Clock, TrendingUp, Plus, Users, ArrowRight, Activity, DollarSign } from 'lucide-react'
import Link from 'next/link'

// Premium stats for the dashboard
const stats = [
  {
    title: 'Total Revenue',
    value: '₹12,45,000',
    change: '+24.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-500/10',
  },
  {
    title: 'Total Quotations',
    value: '124',
    change: '+12%',
    trend: 'up',
    icon: FileText,
    color: 'text-blue-600',
    bgColor: 'bg-blue-500/10',
  },
  {
    title: 'Approved Quotes',
    value: '86',
    change: '+8.2%',
    trend: 'up',
    icon: CheckCircle,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-500/10',
  },
  {
    title: 'Pending Approval',
    value: '23',
    change: '-2.4%',
    trend: 'down',
    icon: Clock,
    color: 'text-amber-600',
    bgColor: 'bg-amber-500/10',
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-8">
      {/* Hero Welcome Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-lg">
        <div className="absolute -right-10 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-blue-100 mb-2">
              <Activity className="h-4 w-4" />
              <span className="text-sm font-medium uppercase tracking-wider">Business Overview</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Welcome back, Preet Tech</h1>
            <p className="text-blue-100 text-lg">Here's a summary of your agency's quotation pipeline and revenue today.</p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Link href="/dashboard/quotes/new" className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-indigo-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md">
              <Plus className="h-4 w-4" />
              New Quotation
            </Link>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-border"
          >
            <div className="flex items-center justify-between">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${stat.trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                {stat.trend === 'up' ? '+' : ''}{stat.change}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-muted-foreground">{stat.title}</h3>
              <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Two Column Layout for Tables & Actions */}
      <div className="grid gap-6 lg:grid-cols-3">
        
        {/* Recent Quotations Table */}
        <div className="col-span-1 flex flex-col rounded-2xl border border-border/50 bg-white shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between border-b border-border/50 px-6 py-5">
            <h2 className="text-lg font-bold text-slate-900">Recent Quotations</h2>
            <Link href="/dashboard/quotes" className="group flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700">
              View all <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50/80 text-xs uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-semibold">Quote Ref</th>
                  <th className="px-6 py-4 font-semibold">Client</th>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold text-right">Amount</th>
                  <th className="px-6 py-4 font-semibold text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {[
                  { ref: 'PT-2026-001', client: 'Acme Corp', date: 'May 21', amount: '₹45,000', status: 'Sent', sColor: 'bg-blue-100 text-blue-700' },
                  { ref: 'PT-2026-002', client: 'Global Tech', date: 'May 20', amount: '₹1,20,000', status: 'Approved', sColor: 'bg-emerald-100 text-emerald-700' },
                  { ref: 'PT-2026-003', client: 'Creative Solutions', date: 'May 19', amount: '₹15,000', status: 'Draft', sColor: 'bg-slate-100 text-slate-700' },
                  { ref: 'PT-2026-004', client: 'Nexus Systems', date: 'May 18', amount: '₹85,000', status: 'Approved', sColor: 'bg-emerald-100 text-emerald-700' },
                ].map((item) => (
                  <tr key={item.ref} className="transition-colors hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-medium text-slate-900">{item.ref}</td>
                    <td className="px-6 py-4 text-slate-600">{item.client}</td>
                    <td className="px-6 py-4 text-slate-500">{item.date}</td>
                    <td className="px-6 py-4 text-right font-medium text-slate-900">{item.amount}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${item.sColor}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Quick Actions & Activity */}
        <div className="col-span-1 flex flex-col gap-6">
          <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-bold text-slate-900">Quick Actions</h2>
            <div className="flex flex-col gap-3">
              <Link href="/dashboard/quotes/new" className="group flex items-center gap-4 rounded-xl border border-border/50 bg-slate-50 p-4 transition-all hover:border-indigo-200 hover:bg-indigo-50 hover:shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Plus className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">New Quotation</p>
                  <p className="text-xs text-slate-500">Create a branded quote</p>
                </div>
              </Link>
              <Link href="/dashboard/clients" className="group flex items-center gap-4 rounded-xl border border-border/50 bg-slate-50 p-4 transition-all hover:border-blue-200 hover:bg-blue-50 hover:shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Manage Clients</p>
                  <p className="text-xs text-slate-500">View client database</p>
                </div>
              </Link>
            </div>
          </div>
          
          {/* A mini illustration or tip box to fill space beautifully */}
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10 blur-xl"></div>
            <h3 className="text-lg font-bold mb-2">Pro Tip</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Add predefined services in your settings to generate quotations 3x faster for common agency packages.
            </p>
            <button className="text-sm font-semibold text-indigo-300 hover:text-indigo-200 flex items-center gap-1">
              Go to Settings <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}
