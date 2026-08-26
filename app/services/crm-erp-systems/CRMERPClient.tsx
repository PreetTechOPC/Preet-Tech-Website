"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Database, Zap, Shield, Layout, Layers, ArrowRight, User, Mail, Phone,
    Building2, ChevronRight, Activity, Target, BarChart3, TrendingUp, Search,
    Globe, CheckCircle2, Share2, Briefcase, Rocket, Plus, Minus, Code2,
    Cloud, Cpu, MonitorSmartphone, Tablet, Check, Star, Settings, Headphones, Users,
    Play, CreditCard, ChevronDown, X, Workflow, ClipboardCheck, BarChart
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
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-slate-500/5 blur-[48px] rounded-full opacity-60" />
    </div>
);

const CRM_ERP_SERVICES = [
    { t: 'Custom CRM Development', d: 'Tailor-made customer relationship management systems to track leads, sales, and customer interactions.', icon: Users, color: 'from-blue-600 to-indigo-700' },
    { t: 'Enterprise ERP Solutions', d: 'Integrated business process management software to manage finance, HR, supply chain, and operations.', icon: Building2, color: 'from-slate-600 to-slate-800' },
    { t: 'Workflow Automation', d: 'Streamline your business operations with automated tasks and approval workflows.', icon: Workflow, color: 'from-orange-500 to-amber-600' },
    { t: 'Business Intelligence & Reporting', d: 'Advanced dashboards and real-time reporting to help you make data-driven decisions.', icon: BarChart3, color: 'from-emerald-500 to-teal-600' },
    { t: 'Legacy System Integration', d: 'Seamlessly connect your new CRM/ERP with existing software and third-party tools.', icon: Layers, color: 'from-purple-500 to-pink-600' },
    { t: 'Inventory & Warehouse Management', d: 'Real-time tracking of stock levels, orders, and shipments across multiple locations.', icon: Database, color: 'from-cyan-500 to-blue-600' }
];

export default function CRMERPSystemsPage() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const CASE_STUDIES: CaseStudy[] = [
        {
            id: 'erp-1',
            title: 'Manufacturing: Custom ERP Solution',
            client: 'Industrial Pro',
            category: 'Manufacturing / ERP',
            description: 'A complete ERP system managing production, inventory, and payroll for a mid-sized manufacturing unit.',
            stats: [
                { label: 'Efficiency', value: '+35%' },
                { label: 'Errors', value: '-60%' },
                { label: 'ROI', value: '18 Months' }
            ],
            tags: ['Next.js', 'PostgreSQL', 'Docker']
        }
    ];

    const [formData, setFormData] = useState({ name: '', businessName: '', email: '', phone: '', countryCode: '+91', industry: '', budget: '₹1L - ₹5L' });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('loading');
        try {
            const res = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, phone: `${formData.countryCode} ${formData.phone}`, service: 'CRM/ERP Systems' }) });
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
                        <div className="inline-flex items-center px-4 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] md:text-xs font-bold uppercase tracking-widest border border-slate-300 dark:border-slate-700">
                            Custom Software & ERP Development
                        </div>
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-slate-900 dark:text-white">
                            Streamline Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-900 dark:to-white">Business Operations.</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                            Preet Tech develops custom <strong>CRM Development</strong> and <strong>ERP Solutions</strong> that help businesses automate workflows and manage growth effectively.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="#consultation" className="px-8 py-4 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5">Consult an Expert <ArrowRight className="w-4 h-4" /></Link>
                        </div>
                    </div>

                    <div id="consultation" className="relative mt-8 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none scroll-mt-32">
                        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800">
                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div className="space-y-1.5"><label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label><input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 px-6 outline-none text-sm" /></div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"><div className="space-y-1.5"><label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</label><input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 px-6 outline-none text-sm" /></div><div className="space-y-1.5"><label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone</label><PhoneInput value={formData.phone} onChange={(val) => setFormData({ ...formData, phone: val })} countryCode={formData.countryCode} onCountryCodeChange={(code) => setFormData({ ...formData, countryCode: code })} /></div></div>
                                <button disabled={submitStatus === "loading"} type="submit" className="w-full py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-black rounded-2xl transition-all shadow-lg text-[13px] uppercase tracking-widest hover:opacity-90">{submitStatus === "loading" ? "Submitting..." : "Get Business Audit"}</button>
                                {submitStatus === 'success' && <p className="text-emerald-500 text-xs font-bold text-center">We'll help you automate!</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">Core Systems</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Business Automation Solutions.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CRM_ERP_SERVICES.map((sol, i) => (
                            <div key={i} className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-slate-400 transition-all">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sol.color} flex items-center justify-center mb-6 text-white`}><sol.icon className="w-7 h-7" /></div>
                                <h3 className="text-xl font-bold mb-3">{sol.t}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{sol.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CaseStudies studies={CASE_STUDIES} title="Business Impact Stories" themeColor="#475569" />

            <section className="py-24 md:py-36 px-6 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10 space-y-10">
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter">Ready to <br/><span className="text-slate-500">Automate Your Success?</span></h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-medium">Stop managing spreadsheets. Start managing growth with Preet Tech.</p>
                    <Link href="#consultation" className="px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-2xl font-black uppercase tracking-widest text-[11px] sm:text-[13px] shadow-xl inline-block hover:opacity-90 transition-all hover:-translate-y-1">Start Your Transformation</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
