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
    Smartphone, Bookmark, Check, CreditCard, type LucideIcon
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Footer from '@/components/Footer';
import PortfolioCarousel from '@/components/PortfolioCarousel';
import SocialDashboard from '@/components/SocialDashboard';
import PhoneInput from '@/components/PhoneInput';
import CaseStudies, { CaseStudy } from '@/components/CaseStudies';

export default function SocialMediaHandling() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [isHeroSubmitting, setIsHeroSubmitting] = useState(false);
    const [isHeroSubmitted, setIsHeroSubmitted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const SOCIAL_CASE_STUDIES: CaseStudy[] = [
        {
            id: 'social-1',
            title: 'Viral Growth for Lifestyle Brand',
            client: 'UrbanVibe',
            category: 'Instagram / TikTok',
            description: 'Leveraged trending audio and micro-influencer collaborations to increase organic reach by 1200% in 4 months.',
            stats: [
                { label: 'Followers', value: '+85k' },
                { label: 'Reach', value: '2.4M' },
                { label: 'Engage', value: '6.2%' }
            ],
            tags: ['Short-form Video', 'Influencers', 'Community']
        },
        {
            id: 'social-2',
            title: 'LinkedIn Thought Leadership',
            client: 'Nexus Consult',
            category: 'LinkedIn Strategy',
            description: 'Positioned the CEO as a top voice in consulting, resulting in a 4x increase in inbound meeting requests.',
            stats: [
                { label: 'Inbound', value: '+400%' },
                { label: 'Impressions', value: '1M+' },
                { label: 'Connections', value: '+12k' }
            ],
            tags: ['Personal Branding', 'Copywriting', 'B2B']
        }
    ];

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        countryCode: '+91',
        budget: '4999', // matches first option
    });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // Audit Form State
    const [auditFormData, setAuditFormData] = useState({
        name: '',
        businessName: '',
        handle: '',
        platform: 'Instagram',
        budget: 'Under ₹10,000',
        goal: 'Brand Awareness'
    });
    const [auditSubmitStatus, setAuditSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem('theme');
        if (stored === 'dark') { setIsDarkMode(true); }
        else { setIsDarkMode(false); }
    }, []);

    const toggleTheme = () => {
        const next = !isDarkMode; setIsDarkMode(next);
        if (next) { localStorage.setItem('theme', 'dark'); }
        else { localStorage.setItem('theme', 'light'); }
    };

    const handleBudgetClick = (budget: string) => {
        setFormData(prev => ({ ...prev, budget }));
        const element = document.getElementById('consultation');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsHeroSubmitting(true);
        setSubmitStatus('loading');
        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    phone: `${formData.countryCode} ${formData.phone}`,
                    industry: 'N/A',
                    service: 'Social Media Handling'
                })
            });

            if (res.ok) {
                setSubmitStatus('success');
                setIsHeroSubmitted(true);
                setFormData({ name: '', businessName: '', email: '', phone: '', countryCode: '+91', budget: '4999' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus('error');
        } finally {
            setIsHeroSubmitting(false);
        }
    };

    return (
        <main ref={containerRef} className="relative z-10 selection:bg-brand-cyan/20 overflow-x-clip bg-[#fafafa] text-slate-900 dark:bg-[#050608] dark:text-white transition-colors duration-300 font-sans">
            <Navbar isDark={isDarkMode} toggleTheme={toggleTheme} />

            {/* 1️⃣ Hero Section */}
            <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-44 lg:pb-28 px-4 md:px-6 overflow-hidden">
                {/* Background Layer Grid */}
                <div className="absolute inset-0 grid-parallax -z-10 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                {/* ===== ANIMATED BACKGROUND LAYERS ===== */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
                    <div className="absolute top-[10%] -right-[10%] w-[700px] h-[700px] bg-brand-medium/10 blur-[180px] rounded-full" />
                    <div className="absolute -bottom-[15%] -left-[15%] w-[600px] h-[600px] bg-brand-sky/10 blur-[160px] rounded-full" />
                    {mounted && [...Array(8)].map((_, i) => (
                        <div key={i} className="absolute rounded-full bg-brand-cyan/20" style={{ width: `${Math.random() * 3 + 1}px`, height: `${Math.random() * 3 + 1}px`, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} />
                    ))}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-medium/5 rounded-full hidden lg:block" />
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    <div className="lg:col-span-6 space-y-6 md:space-y-10 relative z-10">
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-lg">
                            <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full rounded-full bg-brand-medium opacity-75" /><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-medium" /></span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">Social Media Experts</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.1] md:leading-[1.15]">
                            <span className="block">Scale Your Brand</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-brand-medium">Strategic Growth</span>
                            <span className="block">Built to Convert.</span>
                        </h1>

                        <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                            Strategic content, creative design, and data-driven management to build your online presence and turn followers into loyal customers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                            <Link
                                href="/case-studies/social-media-handling"
                                className="px-6 sm:px-10 py-4 sm:py-5 group bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white hover:opacity-90 font-black rounded-2xl transition-all hover:-translate-y-1 shadow-lg shadow-[#3994fa]/20 flex items-center justify-center gap-2 text-[11px] sm:text-[13px] uppercase tracking-widest"
                            >
                                Case Studies <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-4">
                            {['Instagram', 'Facebook', 'LinkedIn', 'YouTube', 'Reels'].map((platform, i) => (
                                <span key={platform} className="px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:border-brand-medium/50 hover:text-brand-medium transition-colors cursor-default">
                                    {platform}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative">
                        <div className="absolute -inset-8 bg-gradient-to-br from-brand-medium/10 via-brand-sky/5 to-brand-medium/10 blur-[60px] rounded-[3rem] -z-10" />

                        {/* Consultation Lead Form */}
                        <div id="consultation" className="relative z-10 w-full bg-white dark:bg-[#0a0f18] border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl overflow-hidden group scroll-mt-32">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-medium/5 dark:bg-brand-medium/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-brand-medium/10 transition-colors duration-500" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-sky/5 dark:bg-brand-sky/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-brand-sky/10 transition-colors duration-500" />

                            <div className="relative z-10">
                                {isHeroSubmitted ? (
                                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center my-10">
                                        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                                            <div className="absolute inset-0 bg-emerald-500/30 rounded-full animate-ping" />
                                            <Check className="w-8 h-8 text-emerald-500 relative z-10" />
                                        </div>
                                        <h4 className="text-lg font-bold text-emerald-500 mb-2 uppercase tracking-wider">Consultation Requested</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Our team will contact you shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Full Name</label>
                                            <div className="relative group/field">
                                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none group-focus-within/field:text-brand-medium transition-colors"><User className="w-[18px] h-[18px] text-slate-400 group-focus-within/field:text-brand-medium transition-colors" strokeWidth={1.5} /></div>
                                                <input required type="text" value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl pl-11 pr-4 py-3.5 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-brand-medium/50 focus:border-brand-medium/50 transition-all font-medium placeholder:text-slate-300" placeholder="John Doe" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Business Name</label>
                                            <div className="relative group/field">
                                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none group-focus-within/field:text-brand-medium transition-colors"><Building2 className="w-[18px] h-[18px] text-slate-400 group-focus-within/field:text-brand-medium transition-colors" strokeWidth={1.5} /></div>
                                                <input type="text" value={formData.businessName || ''} onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} className="w-full bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl pl-11 pr-4 py-3.5 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-brand-medium/50 focus:border-brand-medium/50 transition-all font-medium placeholder:text-slate-300" placeholder="Your Company Ltd." />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-4">
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Email</label>
                                                <div className="relative group/field">
                                                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none group-focus-within/field:text-brand-medium transition-colors"><Mail className="w-[18px] h-[18px] text-slate-400 group-focus-within/field:text-brand-medium transition-colors" strokeWidth={1.5} /></div>
                                                    <input required type="email" value={formData.email || ''} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl pl-11 pr-4 py-3.5 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-brand-medium/50 focus:border-brand-medium/50 transition-all font-medium placeholder:text-slate-300" placeholder="john@example.com" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Phone</label>
                                                <PhoneInput
                                                    value={formData.phone || ''}
                                                    onChange={(val) => setFormData({ ...formData, phone: val })}
                                                    countryCode={formData.countryCode}
                                                    onCountryCodeChange={(code) => setFormData({ ...formData, countryCode: code })}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Budget Range</label>
                                            <div className="relative group/field">
                                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none group-focus-within/field:text-brand-medium transition-colors"><CreditCard className="w-[18px] h-[18px] text-slate-400 group-focus-within/field:text-brand-medium transition-colors" strokeWidth={1.5} /></div>
                                                <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl pl-11 pr-10 py-3.5 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-brand-medium/50 focus:border-brand-medium/50 transition-all font-medium appearance-none shadow-sm text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20 cursor-pointer">
                                                    <option value="4999">Starting ₹4,999</option>
                                                    <option value="10k-25k">₹10k - ₹25k</option>
                                                    <option value="25k-50k">₹25k - ₹50k</option>
                                                    <option value="50k+">₹50k+</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 group-focus-within/field:text-brand-medium transition-colors"><ChevronRight className="w-4 h-4 rotate-90" /></div>
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <button disabled={isHeroSubmitting} type="submit" className="w-full px-6 sm:px-10 py-4 sm:py-5 text-[11px] sm:text-[13px] gap-2 disabled:opacity-70 group/btn duration-300 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white hover:opacity-90 font-black rounded-2xl transition-all hover:-translate-y-1 shadow-md hover:shadow-lg hover:shadow-[#3994fa]/20 text-center uppercase tracking-widest flex items-center justify-center">
                                                {isHeroSubmitting ? (
                                                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                ) : (
                                                    <span className="flex items-center gap-2 uppercase tracking-widest text-[11px] sm:text-[13px]">Get Free Consultation <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" /></span>
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

            {/* 2️⃣ Why Social Media is Essential */}
            <section className="py-16 md:py-28 px-4 md:px-6 reveal-section border-t border-slate-200/50 dark:border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div className="space-y-8">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Why It Matters</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Social Media is <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-deep">Essential.</span></h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">In today's digital world, social media isn't optional—it's the frontline of your brand's identity and growth engine.</p>
                        <ul className="space-y-5">
                            {[{ t: 'Builds Brand Awareness', d: 'Get your brand in front of thousands of potential customers daily.' }, { t: 'Increases Trust & Credibility', d: 'Consistent, quality content positions you as an industry authority.' }, { t: 'Generates Leads & Sales', d: 'Strategic CTAs and funnels turn followers into paying customers.' }, { t: 'Connects With Audience Directly', d: 'Real-time engagement builds genuine customer relationships.' }, { t: 'Creates Long-Term Brand Value', d: 'Every post compounds into lasting digital equity for your business.' }].map((item, i) => (
                                <li key={i} className="flex gap-4"><div className="mt-1 w-6 h-6 shrink-0 rounded-full bg-blue-100 dark:bg-brand-medium/20 flex items-center justify-center"><CheckCircle2 className="w-3.5 h-3.5 text-brand-medium" /></div><div><strong className="block text-lg">{item.t}</strong><span className="text-slate-500 text-sm">{item.d}</span></div></li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <SocialDashboard />
                    </div>
                </div>
            </section>

            {/* 3️⃣ Why Choose Preet Tech OPC Private Limited */}
            <section className="py-16 md:py-28 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">The Preet Tech OPC Private Limited Advantage</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Choose Preet Tech OPC Private Limited.</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[{ t: 'Data-Driven Strategy', i: BarChart3, d: 'Every decision backed by analytics and performance data.' }, { t: 'Creative Content Experts', i: Sparkles, d: 'Scroll-stopping content that resonates with your audience.' }, { t: 'Consistent Posting System', i: Calendar, d: 'Never miss a post with our systematized content calendar.' }, { t: 'Organic Growth Focus', i: TrendingUp, d: 'Sustainable growth through genuine engagement and value.' }, {
                            t: 'Monthly Reporting', i: LineChart, d: 'Detailed insights on what\'s working and what to optimize.'
                        }, { t: 'Transparent Communication', i: MessageSquare, d: 'Regular updates, strategy calls, and open feedback loops.' }].map((f, i) => (
                            <div key={i} className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 group hover:border-brand-medium/30 transition-all hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-brand-medium/10 flex items-center justify-center mb-5 group-hover:bg-brand-medium transition-colors"><f.i className="w-6 h-6 text-brand-medium group-hover:text-white transition-colors" /></div>
                                <h3 className="text-lg font-bold mb-2">{f.t}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{f.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4️⃣ Who This Service Is For */}
            <section className="py-16 md:py-28 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Perfect For</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Who This Service Is For.</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[{ t: 'Local Businesses', i: Store, d: 'Build community presence and drive foot traffic.' }, { t: 'Startups', i: Rocket, d: 'Establish brand identity from day one.' }, { t: 'Coaches & Consultants', i: UserCheck, d: 'Position yourself as an industry authority.' }, { t: 'E-Commerce Brands', i: ShoppingCart, d: 'Drive traffic and sales through social.' }, { t: 'Real Estate Agents', i: Home, d: 'Showcase properties and build trust.' }, { t: 'Personal Brands', i: User, d: 'Grow your personal influence online.' }, { t: 'Educational Institutes', i: GraduationCap, d: 'Engage students and parents effectively.' }, { t: 'Healthcare', i: HeartPulse, d: 'Build patient trust and awareness.' }].map((ind, i) => (
                            <div key={i} className="flex gap-4 items-start p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 hover:border-brand-medium/40 transition-colors group">
                                <ind.i className="w-6 h-6 text-slate-400 group-hover:text-brand-medium shrink-0 transition-colors mt-0.5" />
                                <div><h4 className="font-bold text-sm mb-1">{ind.t}</h4><p className="text-xs text-slate-500">{ind.d}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5️⃣ What We Handle */}
            <section className="py-16 md:py-28 px-4 md:px-6 bg-[#080B10] text-white reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-sky font-bold uppercase tracking-[0.2em] text-xs">Complete Management</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What We Handle For You.</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">End-to-end social media management so you can focus on running your business.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[{ t: 'Strategy', i: Target }, { t: 'Content Creation', i: PenTool }, { t: 'Posting', i: Share2 }, { t: 'Engagement', i: Heart }, { t: 'Analytics', i: BarChart3 }, { t: 'Optimization', i: Zap }].map((s, i) => (
                            <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center group hover:border-brand-medium/40 transition-all hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-brand-medium/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-medium transition-colors"><s.i className="w-6 h-6 text-brand-sky group-hover:text-white transition-colors" /></div>
                                <h4 className="font-bold text-sm">{s.t}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6️⃣ Platforms We Manage */}
            <section className="py-16 md:py-28 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Multi-Platform</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Platforms We Manage.</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                        {[{ n: 'Instagram', i: Instagram, c: 'from-brand-medium to-brand-deep' }, { n: 'Facebook', i: Facebook, c: 'from-blue-500 to-blue-600' }, { n: 'LinkedIn', i: Linkedin, c: 'from-blue-600 to-blue-700' }, { n: 'YouTube', i: Youtube, c: 'from-red-500 to-red-600' }, { n: 'Twitter/X', i: MessageSquare, c: 'from-slate-700 to-slate-900' }, { n: 'Threads', i: Hash, c: 'from-brand-sky to-brand-medium' }].map((p, i) => (
                            <div key={i} className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-center hover:shadow-[0_0_30px_rgba(63,143,204,0.15)] transition-all hover:-translate-y-1">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.c} flex items-center justify-center mx-auto mb-4 shadow-lg`}><p.i className="w-7 h-7 text-white" /></div>
                                <h4 className="font-bold text-sm">{p.n}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7️⃣ Content Strategy & Planning */}
            <section className="py-16 md:py-28 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div className="space-y-8">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Strategic Planning</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Content Strategy & Planning.</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">We don't just post randomly. Every piece of content is part of a larger strategy designed to grow your brand systematically.</p>
                        <div className="space-y-4">
                            {[{ t: 'Audience Research', d: 'Deep analysis of your target demographic and their behavior.' }, { t: 'Competitor Analysis', d: 'Study what works in your industry and outperform them.' }, { t: 'Monthly Content Calendar', d: 'Pre-planned content schedule aligned with your goals.' }, { t: 'Campaign Planning', d: 'Strategic campaigns around launches, events, and seasons.' }, { t: 'Brand Positioning', d: 'Define your unique voice and visual identity online.' }].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:border-brand-medium/30 transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-brand-medium/10 flex items-center justify-center shrink-0"><CheckCircle2 className="w-4 h-4 text-brand-medium" /></div>
                                    <div><h4 className="font-bold text-sm">{item.t}</h4><p className="text-xs text-slate-500 mt-0.5">{item.d}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Calendar Visual */}
                    <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xl">
                        <div className="flex items-center justify-between mb-6"><h4 className="font-bold text-sm">Content Calendar — March 2026</h4><Calendar className="w-5 h-5 text-brand-medium" /></div>
                        <div className="grid grid-cols-7 gap-1 sm:gap-2">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <div key={i} className="text-center text-[10px] font-bold text-slate-400 uppercase py-1">{d}</div>)}
                            {[...Array(31)].map((_, i) => {
                                const hasPost = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29].includes(i + 1);
                                const hasReel = [2, 8, 14, 20, 26].includes(i + 1);
                                return <div key={i} className={`aspect-square rounded-lg flex items-center justify-center text-xs font-bold transition-transform hover:scale-110 ${hasPost ? 'bg-brand-medium text-white' : hasReel ? 'bg-brand-sky text-white' : 'bg-slate-50 dark:bg-white/5 text-slate-400'}`}>{i + 1}</div>;
                            })}
                        </div>
                        <div className="flex gap-4 mt-4">
                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-brand-medium" /><span className="text-[10px] font-bold text-slate-400">Posts</span></div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-brand-sky" /><span className="text-[10px] font-bold text-slate-400">Reels</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8️⃣ Creative Design & Branding */}
            <section className="py-16 md:py-28 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Visual Excellence</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Creative Design & Branding.</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Every visual is crafted to stop the scroll, communicate your message, and strengthen your brand identity.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {[{ t: 'Post Designs', i: Image, d: 'Eye-catching static posts for your feed.' }, { t: 'Carousel Graphics', i: Layers, d: 'Swipe-worthy educational and promo carousels.' }, { t: 'Story Templates', i: Smartphone, d: 'On-brand story templates for daily engagement.' }, { t: 'Brand Consistency', i: Palette, d: 'Unified color, font, and style across all platforms.' }, { t: 'Custom Visual Identity', i: Eye, d: 'Unique design language that sets you apart.' }].map((item, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 group hover:border-brand-medium/30 transition-all hover:-translate-y-1">
                                <item.i className="w-8 h-8 text-brand-medium mb-4" />
                                <h4 className="font-bold text-sm mb-2">{item.t}</h4>
                                <p className="text-xs text-slate-500">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9️⃣ Reels & Short-Form Video */}
            <section className="py-16 md:py-28 px-4 md:px-6 bg-[#080B10] text-white reveal-section">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div className="space-y-8">
                        <span className="text-brand-sky font-bold uppercase tracking-[0.2em] text-xs">Short-Form Content</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Reels & Short-Form Video Strategy.</h2>
                        <p className="text-lg text-slate-400 leading-relaxed">Short-form video is the #1 growth driver on social media. We create viral-ready reels that boost your visibility and engagement exponentially.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[{ t: 'Trending Audio Research', i: Headphones }, { t: 'Hook-Based Scripting', i: PenTool }, { t: 'Editing & Motion Graphics', i: Video }, { t: 'Reels Optimization', i: Zap }, { t: 'Video Captions & Subtitles', i: FileText }, { t: 'Performance Analysis', i: BarChart3 }].map((item, i) => (
                                <div key={i} className="flex gap-3 items-center p-3 rounded-xl bg-white/5 border border-white/5">
                                    <item.i className="w-5 h-5 text-brand-sky shrink-0" />
                                    <span className="font-bold text-sm">{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Phone Mockup */}
                    <div className="flex justify-center">
                        <div className="w-56 sm:w-64 h-[450px] sm:h-[500px] rounded-[2.5rem] bg-slate-900 border-[6px] border-slate-700 shadow-2xl overflow-hidden relative">
                            <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-xl w-1/3 mx-auto z-30" />
                            <div className="w-full h-full bg-gradient-to-b from-brand-medium/20 via-brand-medium/20 to-slate-900 p-4 flex flex-col justify-end gap-3">
                                <div className="space-y-2">
                                    <div className="h-3 w-3/4 bg-white/30 rounded" />
                                    <div className="h-3 w-1/2 bg-white/20 rounded" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-brand-medium" />
                                    <div className="h-2 w-20 bg-white/30 rounded" />
                                </div>
                                <div className="absolute right-4 bottom-20 space-y-4">
                                    {[Heart, MessageSquare, Share2, Star].map((Icon, i) => (
                                        <div key={i} className="w-9 h-9 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                                            <Icon className="w-4 h-4 text-white" />
                                        </div>
                                    ))}
                                </div>
                                <div className="h-1 bg-brand-medium rounded-full w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10 Caption Writing & Hashtag Strategy */}
            <section className="py-16 md:py-28 px-4 md:px-6 reveal-section">
                <div className="max-w-5xl mx-auto text-center space-y-12">
                    <div className="space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Words That Convert</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Caption Writing & Hashtag Strategy.</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">The right words paired with the right hashtags can transform your reach and engagement overnight.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[{ t: 'Persuasive Captions', d: 'Copy that hooks, engages, and converts readers into action-takers.', i: PenTool }, { t: 'Call-to-Action Writing', d: 'Strategic CTAs that drive clicks, saves, shares, and conversions.', i: MousePointer2 }, { t: 'Niche Hashtags', d: 'Curated hashtag sets targeting your exact audience segments.', i: Hash }, { t: 'SEO-Optimized', d: 'Search-friendly captions that boost discoverability on all platforms.', i: Search }].map((item, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-left hover:border-brand-medium/30 transition-colors hover:-translate-y-1">
                                <item.i className="w-7 h-7 text-brand-medium mb-4" />
                                <h4 className="font-bold text-sm mb-2">{item.t}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11 Posting & Scheduling */}
            <section className="py-16 md:py-28 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1 p-4 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xl">
                        <h4 className="font-bold text-sm mb-6 flex items-center gap-2"><Clock className="w-4 h-4 text-brand-medium" /> Weekly Posting Schedule</h4>
                        <div className="space-y-3">
                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, i) => {
                                const posts = [2, 1, 2, 1, 2, 1, 0][i];
                                return <div key={i} className="flex items-center gap-4"><span className="text-xs font-bold text-slate-400 w-20">{day}</span><div className="flex-1 h-8 bg-slate-50 dark:bg-white/5 rounded-lg overflow-hidden flex"><div style={{ width: `${posts * 35}%` }} className="h-full bg-gradient-to-r from-brand-medium to-brand-deep rounded-lg" /></div><span className="text-xs font-bold text-slate-500 w-8">{posts}</span></div>;
                            })}
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-8">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Never Miss a Post</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Posting & Scheduling System.</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">Consistency is king. Our automated scheduling ensures your content goes live at the optimal time, every single time.</p>
                        <ul className="space-y-4">
                            {['Consistent Posting Calendar', 'Optimal Timing Strategy', 'Scheduling Tools Integration', 'Automated Posting System'].map((item, i) => (
                                <li key={i} className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-brand-medium shrink-0" /><span className="font-medium text-sm">{item}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 12 Community Management */}
            <section className="py-16 md:py-28 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Engagement Hub</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Community Management.</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">We don't just post and leave. We actively engage with your audience to build a loyal and interactive community.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {[{ t: 'DM Handling', i: Send, d: 'Prompt responses to all direct messages.' }, { t: 'Comment Replies', i: MessageSquare, d: 'Engaging replies that boost algorithm ranking.' }, { t: 'Lead Qualification', i: Target, d: 'Identify hot leads from conversations.' }, { t: 'Audience Interaction', i: Users, d: 'Proactive engagement with your community.' }, { t: 'Engagement Boost', i: TrendingUp, d: 'Strategies to increase likes, saves, and shares.' }].map((item, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 group hover:border-brand-medium/30 transition-all text-center hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-brand-medium/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-medium transition-colors"><item.i className="w-6 h-6 text-brand-medium group-hover:text-white transition-colors" /></div>
                                <h4 className="font-bold text-sm mb-1">{item.t}</h4>
                                <p className="text-[11px] text-slate-500">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 13 Growth Strategy */}
            <section className="py-16 md:py-28 px-4 md:px-6 bg-[#080B10] text-white reveal-section">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div className="space-y-8">
                        <span className="text-brand-sky font-bold uppercase tracking-[0.2em] text-xs">Organic Growth Plan</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Growth Strategy.</h2>
                        <p className="text-lg text-slate-400 leading-relaxed">Sustainable, organic growth that builds a genuine following—not vanity metrics. Real followers that convert into real customers.</p>
                        <div className="space-y-4">
                            {[{ t: 'Engagement Strategy', d: 'Systematic approach to boost algorithmic reach.' }, { t: 'Profile Optimization', d: 'Perfect your bio, highlights, and pinned content.' }, { t: 'Follower Growth Plan', d: 'Targeted tactics to attract your ideal audience.' }, { t: 'Collaboration Strategy', d: 'Influencer outreach and cross-promotion plans.' }, { t: 'Content Performance Optimization', d: 'Double down on what works, pivot what doesn\'t.' }].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-medium/30 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
                                    <div><h4 className="font-bold text-sm">{item.t}</h4><p className="text-xs text-slate-500 mt-0.5">{item.d}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Growth Chart — Animated */}
                    {(() => {
                        const bars = [
                            { m: 'Jan', h: 15, v: '1.2K' }, { m: 'Feb', h: 25, v: '2.1K' },
                            { m: 'Mar', h: 35, v: '3.4K' }, { m: 'Apr', h: 45, v: '5.0K' },
                            { m: 'May', h: 55, v: '7.2K' }, { m: 'Jun', h: 65, v: '9.8K' },
                            { m: 'Jul', h: 78, v: '13K' }, { m: 'Aug', h: 85, v: '17K' },
                            { m: 'Sep', h: 90, v: '22K' }, { m: 'Oct', h: 93, v: '28K' },
                            { m: 'Nov', h: 96, v: '35K' }, { m: 'Dec', h: 100, v: '45K' },
                        ];
                        const chartH = 160;
                        const barW = 100 / bars.length;
                        return (
                            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-bold text-sm">Projected Follower Growth</h4>
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75" />
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan" />
                                        </span>
                                        <span className="text-[10px] font-bold text-brand-cyan">LIVE</span>
                                    </div>
                                </div>
                                <div className="flex items-baseline gap-2 mb-5">
                                    <span
                                        className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-sky"
                                    >45K</span>
                                    <span className="text-xs text-emerald-400 font-bold">+3,650%</span>
                                    <span className="text-xs text-slate-500 ml-auto">12-month projection</span>
                                </div>

                                {/* Chart area */}
                                <div className="relative" style={{ height: `${chartH + 24}px` }}>
                                    {/* Horizontal grid lines */}
                                    {[0, 25, 50, 75, 100].map((pct, gi) => (
                                        <div key={gi} className="absolute left-0 right-0 flex items-center gap-2"
                                            style={{ bottom: `${pct / 100 * chartH + 24}px` }}>
                                            <span className="text-[8px] text-slate-600 w-5 text-right shrink-0">{pct === 0 ? '' : `${pct}%`}</span>
                                            <div className="flex-1 border-t border-white/5" />
                                        </div>
                                    ))}

                                    {/* SVG glow line overlay */}
                                    <svg className="absolute pointer-events-none" viewBox="0 0 360 160" preserveAspectRatio="none"
                                        style={{ height: `${chartH}px`, top: 0, left: '28px', right: 0, width: 'calc(100% - 28px)', position: 'absolute' }}>
                                        <defs>
                                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#3994fa" stopOpacity="0.6" />
                                                <stop offset="100%" stopColor="#3994fa" stopOpacity="1" />
                                            </linearGradient>
                                            <filter id="glow">
                                                <feGaussianBlur stdDeviation="3" result="blur" />
                                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                            </filter>
                                            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#3994fa" stopOpacity="0.2" />
                                                <stop offset="100%" stopColor="#3994fa" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        {/* Area fill */}
                                        <path
                                            d={`M ${bars.map((b, i) => {
                                                const segW = 360 / bars.length;
                                                const x = i * segW + segW / 2;
                                                const y = 160 - (b.h / 100) * 156;
                                                return `${x},${y}`;
                                            }).join(' L ')} L 360,160 L 0,160 Z`}
                                            fill="url(#areaGrad)"
                                        />
                                        {/* Glow line */}
                                        <path
                                            d={`M ${bars.map((b, i) => {
                                                const segW = 360 / bars.length;
                                                const x = i * segW + segW / 2;
                                                const y = 160 - (b.h / 100) * 156;
                                                return `${x},${y}`;
                                            }).join(' L ')}`}
                                            fill="none" stroke="url(#lineGrad)" strokeWidth="2.5"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            filter="url(#glow)"
                                        />
                                        {/* Glowing dot at end */}
                                        <circle
                                            cx={360 - (360 / bars.length) / 2}
                                            cy={160 - (bars[bars.length - 1].h / 100) * 156}
                                            r="5" fill="#3994fa"
                                        />
                                    </svg>

                                    {/* Bars */}
                                    <div className="absolute bottom-6 left-7 right-0 h-full flex items-end gap-1">
                                        {bars.map((bar, i) => (
                                            <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                                                {/* Tooltip on hover */}
                                                <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                                    <div className="bg-brand-medium text-white text-[9px] font-black px-2 py-1 rounded-lg whitespace-nowrap shadow-lg shadow-brand-medium/30">
                                                        {bar.v} followers
                                                    </div>
                                                </div>
                                                <div
                                                    style={{ height: `${(bar.h / 100) * chartH}px` }}
                                                    className={`w-full rounded-t-sm relative overflow-hidden ${i === bars.length - 1
                                                        ? 'bg-gradient-to-t from-brand-medium via-brand-sky to-brand-cyan shadow-[0_0_16px_rgba(95,211,230,0.5)]'
                                                        : 'bg-gradient-to-t from-brand-deep to-brand-medium group-hover:to-brand-sky'
                                                        } transition-colors duration-300`}
                                                >
                                                </div>
                                                <span className="text-[7px] sm:text-[8px] font-bold text-slate-500">{bar.m}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer stats */}
                                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                                    {[{ l: 'Start', v: '1.2K' }, { l: 'Mid-Year', v: '9.8K' }, { l: 'Year End', v: '45K' }].map((s, i) => (
                                        <div key={i} className="text-center">
                                            <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">{s.l}</span>
                                            <span
                                                className="block text-sm font-black text-brand-cyan"
                                            >{s.v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })()}
                </div>
            </section>

            {/* 14 Analytics & Monthly Reporting */}
            <section className="py-16 md:py-28 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1 p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xl">
                        <div className="flex items-center justify-between mb-6"><h4 className="font-bold text-sm">Monthly Report — March 2026</h4><Gauge className="w-5 h-5 text-brand-medium" /></div>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            {[{ l: 'Engagement Rate', v: '6.8%', d: '+2.1%', c: 'text-emerald-500' }, { l: 'Total Reach', v: '284K', d: '+45%', c: 'text-brand-medium' }, { l: 'Followers Gained', v: '+3,420', d: '+62%', c: 'text-brand-cyan' }, { l: 'Leads Generated', v: '156', d: '+38%', c: 'text-brand-cyan' }].map((m, i) => (
                                <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                                    <span className="text-[9px] font-bold uppercase text-slate-400 block mb-1">{m.l}</span>
                                    <span className="text-xl font-black block">{m.v}</span>
                                    <span className={`text-[10px] font-bold ${m.c}`}>{m.d}</span>
                                </div>
                            ))}
                        </div>
                        <div className="h-20 rounded-xl bg-gradient-to-r from-brand-medium/10 to-brand-deep/10 border border-brand-medium/10 flex items-end p-2 gap-1">
                            {[30, 45, 35, 60, 50, 70, 55, 80, 65, 85, 75, 90].map((h, i) => (
                                <div key={i} className="flex-1 bg-gradient-to-t from-brand-medium to-brand-deep rounded-t opacity-70" style={{ height: `${h}%` }} />
                            ))}
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-8">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Data-Driven Results</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Analytics & Monthly Reporting.</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">Full transparency with detailed monthly reports covering every metric that matters for your business growth.</p>
                        <ul className="space-y-3">
                            {['Engagement Rate Tracking', 'Reach & Impressions Analysis', 'Growth Analytics & Trends', 'Lead Tracking & Attribution', 'Performance Insights & Recommendations'].map((item, i) => (
                                <li key={i} className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-brand-medium shrink-0" /><span className="font-medium text-sm">{item}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 15 Paid Ads Integration */}
            <section className="py-16 md:py-28 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section">
                <div className="max-w-5xl mx-auto text-center space-y-10">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30"><Award className="w-4 h-4 text-amber-600 dark:text-amber-400" /><span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">Optional Add-On</span></div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Paid Ads Integration.</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Supercharge your organic growth with precision-targeted paid social campaigns for faster results.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[{ t: 'Meta Ads', d: 'Facebook & Instagram ad campaigns optimized for your goals.', i: Facebook }, { t: 'Lead Generation', d: 'High-converting lead gen campaigns that fill your pipeline.', i: Target }, { t: 'Retargeting', d: 'Re-engage visitors who didn\'t convert the first time.', i: Repeat }, { t: 'Performance Scaling', d: 'Scale winning campaigns for maximum ROI.', i: TrendingUp }].map((item, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-left hover:border-amber-500/30 transition-all hover:-translate-y-1">
                                <item.i className="w-7 h-7 text-amber-500 mb-4" />
                                <h4 className="font-bold text-sm mb-2">{item.t}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 16 Our Process */}
            <section className="py-16 md:py-28 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Step-by-Step</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Social Media Process.</h2>
                    </div>
                    <div className="relative">
                        <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-medium/30 to-transparent hidden lg:block" />
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {[{ s: '01', t: 'Audit & Strategy', i: Search }, { s: '02', t: 'Content Planning', i: Calendar }, { s: '03', t: 'Design & Creation', i: Palette }, { s: '04', t: 'Post & Engage', i: Share2 }, { s: '05', t: 'Optimize & Report', i: LineChart }].map((step, i) => (
                                <div key={i} className="text-center group">
                                    <div className="relative z-10 w-14 h-14 mx-auto mb-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-white/10 group-hover:border-brand-medium flex items-center justify-center transition-colors shadow-lg">
                                        <step.i className="w-6 h-6 text-slate-400 group-hover:text-brand-medium transition-colors" />
                                    </div>
                                    <span className="text-2xl font-black text-slate-100 dark:text-white/5 block mb-1">{step.s}</span>
                                    <h4 className="font-bold text-sm">{step.t}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 17 Portfolio / Sample Posts — Carousel */}
            {(() => {
                const cards = [
                    {
                        id: 'instagram',
                        label: 'Instagram Feed',
                        platform: 'Instagram',
                        bg: 'from-brand-deep via-brand-medium to-brand-sky',
                        content: (
                            <div className="absolute inset-0 p-6 flex flex-col">
                                <div className="flex items-center gap-3 mb-auto">
                                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center"><Instagram className="w-4 h-4 text-white" /></div>
                                    <div><div className="h-2 w-24 bg-white/40 rounded mb-1.5" /><div className="h-1.5 w-16 bg-white/20 rounded" /></div>
                                    <div className="ml-auto w-6 h-1 bg-white/30 rounded" />
                                </div>
                                <div className="flex-1 flex items-center justify-center my-6">
                                    <div className="text-center space-y-3">
                                        <div className="text-7xl font-black text-white/90 leading-none">340%</div>
                                        <div className="text-white/60 text-sm font-bold uppercase tracking-widest">Engagement Growth</div>
                                        <div className="h-0.5 w-28 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex gap-6">
                                        {[Heart, MessageSquare, Share2].map((Icon, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <Icon className="w-5 h-5 text-white/70" />
                                                <span className="text-white/60 text-sm font-bold">{['12.4K', '892', '3.2K'][i]}</span>
                                            </div>
                                        ))}
                                        <Bookmark className="w-5 h-5 text-white/70 ml-auto" />
                                    </div>
                                    <div className="space-y-1.5"><div className="h-2 w-full bg-white/20 rounded" /><div className="h-2 w-3/4 bg-white/15 rounded" /></div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        id: 'reels',
                        label: 'Reels Content',
                        platform: 'Reels',
                        bg: '',
                        bgStyle: { background: 'linear-gradient(135deg, #e63946 0%, #f4a261 100%)' },
                        content: (
                            <div className="absolute inset-0 p-6 flex flex-col">
                                <div className="flex items-center gap-3 mb-auto">
                                    <Youtube className="w-6 h-6 text-white" />
                                    <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Short-Form Video</span>
                                </div>
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="text-center space-y-4">
                                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mx-auto">
                                            <Play className="w-10 h-10 text-white ml-1" />
                                        </div>
                                        <div className="text-white font-black text-4xl">52K Views</div>
                                        <div className="text-white/60 text-sm">Avg per Reel</div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="text-white/60 text-xs font-bold">0:42</span>
                                        <div className="flex-1 h-1.5 bg-white/20 rounded-full"><div className="h-full w-2/3 bg-white rounded-full" /></div>
                                        <span className="text-white/60 text-xs font-bold">1:04</span>
                                    </div>
                                    <div className="text-white/50 text-xs text-center">Trending audio · Hook-based script</div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        id: 'linkedin',
                        label: 'LinkedIn Post',
                        platform: 'LinkedIn',
                        bg: '',
                        bgStyle: { background: 'linear-gradient(135deg, #0077b5 0%, #004182 100%)' },
                        content: (
                            <div className="absolute inset-0 p-6 flex flex-col">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><Linkedin className="w-5 h-5 text-white" /></div>
                                    <div><div className="h-2 w-28 bg-white/40 rounded mb-1.5" /><div className="h-1.5 w-20 bg-white/20 rounded" /></div>
                                </div>
                                <div className="space-y-2 mb-auto">
                                    {[1, 0.85, 0.7, 0.55].map((w, i) => <div key={i} className="h-2.5 rounded" style={{ width: `${w * 100}%`, background: 'rgba(255,255,255,0.2)' }} />)}
                                </div>
                                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                                    {[{ l: 'Likes', v: '4.1K' }, { l: 'Comments', v: '218' }, { l: 'Reposts', v: '890' }].map((s, i) => (
                                        <div key={i} className="text-center">
                                            <div className="text-white font-black text-2xl">{s.v}</div>
                                            <div className="text-white/50 text-[10px] uppercase font-bold tracking-wider">{s.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ),
                    },
                    {
                        id: 'carousel',
                        label: 'Carousel Design',
                        platform: 'Carousel',
                        bg: 'from-brand-deep to-brand-medium',
                        content: (
                            <div className="absolute inset-0 p-6 flex flex-col">
                                <div className="flex items-center gap-3 mb-6">
                                    <Layers className="w-5 h-5 text-brand-cyan" />
                                    <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest">Swipe-worthy Carousel</span>
                                </div>
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="flex gap-4">
                                        {[1, 2, 3].map(n => (
                                            <div key={n}
                                                className={`w-20 h-32 rounded-2xl border border-white/20 bg-white/5 backdrop-blur ${n === 2 ? 'scale-110 bg-white/10 border-brand-cyan/40' : 'opacity-60'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-6">
                                    <div className="text-white font-black text-xl">Slide 1 of 8</div>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4].map(n => <div key={n} className={`h-1.5 rounded-full ${n === 1 ? 'w-6 bg-brand-cyan' : 'w-3 bg-white/30'}`} />)}
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        id: 'story',
                        label: 'Story Template',
                        platform: 'Stories',
                        bg: 'from-emerald-500 to-teal-700',
                        content: (
                            <div className="absolute inset-0 p-6 flex flex-col">
                                <div className="w-full h-1.5 bg-white/30 rounded-full mb-4"><div className="h-full w-1/2 bg-white rounded-full" /></div>
                                <div className="flex items-center gap-3 mb-auto">
                                    <div className="w-8 h-8 rounded-full bg-white/30" />
                                    <div className="h-2 w-20 bg-white/30 rounded" />
                                    <span className="ml-auto text-white/60 text-xs font-bold">2h ago</span>
                                </div>
                                <div className="text-center mb-6 space-y-2">
                                    <div className="text-white font-black text-5xl">24hr</div>
                                    <div className="text-white/70 text-xs font-bold uppercase tracking-widest">Story Template</div>
                                    <div className="text-white/50 text-xs">On-brand story design</div>
                                </div>
                                <div className="flex justify-around text-white/60">
                                    {[Heart, Send, MessageSquare].map((Icon, i) => <Icon key={i} className="w-5 h-5" />)}
                                </div>
                            </div>
                        ),
                    },
                    {
                        id: 'analytics',
                        label: 'Analytics Report',
                        platform: 'Analytics',
                        bg: '',
                        bgStyle: { background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)', borderWidth: '1px', borderStyle: 'solid' },
                        content: (
                            <div className="absolute inset-0 p-6 flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-brand-cyan" /><span className="text-brand-cyan text-xs font-bold uppercase tracking-widest">Monthly Report</span></div>
                                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div className="flex items-end gap-2 flex-1">
                                    {[30, 50, 35, 65, 45, 80, 60, 90, 70, 95].map((h, i) => (
                                        <div key={i} style={{ height: `${h}%` }}
                                            className={`flex-1 rounded-t-sm ${i === 9 ? 'bg-brand-cyan shadow-[0_0_12px_rgba(95,211,230,0.6)]' : 'bg-brand-medium/50'}`} />
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/10">
                                    <div><div className="text-white font-black text-2xl">+284%</div><div className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Reach Growth</div></div>
                                    <div className="text-right"><div className="text-emerald-400 font-black text-2xl">6.8%</div><div className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Eng. Rate</div></div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        id: 'ad',
                        label: 'Ad Creative',
                        platform: 'Paid Ads',
                        bg: 'from-amber-500 to-orange-600',
                        content: (
                            <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center gap-5">
                                <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur flex items-center justify-center">
                                    <Megaphone className="w-10 h-10 text-white" />
                                </div>
                                <div>
                                    <div className="text-white/70 text-xs font-bold uppercase mb-2 tracking-widest">Performance Ad Design</div>
                                    <div className="text-white font-black text-3xl leading-tight">Convert More.<br />Spend Less.</div>
                                </div>
                                <div className="flex gap-6">
                                    {[{ l: 'ROAS', v: '3.2x' }, { l: 'CTR', v: '4.8%' }, { l: 'CPC', v: '₹12' }].map((s, i) => (
                                        <div key={i} className="text-center">
                                            <div className="text-white font-black text-xl">{s.v}</div>
                                            <div className="text-white/60 text-[10px] uppercase font-bold">{s.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ),
                    },
                ];

                return (
                    <PortfolioCarousel cards={cards} />
                );
            })()}

            {/* 18 Industries We Serve */}
            <section className="py-16 md:py-28 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Industry Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Industries We Serve.</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[{ t: 'Retail', i: Store }, { t: 'Real Estate', i: Home }, { t: 'Education', i: GraduationCap }, { t: 'Healthcare', i: HeartPulse }, { t: 'E-Commerce', i: ShoppingCart }, { t: 'Digital Services', i: Globe }, { t: 'Personal Brands', i: User }, { t: 'Finance', i: DollarSign }].map((ind, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-brand-medium/30 transition-all hover:-translate-y-1">
                                <ind.i className="w-5 h-5 text-brand-medium shrink-0" />
                                <span className="font-bold text-sm">{ind.t}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 19 Pricing */}
            <section id="pricing" className="py-16 md:py-28 px-4 md:px-6 bg-[#080B10] text-white reveal-section">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-sky font-bold uppercase tracking-[0.2em] text-xs">Investment</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Pricing Packages.</h2>
                        <p className="text-slate-400 max-w-xl mx-auto">Choose a plan that fits your growth stage. All plans include strategy, design, and reporting.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { tier: 'Basic', price: '\u20b915,000', mo: '/month', features: ['10 Posts / Month', '7 Poster + 3 Reels', 'Monthly Report', 'Platform Meta'], highlight: false, budget: '10k-25k' },
                            { tier: 'Standard', price: '\u20b925,000', mo: '/month', features: ['16 Posts / Month', '10 Poster + 6 Reels', ' Platform Meta', 'Advanced Strategy', 'Detailed Analytics Report', '2 Shoots Monthly '], highlight: true, budget: '25k-50k' },
                            { tier: 'Custom', price: 'Let\'s Talk', mo: '', features: ['Tailored Content Plan', 'Multi-Platform Management', 'Paid Ads Integration', 'Advanced Growth Strategy', 'Dedicated Account Manager', 'Weekly Strategy Calls'], highlight: false, budget: '50k+' }
                        ].map((plan, i) => (
                            <div key={i} className={`rounded-2xl overflow-hidden relative shadow-lg ${plan.highlight ? 'border-2 border-brand-medium bg-gradient-to-b from-brand-medium/10 to-transparent' : 'bg-white/5 border border-white/10'}`}>
                                {plan.highlight && <div className="bg-brand-medium text-white text-center py-2 text-[10px] font-black uppercase tracking-[0.3em]">Most Popular</div>}
                                <div className="p-6 md:p-8">
                                    <h3 className="text-xl font-bold mb-1">{plan.tier}</h3>
                                    <div className="text-3xl md:text-4xl font-black text-brand-sky mb-1">{plan.price}<span className="text-sm font-medium text-slate-500">{plan.mo}</span></div>
                                    <ul className="space-y-3 my-6">
                                        {plan.features.map((f, j) => (
                                            <li key={j} className="flex items-start gap-3 text-sm"><CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? 'text-brand-sky' : 'text-slate-500'}`} /><span>{f}</span></li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => handleBudgetClick(plan.budget)}
                                        className={`block w-full px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-[11px] sm:text-[13px] uppercase tracking-widest text-center transition-all ${plan.highlight ? 'bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white hover:opacity-95' : 'bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-[#3994fa] hover:to-[#004aad] hover:border-transparent'}`}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 20 FAQs */}
            < section className="py-16 md:py-28 px-4 md:px-6 reveal-section" >
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Common Questions</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions.</h2>
                    </div>
                    <div className="space-y-3">
                        {[
                            { q: 'How many posts do you create per month?', a: 'Depending on your plan, we create 12-20+ posts per month including static posts, carousels, stories, and reels. Custom plans can include more.' },
                            { q: 'Do you create reels and video content?', a: 'Yes! Our Standard and Custom plans include reels creation with trending audio, hook-based scripts, professional editing, and captions.' },
                            { q: 'Is ad management included?', a: 'Paid ads management is available as an add-on service. We handle Meta Ads (Facebook & Instagram), including campaign strategy, creative, targeting, and optimization.' },
                            { q: 'Can I customize my package?', a: 'Absolutely. Our Custom plan is fully tailored to your specific needs, platforms, content volume, and growth goals. Let\'s discuss what works best for you.' },
                            { q: 'What results can I expect?', a: 'While results vary by industry and starting point, our clients typically see 2-5x engagement growth, 30-60% follower increase, and measurable lead generation within 3-6 months.' }
                        ].map((faq, i) => (
                            <div key={i} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
                                <button onClick={() => setOpenFAQ(openFAQ === i ? null : i)} className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="font-bold text-sm md:text-base pr-4">{faq.q}</span>
                                    <div className={`shrink-0 transition-transform duration-200 ${openFAQ === i ? 'rotate-45' : ''}`}><Plus className="w-5 h-5 text-brand-medium" /></div>
                                </button>
                                {openFAQ === i && (
                                    <div className="overflow-hidden bg-slate-50/50 dark:bg-white/[0.02]">
                                        <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">{faq.a}</div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <CaseStudies
                studies={SOCIAL_CASE_STUDIES}
                subtitle="Social Impact"
                title="Brands That Stand Out."
                themeColor="#3994fa"
            />

            {/* 21 Free Social Media Audit Form */}
            <section id="audit" className="py-16 md:py-28 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section" >
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-sky via-brand-medium to-brand-cyan" />
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-medium/10 blur-[40px] rounded-full" />

                        {auditSubmitStatus === 'success' ? (
                            <div className="py-16 text-center space-y-6">
                                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto"><CheckCircle2 className="w-10 h-10 text-emerald-500" /></div>
                                <h3 className="text-2xl font-black">Audit Request Received!</h3>
                                <p className="text-slate-500">Our social media strategist will analyze your profiles and reach out within 24 hours.</p>
                                <button onClick={() => setAuditSubmitStatus('idle')} className="text-brand-medium font-bold text-sm underline underline-offset-4">Submit Another</button>
                            </div>
                        ) : (
                            <>
                                <div className="text-center mb-8 space-y-3">
                                    <h3 className="text-2xl md:text-3xl font-bold">Get Your Free Social Media Audit</h3>
                                    <p className="text-sm text-slate-500">We&apos;ll analyze your profiles and provide actionable recommendations.</p>
                                </div>
                                <form onSubmit={async (e) => {
                                    e.preventDefault();
                                    setAuditSubmitStatus('loading');
                                    try {
                                        const res = await fetch('/api/leads', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify({
                                                ...auditFormData,
                                                phone: 'N/A', // Audit form doesn't have phone
                                                email: 'N/A', // Audit form doesn't have email in UI, but it probably should?
                                                service: 'Social Media Handling Audit'
                                            })
                                        });
                                        if (res.ok) setAuditSubmitStatus('success');
                                        else setAuditSubmitStatus('error');
                                    } catch (err) {
                                        console.error(err);
                                        setAuditSubmitStatus('error');
                                    }
                                }} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div><label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Full Name *</label><div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input required type="text" value={auditFormData.name} onChange={(e) => setAuditFormData({ ...auditFormData, name: e.target.value })} placeholder="John Doe" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium focus:ring-2 focus:ring-brand-medium focus:border-transparent outline-none transition-all" /></div></div>
                                        <div><label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Business Name *</label><div className="relative"><Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input required type="text" value={auditFormData.businessName} onChange={(e) => setAuditFormData({ ...auditFormData, businessName: e.target.value })} placeholder="Acme Corp" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium focus:ring-2 focus:ring-brand-medium focus:border-transparent outline-none transition-all" /></div></div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div><label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Social Media Handle *</label><div className="relative"><Instagram className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input required type="text" value={auditFormData.handle} onChange={(e) => setAuditFormData({ ...auditFormData, handle: e.target.value })} placeholder="@yourbrand" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium focus:ring-2 focus:ring-brand-medium focus:border-transparent outline-none transition-all" /></div></div>
                                        <div><label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Platform</label><select value={auditFormData.platform} onChange={(e) => setAuditFormData({ ...auditFormData, platform: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium focus:ring-2 focus:ring-brand-medium focus:border-transparent outline-none transition-all appearance-none"><option>Instagram</option><option>Facebook</option><option>LinkedIn</option><option>YouTube</option><option>Multiple Platforms</option></select></div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div><label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Monthly Budget</label><select value={auditFormData.budget} onChange={(e) => setAuditFormData({ ...auditFormData, budget: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium focus:ring-2 focus:ring-brand-medium focus:border-transparent outline-none transition-all appearance-none"><option>Under ₹10,000</option><option>₹10,000 - ₹25,000</option><option>₹25,000 - ₹50,000</option><option>₹50,000+</option></select></div>
                                        <div><label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Primary Goal</label><select value={auditFormData.goal} onChange={(e) => setAuditFormData({ ...auditFormData, goal: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium focus:ring-2 focus:ring-brand-medium focus:border-transparent outline-none transition-all appearance-none"><option>Brand Awareness</option><option>Lead Generation</option><option>Sales & Revenue</option><option>Community Building</option><option>All of the Above</option></select></div>
                                    </div>
                                    <button disabled={auditSubmitStatus === 'loading'} type="submit" className="w-full px-6 sm:px-10 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white font-black uppercase tracking-widest text-[11px] sm:text-[13px] hover:shadow-xl hover:shadow-[#3994fa]/20 transition-all flex items-center justify-center gap-3">
                                        <Send className="w-5 h-5" />
                                        {auditSubmitStatus === 'loading' ? 'Processing...' : 'Get Free Audit'}
                                    </button>
                                    {auditSubmitStatus === 'error' && <p className="text-red-500 text-[10px] font-black uppercase text-center mt-2 tracking-widest">Error! Please try again.</p>}
                                    <p className="text-center text-[11px] text-slate-400">We&apos;ll respond within 24 hours with your personalized audit report.</p>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* 22 Final CTA */}
            <section className="py-16 md:py-28 px-4 md:px-6 bg-[#020617] text-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-br from-brand-medium/20 grid-parallax via-brand-medium/15 to-brand-cyan/20 blur-[200px] rounded-full opacity-30" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
                    <div className="space-y-6">
                        <span className="text-brand-sky font-bold uppercase tracking-[0.3em] text-xs">Your Move</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">Ready to Dominate<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-brand-medium to-brand-cyan">Social Media?</span></h2>
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">Let&apos;s build a powerful online presence that converts followers into customers.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <a href="#consultation" className="px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-2xl font-black uppercase tracking-widest text-[11px] sm:text-[13px] hover:shadow-[0_0_60px_rgba(63,143,204,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-3"><Rocket className="w-5 h-5" /> Start My Social Growth</a>
                        <a href="tel:+919756667397" className="px-6 sm:px-10 py-4 sm:py-5 border-2 border-white/10 rounded-2xl font-black uppercase tracking-widest text-[11px] sm:text-[13px] hover:bg-white/5 transition-all flex items-center justify-center gap-3 hover:-translate-y-1"><Phone className="w-5 h-5" /> Call Us Directly</a>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-8 border-t border-white/10">
                        {[{ v: '500+', l: 'Posts Created' }, { v: '96%', l: 'Client Satisfaction' }, { v: '3x', l: 'Avg Growth Rate' }, { v: '50+', l: 'Brands Managed' }].map((stat, i) => (
                            <div key={i} className="text-center"><span className="block text-2xl font-black text-brand-sky">{stat.v}</span><span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{stat.l}</span></div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
