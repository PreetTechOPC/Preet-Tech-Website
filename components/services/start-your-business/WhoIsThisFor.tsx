"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Store, UserCheck, Briefcase, Building2, Rocket } from 'lucide-react';

const AUDIENCE = [
    { title: "First-Time Entrepreneurs", desc: "For those with a big dream but no clear roadmap to start.", icon: UserCheck },
    { title: "Students Starting a Startup", desc: "Launch your venture while studying with expert guidance.", icon: GraduationCap },
    { title: "Local Business Owners", desc: "Take your physical shop to the digital world effortlessly.", icon: Store },
    { title: "Freelancers Going Official", desc: "Transition from individual projects to a registered firm.", icon: Briefcase },
    { title: "Shop Owners", desc: "Digitize your inventory and reach a global audience.", icon: Building2 },
    { title: "Startup Founders", desc: "Scaling existing ideas with better tech and branding.", icon: Rocket },
];

const WhoIsThisFor = () => {
    return (
        <section className="py-24 px-6 bg-white dark:bg-[#030712] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-brand-medium dark:text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Tailored Support</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                        Who Is This <span className="text-brand-medium dark:text-brand-cyan italic">For?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {AUDIENCE.map((item, i) => (
                        <motion.div
                            key={i}
                            
                            
                            
                            
                            
                            className="group p-10 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-brand-medium/30 dark:hover:border-brand-cyan/30 transition-all flex flex-col items-center text-center shadow-sm"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:bg-brand-medium dark:hover:bg-brand-cyan group-hover:shadow-[0_0_30px_rgba(95,211,230,0.3)] transition-all">
                                <item.icon className="w-8 h-8 text-brand-medium dark:text-brand-cyan group-hover:text-slate-900 dark:group-hover:text-[#030712] transition-colors" />
                            </div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4">{item.title}</h3>
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

export default WhoIsThisFor;
