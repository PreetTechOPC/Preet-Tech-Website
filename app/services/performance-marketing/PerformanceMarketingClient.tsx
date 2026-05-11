"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
    Zap,
    Shield,
    Layout,
    Layers,
    Code2,
    ArrowRight,
    User,
    Mail,
    Phone,
    Building2,
    ChevronRight,
    Activity,
    Target,
    BarChart3,
    TrendingUp,
    Search,
    Globe,
    Cpu,
    MousePointer2,
    CheckCircle2,
    Share2,
    Briefcase,
    DollarSign,
    Rocket,
    ShoppingCart,
    Landmark,
    Building,
    GraduationCap,
    HeartPulse,
    HelpCircle,
    Plus,
    Minus,
    MessageSquare,
    Play,
    TrendingDown as TrendingDownIcon,
    PieChart,
    BarChart3 as BarChart,
    MousePointerClick,
    Users,
    FileSpreadsheet,
    Gauge,
    Monitor,
    Smartphone,
    Globe2,
    Settings2,
    Search as SearchIcon,
    Instagram,
    Facebook,
    Youtube,
    Linkedin,
    Workflow,
    ArrowUpRight,
    Lock,
    Sun,
    Moon,
    CreditCard,
    ChevronDown,
    X
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Footer from '@/components/Footer';
import CaseStudies, { CaseStudy } from '@/components/CaseStudies';
import ThreeSphereScene from '@/components/ThreeSphere';
import PhoneInput from '@/components/PhoneInput';
import BudgetSelect from '@/components/BudgetSelect';
const Odometer = ({ value, suffix, prefix = "" }: { value: number; suffix: string; prefix?: string }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const startTime = Date.now();

            const updateCounter = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);
                const easedProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic

                setDisplayValue(Math.floor(easedProgress * end));

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            };

            requestAnimationFrame(updateCounter);
        }
    }, [isInView, value]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{displayValue}{suffix}
        </span>
    );
};

enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

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

