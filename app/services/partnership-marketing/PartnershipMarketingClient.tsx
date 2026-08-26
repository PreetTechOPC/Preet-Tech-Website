"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users,
    TrendingUp,
    Shield,
    Globe,
    Zap,
    CheckCircle2,
    ArrowRight,
    MessageSquare,
    Building2,
    Briefcase,
    Mail,
    User,
    Phone,
    Handshake,
    Rocket,
    BarChart3,
    HeartHandshake,
    PieChart,
    ChevronRight,
    Target,
    Layers,
    MousePointerClick,
    LineChart,
    Share2,
    CreditCard,
    ExternalLink,
    Search,
    BarChart,
    Check,
    Play,
    X,
    ChevronDown,
    Activity
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Footer from '@/components/Footer';
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


export default function PartnershipMarketing() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Lead Form State
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        countryCode: '+91',
        budget: 'Revenue Share',
        industry: 'Not specified',
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
                    service: 'Partnership Marketing'
                })
            });
            if (res.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', businessName: '', email: '', phone: '', countryCode: '+91', budget: 'Revenue Share', industry: 'Not specified' });
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus('error');
        }
    };

    // Initial theme setup and mount check
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

    if (!mounted) {
        return <div className="min-h-screen bg-background" />;
    }


    const whatWeDoItems = [
        {
            title: "We connect complementary brands",
            desc: "Finding the perfect synergy between products to unlock new audiences.",
            icon: Share2
        },
        {
            title: "We structure win-win revenue-sharing deals",
            desc: "Creating transparent, performance-based agreements that benefit everyone.",
            icon: PieChart
        },
        {
            title: "We execute full marketing campaigns",
            desc: "From creative design to distribution, we handle the entire launch process.",
            icon: Rocket
        },
        {
            title: "We manage the sales pipeline",
            desc: "Ensuring every lead is captured and converted through optimized funnels.",
            icon: Target
        },
        {
            title: "We track and optimize performance",
            desc: "Real-time data monitoring to scale what works and cut what doesn't.",
            icon: LineChart
        }
    ];

    const whyPreetTech = [
        {
            title: "Performance-Based Model",
            desc: "Zero upfront risk. We only win when you win. Our interests are perfectly aligned with your growth.",
            icon: TrendingUp
        },
        {
            title: "Strategic Partner Matchmaking",
            desc: "We don't just find partners; we find the RIGHT partners that complement your brand's DNA.",
            icon: Users
        },
        {
            title: "Full Campaign Execution",
            desc: "Our in-house team of experts handles strategy, creative, and technical implementation.",
            icon: Zap
        },
        {
            title: "Transparent Revenue Tracking",
            desc: "Get access to real-time dashboards showing every sale and commission generated.",
            icon: BarChart3
        },
        {
            title: "Long-term Scalable Partnerships",
            desc: "We build engines that grow over time, creating sustainable secondary revenue streams.",
            icon: Layers
        }
    ];

    const steps = [
        {
            step: "01",
            title: "Identify Complementary Brand",
            desc: "We audit your brand and match you with high-affinity partners."
        },
        {
            step: "02",
            title: "Structure Revenue-Sharing Agreement",
            desc: "Transparent contracts built on shared success and clear milestones."
        },
        {
            step: "03",
            title: "Launch Joint Campaign",
            desc: "High-impact execution across social, email, and web channels."
        },
        {
            step: "04",
            title: "Drive Targeted Traffic",
            desc: "Aggressive user acquisition targeting the partner's core audience."
        },
        {
            step: "05",
            title: "Convert and Track Revenue",
            desc: "Optimized funnels and precision tracking for every conversion."
        },
        {
            step: "06",
            title: "Optimize and Scale",
            desc: "Data-driven iteration to double down on high-performing segments."
        }
    ];

    const audiences = [
        {
            title: "E-commerce Brands",
            desc: "Scale your sales through curated product bundles and co-marketing with brands your customers love.",
            benefit: "Increase AOV & Market Reach"
        },
        {
            title: "SaaS Companies",
            desc: "Integrate with complementary tools and leverage joint workflows to reduce churn and find new users.",
            benefit: "Drive Recursive Revenue"
        },
        {
            title: "D2C Brands",
            desc: "Bypass high ad costs by tapping into established communities through strategic brand collaborations.",
            benefit: "Lower CAC Significantly"
        },
        {
            title: "Course Creators",
            desc: "Partner with influencers and relevant platforms to sell your knowledge to a 'warmed-up' audience.",
            benefit: "High-Margin Scale"
        },
        {
            title: "IT Companies",
            desc: "Offer more value to your clients by implementing revenue-sharing structures that boost their ROI.",
            benefit: "Expand Service Portfolio"
        },
        {
            title: "Service Businesses",
            desc: "Build a lead-gen engine through referral partnerships with businesses in your professional circle.",
            benefit: "Predictable Lead Flow"
        }
    ];

    const collabTypes = [
        {
            title: "Direct Brand-to-Brand Sales Partnerships",
            desc: "We facilitate deals where two brands directly promote each other's products for a split of the revenue.",
            result: "Instant access to a trust-built audience."
        },
        {
            title: "Joint Digital Marketing Campaigns",
            desc: "Collaborative ads, email blasts, and content series that leverage the combined strengths of both parties.",
            result: "2X the creative power, 1/2 the ad spend."
        },
        {
            title: "Revenue-Share Joint Ventures",
            desc: "Deep integration where we build a new product or service specifically for the combined audience.",
            result: "Creation of a new, high-value asset."
        },
        {
            title: "Custom Partnership Strategy",
            desc: "Bespoke plans tailored to unique business models that don't fit the standard mold.",
            result: "Innovative growth beyond traditional routes."
        },
        {
            title: "Full Campaign Execution",
            desc: "Don't just plan—perform. We handle everything from copy to technical tracking setup.",
            result: "Plug-and-play growth engine."
        },
        {
            title: "Sales Performance Tracking",
            desc: "Precision instrumentation to ensure every dollar of revenue is attributed correctly.",
            result: "100% Transparency & Trust."
        }
    ];

    const revenueModels = [
        {
            name: "Pure Revenue Share",
            setup: "No Upfront Cost",
            share: "15-30% of Sales",
            features: [
                "Zero risk entry",
                "Full strategy & matching",
                "Execution on commission",
                "Best for high-margin brands"
            ],
            bestFor: "Proven products ready to scale."
        },
        {
            name: "Hybrid Model",
            setup: "Small Setup Fee",
            share: "5-10% of Sales",
            features: [
                "Lower commission share",
                "Priority resource allocation",
                "Custom creative assets",
                "Predictable cost structure"
            ],
            bestFor: "Businesses wanting deeper involvement.",
            highlight: true
        },
        {
            name: "Strategic JV Model",
            setup: "Custom Terms",
            share: "Varies (Profit Split)",
            features: [
                "Long-term equity/asset focus",
                "Dedicated growth team",
                "Full infrastructure support",
                "Co-branded product development"
            ],
            bestFor: "Enterprise & High-Growth Startups."
        }
    ];

    return (
        <main className="relative selection:bg-brand-cyan/30 overflow-x-clip bg-background text-foreground dark:bg-[#020617] transition-colors duration-300 font-sans">
            <Navbar isDark={isDarkMode} toggleTheme={toggleTheme} />

            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 lg:hidden border-t border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
                <Link href="/contact" className="block w-full px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-lg active:scale-95 transition-transform text-center">
                    Book Strategy Call
                </Link>
            </div>

            {/* 1️⃣ Hero Section */}
            <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />
                <ThreeSphereScene />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                    <div className="space-y-6 lg:space-y-8 hero-content text-center lg:text-left">
                        <span
                            className="inline-block px-4 py-1 rounded-full bg-[#3994fa]/10 dark:bg-[#3994fa]/10 text-[#3994fa] dark:text-[#3994fa] text-[10px] md:text-xs font-bold uppercase tracking-widest border border-[#3994fa]/20 dark:border-[#3994fa]/20"
                        >
                            Performance-Driven Partnerships
                        </span>
                        <h1
                            className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-slate-900 dark:text-white"
                        >
                            Partnership Marketing <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3994fa] to-[#1e293b] dark:to-white">Starting on Revenue Share.</span>
                        </h1>
                        <p
                            className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium"
                        >
                            Grow your sales with zero upfront risk. We bridge the gap between complementary brands, driving measurable results where you only pay on performance.
                        </p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Link
                                href="/case-studies/partnership-marketing"
                                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-90 text-white rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-[#3994fa]/25 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                            >
                                Case Studies <ArrowRight className="w-4 h-4" />
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
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Monthly Revenue</label>
                                    <div className="relative group">
                                        <CreditCard strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3994fa] transition-colors pointer-events-none" />
                                        <select required value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-10 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all appearance-none text-slate-700 dark:text-slate-200 text-sm cursor-pointer">
                                            <option value="Revenue Share">Pure Revenue Share</option>
                                            <option value="₹1L - ₹5L">₹1L - ₹5L</option>
                                            <option value="₹5L - ₹10L">₹5L - ₹10L</option>
                                            <option value="₹10L+">₹10L+</option>
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
                    </motion.div>
                </div>
            </section>


            {/* 2️⃣ What We Do: Partnership Marketing */}
            <section className="py-32 px-6 relative overflow-hidden bg-slate-50 dark:bg-slate-950/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-brand-medium dark:text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-slate-900 dark:text-white text-balance">
                            The Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium">Growth Engine.</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium text-lg">
                            We don't just 'do' marketing. We build ecosystems of high-performance collaborations where everyone wins.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {whatWeDoItems.map((item, i) => (
                            <motion.div
                                key={i}
                                className="group relative p-8 rounded-[2.5rem] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-brand-cyan/30 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center mb-8 border border-brand-cyan/5 group-hover:bg-brand-cyan group-hover:text-slate-950 transition-all duration-300">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-lg font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4 group-hover:text-brand-cyan transition-colors">{item.title}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3️⃣ Why Preet Tech OPC Private Limited for Your Collabs */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="text-brand-medium dark:text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">The Advantage</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[1.1] mb-8 text-slate-900 dark:text-white">
                            Why Choose <span className="italic text-brand-cyan">Preet Tech OPC Private Limited?</span>
                        </h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-12">
                            Traditional it companies sell 'hours' and 'services.' We sell outcomes. Our authority is built on real sales data and high-trust partnerships.
                        </p>

                        <div className="space-y-6">
                            {whyPreetTech.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex gap-6 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-cyan group-hover:text-slate-950 transition-all">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-black uppercase tracking-tight text-slate-900 dark:text-white mb-1 group-hover:text-brand-cyan transition-colors">{item.title}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-10 bg-brand-cyan/20 blur-[60px] rounded-full pointer-events-none" />
                        <div className="relative p-2 bg-gradient-to-br from-slate-200 dark:from-white/10 to-transparent rounded-[3rem] shadow-xl">
                            <div className="bg-white dark:bg-[#0a0f1a] rounded-[2.8rem] p-10 md:p-14 border border-slate-100 dark:border-white/5 overflow-hidden">
                                <div className="space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black text-brand-cyan uppercase tracking-[0.3em]">IT Company Authority</p>
                                            <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">Sales Impact</p>
                                        </div>
                                        <BarChart3 className="w-8 h-8 text-brand-cyan" />
                                    </div>

                                    <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                                        <div className="text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">₹14M+</div>
                                        <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Revenue Generated for Partners</p>
                                        <div className="mt-8 flex gap-2">
                                            {[1, 2, 3, 4, 5, 6].map(i => (
                                                <div key={i} className="h-12 flex-1 bg-brand-cyan/10 rounded-lg relative overflow-hidden">
                                                    <motion.div
                                                        
                                                        
                                                        
                                                        
                                                        className="absolute bottom-0 left-0 right-0 bg-brand-cyan"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-5 rounded-[1.5rem] border border-dashed border-slate-300 dark:border-white/10 justify-center">
                                        <Shield className="w-5 h-5 text-brand-cyan" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white">100% Performance-Aligned</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4️⃣ How Our Partnerships Boost Your Sales */}
            <section className="py-32 px-6 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#3994fa_0%,transparent_50%)]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-balance">
                            The Roadmap to <br />
                            <span className="text-brand-cyan italic">Scale.</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            A streamlined, repeatable process that removes guesswork from growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                className="group relative"
                            >
                                <div className="text-8xl font-black text-white/5 absolute -top-8 -left-4 pointer-events-none group-hover:text-brand-cyan/10 transition-colors">
                                    {step.step}
                                </div>
                                <div className="relative z-10 pl-4 border-l-2 border-brand-cyan/30 group-hover:border-brand-cyan transition-colors">
                                    <h4 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:translate-x-2 transition-transform">{step.title}</h4>
                                    <p className="text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <div className="inline-flex items-center gap-6 p-2 pr-8 rounded-full bg-white/5 border border-white/10">
                            <div className="w-12 h-12 rounded-full bg-brand-cyan text-slate-950 flex items-center justify-center">
                                <MousePointerClick className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-black uppercase tracking-widest text-white/80">Reduce Risk. Increase Predictability.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5️⃣ Perfect Businesses for Our Service */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-brand-medium dark:text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Target Industries</span>
                            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none text-slate-900 dark:text-white">
                                Built for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium italic pr-4">Leaders.</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 max-w-sm text-lg font-medium">
                            If you have a high-quality product and want to scale without the 'ad-spend burden', this is for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {audiences.map((aud, i) => (
                            <motion.div
                                key={i}
                                className="group p-10 rounded-[3rem] bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 hover:border-brand-cyan/30 transition-all duration-300 shadow-lg"
                            >
                                <div className="mb-10 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 w-fit border border-slate-100 dark:border-white/10 group-hover:scale-110 transition-transform">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        {i === 0 && <CreditCard className="w-10 h-10 text-brand-cyan" />}
                                        {i === 1 && <Layers className="w-10 h-10 text-brand-cyan" />}
                                        {i === 2 && <Zap className="w-10 h-10 text-brand-cyan" />}
                                        {i === 3 && <User className="w-10 h-10 text-brand-cyan" />}
                                        {i === 4 && <Building2 className="w-10 h-10 text-brand-cyan" />}
                                        {i === 5 && <CheckCircle2 className="w-10 h-10 text-brand-cyan" />}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4">{aud.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">{aud.desc}</p>
                                <div className="pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-cyan">{aud.benefit}</span>
                                    <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-700 group-hover:text-brand-cyan transition-colors" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6️⃣ Collab Types We Drive */}
            <section className="py-32 px-6 bg-slate-50 dark:bg-slate-950/40 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-slate-900 dark:text-white">
                            Collab <span className="text-brand-cyan">Structures.</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
                            Diversified partnership models to capture every revenue opportunity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {collabTypes.map((type, i) => (
                            <motion.div
                                key={i}
                                className="flex gap-8 p-10 rounded-[2.5rem] bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 hover:shadow-xl transition-all group"
                            >
                                <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan font-black text-2xl group-hover:bg-brand-cyan group-hover:text-slate-950 transition-all">
                                    {i + 1}
                                </div>
                                <div>
                                    <h4 className="text-xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4">{type.title}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 italic">"{type.desc}"</p>
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                                        Result: {type.result}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7️⃣ Our % Revenue Share Models */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-brand-medium dark:text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Pricing Models</span>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-slate-900 dark:text-white">
                            Choose Your <span className="italic">Path.</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium text-balance">
                            Transparent sharing structures with built-in tracking for absolute clarity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                        {revenueModels.map((model, i) => (
                            <motion.div
                                key={i}
                                className={`relative p-12 rounded-[3.5rem] flex flex-col transition-all duration-300 ${model.highlight ? 'bg-slate-900 text-white scale-105 z-10 shadow-2xl' : 'bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-white/5'}`}
                            >
                                {model.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-brand-cyan text-slate-950 font-black text-[10px] uppercase tracking-[0.2em] whitespace-nowrap">
                                        Most Popular
                                    </div>
                                )}
                                <div className="mb-10">
                                    <h3 className={`text-2xl font-black uppercase tracking-tight mb-2 ${model.highlight ? 'text-brand-cyan' : 'text-slate-900 dark:text-white'}`}>{model.name}</h3>
                                    <div className="text-4xl font-black mb-1">{model.setup}</div>
                                    <div className={`text-sm font-black uppercase tracking-widest ${model.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{model.share}</div>
                                </div>

                                <div className="space-y-6 mb-12 flex-1">
                                    {model.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <Check className={`w-5 h-5 shrink-0 ${model.highlight ? 'text-brand-cyan' : 'text-brand-medium'}`} />
                                            <span className={`text-sm font-medium ${model.highlight ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className={`pt-8 border-t ${model.highlight ? 'border-white/10' : 'border-slate-100 dark:border-white/5'}`}>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Ideal For</div>
                                    <p className={`text-sm font-bold ${model.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{model.bestFor}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 p-10 rounded-[2.5rem] bg-brand-cyan/5 border border-brand-cyan/20">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-6">
                                <Search className="w-10 h-10 text-brand-cyan" />
                                <div>
                                    <h4 className="text-xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-1">Full Transparency System</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">All partnerships are managed through our proprietary tracking platform with custom dashboards.</p>
                                </div>
                            </div>
                            <button className="px-8 py-4 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-95 text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all">
                                Learn About Tracking
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8️⃣ Free Collab Strategy Call Section */}
            <section className="py-32 px-6 relative overflow-hidden bg-slate-100 dark:bg-slate-950/20">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="w-24 h-24 rounded-full bg-brand-cyan/20 flex items-center justify-center mx-auto mb-12 border border-brand-cyan/30">
                        <HeartHandshake className="w-12 h-12 text-brand-cyan" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8 text-slate-900 dark:text-white leading-[1.1] text-balance">
                        Let’s Build a Partnership <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium">That Pays You Back.</span>
                    </h2>
                    <p className="text-xl text-slate-500 dark:text-slate-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                        We limit the number of active partnerships we manage to ensure maximum focus and execution. Skip the guesswork and tap into zero-risk performance-driven growth.
                    </p>
                    <Link href="/contact" className="inline-block px-12 py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-xl font-black text-sm uppercase tracking-widest hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#3994fa]/40">
                        Schedule Free Collab Call
                    </Link>
                </div>
            </section>

            {/* 9️⃣ Final High-Impact CTA Section */}
            <section className="py-24 md:py-48 px-6 relative overflow-hidden bg-[#050608] text-white text-center">
                {/* Background Decorations */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <motion.div
                        
                        
                        className="absolute -top-[50%] -left-[10%] w-[800px] h-[800px] bg-[#3994fa]/10 blur-[150px] rounded-full"
                    />
                    <motion.div
                        
                        
                        className="absolute -bottom-[50%] -right-[10%] w-[600px] h-[600px] bg-[#3994fa]/10 blur-[150px] rounded-full"
                    />

                    {/* Floating Partnership Nodes */}
                    {[Handshake, TrendingUp, Users, Target].map((Icon, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 10, -10, 0],
                                opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{
                                duration: 5 + i,
                                repeat: Infinity,
                                delay: i * 2,
                                ease: "easeInOut"
                            }}
                            className={`absolute hidden md:block text-[#3994fa] ${i === 0 ? 'top-1/4 left-[15%]' :
                                i === 1 ? 'bottom-1/4 left-[20%]' :
                                    i === 2 ? 'top-1/3 right-[15%]' : 'bottom-1/3 right-[20%]'
                                }`}
                        >
                            <Icon size={40 + i * 10} strokeWidth={1} />
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="space-y-12">
                        <motion.div



                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3994fa]/10 border border-[#3994fa]/20 text-[#3994fa] text-[10px] font-bold uppercase tracking-[0.2em]"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3994fa] animate-pulse" />
                            Future-Proof Your Business
                        </motion.div>

                        <h2



                            className="text-4xl md:text-8xl font-black tracking-tighter leading-[1] text-balance"
                        >
                            Scale Your Brand Beyond <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3994fa] via-white to-[#3994fa] bg-[length:200%_auto] italic pr-4">Costly Ad Platforms.</span>
                        </h2>

                        {/* Animated Growth Graph */}
                        <div className="relative max-w-4xl mx-auto py-12 px-4 group">
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/5" />
                            <div className="absolute inset-x-0 top-1/4 -translate-y-1/2 h-px bg-white/[0.02]" />
                            <div className="absolute inset-x-0 top-3/4 -translate-y-1/2 h-px bg-white/[0.02]" />

                            <svg width="100%" height="160" viewBox="0 0 1000 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible relative z-10">
                                <path
                                    
                                    
                                    

                                    
                                    d="M0 150C100 145 150 140 200 110C250 80 350 120 450 90C550 60 650 70 750 30C850 -10 950 20 1000 0"
                                    stroke="url(#growthGradient)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient id="growthGradient" x1="0" y1="150" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3994fa" stopOpacity="0.2" />
                                        <stop offset="1" stopColor="#3994fa" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Glowing Peak Point */}
                            <motion.div



                                
                                className="absolute top-12 right-4 md:right-8 w-4 h-4 bg-[#3994fa] rounded-full shadow-[0_0_20px_#3994fa] z-20"
                            />
                        </div>

                        <p



                            className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed"
                        >
                            Join elite D2C brands and scaling startups that trust Preet Tech OPC Private Limited for zero-risk, high-affinity, and 100% performance-aligned collaborations.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                            <Link href="/contact" className="w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-2xl font-black text-[11px] sm:text-[13px] uppercase tracking-widest hover:opacity-90 transition-all shadow-xl shadow-[#3994fa]/20 flex items-center justify-center gap-3">
                                Start Your Partnership <Rocket className="w-4 h-4" />
                            </Link>
                            <a href="/contact" className="w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-5 bg-transparent border border-white/20 text-white rounded-2xl font-black text-[11px] sm:text-[13px] uppercase tracking-widest hover:bg-gradient-to-r hover:from-[#3994fa] hover:to-[#004aad] hover:border-transparent hover:opacity-90 transition-all flex items-center justify-center gap-3 active:scale-95">
                                <MessageSquare className="w-4 h-4" /> Contact Growth Team
                            </a>
                        </div>
                    </div>

                    <div className="mt-32 pt-20 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {[
                            { v: '0%', l: 'Upfront Risk', i: Shield },
                            { v: '100%', l: 'Sales-Aligned', i: CheckCircle2 },
                            { v: '₹14M+', l: 'Revenue Driven', i: TrendingUp },
                            { v: '50+', l: 'Active Collabs', i: Users }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}



                                
                                className="group cursor-default"
                            >
                                <div className="text-3xl md:text-5xl font-black text-[#3994fa] mb-2 group-hover:scale-110 transition-transform">{stat.v}</div>
                                <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 flex items-center justify-center gap-2">
                                    <stat.i size={12} className="opacity-50" />
                                    {stat.l}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            <Footer />


        </main>
    );
}

