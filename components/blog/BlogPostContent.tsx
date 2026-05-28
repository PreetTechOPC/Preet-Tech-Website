"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Share2, ChevronRight, ArrowRight, Twitter, Linkedin, Facebook, Rocket } from 'lucide-react';
import { BlogPost } from '@/lib/blog-data';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogSchema from '@/components/blog/BlogSchema';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { formatMarkdown } from '@/lib/blog-utils';


interface BlogPostContentProps {
    post: BlogPost;
    allPosts?: BlogPost[];
}

export default function BlogPostContent({ post, allPosts }: BlogPostContentProps) {
    const [isDark, setIsDark] = useState(false);

    // Newsletter State
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

    useEffect(() => {
        const isDarkMode = false;
        setIsDark(isDarkMode);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        if (newTheme) {
            /* handled by next-themes */
        } else {
            /* handled by next-themes */
        }
    };

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />

            <article className="pt-32 pb-24">
                <BlogSchema post={post} />

                {/* Breadcrumbs */}
                <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12">
                    <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        <Link href="/" className="hover:text-brand-cyan transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/blog" className="hover:text-brand-cyan transition-colors">Blog</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-brand-cyan truncate max-w-[200px]">{post.title}</span>
                    </nav>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Main Content Area */}
                        <div className="lg:col-span-8">
                            {/* Header */}
                            <header className="mb-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-4 py-1.5 bg-brand-medium/10 border border-brand-medium/20 rounded-full text-xs font-bold text-brand-sky uppercase tracking-widest">
                                        {post.category}
                                    </span>
                                    <div className="h-px w-8 bg-white/10" />
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{post.date}</span>
                                </div>

                                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-tight">
                                    {post.title}
                                </h1>

                            </header>

                            {/* Featured Image */}
                            <div className="aspect-video w-full rounded-[2.5rem] bg-slate-900 overflow-hidden mb-16 border border-white/5 relative">
                                <Image
                                    src={post.featuredImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Post Content */}
                            <div className="prose prose-invert prose-brand max-w-none">
                                {/<\/?[a-z][\s\S]*>/i.test(post.content || '') ? (
                                    <div
                                        className="text-slate-400 text-lg leading-[1.8] space-y-8 blog-content-rich"
                                        dangerouslySetInnerHTML={{ __html: post.content }}
                                    />
                                ) : (
                                    <div className="text-slate-400 text-lg leading-[1.8] space-y-8 blog-content-rich">
                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                            {formatMarkdown(post.content)}
                                        </ReactMarkdown>
                                    </div>
                                )}
                            </div>

                            {/* Internal CTA Block */}
                            <div className="my-16 p-10 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-brand-medium/10 to-brand-deep/20 border border-brand-medium/20 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Rocket className="w-32 h-32" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">Want Help Implementing This Strategy?</h3>
                                    <p className="text-slate-400 text-lg mb-8 max-w-xl">
                                        Our growth experts have helped dozens of companies execute these exact frameworks to drive millions in revenue.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform"
                                    >
                                        Book Free Strategy Call <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="pt-12 border-t border-slate-200 dark:border-white/5">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-lg text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest border border-slate-200 dark:border-white/5 cursor-default hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4">
                            <BlogSidebar posts={allPosts} />
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <section className="py-20 mt-16 border-t border-slate-200 dark:border-white/5 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
                        <div className="max-w-2xl mx-auto bg-white dark:bg-[#0d1120] border border-slate-200 dark:border-white/10 rounded-3xl p-10 shadow-sm relative overflow-hidden">
                            {/* Top accent */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3994fa] to-[#004aad] rounded-t-3xl" />
                            <span className="text-[#3994fa] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Stay Ahead of the Curve</span>
                            <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tight text-slate-900 dark:text-white">Ready to master the digital landscape?</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-base mb-8 leading-relaxed">
                                Subscribe for exclusive weekly insights you won't find on our blog.
                            </p>
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 relative">
                                <div className="flex-grow flex flex-col gap-2">
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        value={subscribeEmail}
                                        onChange={(e) => setSubscribeEmail(e.target.value)}
                                        required
                                        disabled={subscribeStatus === 'loading'}
                                        className="w-full h-14 px-6 rounded-xl bg-slate-50 dark:bg-[#1a2035] border border-slate-200 dark:border-white/10 focus:border-[#3994fa] focus:ring-2 focus:ring-[#3994fa]/10 outline-none transition-all text-base text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 disabled:opacity-50"
                                    />
                                    {subscribeMessage && (
                                        <p className={`text-xs ml-1 font-bold ${subscribeStatus === 'success' ? 'text-[#3994fa]' : 'text-red-500'}`}>
                                            {subscribeMessage}
                                        </p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={subscribeStatus === 'loading'}
                                    className="h-14 shrink-0 px-8 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-xl font-black uppercase tracking-widest hover:opacity-90 hover:scale-[1.02] transition-all active:scale-95 whitespace-nowrap shadow-lg shadow-[#3994fa]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {subscribeStatus === 'loading' ? 'Subscribing...' : 'Sign Me Up'}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </article>

            <Footer />
        </main>
    );
}
