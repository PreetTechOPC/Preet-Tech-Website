'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, FileText, Users, Settings, LogOut, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Create Quotation', href: '/dashboard/quotes/new', icon: Plus },
  { name: 'Quotations', href: '/dashboard/quotes', icon: FileText },
  { name: 'Clients', href: '/dashboard/clients', icon: Users },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

import { PenTool, Briefcase, Wrench, MessageSquare } from 'lucide-react'

const cmsNavItems = [
  { name: 'Blogs', href: '/dashboard/blogs', icon: PenTool },
  { name: 'Case Studies', href: '/dashboard/case-studies', icon: Briefcase },
  { name: 'Business Tools', href: '/dashboard/tools', icon: Wrench },
  { name: 'Testimonials', href: '/dashboard/testimonials', icon: MessageSquare },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col border-r border-border bg-card px-4 py-6 shadow-sm">
      <div className="mb-8 flex items-center justify-center">
        {/* Placeholder for Preet Tech Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-bold text-white shadow-md">
            PT
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Quotation <span className="text-primary">Maker</span>
          </span>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-muted-foreground group-hover:text-accent-foreground")} />
              {item.name}
            </Link>
          )
        })}
        
        <div className="mt-4 mb-1 px-3">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70">Website Content</p>
        </div>
        
        {cmsNavItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
          const Icon = item.icon
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-muted-foreground group-hover:text-accent-foreground")} />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto border-t border-border pt-4">
        <button 
          onClick={async () => {
            const { createClient } = await import('@/utils/supabase/client')
            const supabase = createClient()
            await supabase.auth.signOut()
            window.location.href = '/'
          }}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-destructive/10 hover:text-destructive"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  )
}