export default function PerformanceMarketingClient() {
    const [auditFormData, setAuditFormData] = useState({
        companyName: '',
        currentROAS: '',
        websiteURL: '',
        budget: '',
        growthGoal: ''
    });

    const handleAuditSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle submission logic
        console.log('Audit Form submitted:', auditFormData);
    };

    const [theme, setTheme] = useState<Theme>(Theme.DARK);
    const containerRef = useRef<HTMLDivElement>(null);

    const CASE_STUDIES: CaseStudy[] = [
        {
            id: 'growth-1',
            title: 'Scaling D2C Brand to ₹1M/mo',
            client: 'Luxe Wear',
            category: 'E-commerce Scaling',
            description: 'Implemented a multi-channel meta-funnel strategy focusing on high LTV customers and creative testing velocity.',
            stats: [
                { label: 'ROAS', value: '4.8x' },
                { label: 'Growth', value: '+310%' },
                { label: 'CAC', value: '-22%' }
            ],
            tags: ['Meta Ads', 'Retention', 'CRO']
        },
        {
            id: 'growth-2',
            title: 'B2B Lead Gen for Fintech SaaS',
            client: 'PayFlow',
            category: 'Lead Generation',
            description: 'Hyper-targeted LinkedIn and Google Search campaigns that doubled the sales pipeline in under 90 days.',
            stats: [
                { label: 'Leads/mo', value: '1.2k+' },
                { label: 'CPL', value: '-45%' },
                { label: 'Pipeline', value: '₹2.4M' }
            ],
            tags: ['LinkedIn Ads', 'Google Ads', 'ABM']
        }
    ];

    // Form State for Hero
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        countryCode: '+91',
        industry: '',
        budget: '₹19,999',
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
                    service: 'Performance Marketing'
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
        const isDarkMode = false;
        setTheme(isDarkMode ? Theme.DARK : Theme.LIGHT);
        // Ensure light theme is default if not specifically set
        if (!isDarkMode) {
            /* handled by next-themes */
            setTheme(Theme.LIGHT);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        if (newTheme === Theme.DARK) {
            /* handled by next-themes */
        } else {
            /* handled by next-themes */
        }
    };

    const trustLogos = [
        { name: "Global Wealth", logo: "https://cdn.simpleicons.org/google/4285F4" },
        { name: "Next Gen", logo: "https://cdn.simpleicons.org/facebook/1877F2" },
        { name: "Wealth Tech", logo: "https://cdn.simpleicons.org/hubspot/FF7A59" },
        { name: "Growth Co", logo: "https://cdn.simpleicons.org/shopify/96BF48" },
        { name: "Digital First", logo: "https://cdn.simpleicons.org/mailchimp/FFE01B" }
    ];

    const whyChooseUs = [
        {
            title: "Data-Driven Decisions",
            desc: "Every campaign move is backed by real-time analytics and deep performance audits.",
            icon: BarChart
        },
        {
            title: "ROI Focused Campaigns",
            desc: "We don't just chase clicks; we chase high-value conversions that scale your bottom line.",
            icon: TrendingUp
        },
        {
            title: "Transparent Reporting",
            desc: "Get 24/7 access to your custom performance dashboard with clear, actionable insights.",
            icon: FileSpreadsheet
        },
        {
            title: "Experienced Media Buyers",
            desc: "Our team has managed millions in ad spend across highly competitive global niches.",
            icon: Users
        },
        {
            title: "Conversion Optimization",
            desc: "We optimize the entire journey, from the first ad impression to the final checkout.",
            icon: MousePointerClick
        },
        {
            title: "Strategic Scaling",
            desc: "Predictable templates and frameworks to scale your winning campaigns horizontally.",
            icon: Zap
        }
    ];

    const services = [
        {
            title: "Meta Ads Management",
            desc: "Dominating Facebook and Instagram with high-converting creatives and laser-targeted audience personas.",
            icon: Share2,
            gradient: "from-blue-600 to-cyan-500"
        },
        {
            title: "Google Ads Management",
            desc: "Capturing high-intent search traffic and scaling via Precision Search, Display, and Performance Max campaigns.",
            icon: SearchIcon,
            gradient: "from-orange-500 to-yellow-500"
        },
        {
            title: "YouTube Ads",
            desc: "Cinematic video ads designed to stop the scroll, build trust, and drive massive engagement at scale.",
            icon: Youtube,
            gradient: "from-red-600 to-rose-500"
        },
        {
            title: "Conversion Rate Optimization",
            desc: "A/B testing and landing page refinement to squeeze every drop of ROI from your existing traffic.",
            icon: MousePointer2,
            gradient: "from-emerald-500 to-teal-400"
        },
        {
            title: "Funnel Building",
            desc: "Architecting multi-stage customer journeys that turn cold traffic into loyal, repeat brand advocates.",
            icon: Workflow,
            gradient: "from-purple-600 to-indigo-500"
        },
        {
            title: "Retargeting Campaigns",
            desc: "Re-capturing lost visitors with dynamic product ads and personalized messaging to complete the sale.",
            icon: Target,
            gradient: "from-brand-medium to-brand-medium"
        }
    ];

    const platforms = [
        { name: "Facebook", icon: Facebook, color: "#1877F2" },
        { name: "Instagram", icon: Instagram, color: "#E4405F" },
        { name: "Google", icon: SearchIcon, color: "#4285F4" },
        { name: "YouTube", icon: Youtube, color: "#FF0000" },
        { name: "LinkedIn", icon: Linkedin, color: "#0077B5" },
        { name: "TikTok", icon: Share2, color: "#000000" }
    ];

    const strategy = [
        { phase: "Research & Audit", desc: "Deep-dive into your existing accounts, competitors, and industry benchmarks.", icon: SearchIcon },
        { phase: "Strategy Planning", desc: "Architecting a custom multi-channel growth roadmap tailored to your KPIs.", icon: Layout },
        { phase: "Campaign Setup", desc: "Precision assembly of tracking, creatives, and high-performance targeting sets.", icon: Layers },
        { phase: "Optimization & Scaling", desc: "Daily bid management, creative rotation, and vertical/horizontal scaling.", icon: Activity },
        { phase: "Reporting & Growth", desc: "Bi-weekly strategy calls and real-time dashboard updates for full clarity.", icon: PieChart }
    ];

    const caseStudies = [
        {
            client: "LuxLiving E-commerce",
            results: "5.2x ROAS",
            growth: "320% Revenue",
            before: "₹12k/mo",
            after: "₹65k/mo",
            image: "/images/services/luxliving-ecommerce.png"
        },
        {
            client: "SaaS Flow Pro",
            results: "3x Lead Vol",
            growth: "45% Lower CPA",
            before: "₹45 CPA",
            after: "₹24 CPA",
            image: "/images/services/saasflow-dashboard.png"
        },
        {
            client: "Prime Real Estate",
            results: "200+ Leads/mo",
            growth: "150% ROI",
            before: "Static Leads",
            after: "Predictable Pipeline",
            image: "/images/services/advance-website.png"
        },
        {
            client: "HealthTech AI",
            results: "4.5x Installs",
            growth: "210% Active Users",
            before: "2k MAU",
            after: "15k MAU",
            image: "/images/services/app-development.png"
        },
        {
            client: "EduPlatform",
            results: "85% Target",
            growth: "180% Signups",
            before: "5k Users",
            after: "20k Users",
            image: "/images/services/content-creation.png"
        },
        {
            client: "FinServe Global",
            results: "6x Output",
            growth: "400% Target",
            before: "₹10M",
            after: "₹50M",
            image: "/images/services/business-tools.png"
        }
    ];

    const industries = [
        { name: "Ecommerce", icon: ShoppingCart, desc: "Scaling D2C brands via high-ROAS shopping funnels." },
        { name: "Real Estate", icon: Building, desc: "Generating high-quality property inquiries and site visits." },
        { name: "Education", icon: GraduationCap, desc: "Driving student enrollments and course signups at scale." },
        { name: "Healthcare", icon: HeartPulse, desc: "Patient acquisition for clinics and wellness platforms." },
        { name: "SaaS", icon: Cpu, desc: "Reducing churn and driving trials for recurring software models." },
        { name: "Local Businesses", icon: Landmark, desc: "Dominating local search and driving foot traffic/calls." }
    ];

    const funnelSteps = [
        { stage: "Top Funnel", title: "Awareness", desc: "Cold audience targeting & brand story ads.", color: "bg-blue-500" },
        { stage: "Middle Funnel", title: "Consideration", desc: "Detailed product demos & social proof.", color: "bg-cyan-500" },
        { stage: "Bottom Funnel", title: "Conversion", desc: "Dynamic ads & urgency based offers.", color: "bg-brand-medium" }
    ];

    const tools = [
        { name: "Meta Business Suite", icon: "https://cdn.simpleicons.org/facebook/1877F2" },
        { name: "Google Ads", icon: "https://cdn.simpleicons.org/googleads/4285F4" },
        { name: "Google Analytics", icon: "https://cdn.simpleicons.org/googleanalytics/E37400" },
        { name: "Tag Manager", icon: "https://cdn.simpleicons.org/googletagmanager/246FDB" },
        { name: "HubSpot CRM", icon: "https://cdn.simpleicons.org/hubspot/FF7A59" },
        { name: "Hotjar", icon: "https://cdn.simpleicons.org/hotjar/FF3C00" }
    ];

    const metrics = [
        { label: "Ad Spend Managed", value: 85, prefix: "₹", suffix: "Cr+" },
        { label: "Average ROI", value: 4, prefix: "", suffix: ".5x" },
        { label: "Conversions Generated", value: 500, prefix: "", suffix: "K+" },
        { label: "Client retention", value: 95, prefix: "", suffix: "%" }
    ];

    const faqs = [
        { q: "How long does it take to see results from performance marketing?", a: "While initial data starts flowing in within the first 48 hours, meaningful ROI optimization typically takes 2-4 weeks. Our performance marketing services focus on 'quick wins' while simultaneously building long-term scalable funnels for your business." },
        { q: "What is your typical management fee for ad campaigns?", a: "Our pricing architecture is customized based on project complexity and ad spend. We offer both performance-based models and monthly retainers, ensuring our goals are perfectly aligned with your business growth and ROAS targets." },
        { q: "Do your performance marketing services include creative production?", a: "Yes. Preet Tech OPC Private Limited's High-Velocity Content Engine handles everything from creative direction to cinematic ad visuals, ensuring your ads stop the scroll and drive conversions effectively." },
        { q: "Which ad platforms should I start with for my business?", a: "This depends entirely on your industry and audience. During our initial Strategy Call, we perform a deep-dive audit to recommend the highest-impact channels like Meta, Google, or YouTube for your specific goals." },
        { q: "How do you track and report campaign performance?", a: "We provide detailed, transparent real-time reporting dashboards. Every single conversion is tracked via advanced server-side tagging to ensure 100% data accuracy for your ROAS monitoring." }
    ];

    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const nextCase = () => {
        if (sliderRef.current) {
            const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 0;
            sliderRef.current.scrollBy({ left: cardWidth + 32, behavior: 'smooth' });
        }
    };

    const prevCase = () => {
        if (sliderRef.current) {
            const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 0;
            sliderRef.current.scrollBy({ left: -(cardWidth + 32), behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        if (sliderRef.current) {
            const scrollLeft = sliderRef.current.scrollLeft;
            const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 0;
            const index = Math.round(scrollLeft / (cardWidth + 32));
            setCurrentCaseIndex(index);
        }
    };

    return (
        <main ref={containerRef} className="bg-white dark:bg-[#030712] transition-colors duration-300">
            <Navbar isDark={theme === Theme.DARK} toggleTheme={toggleTheme} />

            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
                <TechnicalBackground isDarkMode={theme === Theme.DARK} />
                <ThreeSphereScene />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                    <div className="space-y-6 lg:space-y-8 hero-content text-center lg:text-left">
                        <span
                            className="inline-block px-4 py-1 rounded-full bg-[#3994fa]/10 dark:bg-[#3994fa]/10 text-[#3994fa] dark:text-[#3994fa] text-[10px] md:text-xs font-bold uppercase tracking-widest border border-[#3994fa]/20 dark:border-[#3994fa]/20"
                        >
                            ROI-DRIVEN PERFORMANCE MARKETING
                        </span>
                        <h1
                            className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-slate-900 dark:text-white"
                        >
                            Performance Marketing <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3994fa] to-[#1e293b] dark:to-white">Services for Scalable ROI.</span>
                        </h1>
                        <p
                            className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium"
                        >
                            Maximize your brand's growth with our data-driven <strong>performance marketing services</strong>. We leverage advanced analytics and precision targeting to turn your marketing spend into a high-octane growth engine starting at ₹19,999.
                        </p>
                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Link
                                href="/case-studies/performance-marketing"
                                className="px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-90 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] sm:text-[13px] shadow-lg shadow-[#3994fa]/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
                            >
                                Case Studies <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div
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
                                        <input required type="text" value={formData.businessName || ''} onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} placeholder="Your Company Ltd." className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all text-sm text-slate-700 dark:text-slate-200" />
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
                                            value={formData.phone || ''}
                                            onChange={(val) => setFormData({ ...formData, phone: val })}
                                            countryCode={formData.countryCode}
                                            onCountryCodeChange={(code) => setFormData({ ...formData, countryCode: code })}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Industry</label>
                                        <div className="relative group">
                                            <Activity strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3994fa] transition-colors pointer-events-none" />
                                            <select required value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })} className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-10 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all appearance-none text-slate-700 dark:text-slate-200 text-sm cursor-pointer">
                                                <option value="">Select Industry</option>
                                                <option value="Ecommerce">Ecommerce</option>
                                                <option value="Real Estate">Real Estate</option>
                                                <option value="SaaS">SaaS</option>
                                                <option value="EdTech">EdTech</option>
                                                <option value="Healthcare">Healthcare</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Monthly Ad Budget</label>
                                        <div className="relative group">
                                            <CreditCard strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3994fa] transition-colors pointer-events-none" />
                                            <BudgetSelect 
                                                value={formData.budget} 
                                                onChange={(val) => setFormData({ ...formData, budget: val })} 
                                                className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-10 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all appearance-none text-slate-700 dark:text-slate-200 text-sm cursor-pointer"
                                            />
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <button disabled={submitStatus === "loading"} type="submit" className="w-full px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-90 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] sm:text-[13px] shadow-lg shadow-[#3994fa]/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-1 disabled:opacity-70">
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

            {/* 2. Trust Indicators / Client Logos Section */}
            <section className="py-12 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Trusted by Growing Brands</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-50">
                        {trustLogos.map((logo, i) => (
                            <img
                                key={i}
                                src={logo.logo}
                                alt={logo.name}
                                className="h-6 sm:h-8 md:h-10 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Why Choose Preet Tech OPC Private Limited */}
            <section className="py-24 px-6 relative overflow-hidden bg-white dark:bg-[#030712] scroll-reveal">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-brand-medium text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">The ROI Advantage</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                            The Best <span className="text-brand-medium">Performance Marketing IT Company</span> For You
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChooseUs.map((item, i) => (
                            <div
                                key={i}
                                className="group p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-brand-medium/30 transition-all hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(63,143,204,0.2)] transition-all">
                                    <item.icon className="w-6 h-6 text-brand-medium" />
                                </div>
                                <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. What is Performance Marketing? (Minimalist Redesign) */}
            <section className="py-24 px-6 bg-white dark:bg-[#030712] scroll-reveal">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-brand-medium text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">The Definition</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-tight">
                            Performance Marketing <br />
                            Is <span className="text-brand-medium">Results-Only</span> Growth.
                        </h2>
                    </div>

                    <div className="max-w-3xl mb-12">
                        <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <strong>Performance marketing</strong> is a comprehensive term for online marketing and advertising programs in which advertisers pay only when a specific action is completed—such as a sale, lead, or click. At Preet Tech OPC Private Limited, we combine this accountability with advanced data analytics to ensure every marketing dollar generates a measurable return on investment (ROI).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-black text-slate-300 dark:text-slate-700">01.</span>
                                <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 dark:text-white">Accountability</h3>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-medium">
                                We track every click and every dollar. No more guessing. Performance marketing ensures your investment is tied directly to measurable outcomes.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-black text-slate-300 dark:text-slate-700">02.</span>
                                <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 dark:text-white">Precision</h3>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-medium">
                                We bypass the typical "spray and pray" approach. Our systems target high-intent users who are ready to take action right now.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-black text-slate-300 dark:text-slate-700">03.</span>
                                <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 dark:text-white">Agility</h3>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-medium">
                                Unlike static campaigns, we optimize daily. Our strategies evolve as fast as the market, ensuring you never miss a growth opportunity.
                            </p>
                        </div>
                    </div>


                </div>
            </section>

            {/* 5. Our Core Performance Services */}
            <section className="py-20 px-6 bg-white dark:bg-[#030712] relative overflow-hidden scroll-reveal">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-brand-medium text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">Full-Funnel Mastery</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                            Core Performance <span className="text-brand-medium">Services</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className="group relative p-0.5 rounded-3xl bg-slate-200 dark:bg-white/5 hover:bg-gradient-to-br transition-all duration-300 overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                <div className="relative p-6 md:p-8 rounded-[1.4rem] bg-white dark:bg-slate-900/90 h-full flex flex-col">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                        <service.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-medium" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-black uppercase tracking-tight text-slate-900 dark:text-white mb-2 group-hover:text-brand-medium transition-colors">{service.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-medium mb-6 flex-grow">
                                        {service.desc}
                                    </p>
                                    <div className="inline-flex items-center gap-2 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-brand-medium group-hover:gap-4 transition-all mt-auto">
                                        Learn More <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Platforms We Master (Strategic Ecosystem Redesign) */}
            <section className="py-24 px-6 bg-white dark:bg-[#030712] relative overflow-hidden scroll-reveal">
                {/* Background Tech Texture */}
                <div className="absolute inset-0 bg-[radial-gradient(#3994fa_0.5px,transparent_0.5px)] bg-[size:24px_24px] opacity-[0.05] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-xl">
                            <span className="text-brand-medium text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Omni-Channel Authority</span>
                            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase leading-tight tracking-tighter">
                                Strategic <br />
                                <span className="text-brand-medium">Ecosystem</span>
                            </h3>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                            <div className="w-2 h-2 rounded-full bg-brand-medium" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Live Optimization Active</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                        {platforms.map((platform, i) => (
                            <div
                                key={i}
                                className="group relative hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-medium/0 to-brand-medium/0 group-hover:from-brand-medium/20 group-hover:to-brand-medium/20 rounded-[2rem] transition-all duration-300 blur-sm" />
                                <div className="relative h-full p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 backdrop-blur-sm flex flex-col items-center gap-6 transition-all group-hover:border-brand-medium/30 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] dark:group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-brand-medium/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                                        <platform.icon className="w-10 h-10 transition-all duration-300 opacity-40 group-hover:opacity-100 group-hover:scale-110" style={{ color: platform.color }} />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Channel 0{i + 1}</p>
                                        <span className="text-sm font-black uppercase tracking-tight text-slate-900 dark:text-white transition-colors group-hover:text-brand-medium">{platform.name}</span>
                                    </div>

                                    {/* Tech Status readout */}
                                    <div className="mt-auto w-full pt-4 border-t border-slate-50 dark:border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="flex gap-1">
                                            <div className="w-1 h-3 bg-brand-medium/40 rounded-full" />
                                            <div className="w-1 h-3 bg-brand-medium/60 rounded-full" />
                                            <div className="w-1 h-3 bg-brand-medium rounded-full" />
                                        </div>
                                        <span className="text-[8px] font-black uppercase tracking-widest text-brand-medium">Mastered</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Our Strategy Process */}
            <section className="py-24 px-6 bg-white dark:bg-[#030712] overflow-hidden scroll-reveal">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-brand-medium text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Our Roadmap</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                            Strategy <span className="text-brand-medium">Process</span>
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Animated Step Progression Line */}
                        <div className="absolute top-[40px] left-0 w-full h-0.5 bg-slate-100 dark:bg-white/5 hidden lg:block">
                            <div
                                className="h-full w-full bg-brand-medium shadow-[0_0_10px_#3994fa]"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 relative z-10">
                            {strategy.map((step, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center text-center group"
                                >
                                    <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-white/10 flex items-center justify-center mb-4 md:mb-6 group-hover:border-brand-medium transition-all relative">
                                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand-medium text-[#030712] text-[8px] font-black flex items-center justify-center border-2 border-white dark:border-[#030712]">
                                            0{i + 1}
                                        </div>
                                        <step.icon className="w-6 h-6 text-brand-medium" />
                                    </div>
                                    <h4 className="text-sm md:text-base font-black uppercase tracking-tight text-slate-900 dark:text-white mb-2">{step.phase}</h4>
                                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-[160px]">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Case Studies / Results Section (Loop Slider Redesign) */}
            <section className="py-24 px-6 bg-slate-50 dark:bg-[#030712] relative overflow-hidden scroll-reveal">
                {/* Dynamic Background Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand-medium/5 blur-[60px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-brand-medium text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Proof Projecting ROI</span>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-slate-900 dark:text-white leading-[0.9]">
                                High Velocity <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-medium">Growth Stories</span>
                            </h2>
                        </div>

                        <div className="flex gap-4 mb-2">
                            <button
                                onClick={prevCase}
                                className="w-12 h-12 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-medium hover:border-brand-medium/30 transition-all group"
                            >
                                <ChevronRight className="w-5 h-5 rotate-180 transition-transform group-hover:-translate-x-1" />
                            </button>
                            <button
                                onClick={nextCase}
                                className="w-12 h-12 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-medium hover:border-brand-medium/30 transition-all group"
                            >
                                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden px-4 -mx-4">
                            <div
                                ref={sliderRef}
                                onScroll={handleScroll}
                                className="flex gap-8 overflow-x-auto snap-x snap-mandatory pt-4 pb-12 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                            >
                                {caseStudies.map((study, i) => (
                                    <div key={i} className="min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.33rem)] group relative snap-start shrink-0">
                                        <div className="absolute -inset-2 bg-gradient-to-b from-brand-medium/20 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

                                        <div className="relative h-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden flex flex-col">
                                            {/* Immersive Image Header */}
                                            <div className="h-64 lg:h-72 relative overflow-hidden">
                                                <img
                                                    src={study.image}
                                                    alt={study.client}
                                                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />

                                                {/* HUD Overlay */}
                                                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                                                    <div className="px-3 py-1 rounded-lg bg-brand-medium/20 backdrop-blur-md border border-brand-medium/30">
                                                        <span className="text-[8px] font-black uppercase tracking-widest text-brand-medium">{study.client}</span>
                                                    </div>
                                                    <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                                        <TrendingUp className="w-4 h-4 text-brand-medium" />
                                                    </div>
                                                </div>

                                                <div className="absolute bottom-6 left-6 right-6">
                                                    <p className="text-3xl lg:text-4xl font-black text-white leading-tight uppercase tracking-tighter">
                                                        {study.results} <br className="hidden lg:block lg:mb-0" /><span className="text-brand-medium italic text-2xl lg:text-3xl">Impact</span>
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Growth Dashboard Bottom */}
                                            <div className="p-6 lg:p-8 flex-grow flex flex-col">
                                                <div className="flex justify-between items-center mb-6 lg:mb-8 pb-4 border-b border-slate-100 dark:border-white/5">
                                                    <div>
                                                        <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">Total Scaling</p>
                                                        <p className="text-xl font-black text-slate-900 dark:text-white uppercase">{study.growth}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="inline-flex items-center gap-1 text-[8px] font-black text-brand-medium uppercase tracking-widest px-2 py-1 bg-brand-medium/10 rounded-full">
                                                            Verified ROI
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-auto space-y-4">
                                                    <div className="relative h-16 rounded-2xl bg-slate-50 dark:bg-black/40 border border-slate-100 dark:border-white/5 p-3 flex items-center justify-between overflow-hidden group/metric mt-4">
                                                        <div className="absolute inset-0 bg-gradient-to-r from-brand-medium/5 to-transparent -translate-x-full group-hover/metric:translate-x-0 transition-transform duration-300" />

                                                        <div className="relative z-10 flex items-center gap-3">
                                                            <div className="w-8 h-8 rounded-full bg-white dark:bg-black/20 flex items-center justify-center shadow-sm">
                                                                <ArrowRight className="w-3 h-3 text-slate-300 dark:text-slate-600 rotate-180" />
                                                            </div>
                                                            <div>
                                                                <p className="text-[7px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5 whitespace-nowrap">Baseline Metric</p>
                                                                <p className="text-xs font-black text-slate-500">{study.before}</p>
                                                            </div>
                                                        </div>

                                                        <ArrowRight className="relative z-10 w-3 h-3 text-brand-medium" />

                                                        <div className="relative z-10 text-right">
                                                            <p className="text-[7px] font-black uppercase tracking-[0.2em] text-brand-medium mb-0.5 whitespace-nowrap">Current Status</p>
                                                            <p className="text-sm font-black text-slate-900 dark:text-white">{study.after}</p>
                                                        </div>
                                                    </div>

                                                    <button className="w-full py-4 text-[10px] font-black uppercase tracking-[.4em] text-slate-400 hover:text-brand-medium border border-transparent hover:border-brand-medium/20 rounded-xl transition-all flex items-center justify-center gap-3 group/btn">
                                                        Full Disclosure <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Progress Indicator */}
                        <div className="flex justify-center gap-2 mt-4">
                            {caseStudies.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        if (sliderRef.current) {
                                            const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 0;
                                            sliderRef.current.scrollTo({ left: i * (cardWidth + 32), behavior: 'smooth' });
                                        }
                                    }}
                                    className={`h-1 transition-all duration-300 rounded-full ${currentCaseIndex === i ? 'w-12 bg-brand-medium' : 'w-4 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Industries We Serve */}
            <section className="py-32 px-6 bg-white dark:bg-[#030712] relative scroll-reveal">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-brand-medium text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Sectors We Transform</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase text-slate-900 dark:text-white">
                            Industries <span className="text-brand-medium">We Scale</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.map((industry, i) => (
                            <div
                                key={i}
                                className="group p-10 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-medium/30 transition-all shadow-sm hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center mb-8 border border-slate-200 dark:border-white/10 group-hover:bg-brand-medium transition-all">
                                    <industry.icon className="w-8 h-8 text-brand-medium group-hover:text-[#030712] transition-colors" />
                                </div>
                                <h4 className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4">{industry.name}</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{industry.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Mid-Page CTA Banner */}
            <section className="py-16 px-6 relative overflow-hidden scroll-reveal">
                <div className="max-w-7xl mx-auto">
                    <div className="relative rounded-[3rem] bg-slate-900 dark:bg-black p-10 md:p-16 overflow-hidden border border-white/10">
                        {/* Static Glows */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-medium/8 blur-[48px] rounded-full" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-medium/8 blur-[48px] rounded-full" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.9]">
                                Ready to Scale <br /> <span className="text-brand-medium italic">Your Revenue?</span>
                            </h2>
                            <p className="text-slate-400 text-base md:text-lg font-medium mb-10">
                                Don't leave your growth to chance. Get a custom performance roadmap designed for your specific business goals.
                            </p>
                            <Link href="/contact" className="px-6 sm:px-10 py-4 sm:py-5 bg-brand-medium text-[#030712] rounded-2xl font-black text-[11px] sm:text-[13px] uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-brand-medium/20 group flex items-center justify-center gap-2 mx-auto">
                                Book Free Performance Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. Creative Command Center — Gradient Portrait Cards */}
            <section className="relative scroll-reveal overflow-hidden bg-slate-50 dark:bg-[#06080f] py-24 px-6">

                {/* Subtle dot grid */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.35] dark:opacity-[0.06]"
                    style={{ backgroundImage: 'radial-gradient(#3994fa 0.75px, transparent 0.75px)', backgroundSize: '28px 28px' }} />

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* ── TITLE BLOCK ── */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-medium/10 border border-brand-medium/20 mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-medium animate-pulse" />
                                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-medium">High-Velocity Production</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white uppercase leading-[0.9] tracking-tighter">
                                Creative <span className="text-brand-medium">Command</span><br />Center.
                            </h2>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed max-w-xs">
                            Bridging the gap between raw creativity and predictive ROI — at machine speed.
                        </p>
                    </div>

                    {/* ── THREE PORTRAIT CARDS ── */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            {
                                num: '01',
                                label: 'Production',
                                title: 'Cinematic\nHigh-Fi',
                                desc: 'Studio-grade video production built for rapid 3-second hooks that arrest attention and drive conversion before the scroll.',
                                icon: Layers,
                                metric: '3s',
                                metricLabel: 'Hook Window',
                                bg: 'linear-gradient(160deg, #0f2a4a 0%, #0a1628 40%, #061020 100%)',
                                accent: '#1d4ed8',
                                glow: 'rgba(29,78,216,0.3)',
                            },
                            {
                                num: '02',
                                label: 'Psychology',
                                title: 'Behavioral\nDesign',
                                desc: 'Landing experiences architected with neuro-psychological persuasion principles, cognitive trigger mapping, and zero-friction flows.',
                                icon: Layout,
                                metric: '↑42%',
                                metricLabel: 'Avg. CVR Lift',
                                bg: 'linear-gradient(160deg, #0a2e35 0%, #061e24 40%, #040f12 100%)',
                                accent: '#0891b2',
                                glow: 'rgba(8,145,178,0.3)',
                            },
                            {
                                num: '03',
                                label: 'Analytical',
                                title: 'Iterative\nTesting',
                                desc: 'Constant A/B/C testing at velocity — a 24/7 data loop that kills losers fast and compounds winning signals every cycle.',
                                icon: Activity,
                                metric: '200+',
                                metricLabel: 'Variants / Month',
                                bg: 'linear-gradient(160deg, #0d2040 0%, #091530 40%, #050c1e 100%)',
                                accent: '#3994fa',
                                glow: 'rgba(63,143,204,0.3)',
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="relative rounded-3xl overflow-hidden flex flex-col cursor-default group hover:-translate-y-2 transition-transform duration-300"
                                style={{
                                    background: card.bg,
                                    minHeight: '440px',
                                    boxShadow: `0 20px 60px -10px ${card.glow}, 0 0 0 1px rgba(255,255,255,0.06)`,
                                }}
                            >
                                {/* Card inner glow on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-3xl"
                                    style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${card.glow} 0%, transparent 70%)` }} />

                                {/* Top accent line */}
                                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)` }} />

                                {/* Content */}
                                <div className="relative flex flex-col h-full p-8">

                                    {/* Number watermark */}
                                    <div className="absolute top-4 right-6 text-[100px] font-black leading-none select-none pointer-events-none"
                                        style={{ color: 'rgba(255,255,255,0.04)', fontVariantNumeric: 'tabular-nums' }}>
                                        {card.num}
                                    </div>

                                    {/* Icon + label */}
                                    <div className="flex items-center gap-3 mb-auto">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                                            style={{ background: `${card.accent}22`, border: `1px solid ${card.accent}44` }}>
                                            <card.icon className="w-5 h-5" style={{ color: card.accent }} />
                                        </div>
                                        <span className="text-[8px] font-black uppercase tracking-[0.3em]" style={{ color: `${card.accent}99` }}>
                                            {card.label}
                                        </span>
                                    </div>

                                    {/* Spacer */}
                                    <div className="flex-1 min-h-[80px]" />

                                    {/* Title */}
                                    <h3 className="text-3xl font-black text-white uppercase leading-[1.05] tracking-tight mb-4 whitespace-pre-line">
                                        {card.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[11px] font-medium leading-relaxed text-white/40 mb-6 group-hover:text-white/60 transition-colors">
                                        {card.desc}
                                    </p>

                                    {/* Metric pill — frosted glass */}
                                    <div className="flex items-center justify-between px-5 py-4 rounded-2xl backdrop-blur-md"
                                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        <div>
                                            <p className="text-2xl font-black text-white leading-none">{card.metric}</p>
                                            <p className="text-[7px] font-bold uppercase tracking-widest text-white/40 mt-1">{card.metricLabel}</p>
                                        </div>
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                                            style={{ background: card.accent }}>
                                            <ArrowRight className="w-3.5 h-3.5 text-white" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── STAT BAR ── */}
                    <div className="mt-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 dark:divide-white/5 bg-white dark:bg-white/[0.02] rounded-2xl border border-slate-100 dark:border-white/5 overflow-hidden">
                        {[
                            { value: '₹10M+', label: 'Ad Spend Managed' },
                            { value: '4.8×', label: 'Average ROAS' },
                            { value: '500K+', label: 'Conversions Generated' },
                            { value: '95%', label: 'Client Retention' },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center justify-center px-6 py-5 hover:bg-brand-medium/5 dark:hover:bg-brand-medium/10 transition-colors">
                                <p className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-none">{stat.value}</p>
                                <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400 mt-2 text-center">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* 12. Technology & Tools Stack */}
            <section className="py-24 px-6 bg-white dark:bg-[#030712] relative overflow-hidden scroll-reveal">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-32">
                        <div className="max-w-md w-full relative shrink-0">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-500">Infrastructure</span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 uppercase leading-[0.9]">
                                THE <span className="text-brand-medium">GROWTH</span> <br /> STACK.
                            </h3>
                            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                We utilize the world's most advanced marketing platforms and tracking technologies to ensure your business stays ahead of the curve.
                            </p>
                        </div>
                        <div className="w-full lg:flex-1">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                                {tools.map((tool, i) => (
                                    <div key={i} className="flex flex-col items-center justify-center h-32 md:h-40 rounded-[2rem] bg-white dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 transition-all w-full group hover:bg-slate-50 dark:hover:bg-white/5 hover:border-brand-medium/30 hover:-translate-y-1">
                                        <div className="w-10 h-10 md:w-14 md:h-14 mb-4 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                                            <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 pointer-events-none" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                                        </div>
                                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 text-center group-hover:text-brand-medium transition-colors">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 13. ROI & Reporting System */}
            <section className="py-24 md:py-32 px-6 bg-white dark:bg-[#030712] relative overflow-hidden scroll-reveal">
                {/* Background Decor */}
                <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand-medium/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#3994fa]/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                        
                        {/* Left Column: Heading + Features + Graph */}
                        <div className="lg:col-span-7 space-y-12">
                            <div className="space-y-6">
                                <span className="text-brand-medium text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Total Transparency</span>
                                <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-[0.95] text-slate-900 dark:text-white">
                                    ROI & Reporting <br /> <span className="text-brand-medium italic">System.</span>
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-medium max-w-xl">
                                    We provide real-time data clarity, ensuring every marketing dollar is tracked, optimized, and delivering measurable impact.
                                </p>
                            </div>

                            {/* 4 Mini Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { title: "Weekly Reports", icon: FileSpreadsheet, desc: "Detailed performance breakdown" },
                                    { title: "KPI Tracking", icon: Target, desc: "Custom goals monitoring" },
                                    { title: "ROAS Monitoring", icon: Activity, desc: "Direct revenue impact analysis" },
                                    { title: "Real-Time Data", icon: Gauge, desc: "24/7 Live dashboard access" }
                                ].map((item, i) => (
                                    <motion.div 
                                        key={i} 
                                        whileHover={{ y: -5 }}
                                        className="p-5 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 rounded-2xl flex items-center gap-4 group transition-all hover:bg-white dark:hover:bg-white/5 hover:shadow-xl hover:shadow-brand-medium/5"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-brand-medium/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <item.icon className="w-5 h-5 text-brand-medium" />
                                        </div>
                                        <div>
                                            <span className="text-[11px] font-black uppercase tracking-tight block text-slate-900 dark:text-white">
                                                {item.title}
                                            </span>
                                            <span className="text-[9px] text-slate-400 font-medium">{item.desc}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Large Graph Visualization */}
                            <div className="relative group pt-4">
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="relative rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl bg-white dark:bg-[#070b14] p-5 sm:p-8"
                                >
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                        </div>
                                        <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                                            Campaign Performance Index
                                        </div>
                                    </div>
                                    
                                    <div className="aspect-[16/9] md:aspect-[21/9] bg-slate-50/50 dark:bg-white/[0.02] rounded-2xl relative overflow-hidden p-6 md:p-10 border border-slate-100 dark:border-white/5">
                                        <div className="flex justify-between items-end h-full gap-2 md:gap-4 relative z-10">
                                            {[60, 40, 85, 50, 95, 75, 100].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: `${h}%` }}
                                                    transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                                    className="flex-1 bg-gradient-to-t from-brand-medium via-brand-medium to-[#3994fa] rounded-t-lg relative group/bar shadow-[0_0_20px_rgba(57,148,250,0.15)]"
                                                >
                                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[8px] font-black px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-all scale-75 group-hover/bar:scale-100">
                                                        {h}%
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                        
                                        {/* Grid Lines */}
                                        <div className="absolute inset-x-0 bottom-0 h-full flex flex-col justify-between opacity-[0.03] pointer-events-none p-6 md:p-10">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className="w-full h-px bg-slate-900 dark:bg-white" />
                                            ))}
                                        </div>
                                        
                                        {/* Bottom Fade */}
                                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-[#070b14] to-transparent pointer-events-none z-20" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Right Column: Service Cards */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="pb-4">
                                <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Omni-Channel Synergy</h3>
                                <div className="h-1 w-12 bg-brand-medium rounded-full" />
                            </div>
                            
                            {[
                                { t: 'Content Creation', link: '/services/content-creation', d: 'High-converting visuals and cinematic ad creatives engineered for maximum engagement.', icon: Share2 },
                                { t: 'Social Media Handling', link: '/services/social-media-handling', d: 'Strategic community management and organic scaling across all social platforms.', icon: Instagram },
                                { t: 'App Development', link: '/services/app-development', d: 'Performance-first custom applications built for seamless user journeys and scaling.', icon: Code2 }
                            ].map((service, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={service.link}
                                        className="block p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-brand-medium/40 hover:bg-white dark:hover:bg-white/[0.04] transition-all group relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-medium/5 blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform" />
                                        
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-brand-medium/30 transition-all shadow-sm">
                                                <service.icon className="w-6 h-6 text-brand-medium" />
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand-medium group-hover:translate-x-1 transition-all" />
                                        </div>
                                        
                                        <h4 className="text-xl font-black uppercase mb-3 text-slate-900 dark:text-white group-hover:text-brand-medium transition-colors">{service.t}</h4>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-medium line-clamp-2">{service.d}</p>
                                        
                                        <div className="flex items-center text-brand-medium font-black text-[10px] uppercase tracking-widest gap-2">
                                            Explore Service <ArrowRight className="w-3.5 h-3.5" />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>

            {/* 14. Free Audit / Consultation Form Section (The Command Center Redesign) */}
            <section className="py-32 px-6 bg-white dark:bg-[#030712] relative overflow-hidden transition-colors duration-300">
                {/* Immersive Background */}
                <div className="absolute inset-0 bg-[radial-gradient(#3994fa_0.5px,transparent_0.5px)] bg-[size:32px_32px] opacity-[0.05] dark:opacity-[0.03]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-medium/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        {/* Left Content: Value Prop & Visuals */}
                        <div className="lg:col-span-6">
                            <div>
                                <span className="text-brand-medium text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Immediate Value</span>
                                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase leading-[0.95] md:leading-[0.9] tracking-tighter mb-8">
                                    The <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-medium">Performance</span> <br />
                                    Command Center.
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed max-w-xl mb-12">
                                    We don't just "talk" growth. We build the architecture for it. Get a detailed breakdown of your current gaps and a roadmap to hit your next revenue milestone.
                                </p>

                                {/* Floating Stat Slates */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Audit Time", value: "24-48h", icon: Zap },
                                        { label: "Data Points", value: "150+", icon: Activity },
                                        { label: "ROI Potential", value: "Significant", icon: TrendingUp },
                                        { label: "Cost", value: "FREE", icon: DollarSign }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 backdrop-blur-sm flex items-center gap-4 group hover:bg-white dark:hover:bg-white/10 transition-all shadow-sm dark:shadow-none">
                                            <div className="w-10 h-10 rounded-xl bg-brand-medium/10 flex items-center justify-center">
                                                <stat.icon className="w-5 h-5 text-brand-medium" />
                                            </div>
                                            <div>
                                                <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">{stat.label}</p>
                                                <p className="text-sm font-black text-slate-900 dark:text-white">{stat.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Content: The Form Card */}
                        <div className="lg:col-span-6 relative">
                            {/* Decorative Elements */}
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-medium/10 blur-2xl rounded-full" />
                            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-medium/10 blur-3xl rounded-full" />

                            <div
                                className="relative bg-white/70 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-medium/20 to-transparent blur-xl scale-0 group-hover:scale-150 transition-transform duration-400" />

                                <div className="mb-10 text-center lg:text-left">
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">Initialize Your Audit</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Connect with our growth engineers today.</p>
                                </div>

                                <form onSubmit={handleAuditSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-brand-medium ml-1">Company Name</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Acme Scaling"
                                                value={auditFormData.companyName}
                                                onChange={(e) => setAuditFormData({ ...auditFormData, companyName: e.target.value })}
                                                className="w-full bg-slate-50 dark:bg-[#030712]/50 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-6 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-medium/20 focus:border-brand-medium/40 transition-all font-medium"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-brand-medium ml-1">Current ROAS</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. 2.5x"
                                                className="w-full bg-slate-50 dark:bg-[#030712]/50 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-6 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-medium/20 focus:border-brand-medium/40 transition-all font-medium"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-brand-medium ml-1">Website URL</label>
                                        <div className="relative">
                                            <Globe className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-600" />
                                            <input
                                                type="url"
                                                placeholder="https://yourbrand.com"
                                                value={auditFormData.websiteURL}
                                                onChange={(e) => setAuditFormData({ ...auditFormData, websiteURL: e.target.value })}
                                                className="w-full bg-slate-50 dark:bg-[#030712]/50 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-medium/20 focus:border-brand-medium/40 transition-all font-medium"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-brand-medium ml-1">Monthly Budget</label>
                                            <BudgetSelect 
                                                value={auditFormData.budget} 
                                                onChange={(val) => setAuditFormData({ ...auditFormData, budget: val })} 
                                                className="w-full bg-slate-50 dark:bg-[#030712]/50 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-6 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-medium/20 focus:border-brand-medium/40 transition-all font-medium appearance-none cursor-pointer"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-brand-medium ml-1">Growth Goal</label>
                                            <select value={auditFormData.growthGoal} onChange={(e) => setAuditFormData({ ...auditFormData, growthGoal: e.target.value })} className="w-full bg-slate-50 dark:bg-[#030712]/50 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-6 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-medium/20 focus:border-brand-medium/40 transition-all font-medium appearance-none cursor-pointer">
                                                <option value="" disabled className="bg-white dark:bg-[#030712]">Primary Objective</option>
                                                <option value="roas" className="bg-white dark:bg-[#030712]">Maximize ROAS</option>
                                                <option value="scale" className="bg-white dark:bg-[#030712]">Vertical Scaling</option>
                                                <option value="churn" className="bg-white dark:bg-[#030712]">Reduce Churn</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button className="w-full px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-90 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] sm:text-[13px] shadow-lg shadow-[#3994fa]/25 flex items-center justify-center gap-3 transition-all hover:-translate-y-1">
                                        <span className="relative z-10">Request Data Audit</span>
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                                    </button>

                                    <div className="flex items-center justify-center gap-2 pt-4 border-t border-slate-100 dark:border-white/5">
                                        <Lock className="w-3 h-3 text-slate-400 dark:text-slate-600" />
                                        <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-600">Secure Transmission Encrypted</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <CaseStudies 
                studies={CASE_STUDIES} 
                subtitle="Performance Metrics" 
                title="Scaling Brands with Precision."
                themeColor="#3994fa"
            />

            {/* 15. Final Strong CTA Section */}
            <section className="py-12 px-6 mb-12 scroll-reveal">
                <div className="max-w-7xl mx-auto relative rounded-[3rem] bg-gradient-to-br from-brand-medium via-brand-medium to-brand-medium p-10 md:p-16 overflow-hidden text-[#030712] text-center shadow-[0_30px_100px_rgba(63,143,204,0.2)]">
                    {/* Static glow for performance */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[40px] rounded-full" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                            Let's Build Campaigns <br /> <span className="text-white">That Actually Convert</span>
                        </h2>
                        <p className="text-sm md:text-base font-bold uppercase tracking-widest mb-10 opacity-80">
                            Stop Guessing. Start Scaling Profitably.
                        </p>
                        <Link href="/contact" className="px-6 sm:px-10 py-4 sm:py-5 bg-slate-900 text-white hover:bg-gradient-to-r hover:from-[#3994fa] hover:to-[#004aad] rounded-2xl font-black text-[11px] sm:text-[13px] uppercase tracking-widest transition-all shadow-2xl flex items-center gap-2 mx-auto group w-fit">
                            Start Your Growth Journey <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />


        </main >
    );
};

// Export removed as it is now at the top
