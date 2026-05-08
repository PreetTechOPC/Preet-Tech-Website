"use client";

import React, { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
    ArrowLeft, 
    ArrowRight, 
    Zap, 
    Target, 
    Globe, 
    Smartphone, 
    Code2, 
    BarChart3, 
    Palette, 
    Rocket,
    CheckCircle2,
    TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BLOG_POSTS } from '@/lib/blog-data';

// Mapping service slugs to display names and search terms
const SERVICE_MAP: Record<string, { name: string; category: string; icon: any }> = {
    'eco-website': { name: 'Eco Website', category: 'Web Design', icon: Globe },
    'advance-website': { name: 'Advance Website', category: 'Web Design', icon: Globe },
    'software-development': { name: 'Software Development', category: 'Software', icon: Code2 },
    'app-development': { name: 'App Development', category: 'App Development', icon: Smartphone },
    'performance-marketing': { name: 'Performance Marketing', category: 'Performance Marketing', icon: BarChart3 },
    'content-creation': { name: 'Content Creation', category: 'Content', icon: Palette },
    'social-media-handling': { name: 'Social Media', category: 'Social Media', icon: Zap },
    'partnership-marketing': { name: 'Partnerships', category: 'Partnerships', icon: Target },
    'business-tools': { name: 'Premium Tools', category: 'Business Tools', icon: Rocket },
    'start-your-business': { name: 'Business Launch', category: 'E-Commerce', icon: Rocket },
};

export default function DynamicCaseStudiesPage() {
    const params = useParams();
    const serviceSlug = params.service as string;
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const serviceInfo = SERVICE_MAP[serviceSlug] || { name: 'Digital', category: 'All', icon: Zap };

    // Filter relevant case studies and blog posts
    const relatedCaseStudies = useMemo(() => {
        return BLOG_POSTS.filter(post => {
            const isCaseStudy = post.id.startsWith('cs-') || post.tags.includes('Case Study');
            const matchesService = 
                post.category === serviceInfo.category || 
                post.tags.some(tag => tag.toLowerCase().includes(serviceInfo.name.toLowerCase())) ||
                post.title.toLowerCase().includes(serviceInfo.name.toLowerCase());
            
            return isCaseStudy && matchesService;
        });
    }, [serviceSlug, serviceInfo]);

    // Also get related insights/blogs
    const relatedInsights = useMemo(() => {
        return BLOG_POSTS.filter(post => {
            const isNotCaseStudy = !post.id.startsWith('cs-') && !post.tags.includes('Case Study');
            const matchesService = 
                post.category === serviceInfo.category || 
                post.tags.some(tag => tag.toLowerCase().includes(serviceInfo.name.toLowerCase()));
            
            return isNotCaseStudy && matchesService;
        }).slice(0, 4);
    }, [serviceSlug, serviceInfo]);

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-300 font-jakarta overflow-x-clip">
            <Navbar isDark={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-medium/5 blur-[100px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <Link 
                        href={`/services/${serviceSlug}`} 
                        className="inline-flex items-center gap-2 text-brand-medium font-bold text-xs uppercase tracking-widest mb-8 hover:gap-3 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to {serviceInfo.name}
                    </Link>

                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-6">
                        {serviceInfo.name} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-medium to-brand-deep italic">Case Studies.</span>
                    </h1>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl font-medium leading-relaxed">
                        Precision engineering meets measurable ROI. Explore how we've solved complex challenges and driven exponential growth for our partners in {serviceInfo.name}.
                    </p>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {relatedCaseStudies.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedCaseStudies.map((cs, i) => (
                                <motion.div 
                                    key={cs.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group relative flex flex-col h-full bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-200 dark:border-white/10 overflow-hidden hover:shadow-2xl hover:shadow-brand-medium/10 transition-all duration-500"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <Image 
                                            src={cs.featuredImage} 
                                            alt={cs.title} 
                                            fill 
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                                        
                                        {/* Floating Badge */}
                                        <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
                                            Case Study
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-brand-medium dark:text-brand-cyan text-[10px] font-black uppercase tracking-[0.2em]">{cs.category}</span>
                                        </div>
                                        
                                        <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white mb-4 leading-tight uppercase group-hover:text-brand-medium transition-colors">
                                            {cs.title}
                                        </h3>
                                        
                                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed font-medium line-clamp-3">
                                            {cs.excerpt}
                                        </p>

                                        <div className="mt-auto space-y-6">
                                            <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-white/5">
                                                <div>
                                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Impact</p>
                                                    <div className="flex items-center gap-1.5 text-emerald-500 font-bold text-xs uppercase">
                                                        <TrendingUp className="w-3.5 h-3.5" /> High ROI
                                                    </div>
                                                </div>
                                                <Link 
                                                    href={`/blog/${cs.slug}`}
                                                    className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-brand-medium group-hover:text-white transition-all duration-300"
                                                >
                                                    <ArrowRight className="w-5 h-5" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-24 text-center bg-slate-50 dark:bg-slate-900/40 rounded-[3rem] border border-dashed border-slate-200 dark:border-white/10">
                            <serviceInfo.icon className="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto mb-6" />
                            <h3 className="text-2xl font-black text-slate-400 uppercase">Case studies arriving soon.</h3>
                            <p className="text-slate-500 mt-4 max-w-md mx-auto">We're currently documenting our latest success stories for {serviceInfo.name}. Stay tuned for deep dives into our engineering process.</p>
                            <Link href="/blog" className="inline-flex items-center gap-2 text-brand-medium font-bold uppercase tracking-widest text-xs mt-8">
                                Browse Blog Instead <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Related Insights Section */}
            {relatedInsights.length > 0 && (
                <section className="py-24 px-6 bg-slate-50/50 dark:bg-slate-900/20">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                            <div className="max-w-2xl">
                                <span className="text-brand-medium font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Strategic Intel</span>
                                <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-slate-900 dark:text-white leading-tight">
                                    {serviceInfo.name} <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-brand-medium to-brand-cyan italic pr-2">Intelligence.</span>
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedInsights.map((post, i) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Link 
                                        href={`/blog/${post.slug}`} 
                                        className="group relative flex flex-col h-full p-8 bg-white dark:bg-slate-900/40 rounded-[2.5rem] border border-slate-200 dark:border-white/5 hover:border-brand-medium/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-brand-medium/5"
                                    >
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="w-12 h-12 rounded-2xl bg-brand-medium/10 flex items-center justify-center text-brand-medium group-hover:bg-brand-medium group-hover:text-white transition-all duration-300">
                                                <Zap className="w-6 h-6" />
                                            </div>
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{post.category}</span>
                                        </div>
                                        
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight leading-tight group-hover:text-brand-medium transition-colors">
                                            {post.title}
                                        </h3>
                                        
                                        <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-10 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        
                                        <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-100 dark:border-white/5">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Analysis • {post.readTime}</span>
                                            <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:translate-x-1 transition-all">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Global CTA */}
            <section className="py-24 px-6 bg-[#3994fa] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                        Ready to achieve <br /> <span className="italic opacity-80">similar results?</span>
                    </h2>
                    <p className="text-lg md:text-xl font-medium mb-12 opacity-90 max-w-2xl mx-auto">
                        Join the high-growth brands that trust Preet Tech for their digital infrastructure and scaling strategies.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href={`/services/${serviceSlug}`} className="w-full sm:w-auto px-10 py-5 bg-white text-[#3994fa] rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all shadow-xl shadow-black/10">
                            Explore {serviceInfo.name}
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/20 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                            Book Strategy Call
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
