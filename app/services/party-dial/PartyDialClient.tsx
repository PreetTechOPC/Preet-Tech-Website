"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Zap, Clock } from 'lucide-react';

const PartyDialPage = () => {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem('theme');
        setIsDark(storedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
    };

    if (!mounted) return null;

    return (
        <main className="bg-white dark:bg-[#030712] min-h-screen transition-colors duration-300 selection:bg-brand-cyan/30 flex flex-col">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />

            <div className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] bg-brand-medium/5 blur-[60px] rounded-full animate-pulse" />
                    <div className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] bg-brand-cyan/5 blur-[48px] rounded-full animate-pulse delay-200" />
                </div>

                <motion.div

                    
                    className="max-w-4xl w-full text-center relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-medium/10 border border-brand-medium/20 text-brand-medium text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        <Zap className="w-4 h-4" />
                        Ventures
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9] mb-8 text-slate-900 dark:text-white">
                        Party <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-medium to-brand-deep italic pr-4">Dial</span>
                    </h1>

                    <div className="flex flex-col items-center gap-8">
                        <motion.div
                            
                            
                            className="relative"
                        >
                            <div className="absolute -inset-8 bg-brand-medium/20 blur-2xl rounded-full" />
                            <Clock className="w-20 h-20 text-brand-medium relative z-10" />
                        </motion.div>

                        <div className="space-y-4 max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Coming Soon</h2>
                            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                We are engineering a high-performance community platform designed for event-driven growth. The ultimate infrastructure for social authority and monetization is under development.
                            </p>
                        </div>

                        <div className="mt-12 flex flex-wrap justify-center gap-4">
                            <button className="px-10 py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-full font-black text-xs uppercase tracking-[0.25em] shadow-xl shadow-[#3994fa]/30 transition-all hover:opacity-90 hover:scale-105 active:scale-95 flex items-center gap-2">
                                Join Beta Access
                            </button>
                            <button className="px-10 py-5 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white rounded-full font-black text-xs uppercase tracking-[0.25em] transition-all hover:bg-gradient-to-r hover:from-[#3994fa] hover:to-[#004aad] hover:text-white">
                                Contact Strategic Team
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
};

export default PartyDialPage;
