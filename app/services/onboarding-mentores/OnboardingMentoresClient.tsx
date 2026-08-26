"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { UserCheck, Clock } from 'lucide-react';

const OnboardingMentoresPage = () => {
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
                    <div className="absolute top-0 right-[-15%] w-[700px] h-[700px] bg-brand-deep/5 blur-[160px] rounded-full animate-pulse" />
                    <div className="absolute bottom-0 left-[-15%] w-[600px] h-[600px] bg-brand-medium/5 blur-[140px] rounded-full animate-pulse delay-1000" />
                </div>

                <motion.div

                    
                    className="max-w-4xl w-full text-center relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-deep/10 border border-brand-deep/20 text-brand-deep text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        <UserCheck className="w-4 h-4" />
                        Mentorship
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9] mb-8 text-slate-900 dark:text-white">
                        Onboarding <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-deep via-brand-medium to-brand-cyan italic pr-4">Mentores</span>
                    </h1>

                    <div className="flex flex-col items-center gap-8">
                        <div className="relative">
                            <div className="absolute -inset-10 bg-brand-deep/10 blur-3xl rounded-full" />
                            <motion.div
                                
                                
                                
                            >
                                <Clock className="w-24 h-24 text-brand-deep relative z-10" />
                            </motion.div>
                        </div>

                        <div className="space-y-4 max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Coming Soon</h2>
                            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                Expert-led protocols for seamless startup onboarding and strategic technical mentorship. We are perfecting the foundation for your team's architectural success.
                            </p>
                        </div>

                        <div className="mt-12 flex flex-wrap justify-center gap-4">
                            <button className="px-10 py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-full font-black text-xs uppercase tracking-[0.25em] shadow-xl shadow-[#3994fa]/30 transition-all hover:opacity-90 hover:scale-105 active:scale-95">
                                Reserve Slot
                            </button>
                            <button className="px-10 py-5 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white rounded-full font-black text-xs uppercase tracking-[0.25em] transition-all hover:bg-gradient-to-r hover:from-[#3994fa] hover:to-[#004aad] hover:text-white">
                                View Blueprint
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
};

export default OnboardingMentoresPage;
