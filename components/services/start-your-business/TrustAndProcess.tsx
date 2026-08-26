"use client";

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users, Briefcase, Rocket, Globe, Palette, Scale,
    BarChart3, Settings, ShieldCheck, ChevronLeft,
    ChevronRight, Quote, CheckCircle2, Calendar, Clock, ArrowUpRight
} from 'lucide-react';

const STEPS = [
    { title: "Consultation", icon: Users, desc: "Deep-dive session to blueprint your vision." },
    { title: "Planning", icon: Settings, desc: "Architecting your business and tech roadmap." },
    { title: "Registration", icon: Scale, desc: "Handling all legal and incorporation flows." },
    { title: "Branding", icon: Palette, desc: "Creating your iconic visual identity system." },
    { title: "Website Setup", icon: Globe, desc: "Engineered digital presence for conversion." },
    { title: "Launch & Growth", icon: Rocket, desc: "Strategic entry and scale-up execution." }
];

const INDUSTRIES = [
    { name: "Retail", icon: Briefcase },
    { name: "Education", icon: Globe },
    { name: "E-Commerce", icon: Briefcase },
    { name: "Real Estate", icon: Scale },
    { name: "Healthcare", icon: ShieldCheck },
    { name: "Digital Services", icon: Settings },
    { name: "Local Businesses", icon: Users }
];

