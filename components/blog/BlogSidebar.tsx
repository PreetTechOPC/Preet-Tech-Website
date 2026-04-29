"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Mail, ArrowRight, TrendingUp } from 'lucide-react';
import { BLOG_POSTS, CATEGORIES } from '@/lib/blog-data';

export default function BlogSidebar() {
    const recentPosts = BLOG_POSTS.slice(0, 3);

    const [subscribeEmail, setSubscribeEmail] = useState('');
    const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [subscribeMessage, setSubscribeMessage] = useState('');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubscribeStatus('loading');
        setSubscribeMessage('');

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: subscribeEmail })
            });

            const data = await response.json();

            if (data.success) {
                setSubscribeStatus('success');
                setSubscribeEmail('');
                setSubscribeMessage(data.message || 'Subscription successful!');
                setTimeout(() => {
                    setSubscribeStatus('idle');
                    setSubscribeMessage('');
                }, 5000);
            } else {
                setSubscribeStatus('error');
                setSubscribeMessage(data.message || 'Something went wrong.');
            }
        } catch (err) {
            setSubscribeStatus('error');
            setSubscribeMessage('Network Error. Please try again.');
        }
    };

    return (
        <aside className="space-y-8 sticky top-32">

            {/* Search Bar */}
            <div className="bg-white dark:bg-[#0d1120] border border-slate-200 dark:border-white/10 p-5 rounded-2xl shadow-sm">
                <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-slate-700 dark:text-white">Search</h3>
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3994fa] w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search insights..."
                        className="w-full h-11 pl-11 pr-4 rounded-xl bg-slate-50 dark:bg-[#1a2035] border border-slate-200 dark:border-white/10 focus:border-[#3994fa] focus:ring-2 focus:ring-[#3994fa]/10 outline-none transition-all text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    />
                </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white dark:bg-[#0d1120] border border-slate-200 dark:border-white/10 p-5 rounded-2xl shadow-sm">
                <h3 className="text-xs font-black uppercase tracking-widest mb-5 flex items-center gap-2 text-slate-700 dark:text-white">
                    <TrendingUp className="w-4 h-4 text-[#3994fa]" />
                    Latest Posts
                </h3>
                <div className="space-y-4">
                    {recentPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className="group flex gap-3 items-start">
                            <div className="w-16 h-16 rounded-xl shrink-0 overflow-hidden relative bg-slate-100 dark:bg-[#1a2035] border border-slate-200 dark:border-white/10">
                                <Image
                                    src={post.featuredImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="64px"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-bold leading-snug text-slate-800 dark:text-white group-hover:text-[#3994fa] transition-colors line-clamp-2">
                                    {post.title}
                                </h4>
                                <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-wider mt-1.5 block">
                                    {post.date}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Categories */}
            <div className="bg-white dark:bg-[#0d1120] border border-slate-200 dark:border-white/10 p-5 rounded-2xl shadow-sm">
                <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-slate-700 dark:text-white">All Categories</h3>
                <div className="space-y-1">
                    {CATEGORIES.map((cat) => (
                        <Link
                            key={cat}
                            href={`/blog?category=${cat.replace(/\s+/g, '-').toLowerCase()}`}
                            className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group"
                        >
                            <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-[#3994fa] transition-colors font-medium">
                                {cat}
                            </span>
                            <span className="text-xs font-bold text-slate-400 dark:text-slate-600 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-full">
                                {BLOG_POSTS.filter(p => p.category === cat).length}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white dark:bg-[#0d1120] border border-slate-200 dark:border-[#3994fa]/20 p-6 rounded-2xl shadow-sm relative overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3994fa] to-[#004aad] rounded-t-2xl" />
                <div className="relative z-10 pt-2">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 rounded-lg bg-[#3994fa]/10 flex items-center justify-center">
                            <Mail className="w-3.5 h-3.5 text-[#3994fa]" />
                        </div>
                        <h3 className="text-sm font-black text-slate-800 dark:text-white tracking-tight">Growth Insights Weekly</h3>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-5">
                        Join 5,000+ founders getting our best growth strategies every week.
                    </p>
                    <form onSubmit={handleSubscribe} className="space-y-2.5">
                        <input
                            type="email"
                            placeholder="Email address"
                            value={subscribeEmail}
                            onChange={(e) => setSubscribeEmail(e.target.value)}
                            required
                            disabled={subscribeStatus === 'loading'}
                            className="w-full h-11 px-4 rounded-xl bg-slate-50 dark:bg-[#1a2035] border border-slate-200 dark:border-white/10 focus:border-[#3994fa] focus:ring-2 focus:ring-[#3994fa]/10 outline-none transition-all text-sm text-slate-800 dark:text-white placeholder:text-slate-400 disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={subscribeStatus === 'loading'}
                            className="w-full h-11 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:opacity-90 hover:shadow-lg hover:shadow-[#3994fa]/20 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {subscribeStatus === 'loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE NOW'}
                        </button>
                        {subscribeMessage && (
                            <p className={`text-xs mt-1 font-bold ${subscribeStatus === 'success' ? 'text-[#3994fa]' : 'text-red-500'}`}>
                                {subscribeMessage}
                            </p>
                        )}
                    </form>
                </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-[#3994fa] to-[#004aad] text-white p-6 rounded-2xl relative overflow-hidden shadow-lg shadow-[#3994fa]/20">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 blur-[40px] rounded-full pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none" />
                <div className="relative z-10">
                    <h3 className="text-lg font-black mb-2 leading-tight">Ready to Scale Your Digital Presence?</h3>
                    <p className="text-white/70 text-xs mb-5 leading-relaxed">
                        Book a free discovery call with our experts today.
                    </p>
                    <Link
                        href="/contact"
                        className="w-full py-3 bg-white text-[#3994fa] rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/90 transition-all active:scale-95 shadow-md"
                    >
                        Book Free Strategy Call <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>

        </aside>
    );
}
