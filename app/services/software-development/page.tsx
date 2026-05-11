"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, animate } from 'framer-motion';
import {
    Cpu,
    Database,
    Globe,
    Layout,
    Layers,
    Shield,
    Zap,
    Code2,
    BarChart3,
    Workflow,
    Settings,
    Headphones,
    ArrowRight,
    User,
    Mail,
    Phone,
    Building2,
    MessageSquare,
    ChevronLeft,
    ChevronRight,
    Search,
    Lock,
    RefreshCw,
    CheckCircle2,
    Server,
    Activity,
    Terminal,
    Hexagon,
    Boxes,
    Cloud,
    Plus,
    Minus,
    ArrowUpRight,
    Target,
    ZapOff,
    Monitor,
    Smartphone,
    Share2,
    HardDrive,
    Infinity as InfinityIcon,
    Key,
    UserCheck,
    Briefcase,
    Store,
    Rocket
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PhoneInput from '@/components/PhoneInput';
import CaseStudies, { CaseStudy } from '@/components/CaseStudies';
enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

// Reusable Components
const SectionHeader = ({ badge, title, subtitle, centered = true }: { badge: string; title: string; subtitle?: string; centered?: boolean }) => (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
        <span


            className={`text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block`}
        >
            {badge}
        </span>
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-outfit font-black tracking-tight uppercase text-slate-900 dark:text-white leading-tight ${centered ? 'mx-auto max-w-4xl' : ''}`}>
            {title}
        </h2>
        {subtitle && <p className={`mt-6 text-slate-500 dark:text-slate-400 text-lg max-w-3xl ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>}
        {centered && <div className="h-1.5 w-24 bg-brand-cyan mx-auto rounded-full mt-8" />}
    </div>
);

const whyNeedCustomSoftware = [
    { title: "Increased efficiency", detail: "Custom workflows eliminate bottlenecks and streamline core business operations.", icon: Zap },
    { title: "Task Automation", detail: "Automate repetitive data entry and administrative tasks to focus on strategy.", icon: Workflow },
    { title: "Better Data Control", detail: "Centralized, secure databases provide real-time insights and complete ownership.", icon: Database },
    { title: "Scalable Systems", detail: "Software that grows with your business without hitting performance ceilings.", icon: Layers },
    { title: "Competitive Edge", detail: "Unique technological capabilities that your competitors cannot simply buy off-the-shelf.", icon: Target },
];

const whyPreetTech = [
    { title: "Business-First Strategy", desc: "We align software architecture with your revenue goals and operational KPIs.", icon: Briefcase },
    { title: "Scalable Infrastructure", desc: "Building modular systems that handle millions of requests with zero downtime.", icon: Boxes },
    { title: "Transparent Process", desc: "Complete visibility into the codebase and sprint progress through our client portal.", icon: Search },
    { title: "Agile Methodology", desc: "Rapid 2-week sprint cycles ensuring fast time-to-market and iterative growth.", icon: RefreshCw },
    { title: "Post-Launch Support", desc: "24/7 technical monitoring and proactive performance optimization beyond launch.", icon: Headphones },
];

const targetAudience = [
    { type: "Growing Startups", benefit: "Fast prototypes and scalable MVP builds to secure funding and market traction.", icon: Rocket },
    { type: "SMEs", benefit: "Modernizing legacy systems and digitizing operations for increased profitability.", icon: Building2 },
    { type: "Enterprises", benefit: "Complex multi-system integrations and high-security internal platforms.", icon: Shield },
    { type: "SaaS Founders", benefit: "End-to-end multi-tenant product engineering for global software businesses.", icon: Cloud },
    { type: "E-Commerce", benefit: "Custom multi-vendor marketplaces and high-converting checkout ecosystems.", icon: Store },
    { type: "Service-Based", benefit: "Booking engines, client portals, and automated service delivery pipelines.", icon: UserCheck },
];

