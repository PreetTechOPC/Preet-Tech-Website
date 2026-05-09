"use client";
import React from 'react';
import { motion } from 'framer-motion';

const SocialDashboard = () => {
    const stats = [
        { label: 'ENGAGEMENT', value: '+340%', color: 'text-emerald-500' },
        { label: 'FOLLOWERS', value: '52K', color: 'text-blue-500' },
        { label: 'RETENTION', value: '89%', color: 'text-blue-500' },
    ];

    const bars = [40, 60, 35, 80, 55, 90, 70, 95, 65, 85];

    return (
        <div className="relative">

            {/* Decorative elements to match the requested design */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600/40 blur-[1px] hidden lg:block" />
            <div className="absolute -right-4 bottom-1/4 w-3 h-3 rounded-full bg-indigo-500/30 blur-[1px] hidden lg:block" />

            <div className="relative p-1 rounded-[2.5rem] bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-2xl backdrop-blur-sm">
                <div className="bg-white dark:bg-[#0a0f18] rounded-[2rem] overflow-hidden border border-white dark:border-white/5 p-8 md:p-10 space-y-8">
                    {/* Window Controls & Title */}
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                            <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f57]" />
                            <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
                        </div>
                        <span className="text-xs font-mono text-slate-400 tracking-wider">Social Dashboard</span>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 text-center shadow-sm hover:shadow-md transition-shadow"
                            >
                                <span className={`block text-3xl font-black mb-1 ${stat.color}`}>
                                    {stat.value}
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                    {stat.label}
                                </span>
                            </div>

                        ))}
                    </div>

                    {/* Main Chart */}
                    <div className="h-48 md:h-64 rounded-2xl bg-slate-50 dark:bg-[#0c1421] border border-slate-100 dark:border-white/5 relative overflow-hidden flex items-end p-6 gap-2">
                        {bars.map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: [`${h * 0.8}%`, `${h}%`, `${h * 0.9}%`, `${h}%`] }}
                                transition={{
                                    height: {
                                        duration: 2.5 + Math.random() * 1.5,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut",
                                        delay: i * 0.05
                                    }
                                }}
                                className="flex-1 bg-gradient-to-t from-blue-500/80 to-blue-400/90 rounded-t-lg relative group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg"
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        {/* Top Post */}
                        <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 space-y-4">

                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                TOP POST
                            </div>
                            <div className="h-10 w-full bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100/50 dark:border-white/5 overflow-hidden">
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{ 
                                        duration: 3, 
                                        repeat: Infinity, 
                                        ease: "linear" 
                                    }}
                                    className="h-full w-full bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-blue-500/0"
                                />
                            </div>
                        </div>


                        {/* Reach */}
                        <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 space-y-6">

                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                REACH
                            </div>
                            <div className="relative h-2.5 w-full bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "70%" }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                    className="h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialDashboard;
