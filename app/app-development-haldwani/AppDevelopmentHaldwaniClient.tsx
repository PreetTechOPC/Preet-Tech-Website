"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Smartphone, Globe, Cpu, CheckCircle2, ArrowRight, ChevronDown,
    MapPin, Phone, Mail, Zap, Shield, Layers, Code2, Tablet
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Breadcrumb() {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8">
            <Link href="/" className="hover:text-brand-medium transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">App Development Haldwani</span>
        </nav>
    );
}

const platforms = [
    {
        icon: Smartphone,
        title: "Android App Development",
        desc: "Native Android applications built with modern Android development practices. High performance, Material Design, and full Google Play integration.",
    },
    {
        icon: Tablet,
        title: "iOS App Development",
        desc: "Native iOS apps built for iPhones and iPads. App Store optimized, following Apple's Human Interface Guidelines.",
    },
    {
        icon: Layers,
        title: "Cross-Platform Apps",
        desc: "Build once, run on Android and iOS with React Native or Flutter. Cost-effective solution with near-native performance.",
    },
    {
        icon: Code2,
        title: "Custom Business Apps",
        desc: "Bespoke mobile applications for internal business operations, field teams, customer engagement, and business automation.",
    },
];

const processSteps = [
    { step: "01", title: "Discovery", desc: "Understanding your app idea, target users, and business goals." },
    { step: "02", title: "UI/UX Design", desc: "Intuitive user interface design with smooth navigation and premium experience." },
    { step: "03", title: "Development", desc: "Clean, scalable code for frontend and backend including APIs and database." },
    { step: "04", title: "Testing & QA", desc: "Thorough testing on real devices across Android and iOS platforms." },
    { step: "05", title: "Launch & Support", desc: "App Store/Play Store submission, deployment, and ongoing maintenance." },
];

const techStack = ["React Native", "Flutter", "Node.js", "Firebase", "MongoDB", "PostgreSQL", "TypeScript", "REST APIs"];

const faqs = [
    {
        q: "How much does mobile app development cost in Haldwani?",
        a: "Mobile app development costs vary based on platform, features, and complexity. A basic business app costs more than a website given the additional backend infrastructure. Contact us for a free, transparent quote."
    },
    {
        q: "Do you develop Android and iOS apps?",
        a: "Yes. We develop native Android apps, native iOS apps, and cross-platform applications using React Native and Flutter. We recommend the best approach based on your business goals and budget."
    },
    {
        q: "How long does it take to develop a mobile app?",
        a: "A basic mobile app typically takes 6–10 weeks. Complex apps with custom features, multiple platforms, and backend integration take 3–6 months. We provide a detailed timeline after the discovery session."
    },
    {
        q: "Do you provide backend development for apps?",
        a: "Yes. We build complete backend APIs, databases, user authentication, push notifications, and server infrastructure. We deliver a complete, production-ready mobile solution."
    },
    {
        q: "Do you provide app maintenance after launch?",
        a: "Yes. We offer post-launch support, bug fixes, OS compatibility updates, performance optimization, and feature additions. We are a long-term technology partner."
    },
];

function FAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <div className="space-y-3">
            {faqs.map((faq, i) => (
                <div key={i} className="border border-slate-200 dark:border-white/10 rounded-2xl bg-white dark:bg-[#0b0f1a] overflow-hidden hover:border-brand-medium/40 transition-all">
                    <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none">
                        <h3 className="text-sm md:text-base font-semibold text-foreground leading-tight pr-4">{faq.q}</h3>
                        <ChevronDown className={`w-5 h-5 text-brand-medium flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
                    </button>
                    {open === i && (
                        <div className="px-6 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{faq.a}</div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default function AppDevelopmentHaldwaniClient() {
    return (
        <main className="bg-background text-foreground min-h-screen overflow-x-clip">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.04] dark:opacity-[0.12] pointer-events-none" />
                <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Breadcrumb />
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-medium/10 border border-brand-medium/20 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-medium mb-6">
                            <MapPin className="w-3 h-3" />
                            Haldwani, Uttarakhand
                        </span>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1] mb-6">
                            Mobile{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan">
                                App Development
                            </span>{" "}
                            Company in Haldwani
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-10">
                            Preet Tech builds high-performance Android, iOS, and cross-platform mobile apps for businesses and startups in <strong className="text-foreground dark:text-white">Haldwani, Uttarakhand</strong>. From idea to app store — we handle everything.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-medium to-[#004aad] text-white font-bold text-xs uppercase tracking-widest rounded-2xl hover:shadow-xl hover:shadow-brand-medium/30 hover:-translate-y-1 transition-all">
                                Discuss Your App Idea
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/services/app-development" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-foreground font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-slate-200 dark:hover:bg-white/10 hover:-translate-y-1 transition-all">
                                View App Dev Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Platforms */}
            <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#07090f]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12">
                        <span className="text-sm font-bold text-brand-medium tracking-widest uppercase">Platforms</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mt-3 mb-4">
                            Apps We Build in <span className="text-brand-medium">Haldwani</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {platforms.map((platform, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="p-6 md:p-8 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] hover:border-brand-medium/40 transition-all hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-brand-medium/10 flex items-center justify-center text-brand-medium mb-5">
                                    <platform.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-black uppercase tracking-tight mb-3">{platform.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{platform.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12">
                        <span className="text-sm font-bold text-brand-medium tracking-widest uppercase">How We Work</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mt-3 mb-4">
                            Our App Development <span className="text-brand-medium">Process</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {processSteps.map((step, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07]">
                                <span className="text-4xl font-black text-brand-medium/20 dark:text-brand-medium/30 leading-none block mb-4">{step.step}</span>
                                <h3 className="text-sm font-black uppercase tracking-tight mb-2 text-foreground">{step.title}</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-12 md:py-16 bg-slate-50 dark:bg-[#07090f]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07]">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Technologies We Use</p>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech) => (
                                <span key={tech} className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-600 dark:text-slate-300">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-sm font-bold text-brand-medium tracking-widest uppercase">Common Questions</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mt-3 mb-4">
                            Frequently Asked <span className="text-brand-medium">Questions</span>
                        </h2>
                    </div>
                    <FAQ faqs={faqs} />
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#07090f]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="p-8 md:p-16 rounded-3xl bg-white dark:bg-[#0b0f1a] border border-slate-200 dark:border-brand-medium/20 text-center relative overflow-hidden shadow-2xl dark:shadow-none">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,148,250,0.06),transparent_70%)]" />
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-4">
                                Ready to Build Your <span className="text-brand-medium">Mobile App?</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
                                Contact Preet Tech in Haldwani for a free app development consultation. We will help you choose the right platform and architecture for your business.
                            </p>
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-medium text-white font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-brand-medium/90 hover:shadow-xl hover:shadow-brand-medium/30 hover:-translate-y-1 transition-all mb-8">
                                Get a Free Consultation
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                                <a href="tel:+919756667397" className="flex items-center justify-center gap-2 hover:text-brand-medium transition-colors">
                                    <Phone className="w-4 h-4" /> +91 97566 67397
                                </a>
                                <a href="mailto:info@preettech.com" className="flex items-center justify-center gap-2 hover:text-brand-medium transition-colors">
                                    <Mail className="w-4 h-4" /> info@preettech.com
                                </a>
                                <span className="flex items-center justify-center gap-2">
                                    <MapPin className="w-4 h-4" /> Haldwani, Uttarakhand 263139
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-12 border-t border-slate-100 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-5">Related Services</p>
                    <div className="flex flex-wrap gap-3">
                        {[
                            { label: "App Development Services", href: "/services/app-development" },
                            { label: "Website Development in Haldwani", href: "/website-development-haldwani" },
                            { label: "Software Development in Haldwani", href: "/software-development-haldwani" },
                            { label: "E-commerce Development", href: "/services/ecommerce-development" },
                            { label: "All Services", href: "/services" },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] text-xs font-bold text-slate-600 dark:text-slate-300 hover:border-brand-medium/40 hover:text-brand-medium transition-all">
                                {link.label} <ArrowRight className="w-3 h-3" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