const solutions = [
    { title: "Custom Business Software", desc: "Tailored internal tools designed to manage your unique business logic and complex operational workflows.", outcome: "100% Alignment with Business Ops" },
    { title: "CRM / ERP Systems", desc: "Centralized management platforms for customer relationships, inventory, finance, and human resources.", outcome: "Unified Data Intelligence" },
    { title: "SaaS Application Development", desc: "Building scalable, multi-tenant software products ready for worldwide commercial distribution.", outcome: "Recurring Revenue Infrastructure" },
    { title: "Web-Based Software", desc: "High-performance web applications accessible from any device, built with modern reactive frameworks.", outcome: "Universal Accessibility" },
    { title: "Automation Systems", desc: "Intelligent background processes and workflow triggers that eliminate manual intervention.", outcome: "Zero Manual Errors" },
    { title: "Cloud-Based Software", desc: "Leveraging AWS, Azure, and Google Cloud for serverless, global, and highly available software.", outcome: "99.9% Platform Uptime" },
    { title: "API & System Integration", desc: "Connecting disparate software tools to ensure data flows seamlessly across your entire tech stack.", outcome: "Seamless Ecosystem Growth" },
    { title: "UI/UX for Platforms", desc: "Strategic interface design focused on user productivity, reducing training time and increasing adoption.", outcome: "High User Satisfaction" },
    { title: "Database & Security", desc: "Advanced data structuring and military-grade encryption to protect your most valuable business assets.", outcome: "Bank-Level Data Safety" },
    { title: "Performance Optimization", desc: "Deep technical audits and refactoring to ensure your software responds in sub-100ms speeds.", outcome: "Maximum System Efficiency" },
    { title: "Modernization & Upgrades", desc: "Migrating legacy systems to modern tech stacks without losing historical data or business continuity.", outcome: "Future-Proofed Tech" },
    { title: "Maintenance & Support", desc: "Fixed-cost support retainers for continuous security patches, updates, and feature enhancements.", outcome: "Zero Maintenance Stress" },
];

const steps = [
    { name: "Discovery", desc: "Deep immersion into your business logic, goals, and technical requirements.", deliverables: "Project Roadmap & Tech Specs" },
    { name: "Planning", desc: "Wireframing, UI/UX architecture, and database structuring for maximum scale.", deliverables: "Design System & Prototypes" },
    { name: "Development", desc: "Agile coding phase with continuous integration and real-time progress tracking.", deliverables: "Clean, Scalable Codebase" },
    { name: "Testing", desc: "Rigorous QA testing including unit, integration, and security penetration tests.", deliverables: "Bug-Free Performance" },
    { name: "Deployment", desc: "Seamless launch to cloud infrastructure with automated CI/CD pipelines.", deliverables: "Live Enterprise Platform" },
    { name: "Optimization", desc: "Monitoring performance and gathering user feedback for continuous improvement.", deliverables: "Measurable Growth ROI" },
];

const techStack = {
    frontend: ["React", "Next.js", "Angular"],
    backend: ["Node.js", "Express", "Django"],
    database: ["MongoDB", "PostgreSQL", "MySQL"],
    devops: ["AWS", "Azure", "Docker", "CI/CD"],
    security: ["JWT Authentication", "RBAC", "Data Encryption"]
};

const caseStudies = [
    {
        company: "LogicFlow Systems",
        industry: "Logistics",
        challenge: "Manual tracking of 500+ daily shipments causing 15% error rate.",
        solution: "Custom AI-driven automated tracking and driver management app.",
        result: "Error rate reduced to <0.5% and 40% faster delivery times.",
        image: "/images/services/logicflow-logistics.png"
    },
    {
        company: "Medivault",
        industry: "Healthcare",
        challenge: "Fragmented patient data across 10+ clinics with security risks.",
        solution: "Centralized HIPAA-compliant ERP with end-to-end encryption.",
        result: "Integrated patient care and zero security breaches over 2 years.",
        image: "/images/services/medivault-healthcare.png"
    }
];

