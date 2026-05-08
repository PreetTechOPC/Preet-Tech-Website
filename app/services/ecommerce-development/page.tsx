"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ShoppingCart, Store, Zap, Shield, Layout, Layers, ArrowRight, User, Mail, Phone,
    Building2, ChevronRight, Activity, Target, BarChart3, TrendingUp, Search,
    Globe, CheckCircle2, Share2, Briefcase, Rocket, Plus, Minus, Code2,
    Database, Cloud, Cpu, MonitorSmartphone, Tablet, Check, Star, Settings, Headphones, Users,
    Play, CreditCard, ChevronDown, X, Globe2, Heart, Camera, Coffee, Home, Smartphone
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Footer from '@/components/Footer';
import PortfolioCarousel from '@/components/PortfolioCarousel';
import CaseStudies, { CaseStudy } from '@/components/CaseStudies';
import ThreeSphereScene from '@/components/ThreeSphere';
import PhoneInput from '@/components/PhoneInput';

const TechnicalBackground = ({ isDarkMode }: { isDarkMode: boolean }) => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
                backgroundImage: `linear-gradient(to right, #3994fa 1px, transparent 1px), linear-gradient(to bottom, #3994fa 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
            }}
        />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#3994fa]/5 blur-[48px] rounded-full opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#3994fa]/5 blur-[48px] rounded-full opacity-40" />
    </div>
);

const SOLUTIONS_DATA = [
    { t: 'Custom Ecommerce Development', d: 'Tailor-made online stores built for scale, featuring unique user journeys and high-conversion layouts.', icon: ShoppingCart, color: 'from-blue-400 to-blue-600', shadow: 'hover:shadow-blue-500/20' },
    { t: 'Shopify Development', d: 'Expert Shopify setup, theme customization, and app integration for a seamless selling experience.', icon: Store, color: 'from-green-400 to-emerald-600', shadow: 'hover:shadow-emerald-500/20' },
    { t: 'B2B Ecommerce Solutions', d: 'Complex wholesale platforms with bulk pricing, multi-vendor support, and advanced inventory management.', icon: Building2, color: 'from-brand-cyan to-brand-sky', shadow: 'hover:shadow-brand-cyan/20' },
    { t: 'Payment Gateway Integration', d: 'Securely accept payments via Stripe, PayPal, Razorpay, and more with PCI-compliant integrations.', icon: CreditCard, color: 'from-orange-400 to-amber-600', shadow: 'hover:shadow-orange-500/20' },
    { t: 'Headless Commerce', d: 'Next-gen ecommerce architectures using React/Next.js for lightning-fast performance and SEO.', icon: Zap, color: 'from-yellow-300 to-amber-500', shadow: 'hover:shadow-yellow-500/20' },
    { t: 'Inventory & Order Sync', d: 'Real-time synchronization between your online store and warehouse/ERP systems.', icon: Database, color: 'from-purple-400 to-indigo-600', shadow: 'hover:shadow-purple-500/20' }
];

const SolutionsCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const EXTENDED_DATA = [...SOLUTIONS_DATA, ...SOLUTIONS_DATA, ...SOLUTIONS_DATA];

    useEffect(() => {
        if (scrollRef.current) {
            const singleSetWidth = scrollRef.current.scrollWidth / 3;
            scrollRef.current.scrollLeft = singleSetWidth;
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current && !isDragging) {
                scrollRef.current.scrollBy({ left: 424, behavior: 'smooth' });
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

export default function EcommerceDevelopmentPage() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const CASE_STUDIES: CaseStudy[] = [
        {
            id: 'eco-1',
            title: 'Fashion Store: 300% Revenue Jump',
            client: 'TrendVibe',
            category: 'Fashion / Retail',
            description: 'A headless ecommerce store built with Next.js and Shopify, featuring AR try-on and lightning-fast checkout.',
            stats: [
                { label: 'Revenue', value: '+300%' },
                { label: 'Load Time', value: '0.6s' },
                { label: 'Conv. Rate', value: '4.5%' }
            ],
            tags: ['Next.js', 'Shopify Plus', 'Tailwind']
        },
        {
            id: 'eco-2',
            title: 'Grocery App: 50k+ Monthly Orders',
            client: 'FreshCart',
            category: 'FMCG',
            description: 'Multi-vendor grocery platform with real-time tracking, subscription models, and automated inventory.',
            stats: [
                { label: 'Orders', value: '50k+' },
                { label: 'Uptime', value: '99.99%' },
                { label: 'Retention', value: '70%' }
            ],
            tags: ['React Native', 'Node.js', 'AWS']
        }
    ];

    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        countryCode: '+91',
        industry: 'E-commerce',
        budget: '₹50k - ₹1L',
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
                    service: 'Ecommerce Development'
                })
            });
            if (res.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', businessName: '', email: '', phone: '', countryCode: '+91', industry: 'E-commerce', budget: '₹50k - ₹1L' });
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        }
    };

    return (
        <main ref={containerRef} className="relative z-10 selection:bg-brand-cyan/20 overflow-x-clip bg-[#fafafa] text-slate-900 dark:bg-[#050608] dark:text-white transition-colors duration-300 font-sans">
            <Navbar isDark={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />

            <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />
                <ThreeSphereScene />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                    <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                        <span className="inline-block px-4 py-1 rounded-full bg-[#3994fa]/10 text-[#3994fa] text-[10px] md:text-xs font-bold uppercase tracking-widest border border-[#3994fa]/20">
                            Ecommerce Website Development Company
                        </span>
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-slate-900 dark:text-white">
                            Sell Anything <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3994fa] to-blue-600 dark:to-white">Anywhere Online.</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                            Scale your business with high-performance <strong>Ecommerce Website Development</strong>. We build custom online stores, Shopify platforms, and multi-vendor marketplaces that convert.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="#consultation" className="px-8 py-4 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-full font-bold shadow-lg shadow-[#3994fa]/25 flex items-center justify-center gap-2">
                                Get Started <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/case-studies" className="px-8 py-4 bg-white/10 text-slate-900 dark:text-white rounded-full font-bold border border-slate-200 dark:border-white/10 flex items-center justify-center gap-2">
                                View Portfolio <Layout className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div id="consultation" className="relative mt-8 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none scroll-mt-32">
                        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-[2.5rem] shadow-2xl relative z-10 border border-slate-200 dark:border-slate-800">
                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                                    <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 px-6 outline-none focus:border-[#3994fa] transition-all text-sm" />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</label>
                                        <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 px-6 outline-none focus:border-[#3994fa] transition-all text-sm" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone</label>
                                        <PhoneInput value={formData.phone} onChange={(val) => setFormData({ ...formData, phone: val })} countryCode={formData.countryCode} onCountryCodeChange={(code) => setFormData({ ...formData, countryCode: code })} />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Budget Range</label>
                                    <select required value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 px-6 outline-none focus:border-[#3994fa] transition-all text-sm appearance-none">
                                        <option value="₹25k - ₹50k">₹25k - ₹50k</option>
                                        <option value="₹50k - ₹1L">₹50k - ₹1L</option>
                                        <option value="₹1L - ₹5L">₹1L - ₹5L</option>
                                        <option value="₹5L+">₹5L+</option>
                                    </select>
                                </div>
                                <button disabled={submitStatus === "loading"} type="submit" className="w-full py-4 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white font-black rounded-2xl transition-all shadow-lg hover:shadow-[#3994fa]/30 text-[13px] uppercase tracking-widest">
                                    {submitStatus === "loading" ? "Submitting..." : "Get Free Consultation"}
                                </button>
                                {submitStatus === 'success' && <p className="text-emerald-500 text-xs font-bold text-center">We will contact you shortly!</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32 bg-[#fafafa] dark:bg-[#030712] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-[#3994fa] font-bold uppercase tracking-widest text-xs">Our Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ecommerce Development Solutions.</h2>
                    </div>
                    <SolutionsCarousel />
                </div>
            </section>

            <section className="py-20 md:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-[#3994fa] font-bold uppercase tracking-widest text-xs">Why Choose Us</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Best Ecommerce Developer in Haldwani.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { t: 'High Conversion Design', d: 'We don\'t just build stores; we build machines that sell. Optimized for UX and conversion.', i: Zap },
                            { t: 'SEO Optimized', d: 'Our stores are built with SEO best practices to help you rank higher on Google Search.', i: Search },
                            { t: 'Mobile First', d: 'With 80% of shoppers on mobile, we ensure a flawless experience on every device.', i: Smartphone }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-[#3994fa]/30 transition-all">
                                <div className="w-14 h-14 rounded-2xl bg-[#3994fa]/10 flex items-center justify-center mb-6 text-[#3994fa]"><item.i className="w-7 h-7" /></div>
                                <h3 className="text-xl font-bold mb-3">{item.t}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CaseStudies studies={CASE_STUDIES} title="Ecommerce Success Stories" themeColor="#3994fa" />

            <section className="py-24 md:py-36 px-6 bg-slate-900 text-white text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10 space-y-10">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Ready to Scale Your <span className="text-[#3994fa]">Online Store?</span></h2>
                    <p className="text-slate-400 text-lg md:text-xl">Join hundreds of successful brands built by Preet Tech. Let's build your ecommerce empire today.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="#consultation" className="px-12 py-6 bg-[#3994fa] text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-[#3994fa]/20">Start Your Project</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
