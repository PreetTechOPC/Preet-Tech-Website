"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users2, ShieldCheck, FileCheck, ClipboardCheck, Scale } from 'lucide-react';

const REG_TYPES = [
    { title: "Sole Proprietorship", icon: Building2, desc: "Fastest entry for individual founders." },
    { title: "Partnership Firm", icon: Users2, desc: "For collaborative ventures with shared equity." },
    { title: "Private Limited", icon: ShieldCheck, desc: "The standard for scalable startup models." },
    { title: "GST Registration", icon: FileCheck, desc: "Ensure your business is tax-compliant." },
    { title: "MSME Registration", icon: ClipboardCheck, desc: "Unlock government benefits and schemes." },
];

const LEGAL_SERVICES = [
    "Co-founder Agreements", "Service Level Agreements", "NDA Documentation", "Compliance Audits", "IP Protection Support"
];

const RegistrationServices = () => {
    return (
        <section className="py-24 px-6 bg-white dark:bg-[#030712] relative scroll-reveal">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Left: Registration Cards */}
                    <div>
                        <span className="text-brand-medium dark:text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Registration & Incorporation</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-12">
                            Secure Your <span className="text-brand-medium dark:text-brand-cyan italic">Entity</span>
                        </h2>

                        <div className="space-y-4">
                            {REG_TYPES.map((type, i) => (
                                <motion.div
                                    key={i}
                                    
                                    
                                    
                                    
                                    className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-brand-medium/30 dark:hover:border-brand-cyan/30 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-brand-medium dark:hover:bg-brand-cyan transition-all">
                                        <type.icon className="w-6 h-6 text-brand-medium dark:text-brand-cyan group-hover:text-slate-900 dark:group-hover:text-[#030712]" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{type.title}</h4>
                                        <p className="text-slate-500 text-[10px] font-medium uppercase tracking-widest mt-1">{type.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Legal Assistance */}
                    <div className="lg:pt-24">
                        <div className="p-12 rounded-[3.5rem] bg-white dark:bg-slate-900 dark:bg-white/5 border border-slate-200 dark:border-white/5 dark:border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-medium/10 dark:bg-brand-cyan/10 blur-3xl" />
                            <div className="relative z-10">
                                <Scale className="w-12 h-12 text-brand-medium dark:text-brand-cyan mb-8" />
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-6">Legal & <span className="text-brand-medium dark:text-brand-cyan italic">Compliance</span></h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed mb-10">
                                    We manage the core legal framework so you can operate with total peace of mind. Our experts handle the fine print while you focus on the big picture.
                                </p>

                                <div className="space-y-4">
                                    {LEGAL_SERVICES.map((service, i) => (
                                        <div key={i} className="flex items-center gap-4 text-slate-500 dark:text-white/80 text-xs font-bold uppercase tracking-widest">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-medium dark:bg-brand-cyan" />
                                            {service}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationServices;