const faqs = [
    { q: "How long does custom software development take?", a: "Typically, a minimum viable product (MVP) takes 8–12 weeks, while more complex enterprise systems can take 6–12 months depending on the scope and integrations." },
    { q: "What is the typical investment required?", a: "Projects start from $15,000 for specific tools/MVPs. Full-scale enterprise solutions are quoted based on the complexity, features, and technical architecture required." },
    { q: "Do you offer long-term maintenance?", a: "Yes, we provide post-launch maintenance packages that include security updates, performance monitoring, and continuous feature enhancements." },
    { q: "Can you upgrade legacy systems?", a: "Absolutely. We specialize in legacy modernization—migrating old databases and codebases to modern, scalable technologies like Next.js and Node.js without data loss." },
    { q: "How do you ensure data security?", a: "We implement military-grade encryption (AES-256), multi-factor authentication, Role-Based Access Control (RBAC), and regular security audits to ensure your data stays protected." }
];

const marqueeTechs = ["Docker", "Kubernetes", "Redis", "AWS Lambda", "GraphQL", "Python", "TypeScript", "Go", "Rust", "Terraform", "Jenkins", "Vercel"];

const SoftwareDevelopmentPage = () => {
    const [theme, setTheme] = useState<Theme>(Theme.DARK);
    const [expandedSolution, setExpandedSolution] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const SW_CASE_STUDIES: CaseStudy[] = [
        {
            id: 'sw-1',
            title: 'ERP Modernization for Logistics Giant',
            client: 'GlobalLogix',
            category: 'Enterprise Software',
            description: 'Refactored a legacy monolithic ERP into a high-speed microservices architecture, reducing operational latency by 70%.',
            stats: [
                { label: 'Latency', value: '-70%' },
                { label: 'Efficiency', value: '+45%' },
                { label: 'ROI', value: '180%' }
            ],
            tags: ['Microservices', 'PostgreSQL', 'Docker']
        },
        {
            id: 'sw-2',
            title: 'Custom SaaS Platform for Real Estate',
            client: 'PropTech Pro',
            category: 'SaaS Engineering',
            description: 'End-to-end engineering of a multi-tenant property management system with automated billing and 3D virtual tours.',
            stats: [
                { label: 'Tenants', value: '500+' },
                { label: 'Reliability', value: '99.99%' },
                { label: 'Features', value: '120+' }
            ],
            tags: ['Next.js', 'Go', 'GraphQL']
        }
    ];

    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        countryCode: '+91',
        companySize: '',
        projectType: '',
        budget: '',
        description: ''
    });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('loading');
        try {
            // Include basic lead mapping for consistency with the leads API
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    phone: `${formData.countryCode} ${formData.phone}`,
                    industry: `${formData.companySize} Employees`, // mapping company size as industry for now since it's the closest field
                    service: 'Software Development'
                })
            });
            if (res.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', businessName: '', email: '', phone: '', countryCode: '+91', companySize: '', projectType: '', budget: '', description: '' });
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus('error');
        }
    };

    const CARD_WIDTH = 400;
    const CARD_GAP = 24;
    const CARD_STEP = CARD_WIDTH + CARD_GAP;

    useEffect(() => {
        // Default to Light theme as requested
        /* handled by next-themes */
        setTheme(Theme.LIGHT);
    }, []);

    const startTimer = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % solutions.length);
        }, 5000);
    }, [solutions.length]);

    const stopTimer = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
    }, []);

    const snapTo = useCallback((index: number) => {
        const clamped = (index + solutions.length) % solutions.length;
        setActiveIndex(clamped);
        animate(x, -clamped * CARD_STEP, { type: 'spring', stiffness: 300, damping: 35 });
    }, [solutions.length, CARD_STEP, x]);

    useEffect(() => {
        animate(x, -activeIndex * CARD_STEP, { type: 'spring', stiffness: 300, damping: 35 });
    }, [activeIndex, CARD_STEP, x]);

    useEffect(() => {
        startTimer();
        return () => stopTimer();
    }, [startTimer, stopTimer]);

    const handleDragEnd = (_: any, info: any) => {
        setIsDragging(false);
        const threshold = CARD_STEP / 4;
        if (info.offset.x < -threshold) {
            snapTo(activeIndex + 1);
        } else if (info.offset.x > threshold) {
            snapTo(activeIndex - 1);
        } else {
            snapTo(activeIndex);
        }
        startTimer();
    };

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        if (newTheme === Theme.DARK) {
            /* handled by next-themes */
        } else {
            /* handled by next-themes */
        }
    };

    // Removed GSAP reveal animations

    return (
        <main ref={containerRef} className="bg-white dark:bg-[#020617] text-slate-900 dark:text-white selection:bg-brand-medium/30 transition-colors duration-300 font-jakarta overflow-x-clip">
            <Navbar isDark={theme === Theme.DARK} toggleTheme={toggleTheme} />

            {/* 1️⃣ Hero Section */}
            <section className="relative min-h-[85vh] flex items-center pt-24 pb-12 px-6 overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-medium/5 dark:bg-brand-medium/10 blur-[150px] rounded-full animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/5 dark:bg-brand-cyan/10 blur-[130px] rounded-full animate-pulse delay-200" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.2] dark:opacity-[0.1] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
                </div>

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                    {/* Hero Left */}
                    <div className="lg:col-span-7 hero-text-content">
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-medium/10 border border-brand-medium/20 text-brand-cyan text-[10px] font-black uppercase tracking-[0.3em] mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                            Enterprise Engineering
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-black tracking-tighter uppercase leading-[0.9] mb-6 text-slate-900 dark:text-white">
                            Custom Software <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-medium to-brand-deep italic pr-4">Built for Growth.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-900 dark:text-white font-bold mb-3">
                            “Custom Software Built for Growth & Efficiency”
                        </p>

                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed mb-6 font-medium">
                            We design and develop scalable, secure, and performance-driven software solutions tailored to your business operations.
                        </p>

                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed mb-8">
                            At Preet Tech OPC Private Limited, we don't just build code; we architect solutions. We position ourselves as your long-term technology partner, ensuring your systems are ready for future market shifts and internal scaling.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mb-10">
                            <Link
                                href="/case-studies/software-development"
                                className="px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-90 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] sm:text-[13px] shadow-lg shadow-[#3994fa]/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
                            >
                                Case Studies <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                        </div>

                        <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-slate-200 dark:border-white/5">
                            <div className="flex -space-x-3">
                                {[
                                    { initials: 'AK', color: 'from-blue-500 to-cyan-400' },
                                    { initials: 'RJ', color: 'from-purple-500 to-pink-400' },
                                    { initials: 'SM', color: 'from-emerald-500 to-teal-400' },
                                    { initials: 'DK', color: 'from-orange-500 to-rose-400' },
                                ].map((u, i) => (
                                    <div key={i} className={`w-12 h-12 rounded-full border-4 border-white dark:border-[#020617] bg-gradient-to-br ${u.color} flex items-center justify-center text-white text-xs font-black shrink-0`}>
                                        {u.initials}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Trusted By Global Leaders</p>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">50+ Enterprise Deployments</p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Right: Strategy Form */}
                    <div id="strategy-form" className="lg:col-span-5 hero-form-box scroll-mt-32">
                        <div className="glass-morphism rounded-[2.5rem] p-6 md:p-8 border border-slate-200 dark:border-white/10 shadow-xl relative z-10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-lg">
                            <div className="mb-6">
                                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-2">Request Strategy Call</h3>
                                <p className="text-[10px] font-black text-brand-cyan uppercase tracking-widest">Free Consultation • Zero Obligation</p>
                            </div>

                            <form onSubmit={handleFormSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <input required type="text" placeholder="Full Name" value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-6 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all font-medium" />
                                </div>
                                <div className="space-y-2">
                                    <input required type="text" placeholder="Company Name" value={formData.businessName || ''} onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-6 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all font-medium" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input required type="email" placeholder="Work Email" value={formData.email || ''} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-6 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all font-medium" />
                                    <PhoneInput
                                        value={formData.phone || ''}
                                        onChange={(val) => setFormData({ ...formData, phone: val })}
                                        countryCode={formData.countryCode}
                                        onCountryCodeChange={(code) => setFormData({ ...formData, countryCode: code })}
                                        className="!h-auto"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <select required value={formData.companySize} onChange={(e) => setFormData({ ...formData, companySize: e.target.value })} className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-6 text-sm text-slate-500 dark:text-slate-400 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 cursor-pointer">
                                        <option value="">Company Size</option>
                                        <option value="1-10">1-10 Employees</option>
                                        <option value="11-50">11-50 Employees</option>
                                        <option value="51-200">51-200 Employees</option>
                                        <option value="201+">201+ Employees</option>
                                    </select>
                                    <select required value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-6 text-sm text-slate-500 dark:text-slate-400 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 cursor-pointer">
                                        <option value="">Project Type</option>
                                        <option value="custom">Custom Software</option>
                                        <option value="crm">CRM / ERP</option>
                                        <option value="saas">SaaS</option>
                                        <option value="automation">Automation</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <select required value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-6 text-sm text-slate-500 dark:text-slate-400 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 cursor-pointer">
                                    <option value="">Estimated Budget</option>
                                    <option value="15-25k">$15,000 - $25,000</option>
                                    <option value="25-50k">$25,000 - $50,000</option>
                                    <option value="50-100k">$50,000 - $100,000</option>
                                    <option value="100k+">$100,000+</option>
                                </select>
                                <textarea placeholder="Project Description" rows={3} value={formData.description || ''} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-6 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all font-medium resize-none"></textarea>

                                <button disabled={submitStatus === "loading"} type="submit" className="w-full px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-90 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] sm:text-[13px] shadow-lg shadow-[#3994fa]/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-1 disabled:opacity-70">
                                    {submitStatus === "loading" ? "Submitting..." : "Request Free Software Strategy Call"} <ArrowRight className="w-4 h-4" />
                                </button>
                                {submitStatus === 'success' && <p className="text-emerald-500 text-[10px] font-black uppercase text-center mt-2 tracking-widest">Success! We will be in touch.</p>}
                                {submitStatus === 'error' && <p className="text-red-500 text-[10px] font-black uppercase text-center mt-2 tracking-widest">Error! Please try again.</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2️⃣ Why Businesses Need Custom Software */}
            <section className="py-32 px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        badge="Operational Excellence"
                        title="Why Businesses Need Custom Software"
                        subtitle="Off-the-shelf tools often force your business to adapt to their limitations. Custom software adapts to you."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {whyNeedCustomSoftware.map((item, i) => (
                            <motion.div
                                key={i}
                                
                                className="group p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 hover:border-brand-cyan/30 transition-all"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-7 h-7 text-brand-cyan" />
                                </div>
                                <h4 className="text-xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">{item.title}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.detail}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3️⃣ Why Choose Preet Tech OPC Private Limited */}
            <section className="py-32 px-6 bg-slate-50/50 dark:bg-slate-950/50 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <SectionHeader
                                badge="The Preet Edge"
                                title="Building Trust Through Authority"
                                centered={false}
                            />
                            <div className="space-y-6">
                                {whyPreetTech.map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-medium/10 flex items-center justify-center border border-brand-medium/20 text-brand-medium group-hover:bg-brand-medium group-hover:text-white transition-all">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-black uppercase tracking-tight text-slate-900 dark:text-white mb-1">{item.title}</h4>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square glass-morphism rounded-[3rem] border border-slate-200 dark:border-white/10 p-4 relative overflow-hidden bg-slate-200/20 dark:bg-white/5">
                                <div className="absolute inset-0 w-full h-full pointer-events-none">
                                    <iframe
                                        className="w-full h-full scale-[1.5] object-cover rounded-[2.5rem]"
                                        src="https://www.youtube.com/embed/5iliern1SAs?autoplay=1&mute=1&loop=1&playlist=5iliern1SAs&controls=0&showinfo=0&rel=0&modestbranding=1"
                                        title="Strategy First Engineering"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent pointer-events-none" />
                                <div className="absolute bottom-10 left-10 p-8 glass-morphism rounded-3xl border border-white/20 w-[80%]">
                                    <p className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2">"Strategy-First Engineering"</p>
                                    <p className="text-white/70 text-sm font-medium">We deliver software that drives measurable business ROI.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4️⃣ Who This Service Is For */}
            <section className="py-32 px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        badge="Strategic Fit"
                        title="Tailored for Your Growth Stage"
                        subtitle="From agile startups to global enterprises, we provide the technical architecture you need to win."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {targetAudience.map((item, i) => (
                            <motion.div
                                key={i}
                                
                                className="p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/30 flex flex-col items-start shadow-sm"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#3994fa]/10 flex items-center justify-center mb-8 text-[#3994fa]">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-4">{item.type}</h4>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.benefit}</p>
                                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5 w-full flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#3994fa]">
                                    Strategic Growth Solution <ArrowRight className="w-3 h-3 ml-2" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5️⃣ Our Software Development Solutions Overview */}
            <section className="py-32 px-6 bg-slate-900 dark:bg-black text-white reveal-section overflow-hidden">
                <div className="max-w-7xl mx-auto mb-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <SectionHeader
                                badge="Direct Impact"
                                title="Core Software Solutions"
                                centered={false}
                            />
                        </div>
                        <div className="flex items-center gap-4 mb-16">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => { stopTimer(); snapTo(activeIndex - 1); }}
                                    className="w-14 h-14 rounded-full border border-white/10 bg-white/5 hover:bg-brand-cyan hover:text-brand-deep flex items-center justify-center transition-all group"
                                >
                                    <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                </button>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-black text-brand-cyan tabular-nums leading-none">
                                        {String(activeIndex + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-[10px] font-bold opacity-30 uppercase tracking-widest mt-1">
                                        / {String(solutions.length).padStart(2, '0')}
                                    </span>
                                </div>
                                <button
                                    onClick={() => { stopTimer(); snapTo(activeIndex + 1); }}
                                    className="w-14 h-14 rounded-full border border-white/10 bg-white/5 hover:bg-brand-cyan hover:text-brand-deep flex items-center justify-center transition-all group"
                                >
                                    <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative cursor-grab active:cursor-grabbing">
                    <motion.div
                        drag="x"
                        dragConstraints={{ left: -((solutions.length - 1) * CARD_STEP), right: 0 }}
                        onDragStart={() => { setIsDragging(true); stopTimer(); }}
                        onDragEnd={handleDragEnd}
                        style={{ x }}
                        className="flex gap-6 px-[max(1.5rem,calc((100vw-80rem)/2))]"
                    >
                        {solutions.map((item, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    opacity: Math.abs(i - activeIndex) > 2 ? 0.3 : 1,
                                    scale: i === activeIndex ? 1 : 0.95
                                }}
                                className="shrink-0 group relative"
                                style={{ width: `${CARD_WIDTH}px` }}
                            >
                                <div
                                    className={`relative p-8 rounded-[2.5rem] border transition-all h-[400px] flex flex-col justify-between overflow-hidden ${activeIndex === i ? 'bg-brand-deep/20 border-brand-cyan/50 shadow-2xl shadow-brand-cyan/10' : 'bg-white/5 border-white/10'}`}
                                >
                                    {/* Abstract background element */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 blur-3xl rounded-full -mr-16 -mt-16 transition-transform duration-400 ${activeIndex === i ? 'scale-150' : 'scale-100'}`} />

                                    <div>
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">0{i + 1}</span>
                                        </div>
                                        <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 leading-tight">{item.title}</h4>
                                        <p className="text-sm text-white/60 leading-relaxed font-medium mb-6">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="pt-6 border-t border-white/10">
                                            <div className="text-[10px] font-black uppercase tracking-widest text-brand-cyan mb-2">Primary Outcome</div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-lg font-black uppercase tracking-tight">{item.outcome}</p>
                                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-brand-deep transition-all">
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-3 mt-16">
                    {solutions.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { stopTimer(); snapTo(i); }}
                            className={`h-1.5 transition-all duration-300 rounded-full ${i === activeIndex ? 'w-12 bg-brand-cyan shadow-lg shadow-brand-cyan/20' : 'w-3 bg-white/10 hover:bg-white/30'}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* 6️⃣ Our Development Process */}
            <section className="py-32 px-6 overflow-hidden reveal-section">
                <div className="max-w-7xl mx-auto text-center mb-24">
                    <SectionHeader
                        badge="Roadmap to Success"
                        title="Our Development Process"
                    />
                </div>

                <div className="max-w-7xl mx-auto relative px-10">
                    {/* Progress Bar Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-white/10 hidden lg:block -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 border-4 border-brand-cyan flex items-center justify-center mb-8 relative">
                                    <span className="text-xl font-black text-brand-cyan">{i + 1}</span>
                                    {/* Animated pulse for current step (simulated) */}
                                    {i === 0 && <span className="absolute inset-0 rounded-full bg-brand-cyan animate-ping opacity-20" />}
                                </div>
                                <div className="text-center">
                                    <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-2">{step.name}</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-4">{step.desc}</p>
                                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 text-[9px] font-black uppercase tracking-widest text-brand-cyan">
                                        Deliverable: {step.deliverables}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7️⃣ Technology Stack & Infrastructure */}
            <section className="py-40 px-6 bg-[#020617] text-white reveal-section relative overflow-hidden">
                {/* Background Grid & Glows */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-cyan/20 blur-[150px] rounded-full" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-medium/20 blur-[150px] rounded-full" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <span


                            className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.5em] mb-4 block"
                        >
                            The Engine Room
                        </span>
                        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8 opacity-10 absolute left-1/2 -translate-x-1/2 top-20 w-full select-none">
                            Infrastructure
                        </h2>
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-white relative z-10">
                            Powering <span className="text-brand-cyan">Performance.</span>
                        </h2>
                        <p className="mt-6 text-white/50 text-lg max-w-2xl mx-auto font-medium">
                            We use industry-leading technologies to build resilient, ultra-fast platforms tailored for enterprise scale.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {Object.entries(techStack).map(([category, techs], i) => (
                            <motion.div
                                key={i}


                                
                                
                                className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-brand-cyan/30 transition-all group backdrop-blur-sm"
                            >
                                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-cyan">{category}</h4>
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/50" />
                                </div>
                                <ul className="space-y-5">
                                    {techs.map((tech, j) => (
                                        <li key={j} className="flex items-center gap-3 text-base font-bold group/item">
                                            <div className="w-5 h-5 rounded-full border border-brand-cyan/30 flex items-center justify-center group-hover/item:border-brand-cyan transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan opacity-40 group-hover/item:opacity-100" />
                                            </div>
                                            <span className="text-white/80 group-hover/item:text-white transition-colors">{tech}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Infinite Marquee */}
                    <div className="mt-32 relative group">
                        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#020617] to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#020617] to-transparent z-10" />

                        <div className="flex overflow-hidden py-10 rounded-full bg-white/[0.02] border border-white/5">
                            <motion.div
                                
                                
                                className="flex flex-nowrap gap-20 items-center justify-around min-w-full shrink-0"
                            >
                                {marqueeTechs.concat(marqueeTechs).map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-2xl md:text-4xl font-black tracking-tighter uppercase text-white/20 hover:text-brand-cyan transition-colors cursor-default whitespace-nowrap"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8️⃣ Case Studies / Portfolio */}
            <section className="py-32 px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        badge="Proven Performance"
                        title="Success Blueprint"
                        subtitle="See how we've solved complex business challenges through strategic engineering."
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {caseStudies.map((caseStudy, i) => (
                            <div key={i} className="group flex flex-col md:flex-row gap-8 p-10 rounded-[3rem] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/30 hover:border-brand-medium/50 transition-all">
                                <div className="w-full md:w-1/2 aspect-[4/5] rounded-[2rem] overflow-hidden">
                                    <img src={caseStudy.image} alt={caseStudy.company} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" onError={(e) => { const t = e.target as HTMLImageElement; t.style.background = 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'; t.src = ''; }} />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col justify-between py-2">
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-brand-medium mb-2">{caseStudy.industry} Excellence</div>
                                        <h4 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-6">{caseStudy.company}</h4>

                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-[10px] font-black uppercase text-slate-400 mb-1">The Challenge</p>
                                                <p className="text-sm font-medium text-slate-900 dark:text-white leading-relaxed">{caseStudy.challenge}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Our Solution</p>
                                                <p className="text-sm font-medium text-slate-900 dark:text-white leading-relaxed">{caseStudy.solution}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 p-5 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20">
                                        <p className="text-[10px] font-black uppercase text-brand-cyan mb-1">Measurable Result</p>
                                        <p className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">{caseStudy.result}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9️⃣ FAQs Section */}
            <section className="py-32 px-6 bg-slate-50/50 dark:bg-slate-950/50 reveal-section">
                <div className="max-w-4xl mx-auto">
                    <SectionHeader
                        badge="Clarity & Protocol"
                        title="Frequently Asked Questions"
                    />

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="glass-morphism rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden bg-white dark:bg-slate-900/50">
                                <details className="group">
                                    <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                                        <h4 className="text-lg font-black uppercase tracking-tight text-slate-900 dark:text-white">{faq.q}</h4>
                                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0 group-open:rotate-180 transition-transform">
                                            <Plus className="w-5 h-5 group-open:hidden" />
                                            <Minus className="w-5 h-5 hidden group-open:block" />
                                        </div>
                                    </summary>
                                    <div className="px-8 pb-8 text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                        {faq.a}
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔟 Free Software Strategy Consultation Section */}
            <section className="py-32 px-6 reveal-section">
                <div className="max-w-6xl mx-auto glass-morphism rounded-[4rem] p-12 md:p-20 text-center border border-slate-200 dark:border-white/10 relative overflow-hidden bg-white dark:bg-slate-900/40">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/20 blur-[48px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-medium/20 blur-[48px] -z-10" />

                    <SectionHeader
                        badge="Immediate Step"
                        title="Let's Build Software That Powers Your Business"
                        subtitle="Scale your operations, automate your workflow, and future-proof your growth with enterprise-grade engineering."
                    />

                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        <Link href="#strategy-form" className="px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-90 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] sm:text-[13px] shadow-lg shadow-[#3994fa]/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-1">
                            Book Free Strategy Call
                        </Link>
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <CaseStudies 
                studies={SW_CASE_STUDIES} 
                subtitle="Software Success" 
                title="Engineering Complex Solutions."
                themeColor="#3994fa"
            />

            {/* Final Enterprise-Level CTA Section */}
            <section className="py-32 px-6 bg-[#020617] text-white overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(95,211,230,0.05)_0%,transparent_70%)] pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <motion.div


                        className="inline-block px-6 py-2 rounded-full border border-brand-cyan text-brand-cyan text-[10px] font-black uppercase tracking-[0.5em] mb-12"
                    >
                        Future Infrastructure
                    </motion.div>

                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
                        Future-Proof Your Business with <br />
                        <span className="text-brand-cyan italic">Scalable Software</span>
                    </h2>

                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-16 leading-relaxed">
                        Ensure reliability, peak performance, and strategic growth for your organization with a partner who understands the high-stakes of enterprise engineering.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="#strategy-form" className="w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-95 text-white rounded-2xl font-black text-[11px] sm:text-[13px] uppercase tracking-[0.2em] transition-all shadow-xl shadow-[#3994fa]/20 flex items-center justify-center">
                            Start Your Software Project
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-5 bg-white/5 border border-[#3994fa]/20 text-white hover:bg-gradient-to-r hover:from-[#3994fa] hover:to-[#004aad] hover:border-transparent rounded-2xl font-black text-[11px] sm:text-[13px] uppercase tracking-[0.2em] transition-all flex items-center justify-center">
                            Talk to Our Experts
                        </Link>
                    </div>
                </div>
            </section>



            <Footer />
        </main>
    );
};

export default SoftwareDevelopmentPage;
