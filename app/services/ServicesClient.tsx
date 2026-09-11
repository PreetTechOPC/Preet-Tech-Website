"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Globe,
    Code2,
    Smartphone,
    Palette,
    Cloud,
    BarChart3,
    ArrowRight,
    Binary,
    Cpu,
    ShieldCheck,
    Zap,
    ChevronRight,
    Rocket,
    TrendingUp
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactCTA from '../../components/ContactCTA';
import Link from 'next/link';

const SERVICE_CATEGORIES = [
    {
        name: "Development",
        tag: "TECH_CORE",
        services: [
            {
                title: "Eco Website",
                description: "Cost-effective, high-performance web presence designed for efficiency. Perfect for startups and small businesses establishing their digital footprint without compromising quality.",
                icon: Globe,
                tag: "WEB_ECO_01",
                color: "from-blue-500 to-cyan-400",
                href: "/services/eco-website",
                image: "/images/services/eco-website.png"
            },
            {
                title: "Advance Website",
                description: "Strategic digital headquarters architected for sub-100ms speeds. We build the foundation of your digital authority using React, Next.js, and modern stacks.",
                icon: Code2,
                tag: "WEB_ADV_02",
                color: "from-cyan-500 to-blue-500",
                href: "/services/advance-website",
                image: "/images/services/advance-website-modern.png"
            },
            {
                title: "Software Development",
                description: "Bespoke enterprise software engineered with full-stack precision. We build scalable tools and complex backend systems for modern business needs.",
                icon: Code2,
                tag: "CODE_03",
                color: "from-indigo-500 to-blue-600",
                href: "/services/software-development",
                image: "/images/services/software-development-modern.png"
            },
            {
                title: "App Development",
                description: "Native and cross-platform mobility solutions built for performance, retaining users through frictionless UX logic and high-performance native bridges.",
                icon: Smartphone,
                tag: "APP_04",
                color: "from-blue-400 to-indigo-500",
                href: "/services/app-development",
                image: "/images/services/app-development.png"
            }
        ]
    },
    {
        name: "Marketing",
        tag: "ROI_MATRIX",
        services: [
            {
                title: "Performance Marketing",
                description: "Data-driven growth strategies engineered to maximize conversion rates and scale revenue through precision targeting and algorithmic bidding.",
                icon: BarChart3,
                tag: "ROI_06",
                color: "from-emerald-500 to-teal-400",
                href: "/services/performance-marketing",
                image: "/images/services/performance-marketing.png"
            },
            {
                title: "Social Media Handling",
                description: "Algorithmic-first social management designed to build high-authority communities and drive organic brand equity through narrative design.",
                icon: Zap,
                tag: "SYNC_07",
                color: "from-teal-400 to-emerald-600",
                href: "/services/social-media-handling",
                image: "/images/services/social-media.png"
            },
            {
                title: "Partnership Marketing",
                description: "Collaborative scaling engines. We manage high-impact partnerships and affiliate networks that create exponential brand multipliers.",
                icon: ShieldCheck,
                tag: "ALLOY_08",
                color: "from-emerald-600 to-teal-500",
                href: "/services/partnership-marketing",
                image: "/images/services/partnership.png"
            },
            {
                title: "Content Creation",
                description: "High-fidelity cinematic and digital content engineered to capture attention and communicate complex brand narratives with precision.",
                icon: Binary,
                tag: "MEDIA_11",
                color: "from-rose-600 to-orange-500",
                href: "/services/content-creation",
                image: "/images/services/content-creation.png"
            }
        ]
    },
    {
        name: "Strategic Design & Launch",
        tag: "GENESIS_PROTOCOL",
        services: [
            {
                title: "Start Your Business",
                description: "Complete architectural foundation for new ventures. We handle the tech stack, legal framework, and scaling strategy while you build your vision.",
                icon: Rocket,
                tag: "LAUNCH_09",
                color: "from-orange-500 to-red-500",
                href: "/services/start-your-business",
                image: "/images/services/start-business.png"
            },
            {
                title: "Premium Tools",
                description: "Access high-value enterprise software licenses, templates, and digital tools at up to 95% off. Verified premium access delivered via WhatsApp confirmation.",
                icon: Cpu,
                tag: "DEALS_05",
                color: "from-indigo-600 to-cyan-500",
                href: "/services/business-tools",
                image: "/images/services/business-tools.png"
            }
        ]
    }
];

