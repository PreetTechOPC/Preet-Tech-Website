import { login } from './login/actions'
import { ArrowRight, ShieldCheck, Mail, Lock, Sparkles } from 'lucide-react'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function Home(props: { searchParams: Promise<{ message?: string }> }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/dashboard/quotes')
  }

  const searchParams = await props.searchParams
  const message = searchParams?.message

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-black font-sans selection:bg-indigo-500/30">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] h-[50vh] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[60vw] h-[40vh] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[420px] px-6">
        
        {/* Logo & Header */}
        <div className="mb-8 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-500 shadow-xl shadow-indigo-500/20 ring-1 ring-white/10">
            <Sparkles className="absolute -top-3 -right-3 h-6 w-6 text-indigo-300 animate-pulse" />
            <span className="text-2xl font-black tracking-tighter text-white">PT</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Preet Tech</h1>
          <p className="mt-3 text-sm text-zinc-400">Sign in to your Quotation Dashboard</p>
        </div>

        {/* The Glass Card */}
        <div className="relative overflow-hidden rounded-3xl bg-zinc-950/50 p-8 shadow-2xl ring-1 ring-white/10 animate-in fade-in zoom-in-95 duration-700 delay-150 fill-mode-both">
          
          {/* Subtle top border glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

          {/* Error Message */}
          {message && (
            <div className="mb-6 rounded-xl border border-rose-500/20 bg-rose-500/10 p-3 flex items-center justify-center">
              <p className="text-xs font-semibold text-rose-400">{message}</p>
            </div>
          )}

          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500 transition-colors group-focus-within:text-indigo-400" />
                <input 
                  name="email"
                  type="email" 
                  placeholder="name@company.com" 
                  required
                  className="w-full rounded-xl border border-white/5 bg-black/40 py-3.5 pl-12 pr-4 text-sm font-medium text-white transition-all placeholder:text-zinc-600 focus:border-indigo-500/50 focus:bg-indigo-500/5 focus:outline-none focus:ring-1 focus:ring-indigo-500/50" 
                  style={{ colorScheme: 'dark' }}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Password</label>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500 transition-colors group-focus-within:text-indigo-400" />
                <input 
                  name="password"
                  type="password" 
                  placeholder="••••••••" 
                  required
                  className="w-full rounded-xl border border-white/5 bg-black/40 py-3.5 pl-12 pr-4 text-sm font-medium text-white transition-all placeholder:text-zinc-600 focus:border-indigo-500/50 focus:bg-indigo-500/5 focus:outline-none focus:ring-1 focus:ring-indigo-500/50" 
                  style={{ colorScheme: 'dark' }}
                />
              </div>
            </div>

            <div className="pt-4">
              <button 
                formAction={login}
                className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3.5 text-sm font-bold text-black transition-all hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Sign In 
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>

        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-medium text-zinc-500 animate-in fade-in duration-1000 delay-300 fill-mode-both">
          <ShieldCheck className="h-4 w-4" /> Securely powered by Supabase
        </div>

      </div>
    </div>
  )
}
