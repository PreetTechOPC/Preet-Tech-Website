"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Zap, Shield, Layout, Layers, ArrowRight, User, Mail, Phone, Building2, ChevronRight,
    Activity, Target, BarChart3, TrendingUp, Search, Globe, CheckCircle2, Share2, Briefcase,
    Rocket, Plus, Minus, Instagram, Facebook, Linkedin, Youtube, MessageSquare, Palette, Video,
    Users, LineChart, Sparkles, Calendar, Eye, Heart, Hash, Clock, Send, Star, Megaphone,
    PenTool, Image, Play, Repeat, MousePointer2, FileText, Bot, Headphones, DollarSign,
    ShoppingCart, Home, GraduationCap, HeartPulse, Store, UserCheck, Award, Gauge, Monitor,
    Smartphone, Bookmark, type LucideIcon, Camera, Film, Music, Mic, Pencil,
    Scissors, Lightbulb, Workflow, Box, X
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Footer from '@/components/Footer';
import PortfolioCarousel from '@/components/PortfolioCarousel';
import ThreeSphereScene from '@/components/ThreeSphere';
import PhoneInput from '@/components/PhoneInput';
import CaseStudies, { CaseStudy } from '@/components/CaseStudies';
// --- 🛰️ Lightweight Static Background (CSS-only, no JS animations) ---
const TechnicalBackground = ({ isDarkMode }: { isDarkMode: boolean }) => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Static mesh grid — CSS background-image, zero JS cost */}
        <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
                backgroundImage: `linear-gradient(to right, #3994fa 1px, transparent 1px), linear-gradient(to bottom, #3994fa 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
            }}
        />
        {/* Two static ambient glows — no animation, GPU-composited */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#3994fa]/5 blur-[48px] rounded-full opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#3994fa]/5 blur-[48px] rounded-full opacity-40" />
    </div>
);

export default function ContentCreation() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        countryCode: '+91',
        budget: 'Social Media',
    });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const containerRef = useRef<HTMLDivElement>(null);

    const CONTENT_CASE_STUDIES: CaseStudy[] = [
        {
            id: 'content-1',
            title: 'Cinematic Brand Storytelling',
            client: 'Veloce Motors',
            category: 'Video Production',
            description: 'Produced a series of high-octane brand films that garnered over 5M organic views and redefined the brand aesthetic.',
            stats: [
                { label: 'Views', value: '5M+' },
                { label: 'Engagement', value: '12%' },
                { label: 'Shares', value: '45k+' }
            ],
            tags: ['4K Video', 'Color Grading', 'Sound Design']
        },
        {
            id: 'content-2',
            title: 'High-Authority Blog Strategy',
            client: 'TechPulse',
            category: 'Copywriting / SEO',
            description: 'Executed a data-driven content strategy that secured 50+ Top 3 Google rankings for competitive industry keywords.',
            stats: [
                { label: 'Top 3 Keywords', value: '50+' },
                { label: 'Organic Traffic', value: '+240%' },
                { label: 'Backlinks', value: '200+' }
            ],
            tags: ['SEO Writing', 'Whitepapers', 'Inbound']
        }
    ];

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem('theme');
        setIsDarkMode(stored === 'dark');
    }, []);

    const toggleTheme = () => {
        const next = !isDarkMode;
        setIsDarkMode(next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
    };

    // Removed GSAP reveal animations

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('loading');
        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    phone: `${formData.countryCode} ${formData.phone}`,
                    service: 'Content Creation',
                    industry: 'Not specified'
                })
            });
            if (res.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', businessName: '', email: '', phone: '', countryCode: '+91', budget: 'Social Media' });
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus('error');
        }
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    if (!mounted) {
        return <div className="min-h-screen bg-background" />;
    }

    return (
        <main ref={containerRef} className="relative z-10 selection:bg-brand-cyan/20 overflow-x-clip bg-[#fafafa] text-slate-900 dark:bg-[#050608] dark:text-white transition-colors duration-300 font-sans">
            <Navbar isDark={isDarkMode} toggleTheme={toggleTheme} />

            {/* 1️⃣ Hero Section */}
            <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />
                <ThreeSphereScene />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                    <div className="space-y-6 lg:space-y-8 hero-content text-center lg:text-left">
                        <span
                            className="inline-block px-4 py-1 rounded-full bg-[#3994fa]/10 dark:bg-[#3994fa]/10 text-[#3994fa] dark:text-[#3994fa] text-[10px] md:text-xs font-bold uppercase tracking-widest border border-[#3994fa]/20 dark:border-[#3994fa]/20"
                        >
                            Premium Content Studio
                        </span>
                        <h1
                            className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-slate-900 dark:text-white"
                        >
                            Professional Content <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3994fa] to-slate-900 dark:to-white">Creation Services.</span>
                        </h1>
                        <p
                            className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium"
                        >
                            Scale your brand with high-engaging, conversion-optimized <strong>content creation services</strong> starting at just ₹4,999. From viral reels to professional ad creatives, we deliver premium visual assets in 3-7 working days.
                        </p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Link
                                href="/case-studies/content-creation"
                                className="px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-90 text-white rounded-2xl font-black transition-all transform hover:-translate-y-1 shadow-lg shadow-[#3994fa]/25 flex items-center justify-center gap-2 text-[11px] sm:text-[13px] uppercase tracking-widest cursor-pointer"
                            >
                                Case Studies <ArrowRight className="w-5 h-5" />
                            </Link>

                        </motion.div>
                    </div>

                    <motion.div
                        id="consultation"
                        className="relative hero-content mt-8 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none scroll-mt-32"
                    >
                        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-[2.5rem] shadow-2xl relative z-10 border border-slate-200 dark:border-slate-800">
                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Full Name</label>
                                    <div className="relative group">
                                        <User strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3994fa] transition-colors" />
                                        <input required type="text" value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all text-sm text-slate-700 dark:text-slate-200" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Business Name</label>
                                    <div className="relative group">
                                        <Building2 strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3994fa] transition-colors" />
                                        <input required type="text" value={formData.businessName || ''} onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} placeholder="Your Business" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all text-sm text-slate-700 dark:text-slate-200" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Email</label>
                                        <div className="relative group">
                                            <Mail strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3994fa] transition-colors" />
                                            <input required type="email" value={formData.email || ''} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all text-sm text-slate-700 dark:text-slate-200" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Phone</label>
                                        <PhoneInput
                                            value={formData.phone}
                                            onChange={(val) => setFormData({ ...formData, phone: val })}
                                            countryCode={formData.countryCode}
                                            onCountryCodeChange={(code) => setFormData({ ...formData, countryCode: code })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Content Type</label>
                                    <div className="relative group">
                                        <Layers strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3994fa] transition-colors pointer-events-none" />
                                        <select required value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-10 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all appearance-none text-slate-700 dark:text-slate-200 text-sm cursor-pointer">
                                            <option value="Social Media">Social Media</option>
                                            <option value="Short-Form/Reels">Short-Form/Reels</option>
                                            <option value="Ad Creatives">Ad Creatives</option>
                                            <option value="Website Copy">Website Copy</option>
                                            <option value="Full Strategy">Full Strategy</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <button disabled={submitStatus === "loading"} type="submit" className="w-full px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-90 text-white font-black rounded-2xl transition-all shadow-[0_0_20px_rgba(63,143,204,0.2)] hover:shadow-[0_0_30px_rgba(63,143,204,0.4)] text-[11px] sm:text-[13px] uppercase tracking-widest flex items-center justify-center gap-2">
                                        {submitStatus === "loading" ? "Submitting..." : "Get Free Consultation"} <ArrowRight strokeWidth={2.5} className="w-5 h-5 ml-1" />
                                    </button>
                                </div>
                                {submitStatus === 'success' && (
                                    <p className="text-emerald-500 text-xs font-bold text-center mt-2">Success! We will be in touch shortly.</p>
                                )}
                                {submitStatus === 'error' && (
                                    <p className="text-red-500 text-xs font-bold text-center mt-2">Something went wrong. Please try again.</p>
                                )}
                            </form>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#3994fa]/20 to-[#6366f1]/20 rounded-full blur-[48px] -z-10 animate-pulse" />
                    </motion.div>
                </div>
            </section>

            {/* 2️⃣ Why Content Is the Foundation of Digital Growth */}
            <section className="py-20 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="space-y-4 max-w-2xl">
                            <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">The Foundation</span>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                                Why Content is the Core of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-sky">Digital Brand Growth.</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 max-w-sm font-medium">
                            In the age of AI search and short-form media, businesses grow with stories that resonate and visuals that capture attention within seconds.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { t: 'Builds Trust & Authority', d: 'High-quality, educational content positions your brand as an industry leader before the first interaction.', i: Shield },
                            { t: 'Consistent Brand Recall', d: 'Frequent, visual touchpoints ensure your brand is the first name customers think of when they are ready to buy.', i: Activity },
                            { t: 'Performance-First Creatives', d: 'Optimized ad creatives lower your CAC and increase your ROAS through higher click-through rates.', i: Target },
                            { t: 'Emotional Connection', d: 'Stories bridge the gap between product and person, turning one-time buyers into lifelong advocates.', i: Heart },
                            { t: 'Conversion Engine', d: 'Strategic content funnels move prospects from awareness to decision through persuasive visual proof.', i: Zap }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                
                                className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm group hover:border-brand-medium/30 transition-all flex flex-col items-start gap-6"
                            >
                                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-brand-medium/10 text-brand-medium group-hover:bg-brand-medium group-hover:text-white transition-colors duration-300">
                                    <item.i className="w-8 h-8" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold tracking-tight">{item.t}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                                        {item.d}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3️⃣ Why Choose Preet Tech OPC Private Limited */}
            <section className="py-20 md:py-32 px-4 md:px-6 bg-slate-100 dark:bg-slate-900/30 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">The Preet Tech OPC Private Limited Edge</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">The Best Content Creation IT Company for You.</h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">We don't just "make content". We build growth assets that appreciate in value over time.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { t: 'Strategy-First Creation', d: 'We start with your business goals, target audience, and market gap. Every piece of content is built with a specific purpose in your sales funnel.', i: Workflow },
                            { t: 'Performance-Focused', d: 'Our creatives are tested against data. We track engagement, CTRs, and conversion rates to refine our creative approach continuously.', i: TrendingUp },
                            { t: 'Professional Production', d: 'From 4K cinematography to high-end motion graphics and professional studio lighting, we ensure your brand looks enterprise-grade.', i: Video },
                            { t: 'Data-Backed Optimization', d: 'We use heatmaps, A/B testing, and social analytics to understand exactly what your audience responds to and double down on winners.', i: BarChart3 },
                            { t: 'Brand Consistency', d: 'We define and maintain your unique visual language across every platform, ensuring a seamless experience for your followers.', i: Palette }
                        ].map((f, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:border-brand-medium transition-colors">
                                    <f.i className="w-6 h-6 text-brand-medium" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold tracking-tight">{f.t}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                        {f.d}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4️⃣ Who This Service Is For */}
            <section className="py-20 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Perfect Fit</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">Who Needs Content Strategy?</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { t: 'Startups', d: 'Looking to build brand identity and launch into the market with high-impact visuals.', i: Rocket },
                            { t: 'E-Commerce Brands', d: 'Needing high-converting product shots and ad creatives that move inventory fast.', i: ShoppingCart },
                            { t: 'SaaS Companies', d: 'Requiring clean, modern motion graphics and feature explainers that simplify complexity.', i: Box },
                            { t: 'Real Estate Businesses', d: 'Demanding cinematic property tours and professional visual storytelling to close listings.', i: Home },
                            { t: 'Coaches & Creators', d: 'Wanting to position themselves as authorities through high-end personal branding content.', i: Award },
                            { t: 'Local Businesses', d: 'Growing their local presence and customer trust through consistent, professional content.', i: Store }
                        ].map((block, i) => (
                            <motion.div
                                key={i}
                                className="p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-start gap-4 hover:bg-white dark:hover:bg-slate-900 transition-all hover:shadow-xl hover:border-brand-medium/40 group"
                            >
                                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 text-brand-medium group-hover:scale-110 transition-transform">
                                    <block.i className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-lg">{block.t}</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">{block.d}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5️⃣ Our Content Creation Services Overview */}
            <section className="py-20 md:py-32 px-4 md:px-6 bg-[#080B10] text-white reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-brand-sky font-bold uppercase tracking-[0.2em] text-xs">Full Spectrum Creative</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">Our Creative Services Suite.</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">From strategy to post-production, we handle the entire content lifecycle so you can focus on scale.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[
                            { t: 'Social Media Content', i: Instagram, d: 'Scroll-stopping feed posts, engaging carousels, and interactive stories.' },
                            { t: 'Short-Form Video & Reels', i: Film, d: 'Cinematic, hook-driven vertical videos optimized for reach and virality.' },
                            { t: 'Ad Creative Development', i: Megaphone, d: 'High-converting video and image assets designed specifically for paid social.' },
                            { t: 'Copywriting', i: Pencil, d: 'Persuasive sales copy and engaging captions that drive action and clicks.' },
                            { t: 'Storytelling & Scripts', i: Mic, d: 'Compelling scripts and brand narratives that connect emotionally with your audience.' },
                            { t: 'Product Photography', i: Camera, d: 'High-end studio photography that makes your products look premium and desirable.' },
                            { t: 'Content Strategy', i: Map, d: 'Comprehensive planning and roadmapping to ensure content hits your KPIs.' },
                            { t: 'Property Shoots', i: Home, d: 'Cinematic property tours and professional photography for real estate listings.' },
                            { t: 'Scheduling & Management', i: Calendar, d: 'Full-service calendar management to ensure consistency across all platforms.' },
                            { t: 'Creative Direction', i: Palette, d: 'Unified vision and aesthetic guidance to keep your brand voice consistent.' },
                            { t: 'Post-Production', i: Scissors, d: 'Professional editing, motion graphics, and sound design for maximum impact.' },
                            { t: 'Visual Branding Assets', i: Layout, d: 'Custom templates, fonts, and assets for a cohesive brand identity.' }
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-medium/50 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-brand-medium/20 flex items-center justify-center mb-4 group-hover:bg-brand-medium transition-colors">
                                    <s.i className="w-6 h-6 text-brand-sky group-hover:text-white" />
                                </div>
                                <h4 className="font-bold text-lg mb-2">{s.t}</h4>
                                <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                    {s.d}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6️⃣ Our Creative Workflow */}
            <section className="py-20 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">The Process</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">Our Proven Content Production Workflow.</h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 dark:bg-white/5 -translate-y-1/2 hidden lg:block" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                            {[
                                { s: '01', t: 'Idea', d: 'Generating volume-driven concepts aligned with your goals.', i: Lightbulb },
                                { s: '02', t: 'Strategy', d: 'Structuring hooks, CTA and audience targeting for each piece.', i: Target },
                                { s: '03', t: 'Production', d: 'High-end filming and photoshoot using top-tier equipment.', i: Camera },
                                { s: '04', t: 'Editing', d: 'Post-production, motion graphics, and professional grading.', i: Scissors },
                                { s: '05', t: 'Publishing', d: 'Scheduled posting at optimal times for maximum initial reach.', i: Share2 },
                                { s: '06', t: 'Optimization', d: 'Reviewing data and refining the next creative cycle.', i: Zap }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    className="text-center group"
                                >
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-white dark:bg-slate-900 border-4 border-slate-50 dark:border-white/5 flex items-center justify-center text-brand-medium shadow-xl group-hover:scale-110 group-hover:border-brand-medium transition-all duration-300">
                                        <step.i className="w-8 h-8" />
                                    </div>
                                    <span className="text-xs font-black text-brand-medium/50 uppercase tracking-widest block mb-2">{step.s} — {step.t}</span>
                                    <p className="text-[11px] text-slate-500 leading-relaxed px-2">
                                        {step.d}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7️⃣ Portfolio / Creative Showcase */}
            <PortfolioCarousel
                cards={[
                    {
                        id: 'video-1',
                        label: 'Organic Reels',
                        platform: 'Reels',
                        bg: 'from-brand-deep to-brand-sky',
                        content: (
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                <motion.div  className="absolute inset-0 bg-black/20" />
                                <div className="relative z-10 space-y-4">
                                    <div className="text-5xl font-black">1.2M</div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-brand-cyan">Views Generated</div>
                                    <p className="text-xs text-white/70 leading-relaxed">Viral short-form content strategy for a leading E-commerce brand.</p>
                                </div>
                            </div>
                        )
                    },
                    {
                        id: 'ad-1',
                        label: 'Ad Creatives',
                        platform: 'Facebook Ads',
                        bgStyle: { background: 'linear-gradient(135deg, #2F6FB5 0%, #3994fa 100%)' },
                        content: (
                            <div className="absolute inset-0 p-8 flex flex-col justify-center text-white text-center">
                                <div className="space-y-6">
                                    <Activity className="w-16 h-16 mx-auto text-brand-cyan opacity-40" />
                                    <div className="text-5xl font-black">4.2x</div>
                                    <div className="text-sm font-bold uppercase tracking-widest">ROAS Increase</div>
                                    <div className="h-px w-20 bg-white/20 mx-auto" />
                                    <p className="text-xs text-white/60">Optimized creative assets for a SaaS scaling phase.</p>
                                </div>
                            </div>
                        )
                    },
                    {
                        id: 'brand-1',
                        label: 'Brand Story',
                        platform: 'YouTube',
                        bg: 'from-slate-900 to-brand-deep',
                        content: (
                            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                                    <Play className="w-5 h-5 fill-current" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-3xl font-black">Legacy Series</h4>
                                    <p className="text-xs text-slate-400">Cinematic storytelling for a heritage luxury brand.</p>
                                </div>
                            </div>
                        )
                    },
                    {
                        id: 'product-1',
                        label: 'Static Assets',
                        platform: 'Instagram Post',
                        bgStyle: { background: 'linear-gradient(135deg, #12141d 0%, #1e293b 100%)' },
                        content: (
                            <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-white">
                                <div className="relative w-full aspect-square bg-slate-800/50 rounded-2xl overflow-hidden mb-6 group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <Camera className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white/20" />
                                    <div className="absolute bottom-4 left-4 right-4 h-2 bg-white/20 rounded-full">
                                        <motion.div  className="h-full bg-brand-cyan rounded-full" />
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <div className="text-2xl font-bold">85k Saves</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Engagement Proof</div>
                                </div>
                            </div>
                        )
                    }
                ]}
            />

            {/* 8️⃣ Industries We Serve */}
            <section className="py-20 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Versatility</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">Specific Industries We Empower.</h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Our content engine adapts to any niche, maintaining high production value and strategic focus.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { n: 'E-Commerce', d: 'Conversion-driven product demos and social proof content.', i: ShoppingCart },
                            { n: 'Real Estate', d: 'Emotional property narratives and agent personal branding.', i: Home },
                            { n: 'SaaS', d: 'Feature-focussed motion graphics and user success stories.', i: Box },
                            { n: 'Education', d: 'High-value educational snippets and student results.', i: GraduationCap },
                            { n: 'Healthcare', d: 'Trust-building patient stories and educational visuals.', i: HeartPulse },
                            { n: 'Hospitality', n2: 'Leisure', d: 'Experiential storytelling for hotels and travel brands.', i: Globe },
                            { n: 'Service Businesses', d: 'Authority-building process explainers and case studies.', i: Briefcase },
                            { n: 'Professional Brands', d: 'Polished personal brand visuals for executives and founders.', i: UserCheck }
                        ].map((industry, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:scale-[1.03] transition-transform group">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-brand-medium/10 flex items-center justify-center mb-5 group-hover:bg-brand-medium transition-colors">
                                    <industry.i className="w-5 h-5 text-brand-medium group-hover:text-white" />
                                </div>
                                <h4 className="font-bold text-lg mb-2">{industry.n} {industry.n2 && `& ${industry.n2}`}</h4>
                                <p className="text-[11px] text-slate-500 leading-relaxed">{industry.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9️⃣ FAQs Section */}
            <section className="py-20 md:py-32 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/30 reveal-section">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Common Questions</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight">Everything You Need to Know.</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "How often should we post content for social media growth?", a: "Consistency is key for digital growth, but quality beats quantity. We usually recommend a minimum of 3-5 high-quality posts per week combined with daily stories. Our content creation services customize this frequency based on your industry and specific business goals." },
                            { q: "Do your content creation services include shooting and editing?", a: "Yes, Preet Tech OPC Private Limited provides full-service content production. This includes creative direction, professional filming/photography on-site or in-studio, and advanced post-production editing for platforms like Reels, TikTok, and YouTube." },
                            { q: "Can you manage our entire social media content calendar?", a: "Absolutely. We can take over the complete scheduling and posting process across all your social platforms, ensuring your content goes live at peak engagement times for maximum reach." },
                            { q: "Do you create high-converting ad creatives as well?", a: "Yes, performance-driven ad creatives are one of our specialties. We design specific assets for Facebook, Instagram, and TikTok ads that are built for high conversion rather than just organic engagement." },
                            { q: "How do you measure the performance of our content?", a: "We track reach, engagement rate, click-through rates (CTR), and ultimately, conversions. We provide detailed monthly reports that show exactly how your content is contributing to your brand's digital growth." }
                        ].map((faq, i) => (
                            <div key={i} className="rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden bg-white dark:bg-slate-900/50">
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                                    className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-bold pr-8">{faq.q}</span>
                                    <motion.div >
                                        <ChevronDown className="w-5 h-5 text-brand-medium" />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {openFAQ === i && (
                                        <motion.div
                                            
                                            
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-slate-500 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-white/5">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10️⃣ Related Services / SEO Silo */}
            <section className="py-20 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Complete Digital Ecosystem</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight">Expand Your Digital Footprint.</h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Our content creation services work best when paired with our data-driven growth strategies.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { t: 'Performance Marketing', link: '/services/performance-marketing', d: 'Boost your content ROI with targeted ad campaigns.' },
                            { t: 'Social Media Handling', link: '/services/social-media-handling', d: 'Let us manage your community and daily engagement.' },
                            { t: 'Software Development', link: '/services/software-development', d: 'Build custom platforms to host and monetize your content.' }
                        ].map((service, i) => (
                            <a
                                key={i}
                                href={service.link}
                                className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-brand-medium/50 transition-all group"
                            >
                                <h4 className="text-xl font-bold mb-3 group-hover:text-brand-medium transition-colors">{service.t}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{service.d}</p>
                                <div className="flex items-center text-brand-medium font-bold text-xs uppercase tracking-widest gap-2">
                                    Explore Service <ArrowRight className="w-4 h-4" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>


            {/* Success Stories Section */}
            <CaseStudies 
                studies={CONTENT_CASE_STUDIES} 
                subtitle="Creative Impact" 
                title="Content That Captivates."
                themeColor="#3994fa"
            />

            {/* Final CTA Section */}
            <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-transparent to-brand-medium/10 reveal-section">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tight">Ready to Turn Content <br /> Into <span className="text-brand-medium">Growth?</span></h2>
                        <p className="text-xl text-slate-500 dark:text-slate-400">Join the top-tier brands using Preet Tech OPC Private Limited for strategic creative excellence.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.button
                            onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-95 text-white font-black rounded-2xl shadow-2xl flex items-center gap-4 uppercase tracking-widest text-[11px] sm:text-[13px]"
                        >
                            Start Your Content Project <Plus className="w-5 h-5" />
                        </motion.button>
                        <Link
                            href="/contact"
                            className="px-6 sm:px-10 py-4 sm:py-5 border-2 border-[#3994fa]/20 hover:bg-gradient-to-r hover:from-[#3994fa] hover:to-[#004aad] hover:text-white hover:border-transparent font-black rounded-2xl flex items-center gap-4 uppercase tracking-widest text-[11px] sm:text-[13px] transition-all"
                        >
                            Schedule Free Call <Calendar className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>



            <Footer />

            {/* Mobile Sticky CTA */}
            <motion.div
                
                
                className="fixed bottom-0 left-0 right-0 p-4 z-50 md:hidden pointer-events-none"
            >
                <div className="glass-morphism rounded-2xl border border-white/20 p-2 shadow-2xl pointer-events-auto">
                    <a
                        href="#consultation"
                        className="w-full py-4 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white font-black rounded-xl flex items-center justify-center gap-3 uppercase tracking-widest text-[11px]"
                    >
                        Free Strategy Call <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </motion.div>
        </main>
    );
}

function Map(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a2 2 0 0 1-1.106 1.789l-3.659 1.83a2 2 0 0 1-1.788 0l-4.894-2.447a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 17.381V4.618a2 2 0 0 1 1.106-1.789l3.659-1.83a2 2 0 0 1 1.788 0z" />
            <path d="M15 5.764v15" />
            <path d="M9 3.236v15" />
        </svg>
    )
}

function ChevronDown(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}
