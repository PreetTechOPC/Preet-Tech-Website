"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, FileText, Palette, TrendingUp, DollarSign, XCircle, CheckCircle2, Rocket } from 'lucide-react';

const CHALLENGES = [
    { title: "Legal Confusion", desc: "Complex registrations and documentation hurdles.", icon: AlertCircle },
    { title: "No Clear Strategy", desc: "Starting without a roadmap leads to early burnout.", icon: FileText },
    { title: "Branding Mistakes", desc: "Inconsistent identity that fails to build trust.", icon: Palette },
    { title: "Poor Marketing Launch", desc: "Invisible entry into a crowded marketplace.", icon: TrendingUp },
    { title: "Wasted Budget", desc: "Overspending on resources that don't drive ROI.", icon: DollarSign },
];

const Challenges = () => {
    return (
        <section className="py-16 md:py-20 px-6 bg-white dark:bg-[#030712] relative overflow-hidden transition-colors duration-300 font-jakarta">
            {/* Soft Ambient Shadow */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
                <motion.div
                    
                    
                    
                    
                    className="space-y-8 md:space-y-10"
                >
                    <div>
                        <span className="text-[#3994fa] dark:text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">The Critical Extraction</span>
                        <h2 className="text-4xl md:text-[52px] font-black text-[#1F2937] dark:text-white uppercase tracking-tighter leading-[1] mb-5">
                            THE SCALING <br />
                            <span className="text-[#3994fa] dark:text-brand-cyan italic">DEATH VALLEY</span>
                        </h2>
                        <p className="text-[#64748B] dark:text-slate-400 text-[13px] md:text-sm font-medium leading-relaxed max-w-lg">
                            90% of startups fail within the first 18 months due to predictable engineering anomalies. We identify and neutralize these roadblocks before you launch.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        {CHALLENGES.map((item, i) => (
                            <motion.div
                                key={i}
                                
                                
                                
                                
                                className="flex gap-4 md:gap-5 items-center p-4 md:p-5 rounded-[1.5rem] bg-[#FAFBFC] dark:bg-white/5 border border-slate-100 dark:border-white/5 group hover:bg-white dark:hover:bg-slate-100 dark:bg-white/10 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] transition-all cursor-default"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-white/5 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform shrink-0">
                                    <XCircle strokeWidth={2} className="w-[18px] h-[18px] text-red-500" />
                                </div>
                                <div className="space-y-0.5">
                                    <h4 className="text-[#111827] dark:text-white font-black uppercase text-[12px] md:text-[13px] tracking-tight">{item.title}</h4>
                                    <p className="text-[#64748B] dark:text-slate-400 text-[10px] md:text-[11px] font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    
                    
                    
                    
                    className="relative w-full max-w-lg mx-auto lg:ml-auto lg:mr-0 lg:scale-[0.85] lg:origin-right"
                >
                    <div className="aspect-square bg-[#FAFBFC] dark:bg-slate-900/50 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 dark:border-white/5 p-6 md:p-10 relative overflow-hidden flex items-center justify-center shadow-inner">
                        {/* Technical Blueprint Visual */}
                        <div className="relative w-[90%] md:w-full aspect-square border-[1.5px] border-dashed border-slate-200 dark:border-white/10 rounded-full flex items-center justify-center">
                            <motion.div
                                
                                
                                className="absolute inset-2 md:inset-3 border-[1px] border-[#3994fa]/20 dark:border-brand-cyan/20 rounded-full"
                            />

                            <div className="relative z-10 w-[85%] md:w-4/5 aspect-square bg-white dark:bg-[#030712] rounded-full border border-slate-100 dark:border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center px-4 md:px-8 text-center space-y-2 md:space-y-3 pt-1 md:pt-2">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#EAF3FA] dark:bg-brand-cyan/10 flex items-center justify-center mb-0 md:mb-1">
                                    <Rocket strokeWidth={2} className="w-5 h-5 md:w-6 md:h-6 text-[#3994fa] dark:text-brand-cyan" />
                                </div>
                                <div className="space-y-1 w-full">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-black text-[#111827] dark:text-white uppercase tracking-tighter">PHASE 01</h3>
                                    <p className="text-[#3994fa] dark:text-brand-cyan text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] mx-auto w-full">MARKET NEUTRALIZATION</p>
                                </div>
                                <div className="w-8 md:w-10 h-[1px] md:h-0.5 bg-slate-200 dark:bg-white/10 my-1 md:my-0" />
                                <p className="text-[#64748B] dark:text-slate-400 text-[7px] md:text-[8px] font-bold leading-[1.6] uppercase tracking-[0.1em] sm:tracking-[0.15em]">Bridging the revenue <br /> gap with venture <br /> blueprint</p>
                            </div>

                            {/* Orbiting Tech Points */}
                            <motion.div
                                
                                
                                className="absolute h-[105%] md:h-full w-[105%] md:w-full"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#3994fa] shadow-[0_0_15px_rgba(63,143,204,0.6)]" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#3994fa] shadow-[0_0_15px_rgba(63,143,204,0.6)]" />
                            </motion.div>
                        </div>

                        {/* Background Code/Grid elements */}
                        <div className="absolute top-6 left-6 md:top-8 md:left-8 text-[6px] md:text-[7px] font-mono text-[#64748B] dark:text-slate-300 select-none hidden sm:block">INIT_VENTURE_SEQ</div>
                        <div className="absolute top-4 left-4 text-[6px] font-mono text-[#64748B] dark:text-slate-300 select-none block sm:hidden">INIT_SEQ</div>

                        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-[6px] md:text-[7px] font-mono text-[#64748B] dark:text-slate-300 select-none hidden sm:block">STATUS: OPTIMIZED</div>
                        <div className="absolute bottom-4 right-4 text-[6px] font-mono text-[#64748B] dark:text-slate-300 select-none block sm:hidden">STATUS: OK</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Challenges;