export default function ServicesClient() {
    const [theme, setTheme] = useState<'dark' | 'light'>('light');

    useEffect(() => {
        // Ensure default light mode for this page
        /* handled by next-themes */
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        if (newTheme === 'dark') {
            /* handled by next-themes */
        } else {
            /* handled by next-themes */
        }
    };

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-brand-medium/30 transition-colors duration-300">
            <Navbar isDark={theme === 'dark'} toggleTheme={toggleTheme} />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 pb-24 bg-gradient-to-b from-transparent to-slate-50/50 dark:from-transparent dark:to-slate-900/50 gpu">
                {/* Immersive Background - Optimized with radial gradients instead of heavy blurs */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div 
                        animate={{ y: [0, -20, 0], x: [0, 10, 0] }} 
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(57,148,250,0.1),transparent_70%)] rounded-full blur-[40px]" 
                    />
                    <motion.div 
                        animate={{ y: [0, 20, 0], x: [0, -10, 0] }} 
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,186,224,0.08),transparent_70%)] rounded-full blur-[40px]" 
                    />

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                </div>

                {/* Floating Elements Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, -15, 0] }}
                        transition={{ 
                            opacity: { duration: 0.8, delay: 0.1 },
                            scale: { duration: 0.8, delay: 0.1, type: "spring" },
                            rotate: { duration: 0.8, delay: 0.1 },
                            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }
                        }}
                        className="absolute top-[20%] left-[10%] xl:left-[15%] w-16 h-16 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/50 dark:border-white/10 rounded-2xl flex items-center justify-center text-brand-medium shadow-2xl"
                    >
                        <Code2 size={24} />
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0, rotate: 20 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, -20, 0] }}
                        transition={{ 
                            opacity: { duration: 0.8, delay: 0.3 },
                            scale: { duration: 0.8, delay: 0.3, type: "spring" },
                            rotate: { duration: 0.8, delay: 0.3 },
                            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.1 }
                        }}
                        className="absolute top-[25%] right-[10%] xl:right-[15%] w-20 h-20 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/50 dark:border-white/10 rounded-full flex items-center justify-center text-brand-cyan shadow-2xl"
                    >
                        <Rocket size={32} />
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0, rotate: -15 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, 15, 0] }}
                        transition={{ 
                            opacity: { duration: 0.8, delay: 0.2 },
                            scale: { duration: 0.8, delay: 0.2, type: "spring" },
                            rotate: { duration: 0.8, delay: 0.2 },
                            y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.0 }
                        }}
                        className="absolute bottom-[20%] left-[15%] xl:left-[20%] w-14 h-14 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/50 dark:border-white/10 rounded-xl flex items-center justify-center text-rose-500 shadow-2xl hidden md:flex"
                    >
                        <Palette size={20} />
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0, rotate: 15 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, 10, 0] }}
                        transition={{ 
                            opacity: { duration: 0.8, delay: 0.4 },
                            scale: { duration: 0.8, delay: 0.4, type: "spring" },
                            rotate: { duration: 0.8, delay: 0.4 },
                            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
                        }}
                        className="absolute bottom-[25%] right-[15%] xl:right-[20%] w-16 h-16 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/50 dark:border-white/10 rounded-2xl flex items-center justify-center text-emerald-500 shadow-2xl hidden md:flex"
                    >
                        <BarChart3 size={24} />
                    </motion.div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm mb-8 relative"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-slate-700 dark:text-slate-300">Our Services</span>
                    </motion.div>

                    <div className="relative inline-block w-full">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-slate-900 dark:text-white tracking-tight leading-[1.05] mb-8"
                        >
                            Digital Excellence, <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan font-black">Delivered.</span>
                        </motion.h1>
                    </div>

                    <div className="max-w-2xl mx-auto relative cursor-default">
                        {/* Decorative blur behind text */}
                        <div className="absolute inset-0 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-full -z-10" />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-12 relative z-10 px-4"
                        >
                            We architect digital ecosystems through <span className="text-brand-medium dark:text-brand-cyan font-semibold">precision engineering</span> and <span className="text-brand-cyan dark:text-blue-400 font-semibold">cinematic design</span>. Seamlessly blending logic with visual flair to solve complex challenges.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col items-center justify-center gap-8"
                        >
                            <Link href="#services-grid" className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white rounded-2xl font-bold uppercase tracking-widest text-xs md:text-sm hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-500/30 text-center">
                                <Rocket size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                Explore Capabilities
                            </Link>

                            <div className="flex items-center gap-6 opacity-60">
                                <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-slate-400 dark:to-slate-500" />
                                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                    <div className="animate-bounce">
                                        Scroll Down
                                    </div>
                                </span>
                                <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-slate-400 dark:to-slate-500" />
                            </div>
                        </motion.div>
                    </div>
                </div>



                {/* ID anchor for scrolling */}
                <div id="services-grid" className="absolute bottom-0" />
            </section>

            {/* Services Sections by Category */}
            {SERVICE_CATEGORIES.map((category, catIndex) => (
                <section key={catIndex} className="py-20 relative border-t border-slate-100 dark:border-white/5 bg-white dark:bg-[#010309] transition-colors duration-300">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                            <div className="space-y-4">
                                <div
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-[2px] bg-brand-medium" />
                                    <span className="text-brand-medium font-mono text-[10px] font-black uppercase tracking-[0.4em]">{category.tag}</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black text-foreground dark:text-white uppercase tracking-tighter leading-none">
                                    {category.name}.
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {category.services.map((service, index) => (
                                <ServiceCard key={index} service={service} index={index} />
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            <ContactCTA />
            <Footer />
        </main>
    );
}

function ServiceCard({ service, index }: { service: any, index: number }) {
    return (
        <Link
            href={service.href}
            className="group relative flex flex-col bg-white dark:bg-[#0b101b] border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-brand-medium/10 transition-all duration-500 h-full"
        >
            {/* Inset Image Container */}
            <div className="relative h-48 m-2 mb-0 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { const t = e.target as HTMLImageElement; t.style.background = 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'; t.style.opacity = '1'; t.src = ''; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Icon */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md flex items-center justify-center text-brand-medium shadow-sm">
                    <service.icon size={18} />
                </div>
            </div>

            {/* Content Container */}
            <div className="flex-1 p-5 flex flex-col">
                <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-[10px] font-bold text-brand-medium dark:text-brand-cyan uppercase tracking-widest mb-4">
                        {service.tag}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-brand-medium dark:group-hover:text-brand-cyan transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                        {service.description}
                    </p>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Active</span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] font-bold text-brand-medium uppercase tracking-widest group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        Explore
                        <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center group-hover:bg-brand-medium group-hover:text-white transition-all">
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Hover Accent Glow */}
            <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
        </Link>
    );
}
