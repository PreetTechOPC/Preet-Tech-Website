"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, PieChart, BarChart3, Rocket, Users, Globe, Zap } from 'lucide-react';

const StrategyAndMarketing = () => {
    return (
        <section className="py-24 px-6 bg-white dark:bg-[#030712] relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32">
                {/* Strategy Section (Section 9) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7">
                        <span className="text-brand-medium dark:text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Growth blueprint</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8">
                            Business Strategy <br /> & <span className="text-brand-medium dark:text-brand-cyan italic">Planning</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { title: "Revenue System", desc: "Architecting sustainable monetization streams.", icon: PieChart },
                                { title: "Market Research", desc: "Data-driven competitor and audience analysis.", icon: Target },
                                { title: "Positioning", desc: "Finding your 'Blue Ocean' in a red market.", icon: Globe },
                                { title: "Growth Roadmap", desc: "Step-by-step scaling plan for the next 24 months.", icon: TrendingUp }
                            ].map((item, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="w-10 h-10 rounded-xl bg-brand-medium/10 dark:bg-brand-cyan/10 border border-brand-medium/20 dark:border-brand-cyan/20 flex items-center justify-center">
                                        <item.icon className="w-5 h-5 text-brand-medium dark:text-brand-cyan" />
                                    </div>
                                    <h4 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-tight">{item.title}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-[4rem] p-12 border border-slate-200 dark:border-white/10 relative overflow-hidden shadow-2xl flex items-center justify-center">
                            <motion.img
                                
                                
                                
                                src="/images/services/advance-website.png"
                                alt="Strategy Infographic"
                                className="w-full h-auto drop-shadow-2xl rounded-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Marketing & Launch (Section 11) */}
                <motion.div
                    
                    
                    
                    className="relative p-10 md:p-14 rounded-[3rem] bg-[#FAFBFC] dark:bg-white/5 border border-slate-200/60 dark:border-white/10 overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-none"
                >
                    <div className="relative z-10 max-w-4xl">
                        <span className="text-[#3994fa] dark:text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block font-sans">Momentum Creation</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8 leading-[1]">
                            Marketing & <br /> <span className="text-[#3994fa] dark:text-brand-cyan italic">Launch Strategy</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Launch Campaign", desc: "Generating massive hype before day one.", icon: Rocket },
                                { title: "Social Impact", desc: "Organic viral growth and community setup.", icon: Users },
                                { title: "Performance Ad Ops", desc: "Precision paid media for instant traffic.", icon: Zap }
                            ].map((item, i) => (
                                <div key={i} className="group cursor-default">
                                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                        <item.icon strokeWidth={2} className="w-6 h-6 text-[#3994fa] dark:text-brand-cyan" />
                                    </div>
                                    <h4 className="text-slate-900 dark:text-white text-[14px] font-black uppercase tracking-tight mb-2 group-hover:text-[#3994fa] dark:group-hover:text-brand-cyan transition-colors">{item.title}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-[11px] font-medium leading-[1.8]">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-10 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-12">
                            {[
                                { label: "Target ROAS", value: "4.5x+" },
                                { label: "Launch Speed", value: "14 Days" },
                                { label: "Support", value: "365/24/7" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <p className="text-slate-900 dark:text-white font-black text-2xl md:text-3xl mb-1">{stat.value}</p>
                                    <p className="text-[#3994fa] dark:text-brand-cyan text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StrategyAndMarketing;
