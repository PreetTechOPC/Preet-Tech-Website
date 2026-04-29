"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Smartphone, Globe, Monitor, Share2, MapPin } from 'lucide-react';

const CreativeServices = () => {
    return (
        <section className="py-24 px-6 bg-slate-50 dark:bg-[#030712] relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32">
                {/* Branding Section (Section 7) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        
                        
                        
                    >
                        <span className="text-brand-medium dark:text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Visual Identity</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8">
                            Branding & <br /> <span className="text-brand-medium dark:text-brand-cyan italic">Identity Creation</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed mb-10 max-w-lg">
                            We don't just design logos; we build iconic brands that resonate with your target audience and stand the test of time.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { title: "Logo Design", icon: Palette },
                                { title: "Brand Guidelines", icon: Monitor },
                                { title: "Business Cards", icon: Smartphone },
                                { title: "Social Media Kits", icon: Share2 }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-4 p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-medium dark:hover:border-brand-cyan transition-all group">
                                    <item.icon className="w-6 h-6 text-brand-medium dark:text-brand-cyan group-hover:scale-110 transition-transform" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative group">
                        <div className="absolute -inset-4 bg-brand-medium/20 dark:bg-brand-cyan/20 blur-3xl opacity-30 rounded-full group-hover:opacity-50 transition-opacity" />
                        <div className="relative aspect-video bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl">
                            <img
                                src="/images/services/content-creation.png"
                                alt="Branding Mockup"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-400"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-[10px]">Premium Identity Mockup</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Website Section (Section 8) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse flex-col-reverse">
                    <div className="relative order-2 lg:order-1">
                        <div className="aspect-square bg-white dark:bg-slate-900 rounded-[4rem] border border-slate-200 dark:border-white/10 overflow-hidden relative shadow-2xl p-6">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-medium/20 dark:bg-brand-cyan/20 blur-3xl" />
                            <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/5">
                                <img
                                    src="/images/services/advance-website.png"
                                    alt="Website Mockup"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Device Floating Elements */}
                            <motion.div
                                
                                
                                className="absolute bottom-12 right-12 w-24 h-48 bg-white dark:bg-slate-900 rounded-3xl border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden hidden md:block"
                            >
                                <img
                                    src="/images/services/app-development.png"
                                    alt="Mobile Mockup"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        
                        
                        
                        className="order-1 lg:order-2"
                    >
                        <span className="text-brand-medium dark:text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Digital Presence</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8">
                            Website & <br /> <span className="text-brand-medium dark:text-brand-cyan italic">Digital Presence</span>
                        </h2>

                        <div className="space-y-8">
                            {[
                                { title: "Business Website", desc: "High-performance Next.js architectures.", icon: Globe },
                                { title: "Landing Pages", desc: "Optimized for maximum conversion rate.", icon: Smartphone },
                                { title: "Google Business Setup", desc: "Be visible where your customers search.", icon: MapPin },
                                { title: "Social Media Strategy", desc: "Cohesive profiles across all platforms.", icon: Share2 }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-medium dark:hover:bg-brand-cyan transition-all">
                                        <item.icon className="w-5 h-5 text-brand-medium dark:text-brand-cyan group-hover:text-slate-900 dark:group-hover:text-[#030712]" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-brand-medium dark:hover:text-brand-cyan transition-colors">{item.title}</h4>
                                        <p className="text-slate-500 text-[10px] font-medium uppercase tracking-widest mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CreativeServices;
