"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cloud, Zap, Shield, Layout, Layers, ArrowRight, User, Mail, Phone,
    Building2, ChevronRight, Activity, Target, BarChart3, TrendingUp, Search,
    Globe, CheckCircle2, Share2, Briefcase, Rocket, Plus, Minus, Code2,
    Database, Cpu, MonitorSmartphone, Tablet, Check, Star, Settings, Headphones, Users,
    Play, CreditCard, ChevronDown, X, Monitor, Server, Lock
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Footer from '@/components/Footer';
import CaseStudies, { CaseStudy } from '@/components/CaseStudies';
import ThreeSphereScene from '@/components/ThreeSphere';
import PhoneInput from '@/components/PhoneInput';

const TechnicalBackground = ({ isDarkMode }: { isDarkMode: boolean }) => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(to right, #3994fa 1px, transparent 1px), linear-gradient(to bottom, #3994fa 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-[48px] rounded-full opacity-60" />
    </div>
);

const SAAS_SERVICES = [
    { t: 'Custom SaaS Architecture', d: 'Scalable, multi-tenant architectures built with modern stacks like MERN and Next.js.', icon: Layers, color: 'from-blue-500 to-indigo-600' },
    { t: 'MVP Development', d: 'Launch your SaaS idea in weeks, not months. We build lean, high-quality MVPs for startups.', icon: Rocket, color: 'from-orange-500 to-red-600' },
    { t: 'Cloud-Native Solutions', d: 'Deployment and scaling on AWS, Azure, or Google Cloud for 99.99% uptime and global reach.', icon: Cloud, color: 'from-cyan-500 to-blue-600' },
    { t: 'SaaS Subscription Models', d: 'Complex billing systems integrated with Stripe, including trials, tiers, and usage-based pricing.', icon: CreditCard, color: 'from-emerald-500 to-teal-600' },
    { t: 'API-First Development', d: 'Robust, documented REST and GraphQL APIs to power your web, mobile, and third-party integrations.', icon: Code2, color: 'from-purple-500 to-pink-600' },
    { t: 'Enterprise SaaS Security', d: 'Role-based access control (RBAC), end-to-end encryption, and stringent data compliance.', icon: Shield, color: 'from-slate-700 to-slate-900' }
];

export default function SaaSDevelopmentPage() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const CASE_STUDIES: CaseStudy[] = [
        {
            id: 'saas-1',
            title: 'EduTech: Learning Management SaaS',
            client: 'SkillStream',
            category: 'Education / SaaS',
            description: 'A comprehensive LMS platform supporting 100k+ students with real-time video, quizzes, and automated grading.',
            stats: [
                { label: 'Students', value: '100k+' },
                { label: 'Latency', value: '< 100ms' },
                { label: 'Uptime', value: '99.99%' }
            ],
            tags: ['React', 'Node.js', 'PostgreSQL']
        }
    ];

    const [formData, setFormData] = useState({ name: '', businessName: '', email: '', phone: '', countryCode: '+91', industry: '', budget: '₹1L - ₹5L' });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('loading');
        try {
            const res = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, phone: `${formData.countryCode} ${formData.phone}`, service: 'SaaS Development' }) });
            if (res.ok) { setSubmitStatus('success'); setFormData({ name: '', businessName: '', email: '', phone: '', countryCode: '+91', industry: '', budget: '₹1L - ₹5L' }); }
            else { setSubmitStatus('error'); }
        } catch (error) { setSubmitStatus('error'); }
    };

    return (
        <main className="relative z-10 selection:bg-brand-cyan/20 overflow-x-clip bg-[#fafafa] text-slate-900 dark:bg-[#050608] dark:text-white transition-colors duration-300 font-sans">
            <Navbar isDark={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />

            <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />
                <ThreeSphereScene />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                    <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                        <span className="inline-block px-4 py-1 rounded-full bg-[#3994fa]/10 text-[#3994fa] text-[10px] md:text-xs font-bold uppercase tracking-widest border border-[#3994fa]/20">
                            SaaS Development Company in India
                        </span>
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-slate-900 dark:text-white">
                            Build Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:to-white">SaaS Empire.</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                            Expert <strong>SaaS Development</strong> services for startups and enterprises. From <strong>MERN Stack Development</strong> to scalable cloud architectures.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="#consultation" className="px-8 py-4 bg-[#3994fa] text-white rounded-full font-bold shadow-lg flex items-center justify-center gap-2">Start Your SaaS <ArrowRight className="w-4 h-4" /></Link>
                        </div>
                    </div>

                    <div id="consultation" className="relative mt-8 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none scroll-mt-32">
                        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800">
                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div className="space-y-1.5"><label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label><input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 px-6 outline-none text-sm" /></div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"><div className="space-y-1.5"><label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</label><input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 px-6 outline-none text-sm" /></div><div className="space-y-1.5"><label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone</label><PhoneInput value={formData.phone} onChange={(val) => setFormData({ ...formData, phone: val })} countryCode={formData.countryCode} onCountryCodeChange={(code) => setFormData({ ...formData, countryCode: code })} /></div></div>
                                <button disabled={submitStatus === "loading"} type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-black rounded-2xl transition-all shadow-lg text-[13px] uppercase tracking-widest">{submitStatus === "loading" ? "Submitting..." : "Get Free Consultation"}</button>
                                {submitStatus === 'success' && <p className="text-emerald-500 text-xs font-bold text-center">Your SaaS journey starts now!</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-[#3994fa] font-bold uppercase tracking-widest text-xs">SaaS Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Enterprise-Grade SaaS Solutions.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SAAS_SERVICES.map((sol, i) => (
                            <div key={i} className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-[#3994fa]/30 transition-all">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sol.color} flex items-center justify-center mb-6 text-white`}><sol.icon className="w-7 h-7" /></div>
                                <h3 className="text-xl font-bold mb-3">{sol.t}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{sol.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CaseStudies studies={CASE_STUDIES} title="SaaS Success Stories" themeColor="#3b82f6" />

            <section className="py-24 md:py-36 px-6 bg-slate-900 text-white text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10 space-y-10">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Ready to Scale Your <span className="text-cyan-400">SaaS Business?</span></h2>
                    <p className="text-slate-400 text-lg md:text-xl">Join modern startups and enterprise leaders who trust Preet Tech for scalable SaaS solutions.</p>
                    <Link href="#consultation" className="inline-block px-12 py-6 bg-[#3994fa] text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl">Get Started Now</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
