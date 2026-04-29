import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog-data';
import { Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeaturedSectionProps {
    posts: BlogPost[];
}

export default function FeaturedSection({ posts }: FeaturedSectionProps) {
    if (posts.length === 0) return null;

    const mainPost = posts[0];
    const secondaryPosts = posts.slice(1, 4);

    return (
        <section className="py-12 lg:py-16 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-1px bg-brand-cyan" />
                            <span className="text-brand-cyan text-[11px] font-bold uppercase tracking-[0.3em]">Trending Now</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white uppercase italic">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-brand-cyan not-italic">Latest</span> Blogs.
                        </h2>
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 h-auto lg:min-h-[540px]">
                    {/* Main Featured Post */}
                    <div className="lg:col-span-8 group relative overflow-hidden rounded-[2rem] bg-slate-950 shadow-xl min-h-[480px] lg:h-full border border-slate-200 dark:border-white/10 hover:border-brand-cyan/30 transition-[border-color,transform] duration-300 will-change-transform gpu">
                        <Link href={`/blog/${mainPost.slug}`} className="flex flex-col w-full h-full relative">
                            {/* Background Image */}
                            <Image
                                src={mainPost.featuredImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"}
                                alt={mainPost.title}
                                fill
                                className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-500 group-hover:opacity-40"
                                priority
                            />

                            {/* Glass Gradients */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                            {/* Content Content Content */}
                            <div className="absolute inset-0 p-6 md:p-8 lg:p-10 flex flex-col justify-end">
                                <motion.div


                                    
                                    className="max-w-3xl"
                                >
                                    <div className="flex flex-wrap items-center gap-4 mb-4">
                                        <span className="px-3 py-1.5 bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan rounded-full text-[9px] font-black uppercase tracking-[0.2em] backdrop-blur-sm">
                                            {mainPost.category}
                                        </span>
                                        <span className="flex items-center gap-2 text-white/60 text-[9px] font-black uppercase tracking-widest">
                                            <Clock className="w-3 h-3 text-brand-sky" /> {mainPost.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-4 group-hover:text-brand-cyan transition-colors duration-300">
                                        {mainPost.title}
                                    </h3>

                                    <p className="text-slate-300 text-sm md:text-base font-medium mb-6 line-clamp-2 leading-relaxed max-w-2xl">
                                        {mainPost.excerpt}
                                    </p>

                                    {/* CTA Row */}
                                    <div className="flex items-center justify-end border-t border-white/10 pt-6">
                                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-cyan group-hover:border-brand-cyan transition-colors duration-300">
                                            <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-slate-950 transition-colors" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </Link>
                    </div>

                    {/* Secondary Posts Grid */}
                    <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                        {secondaryPosts.map((post, idx) => (
                            <motion.div
                                key={post.id}


                                
                                className="group relative overflow-hidden rounded-[1.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-brand-cyan/30 transition-[border-color,background-color] duration-300 flex-1 gpu"
                            >
                                <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-20" />
                                <div className="p-5 md:p-6 flex flex-col h-full relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-10 h-10 rounded-xl overflow-hidden relative border border-slate-200 dark:border-white/10 shrink-0">
                                            <Image
                                                src={post.featuredImage || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2426&auto=format&fit=crop"}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-400"
                                            />
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-widest text-brand-cyan bg-brand-cyan/5 px-3 py-1.5 rounded-full">
                                            {post.category}
                                        </span>
                                    </div>

                                    <h4 className="text-base md:text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight mb-3 group-hover:text-brand-cyan transition-colors line-clamp-2 flex-1 mt-auto">
                                        {post.title}
                                    </h4>

                                    <div className="flex items-center gap-3 text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-auto">
                                        <Clock className="w-3 h-3" />
                                        <span>{post.readTime}</span>
                                        <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700 mx-1" />
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/0 to-brand-cyan/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
