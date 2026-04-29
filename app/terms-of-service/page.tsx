"use client";

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Shield } from 'lucide-react';

enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

export default function TermsOfServicePage() {
    const [theme, setTheme] = useState<Theme>(Theme.DARK);

    const isDark = theme === Theme.DARK;

    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    };

    return (
        <main className="relative z-10 selection:bg-brand-medium/30 overflow-x-clip bg-background text-foreground transition-colors duration-300">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />

            {/* HERO SECTION */}
            <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[60px]" />
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-medium/10 text-brand-medium text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-brand-medium/20 backdrop-blur-md">
                        <Shield className="w-3 h-3" />
                        Legal Agreement
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1] md:leading-[1.1] uppercase tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-foreground/40">
                        Terms of <span className="text-brand-medium">Service</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-medium">
                        Last updated: March 2026. Read the operational and legal bounds of utilizing Preet Tech OPC Private Limited's services.
                    </p>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="py-24 px-6 bg-slate-50 dark:bg-[#07090f] border-t border-slate-200 dark:border-white/5">
                <div className="max-w-4xl mx-auto space-y-12 text-slate-600 dark:text-slate-400 font-medium leading-relaxed">

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase text-foreground dark:text-white">1. Agreement to Terms</h2>
                        <p>These Terms of Service ("Terms") constitute a legally binding agreement between you (whether individually or on behalf of an entity) and Preet Tech OPC Private Limited Global ("we," "us," or "our"). By leveraging our digital transformation agency services, custom software deployments, or navigating our website, you expressly agree to be bound by these Terms.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase text-foreground dark:text-white">2. Our Services</h2>
                        <p>Preet Tech OPC Private Limited is an innovative IT solutions company providing services including but not limited to:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>High-performance web architecture and scalable cloud infrastructure setups.</li>
                            <li>Mobile app development tools and artificial intelligence integration.</li>
                            <li>Bespoke enterprise tech consultations.</li>
                        </ul>
                        <p>We reserve the right to modify, suspend, or discontinue components of our system architectures at any point for essential maintenance or upgrades.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase text-foreground dark:text-white">3. Intellectual Property Rights</h2>
                        <p>Unless expressly stated under mutual contract (e.g., specific white-label developments), Preet Tech OPC Private Limited retains complete intellectual property ownership over underlying frameworks, proprietary codebases, algorithms, UI/UX conceptual blueprints, and architectural innovations deployed during the creation process.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase text-foreground dark:text-white">4. User Representations</h2>
                        <p>When retaining Preet Tech OPC Private Limited for IT execution, you warrant that:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>You maintain the legal authority and authorization to greenlight requested infrastructure operations.</li>
                            <li>Your utilized digital assets do not infringe on third-party security, legality, or IP rights.</li>
                            <li>You will not deploy our architecture for illicit, abusive, or explicitly harmful global operations.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase text-foreground dark:text-white">5. Liability Limitations</h2>
                        <p>In no event shall Preet Tech OPC Private Limited, its engineers, or direct affiliates be held liable for tangential, punitive, or consequential damages generated from third-party server downtime, zero-day vulnerabilities outside our immediate stack control, or user-driven data negligence.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase text-foreground dark:text-white">6. Termination</h2>
                        <p>We preserve the right to unilaterally restrict or terminate access to ongoing development servers, staging environments, or maintenance plans if these foundational Terms are materially violated, without prior financial restitution constraints.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase text-foreground dark:text-white">7. Governing Law</h2>
                        <p>These Terms and corresponding engagements with Preet Tech OPC Private Limited are governed strictly according to the corporate laws of our operational jurisdiction, without regard to overarching conflict-of-law principles.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
