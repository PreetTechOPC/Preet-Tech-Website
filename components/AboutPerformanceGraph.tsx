"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, Target } from 'lucide-react';

const AboutPerformanceGraph = () => {
    // Data points for the animated path
    const points = "0,100 50,80 100,90 150,40 200,60 250,20 300,45 350,10 400,30";

    const stats = [
        { label: 'Uptime', value: '99.9%', icon: Zap, color: 'text-blue-500' },
        { label: 'Growth', value: '+124%', icon: TrendingUp, color: 'text-emerald-500' },
        { label: 'Users', value: '10k+', icon: Users, color: 'text-indigo-500' },
        { label: 'Target', value: '100%', icon: Target, color: 'text-brand-medium' },
    ];

    return (
        <div className="relative w-full h-full min-h-[400px] flex flex-col gap-4 p-4 md:p-6 bg-white dark:bg-[#0b0f1a] rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    Performance Analytics v2.0
                </div>
            </div>

            {/* Main Graph Area */}
            <div className="relative flex-1 bg-slate-50/50 dark:bg-white/[0.02] rounded-3xl border border-slate-100 dark:border-white/5 p-4 md:p-8 flex flex-col">
                <div className="flex flex-wrap gap-8 mb-8">
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Impact</p>
                        <h3 className="text-3xl font-black text-foreground dark:text-white">84.2%</h3>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Response Time</p>
                        <h3 className="text-3xl font-black text-brand-medium">120ms</h3>
                    </div>
                </div>

                {/* SVG Graph */}
                <div className="relative flex-1 w-full min-h-[150px]">
                    <svg
                        viewBox="0 0 400 100"
                        className="w-full h-full overflow-visible"
                        preserveAspectRatio="none"
                    >
                        {/* Grid Lines */}
                        {[0, 25, 50, 75, 100].map((y) => (
                            <line
                                key={y}
                                x1="0"
                                y1={y}
                                x2="400"
                                y2={y}
                                stroke="currentColor"
                                strokeOpacity="0.05"
                                strokeWidth="0.5"
                            />
                        ))}

                        {/* Area Gradient */}
                        <defs>
                            <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3994fa" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#3994fa" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Background Area */}
                        <path
                            d={`M0,100 L${points} L400,100 Z`}
                            fill="url(#graphGradient)"
                            
                            
                            
                            
                        />

                        {/* The Line */}
                        <polyline
                            points={points}
                            fill="none"
                            stroke="#3994fa"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            
                            
                            
                            
                        />

                        {/* Animated Points */}
                        {points.split(' ').map((p, i) => {
                            const [x, y] = p.split(',');
                            return (
                                <motion.circle
                                    key={i}
                                    cx={x}
                                    cy={y}
                                    r="4"
                                    fill="white"
                                    stroke="#3994fa"
                                    strokeWidth="2"
                                    
                                    
                                    
                                    
                                />
                            );
                        })}
                    </svg>

                    {/* Hover Pulse Effect on Last Point */}
                    <div className="absolute top-[10%] right-[0%]">
                        <div className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-medium opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-medium"></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Grid Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        
                        
                        
                        
                        className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex flex-col items-center text-center group hover:border-brand-medium/30 transition-colors"
                    >
                        <stat.icon className={`w-5 h-5 mb-2 ${stat.color} group-hover:scale-110 transition-transform`} />
                        <span className="text-lg font-black text-foreground dark:text-white leading-none mb-1">{stat.value}</span>
                        <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400">{stat.label}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AboutPerformanceGraph;
