"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, Banknote, Rocket, Headphones } from 'lucide-react';

const FEATURES = [
    { title: "End-to-End Setup", desc: "We manage everything from registration to your first sale.", icon: Rocket },
    { title: "Business Experts", desc: "Direct access to strategists who have built multiple 7-figure startups.", icon: Users },
    { title: "Digital-First Approach", desc: "Optimizing your business for the modern digital economy.", icon: Zap },
    { title: "Affordable Packages", desc: "Pricing designed to support startups at every growth stage.", icon: Banknote },
    { title: "Fast Execution", desc: "We launch in weeks, not months, keeping your momentum high.", icon: ShieldCheck },
    { title: "Ongoing Support", desc: "Long-term partnership to scale your operations continuously.", icon: Headphones },
];

const WhyChoosePreetTech = () => {
    return (
        <section className="py-24 px-6 bg-white dark:bg-[#030712] relative scroll-reveal">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-brand-medium dark:text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Engineered for Success</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                        Why Choose <span className="text-brand-medium dark:text-brand-cyan italic">Preet Tech OPC Private Limited?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FEATURES.map((item, i) => (
                        <motion.div
                            key={i}
                            
                            
                            
                            
                            className="group p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-brand-medium/40 dark:hover:border-brand-cyan/40 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-medium dark:hover:bg-brand-cyan group-hover:shadow-[0_0_30px_rgba(95,211,230,0.3)] transition-all">
                                <item.icon className="w-6 h-6 text-brand-medium dark:text-brand-cyan group-hover:text-slate-900 dark:group-hover:text-[#030712] transition-colors" />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-3 group-hover:text-brand-medium dark:hover:text-brand-cyan transition-colors">{item.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoosePreetTech;
