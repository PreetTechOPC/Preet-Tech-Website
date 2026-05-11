"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Globe, Zap, CheckCircle2, ArrowRight, Smartphone, Layout, Rocket,
    Search, ShieldCheck, Mail, Phone, User, Briefcase, ChevronRight, ChevronLeft,
    Sparkles, Code2, Settings, MessageSquare, Building2,
    Database, BarChart3, Clock, CreditCard, PenTool, Star,
    Monitor, Lock, Image as ImageIcon, Menu, X, ChevronDown, Check, ExternalLink,
    Home, Heart, Coffee, Camera, Calendar, FileCode, Cloud, MessageCircle, Share2, Play,
    Atom, Server, HardDrive, ShoppingCart, Store, Users, Target
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreeSphereScene from '@/components/ThreeSphere';
import { portfolioItems } from '@/lib/eco-portfolio';
import PhoneInput from '@/components/PhoneInput';
import CaseStudies, { CaseStudy } from '@/components/CaseStudies';
import BudgetSelect from '@/components/BudgetSelect';
// GSAP removed for performance

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
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#3994fa]/5 blur-[48px] rounded-full opacity-60 gpu" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#3994fa]/5 blur-[48px] rounded-full opacity-40 gpu" />
    </div>
);

export default function EcoWebsiteDevelopment() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [portfolioIndex, setPortfolioIndex] = useState(0);
    const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
    const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const targetAudienceRef = useRef<HTMLDivElement>(null);
    const portfolioSliderRef = useRef<HTMLDivElement>(null);

    const ECO_CASE_STUDIES: CaseStudy[] = [
        {
            id: 'eco-1',
            title: 'Zero-Carbon Landing Page',
            client: 'GreenFlow',
            category: 'Sustainable Web',
            description: 'Optimized assets and code to achieve a 0.2g CO2 per view rating, while increasing conversion rates by 25%.',
            stats: [
                { label: 'CO2/view', value: '0.2g' },
                { label: 'Page Speed', value: '0.8s' },
                { label: 'Conversion', value: '+25%' }
            ],
            tags: ['Green Hosting', 'WebP', 'SVG Icons']
        },
        {
            id: 'eco-2',
            title: 'Sustainable E-commerce Store',
            client: 'EarthGoods',
            category: 'Eco-Commerce',
            description: 'A dark-mode first e-commerce platform designed to reduce OLED power consumption and server load.',
            stats: [
                { label: 'Power Save', value: '30%' },
                { label: 'Data Weight', value: '-60%' },
                { label: 'Sales', value: '₹500k+' }
            ],
            tags: ['React', 'Static Gen', 'Dark Mode']
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
        budget: '', // Dynamically set based on location
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
                    service: 'Eco Website'
                })
            });
            if (res.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', businessName: '', email: '', phone: '', countryCode: '+91', industry: '', budget: '' });
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus('error');
        }
    };



    const industries = Array.from(new Set(portfolioItems.map(item => item.category)));

    const filteredPortfolioItems = selectedIndustry
        ? portfolioItems.filter(item => item.category === selectedIndustry)
        : portfolioItems;

    const scrollPortfolio = (dir: 'left' | 'right') => {
        const newIndex = dir === 'left'
            ? Math.max(0, portfolioIndex - 1)
            : Math.min(filteredPortfolioItems.length - 1, portfolioIndex + 1);
        setPortfolioIndex(newIndex);
        if (portfolioSliderRef.current) {
            const cardWidth = portfolioSliderRef.current.clientWidth;
            portfolioSliderRef.current.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
        }
    };

    const goToPortfolioSlide = (index: number) => {
        setPortfolioIndex(index);
        if (portfolioSliderRef.current) {
            const cardWidth = portfolioSliderRef.current.clientWidth;
            portfolioSliderRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
        }
    };

    const scrollAudience = (dir: 'left' | 'right') => {
        if (targetAudienceRef.current) {
            const scrollAmount = window.innerWidth > 768 ? 400 : 250;
            targetAudienceRef.current.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    // Auto-scroll loop for the Audience Carousel — throttled with setInterval (16ms ≈ 60fps max, no layout thrashing)
    useEffect(() => {
        if (isHovering || !targetAudienceRef.current) return;

        const intervalId = setInterval(() => {
            const el = targetAudienceRef.current;
            if (!el) return;
            el.scrollLeft += 1;
            if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 5) {
                el.scrollLeft = 0;
            }
        }, 16);

        return () => clearInterval(intervalId);
    }, [isHovering]);

    // Initial theme setup
    useEffect(() => {
        const isDark = false;
        setIsDarkMode(isDark);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            /* handled by next-themes */
        } else {
            /* handled by next-themes */
        }
    };

    // GSAP ScrollTrigger animations removed for performance

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <main ref={containerRef} className="relative z-10 selection:bg-[#3994fa]/30 overflow-x-hidden bg-white text-slate-900 dark:bg-[#020617] dark:text-white transition-colors duration-300 font-sans">

            {/* JSON-LD Structured Data for Rich Snippets */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Eco Website Development",
                            "provider": {
                                "@type": "Organization",
                                "name": "Preet Tech OPC Private Limited",
                                "url": "https://preettech.com",
                                "logo": "https://preettech.com/logo.png",
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "contactType": "Customer Service",
                                    "availableLanguage": ["English", "Hindi"]
                                }
                            },
                            "description": "Professional, mobile-responsive, and SEO-ready websites built in 3–7 days starting at ₹4,999. Includes domain setup, contact form, WhatsApp chat integration, social media links, and basic SEO for small businesses, startups, and freelancers across India.",
                            "areaServed": "India",
                            "offers": {
                                "@type": "Offer",
                                "price": "3999",
                                "priceCurrency": "INR",
                                "priceValidUntil": "2026-12-31",
                                "availability": "https://schema.org/InStock",
                                "description": "Eco-Budget Website Plan: 3–5 page responsive website with SEO setup, contact form, WhatsApp chat, hosting guidance, and domain setup."
                            },
                            "serviceType": "Website Development",
                            "category": "Web Design & Development"
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "How long does it take to build an eco website?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Typically 3–7 working days depending on content and feedback availability. Our rapid launch process ensures your business is live quickly without compromising quality."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is domain registration included in the eco website plan?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "We provide complete domain setup assistance and guide you through the purchase. The domain registration cost is separate from the plan, but we make the process seamless."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Can I upgrade from the eco plan to a premium plan later?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Absolutely! You can upgrade to our advanced or enterprise website plans at any time. Your eco website serves as a strong foundation to build upon."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Do you provide post-launch support?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, we offer post-launch support and maintenance to ensure your website runs smoothly. Optional maintenance plans are also available for ongoing updates."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How many revision rounds are included?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "We include one revision round during the design phase to incorporate your feedback and ensure the final website aligns perfectly with your brand vision."
                                    }
                                }
                            ]
                        }
                    ])
                }}
            />
            <Navbar isDark={isDarkMode} toggleTheme={toggleTheme} />

            {/* 1️⃣ Hero Section */}
            <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />
                <ThreeSphereScene />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                    <div className="space-y-6 lg:space-y-8 hero-content text-center lg:text-left">
                        <span className="inline-block px-4 py-1 rounded-full bg-[#3994fa]/10 dark:bg-[#3994fa]/10 text-[#3994fa] dark:text-[#3994fa] text-[10px] md:text-xs font-bold uppercase tracking-widest border border-[#3994fa]/20 dark:border-[#3994fa]/20">
                            Affordable Website Development in India
                        </span>
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-slate-900 dark:text-white">
                            Professional Websites <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3994fa] to-brand-medium">Starting ₹4,999.</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                            Get a fully responsive, SEO-ready, and mobile-optimized website for your small business or startup — delivered in just <strong>3–7 working days</strong>. No hidden charges, no technical headaches.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/case-studies/eco-website"
                                className="px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-90 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] sm:text-[13px] shadow-lg shadow-[#3994fa]/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
                            >
                                Case Studies <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div id="contact" className="relative hero-content mt-8 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none scroll-mt-32 px-2 md:px-0">
                        <div className="bg-white dark:bg-slate-900 px-4 py-6 sm:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative z-10 border border-slate-200 dark:border-slate-800">
                            <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-6">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Full Name</label>
                                    <div className="relative group">
                                        <User strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400 group-focus-within:text-[#3994fa] transition-colors" />
                                        <input required type="text" value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl md:rounded-2xl py-3 md:py-4 pl-10 md:pl-12 pr-4 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all text-[13px] md:text-sm text-slate-700 dark:text-slate-200" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Business Name</label>
                                    <div className="relative group">
                                        <Building2 strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400 group-focus-within:text-[#3994fa] transition-colors" />
                                        <input required type="text" value={formData.businessName || ''} onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} placeholder="Your Company Ltd." className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl md:rounded-2xl py-3 md:py-4 pl-10 md:pl-12 pr-4 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all text-[13px] md:text-sm text-slate-700 dark:text-slate-200" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Email</label>
                                        <div className="relative group">
                                            <Mail strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400 group-focus-within:text-[#3994fa] transition-colors" />
                                            <input required type="email" value={formData.email || ''} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl md:rounded-2xl py-3 md:py-4 pl-10 md:pl-12 pr-4 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all text-[13px] md:text-sm text-slate-700 dark:text-slate-200" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Phone</label>
                                        <PhoneInput
                                            value={formData.phone || ''}
                                            onChange={(val) => setFormData({ ...formData, phone: val })}
                                            countryCode={formData.countryCode}
                                            onCountryCodeChange={(code) => setFormData({ ...formData, countryCode: code })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Choose Industry</label>
                                    <div className="relative group">
                                        <Briefcase strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400 group-focus-within:text-[#3994fa] transition-colors pointer-events-none" />
                                        <select required value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })} className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl md:rounded-2xl py-3 md:py-4 pl-10 md:pl-12 pr-10 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all appearance-none text-slate-700 dark:text-slate-200 text-[13px] md:text-sm">
                                            <option value="" disabled>Select your industry</option>
                                            {industries.map((ind) => (
                                                <option key={ind} value={ind}>{ind}</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Budget Range</label>
                                    <div className="relative group">
                                        <CreditCard strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400 group-focus-within:text-[#3994fa] transition-colors pointer-events-none" />
                                        <BudgetSelect 
                                            value={formData.budget} 
                                            onChange={(val) => setFormData({ ...formData, budget: val })} 
                                            className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl md:rounded-2xl py-3 md:py-4 pl-10 md:pl-12 pr-10 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all appearance-none text-slate-700 dark:text-slate-200 text-[13px] md:text-sm"
                                        />
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <button disabled={submitStatus === "loading"} type="submit" className="w-full py-3.5 md:py-4 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-90 text-white font-black rounded-xl md:rounded-2xl transition-all shadow-[0_0_20px_rgba(63,143,204,0.2)] hover:shadow-[0_0_30px_rgba(63,143,204,0.4)] text-[12px] md:text-[13px] uppercase tracking-widest flex items-center justify-center gap-2">
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

                        {/* Blob Background Details */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#3994fa]/20 to-brand-medium/20 rounded-full blur-[48px] -z-10 animate-pulse" />
                    </div>
                </div>
            </section>

            {/* 2️⃣ Why Do Businesses Need This? */}
            <section className="py-16 md:py-24 px-6 bg-slate-50 dark:bg-slate-900/40 reveal-section relative overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />

                {/* Static ambient blobs — no JS animation cost */}
                <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
                    <div className="absolute w-64 h-64 bg-[#3994fa]/8 blur-[40px] rounded-full" style={{ left: '10%', top: '20%' }} />
                    <div className="absolute w-64 h-64 bg-[#3994fa]/6 blur-[40px] rounded-full" style={{ left: '55%', top: '50%' }} />
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                    <div className="space-y-6 md:space-y-8">
                        <div>
                            <span
                                className="text-[#3994fa] font-bold uppercase tracking-widest text-[10px] md:text-xs"
                            >
                                The Digital Necessity
                            </span>
                            <h2
                                className="text-3xl md:text-4xl lg:text-5xl font-black mt-4 mb-6 text-slate-900 dark:text-white leading-[1.2]"
                            >
                                Why Every Small Business <br className="hidden sm:block" />Needs a Website in 2025.
                            </h2>
                        </div>
                        <ul className="space-y-6">
                            {[
                                { title: "Online visibility 24/7, 365 days", desc: "97% of consumers search online before buying. Be discoverable round the clock, even while you sleep." },
                                { title: "Builds instant trust & credibility", desc: "A professional website signals legitimacy. Customers trust businesses with an online presence 3x more." },
                                { title: "Generates and captures leads automatically", desc: "Built-in contact forms and WhatsApp chat turn visitors into paying customers on autopilot." },
                                { title: "Showcases your products & services professionally", desc: "Present your offerings in the best light with a clean, modern design that converts browsers into buyers." },
                                { title: "Affordable entry into digital growth", desc: "Start your digital journey without breaking the bank. Scale up anytime as your business grows." }
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-8 h-8 rounded-full bg-[#3994fa]/20 flex items-center justify-center shrink-0 group-hover:bg-[#3994fa] group-hover:scale-110 transition-all duration-300">
                                        <Check className="w-4 h-4 text-[#3994fa] group-hover:text-slate-950 transition-colors" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-slate-900 dark:text-white leading-none group-hover:text-[#3994fa] transition-colors">{item.title}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-10 bg-[#3994fa]/10 blur-[48px] rounded-full opacity-30" />
                        <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-8 shadow-2xl border border-white/20 dark:border-white/5">
                            <div className="grid grid-cols-2 gap-3 sm:gap-6">
                                {[
                                    { icon: Globe, color: "text-[#3994fa]", bg: "bg-[#3994fa]/10", barBg: "bg-[#3994fa]", glow: "hover:shadow-[#3994fa]/20", progress: "85%", label: "99.9% Uptime", sub: "Global Availability" },
                                    { icon: BarChart3, color: "text-blue-500", bg: "bg-blue-500/10", barBg: "bg-blue-500", glow: "hover:shadow-blue-500/20", progress: "70%", label: "3.5x Growth", sub: "Performance KPI", shift: true },
                                    { icon: User, color: "text-orange-500", bg: "bg-orange-500/10", barBg: "bg-orange-500", glow: "hover:shadow-orange-500/20", progress: "78%", label: "10k+ Trust", sub: "User Credibility", dot: "bg-indigo-500" },
                                    { icon: ShieldCheck, color: "text-purple-500", bg: "bg-purple-500/10", barBg: "bg-purple-500", glow: "hover:shadow-purple-500/20", progress: "90%", label: "SSL Secure", sub: "Data Protection", shift: true }
                                ].map((stat: any, i) => (
                                    <motion.div
                                        key={i}

                                        className={`bg-white dark:bg-slate-900/80 p-4 sm:p-6 rounded-[1.25rem] sm:rounded-2xl border border-slate-100 dark:border-white/5 relative overflow-hidden group/stat transition-all duration-300 shadow-sm hover:shadow-xl ${stat.shift ? 'mt-6 sm:mt-8' : ''} ${stat.glow}`}
                                    >
                                        {/* Floating decorative dot (like in the design for specific cards) */}
                                        {stat.dot && (
                                            <motion.div


                                                className={`absolute top-8 left-20 sm:top-10 sm:left-[6.5rem] w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${typeof stat.dot === 'string' ? stat.dot : stat.color.replace('text', 'bg')} opacity-90`}
                                            />
                                        )}

                                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-[0.85rem] sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 relative overflow-hidden`}>
                                            <div className={`absolute inset-0 ${stat.bg} group-hover/stat:scale-125 transition-transform duration-300`} />
                                            <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color} relative z-10 group-hover/stat:scale-110 transition-transform duration-300`} />
                                        </div>
                                        <div className="space-y-0.5 sm:space-y-1 relative z-10">
                                            <h4 className="text-[13px] sm:text-lg font-black text-slate-900 dark:text-white leading-tight truncate">
                                                {stat.label}
                                            </h4>
                                            <p className="text-[8px] sm:text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest break-words leading-tight">{stat.sub}</p>
                                        </div>

                                        {/* Animated Progress Bar */}
                                        <div className="mt-4 sm:mt-5 h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative">
                                            <motion.div
                                                className={`h-full relative overflow-hidden ${stat.barBg}`}
                                            >
                                                <motion.div


                                                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 dark:via-white/30 to-transparent"
                                                />
                                            </motion.div>
                                        </div>

                                        {/* Subtle Hover Glow Background */}
                                        <div className={`absolute -bottom-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 ${stat.bg} rounded-full blur-2xl opacity-0 group-hover/stat:opacity-60 transition-opacity duration-300`} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3️⃣ Why Choose Preet Tech OPC Private Limited */}
            <section className="py-24 px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-[#3994fa] font-bold uppercase tracking-widest text-[10px] md:text-xs">Why Preet Tech OPC Private Limited</span>
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-black mt-4 text-slate-900 dark:text-white leading-tight">The Best Affordable Website Development Partner in India</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">Trusted by 150+ startups, freelancers, and SMEs across India for delivering polished websites fast and within budget.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Rapid 3–7 Day Delivery", subtitle: "Concept to Live Site, Fast", icon: Rocket },
                            { title: "Budget-Friendly Pricing", subtitle: "Starting at Just ₹4,999", icon: CreditCard },
                            { title: "Premium UI/UX Design", subtitle: "Modern, Clean & Conversion-Focused", icon: PenTool },
                            { title: "SEO-Ready Website Structure", subtitle: "Built for Google Rankings", icon: Search },
                            { title: "100% Mobile Optimized", subtitle: "Flawless on All Devices", icon: Smartphone },
                            { title: "Dedicated Post-Launch Support", subtitle: "We Don't Disappear After Launch", icon: User }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:border-[#3994fa]/50 hover:shadow-xl hover:shadow-[#3994fa]/10 transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-[#3994fa] group-hover:text-white transition-colors">
                                    <item.icon className="w-7 h-7 text-slate-700 dark:text-slate-300 group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{item.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4️⃣ Who Is This For? */}
            <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 reveal-section relative overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-[#3994fa] font-bold uppercase tracking-widest text-xs">Perfect For</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 text-slate-900 dark:text-white">Who Needs an Eco Website?</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed">Whether you&apos;re a local shop owner, a freelancer, or a growing startup — our eco plan is designed to get <em>your</em> business online affordably.</p>
                    </div>
                </div>

                {/* Interactive & Infinite Carousel Container */}
                <div
                    className="relative group/carousel mt-8"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {/* Fade Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scrollAudience('left')}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white flex items-center justify-center hover:bg-[#3994fa] hover:border-[#3994fa] hover:text-slate-950 dark:hover:bg-[#3994fa] dark:hover:border-[#3994fa] dark:hover:text-slate-950 transition-all shadow-xl opacity-0 md:group-hover/carousel:opacity-100 focus:opacity-100 pointer-events-auto cursor-pointer translate-x-4 md:group-hover/carousel:translate-x-0"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={() => scrollAudience('right')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white flex items-center justify-center hover:bg-[#3994fa] hover:border-[#3994fa] hover:text-slate-950 dark:hover:bg-[#3994fa] dark:hover:border-[#3994fa] dark:hover:text-slate-950 transition-all shadow-xl opacity-0 md:group-hover/carousel:opacity-100 focus:opacity-100 pointer-events-auto cursor-pointer -translate-x-4 md:group-hover/carousel:translate-x-0"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    <style jsx>{`
                        /* CSS native scrollbar hiding */
                        .hide-scroll {
                            -ms-overflow-style: none; /* IE and Edge */
                            scrollbar-width: none;    /* Firefox */
                        }
                        .hide-scroll::-webkit-scrollbar {
                            display: none; /* Chrome, Safari and Opera */
                        }
                    `}</style>

                    <div
                        ref={targetAudienceRef}
                        className="flex overflow-x-auto hide-scroll gap-4 md:gap-6 py-4 px-[5vw] md:px-[10vw]"
                        style={{ cursor: 'grab' }}
                    >
                        {[
                            { label: "Local Shops", icon: Building2 },
                            { label: "Freelancers", icon: User },
                            { label: "Coaches", icon: MessageSquare },
                            { label: "Consultants", icon: Briefcase },
                            { label: "Startups", icon: Rocket },
                            { label: "Small IT Companies", icon: Globe },
                            { label: "Personal Brands", icon: Sparkles },
                            { label: "Health Clinics", icon: Heart },
                            { label: "Restaurants", icon: Coffee },
                            { label: "NGOs", icon: ShieldCheck },
                            { label: "Real Estate", icon: Home },
                            { label: "Content Creators", icon: ImageIcon },
                            { label: "E-Commerce", icon: Zap },
                            { label: "Photographers", icon: Camera },
                            { label: "Event Planners", icon: Calendar },
                            { label: "Education", icon: Code2 },
                            // Doubled for smooth automatic infinite loop illusion
                            { label: "Local Shops", icon: Building2 },
                            { label: "Freelancers", icon: User },
                            { label: "Coaches", icon: MessageSquare },
                            { label: "Consultants", icon: Briefcase },
                            { label: "Startups", icon: Rocket },
                            { label: "Small IT Companies", icon: Globe },
                            { label: "Personal Brands", icon: Sparkles },
                            { label: "Health Clinics", icon: Heart },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="shrink-0 w-[140px] md:w-[200px] flex flex-col items-center justify-center p-6 md:p-8 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/10 shadow-sm hover:shadow-md transition-all text-center group z-10"
                            >
                                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-[#3994fa] mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                                <span className="font-bold text-slate-900 dark:text-white text-[11px] md:text-sm whitespace-nowrap tracking-wide">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4.5️⃣ Technologies We Use */}
            <section className="py-24 px-6 reveal-section bg-slate-50 dark:bg-slate-950/30 border-y border-slate-100 dark:border-white/5 relative overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />

                {/* Premium Glow Effects */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#3994fa]/5 dark:bg-[#3994fa]/5 blur-[60px] rounded-full pointer-events-none" />
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#3994fa]/5 dark:bg-[#3994fa]/5 blur-[48px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16 md:mb-20">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-[10px] md:text-xs font-black uppercase tracking-widest text-[#3994fa] mb-6 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[#3994fa] animate-pulse" />
                            Tech Stack
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black mt-2 mb-6 text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                            Technologies We Use
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                            We leverage modern, scalable technologies to deliver secure, high-performing digital experiences.
                        </p>
                    </div>

                    <style jsx>{`
                        @keyframes scroll-left {
                            0% { transform: translate3d(0, 0, 0); }
                            100% { transform: translate3d(-50%, 0, 0); }
                        }
                        .animate-scroll-left {
                            animation: scroll-left 40s linear infinite;
                            will-change: transform;
                            backface-visibility: hidden;
                            perspective: 1000px;
                        }
                        .animate-scroll-left:hover {
                            animation-play-state: paused;
                        }

                        @keyframes scroll-right {
                            0% { transform: translate3d(-50%, 0, 0); }
                            100% { transform: translate3d(0, 0, 0); }
                        }
                        .animate-scroll-right {
                            animation: scroll-right 40s linear infinite;
                            will-change: transform;
                            backface-visibility: hidden;
                            perspective: 1000px;
                        }
                        .animate-scroll-right:hover {
                            animation-play-state: paused;
                        }

                        /* Isolate carousel rows from page scroll compositing */
                        .carousel-track-wrapper {
                            contain: layout style;
                            transform: translateZ(0);
                        }
                    `}</style>

                    <div className="carousel-track-wrapper relative flex flex-col gap-4 overflow-hidden py-2 max-w-[100vw] -mx-6 md:-mx-12 px-6 md:px-12">
                        {/* Fade Masks */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-slate-50 dark:from-slate-950/30 z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-slate-50 dark:from-slate-950/30 z-10 pointer-events-none" />

                        {/* Row 1: Scroll Left */}
                        <div className="flex animate-scroll-left w-max gap-4">
                            {[
                                { name: "React", category: "Frontend", icon: Code2 },
                                { name: "Vercel", category: "Deployment", icon: Cloud },
                                { name: "GoDaddy", category: "Hosting", icon: Globe },
                                { name: "Appwrite", category: "Backend", icon: Settings },
                                { name: "WordPress", category: "CMS", icon: FileCode },
                                { name: "Magento", category: "E-commerce", icon: ShoppingCart },
                                { name: "HubSpot", category: "CRM", icon: Users },
                                // Duplicated for infinite loop
                                { name: "React", category: "Frontend", icon: Code2 },
                                { name: "Vercel", category: "Deployment", icon: Cloud },
                                { name: "GoDaddy", category: "Hosting", icon: Globe },
                                { name: "Appwrite", category: "Backend", icon: Settings },
                                { name: "WordPress", category: "CMS", icon: FileCode },
                                { name: "Magento", category: "E-commerce", icon: ShoppingCart },
                                { name: "HubSpot", category: "CRM", icon: Users },
                            ].map((tech, i) => (
                                <div
                                    key={i}
                                    className="group flex flex-col w-[160px] md:w-[180px] shrink-0 items-center justify-center p-4 md:p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl hover:border-[#3994fa]/40 dark:hover:border-[#3994fa]/40 shadow-sm hover:shadow-[0_10px_40px_rgba(63,143,204,0.15)] dark:hover:shadow-[0_0_30px_rgba(63,143,204,0.2)] transition-all duration-300 relative overflow-hidden cursor-default"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#3994fa]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                    <tech.icon className="w-6 h-6 md:w-8 md:h-8 text-slate-800 dark:text-white mb-3 group-hover:scale-110 group-hover:text-[#3994fa] transition-all duration-300" strokeWidth={1.5} />

                                    <span className="font-black text-sm md:text-base text-slate-800 dark:text-white tracking-tight relative z-10 group-hover:text-[#3994fa] transition-colors duration-300">
                                        {tech.name}
                                    </span>
                                    <span className="text-[9px] md:text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mt-1 relative z-10 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors duration-300">
                                        {tech.category}
                                    </span>

                                    {/* Subtle corner glow on hover */}
                                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#3994fa]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>

                        {/* Row 2: Scroll Right */}
                        <div className="flex animate-scroll-right w-max gap-4">
                            {[
                                { name: "Next.js", category: "Framework", icon: Layout },
                                { name: "Hostinger", category: "Hosting", icon: Server },
                                { name: "BigRock", category: "Hosting", icon: HardDrive },
                                { name: "Hygraph", category: "Database", icon: Database },
                                { name: "Shopify", category: "E-commerce", icon: Store },
                                { name: "Mailchimp", category: "Marketing", icon: Mail },
                                // Duplicated for infinite loop
                                { name: "Next.js", category: "Framework", icon: Layout },
                                { name: "Hostinger", category: "Hosting", icon: Server },
                                { name: "BigRock", category: "Hosting", icon: HardDrive },
                                { name: "Hygraph", category: "Database", icon: Database },
                                { name: "Shopify", category: "E-commerce", icon: Store },
                                { name: "Mailchimp", category: "Marketing", icon: Mail },
                            ].map((tech, i) => (
                                <div
                                    key={`row2-${i}`}
                                    className="group flex flex-col w-[160px] md:w-[180px] shrink-0 items-center justify-center p-4 md:p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl hover:border-[#3994fa]/40 dark:hover:border-[#3994fa]/40 shadow-sm hover:shadow-[0_10px_40px_rgba(63,143,204,0.15)] dark:hover:shadow-[0_0_30px_rgba(63,143,204,0.2)] transition-all duration-300 relative overflow-hidden cursor-default"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#3994fa]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                    <tech.icon className="w-6 h-6 md:w-8 md:h-8 text-slate-800 dark:text-white mb-3 group-hover:scale-110 group-hover:text-[#3994fa] transition-all duration-300" strokeWidth={1.5} />

                                    <span className="font-black text-sm md:text-base text-slate-800 dark:text-white tracking-tight relative z-10 group-hover:text-[#3994fa] transition-colors duration-300">
                                        {tech.name}
                                    </span>
                                    <span className="text-[9px] md:text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mt-1 relative z-10 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors duration-300">
                                        {tech.category}
                                    </span>

                                    <div className="absolute top-0 left-0 w-16 h-16 bg-[#3994fa]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5️⃣ What You Get in Eco-Budget Plan */}
            <section className="py-12 md:py-16 px-4 sm:px-6 relative overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="bg-slate-50 dark:bg-[#030712]/50 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 border border-slate-200 dark:border-white/5 shadow-xl relative overflow-hidden">

                        {/* High-end aesthetic backgrounds */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-medium/5 blur-[60px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3994fa]/5 blur-[60px] rounded-full pointer-events-none" />
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-medium/50 to-transparent" />

                        <div className="text-center mb-10 md:mb-16 relative z-10">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-[#3994fa] mb-4">
                                <span className="w-2 h-2 rounded-full bg-[#3994fa] animate-pulse" />
                                Package Inclusions
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter">
                                Everything Included in Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3994fa] to-brand-medium italic">₹4,999 Eco-Website Package.</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">No surprise charges. No add-on traps. One transparent price — everything your business needs to launch online, built right the first time.</p>
                        </div>

                        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                            {[
                                { label: "3–5 Custom Pages", icon: FileCode },
                                { label: "Lead Capture Contact Form", icon: Mail },
                                { label: "Basic On-Page SEO Setup", icon: Search },
                                { label: "100% Mobile Responsive", icon: Smartphone },
                                { label: "1 Year Free Domain", icon: Cloud },
                                { label: "Lifetime Free Hosting", icon: Cloud },
                                { label: "Social Media Integration", icon: Share2 },
                                { label: "WhatsApp Live Chat Button", icon: MessageCircle }
                            ].map((feature, i) => (
                                <div
                                    key={i}
                                    className="group bg-white dark:bg-white/[0.02] p-5 md:p-6 rounded-2xl md:rounded-[1.5rem] border border-slate-200 dark:border-white/5 flex flex-col items-center text-center gap-3 hover:border-[#3994fa]/30 hover:shadow-xl hover:shadow-[#3994fa]/5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                                >
                                    {/* Hover gradient bleed */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#3994fa]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                    <div className="relative z-10 w-10 h-10 md:w-14 md:h-14 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#3994fa] transition-all duration-300">
                                        <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-[#3994fa] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <span className="relative z-10 font-bold text-xs md:text-sm text-slate-900 dark:text-white tracking-tight">{feature.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* 7️⃣ Design Style Examples — Horizontal Slider */}
            <section className="py-24 px-6 reveal-section bg-slate-50 dark:bg-slate-900/30">
                <div className="max-w-7xl mx-auto">
                    {/* Header + Controls */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
                        <div>
                            <span className="text-[#3994fa] font-bold uppercase tracking-widest text-xs">Portfolio</span>
                            <h2 className="text-3xl md:text-5xl font-black mt-2 text-slate-900 dark:text-white">Design Examples</h2>
                        </div>
                        {/* Industry Dropdown + Arrow Controls */}
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            {/* Industry Selection Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsIndustryDropdownOpen(!isIndustryDropdownOpen)}
                                    className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full font-bold text-sm text-slate-700 dark:text-slate-200 flex items-center gap-3 hover:border-[#3994fa] hover:ring-4 hover:ring-[#3994fa]/10 transition-all shadow-sm group"
                                >
                                    <Briefcase className="w-4 h-4 text-[#3994fa] group-hover:scale-110 transition-transform" />
                                    <span>{selectedIndustry || "All Industries"}</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isIndustryDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {isIndustryDropdownOpen && (
                                        <>
                                            {/* Backdrop to close dropdown */}
                                            <div
                                                className="fixed inset-0 z-40"
                                                onClick={() => setIsIndustryDropdownOpen(false)}
                                            />
                                            <motion.div


                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="absolute right-0 sm:left-0 sm:right-auto mt-3 w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-2xl z-50 overflow-hidden backdrop-blur-md"
                                            >
                                                <div className="max-h-[420px] overflow-y-auto custom-scrollbar p-2">
                                                    <div className="px-4 py-3 text-[10px] font-black uppercase tracking-widest text-[#3994fa]/60 border-b border-slate-100 dark:border-slate-800 mb-2 sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-10">
                                                        Filter by Industry
                                                    </div>
                                                    <button
                                                        onClick={() => {
                                                            setSelectedIndustry(null);
                                                            goToPortfolioSlide(0);
                                                            setIsIndustryDropdownOpen(false);
                                                        }}
                                                        className="w-full px-4 py-3.5 text-left text-[13px] font-bold text-slate-700 dark:text-slate-200 hover:bg-[#3994fa]/10 hover:text-[#3994fa] transition-all flex items-center justify-between group rounded-[1.25rem] mb-1"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className={`w-1.5 h-1.5 rounded-full ${selectedIndustry === null ? 'bg-[#3994fa]' : 'bg-slate-300 dark:bg-slate-700'} group-hover:bg-[#3994fa] transition-colors`} />
                                                            All Industries
                                                        </div>
                                                        {selectedIndustry === null && (
                                                            <motion.div >
                                                                <Check className="w-4 h-4 text-[#3994fa]" />
                                                            </motion.div>
                                                        )}
                                                    </button>
                                                    {industries.map((ind) => (
                                                        <button
                                                            key={ind}
                                                            onClick={() => {
                                                                setSelectedIndustry(ind);
                                                                goToPortfolioSlide(0);
                                                                setIsIndustryDropdownOpen(false);
                                                            }}
                                                            className="w-full px-4 py-3.5 text-left text-[13px] font-bold text-slate-700 dark:text-slate-200 hover:bg-[#3994fa]/10 hover:text-[#3994fa] transition-all flex items-center justify-between group rounded-[1.25rem] mb-1 last:mb-0"
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <div className={`w-1.5 h-1.5 rounded-full ${selectedIndustry === ind ? 'bg-[#3994fa]' : 'bg-slate-300 dark:bg-slate-700'} group-hover:bg-[#3994fa] transition-colors`} />
                                                                {ind}
                                                            </div>
                                                            {selectedIndustry === ind && (
                                                                <motion.div >
                                                                    <Check className="w-4 h-4 text-[#3994fa]" />
                                                                </motion.div>
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Arrow Controls */}
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => {
                                        scrollPortfolio('left');
                                    }}
                                    disabled={portfolioIndex === 0}
                                    className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#3994fa] hover:border-[#3994fa]/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-sm active:scale-90"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => {
                                        scrollPortfolio('right');
                                    }}
                                    disabled={portfolioIndex === filteredPortfolioItems.length - 1 || filteredPortfolioItems.length === 0}
                                    className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#3994fa] hover:border-[#3994fa]/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-sm active:scale-90"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Slider Track */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <div
                            ref={portfolioSliderRef}
                            className="flex overflow-x-hidden snap-x snap-mandatory"
                            style={{ scrollBehavior: 'smooth' }}
                        >
                            {filteredPortfolioItems.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.link}
                                    target={item.link !== '#' ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    className="group relative w-full shrink-0 aspect-video bg-neutral-900 snap-start block border border-slate-200 dark:border-slate-800 overflow-hidden"
                                >
                                    {/* Image using Next.js for better reliability */}
                                    <div className="absolute inset-0">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-400"
                                            sizes="(max-width: 768px) 100vw, 80vw"
                                        />
                                    </div>
                                    {/* Gradient overlay - slightly lightened for better visibility */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 z-10" />
                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20 w-full flex items-end justify-between">
                                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            <span className="text-[#3994fa] text-[10px] font-black uppercase tracking-widest mb-1 block">{item.category}</span>
                                            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">{item.title}</h3>
                                        </div>
                                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white font-bold text-[10px] uppercase tracking-wider group-hover:bg-[#3994fa] group-hover:border-[#3994fa] transition-all duration-300">
                                            View Live <ExternalLink className="w-3.5 h-3.5" />
                                        </div>
                                    </div>
                                    {/* Slide counter badge */}
                                    <div className="absolute top-5 right-5 z-20 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-white text-[10px] font-black">
                                        {i + 1} / {portfolioItems.length}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        {portfolioItems.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToPortfolioSlide(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${portfolioIndex === i
                                    ? 'w-8 bg-[#3994fa]'
                                    : 'w-4 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 8️⃣ Performance & Speed Optimization */}
            <section className="py-24 px-6 reveal-section relative overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-white/5">
                <TechnicalBackground isDarkMode={isDarkMode} />

                {/* Premium Glow Effects */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#3994fa]/5 dark:bg-[#3994fa]/10 blur-[48px] rounded-full pointer-events-none" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#3994fa]/5 dark:bg-[#3994fa]/5 blur-[48px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center relative z-10">
                    <div>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 text-[10px] md:text-xs font-black uppercase tracking-widest text-[#3994fa] mb-6 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[#3994fa] animate-pulse" />
                            Lightning Fast
                        </span>

                        <h2 className="text-3xl md:text-5xl lg:text-5xl font-black mt-2 mb-8 text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                            Performance & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3994fa] to-slate-500 dark:to-slate-400">Speed Optimization</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-10">
                            {[
                                { text: "Optimized Images for fast load", icon: Sparkles },
                                { text: "Lightweight clean code", icon: Code2 },
                                { text: "Fast loading pages", icon: Zap },
                                { text: "Core Web Vitals Ready", icon: CheckCircle2 }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all group hover:-translate-y-0.5 hover:border-[#3994fa]/30 dark:hover:border-[#3994fa]/30 cursor-default">
                                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className="w-5 h-5 text-[#3994fa]" />
                                    </div>
                                    <span className="font-bold text-[13px] md:text-sm text-slate-700 dark:text-slate-200 leading-tight">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 md:p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200 dark:border-white/10 rounded-2xl relative overflow-hidden group shadow-lg shadow-slate-200/50 dark:shadow-none">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                                <Rocket className="w-24 h-24 text-[#3994fa]" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#3994fa]/5 to-transparent dark:from-[#3994fa]/10" />
                            <div className="relative z-10">
                                <p className="text-lg md:text-xl font-black text-[#3994fa] mb-3">Google Loves Speed.</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">
                                    Our websites are engineered to be hyper-lightweight, ensuring incredibly high conversion rates and climbing search rankings from day one.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Advanced Premium Speed Gauge Graphic */}
                    <div className="relative flex justify-center items-center py-12 md:py-0">
                        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                            {/* Detailed Outer Glow Rings */}
                            <div className="absolute inset-0 rounded-full border-[1px] border-[#3994fa]/20 dark:border-[#3994fa]/30 shadow-[0_0_50px_rgba(63,143,204,0.1)] dark:shadow-[0_0_50px_rgba(63,143,204,0.15)] animate-pulse" />
                            <div className="absolute inset-4 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 shadow-inner" />
                            <div className="absolute inset-8 rounded-full border border-[#3994fa]/10" />

                            {/* Main Gauge SVG */}
                            <div className="absolute inset-6">
                                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                                    <circle
                                        cx="50" cy="50" r="42"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        className="text-slate-100 dark:text-slate-800"
                                        strokeDasharray="263"
                                        strokeDashoffset="10"
                                    />
                                    <motion.circle
                                        cx="50" cy="50" r="42"
                                        fill="none"
                                        stroke="url(#speedGradientPremium)"
                                        strokeWidth="4"
                                        strokeDasharray="263"





                                        strokeLinecap="round"
                                    />
                                    <defs>
                                        <linearGradient id="speedGradientPremium" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#3994fa" />
                                            <stop offset="100%" stopColor="#2563eb" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            {/* Center Metrics (Elevated Glassmorphism) */}
                            <div className="absolute inset-[15%] rounded-full bg-slate-50/90 dark:bg-slate-900/90 border border-slate-200/50 dark:border-white/5 shadow-xl flex flex-col items-center justify-center text-center">
                                <span




                                    className="text-7xl md:text-[100px] font-black text-slate-900 dark:text-white tracking-widest leading-none drop-shadow-sm"
                                >
                                    99
                                </span>
                                <span className="text-[#3994fa] text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mt-2 md:mt-4">Mobile Score</span>
                            </div>

                            {/* Floating Premium Tech Chips */}
                            <motion.div


                                className="absolute -top-4 right-4 md:-top-6 md:right-8 bg-white/95 dark:bg-slate-800/95 border border-slate-200 dark:border-white/10 px-5 py-3 rounded-xl shadow-xl z-20"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </div>
                                    <span className="text-xs md:text-sm font-black text-slate-800 dark:text-white uppercase tracking-tighter">0.5s Load</span>
                                </div>
                            </motion.div>

                            <motion.div


                                className="absolute bottom-1/4 -left-6 md:-left-12 bg-white/95 dark:bg-slate-800/95 border border-slate-200 dark:border-white/10 px-5 py-3 rounded-xl shadow-xl z-20"
                            >
                                <div className="flex items-center gap-2.5">
                                    <div className="w-6 h-6 rounded-full bg-[#3994fa]/10 flex items-center justify-center">
                                        <Check className="w-3.5 h-3.5 text-[#3994fa]" />
                                    </div>
                                    <span className="text-xs md:text-sm font-black text-slate-800 dark:text-white uppercase tracking-tighter">Next.js</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9️⃣ Basic SEO Setup */}
            <section className="py-24 px-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-white reveal-section relative overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        {/* Google Search Mockup */}
                        <motion.div


                            className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 max-w-xl mx-auto lg:ml-0 overflow-hidden border border-slate-200 dark:border-white/10"
                        >
                            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                <div className="ml-4 flex-1 h-6 bg-slate-100 dark:bg-slate-700 rounded-full px-4 flex items-center">
                                    <div className="w-24 h-2 bg-slate-400 dark:bg-slate-600 rounded-full" />
                                </div>
                            </div>

                            <div className="space-y-8">
                                {/* Search Result 1 */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-blue-600" />
                                        </div>
                                        <span className="text-[10px] text-slate-500">https://www.yourbusiness.com</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 group-hover:underline cursor-pointer">Premium Website Development | Preet Tech OPC Private Limited</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Looking for a fast, responsive, and affordable website? Our eco-budget plans offer premium designs to get you online in just 7 days.
                                    </p>
                                </div>

                                {/* Placeholder Results */}
                                <div className="space-y-2 opacity-30">
                                    <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                    <div className="w-40 h-3 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                    <div className="w-full h-8 bg-slate-200 dark:bg-slate-700 rounded-xl" />
                                </div>
                            </div>

                            {/* Floating "Indexed" Badge */}
                            <motion.div


                                className="absolute top-12 -right-4 bg-green-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
                            >
                                <CheckCircle2 className="w-3 h-3" /> INDEXED
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="text-[#3994fa] font-bold uppercase tracking-widest text-[10px] md:text-xs">Built for Google Rankings</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 mb-4 text-slate-900 dark:text-white">SEO-Ready Website<br />Structure Included.</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mb-10 leading-relaxed max-w-md">Every eco website we build is engineered to rank on Google from day one — no costly SEO it company needed to get started.</p>

                        <div className="space-y-6">
                            {[
                                { title: "SEO Meta Tags & Title Optimization", desc: "Carefully crafted title tags, meta descriptions, and heading structures for every page to target the right keywords." },
                                { title: "Google Search Console & Sitemap Submission", desc: "We submit your sitemap directly to Google Search Console for rapid crawling and faster indexing." },
                                { title: "Mobile-First Design (Google's Priority)", desc: "Google uses mobile-first indexing. Every eco website is pixel-perfect on smartphones, tablets, and desktops." },
                                { title: "SSL Certificate & HTTPS Security", desc: "SSL-secured HTTPS connection included — a confirmed Google ranking signal that also builds visitor trust." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#3994fa]/50 transition-colors">
                                        <div className="text-[#3994fa] font-black text-xs md:text-sm">0{i + 1}</div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 1️⃣1️⃣ Delivery Timeline */}
            <section className="py-24 px-6 reveal-section bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 md:mb-24">
                        <span className="text-[#3994fa] font-bold uppercase tracking-widest text-[10px] md:text-xs">Fastest Website Launch in India</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 text-slate-900 dark:text-white leading-tight">From Brief to Live Website <br className="md:hidden" />in Just 3–7 Days</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed">Our streamlined 4-phase process eliminates delays. You fill in the brief — we handle everything else until your website is live on the internet.</p>
                    </div>

                    <div className="relative">
                        {/* Horizontal Connecting Line (Desktop) */}
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3994fa]/30 to-transparent z-0 hidden lg:block transform -translate-y-1/2" />

                        {/* Vertical Connecting Line (Mobile) */}
                        <div className="absolute left-[35px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-[#3994fa]/50 to-transparent lg:hidden z-0" />

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 pl-16 lg:pl-0 relative z-10">
                            {[
                                {
                                    step: "Briefing",
                                    desc: "Form submission & brief discussion",
                                    days: "Day 1",
                                    icon: MessageSquare
                                },
                                {
                                    step: "Development",
                                    desc: "Core build & initial optimization",
                                    days: "Day 2-4",
                                    icon: Code2
                                },
                                {
                                    step: "Refinements",
                                    desc: "Perfecting content & final polish",
                                    days: "Day 5-6",
                                    icon: Sparkles
                                },
                                {
                                    step: "Go-Live",
                                    desc: "Domain setup & Global Launch",
                                    days: "Day 7",
                                    icon: Rocket
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}

                                    className="relative flex flex-col items-start lg:items-center text-left lg:text-center"
                                >
                                    {/* Pulse Marker */}
                                    <div className="absolute -left-[37px] lg:left-1/2 top-8 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-4 h-4 bg-[#3994fa] rounded-full shadow-[0_0_20px_rgba(63,143,204,0.6)] animate-pulse lg:hidden z-20" />

                                    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 md:p-8 rounded-[2rem] w-full shadow-xl shadow-slate-200/50 dark:shadow-none group transition-all hover:border-[#3994fa]/50 relative z-10">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#3994fa] text-white flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-[#3994fa]/20 transform group-hover:scale-110 transition-transform mx-auto lg:mx-auto">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="px-3 py-1 bg-[#3994fa]/10 text-[#3994fa] text-[10px] font-black rounded-full uppercase tracking-tighter mb-3 inline-block">
                                            {item.days}
                                        </span>
                                        <h4 className="text-lg md:text-xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">{item.step}</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Desktop Marker */}
                                    <div className="hidden lg:block w-4 h-4 bg-[#3994fa] rounded-full border-4 border-white dark:border-slate-900 shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-y-[140px]" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 1️⃣2️⃣ Pricing Packages */}
            <section id="pricing" className="py-24 px-6 reveal-section relative overflow-hidden bg-slate-50 dark:bg-slate-900/40">
                {/* 🛰️ Enhanced Background Structure */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Perspective Grid */}
                    <div
                        className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15]"
                        style={{
                            backgroundImage: `linear-gradient(to right, ${isDarkMode ? '#3994fa' : '#3994fa'} 1px, transparent 1px), linear-gradient(to bottom, ${isDarkMode ? '#3994fa' : '#3994fa'} 1px, transparent 1px)`,
                            backgroundSize: '60px 60px',
                            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                        }}
                    />

                    {/* Atmospheric Glow Modules (Static for performance) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                        <div
                            className="absolute top-[10%] left-[5%] w-[40%] h-[30%] bg-[#3994fa]/10 blur-[130px] rounded-full rotate-12"
                        />
                        <div
                            className="absolute bottom-[10%] right-[5%] w-[40%] h-[30%] bg-[#3994fa]/10 blur-[130px] rounded-full -rotate-12"
                        />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Floating Value Fragments (Desktop Only) - Static for performance */}
                    <div className="hidden xl:block">
                        {/* Piece 1: Performance */}
                        <div
                            className="absolute left-[-18%] top-[5%] w-56 p-6 bg-white/60 dark:bg-slate-900/60 rounded-[2.5rem] border border-white/20 dark:border-white/5 shadow-xl rotate-[-5deg] gpu"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-green-500" />
                                </div>
                                <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Speed Score</span>
                            </div>
                            <div className="text-3xl font-black text-slate-900 dark:text-white">100/100</div>
                            <div className="mt-4 w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-full" />
                            </div>
                        </div>

                        {/* Piece 2: Rapid Delivery */}
                        <div
                            className="absolute left-[-16%] bottom-[5%] w-60 p-6 bg-white/60 dark:bg-slate-900/60 rounded-[2.5rem] border border-white/20 dark:border-white/5 shadow-xl rotate-[5deg] gpu"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-[#3994fa]/10 flex items-center justify-center">
                                    <Rocket className="w-5 h-5 text-[#3994fa]" />
                                </div>
                                <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Rapid Launch</span>
                            </div>
                            <div className="text-2xl font-black text-slate-900 dark:text-white">3–7 Days</div>
                            <p className="text-[11px] text-slate-500 mt-2 font-medium italic">From concept to live site</p>
                        </div>

                        {/* Piece 3: Global Infra */}
                        <div
                            className="absolute right-[-18%] top-[10%] w-56 p-6 bg-white/60 dark:bg-slate-900/60 rounded-[2.5rem] border border-white/20 dark:border-white/5 shadow-xl rotate-[8deg] gpu"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                    <Globe className="w-5 h-5 text-blue-500" />
                                </div>
                                <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Infrastructure</span>
                            </div>
                            <div className="text-2xl font-black text-slate-900 dark:text-white uppercase leading-tight">Global CDN <br />Included</div>
                        </div>

                        {/* Piece 4: Satisfaction */}
                        <div
                            className="absolute right-[-16%] bottom-[10%] w-64 p-6 bg-white/60 dark:bg-slate-900/60 rounded-[2.5rem] border border-white/20 dark:border-white/5 shadow-xl rotate-[-8deg] gpu"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                    <Star className="w-5 h-5 text-orange-500" />
                                </div>
                                <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Client Rating</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />)}
                            </div>
                            <div className="text-xl font-black text-slate-900 dark:text-white">Professional & Fast</div>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto relative z-10">
                        {/* Animated Border Background */}
                        {/* Optimized Border Background - Opacity Pulse is cheaper than Background Position */}
                        <div className="absolute -inset-[2px] bg-gradient-to-r from-[#3994fa] via-brand-medium to-[#3994fa] rounded-[3rem] opacity-40 blur-sm animate-pulse gpu" />

                        {/* Main Card - Landscape Transition (Compact) */}
                        <motion.div

                            className="relative bg-white dark:bg-slate-900 rounded-[2rem] sm:rounded-[2.8rem] overflow-hidden border border-white/20 dark:border-slate-800/50 shadow-2xl"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* Left Column: Pricing & Offer */}
                                <div className="p-8 md:p-12 lg:p-14 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800/50 relative">
                                    {/* Decorative background elements */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#3994fa]/5 to-transparent pointer-events-none" />

                                    {/* Status Badge */}
                                    <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 bg-red-500/10 text-red-500 px-4 md:px-5 py-1.5 md:py-2 rounded-full border border-red-500/20 relative z-10">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                        </span>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Limited Launch Offer</span>
                                    </div>

                                    <h3 className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-4 relative z-10">Starting At Just</h3>

                                    <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-4 mb-2 relative z-10">
                                        <span className="text-xl md:text-2xl text-slate-300 dark:text-slate-600 line-through font-bold">₹5,999</span>
                                        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 tracking-tighter">
                                            ₹4,999
                                        </span>
                                    </div>
                                    <p className="text-[10px] font-bold text-[#3994fa] uppercase tracking-widest bg-[#3994fa]/10 px-3 py-1 rounded-lg">No Hidden Charges.</p>
                                    <p className="text-[10px] text-slate-400 font-medium relative z-10 italic">Trusted by 150+ startups</p>
                                </div>

                                {/* Right Column: Features & CTA */}
                                <div className="p-8 md:p-12 lg:p-14 bg-slate-50/50 dark:bg-slate-950/20 flex flex-col justify-center">
                                    <div className="space-y-4 mb-8 sm:mb-10">
                                        {[
                                            { text: "Premium Custom Design", bold: true },
                                            { text: "Lifetime Free Hosting", bold: true },
                                            { text: "1 Year Free Domain", bold: true },
                                            { text: "WhatsApp Chat Integration", bold: true },
                                            { text: "Launch in 3–7 Days", bold: true },
                                            { text: "1 SEO Keywords ", bold: true }
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}




                                                className="flex items-center gap-3 sm:gap-4 group/item"
                                            >
                                                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#3994fa]/20 flex items-center justify-center shrink-0 group-hover/item:bg-[#3994fa] group-hover/item:text-slate-900 transition-all">
                                                    <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                                                </div>
                                                <span className={`text-sm sm:text-base ${item.bold ? 'font-bold text-slate-800 dark:text-slate-200' : 'text-slate-500 dark:text-slate-400'}`}>
                                                    {item.text}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <a
                                        href="#contact"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="group relative w-full inline-flex items-center justify-center py-4 sm:py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-95 text-white rounded-[1.2rem] sm:rounded-[1.5rem] font-black uppercase tracking-[0.1em] text-[12px] sm:text-sm transition-all duration-300 shadow-xl shadow-[#3994fa]/20 overflow-hidden cursor-pointer"
                                    >
                                        <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                                            Start Your Project Now <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        {/* Button Shine Effect */}
                                        <div className="absolute inset-0 w-1/2 h-full bg-white opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[200%] transition-all duration-500 skew-x-[45deg]" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 1️⃣3️⃣ Add-Ons Available */}
            <section className="py-16 md:py-24 px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section relative overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#3994fa] font-bold uppercase tracking-widest text-xs">Grow Further</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 text-slate-900 dark:text-white">Power-Up Your Website with Add-Ons</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed">Start with the essentials and scale as you grow. Add advanced features to your eco website at any time, without rebuilding from scratch.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {[
                            { label: "Extra Pages", icon: FileCode },
                            { label: "Advanced SEO", icon: Search },
                            { label: "Blog Setup", icon: PenTool },
                            { label: "E-Commerce Add-On", icon: CreditCard },
                            { label: "Custom Design Upgrade", icon: Sparkles },
                            { label: "Maintenance Plan", icon: Settings }
                        ].map((item, i) => (
                            <div key={i} className="group bg-white dark:bg-slate-900 p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-3 text-center font-bold text-sm md:text-base text-slate-700 dark:text-slate-200 hover:border-[#3994fa] hover:text-[#3994fa] transition-colors cursor-pointer">
                                <item.icon className="w-5 h-5 text-slate-400 group-hover:text-[#3994fa] transition-colors" />
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1️⃣4️⃣ Our Simple 4-Step Process */}
            <section className="py-24 px-6 reveal-section relative overflow-hidden bg-transparent">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#3994fa]/5 blur-[60px] rounded-full pointer-events-none gpu" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-20 md:mb-28">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 text-[10px] md:text-xs font-black uppercase tracking-widest text-[#3994fa] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#3994fa] animate-pulse" />
                            How It Works
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter">
                            Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3994fa] to-brand-medium italic pr-2">4-Step Process</span>
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) with Infinite Running Glow */}
                        <div className="hidden md:block absolute top-[40%] left-[10%] w-[80%] h-[2px] bg-slate-200/30 dark:bg-white/5 -z-10 overflow-hidden rounded-full">
                            <motion.div 
                                animate={{ x: ['-100%', '200%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#3994fa] to-transparent shadow-[0_0_15px_rgba(63,143,204,0.8)]"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
                            {[
                                { title: "Consultation", icon: MessageSquare, desc: "We discuss your brand identity and set precise goals." },
                                { title: "Design", icon: PenTool, desc: "Crafting a beautiful and high-converting modern layout." },
                                { title: "Development", icon: Code2, desc: "Building your website fast, responsive, and secure." },
                                { title: "Launch", icon: Rocket, desc: "Review the final product, easily deploy, and go live!" }
                            ].map((item, i) => (
                                <div key={i} className="group relative">
                                    {/* Hover glow */}
                                    <div className="absolute -inset-2 bg-gradient-to-br from-[#3994fa]/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full gpu" />

                                    <div className="relative h-full bg-white dark:bg-[#030712]/50 backdrop-blur-lg border border-slate-200 dark:border-white/5 p-8 md:p-10 rounded-[2rem] flex flex-col items-center text-center group-hover:-translate-y-3 transition-transform duration-300 hover:shadow-2xl hover:shadow-[#3994fa]/5">
                                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center border-4 border-white dark:border-[#020617] text-xs font-black text-[#3994fa] shadow-sm tracking-widest">
                                            0{i + 1}
                                        </div>

                                        <motion.div 
                                            animate={{ 
                                                boxShadow: [
                                                    "0 0 0px rgba(57,148,250,0)", 
                                                    "0 0 20px rgba(57,148,250,0.4)", 
                                                    "0 0 0px rgba(57,148,250,0)"
                                                ],
                                                borderColor: [
                                                    "rgba(57,148,250,0.1)", 
                                                    "rgba(57,148,250,0.6)", 
                                                    "rgba(57,148,250,0.1)"
                                                ]
                                            }}
                                            transition={{ 
                                                duration: 2, 
                                                repeat: Infinity, 
                                                delay: i * 0.6, 
                                                ease: "easeInOut" 
                                            }}
                                            className="w-20 h-20 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-6 shadow-sm border border-slate-100 dark:border-white/5 group-hover:scale-110 group-hover:bg-[#3994fa] transition-all duration-300"
                                        >
                                            <item.icon className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors duration-300" />
                                        </motion.div>

                                        <h4 className="text-xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-[#3994fa] transition-colors">{item.title}</h4>
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed max-w-[200px] mx-auto">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 1️⃣5️⃣ FAQs */}
            <section className="py-16 md:py-24 px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#3994fa] font-bold uppercase tracking-widest text-xs">Got Questions?</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 text-slate-900 dark:text-white">Frequently Asked Questions About Our Eco Website Plan</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed">Everything you need to know before launching your business website with Preet Tech OPC Private Limited.</p>
                    </div>
                    <div className="space-y-4 px-2 sm:px-0">
                        {[
                            { q: "How long does it take to build my eco website?", a: "Typically 3–7 working days from the date we receive your content and brief. Our streamlined process means most clients are live within a week — often faster. The exact timeline depends on how quickly feedback and content are shared." },
                            { q: "Is domain registration included in the ₹4,999 plan?", a: "Domain registration cost is separate (typically ₹800–₹1,500/year for a .com domain), but we handle the entire setup process for you. We guide you through domain purchase and connect it to your website completely free of charge." },
                            { q: "Can I upgrade from the eco plan to a premium website later?", a: "Absolutely! Your eco website is built on a scalable foundation. You can upgrade to our advanced website plans — including e-commerce, custom animations, or CMS integration — at any time without starting from scratch." },
                            { q: "Do you provide support after my website goes live?", a: "Yes! We offer post-launch support to fix any issues that arise after going live. We also offer optional monthly maintenance plans for ongoing updates, security patches, and performance monitoring." },
                            { q: "How many revision rounds are included?", a: "We include one comprehensive revision round during the design phase where you can request changes to layout, colors, content, and structure. Additional revision rounds can be added as a paid upgrade if needed." },
                            { q: "Will my website rank on Google?", a: "Your eco website is built with on-page SEO best practices — optimized meta tags, heading structure, mobile-first design, fast load times, and sitemap submission to Google Search Console. While rankings depend on your niche and competition, you'll have a solid SEO foundation from day one." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                                <button
                                    onClick={() => toggleFAQ(i)}
                                    className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-sm md:text-base text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                >
                                    {item.q}
                                    <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${openFAQ === i ? "rotate-180 text-[#3994fa]" : "text-slate-400"}`} />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openFAQ === i ? "max-h-48" : "max-h-0"}`}
                                >
                                    <p className="p-5 md:p-6 pt-0 text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Success Stories Section */}
            <CaseStudies 
                studies={ECO_CASE_STUDIES} 
                subtitle="Sustainability Impact" 
                title="Green Tech That Grows."
                themeColor="#3994fa"
            />

            {/* 1️⃣7️⃣ Final CTA Section */}
            <section className="py-16 sm:py-24 px-6 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-center relative overflow-hidden reveal-section">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3994fa]/5 to-brand-medium/10 dark:from-brand-deep/20 dark:to-brand-medium/20" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-black mb-4 leading-[1.2] sm:leading-tight text-slate-900 dark:text-white">
                        Launch Your Business Website <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-[#3994fa]">in 3–7 Days for ₹4,999 +GST</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                        Join 150+ businesses, freelancers, and startups across India who trusted Preet Tech OPC Private Limited to get them online — professionally, affordably, and fast.
                    </p>
                    <a href="#contact" className="px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-95 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] sm:text-[13px] shadow-xl inline-block hover:opacity-90 transition-all hover:-translate-y-1">
                        Get My Free Consultation Now
                    </a>
                </div>
            </section>



            <Footer />
        </main >
    );
}

