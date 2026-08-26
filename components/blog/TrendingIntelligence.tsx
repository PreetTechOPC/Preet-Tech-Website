"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, ArrowRight, Activity } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '@/lib/blog-data';

interface TrendingIntelligenceProps {
    posts?: BlogPost[];
}

export default function TrendingIntelligence({ posts }: TrendingIntelligenceProps) {
    // Curate a set of "Trending" posts
    const displayPosts = posts || BLOG_POSTS;
    const trendingPosts = displayPosts.slice(0, 4);

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(95,211,230,0.05),transparent)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Activity className="w-5 h-5 text-brand-cyan" />
                            <span className="text-brand-cyan text-[11px] font-semibold  tracking-[0.4em]">Real-Time Feed</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white  leading-none">
                            Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-brand-cyan">Intelligence.</span>
                        </h2>
                    </div>

                    <Link href="/blog" className="group flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-brand-cyan transition-colors text-[10px] font-semibold  tracking-[0.3em]">
                        Browse All Intel <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trendingPosts.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-[2.5rem] p-6 md:p-8 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-brand-cyan/30 dark:hover:border-brand-cyan/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-brand-cyan/5"
                        >
                            <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 shrink-0">
                                    <Image
                                        src={post.featuredImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-400"
                                    />
                                    <div className="absolute top-3 left-3 z-10">
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-white/90 dark:bg-slate-950/80 backdrop-blur-md rounded-full border border-slate-200 dark:border-white/10 shadow-sm">
                                            <TrendingUp className="w-3 h-3 text-brand-cyan" />
                                            <span className="text-[8px] font-semibold text-slate-900 dark:text-white  tracking-widest">Viral</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col flex-1 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[9px] font-semibold text-brand-cyan  tracking-widest bg-brand-cyan/10 px-2 py-0.5 rounded-md">
                                            {post.category}
                                        </span>
                                        <span className="text-[9px] font-semibold text-slate-500 dark:text-slate-400  tracking-widest flex items-center gap-1.5">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h4 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white  tracking-tight leading-tight group-hover:text-brand-cyan transition-colors line-clamp-3">
                                        {post.title}
                                    </h4>


                                </div>
                            </Link>

                            {/* Corner Glow */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
