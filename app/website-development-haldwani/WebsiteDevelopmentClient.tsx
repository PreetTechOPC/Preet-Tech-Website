"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Globe, Code2, ShoppingCart, Zap, CheckCircle2, ArrowRight,
    ChevronDown, MapPin, Phone, Mail, Monitor, Layers, Rocket,
    Shield, Search, Smartphone
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// ─── Breadcrumb ─────────────────────────────────────────────────────────────
function Breadcrumb() {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8">
            <Link href="/" className="hover:text-brand-medium transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Website Development Haldwani</span>
        </nav>
    );
}

// ─── Types ───────────────────────────────────────────────────────────────────
const websiteTypes = [
    {
        icon: Monitor,
        title: "Business Websites",
        desc: "Professional, conversion-focused websites for local businesses in Haldwani and across Uttarakhand. Built to generate leads and establish credibility online.",
        link: "/services/advance-website",
    },
    {
        icon: Code2,
        title: "Custom Web Applications",
        desc: "Bespoke web applications engineered for complex business requirements — dashboards, portals, booking systems, and internal tools.",
        link: "/services/advance-website",
    },
    {
        icon: ShoppingCart,
        title: "E-commerce Websites",
        desc: "High-converting online stores with product management, secure payment integration, and mobile-optimized shopping experiences.",
        link: "/services/ecommerce-development",
    },
    {
        icon: Zap,
        title: "Eco Website (Budget-Friendly)",
        desc: "Fast, professional websites for startups and small businesses at an affordable price. Live in 7–14 days with zero technical overhead.",
        link: "/services/eco-website",
    },
];

// ─── Process ─────────────────────────────────────────────────────────────────
const processSteps = [
    { step: "01", title: "Discovery & Planning", desc: "We understand your business goals, target audience, and technical requirements." },
    { step: "02", title: "Design & Prototyping", desc: "UI/UX design that aligns with your brand and converts visitors into customers." },
    { step: "03", title: "Development", desc: "Clean, fast, SEO-friendly code using Next.js, React, and modern web technologies." },
    { step: "04", title: "Testing & QA", desc: "Cross-browser, cross-device testing and performance optimization before launch." },
    { step: "05", title: "Launch & Support", desc: "We deploy your website and provide ongoing maintenance and support." },
];

// ─── Reasons ─────────────────────────────────────────────────────────────────
const reasons = [
    { icon: MapPin, title: "Based in Haldwani", desc: "We understand the local Uttarakhand market and the needs of Haldwani businesses." },
    { icon: Rocket, title: "Fast Delivery", desc: "Eco websites in 7–14 days. Custom projects with clear milestones." },
    { icon: Shield, title: "Secure & Reliable", desc: "SSL, secure code practices, and reliable hosting recommendations for every project." },
    { icon: Search, title: "SEO-Ready", desc: "Every website we build follows modern SEO best practices from day one." },
    { icon: Smartphone, title: "Mobile-First", desc: "Fully responsive design that works perfectly on phones, tablets, and desktops." },
    { icon: Layers, title: "Scalable Architecture", desc: "Built on modern technology stacks that grow with your business." },
];

// ─── Technologies ────────────────────────────────────────────────────────────
const techStack = ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "PostgreSQL", "Firebase"];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
    {
        q: "How much does website development cost in Haldwani?",
        a: "Website development costs vary by scope. Our Eco Website packages are budget-friendly and ideal for small businesses and startups. Custom websites, e-commerce platforms, and web applications are priced based on features and complexity. Contact us for a free, transparent quote."
    },
    {
        q: "How long does it take to build a business website?",
        a: "A standard business website typically takes 2–4 weeks. E-commerce websites and custom web applications take 4–8 weeks. We provide a detailed project timeline at the start of every project."
    },
    {
        q: "Will my website be mobile-friendly and SEO-optimized?",
        a: "Yes. Every website we build is fully mobile-responsive and follows modern SEO best practices — fast load times, semantic HTML, proper meta tags, structured data, and Core Web Vitals optimization."
    },
    {
        q: "Can you build an e-commerce website for my business?",
        a: "Yes. We build high-converting e-commerce websites with product management, secure payment integration, inventory management, and mobile-optimized shopping experiences."
    },
    {
        q: "Do you provide website maintenance after launch?",
        a: "Yes. We offer post-launch support and ongoing maintenance covering bug fixes, security updates, performance optimization, content updates, and feature additions."
    },
    {
        q: "Do you provide website redesign services?",
        a: "Yes. We offer website redesign services for businesses looking to modernize their online presence. We audit your existing website and rebuild it with improved design, performance, and SEO."
    },
];

