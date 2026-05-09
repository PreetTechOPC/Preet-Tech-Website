"use client";

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Shield } from 'lucide-react';

enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

export default function CookiePolicyPage() {
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
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[60px]" />
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-medium/10 text-brand-medium text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-brand-medium/20 backdrop-blur-md">
                        <Shield className="w-3 h-3" />
                        Website Tracking
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1] md:leading-[1.1] uppercase tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-foreground/40">
                        Cookie <span className="text-brand-medium">Policy</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-medium">
                        Last updated: March 2026. Discover how Preet Tech OPC Private Limited uses tracking technologies to improve your experience.
                    </p>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="py-24 px-6 bg-slate-50 dark:bg-[#07090f] border-t border-slate-200 dark:border-white/5">
                <div className="max-w-4xl mx-auto space-y-12 text-slate-600 dark:text-slate-400 font-medium leading-relaxed">

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase text-foreground dark:text-white">1. What Are Cookies?</h2>
                        <p>A cookie is a small block of data deposited on your browser by our high-performance web architecture when you visit the Preet Tech OPC Private Limited portal. These files help the website recognize your device upon future visits, ensuring a smooth, personalized digital transformation experience.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase text-foreground dark:text-white">2. Essential Cookies We Use</h2>
                        <p>We classify technical cookies that are strictly necessary to run the infrastructure of our enterprise IT solutions. Essential cookies include:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>State Cookies:</strong> Used for secure user sessions and backend synchronization.</li>
                            <li><strong>Security Cookies:</strong> Actively monitors to prevent CSRF, XSS, and unauthorized account access patterns.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase text-foreground dark:text-white">3. Analytics and Performance Cookies</h2>
                        <p>To continuously elevate our UI/UX design it company capabilities, we implement diagnostic algorithms that gather anonymous usage parameters. These analytics (e.g., Google Analytics tracking) calculate traffic, entry behavior, and load performance, allowing us to build scalable operations dynamically.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase text-foreground dark:text-white">4. Managing Your Cookie Preferences</h2>
                        <p>Your browser establishes absolute control over cookies. You can manually delete stored tracking assets or block novel cookies across all web experiences natively within Chrome, Safari, Firefox, or Edge settings. Be advised: blocking essential backend cookies may drastically impair the functionality of custom software portals hosted by Preet Tech OPC Private Limited.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase text-foreground dark:text-white">5. Updates and Modifications</h2>
                        <p>Preet Tech OPC Private Limited Global reserves the right to modify tracking protocols and this Cookie Policy as technology shifts or legal thresholds evolve. Substantial functional updates will be communicated transparently on our platform.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
