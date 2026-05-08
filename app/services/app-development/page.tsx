"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Smartphone, Zap, Shield, Layout, Layers, ArrowRight, User, Mail, Phone,
    Building2, ChevronRight, Activity, Target, BarChart3, TrendingUp, Search,
    Globe, CheckCircle2, Share2, Briefcase, Rocket, Plus, Minus, Code2,
    Database, Cloud, Cpu, MonitorSmartphone, Tablet, Check, Star, Settings, Headphones, Users,
    Play, CreditCard, ChevronDown, X
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Footer from '@/components/Footer';
import PortfolioCarousel from '@/components/PortfolioCarousel';
import CaseStudies, { CaseStudy } from '@/components/CaseStudies';
import ThreeSphereScene from '@/components/ThreeSphere';
import PhoneInput from '@/components/PhoneInput';
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

const SOLUTIONS_DATA = [
    { t: 'Android App Development', d: 'High-performance Kotlin/Java applications built specifically for the vast Android ecosystem, optimized for thousands of devices.', icon: Smartphone, color: 'from-emerald-400 to-emerald-600', shadow: 'hover:shadow-emerald-500/20' },
    { t: 'iOS App Development', d: 'Premium, native experiences crafted with Swift focusing on strict Apple guidelines and peak performance.', icon: Tablet, color: 'from-slate-100 to-slate-400', shadow: 'hover:shadow-slate-500/20' },
    { t: 'Cross-Platform Development', d: 'Build once, deploy everywhere using React Native or Flutter without sacrificing speed, saving both time and budget.', icon: Layers, color: 'from-brand-cyan to-brand-sky', shadow: 'hover:shadow-brand-cyan/20' },
    { t: 'UI/UX Design for Apps', d: 'User-centric wireframing and prototyping that reduces friction and ensures an intuitive, highly aesthetic user journey.', icon: Layout, color: 'from-pink-400 to-rose-500', shadow: 'hover:shadow-pink-500/20' },
    { t: 'Backend & API Integration', d: 'Secure microservices, real-time databases, and robust REST/GraphQL APIs powering the core logic of your application.', icon: Database, color: 'from-orange-400 to-amber-600', shadow: 'hover:shadow-orange-500/20' },
    { t: 'E-Commerce & SaaS Apps', d: 'Industry-specific application development embedding Stripe/PayPal, custom dashboards, and complex business logic.', icon: BarChart3, color: 'from-brand-medium to-brand-deep', shadow: 'hover:shadow-brand-medium/20' },
    { t: 'App Security & Data', d: 'End-to-end encryption, OAuth2 implementation, and stringent data compliance (HIPAA, GDPR) measures for peace of mind.', icon: Shield, color: 'from-rose-400 to-red-600', shadow: 'hover:shadow-rose-500/20' },
    { t: 'Scale & Performance', d: 'Code refactoring, intelligent caching strategies, and load balancing engineered for millions of concurrent users.', icon: Zap, color: 'from-yellow-300 to-amber-500', shadow: 'hover:shadow-yellow-500/20' },
    { t: 'Deployment & Maintenance', d: 'Handling rigorous App Store approvals, alongside ongoing monitoring, bug fixes, and feature additions post-launch.', icon: Settings, color: 'from-purple-400 to-indigo-600', shadow: 'hover:shadow-purple-500/20' }
];

const SolutionsCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Triple the data for infinite look
    const EXTENDED_DATA = [...SOLUTIONS_DATA, ...SOLUTIONS_DATA, ...SOLUTIONS_DATA];

    useEffect(() => {
        // Initial scroll to center
        if (scrollRef.current) {
            const singleSetWidth = scrollRef.current.scrollWidth / 3;
            scrollRef.current.scrollLeft = singleSetWidth;
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current && !isDragging) {
                scrollRef.current.scrollBy({ left: 424, behavior: 'smooth' }); // card width + gap
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [isDragging]);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth } = scrollRef.current;
        const singleSetWidth = scrollWidth / 3;

        if (scrollLeft <= 0) {
            scrollRef.current.scrollLeft = singleSetWidth;
        } else if (scrollLeft >= singleSetWidth * 2) {
            scrollRef.current.scrollLeft = singleSetWidth;
        }
    };

    const slideLeft = () => scrollRef.current?.scrollBy({ left: -424, behavior: 'smooth' });
    const slideRight = () => scrollRef.current?.scrollBy({ left: 424, behavior: 'smooth' });

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
        setScrollLeft(scrollRef.current?.scrollLeft || 0);
    };
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="relative w-full">
            <div className="flex justify-end gap-3 mb-8 relative z-20 px-4 md:px-8 max-w-7xl mx-auto">
                <button onClick={slideLeft} className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/20 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 transition-colors backdrop-blur-sm shadow-xl shadow-slate-200/50 dark:shadow-black/20 group">
                    <ChevronRight className="w-5 h-5 text-slate-600 dark:text-white rotate-180 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button onClick={slideRight} className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/20 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 transition-colors backdrop-blur-sm shadow-xl shadow-slate-200/50 dark:shadow-black/20 group">
                    <ChevronRight className="w-5 h-5 text-slate-600 dark:text-white group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <div
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseUp}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onScroll={handleScroll}
                className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing pb-12 px-4 md:px-8 max-w-[100vw]"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {EXTENDED_DATA.map((sol, i) => (
                    <div
                        key={i}
                        className="group relative p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-[#3994fa]/30 dark:hover:border-[#3994fa]/30 shadow-xl shadow-slate-200/50 dark:shadow-lg shrink-0 w-[85vw] md:w-[400px] snap-center md:snap-start hover:-translate-y-2"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${sol.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300 pointer-events-none`} />
                        <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${sol.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 blur-[30px] rounded-full transition-opacity duration-300 pointer-events-none`} />
                        <div className="relative z-10 flex flex-col h-full pointer-events-none select-none">
                            <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 transition-transform duration-300 relative overflow-hidden group-hover:border-[#3994fa]/30">
                                <div className={`absolute inset-0 bg-gradient-to-br ${sol.color} opacity-10 dark:opacity-20`} />
                                <sol.icon className="w-6 h-6 text-slate-700 dark:text-white relative z-10" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white transition-all">{sol.t}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow transition-colors">{sol.d}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function AppDevelopmentPage() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [expandedSolutions, setExpandedSolutions] = useState<number | null>(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const APP_CASE_STUDIES: CaseStudy[] = [
        {
            id: 'app-1',
            title: 'Fintech Wallet: 1M+ Transactions',
            client: 'PayEdge',
            category: 'Fintech / Banking',
            description: 'A robust cross-platform mobile wallet with biometric security, real-time transfers, and micro-investment features.',
            stats: [
                { label: 'Users', value: '250k+' },
                { label: 'Uptime', value: '99.9%' },
                { label: 'Rating', value: '4.8/5' }
            ],
            tags: ['React Native', 'Node.js', 'AWS']
        },
        {
            id: 'app-2',
            title: 'HealthTech: Remote Patient Care',
            client: 'MediTrack',
            category: 'Healthcare',
            description: 'HIPAA compliant mobile platform connecting patients with doctors through video calls and automated health tracking.',
            stats: [
                { label: 'Video Calls', value: '50k+' },
                { label: 'Diagnosis', value: '10k+' },
                { label: 'Retention', value: '85%' }
            ],
            tags: ['Swift', 'Kotlin', 'WebRTC']
        }
    ];

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        countryCode: '+91',
        industry: '',
        budget: '₹19,999', // default from options
    });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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
                    service: 'App Development'
                })
            });
            if (res.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', businessName: '', email: '', phone: '', countryCode: '+91', industry: '', budget: '₹19,999' });
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus('error');
        }
    };

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem('theme');
        if (stored === 'dark') { /* handled by next-themes */ setIsDarkMode(true); }
        else { /* handled by next-themes */ setIsDarkMode(false); }
    }, []);

    const toggleTheme = () => {
        const next = !isDarkMode; setIsDarkMode(next);
        if (next) { /* handled by next-themes */ localStorage.setItem('theme', 'dark'); }
        else { /* handled by next-themes */ localStorage.setItem('theme', 'light'); }
    };

    // Removed GSAP reveal animations

    const portfolioCards = [
        {
            id: 'fintech-app',
            label: 'Fintech App',
            platform: 'iOS / Android',
            bg: 'from-brand-deep via-brand-medium to-brand-sky',
            content: (
                <div className="absolute inset-0 p-6 flex flex-col">
                    <div className="flex items-center gap-3 mb-auto">
                        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center"><Smartphone className="w-4 h-4 text-white" /></div>
                        <div><div className="h-2 w-24 bg-white/40 rounded mb-1.5" /><div className="h-1.5 w-16 bg-white/20 rounded" /></div>
                        <div className="ml-auto w-6 h-1 bg-white/30 rounded" />
                    </div>
                    <div className="flex-1 flex items-center justify-center my-6">
                        <div className="text-center space-y-3">
                            <motion.div  className="text-6xl font-black text-white/90 leading-none">FinPay</motion.div>
                            <div className="text-white/60 text-sm font-bold uppercase tracking-widest">Fintech Mobile App</div>
                            <div className="h-0.5 w-28 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-6 justify-center">
                            <div className="flex flex-col items-center">
                                <span className="text-white font-black text-xl">1M+</span>
                                <span className="text-white/60 text-[10px] uppercase font-bold tracking-widest">Downloads</span>
                            </div>
                            <div className="w-px h-10 bg-white/20" />
                            <div className="flex flex-col items-center">
                                <span className="text-white font-black text-xl">4.9</span>
                                <span className="text-white/60 text-[10px] uppercase font-bold tracking-widest">App Store</span>
                            </div>
                        </div>
                        <div className="space-y-1.5"><div className="h-2 w-full bg-white/20 rounded" /><div className="h-2 w-3/4 bg-white/15 rounded" /></div>
                    </div>
                </div>
            )
        },
        {
            id: 'health-app',
            label: 'Healthcare Platform',
            platform: 'React Native',
            bg: '',
            bgStyle: { background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)' },
            content: (
                <div className="absolute inset-0 p-6 flex flex-col">
                    <div className="flex items-center gap-3 mb-auto">
                        <Activity className="w-6 h-6 text-white" />
                        <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Telemedicine</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-4">
                            <Activity className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-white font-black text-3xl mb-1">HealthSync</div>
                        <div className="text-white/60 text-sm mb-4">Doctor Consultation App</div>
                        <div className="flex items-center gap-2 text-white/80 text-xs">
                            <Shield className="w-4 h-4" /> HIPAA Compliant
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ecommerce-app',
            label: 'E-Commerce App',
            platform: 'Flutter',
            bg: '',
            bgStyle: { background: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)' },
            content: (
                <div className="absolute inset-0 p-6 flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><Cloud className="w-5 h-5 text-white" /></div>
                        <div><div className="h-2 w-28 bg-white/40 rounded mb-1.5" /><div className="h-1.5 w-20 bg-white/20 rounded" /></div>
                    </div>
                    <div className="space-y-2 mb-auto text-white">
                        <h3 className="text-2xl font-black mb-2">ShopDrop</h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            A next-gen fashion shopping application featuring AR try-ons and real-time inventory sync.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
                        <div className="text-center">
                            <div className="text-white font-black text-2xl">3.2x</div>
                            <div className="text-white/50 text-[10px] uppercase font-bold tracking-wider">Conv. Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-white font-black text-2xl">-45%</div>
                            <div className="text-white/50 text-[10px] uppercase font-bold tracking-wider">Cart Drop</div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'booking-app',
            label: 'On-Demand Service',
            platform: 'Native iOS',
            bg: 'from-brand-cyan to-brand-sky',
            content: (
                <div className="absolute inset-0 p-6 flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <Target className="w-5 h-5 text-white" />
                        <span className="text-white text-xs font-bold uppercase tracking-widest">Service Booking</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <h3 className="text-4xl font-black text-white mb-2">BookIt</h3>
                            <p className="text-white/70 text-sm">Real-time scheduling and dispatch.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-6 bg-white/10 rounded-xl p-4">
                        <div className="space-y-1">
                            <div className="text-white font-black text-sm">Avg. Booking Time</div>
                            <div className="text-white/70 text-xs">Reduced by 60%</div>
                        </div>
                        <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                </div>
            )
        },
        {
            id: 'social-app',
            label: 'Social Platform',
            platform: 'React Native',
            bg: '',
            bgStyle: { background: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)' },
            content: (
                <div className="absolute inset-0 p-6 flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <Users className="w-5 h-5 text-white" />
                        <span className="text-white text-xs font-bold uppercase tracking-widest">Community App</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="text-center">
                            <h3 className="text-4xl font-black text-white mb-2">Connectr</h3>
                            <p className="text-white/70 text-sm">Building communities worldwide.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-6 bg-white/10 rounded-xl p-4 border border-white/10">
                        <div className="space-y-1">
                            <div className="text-white font-black text-sm">Active Users</div>
                            <div className="text-white/70 text-xs">500K+ Monthly</div>
                        </div>
                        <Activity className="w-6 h-6 text-white" />
                    </div>
                </div>
            )
        },
        {
            id: 'fitness-app',
            label: 'Fitness Tracker',
            platform: 'Native Android',
            bg: '',
            bgStyle: { background: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)' },
            content: (
                <div className="absolute inset-0 p-6 flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <Zap className="w-5 h-5 text-white" />
                        <span className="text-white text-xs font-bold uppercase tracking-widest">Health & Fitness</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="text-center">
                            <h3 className="text-4xl font-black text-white mb-2">FitPeak</h3>
                            <p className="text-white/70 text-sm">Personalized workouts & diet.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-6 bg-white/10 rounded-xl p-4 border border-white/10">
                        <div className="space-y-1">
                            <div className="text-white font-black text-sm">Engagement Rate</div>
                            <div className="text-white/70 text-xs">Increased by 85%</div>
                        </div>
                        <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                </div>
            )
        }
    ];

    return (
        <main ref={containerRef} className="relative z-10 selection:bg-brand-cyan/20 overflow-x-clip bg-[#fafafa] text-slate-900 dark:bg-[#050608] dark:text-white transition-colors duration-300 font-sans">
            <Navbar isDark={isDarkMode} toggleTheme={toggleTheme} />

            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 z-50 md:hidden bg-white/80 dark:bg-[#050608]/80 backdrop-blur-md border-t border-slate-200 dark:border-white/10">
                <a href="#consultation" className="flex w-full items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white font-black text-sm uppercase tracking-widest rounded-xl shadow-lg shadow-[#3994fa]/20">
                    Start Your Project <ArrowRight className="w-4 h-4" />
                </a>
            </div>

            {/* 1️⃣ Hero Section */}
            <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />
                <ThreeSphereScene />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                    <div className="space-y-6 lg:space-y-8 hero-content text-center lg:text-left">
                        <span className="inline-block px-4 py-1 rounded-full bg-[#3994fa]/10 dark:bg-[#3994fa]/10 text-[#3994fa] dark:text-[#3994fa] text-[10px] md:text-xs font-bold uppercase tracking-widest border border-[#3994fa]/20 dark:border-[#3994fa]/20">
                            Affordable App Development in India
                        </span>
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-slate-900 dark:text-white">
                            Professional Apps <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3994fa] to-[#1e293b] dark:to-white">Starting ₹19,999.</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                            Get a high-performance, custom-built mobile app for your business — delivered fast by our expert team. Scalable, secure, and user-focused designs tailored for <strong>real results</strong>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/case-studies/app-development"
                                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-[#3994fa]/25 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer hover:opacity-90"
                            >
                                Case Studies <ArrowRight className="w-4 h-4" />
                            </Link>
                            <button
                                onClick={() => setIsVideoOpen(true)}
                                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-slate-900 dark:text-white rounded-full font-bold transition-all border border-slate-200 dark:border-white/10 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                            >
                                Watch Demo <Play className="w-4 h-4 fill-slate-900 dark:fill-white" />
                            </button>
                        </div>
                    </div>

                    <div id="consultation" className="relative hero-content mt-8 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none scroll-mt-32">
                        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-[2.5rem] shadow-2xl relative z-10 border border-slate-200 dark:border-slate-800">
                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Full Name</label>
                                    <div className="relative group">
                                        <User strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3994fa] transition-colors" />
                                        <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all text-sm text-slate-700 dark:text-slate-200" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Business Name</label>
                                    <div className="relative group">
                                        <Building2 strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3994fa] transition-colors" />
                                        <input required type="text" value={formData.businessName} onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} placeholder="Your Company Ltd." className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all text-sm text-slate-700 dark:text-slate-200" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Email</label>
                                        <div className="relative group">
                                            <Mail strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3994fa] transition-colors" />
                                            <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all text-sm text-slate-700 dark:text-slate-200" />
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
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Industry</label>
                                    <div className="relative group">
                                        <Briefcase strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3994fa] transition-colors pointer-events-none" />
                                        <select required value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })} className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-10 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all appearance-none text-slate-700 dark:text-slate-200 text-sm cursor-pointer">
                                            <option value="">Select Industry</option>
                                            <option value="Fintech">Fintech</option>
                                            <option value="Healthcare">Healthcare</option>
                                            <option value="E-commerce">E-commerce</option>
                                            <option value="Education">Education</option>
                                            <option value="Wellness">Wellness</option>
                                            <option value="Real Estate">Real Estate</option>
                                            <option value="Logistics">Logistics</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Budget Range</label>
                                    <div className="relative group">
                                        <CreditCard strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3994fa] transition-colors pointer-events-none" />
                                        <select required value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-10 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all appearance-none text-slate-700 dark:text-slate-200 text-sm cursor-pointer">
                                            <option value="₹19,999">₹19,999</option>
                                            <option value="₹50k - ₹1L">₹50k - ₹1L</option>
                                            <option value="₹1L - ₹5L">₹1L - ₹5L</option>
                                            <option value="₹5L+">₹5L+</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <button disabled={submitStatus === "loading"} type="submit" className="w-full py-4 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-90 text-white font-black rounded-2xl transition-all shadow-[0_0_20px_rgba(63,143,204,0.2)] hover:shadow-[0_0_30px_rgba(63,143,204,0.4)] text-[13px] uppercase tracking-widest flex items-center justify-center gap-2">
                                        {submitStatus === "loading" ? "Submitting..." : "Get Free Consultation"} <ArrowRight strokeWidth={2.5} className="w-4 h-4 ml-1" />
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
                    </div>
                </div>
            </section>

            {/* 2️⃣ Why Your Business Needs a Mobile App */}
            <section className="py-20 md:py-32 px-4 md:px-6 border-t border-slate-200/50 dark:border-white/5 reveal-section relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-grid-slate-200/[0.04] dark:bg-grid-white/[0.02] bg-[length:32px_32px] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-cyan font-bold uppercase tracking-[0.2em] text-xs">Drive Growth</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Your Business Needs a Mobile App.</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[{ t: 'Direct Customer Engagement', d: 'Connect directly with users on the devices they use most.', i: Users },
                        { t: 'Brand Authority & Credibility', d: 'Stand out from competitors with a premium app presence.', i: Star },
                        { t: 'Push Notifications', d: 'Instant messaging capabilities for retention and marketing.', i: Zap },
                        { t: 'Increased Revenue', d: 'New channels for sales, in-app purchases, and upgrades.', i: TrendingUp },
                        { t: 'Competitive Advantage', d: 'Gain a severe edge in your market by adapting to mobile-first trends.', i: Target }].map((item, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 group hover:border-[#3994fa]/30 transition-all text-center hover:shadow-2xl hover:shadow-[#3994fa]/5 hover:-translate-y-1">
                                <div className="w-14 h-14 rounded-2xl bg-[#3994fa]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#3994fa] transition-colors">
                                    <item.i className="w-6 h-6 text-[#3994fa] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-sm font-bold mb-2">{item.t}</h3>
                                <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3️⃣ Why Choose Preet Tech OPC Private Limited */}
            <section className="py-20 md:py-32 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">The Preet Tech OPC Private Limited Advantage</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Choose Preet Tech OPC Private Limited.</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">We don't just write code. We build scalable, business-focused digital solutions engineered for growth and longevity.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[{ t: 'Strategy-First Approach', d: 'We validate your idea and plan an architecture that aligns perfectly with your business goals.', i: BarChart3 },
                        { t: 'Experienced Development Team', d: 'Senior-level engineers writing clean, maintainable, and high-performance code.', i: Code2 },
                        { t: 'Scalable Infrastructure', d: 'Cloud-native solutions designed to handle millions of requests without breaking a sweat.', i: Layers },
                        { t: 'Transparent Communication', d: 'Dedicated project managers, weekly sprints, and crystal-clear reporting.', i: Settings },
                        { t: 'Post-Launch Support', d: 'Continuous monitoring, updates, and optimization to ensure your app stays fast and secure.', i: Headphones }].map((f, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white dark:bg-[#080B10] border border-slate-200 dark:border-white/5 group hover:border-brand-medium/30 transition-all shadow-sm hover:-translate-y-1 hover:scale-[1.02]">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-brand-cyan/20 transition-colors">
                                        <f.i className="w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-brand-cyan transition-colors" />
                                    </div>
                                    <h3 className="text-lg font-bold group-hover:text-brand-cyan transition-colors">{f.t}</h3>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{f.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4️⃣ Who This Service Is For */}
            <section className="py-20 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-sky font-bold uppercase tracking-[0.2em] text-xs">Perfect Fit</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Who This Service Is For.</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                        {[{ t: 'Startups', d: 'Build your MVP fast.', i: Rocket },
                        { t: 'E-commerce Brands', d: 'Drive mobile sales.', i: Smartphone },
                        { t: 'SaaS Companies', d: 'Extend to mobile.', i: Cloud },
                        { t: 'Booking Platforms', d: 'Seamless scheduling.', i: Target },
                        { t: 'Enterprises', d: 'Internal tooling & ops.', i: Building2 },
                        { t: 'Local Businesses', d: 'Digital transformation.', i: Globe }].map((ind, i) => (
                            <div key={i} className="flex flex-col items-center p-6 text-center rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 hover:border-[#3994fa]/40 hover:bg-slate-50 dark:hover:bg-white/5 transition-all group cursor-pointer shadow-sm">
                                <ind.i className="w-8 h-8 text-slate-400 group-hover:text-[#3994fa] transition-colors mb-4" />
                                <h4 className="font-bold text-sm mb-1">{ind.t}</h4>
                                <p className="text-[11px] text-slate-500">{ind.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5️⃣ Our App Development Solutions Overview */}
            {/* 5️⃣ Our App Development Solutions Overview */}
            <section className="py-20 md:py-32 bg-[#fafafa] dark:bg-[#030712] text-slate-900 dark:text-white reveal-section relative overflow-hidden w-full max-w-[100vw]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200/50 dark:from-brand-deep/20 via-transparent to-transparent opacity-50 pointer-events-none" />
                <div className="relative z-10 w-full pt-4">
                    <div className="text-center mb-16 space-y-4 px-4 md:px-6">
                        <span className="text-[#3994fa] font-bold uppercase tracking-[0.2em] text-xs">Comprehensive Solutions</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Development Solutions.</h2>
                    </div>

                    <SolutionsCarousel />
                </div>
            </section>

            {/* 6️⃣ Our Development Process */}
            <section className="py-20 md:py-32 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Agile Methodology</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Development Process.</h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-medium/0 via-brand-cyan/50 to-brand-medium/0 hidden lg:block" />

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
                            {[{ s: 'Discovery', d: 'Requirements & planning', i: Search },
                            { s: 'Design', d: 'UI/UX & prototyping', i: Layout },
                            { s: 'Development', d: 'Frontend & backend dev', i: Code2 },
                            { s: 'Testing', d: 'QA & bug fixing', i: Shield },
                            { s: 'Launch', d: 'App store deployment', i: Rocket },
                            { s: 'Optimization', d: 'Post-launch scaling', i: TrendingUp }].map((step, i) => (
                                <div key={i} className="flex flex-col items-center text-center group">
                                    <div className="w-24 h-24 rounded-full bg-white dark:bg-[#030712] border-2 border-slate-200 dark:border-white/10 group-hover:border-[#3994fa] flex items-center justify-center mb-6 shadow-xl transition-all duration-300 relative z-10">
                                        <step.i className="w-8 h-8 text-slate-400 group-hover:text-[#3994fa] transition-colors" />
                                    </div>
                                    <h4 className="font-bold text-sm mb-2">{step.s}</h4>
                                    <p className="text-[11px] text-slate-500 uppercase font-black tracking-wider">{step.d}</p>
                                    <div className="mt-4 text-[10px] font-black text-[#3994fa] opacity-40">Step 0{i + 1}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7️⃣ Technology Stack Section */}
            <section className="py-20 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-sky font-bold uppercase tracking-[0.2em] text-xs">Built For Performance</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Technology Stack.</h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
                        {[{ n: 'React Native', icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
                        { n: 'Flutter', icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
                        { n: 'Node.js', icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
                        { n: 'Express', icon: "https://cdn.simpleicons.org/express", invert: true },
                        { n: 'MongoDB', icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
                        { n: 'Firebase', icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
                        { n: 'AWS', icon: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
                        { n: 'Stripe', icon: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" }].map((tech: any, i) => (
                            <div key={i} className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-center transition-all flex flex-col items-center justify-center h-full hover:border-brand-cyan/30 hover:-translate-y-1 hover:scale-105">
                                <img src={tech.icon} alt={tech.n} className={`w-10 h-10 object-contain mb-3 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${tech.invert ? 'dark:invert' : ''}`} />
                                <span className="font-bold text-[10px] uppercase tracking-wider text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{tech.n}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8️⃣ Case Studies / Portfolio Showcase */}
            <section className="bg-[#fafafa] dark:bg-[#060911] reveal-section overflow-hidden">
                {/* Use the standalone PortfolioCarousel component which matches standard site styling */}
                <PortfolioCarousel cards={portfolioCards} />
            </section>

            {/* 9️⃣ FAQs Section */}
            <section className="py-20 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Questions?</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions.</h2>
                    </div>

                    <div className="space-y-4">
                        {[{ q: 'How long does it take to build an app?', a: 'Development timelines vary based on complexity. A simple MVP can take 8-12 weeks, while complex enterprise apps can take 4-6 months or more.' },
                        { q: 'What is the cost of app development?', a: 'Cost depends on features, platforms (iOS/Android/Cross-platorm), and backend requirements. We offer transparent pricing structures and project-based estimates during our initial consultation.' },
                        { q: 'Do you provide post-launch support?', a: 'Yes. We offer comprehensive maintenance plans that include OS updates, bug fixing, performance monitoring, and feature iteration post-launch.' },
                        { q: 'Can you upgrade existing apps?', a: 'Absolutely. We conduct code audits, refactor legacy architectures, and can implement new functionalities or UI/UX redesigns into your existing applications.' },
                        { q: 'Will you help with app store approval?', a: 'Yes, we handle the entire deployment process. We ensure your application complies with Apple App Store and Google Play Store guidelines for successful publishing.' }].map((faq, i) => (
                            <div key={i} className="rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 overflow-hidden transition-colors hover:border-brand-cyan/20">
                                <button onClick={() => setOpenFAQ(openFAQ === i ? null : i)} className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
                                    <span className="font-bold text-sm md:text-base">{faq.q}</span>
                                    {openFAQ === i ? <Minus className="w-5 h-5 text-brand-cyan shrink-0" /> : <Plus className="w-5 h-5 text-slate-400 shrink-0" />}
                                </button>
                                <AnimatePresence>
                                    {openFAQ === i && (
                                        <motion.div  className="overflow-hidden">
                                            <div className="px-6 pb-6 pt-2 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{faq.a}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Success Stories Section */}
            <CaseStudies 
                studies={APP_CASE_STUDIES} 
                subtitle="Application Success" 
                title="Apps Built for Global Scale."
                themeColor="#3994fa"
            />

            {/* Final High-Impact CTA Section */}
            <section className="py-24 md:py-36 px-4 md:px-6 bg-[#fafafa] dark:bg-[#030712] text-slate-900 dark:text-white reveal-section relative overflow-hidden text-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute -top-[50%] -left-[10%] w-[800px] h-[800px] bg-[#3994fa]/10 dark:bg-[#3994fa]/20 blur-[150px] rounded-full pointer-events-none" />
                    <div className="absolute -bottom-[50%] -right-[10%] w-[600px] h-[600px] bg-[#3994fa]/10 dark:bg-brand-medium/20 blur-[150px] rounded-full pointer-events-none" />
                </div>

                <div className="max-w-4xl mx-auto relative z-10 space-y-10">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                        Ready to Build an App That <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#3994fa] dark:to-cyan-400">Drives Real Growth?</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Join modern startups and enterprise leaders who trust Preet Tech OPC Private Limited for robust, scalable, and long-term mobile success.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <a href="#consultation" className="w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-95 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl shadow-[#3994fa]/25 flex items-center justify-center gap-3">
                            Start Your Project Today <Rocket className="w-5 h-5" />
                        </a>
                        <a href="#consultation" className="w-full sm:w-auto px-12 py-6 border border-slate-300 dark:border-white/20 hover:bg-gradient-to-r hover:from-[#3994fa] hover:to-[#004aad] hover:text-white hover:border-transparent text-slate-900 dark:text-white rounded-2xl font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 active:scale-95 shadow-sm hover:shadow-[#3994fa]/20">
                            Schedule Free Call <Phone className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div

                        
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95"
                        onClick={() => setIsVideoOpen(false)}
                    >
                        <motion.div
                            
                            
                            exit={{ scale: 0.95, opacity: 0 }}
                            
                            className="relative w-full aspect-video max-w-4xl bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center"
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
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Preet Tech OPC Private Limited Video"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
