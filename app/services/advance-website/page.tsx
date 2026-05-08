"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Monitor, Globe, Code2, Server, Database, Smartphone, Layout, Rocket,
    ShieldCheck, Zap, ArrowRight, CheckCircle2, ArrowUpRight, Check,
    Building2, BarChart3, Activity, Command, Hexagon, Component, Key, Lock, Network, Maximize,
    Users, ShoppingCart, Home, GraduationCap, HeartPulse, PieChart, Focus, Map, Layers, Fingerprint, Eye, Sliders, Shield, Cloud, CreditCard, Plug, Workflow, RefreshCw, Bot, FileCode2,
    Gauge, Target, Send, Phone, Mail, User, Briefcase, Calendar, Star, IndianRupee, Plus, Minus, HelpCircle, Palette, Clock, MessageSquare, Wrench, LifeBuoy, BadgePercent, TrendingUp, ExternalLink, ChevronRight, GitBranch, TestTube2, Figma, Container, Play, X, MousePointer2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PhoneInput from '@/components/PhoneInput';
import CaseStudies, { CaseStudy } from '@/components/CaseStudies';


// ----------------------------------------------------------------------
// Advanced Website Development Page Component
// ----------------------------------------------------------------------
export default function AdvancedWebsiteDevelopment() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const ADV_CASE_STUDIES: CaseStudy[] = [
        {
            id: 'adv-1',
            title: 'Headless E-commerce Transformation',
            client: 'Moda Luxe',
            category: 'Next.js / Shopify Headless',
            description: 'Migrated a standard Shopify store to a headless Next.js frontend, improving page load speed by 300% and increasing conversion by 40%.',
            stats: [
                { label: 'Speed', value: '+300%' },
                { label: 'Conversion', value: '+40%' },
                { label: 'Lighthouse', value: '100/100' }
            ],
            tags: ['Next.js', 'Shopify Storefront API', 'Vercel']
        },
        {
            id: 'adv-2',
            title: 'Multi-Vendor Marketplace',
            client: 'Gig economy Hub',
            category: 'Marketplace Development',
            description: 'Built a complex platform with real-time bidding, escrow payments, and an automated dispute resolution system.',
            stats: [
                { label: 'Vendors', value: '5k+' },
                { label: 'Transactions', value: '$2M+' },
                { label: 'Latency', value: '<50ms' }
            ],
            tags: ['Node.js', 'Socket.io', 'PostgreSQL']
        }
    ];

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        countryCode: '+91',
        budget: '5k-10k', // default from options
    });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('loading');
        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    phone: `${formData.countryCode} ${formData.phone}`,
                    industry: 'N/A',
                    service: 'Advance Website'
                })
            });
            if (res.ok) {
                setSubmitStatus('success');
                setIsSubmitted(true);
                setFormData({ name: '', businessName: '', email: '', phone: '', countryCode: '+91', budget: '5k-10k' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            /* handled by next-themes */
            setIsDarkMode(true);
        } else if (storedTheme === 'light') {
            /* handled by next-themes */
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        const next = !isDarkMode;
        setIsDarkMode(next);
        if (next) {
            /* handled by next-themes */
            localStorage.setItem('theme', 'dark');
        } else {
            /* handled by next-themes */
            localStorage.setItem('theme', 'light');
        }
    };


    return (
        <main ref={containerRef} className="relative z-10 selection:bg-[#3994fa]/20 overflow-x-clip bg-[#fafafa] text-slate-900 dark:bg-[#050608] dark:text-white transition-colors duration-300 font-sans">
            <Navbar isDark={isDarkMode} toggleTheme={toggleTheme} />

            {/* Global Ambient Tech Grid */}
            <div className="fixed inset-0 grid-parallax -z-10 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* 1️⃣ Hero Section */}
            <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-44 lg:pb-28 px-4 md:px-6 overflow-hidden">

                {/* STATIC BACKGROUND LAYERS */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">

                    {/* Static Gradient Orbs */}
                    <div
                        className="absolute top-[10%] -right-[10%] w-[700px] h-[700px] bg-[#3994fa]/20 dark:bg-[#3994fa]/30 blur-[180px] rounded-full"
                    />
                    <div
                        className="absolute -bottom-[15%] -left-[15%] w-[600px] h-[600px] bg-indigo-500/15 dark:bg-indigo-500/25 blur-[160px] rounded-full"
                    />
                    <div
                        className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-violet-500/10 blur-[140px] rounded-full"
                    />

                    {/* Ambient Glows around the grid */}
                    <div
                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(63,143,204,0.1)_0%,transparent_60%)]"
                    />

                    {/* Rotating Orbital Rings (Static) */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#3994fa]/5 rounded-full hidden lg:block"
                    />
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border border-dashed border-[#3994fa]/[0.03] rounded-full hidden lg:block"
                    />
                </div>


                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    <div className="lg:col-span-6 space-y-6 md:space-y-10 relative z-10">

                        {/* Status Badge */}
                        <div
                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-lg"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3994fa] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3994fa]" />
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">Advanced Development</span>
                        </div>

                        {/* Title with Staggered Word Animation */}
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.05]"
                        >
                            <span
                                className="block whitespace-nowrap"
                            >
                                High-Performance
                            </span>
                            <span
                                className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3994fa] to-blue-500"
                            >
                                Custom Websites
                            </span>
                            <span
                                className="block"
                            >
                                Built to Scale.
                            </span>
                        </h1>

                        <p
                            className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
                        >
                            Advanced architecture, custom UI/UX, and powerful backend systems designed for serious business growth and enterprise scalability.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-5"
                        >
                            <Link
                                href="/case-studies/advance-website"
                                className="px-8 sm:px-10 py-4 sm:py-4 gap-2.5 text-base sm:text-lg group bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white hover:opacity-90 font-bold rounded-[2rem] transition-transform hover:-translate-y-0.5 shadow-[0_8px_30px_rgb(63,143,204,0.3)] flex items-center justify-center relative overflow-hidden focus:outline-none"
                            >
                                <span className="relative z-10 flex items-center gap-2">Case Studies <ArrowRight className="w-5 h-5" /></span>
                            </Link>
                            <button
                                onClick={(e) => { e.preventDefault(); setIsVideoOpen(true); }}
                                className="px-8 sm:px-10 py-4 sm:py-4 text-base sm:text-lg bg-white dark:bg-[#050608] border border-slate-200 dark:border-white/10 text-[#1a2b4b] dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 font-bold rounded-[2rem] transition-transform hover:-translate-y-0.5 shadow-sm flex items-center justify-center"
                            >
                                Watch Demo <Play className="w-5 h-5 fill-current ml-2" strokeWidth={0} />
                            </button>
                        </div>

                        {/* Floating Tech Stack Badges */}
                        <div
                            className="flex flex-wrap gap-3 pt-4"
                        >
                            {['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS'].map((tech, i) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:border-[#3994fa]/50 hover:text-[#3994fa] transition-colors cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative">

                        {/* Glowing Halo Behind Dashboard (Static) */}
                        <div
                            className="absolute -inset-8 bg-gradient-to-br from-[#3994fa]/20 via-indigo-500/10 to-[#3994fa]/20 blur-[60px] rounded-[3rem] -z-10"
                        />

                        {/* Custom Lead Form */}
                        <div
                            className="relative z-10 w-full bg-white dark:bg-[#0a0f18] border border-slate-200  dark:border-white/10 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_-15px_rgba(63,143,204,0.05)] overflow-hidden group"
                        >
                            {/* Decorative background gradients */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3994fa]/5 dark:bg-[#3994fa]/10 blur-[60px] rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-[#3994fa]/10 dark:group-hover:bg-[#3994fa]/20" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-indigo-500/10 dark:group-hover:bg-indigo-500/20" />

                            <div className="relative z-10">
                                {isSubmitted ? (
                                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center my-10">
                                        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                                            <div className="absolute inset-0 bg-emerald-500/30 rounded-full animate-ping" />
                                            <Check className="w-8 h-8 text-emerald-500 relative z-10" />
                                        </div>
                                        <h4 className="text-lg font-bold text-emerald-500 mb-2 uppercase tracking-wider">Consultation Requested</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Our team will contact you shortly.</p>
                                    </div>
                                ) : (
                                    <form
                                        onSubmit={handleFormSubmit}
                                        className="space-y-6"
                                    >
                                        {/* Full Name */}
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Full Name</label>
                                            <div className="relative group/field">
                                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none transition-colors group-focus-within/field:text-[#3994fa]">
                                                    <User className="w-[18px] h-[18px] text-slate-400 group-focus-within/field:text-[#3994fa] transition-colors" strokeWidth={1.5} />
                                                </div>
                                                <input required type="text" value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl pl-11 pr-4 py-3.5 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-[#3994fa]/50 focus:border-[#3994fa]/50 transition-all font-medium placeholder:text-slate-300 dark:placeholder:text-slate-600 hover:border-slate-300 dark:hover:border-white/20" placeholder="John Doe" />
                                            </div>
                                        </div>

                                        {/* Business Name */}
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Business Name</label>
                                            <div className="relative group/field">
                                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none transition-colors group-focus-within/field:text-[#3994fa]">
                                                    <Building2 className="w-[18px] h-[18px] text-slate-400 group-focus-within/field:text-[#3994fa] transition-colors" strokeWidth={1.5} />
                                                </div>
                                                <input type="text" value={formData.businessName || ''} onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} className="w-full bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl pl-11 pr-4 py-3.5 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-[#3994fa]/50 focus:border-[#3994fa]/50 transition-all font-medium placeholder:text-slate-300 dark:placeholder:text-slate-600 hover:border-slate-300 dark:hover:border-white/20" placeholder="Your Company Ltd." />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-4">
                                            {/* Email */}
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Email</label>
                                                <div className="relative group/field">
                                                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none transition-colors group-focus-within/field:text-[#3994fa]">
                                                        <Mail className="w-[18px] h-[18px] text-slate-400 group-focus-within/field:text-[#3994fa] transition-colors" strokeWidth={1.5} />
                                                    </div>
                                                    <input required type="email" value={formData.email || ''} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl pl-11 pr-4 py-3.5 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-[#3994fa]/50 focus:border-[#3994fa]/50 transition-all font-medium placeholder:text-slate-300 dark:placeholder:text-slate-600 hover:border-slate-300 dark:hover:border-white/20" placeholder="john@example.com" />
                                                </div>
                                            </div>
                                            {/* Phone */}
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Phone</label>
                                                <PhoneInput
                                                    value={formData.phone}
                                                    onChange={(val) => setFormData({ ...formData, phone: val })}
                                                    countryCode={formData.countryCode}
                                                    onCountryCodeChange={(code) => setFormData({ ...formData, countryCode: code })}
                                                />
                                            </div>
                                        </div>

                                        {/* Budget Range */}
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Budget Range</label>
                                            <div className="relative group/field">
                                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none transition-colors group-focus-within/field:text-[#3994fa]">
                                                    <CreditCard className="w-[18px] h-[18px] text-slate-400 group-focus-within/field:text-[#3994fa] transition-colors" strokeWidth={1.5} />
                                                </div>
                                                <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl pl-11 pr-10 py-3.5 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-[#3994fa]/50 focus:border-[#3994fa]/50 transition-all font-medium appearance-none shadow-sm text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20 cursor-pointer">
                                                    <option value="5k-10k">₹5k - ₹10k</option>
                                                    <option value="10k-25k">₹10k - ₹25k</option>
                                                    <option value="25k-50k">₹25k - ₹50k</option>
                                                    <option value="50k+">₹50k+</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 transition-colors group-focus-within/field:text-[#3994fa]">
                                                    <ChevronRight className="w-4 h-4 rotate-90" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                disabled={isSubmitting}
                                                type="submit"
                                                className="w-full py-4 text-[13px] gap-2 disabled:opacity-70 group/btn duration-300 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white hover:opacity-90 font-bold rounded-full transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-[#3994fa]/20 text-center uppercase tracking-[0.1em] flex items-center justify-center"
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
                                                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center gap-2 uppercase tracking-widest text-[13px]">
                                                        Get Free Consultation <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                                                    </span>
                                                )}
                                            </button>
                                            {submitStatus === 'error' && <p className="text-red-500 text-[10px] font-black uppercase text-center mt-2 tracking-widest">Error! Please try again.</p>}
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2️⃣ Why Do Businesses Need This */}
            <section className="py-12 md:py-20 px-4 md:px-6 reveal-section border-t border-slate-200/50 dark:border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6">
                            <span className="text-[#3994fa] font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">The Problem Matrix</span>
                            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Why Template Websites Fail Scaling Businesses.</h2>
                            <p className="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Basic setups crack under pressure. As your traffic grows, limitations quickly turn into lost revenue.</p>

                            <ul className="space-y-4">
                                {[
                                    { t: "Limited Scalability", d: "Inflexible architecture that cannot adapt to complex operational workflows or traffic spikes." },
                                    { t: "Slow Performance", d: "Bloated plugins and poor databases that kill SEO rankings and user retention." },
                                    { t: "Poor Conversion Structure", d: "Generic layouts that fail to guide users down strategic sales funnels." },
                                    { t: "No Advanced Integrations", d: "Inability to sync natively with external CRMs, ERPs, or payment gateways." },
                                    { t: "Weak Backend Systems", d: "Unstable foundation lacking enterprise-grade security and custom logic." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <div className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center">
                                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                                        </div>
                                        <div>
                                            <strong className="text-slate-900 dark:text-white block text-base leading-tight">{item.t}</strong>
                                            <span className="text-slate-500 text-xs mt-0.5 block">{item.d}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Comparison Infographic */}
                        <div className="relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-[1.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#3994fa]/5 to-transparent pointer-events-none" />
                            <h3 className="text-xl font-bold mb-6 text-center">Framework Comparison</h3>

                            <div className="grid grid-cols-2 gap-3 md:gap-6">
                                {/* Basic */}
                                <div className="space-y-3 md:space-y-4">
                                    <h4 className="text-center font-bold text-slate-400 uppercase tracking-widest text-[10px] md:text-xs mb-4">Basic CMS</h4>
                                    {[
                                        { l: "Speed", s: "Avg 3-5s", c: "text-red-500 bg-red-50 dark:bg-red-500/10" },
                                        { l: "Security", s: "Vulnerable", c: "text-red-500 bg-red-50 dark:bg-red-500/10" },
                                        { l: "Scale", s: "Capped", c: "text-yellow-500 bg-yellow-50 dark:bg-yellow-500/10" },
                                        { l: "UI/UX", s: "Template", c: "text-slate-500 bg-slate-50 dark:bg-white/5" }
                                    ].map((stat, i) => (
                                        <div key={i} className="text-center p-2.5 md:p-3 rounded-xl border border-slate-100 dark:border-white/5">
                                            <span className="block text-[9px] md:text-[10px] font-bold text-slate-400 mb-0.5">{stat.l}</span>
                                            <span className={`block font-bold text-xs md:text-sm rounded-md py-1 ${stat.c}`}>{stat.s}</span>
                                        </div>
                                    ))}
                                </div>
                                {/* Advanced */}
                                <div className="space-y-3 md:space-y-4">
                                    <h4 className="text-center font-bold text-[#3994fa] uppercase tracking-widest text-[10px] md:text-xs mb-4 focus:text-white">Advanced System</h4>
                                    {[
                                        { l: "Speed", s: "Sub-Second", c: "text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10" },
                                        { l: "Security", s: "Bank-Grade", c: "text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10" },
                                        { l: "Scale", s: "Infinite", c: "text-[#3994fa] bg-[#3994fa]/10" },
                                        { l: "UI/UX", s: "Custom Built", c: "text-[#3994fa] bg-[#3994fa]/10" }
                                    ].map((stat, i) => (
                                        <div key={i} className="text-center p-2.5 md:p-3 rounded-xl border border-[#3994fa]/20 dark:border-[#3994fa]/30 relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-[#3994fa]/5 group-hover:bg-[#3994fa]/10 transition-colors" />
                                            <span className="block text-[9px] md:text-[10px] font-bold text-slate-500 dark:text-slate-300 mb-0.5 relative z-10">{stat.l}</span>
                                            <span className={`block font-bold text-xs md:text-sm rounded-md py-1 ${stat.c} relative z-10 shadow-[0_0_15px_rgba(16,185,129,0.2)]`}>{stat.s}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3️⃣ Why Choose Preet Tech OPC Private Limited */}
            <section className="py-16 md:py-32 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-[#3994fa] font-bold uppercase tracking-[0.2em] text-xs">The Preet Tech OPC Private Limited Standard</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Engineered for Dominance.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { t: "Custom Framework", i: Layers, d: "Zero templates. Built-from-scratch ecosystems utilizing React, Next.js, and Node.js for absolute control." },
                            { t: "Scalable Backend Systems", i: Server, d: "Serverless architectures and robust microservices designed to handle extreme data loads seamlessly." },
                            { t: "Conversion-Focused Design", i: Target, d: "Neurological UI principles that map to user intent, converting passing traffic into retained revenue." },
                            { t: "Enterprise-Level Security", i: ShieldCheck, d: "Multi-layered encryption, SSL hardening, and active firewall nodes shielding your core data." },
                            { t: "High-Speed Optimization", i: Zap, d: "Aggressive CDN caching and code splitting to guarantee near-instantaneous global load times." },
                            { t: "Long-Term Technical Support", i: HeartPulse, d: "Continuous engineering protocols. We monitor, maintain, and upgrade your system post-launch." }
                        ].map((feat, i) => (
                            <div key={i} className="p-6 md:p-10 rounded-2xl md:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                {/* Hover Glow */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#3994fa]/0 group-hover:bg-[#3994fa]/10 blur-[40px] rounded-full transition-colors duration-300" />

                                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-8 border border-slate-100 dark:border-white/10 group-hover:border-[#3994fa]/50 transition-colors">
                                    <feat.i className="w-6 h-6 text-[#3994fa]" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{feat.t}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feat.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4️⃣ Who Is This For? */}
            <section className="py-16 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl space-y-4">
                            <span className="text-[#3994fa] font-bold uppercase tracking-[0.2em] text-xs">Target Audiences</span>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built for Scaling Ventures.</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {[
                            { t: "SaaS Startups", i: Cloud, d: "Software platforms needing robust logic." },
                            { t: "E-Commerce Brands", i: ShoppingCart, d: "High-volume retail relying on speed." },
                            { t: "Real Estate Firms", i: Home, d: "Property databases with advanced search." },
                            { t: "Education Platforms", i: GraduationCap, d: "LMS systems handling heavy video traffic." },
                            { t: "Healthcare Systems", i: Activity, d: "HIPAA compliant patient portal architectures." },
                            { t: "Corporate Enterprises", i: Building2, d: "Global conglomerates requiring extreme scale." }
                        ].map((ind, i) => (
                            <div key={i} className="flex gap-4 md:gap-6 items-start p-5 md:p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 hover:border-[#3994fa] transition-colors group">
                                <ind.i className="w-6 h-6 md:w-8 md:h-8 text-slate-400 group-hover:text-[#3994fa] shrink-0 transition-colors" />
                                <div>
                                    <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2">{ind.t}</h4>
                                    <p className="text-xs text-slate-500 font-medium">{ind.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5️⃣ What Makes Advance Development Different */}
            <section className="py-20 md:py-32 px-4 md:px-6 bg-slate-50 dark:bg-[#030508] text-slate-900 dark:text-white reveal-section border-y border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-20" style={{ backgroundImage: 'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                {/* Decorative glows */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#3994fa]/10 blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3994fa]/10 border border-[#3994fa]/20 mb-2">
                            <span className="w-2 h-2 rounded-full bg-[#3994fa] animate-pulse" />
                            <span className="text-[#3994fa] font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">The Differentiator</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Beyond Standard Web Design.</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium text-sm md:text-base leading-relaxed">
                            We don't just build websites. We engineer high-performance platforms designed to scale your business, optimize user journeys, and dominate your industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 w-full">
                        {[
                            { title: "Custom Framework", desc: "No restrictive themes. Proprietary code designed exclusively for your workflows.", icon: Code2, num: "01" },
                            { title: "Merciless Optimization", desc: "Aggressive auditing and global CDNs guarantee sub-second load times.", icon: Zap, num: "02" },
                            { title: "Neurological UI/UX", desc: "Bespoke user journeys driven by cognitive principles to maximize conversions.", icon: Layout, num: "03" },
                            { title: "Headless Integration", desc: "Seamlessly couple with any API, CRM, or external tool natively.", icon: Network, num: "04" },
                            { title: "Infinite Scalability", desc: "Microservices ensure your platform can handle explosive traffic spikes effortlessly.", icon: Activity, num: "05" }
                        ].map((block, i) => (
                            <div key={i} className="group relative bg-white dark:bg-[#0a0f16] rounded-[2rem] p-6 lg:p-8 border border-slate-200 dark:border-white/[0.05] hover:border-[#3994fa]/30 dark:hover:border-[#3994fa]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(63,143,204,0.15)] overflow-hidden flex flex-col h-full">
                                {/* Hover Gradient Sweep */}
                                <div className="absolute inset-0 bg-gradient-to-b from-[#3994fa]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                {/* Top Highlight Line */}
                                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#3994fa] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Background Number */}
                                <div className="absolute -bottom-2 -right-2 text-[6rem] font-black text-slate-900/[0.03] dark:text-white/[0.02] group-hover:text-slate-900/[0.06] dark:group-hover:text-white/[0.05] group-hover:-translate-x-2 transition-all duration-300 pointer-events-none leading-none">
                                    {block.num}
                                </div>

                                <div className="relative z-10 flex flex-col flex-grow">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] flex items-center justify-center mb-6 group-hover:bg-[#3994fa]/10 group-hover:border-[#3994fa]/30 transition-all duration-300">
                                        <block.icon className="w-6 h-6 text-slate-400 group-hover:text-[#3994fa] transition-colors duration-300" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-[#3994fa] transition-colors duration-300">
                                        {block.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 font-medium text-sm leading-relaxed max-w-[95%]">
                                        {block.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6️⃣ Custom UI/UX Strategy */}
            <section className="py-16 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1 relative">
                        {/* Animated UI Mockup */}
                        <div className="bg-slate-100 dark:bg-slate-800 p-4 sm:p-8 rounded-2xl sm:rounded-[3rem] border border-slate-200 dark:border-white/10 relative shadow-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-[#3994fa]/5 group-hover:bg-[#3994fa]/10 transition-colors duration-500" />
                            <div className="relative z-10">
                                {/* Wireframe layer */}
                                <div className="border-4 border-dashed border-slate-300 dark:border-white/20 rounded-2xl absolute inset-0 -rotate-3 scale-95 opacity-50" />
                                {/* High Fidelity layer */}
                                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-white/5 p-6 space-y-6 relative rotate-2 group-hover:rotate-0 transition-transform duration-400">
                                    <div className="flex justify-between items-center mb-6 border-b pb-4 dark:border-white/10">
                                        <div className="h-6 w-24 bg-slate-800 dark:bg-white rounded-full" />
                                        <div className="flex gap-2"><div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-white/10" /><div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-white/10" /></div>
                                    </div>
                                    <div className="w-full bg-slate-50 dark:bg-slate-800 rounded-xl relative overflow-hidden border border-slate-200 dark:border-white/10">
                                        <img src="/neurological_ui_design.png" alt="Neurological UI/UX Design Demonstration" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-400 ease-out" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-10">
                        <span className="text-[#3994fa] font-bold uppercase tracking-[0.2em] text-xs">Design Engineering</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Neurological UI/UX Strategy.</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Design isn't just aesthetics—it's directed geometry. We engineer interface pathways that subconsciously pull users toward conversion actions.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                            {[
                                { t: "User Journey Mapping", i: Map },
                                { t: "Wireframing & Prototypes", i: Component },
                                { t: "Conversion-Driven Layouts", i: MousePointer2 },
                                { t: "Brand-Aligned UI Systems", i: Fingerprint },
                                { t: "Interactive Micro-Animations", i: Sliders }
                            ].map((strat, i) => (
                                <div key={i} className="flex gap-3 items-center">
                                    <div className="w-8 h-8 rounded-lg bg-[#3994fa]/10 flex items-center justify-center text-[#3994fa]">
                                        <strat.i className="w-4 h-4" />
                                    </div>
                                    <span className="font-bold text-sm">{strat.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7️⃣ Web Applications & Custom Features */}
            <section className="py-16 md:py-32 px-4 md:px-6 bg-slate-50 dark:bg-[#030405] text-slate-900 dark:text-white reveal-section border-y border-slate-200/50 dark:border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 space-y-4">
                        <span className="text-[#3994fa] font-bold uppercase tracking-[0.2em] text-xs">Functional Modules</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Powerful Web Applications.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { t: "Admin Dashboards", d: "Command centers to monitor KPIs, users, and financials.", i: Monitor },
                            { t: "User Portals", d: "Secure, personalized hubs for client interaction.", i: Users },
                            { t: "Booking Systems", d: "Complex scheduling algorithms avoiding double-booking.", i: Component },
                            { t: "Membership Platforms", d: "Gated content and tier-based feature access.", i: Key },
                            { t: "Role-Based Access", d: "Deep permission matrices for enterprise teams.", i: Lock },
                            { t: "Custom Modules", d: "Any proprietary logic your business requires.", i: Code2 }
                        ].map((feat, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white dark:bg-[#0a0f16] border border-slate-200 dark:border-white/5 hover:border-[#3994fa]/50 dark:hover:border-[#3994fa]/30 transition-all flex flex-col justify-between h-full shadow-sm dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:shadow-md">
                                <feat.i className="w-10 h-10 text-[#3994fa] mb-8" />
                                <div>
                                    <h3 className="text-xl font-bold mb-3">{feat.t}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">{feat.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8️⃣ Heavy-Duty Web Platforms */}
            <section className="py-16 md:py-32 px-4 md:px-6 reveal-section relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    {/* Breathtaking Asymmetric Grid Layout */}
                    <div className="mb-10 text-center lg:text-left flex flex-col lg:flex-row justify-between items-end gap-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-800 dark:text-white leading-[1.1] mb-4">
                                Heavy-Duty<br />
                                <span className="text-[#3994fa]">Web Platforms.</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Enterprise-grade infrastructures engineered for volume, velocity, and vertical scale. We build systems to dominate your industry.
                            </p>
                        </div>
                        <div className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 mb-4">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3994fa] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3994fa]"></span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">Live System</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[minmax(260px,auto)]">

                        {/* Huge Main Panel - Custom E-Commerce */}
                        <div
                            className="lg:col-span-2 lg:row-span-2 relative rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 bg-[#080d14] dark:bg-[#060A10] border border-slate-800 dark:border-white/5 overflow-hidden group shadow-2xl flex flex-col justify-between"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#3994fa]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                            {/* Dotted background */}
                            <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle, #3994fa 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                            <div className="relative z-10 flex justify-between items-start mb-6 lg:mb-10">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center">
                                    <ShoppingCart className="w-6 h-6 md:w-7 md:h-7 text-[#3994fa]" />
                                </div>
                                <span className="px-4 py-1.5 rounded-full border border-[#3994fa]/30 text-[#3994fa] text-[9px] md:text-[10px] font-black uppercase tracking-widest bg-[#3994fa]/5 shadow-[0_0_15px_rgba(63,143,204,0.2)]">Flagship</span>
                            </div>

                            <div className="relative z-10 w-full lg:w-[65%] mb-8 lg:mb-0">
                                <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-4 leading-tight">Custom E-Commerce <br className="hidden md:block" /> Engines.</h3>
                                <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed mb-6">Scaling beyond Shopify limits. We build headless Magento, Next.js Commerce, or fully custom transactional engines with zero-latency checkouts.</p>

                                <div className="flex flex-wrap gap-2">
                                    {['Headless CMS', 'High-Volume', 'Zero Latency'].map(tag => (
                                        <span key={tag} className="px-3 py-1.5 rounded-xl bg-white/5 text-slate-300 text-[9px] md:text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm border border-white/5">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Absolute image overlaying right side on desktop */}
                            <div className="hidden lg:block absolute -right-20 -bottom-20 w-[55%] lg:w-[45%] h-auto rounded-xl shadow-2xl border border-white/10 group-hover:scale-[1.03] group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-400 ease-out z-10 rotate-[-2deg] group-hover:rotate-0 overflow-hidden bg-[#0a0f18] p-1.5">
                                <img src="/advanced_ecommerce_dashboard.png" alt="E-Commerce Interface" className="w-full h-auto rounded-lg rounded-br-none" />
                            </div>
                            <div className="lg:hidden w-full h-[220px] mt-4 rounded-xl shadow-2xl border border-white/10 z-10 overflow-hidden relative bg-[#0a0f18] flex-shrink-0">
                                <img src="/advanced_ecommerce_dashboard.png" alt="E-Commerce Interface" className="absolute top-1.5 left-1.5 w-full h-auto rounded-tl-lg" />
                            </div>
                        </div>

                        {/* Top Right - SaaS */}
                        <div
                            className="relative rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-violet-500/30 transition-colors group overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-none flex flex-col justify-center"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/10 blur-[40px] rounded-full group-hover:bg-violet-500/20 transition-colors" />
                            <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-5 text-violet-500 relative z-10 shrink-0">
                                <Layers className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10 shrink-0">SaaS Web Apps</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-[13px] font-medium leading-relaxed mb-5 relative z-10">Multi-tenant architecture and subscription logic engines built to scale securely.</p>
                            <div className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-violet-500 group-hover:translate-x-2 transition-transform relative z-10 mt-auto">
                                View Capabilities <ArrowRight className="w-3.5 h-3.5 ml-2" />
                            </div>
                        </div>

                        {/* Bottom Right - CRM */}
                        <div
                            className="relative rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-emerald-500/30 transition-colors group overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-none flex flex-col justify-center"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 blur-[40px] rounded-full group-hover:bg-emerald-500/20 transition-colors" />
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 text-emerald-500 relative z-10 shrink-0">
                                <Database className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10 shrink-0">CRM / ERP Systems</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-[13px] font-medium leading-relaxed mb-5 relative z-10">Internal tooling built specifically for your operational model and team productivity.</p>
                            <div className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-emerald-500 group-hover:translate-x-2 transition-transform relative z-10 mt-auto">
                                View Capabilities <ArrowRight className="w-3.5 h-3.5 ml-2" />
                            </div>
                        </div>

                        {/* Row 3 - Marketplaces & Subscriptions */}
                        <div
                            className="lg:col-span-1 relative rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 bg-white dark:bg-[#0c111a] border border-slate-200 dark:border-white/5 hover:border-orange-500/30 transition-colors group overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-none flex flex-col justify-center"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 blur-[40px] rounded-full group-hover:bg-orange-500/20 transition-colors" />
                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-5 text-orange-500 relative z-10 shrink-0">
                                <Command className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10 shrink-0">Multi-Vendor Markets</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-[13px] font-medium leading-relaxed relative z-10 mt-auto">Complex vendor splitting, logistics routing, and multi-channel management platforms.</p>
                        </div>

                        <div
                            className="lg:col-span-2 relative rounded-[1.5rem] md:rounded-[2rem] p-6 lg:p-8 bg-gradient-to-br from-[#f8fafc] to-white dark:from-[#080d14] dark:to-[#050608] border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 transition-colors group overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-none flex flex-col sm:flex-row gap-6 items-center"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/5 blur-[60px] rounded-full group-hover:bg-indigo-500/10 transition-colors" />
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0 text-indigo-500 relative z-10 shadow-[inset_0_0_20px_rgba(99,102,241,0.1)]">
                                <RefreshCw className="w-7 h-7 sm:w-8 sm:h-8" />
                            </div>
                            <div className="relative z-10 text-center sm:text-left">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">Subscription Logic Engines</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-[13px] md:text-sm max-w-xl">Recurring billing APIs, automated dunning, robust tax calculations, and gated access control systems flawlessly integrated into your product.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 9️⃣ API & Backend Integration */}
            <section className="py-16 md:py-40 px-4 md:px-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-white reveal-section overflow-hidden relative border-y border-slate-200 dark:border-transparent">
                {/* Node architecture background wrapper (Static) */}
                <div
                    className="absolute top-[-200px] right-[-200px] w-[800px] h-[800px] opacity-[0.03] dark:opacity-10 pointer-events-none"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#3994fa] stroke-current stroke-[0.2]">
                        <circle cx="50" cy="50" r="40" fill="none" />
                        <g
                            style={{ transformOrigin: "50px 50px" }}
                        >
                            <circle cx="50" cy="50" r="20" fill="none" strokeDasharray="2,2" />
                        </g>
                        <line x1="10" y1="50" x2="90" y2="50" />
                        <line x1="50" y1="10" x2="50" y2="90" />
                        <circle cx="50" cy="10" r="2" fill="currentColor" />
                        <circle cx="90" cy="50" r="2" fill="currentColor" />
                        <circle cx="50" cy="90" r="2" fill="currentColor" />
                        <circle cx="10" cy="50" r="2" fill="currentColor" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
                    <div className="space-y-10">
                        <span className="text-[#3994fa] font-bold uppercase tracking-[0.2em] text-xs">Connectivity Core</span>
                        <h2 className="text-3xl md:text-6xl font-bold tracking-tight">API & Backend Logic.</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">No application operates in isolation. We wire your platform into the global digital ecosystem via robust API orchestrations securely.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-slate-200 dark:border-white/10">
                            {[
                                { t: "Payment Gateways", i: CreditCard, d: "Stripe, Razorpay, PayPal integrations" },
                                { t: "CRM & ERP Sync", i: Database, d: "Salesforce, HubSpot bidirectional sync" },
                                { t: "Third-Party APIs", i: Plug, d: "Twilio, Google, AWS services" },
                                { t: "Automation Systems", i: Workflow, d: "Zapier, Make, custom scripts" }
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex items-center gap-3 mb-2 text-slate-900 dark:text-white">
                                        <item.i className="w-5 h-5 text-[#3994fa]" />
                                        <h4 className="font-bold text-md">{item.t}</h4>
                                    </div>
                                    <p className="text-xs text-slate-500 font-semibold">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#050608] border border-slate-800 dark:border-white/10 p-4 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl relative">
                        <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-[#3994fa]/20 px-3 sm:px-4 py-1 text-[#3994fa] text-[8px] sm:text-[10px] uppercase font-bold tracking-widest rounded shadow-[0_0_20px_rgba(63,143,204,0.4)]">System Infrastructure Live</div>
                        <div className="font-mono text-[10px] sm:text-sm text-slate-300 leading-relaxed overflow-x-auto">
                            <div className="min-w-max">
                                {
                                    [
                                        <><span className="text-[#c678dd]">const</span> <span className="text-[#61afef]">PaymentPipeline</span> = <span className="text-[#c678dd]">async</span> (req) =&gt; {'{'}</>,
                                        <><span className="text-[#c678dd]">  try</span> {'{'}</>,
                                        <><span className="text-[#c678dd]">    const</span> {'{'} user, intent {'}'} = req.<span className="text-[#e06c75]">body</span>;</>,
                                        <>&nbsp;</>,
                                        <><span className="text-[#5c6370] italic">    // 1. Authenticate Request</span></>,
                                        <><span className="text-[#c678dd]">    await</span> <span className="text-[#e5c07b]">SecurityGuard</span>.<span className="text-[#61afef]">validate</span>(user.<span className="text-[#e06c75]">token</span>);</>,
                                        <>&nbsp;</>,
                                        <><span className="text-[#5c6370] italic">    // 2. Cross-check ERP</span></>,
                                        <><span className="text-[#c678dd]">    const</span> inventory = <span className="text-[#c678dd]">await</span> <span className="text-[#e5c07b]">ERP</span>.<span className="text-[#61afef]">checkStock</span>();</>,
                                        <>&nbsp;</>,
                                        <><span className="text-[#5c6370] italic">    // 3. Fire Payment API</span></>,
                                        <><span className="text-[#c678dd]">    const</span> tx = <span className="text-[#c678dd]">await</span> <span className="text-[#e5c07b]">Stripe</span>.<span className="text-[#61afef]">charge</span>(intent);</>,
                                        <>&nbsp;</>,
                                        <><span className="text-[#5c6370] italic">    // 4. Update internal DB</span></>,
                                        <><span className="text-[#c678dd]">    await</span> <span className="text-[#e5c07b]">DB</span>.orders.<span className="text-[#61afef]">insert</span>(tx.<span className="text-[#e06c75]">receipt</span>);</>,
                                        <>&nbsp;</>,
                                        <><span className="text-[#c678dd]">    return</span> res.<span className="text-[#61afef]">status</span>(<span className="text-[#d19a66]">200</span>).<span className="text-[#61afef]">json</span>({'{'} success: <span className="text-[#d19a66]">true</span> {'}'});</>,
                                        <><span className="text-[#c678dd]">  {'}'} catch</span> (error) {'{'} ... {'}'}</>,
                                        <>{'}'}</>
                                    ].map((line, i) => (
                                        <div
                                            key={i}
                                            className="whitespace-pre"
                                        >
                                            {line}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔟 High-Speed & Core Web Vitals Optimization */}
            <section className="py-16 md:py-32 px-4 md:px-6 reveal-section bg-slate-50 dark:bg-[#030405]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 w-full order-2 lg:order-1 relative">
                        {/* Speed Indicators Graphic */}
                        <div className="relative aspect-square max-h-[500px] mx-auto">
                            {/* Main Circle Gauge */}
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" fill="none" className="stroke-slate-200 dark:stroke-slate-800 stroke-[4]" />
                                <circle cx="50" cy="50" r="45" fill="none" className="stroke-[#3994fa] stroke-[4] animate-[dash_3s_ease-out_forwards]" strokeDasharray="283" strokeDashoffset="283" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <span className="text-7xl font-bold tracking-tighter">98<span className="text-2xl text-slate-400 font-normal">%</span></span>
                                <span className="text-xs uppercase font-bold tracking-[0.2em] text-slate-500 mt-2">Performance Score</span>
                            </div>

                            {/* Floating Web Vital metrics */}
                            <div className="absolute top-4 sm:top-10 -left-2 sm:-left-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-xl flex items-center gap-2 sm:gap-4 animate-bounce scale-75 sm:scale-100 origin-left" style={{ animationDuration: '4s' }}>
                                <div className="text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 p-2 rounded-lg font-bold">LCP</div>
                                <div><strong className="block font-bold">0.8s</strong><span className="text-[10px] text-slate-400 font-bold uppercase">Largest Content</span></div>
                            </div>
                            <div className="absolute bottom-4 sm:bottom-10 -right-2 sm:-right-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-xl flex items-center gap-2 sm:gap-4 animate-bounce scale-75 sm:scale-100 origin-right" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                                <div className="text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 p-2 rounded-lg font-bold">CLS</div>
                                <div><strong className="block font-bold">0.02</strong><span className="text-[10px] text-slate-400 font-bold uppercase">Layout Shift</span></div>
                            </div>
                        </div>
                        <style jsx>{` @keyframes dash { to { stroke-dashoffset: 28; } } `}</style>
                    </div>

                    <div className="lg:w-1/2 space-y-10 order-1 lg:order-2">
                        <span className="text-[#3994fa] font-bold uppercase tracking-[0.2em] text-xs">Velocity Engine</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Speed as a Feature.</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Latency equals lost clients. We engineer systems that pass Google's Core Web Vitals natively, delivering lightning-fast rendering globally.</p>

                        <div className="space-y-6">
                            {[
                                { t: "Optimized Codebase", d: "Tree-shaken JS, minified CSS, and modern web architectures like Server-Side Rendering." },
                                { t: "Lazy Loading & Next-Gen Formats", d: "Images in WebP/AVIF loaded asynchronously to prioritize first paint." },
                                { t: "Global CDN & Server Optimization", d: "Deployments via Vercel Edge networks to put data physically closer to users." }
                            ].map((f, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:border-[#3994fa] transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0"><Gauge className="w-5 h-5 text-[#3994fa]" /></div>
                                    <div><h4 className="font-bold text-lg">{f.t}</h4><p className="text-sm text-slate-500 mt-1">{f.d}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 1️⃣1️⃣ Security & Scalability */}
            <section className="py-16 md:py-32 px-4 md:px-6 bg-white dark:bg-[#040914] text-slate-900 dark:text-white reveal-section border-y border-slate-200 dark:border-white/10 relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#3994fa] to-transparent opacity-50" />

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 space-y-4">
                        <span className="text-[#3994fa] font-bold uppercase tracking-[0.2em] text-xs">Fortress Protocol</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Impenetrable Security. Infinite Scale.</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { t: "Data Encryption", i: Fingerprint, d: "AES-256 bit encryption at rest and TLS 1.3 in transit." },
                            { t: "Secure Auth", i: UserCheckIcon, d: "OAuth 2.0, JWT tokens, and biometric integration." },
                            { t: "Cloud Infrastructure", i: Cloud, d: "Load-balanced clusters on AWS, GCP, or Vercel." },
                            { t: "Scalable Scaling", i: Maximize, d: "Auto-scaling server setups for unlimited traffic." }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl hover:bg-[#3994fa] hover:text-slate-900 transition-all duration-300 group">
                                <stat.i className="w-10 h-10 text-[#3994fa] group-hover:text-slate-900 mb-6 transition-colors" />
                                <h3 className="font-bold text-xl mb-3">{stat.t}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-800 font-medium">{stat.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1️⃣2️⃣ Tech Stack & Infrastructure */}
            <section className="py-16 md:py-32 px-4 md:px-6 reveal-section relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-[#3994fa] font-bold uppercase tracking-[0.2em] text-xs">Development Blueprint</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Tech Stack</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">We leverage bleeding-edge technologies to build scalable, secure, and blazing-fast web ecosystems.</p>
                    </div>


                    <div className="mt-12 sm:mt-16 w-full overflow-hidden relative py-6">
                        {/* Gradient fades for smooth edges */}
                        <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#fafafa] dark:from-[#050608] to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#fafafa] dark:from-[#050608] to-transparent z-10 pointer-events-none" />

                        <div className="flex w-max animate-carousel hover:[animation-play-state:paused] gap-4 sm:gap-6 px-4 sm:px-6">
                            {[...Array(3)].map((_, arrayIndex) => (
                                <React.Fragment key={arrayIndex}>
                                    {[
                                        "React", "Next.js", "Node.js", "PHP", "AWS", "Vercel", "Appwrite", "Firebase", "Supabase", "Mailchimp", "Hubspot", "Hostinger", "GoDaddy", "BigRock", "Hygraph"
                                    ].map((tech, i) => (
                                        <div key={i} className="flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0f18] shadow-sm shrink-0 transition-colors hover:border-[#3994fa]/50">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#3994fa] shadow-[0_0_8px_rgba(63,143,204,0.8)]" />
                                            <span className="font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-300 whitespace-nowrap">{tech}</span>
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                        <style jsx>{`
                            @keyframes carousel {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(-33.333333%); }
                            }
                            .animate-carousel {
                                animation: carousel 35s linear infinite;
                            }
                        `}</style>
                    </div>

                    {/* Infrastructure Diagram */}
                    <div className="mt-16 sm:mt-24 max-w-6xl mx-auto px-4 sm:px-0">
                        <div className="text-center mb-12 sm:mb-16">
                            <h3 className="text-2xl md:text-4xl font-black text-slate-800 dark:text-white tracking-tight">System Infrastructure Flow</h3>
                            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-3 font-medium">A modular, decoupled infrastructure designed for maximum velocity and scale.</p>
                        </div>

                        <div className="relative">
                            {/* Desktop Horizontal Track Container */}
                            <div className="hidden lg:block absolute top-[26px] left-[5%] right-[5%] h-1 bg-slate-200 dark:bg-slate-800/50 rounded-full overflow-hidden">
                                <div className="absolute top-0 h-full w-[40%] bg-gradient-to-r from-transparent via-[#3994fa] to-transparent animate-flow-x" />
                            </div>

                            {/* Mobile Vertical Track Container */}
                            <div className="lg:hidden absolute top-14 bottom-14 left-[26px] w-1 bg-slate-200 dark:bg-slate-800/50 rounded-full overflow-hidden z-0">
                                <div className="absolute left-0 w-full h-[40%] bg-gradient-to-b from-transparent via-[#3994fa] to-transparent animate-flow-y" />
                            </div>

                            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-6 relative z-10 w-full">
                                {[
                                    { label: 'Client Layer', mainIcon: Smartphone, colorClass: 'bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]', textClass: 'text-cyan-500', glowClass: 'via-cyan-500', items: [{ name: 'React SPA', icon: Monitor }, { name: 'Next.js SSR', icon: Globe }, { name: 'PWA Support', icon: Smartphone }] },
                                    { label: 'API Gateway', mainIcon: Network, colorClass: 'bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.4)]', textClass: 'text-indigo-500', glowClass: 'via-indigo-500', items: [{ name: 'REST / GraphQL', icon: Network }, { name: 'Rate Limiting', icon: ShieldCheck }, { name: 'Auth Middleware', icon: Key }] },
                                    { label: 'Business Logic', mainIcon: Component, colorClass: 'bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.4)]', textClass: 'text-violet-500', glowClass: 'via-violet-500', items: [{ name: 'Microservices', icon: Component }, { name: 'Event Queue', icon: GitBranch }, { name: 'Cache Layer', icon: Zap }] },
                                    { label: 'Data Layer', mainIcon: Database, colorClass: 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]', textClass: 'text-emerald-500', glowClass: 'via-emerald-500', items: [{ name: 'PostgreSQL', icon: Database }, { name: 'Redis Cache', icon: RefreshCw }, { name: 'S3 Storage', icon: Cloud }] }
                                ].map((layer, i) => (
                                    <div key={i} className="flex lg:flex-col items-center gap-6 lg:gap-8 w-full group">

                                        {/* Node Marker */}
                                        <div className="shrink-0 w-14 h-14 rounded-full bg-slate-50 dark:bg-slate-900 border-[3px] border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-[#3994fa] transition-colors shadow-xl relative z-10">
                                            <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 group-hover:bg-[#3994fa]/20 flex items-center justify-center text-slate-500 group-hover:text-[#3994fa] transition-colors">
                                                <layer.mainIcon className="w-3.5 h-3.5" />
                                            </div>
                                        </div>

                                        {/* Content Card */}
                                        <div className="flex-1 w-full bg-white dark:bg-[#0a0f16] p-6 lg:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none group-hover:-translate-y-1 group-hover:border-[#3994fa]/30 transition-all duration-300 relative overflow-hidden">
                                            {/* Glowing Top Line */}
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent opacity-100 group-hover:opacity-0 transition-opacity" />
                                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${layer.glowClass} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

                                            <div className="inline-flex items-center gap-2 mb-6">
                                                <span className={`w-2 h-2 rounded-full ${layer.colorClass}`} />
                                                <span className="text-xs font-black uppercase tracking-widest text-slate-800 dark:text-white">{layer.label}</span>
                                            </div>

                                            <div className="space-y-3">
                                                {layer.items.map((item, j) => (
                                                    <div key={j} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 group-hover:border-slate-300 dark:group-hover:border-white/10 transition-colors">
                                                        <item.icon className={`w-4 h-4 ${layer.textClass}`} strokeWidth={2} />
                                                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{item.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <style jsx>{`
                            @keyframes flow-x {
                                0% { left: -40%; }
                                100% { left: 100%; }
                            }
                            @keyframes flow-y {
                                0% { top: -40%; }
                                100% { top: 100%; }
                            }
                            .animate-flow-x { animation: flow-x 2.5s ease-in-out infinite; }
                            .animate-flow-y { animation: flow-y 2.5s ease-in-out infinite; }
                        `}</style>
                    </div>
                </div>
            </section>


            {/* 1️⃣4️⃣ Development Process (Discovery → Launch) */}
            <section className="py-16 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-[#3994fa] font-bold uppercase tracking-[0.2em] text-xs">Our Protocol</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">From Discovery to Launch.</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">A structured, transparent development process engineered for quality and speed.</p>
                    </div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3994fa]/30 to-transparent hidden lg:block" />

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                            {[
                                { step: '01', title: 'Discovery', desc: 'Deep-dive into your business model, goals, competitors, and target audience.', icon: Target, duration: '1-2 Days' },
                                { step: '02', title: 'Strategy', desc: 'Technical architecture planning, tech stack selection, and conversion mapping.', icon: Map, duration: '2-3 Days' },
                                { step: '03', title: 'UI/UX Design', desc: 'Wireframes, high-fidelity prototypes, and user journey optimization.', icon: Palette, duration: '5-7 Days' },
                                { step: '04', title: 'Development', desc: 'Full-stack coding with agile sprints, code reviews, and progress demos.', icon: Code2, duration: '2-4 Weeks' },
                                { step: '05', title: 'QA & Testing', desc: 'Cross-browser testing, performance audits, security scans, and UAT.', icon: TestTube2, duration: '3-5 Days' },
                                { step: '06', title: 'Launch', desc: 'Deployment to production, DNS setup, SSL certs, and monitoring activation.', icon: Rocket, duration: '1-2 Days' }
                            ].map((phase, i) => (
                                <motion.div
                                    key={i}



                                    
                                    className="relative text-center group"
                                >
                                    {/* Step Circle */}
                                    <div className="relative z-10 w-14 h-14 mx-auto mb-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-white/10 group-hover:border-[#3994fa] flex items-center justify-center transition-colors shadow-lg">
                                        <phase.icon className="w-6 h-6 text-slate-400 group-hover:text-[#3994fa] transition-colors" />
                                    </div>

                                    <span className="text-3xl font-black text-slate-100 dark:text-white/5 block mb-2">{phase.step}</span>
                                    <h4 className="font-bold text-lg mb-2">{phase.title}</h4>
                                    <p className="text-xs text-slate-500 font-medium leading-relaxed mb-3">{phase.desc}</p>
                                    <span className="inline-block px-3 py-1 rounded-full bg-[#3994fa]/10 text-[#3994fa] text-[10px] font-bold">{phase.duration}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 1️⃣5️⃣ Maintenance & Support Plans */}
            <section className="py-16 md:py-32 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/30 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-[#3994fa] font-bold uppercase tracking-[0.2em] text-xs">Post-Launch Care</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Maintenance & Support.</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">Your website is a living asset. We ensure it stays optimized, secure, and ahead of the curve.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: 'Essential',
                                desc: 'Core upkeep for smooth operation.',
                                icon: Wrench,
                                features: ['Monthly Security Updates', 'Uptime Monitoring', 'Bug Fixes (5hrs/mo)', 'Monthly Performance Report', 'Email Support'],
                                highlight: false
                            },
                            {
                                title: 'Professional',
                                desc: 'Proactive maintenance for growing businesses.',
                                icon: Shield,
                                features: ['Everything in Essential', 'Priority Bug Fixes (15hrs/mo)', 'Feature Enhancements', 'SEO Monitoring & Tweaks', 'Dedicated Slack Channel', '24/7 Emergency Support'],
                                highlight: true
                            },
                            {
                                title: 'Enterprise',
                                desc: 'Full technical partnership for scaling brands.',
                                icon: LifeBuoy,
                                features: ['Everything in Professional', 'Unlimited Dev Hours', 'Quarterly Strategy Reviews', 'Infrastructure Scaling', 'Custom Integrations', 'Dedicated Account Manager'],
                                highlight: false
                            }
                        ].map((plan, i) => (
                            <div
                                key={i}
                                className={`p-8 rounded-3xl border relative flex flex-col h-full overflow-hidden ${plan.highlight
                                    ? 'bg-white dark:bg-slate-900 border-[#3994fa] shadow-xl shadow-[#3994fa]/10'
                                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10'
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#3994fa] to-blue-500" />
                                )}
                                <div className="flex-1">
                                    <plan.icon className={`w-10 h-10 mb-6 ${plan.highlight ? 'text-[#3994fa]' : 'text-slate-400'}`} />
                                    <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                                    <p className="text-sm text-slate-500 mb-8">{plan.desc}</p>
                                    <ul className="space-y-3">
                                        {plan.features.map((f, j) => (
                                            <li key={j} className="flex items-start gap-3 text-sm">
                                                <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-[#3994fa]' : 'text-slate-400'}`} />
                                                <span className="font-medium">{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <a href="#contact" className={`w-full mt-8 py-4 text-sm ${plan.highlight ? "ring-2 ring-[#3994fa] ring-offset-2 ring-offset-slate-900" : ""} bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white hover:opacity-90 font-bold rounded-full transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-[#3994fa]/20 text-center uppercase tracking-[0.1em] flex items-center justify-center`}>
                                    Get Started
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1️⃣6️⃣ Premium Pricing Structure */}
            <section className="py-16 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-[#3994fa] font-bold uppercase tracking-[0.2em] text-xs">Investment Tiers</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Transparent Pricing.</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">Every project is unique. Choose a tier that matches your scale, and we'll tailor the scope to your exact requirements.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                tier: 'Growth',
                                price: '₹1.5L - 3L',
                                desc: 'For startups and SMBs needing a custom, high-performance website.',
                                deliverables: ['5-10 Custom Pages', 'Responsive Design', 'Basic SEO Setup', 'CMS Integration', 'Contact Forms & CTAs', '30-Day Post-Launch Support'],
                                timeline: '3-4 Weeks',
                                highlight: false
                            },
                            {
                                tier: 'Enterprise',
                                price: '₹3L - 8L',
                                desc: 'For scaling businesses requiring complex web applications and integrations.',
                                deliverables: ['15-30+ Custom Pages', 'Custom UI/UX Design', 'Advanced SEO & Analytics', 'API Integrations', 'Admin Dashboard', 'E-Commerce / Booking System', '90-Day Support & Optimization'],
                                timeline: '6-10 Weeks',
                                highlight: true
                            },
                            {
                                tier: 'Custom',
                                price: 'Let\'s Talk',
                                desc: 'For enterprises requiring fully bespoke architectures and ongoing development.',
                                deliverables: ['Unlimited Pages & Modules', 'Full Custom Framework', 'Microservices / Headless CMS', 'Multi-Language Support', 'Enterprise Security', 'Dedicated Dev Team', 'Ongoing Technical Partnership'],
                                timeline: 'Scoped per project',
                                highlight: false
                            }
                        ].map((plan, i) => (
                            <div
                                key={i}
                                className={`rounded-3xl flex flex-col h-full overflow-hidden relative ${plan.highlight
                                    ? 'bg-gradient-to-b from-[#3994fa]/10 to-transparent border-2 border-[#3994fa] shadow-2xl shadow-[#3994fa]/10'
                                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10'
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="bg-[#3994fa] text-slate-950 text-center py-2 text-[10px] font-black uppercase tracking-[0.3em]">
                                        Most Popular
                                    </div>
                                )}
                                <div className="p-8 md:p-10 flex flex-col flex-1">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-1">{plan.tier}</h3>
                                        <div className="text-3xl md:text-4xl font-black text-[#3994fa] mb-3">{plan.price}</div>
                                        <p className="text-sm text-slate-500 mb-8 font-medium">{plan.desc}</p>

                                        <div className="flex items-center gap-2 mb-6 text-sm">
                                            <Clock className="w-4 h-4 text-[#3994fa]" />
                                            <span className="font-bold text-slate-600 dark:text-slate-300">{plan.timeline}</span>
                                        </div>

                                        <ul className="space-y-3 mb-8">
                                            {plan.deliverables.map((d, j) => (
                                                <li key={j} className="flex items-start gap-3 text-sm">
                                                    <Check className="w-4 h-4 text-[#3994fa] mt-0.5 shrink-0" />
                                                    <span className="font-medium">{d}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <a href="#contact" className={`w-full py-4 mt-auto text-sm ${plan.highlight ? "ring-2 ring-[#3994fa] ring-offset-2 ring-offset-slate-900" : ""} bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white hover:opacity-90 font-bold rounded-full transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-[#3994fa]/20 text-center uppercase tracking-[0.1em] flex items-center justify-center`}>
                                        {plan.highlight ? 'Start Enterprise Project' : 'Get a Quote'}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1️⃣7️⃣ FAQs */}
            <section className="py-16 md:py-32 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/30 reveal-section">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-[#3994fa] font-bold uppercase tracking-[0.2em] text-xs">Knowledge Base</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions.</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: 'How long does it take to build an advanced website?', a: 'Timelines vary by scope. A standard advanced website takes 4-8 weeks, while enterprise-grade web applications can take 8-16 weeks. We provide a detailed timeline during our discovery phase.' },
                            { q: 'What technologies do you use?', a: 'We primarily build with React, Next.js, Node.js, TypeScript, and PostgreSQL. For hosting, we deploy on AWS, GCP, or Vercel depending on your needs. Every stack decision is tailored to your project requirements.' },
                            { q: 'Do you provide ongoing maintenance?', a: 'Yes. We offer three tiers of maintenance—Essential, Professional, and Enterprise. Each includes varying levels of support, from basic updates to full technical partnership with unlimited development hours.' },
                            { q: 'Can you integrate with our existing systems?', a: 'Absolutely. We specialize in API integrations, CRM connections (Salesforce, HubSpot), payment gateways (Stripe, Razorpay), and custom middleware. We\'ll map out all integrations during the strategy phase.' },
                            { q: 'What makes your approach different from other agencies?', a: 'We don\'t use templates or page builders. Every project is custom-coded from scratch with a focus on performance, conversion optimization, and long-term scalability. We think like engineers, not just designers.' },
                            { q: 'Do you handle UI/UX design as well?', a: 'Yes. Our process includes comprehensive UX research, wireframing, high-fidelity prototyping, and user testing. We design with conversion psychology and brand alignment at the core.' },
                            { q: 'What if I need changes after launch?', a: 'All our plans include a post-launch support period. Beyond that, you can subscribe to one of our maintenance plans for ongoing changes, feature additions, and optimization.' },
                            { q: 'How do I get started?', a: 'Simply book a free strategy call through our consultation form below. We\'ll discuss your vision, assess your requirements, and provide a custom proposal within 48 hours.' }
                        ].map((faq, i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-bold text-sm md:text-base pr-4">{faq.q}</span>
                                    <div
                                        className={`shrink-0 transition-transform duration-200 ${openFAQ === i ? 'rotate-45' : 'rotate-0'}`}
                                    >
                                        <Plus className="w-5 h-5 text-[#3994fa]" />
                                    </div>
                                </button>
                                {openFAQ === i && (
                                    <div
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                                            {faq.a}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Success Stories Section */}
            <CaseStudies 
                studies={ADV_CASE_STUDIES} 
                subtitle="Technical Excellence" 
                title="Websites That Scale Businesses."
                themeColor="#3994fa"
            />

            {/* 1️⃣9️⃣ Final High-Impact CTA */}
            <section className="py-16 md:py-32 px-4 md:px-6 bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white relative overflow-hidden border-t border-slate-200 dark:border-transparent">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3994fa]/10 dark:bg-[#3994fa]/20 blur-[200px] rounded-full"
                    />
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #3994fa 1px, transparent 1px), linear-gradient(to bottom, #3994fa 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
                    <div
                        className="space-y-6"
                    >
                        <span className="text-[#3994fa] font-bold uppercase tracking-[0.3em] text-xs">Your Move</span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                            Stop Settling for
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3994fa] to-blue-500 pb-2">
                                Average Websites.
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                            Every day you delay is revenue lost to competitors with better digital infrastructure. Let's build something extraordinary.
                        </p>
                    </div>

                    <div
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <a href="#contact" className="px-8 sm:px-12 py-5 sm:py-6 gap-3 text-xs sm:text-sm group bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white hover:opacity-90 font-bold rounded-full transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-[#3994fa]/20 text-center uppercase tracking-[0.1em] flex items-center justify-center">
                            <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            Start Your Project Now
                        </a>
                        <a href="tel:+919876543210" className="px-8 sm:px-12 py-5 sm:py-6 gap-3 text-xs sm:text-sm bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white hover:opacity-90 font-bold rounded-full transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-[#3994fa]/20 text-center uppercase tracking-[0.1em] flex items-center justify-center">
                            <Phone className="w-5 h-5 group-hover:hidden" />
                            <Phone className="w-5 h-5 hidden group-hover:block animate-bounce" />
                            Call Us Directly
                        </a>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Video Modal */}
            {isVideoOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95"
                    onClick={() => setIsVideoOpen(false)}
                >
                    <div
                        className="relative w-full aspect-video max-w-4xl bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center will-change-transform"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 z-[110] w-10 h-10 bg-black/60 hover:bg-black/80 border border-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* YouTube Embed */}
                        <div className="absolute inset-0 w-full h-full bg-black">
                            <iframe
                                src="https://www.youtube.com/embed/CBYfXlP7ppQ?autoplay=1"
                                className="w-full h-full border-0"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Preet Tech OPC Private Limited Video"
                            />
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

// Quick Icon Components that were missing from imports
function UserCheckIcon(props: any) {
    return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
}
function CursorArrowRaysIcon(props: any) {
    return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
}

