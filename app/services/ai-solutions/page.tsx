"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu, Zap, Shield, Layout, Layers, ArrowRight, User, Mail, Phone,
    Building2, ChevronRight, Activity, Target, BarChart3, TrendingUp, Search,
    Globe, CheckCircle2, Share2, Briefcase, Rocket, Plus, Minus, Code2,
    Database, Cloud, MonitorSmartphone, Tablet, Check, Star, Settings, Headphones, Users,
    Play, CreditCard, ChevronDown, X, BrainCircuit, Bot, Sparkles, MessageSquare, Workflow
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
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#3994fa]/5 blur-[48px] rounded-full opacity-60" />
    </div>
);

const AI_SOLUTIONS = [
    { t: 'Generative AI Integration', d: 'Implement LLMs like GPT-4 and Claude into your business workflows for automated content and logic.', icon: BrainCircuit, color: 'from-blue-400 to-indigo-600' },
    { t: 'AI Chatbots & Assistants', d: '24/7 intelligent customer support bots that understand context and resolve queries in real-time.', icon: MessageSquare, color: 'from-purple-400 to-pink-600' },
    { t: 'Predictive Analytics', d: 'Leverage machine learning to forecast trends, customer behavior, and sales growth with high accuracy.', icon: BarChart3, color: 'from-emerald-400 to-teal-600' },
    { t: 'Process Automation', d: 'Automate repetitive tasks with AI-driven workflows, reducing human error and operational costs.', icon: Workflow, color: 'from-orange-400 to-red-600' },
    { t: 'AI Voice & Image', d: 'Custom voice synthesis and computer vision solutions for advanced data processing and user interaction.', icon: Bot, color: 'from-cyan-400 to-blue-600' },
    { t: 'SaaS AI Tools', d: 'Build full-scale AI products from scratch — from prompt engineering to deployment.', icon: Sparkles, color: 'from-yellow-400 to-amber-600' }
];

export default function AISolutionsPage() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const CASE_STUDIES: CaseStudy[] = [
        {
            id: 'ai-1',
            title: 'Real Estate: AI Virtual Assistant',
            client: 'PropTech AI',
            category: 'Real Estate / AI',
            description: 'Implemented an AI agent that handles property inquiries, schedules tours, and qualifies leads 24/7.',
            stats: [
                { label: 'Leads', value: '+40%' },
                { label: 'Response', value: '< 2s' },
                { label: 'Cost Save', value: '₹5L/mo' }
            ],
            tags: ['OpenAI API', 'Python', 'React']
        }
    ];

    const [formData, setFormData] = useState({ name: '', businessName: '', email: '', phone: '', countryCode: '+91', industry: '', budget: '₹50k - ₹1L' });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('loading');
        try {
            const res = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, phone: `${formData.countryCode} ${formData.phone}`, service: 'AI Solutions' }) });
            if (res.ok) { setSubmitStatus('success'); setFormData({ name: '', businessName: '', email: '', phone: '', countryCode: '+91', industry: '', budget: '₹50k - ₹1L' }); }
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
                            AI Website Development & Automation
                        </span>
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-slate-900 dark:text-white">
                            Future-Proof Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:to-cyan-400 italic">Business with AI.</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                            Preet Tech provides cutting-edge <strong>AI Marketing Solutions</strong> and custom AI integrations to automate your business and scale your digital presence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="#consultation" className="px-8 py-4 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-full font-bold shadow-lg flex items-center justify-center gap-2">Build AI Solution <ArrowRight className="w-4 h-4" /></Link>
                        </div>
                    </div>

                    <div id="consultation" className="relative mt-8 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none scroll-mt-32">
                        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800">
                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div className="space-y-1.5"><label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label><input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 px-6 outline-none text-sm" /></div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"><div className="space-y-1.5"><label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</label><input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 px-6 outline-none text-sm" /></div><div className="space-y-1.5"><label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone</label><PhoneInput value={formData.phone} onChange={(val) => setFormData({ ...formData, phone: val })} countryCode={formData.countryCode} onCountryCodeChange={(code) => setFormData({ ...formData, countryCode: code })} /></div></div>
                                <button disabled={submitStatus === "loading"} type="submit" className="w-full py-4 bg-gradient-to-r from-[#3994fa] to-purple-600 text-white font-black rounded-2xl transition-all shadow-lg text-[13px] uppercase tracking-widest">{submitStatus === "loading" ? "Submitting..." : "Get AI Consultation"}</button>
                                {submitStatus === 'success' && <p className="text-emerald-500 text-xs font-bold text-center">AI strategy on its way!</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-[#3994fa] font-bold uppercase tracking-widest text-xs">Innovation Hub</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Custom AI Services.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {AI_SOLUTIONS.map((sol, i) => (
                            <div key={i} className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-[#3994fa]/30 transition-all">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sol.color} flex items-center justify-center mb-6 text-white`}><sol.icon className="w-7 h-7" /></div>
                                <h3 className="text-xl font-bold mb-3">{sol.t}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{sol.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CaseStudies studies={CASE_STUDIES} title="AI Success Stories" themeColor="#8b5cf6" />

            <section className="py-24 md:py-36 px-6 bg-slate-950 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50" />
                <div className="max-w-4xl mx-auto relative z-10 space-y-10">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Ready to Deploy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Intelligence?</span></h2>
                    <p className="text-slate-400 text-lg md:text-xl font-medium">Preet Tech is your partner in AI transformation. Let's build the future together.</p>
                    <Link href="#consultation" className="inline-block px-12 py-6 bg-[#3994fa] text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl">Get Started with AI</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
