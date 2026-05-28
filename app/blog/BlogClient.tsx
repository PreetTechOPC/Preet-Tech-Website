"use client";
import React, { useState, useMemo } from 'react';
import BlogHero from '@/components/blog/BlogHero';
import FeaturedSection from '@/components/blog/FeaturedSection';
import BlogGrid from '@/components/blog/BlogGrid';
import Pagination from '@/components/blog/Pagination';
import TrendingIntelligence from '@/components/blog/TrendingIntelligence';
import { BlogPost } from '@/lib/blog-data';
import { Mail, ArrowRight, Zap, Trophy, Rocket } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const POSTS_PER_PAGE = 6;

export default function BlogClient({ initialPosts }: { initialPosts: BlogPost[] }) {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isDark, setIsDark] = useState(true);

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

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
    };

    // Get latest posts for the top section
    const topPosts = useMemo(() => {
        return initialPosts.slice(0, 4);
    }, [initialPosts]);

    // Filter posts based on category and search term
    const filteredPosts = useMemo(() => {
        setCurrentPage(1); // Reset to first page on filter change
        return initialPosts.filter(post => {
            const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [initialPosts, activeCategory, searchTerm]);

    const displayPosts = useMemo(() => {
        // If we're on "All", we might want to hide the latest posts from the grid
        // to avoid duplication with the top section
        let posts = filteredPosts;
        if (activeCategory === 'All' && !searchTerm) {
            posts = filteredPosts.slice(4); // Skip the top 4 posts shown in Latest Blogs
        }

        // Pagination logic
        const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
        return posts.slice(startIndex, startIndex + POSTS_PER_PAGE);
    }, [filteredPosts, activeCategory, searchTerm, currentPage]);

    const totalPages = Math.ceil(
        (activeCategory === 'All' && !searchTerm
            ? Math.max(0, filteredPosts.length - 4)
            : filteredPosts.length) / POSTS_PER_PAGE
    );

    return (
        <main className="min-h-screen bg-background">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />
            <BlogHero
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                onSearch={setSearchTerm}
            />

            {/* Latest Blogs Section - Only show on All category or when not searching */}
            {activeCategory === 'All' && !searchTerm && (
                <FeaturedSection posts={topPosts} />
            )}

            {/* Main Blog Grid */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            {searchTerm ? `Results for "${searchTerm}"` : activeCategory === 'All' ? 'Latest Stories' : activeCategory}
                        </h2>
                        <div className="h-px bg-white/10 flex-grow" />
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{filteredPosts.length} Articles</span>
                    </div>

                    <BlogGrid posts={displayPosts} />

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </section>

            {/* Trending Intelligence Section */}
            {activeCategory === 'All' && !searchTerm && (
                <TrendingIntelligence posts={initialPosts} />
            )}

            {/* Newsletter Section - Dark Premium Redesign */}
            <section className="py-24 md:py-32 w-full bg-[#040b1a] relative overflow-hidden">
                {/* Ambient background glows */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(57,148,250,0.1),transparent_70%)] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,74,173,0.12),transparent_70%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,148,250,0.04),transparent_70%)] pointer-events-none" />

                {/* Top border glow line */}
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3994fa]/40 to-transparent" />
                <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#3994fa]/20 to-transparent" />

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(57,148,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(57,148,250,0.5) 1px, transparent 1px)',
                        backgroundSize: '60px 60px'
                    }}
                />

                <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

                    {/* Content Left */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
                        >
                            <Mail className="w-4 h-4 text-[#3994fa]" />
                            <span className="text-[10px] font-black text-white/80 uppercase tracking-[0.3em]">Exclusive Intel</span>
                        </motion.div>

                        <h2
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]"
                        >
                            Master the <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3994fa] to-[#5fD3E6]">Growth Engine.</span>
                        </h2>

                        <p
                            className="text-white/50 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0"
                        >
                            Join 5,000+ ambitious founders receiving our best actionable frameworks directly to their inbox. Zero fluff. Pure signal.
                        </p>

                        {/* Social proof dots */}
                        <motion.div
                            className="mt-8 flex items-center gap-3 justify-center lg:justify-start"
                        >
                            <div className="flex -space-x-2">
                                {['bg-blue-500', 'bg-purple-500', 'bg-cyan-500', 'bg-emerald-500'].map((color, i) => (
                                    <div key={i} className={`w-8 h-8 rounded-full ${color} border-2 border-[#040b1a] flex items-center justify-center text-[8px] text-white font-black`}>
                                        {String.fromCharCode(65 + i)}
                                    </div>
                                ))}
                            </div>
                            <span className="text-white/40 text-sm font-medium">+5,000 founders already in</span>
                        </motion.div>
                    </div>

                    {/* Form Right */}
                    <motion.div
                        className="flex-1 w-full max-w-xl lg:max-w-none"
                    >
                        <div className="p-8 md:p-10 rounded-[2rem] bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group">
                            {/* Inner glow on hover */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(57,148,250,0.12),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-[2rem]" />
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3994fa]/30 to-transparent" />

                            <form className="flex flex-col sm:flex-row gap-3 mb-6 relative z-10" onSubmit={handleSubscribe}>
                                <div className="flex-grow flex flex-col gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your terminal email..."
                                        value={subscribeEmail}
                                        onChange={(e) => setSubscribeEmail(e.target.value)}
                                        required
                                        suppressHydrationWarning
                                        disabled={subscribeStatus === 'loading'}
                                        className="w-full h-14 px-6 rounded-xl bg-white/5 border border-white/10 focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/50 outline-none transition-all text-base text-white placeholder:text-white/30 disabled:opacity-50"
                                    />
                                    {subscribeMessage && (
                                        <p className={`text-xs ml-2 font-bold ${subscribeStatus === 'success' ? 'text-[#3994fa]' : 'text-red-400'}`}>
                                            {subscribeMessage}
                                        </p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={subscribeStatus === 'loading'}
                                    className="h-14 shrink-0 px-8 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-xl font-black uppercase tracking-widest hover:opacity-90 hover:scale-[1.02] transition-all active:scale-95 whitespace-nowrap shadow-lg shadow-[#3994fa]/25 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {subscribeStatus === 'loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE NOW'}
                                </button>
                            </form>

                            <div className="flex flex-wrap items-center justify-between gap-4 relative z-10 px-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#3994fa]/15 flex items-center justify-center">
                                        <Zap className="w-3 h-3 text-[#3994fa]" />
                                    </div>
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">No Noise</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#3994fa]/15 flex items-center justify-center">
                                        <Trophy className="w-3 h-3 text-[#3994fa]" />
                                    </div>
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">VIP Access</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#3994fa]/15 flex items-center justify-center">
                                        <Rocket className="w-3 h-3 text-[#3994fa]" />
                                    </div>
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">1-Click Exit</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-12 md:py-16 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-background relative overflow-hidden transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-4 md:px-6">
                    <div className="relative rounded-[2rem] overflow-hidden bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 shadow-lg p-6 md:p-10 text-center group">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(95,211,230,0.05),transparent_60%)] pointer-events-none transition-opacity duration-400 opacity-0 group-hover:opacity-100" />

                        <motion.div
                            className="relative z-10"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase leading-[0.9]">
                                Execute Your <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-brand-cyan to-brand-medium italic pr-2">Vision.</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-medium mb-8 max-w-xl mx-auto leading-relaxed">
                                Ready to scale beyond limits? Our digital architects are ready to build the infrastructure of your success.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                <Link
                                    href="/services"
                                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-xl font-black uppercase tracking-widest hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-md shadow-[#3994fa]/10"
                                >
                                    View Capabilities
                                </Link>
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-slate-200 dark:border-white/10 text-slate-700 dark:text-white rounded-xl font-black uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-white/5 hover:border-slate-300 dark:hover:border-white/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                                >
                                    Strategy Session <ArrowRight className="w-4 h-4 text-brand-cyan" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