const TOOLS = [
    { name: "Salesforce", logo: "https://cdn.simpleicons.org/salesforce/00A1E0" },
    { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot/FF7A59" },
    { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/96BF48" },
    { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/635BFF" },
    { name: "Postmark", logo: "https://cdn.simpleicons.org/postmark/FFDE00" },
    { name: "Sentry", logo: "https://cdn.simpleicons.org/sentry/362D59" },
    { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/000000" },
    { name: "Analytics", logo: "https://cdn.simpleicons.org/googleanalytics/E37400" }
];

const CASE_STUDIES = [
    {
        name: "Building for Urban Store",
        industry: "Retail",
        date: "OCT 12, 2024",
        readTime: "5 MIN READ",
        image: "/images/services/eco-website.png",
        desc: "How we scaled an offline retail brand to a digital-first powerhouse through strategic e-commerce registration.",
        tag: "MARKET SCALE",
        slug: "case-study-urban-store-retail-digital"
    },
    {
        name: "Scaling EduFlow's Ops",
        industry: "Education",
        date: "OCT 08, 2024",
        readTime: "7 MIN READ",
        image: "/images/services/content-creation.png",
        desc: "Architecting a custom CMS that automated legal compliance and reduced administrative overhead by 60%.",
        tag: "EFFICIENCY",
        slug: "case-study-eduflow-operations-automation"
    },
    {
        name: "HealthKey: Security First",
        industry: "Healthcare",
        date: "SEP 28, 2024",
        readTime: "6 MIN READ",
        image: "/images/services/medivault-healthcare.png",
        desc: "Engineering a HIPAA-compliant patient management system for a high-growth medical startup.",
        tag: "COMPLIANCE",
        slug: "case-study-healthkey-hipaa-patient-management"
    }
];

const TESTIMONIALS = [
    { name: "Rajiv M.", initials: "RM", color: "from-blue-500 to-cyan-400", review: "Preet Tech OPC Private Limited turned my side project into a registered, profitable company in 4 weeks." },
    { name: "Sarah J.", initials: "SJ", color: "from-purple-500 to-pink-400", review: "The branding and website they built were world-class. Absolute professionals." },
    { name: "Aman K.", initials: "AK", color: "from-emerald-500 to-teal-400", review: "Their legal support and strategic roadmap were exactly what I needed to scale." }
];

const TrustAndProcess = () => {
    return (
        <section className="py-24 space-y-32 overflow-hidden">
            {/* Launch Process (Section 12) */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-brand-medium dark:text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">The Roadmap</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                        How We <span className="text-brand-medium dark:text-brand-cyan italic">Launch You</span>
                    </h2>
                </div>

                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-white/5 hidden lg:block -translate-y-1/2" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                        {STEPS.map((step, i) => (
                            <motion.div
                                key={i}



                                
                                className="flex flex-col items-center group"
                            >
                                <div className="w-20 h-20 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-brand-cyan/20 flex items-center justify-center mb-6 group-hover:border-brand-medium dark:hover:border-brand-cyan group-hover:shadow-[0_0_30px_rgba(95,211,230,0.3)] transition-all bg-glow">
                                    <step.icon className="w-8 h-8 text-brand-medium dark:text-brand-cyan" />
                                </div>
                                <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2 text-center">{step.title}</h4>
                                <p className="text-[10px] text-slate-500 font-medium leading-relaxed text-center max-w-[140px]">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mid CTA (Section 13) */}
            <div className="px-6">
                <div className="max-w-5xl mx-auto rounded-[4rem] p-12 md:p-20 text-center bg-white dark:bg-[#030712] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-transparent" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-10 leading-[0.9]">
                            Your Business Idea <br /> Deserves The <span className="text-brand-medium dark:text-brand-cyan">Right Launch</span>
                        </h2>
                        <button className="px-10 py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:opacity-90 hover:scale-105 transition-all shadow-xl shadow-[#3994fa]/20 outline-none">
                            Book Free Strategy Call
                        </button>
                    </div>
                </div>
            </div>



            {/* Case Studies (Section 16) - Editorial Card Redesign */}
            <div className="py-24 bg-white dark:bg-[#030712]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto space-y-4 md:space-y-6">
                        <div className="flex flex-col items-center w-full">
                            <span className="text-[#3994fa] dark:text-brand-cyan text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] mb-3 md:mb-4 block">Proven Performance</span>
                            <h2 className="text-4xl sm:text-[44px] md:text-5xl font-black text-[#0f172a] dark:text-white uppercase tracking-tighter leading-tight">
                                Success <span className="text-[#3994fa] dark:text-brand-cyan italic">Stories</span>
                            </h2>
                        </div>
                        <p className="max-w-[85%] sm:max-w-md md:max-w-lg text-[#64748B] dark:text-slate-400 font-medium text-[13px] md:text-base leading-relaxed">
                            Deep dives into how we transform startup visions into technical realities and market-leading businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {CASE_STUDIES.map((study, i) => (
                            <Link
                                key={i}
                                href={`/blog/${study.slug}`}
                                className="group cursor-pointer block"
                            >
                                <motion.div
                                    
                                    className="bg-white dark:bg-slate-900/30 rounded-[2.5rem] border border-slate-100 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-cyan/10 transition-all duration-300 h-full flex flex-col hover:border-brand-medium/40 dark:hover:border-brand-cyan/30"
                                >
                                    {/* Card Header: Image & Badge */}
                                    <div className="relative h-64 overflow-hidden p-3">
                                        <div className="absolute top-6 left-6 z-20">
                                            <span className="px-4 py-1.5 rounded-lg bg-emerald-500/90 text-slate-900 dark:text-white text-[9px] font-black uppercase tracking-widest backdrop-blur-md">
                                                {study.industry}
                                            </span>
                                        </div>
                                        <img
                                            src={study.image}
                                            alt={study.name}
                                            className="w-full h-full object-cover rounded-[2rem] group-hover:scale-110 transition-transform duration-400"
                                            onError={(e) => { const t = e.target as HTMLImageElement; t.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" fill="%23334155"><rect width="800" height="600"/></svg>'; }}
                                        />
                                        <div className="absolute inset-x-3 inset-y-3 bg-gradient-to-t from-black/20 to-transparent rounded-[2rem]" />
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-8 space-y-6 flex-1 flex flex-col">
                                        {/* Metadata row */}
                                        <div className="flex items-center gap-6 text-[10px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-3.5 h-3.5 text-brand-medium dark:text-brand-cyan" />
                                                {study.date}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-3.5 h-3.5 text-brand-medium dark:text-brand-cyan" />
                                                {study.readTime}
                                            </div>
                                        </div>

                                        <div className="space-y-4 flex-1">
                                            <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-brand-medium dark:group-hover:text-brand-cyan transition-colors leading-tight">
                                                {study.name}
                                            </h4>
                                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                                                {study.desc}
                                            </p>
                                        </div>

                                        {/* Action link */}
                                        <div className="pt-8 border-t border-slate-50 dark:border-white/5 flex items-center justify-between">
                                            <span className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] group-hover:text-brand-medium dark:group-hover:text-brand-cyan transition-colors">Read Analysis</span>
                                            <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#3994fa] group-hover:to-[#004aad] group-hover:border-transparent group-hover:text-white text-slate-500 dark:text-slate-400 transition-all duration-300 transform group-hover:translate-x-1">
                                                <ArrowUpRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>            {/* Testimonials (Section 17) */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-brand-medium dark:text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Founder Feedback</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Word On <span className="text-brand-medium dark:text-brand-cyan italic">The Street</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, i) => (
                        <div key={i} className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 relative group">
                            <Quote className="absolute top-8 right-8 w-10 h-10 text-brand-medium dark:text-brand-cyan opacity-10" />
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`w-12 h-12 rounded-full ring-2 ring-brand-medium/20 dark:ring-brand-cyan/20 bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-black`}>
                                    {t.initials}
                                </div>
                                <span className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-sm">{t.name}</span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm italic font-medium leading-relaxed font-serif">"{t.review}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustAndProcess;
