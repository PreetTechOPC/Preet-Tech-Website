"use client";

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Shield } from 'lucide-react';

enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

export default function PrivacyPolicyPage() {
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
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-medium/10 rounded-full blur-[60px]" />
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-medium/10 text-brand-medium text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-brand-medium/20 backdrop-blur-md">
                        <Shield className="w-3 h-3" />
                        Data Protection
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1] md:leading-[1.1] uppercase tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-foreground/40">
                        Privacy <span className="text-brand-medium">Policy</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-medium">
                        Last updated: March 2026. Learn how Preet Tech OPC Private Limited collects, uses, and protects your data.
                    </p>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="py-24 px-6 bg-slate-50 dark:bg-[#07090f] border-t border-slate-200 dark:border-white/5">
                <div className="max-w-4xl mx-auto space-y-12 text-slate-600 dark:text-slate-400 font-medium leading-relaxed">

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase text-foreground dark:text-white">1. Introduction</h2>
                        <p>At Preet Tech OPC Private Limited Global, establishing trust through robust IT practices is at the core of our business. We respect your privacy and are deeply committed to protecting your personal data. This Privacy Policy outlines our procedures regarding the collection, use, security, and disclosure of personal information across all our digital transformation services.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase text-foreground dark:text-white">2. Data We Collect</h2>
                        <p>In the course of providing innovative enterprise technology solutions, we may gather specific data categories:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Identity Data:</strong> Name, professional title, and organizational affiliation.</li>
                            <li><strong>Contact Data:</strong> Professional email addresses, phone numbers, and location details.</li>
                            <li><strong>Technical Data:</strong> IP addresses, browser types, usage duration, and diagnostic analytics crucial for improving scalable cloud infrastructure experiences.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase text-foreground dark:text-white">3. How Your Data is Used</h2>
                        <p>Preet Tech OPC Private Limited processes your data exclusively under legal parameters. Specifically, your data supports:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Delivering requested services like custom software development, mobile app deployments, or consulting.</li>
                            <li>Communicating system updates, security alerts, and contractual notices.</li>
                            <li>Safeguarding our high-performance web architecture from unauthorized access or malicious technical threats.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase text-foreground dark:text-white">4. Data Security</h2>
                        <p>Security is not just an add-on; it is engineered into our core. We employ advanced encryption, continuous monitoring, and strict access controls to prevent accidental exposure, alteration, or unauthorized data dissemination.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase text-foreground dark:text-white">5. Third-Party Links</h2>
                        <p>Our platforms might feature links to external third-party applications, APIs, or integration tools as part of full-stack implementations. Selecting these links may allow external entities to aggregate data. We do not command third-party privacy ecosystems and encourage you to review every external policy.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase text-foreground dark:text-white">6. Your Rights</h2>
                        <p>Pursuant to international data governance (including GDPR guidelines), you possess profound rights concerning your data, including the right to structural data access, rectification of inaccuracies, complete data erasure, and object to algorithmic processing strategies.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase text-foreground dark:text-white">7. Contact Strategy</h2>
                        <p>If you intend to exercise legal rights or inquire about architectural data security implementations, route your communication directly to our Data Governance Officer at <strong>hello@preettech.com</strong>.</p>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
