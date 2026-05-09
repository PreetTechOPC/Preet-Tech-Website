"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Target, Zap, Clock, Globe } from 'lucide-react';

export interface CaseStudy {
    id: string;
    title: string;
    client: string;
    stats: { label: string; value: string }[];
    category: string;
    description: string;
    image?: string;
    tags: string[];
}

interface CaseStudiesProps {
    studies: CaseStudy[];
    title?: string;
    subtitle?: string;
    themeColor?: string;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ 
    studies, 
    title = "Real Impact. Real Results.", 
    subtitle = "Success Stories",
    themeColor = "#3994fa" 
}) => {
    return (
        <section className="py-24 md:py-36 px-6 relative overflow-hidden bg-white dark:bg-[#030712]">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div 
                    className="absolute top-[10%] right-[5%] w-[40%] h-[40%] blur-[120px] rounded-full opacity-10"
                    style={{ backgroundColor: themeColor }}
                />
                <div 
                    className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] blur-[100px] rounded-full opacity-[0.05]"
                    style={{ backgroundColor: themeColor }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-24 space-y-4">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[10px] font-black uppercase tracking-[0.4em] block"
                        style={{ color: themeColor }}
                    >
                        {subtitle}
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95] uppercase max-w-4xl mx-auto"
                    >
                        {title}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {studies.map((study, idx) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative h-full"
                        >
                            <div className="h-full flex flex-col relative rounded-[2.5rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/10 p-8 md:p-12 transition-all hover:border-brand-medium/30 hover:shadow-2xl hover:shadow-brand-medium/5">
                                {/* Category Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-8">
                                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeColor }} />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">{study.category}</span>
                                </div>

                                <div className="space-y-6 flex-1 flex flex-col">
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tight group-hover:text-brand-medium transition-colors">
                                        {study.title}
                                    </h3>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                        {study.description}
                                    </p>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
                                        {study.stats.map((stat, sIdx) => (
                                            <div key={sIdx} className="space-y-1">
                                                <p className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tabular-nums tracking-tighter" style={{ color: idx % 2 === 0 ? themeColor : 'inherit' }}>
                                                    {stat.value}
                                                </p>
                                                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-6">
                                        {study.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-[9px] font-bold text-slate-500 dark:text-slate-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-8 mt-auto">
                                        <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white group-hover:text-brand-medium transition-colors">
                                            View Full Strategy <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
