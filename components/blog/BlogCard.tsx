import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/lib/blog-data';

interface BlogCardProps {
    post: BlogPost;
}

import { motion } from 'framer-motion';

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <motion.div
            
            className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-[2rem] overflow-hidden transition-[transform,box-shadow,border-color,background-color] duration-300 hover:shadow-2xl hover:border-brand-cyan/20 gpu"
        >
            {/* Image Container */}
            <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden block">
                <Image
                    src={post.featuredImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-400 group-hover:scale-110"
                />

                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

                {/* Category Badge */}
                <div className="absolute top-5 left-5">
                    <span className="px-4 py-2 bg-brand-cyan/20 backdrop-blur-md border border-brand-cyan/30 rounded-full text-[8px] font-semibold text-brand-cyan  tracking-[0.2em]">
                        {post.category}
                    </span>
                </div>

                {/* Metadata Overlay (Image-Integrated) */}
                <div className="absolute bottom-5 left-5 flex items-center gap-5 text-[9px] font-semibold text-white  tracking-[0.25em]">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-cyan" />
                        <span>{post.readTime}</span>
                    </div>
                </div>
            </Link>

            {/* Content Body */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
                <Link href={`/blog/${post.slug}`} className="block mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white  tracking-tighter leading-[1.15] transition-colors group-hover:text-brand-cyan group-hover:underline underline-offset-4 decoration-brand-cyan/30">
                        {post.title}
                    </h3>
                </Link>

                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-[1.6] mb-8 line-clamp-3">
                    {post.excerpt}
                </p>

                {/* Footer Section */}
                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="text-[10px] font-semibold  tracking-[0.2em] text-slate-400 group-hover:text-brand-cyan transition-colors"
                    >
                        Read Article
                    </Link>

                    <Link
                        href={`/blog/${post.slug}`}
                        className="w-10 h-10 rounded-full border border-slate-100 dark:border-white/10 flex items-center justify-center bg-white dark:bg-transparent shadow-sm group/btn hover:border-brand-cyan hover:scale-105 transition-all duration-300"
                    >
                        <ArrowRight className="w-4 h-4 text-brand-cyan transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