// ─── FAQ Component ───────────────────────────────────────────────────────────
function FAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <div className="space-y-3">
            {faqs.map((faq, i) => (
                <div key={i} className="border border-slate-200 dark:border-white/10 rounded-2xl bg-white dark:bg-[#0b0f1a] overflow-hidden transition-all hover:border-brand-medium/40">
                    <button
                        onClick={() => setOpen(open === i ? null : i)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                    >
                        <h3 className="text-sm md:text-base font-semibold text-foreground leading-tight pr-4">{faq.q}</h3>
                        <ChevronDown className={`w-5 h-5 text-brand-medium flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
                    </button>
                    {open === i && (
                        <div className="px-6 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            {faq.a}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function WebsiteDevelopmentClient() {
    return (
        <main className="bg-background text-foreground min-h-screen overflow-x-clip">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.04] dark:opacity-[0.12] pointer-events-none" />
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-medium/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Breadcrumb />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-medium/10 border border-brand-medium/20 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-medium mb-6">
                            <MapPin className="w-3 h-3" />
                            Haldwani, Uttarakhand
                        </span>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1] mb-6">
                            Professional{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan">
                                Website Development
                            </span>{" "}
                            Company in Haldwani
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-10">
                            Preet Tech builds high-performance, SEO-optimized websites for startups and businesses in <strong className="text-foreground dark:text-white">Haldwani, Uttarakhand</strong>. From budget-friendly business websites to custom web applications and e-commerce stores — we deliver quality that converts.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-medium to-[#004aad] text-white font-bold text-xs uppercase tracking-widest rounded-2xl hover:shadow-xl hover:shadow-brand-medium/30 hover:-translate-y-1 transition-all"
                            >
                                Get a Free Consultation
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/services/eco-website"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-foreground font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-slate-200 dark:hover:bg-white/10 hover:-translate-y-1 transition-all"
                            >
                                View Eco Website Package
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Website Types */}
            <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#07090f]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12">
                        <span className="text-sm font-bold text-brand-medium tracking-widest uppercase">Our Solutions</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mt-3 mb-4">
                            Websites We Build in <span className="text-brand-medium">Haldwani</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                            Whether you need a simple business website or a complex web application, we have the right solution for your Haldwani business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {websiteTypes.map((type, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link href={type.link} className="group block h-full p-6 md:p-8 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] hover:border-brand-medium/40 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-medium/5">
                                    <div className="w-12 h-12 rounded-xl bg-brand-medium/10 flex items-center justify-center text-brand-medium mb-5 group-hover:bg-brand-medium group-hover:text-white transition-all">
                                        <type.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-black uppercase tracking-tight mb-3 group-hover:text-brand-medium transition-colors">{type.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{type.desc}</p>
                                    <div className="flex items-center gap-2 mt-4 text-brand-medium text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        Learn more <ArrowRight className="w-3 h-3" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12">
                        <span className="text-sm font-bold text-brand-medium tracking-widest uppercase">How We Work</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mt-3 mb-4">
                            Our Website Development <span className="text-brand-medium">Process</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] relative"
                            >
                                <span className="text-4xl font-black text-brand-medium/20 dark:text-brand-medium/30 leading-none block mb-4">{step.step}</span>
                                <h3 className="text-sm font-black uppercase tracking-tight mb-2 text-foreground">{step.title}</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#07090f]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12">
                        <span className="text-sm font-bold text-brand-medium tracking-widest uppercase">Why Preet Tech</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mt-3 mb-4">
                            Why Choose Us for Website Development in <span className="text-brand-medium">Haldwani?</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reasons.map((reason, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07]"
                            >
                                <div className="w-10 h-10 rounded-xl bg-brand-medium/10 flex items-center justify-center flex-shrink-0">
                                    <reason.icon className="w-5 h-5 text-brand-medium" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-black uppercase tracking-tight mb-1 text-foreground">{reason.title}</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{reason.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07]">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Technologies We Use</p>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech) => (
                                <span key={tech} className="px-3 py-1.5 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-600 dark:text-slate-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Mid-page */}
            <section className="py-16 bg-gradient-to-br from-brand-medium/10 via-brand-medium/5 to-transparent border-y border-brand-medium/10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-4">
                        Need a Website for Your <span className="text-brand-medium">Haldwani Business?</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                        Get a free consultation with our team. We will review your requirements and recommend the right solution for your budget and goals.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-medium text-white font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-brand-medium/90 hover:shadow-lg hover:shadow-brand-medium/30 hover:-translate-y-1 transition-all"
                        >
                            Start Your Project
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-foreground font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-slate-200 dark:hover:bg-white/10 hover:-translate-y-1 transition-all"
                        >
                            View All Services
                        </Link>
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
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                            Answers to common questions about website development in Haldwani.
                        </p>
                    </div>
                    <FAQ faqs={faqs} />
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#07090f]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="p-8 md:p-16 rounded-3xl bg-white dark:bg-[#0b0f1a] border border-slate-200 dark:border-brand-medium/20 text-center relative overflow-hidden shadow-2xl dark:shadow-none">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,148,250,0.06),transparent_70%)]" />
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-4">
                                Ready to Build Your Website in{" "}
                                <span className="text-brand-medium">Haldwani?</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
                                Contact Preet Tech today for a free consultation. We will help you choose the right solution for your business and budget.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-medium text-white font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-brand-medium/90 hover:shadow-xl hover:shadow-brand-medium/30 hover:-translate-y-1 transition-all"
                                >
                                    Get a Free Consultation
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                                <a href="tel:+919756667397" className="flex items-center gap-2 hover:text-brand-medium transition-colors">
                                    <Phone className="w-4 h-4" />
                                    +91 97566 67397
                                </a>
                                <a href="mailto:info@preettech.com" className="flex items-center gap-2 hover:text-brand-medium transition-colors">
                                    <Mail className="w-4 h-4" />
                                    info@preettech.com
                                </a>
                                <span className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    Haldwani, Uttarakhand 263139
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
                            { label: "Eco Website Package", href: "/services/eco-website" },
                            { label: "Advanced Website", href: "/services/advance-website" },
                            { label: "E-commerce Development", href: "/services/ecommerce-development" },
                            { label: "App Development in Haldwani", href: "/app-development-haldwani" },
                            { label: "Software Development in Haldwani", href: "/software-development-haldwani" },
                            { label: "All Services", href: "/services" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] text-xs font-bold text-slate-600 dark:text-slate-300 hover:border-brand-medium/40 hover:text-brand-medium transition-all"
                            >
                                {link.label}
                                <ArrowRight className="w-3 h-3" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
