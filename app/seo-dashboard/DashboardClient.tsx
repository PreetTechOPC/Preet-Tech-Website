"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Search, Shield, Zap, CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock Data for SEO Health
const METRICS = [
    { label: "SEO Score", value: "85/100", icon: Search, color: "text-brand-cyan", bg: "bg-brand-cyan/10" },
    { label: "Performance", value: "92/100", icon: Zap, color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { label: "Accessibility", value: "98/100", icon: Activity, color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { label: "Core Web Vitals", value: "Pass", icon: CheckCircle, color: "text-brand-medium", bg: "bg-brand-medium/10" },
];

const ISSUES = [
    { type: "warning", message: "LocalBusiness Schema missing on Contact Page (Phase 7)" },
    { type: "error", message: "Google Search Console verification code is placeholder (layout.tsx)" },
    { type: "warning", message: "Some blog posts lack Table of Contents (Phase 12)" },
    { type: "success", message: "All 12 Service Pages successfully hydrated with schemas." },
    { type: "success", message: "Canonical tags present on all core routes." }
];

export default function DashboardClient() {
    return (
        <main className="w-full min-h-screen bg-background text-foreground pt-24 pb-12 px-4 md:px-8">
            <Navbar />
            
            <div className="max-w-7xl mx-auto space-y-8">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">Developer SEO Dashboard</h1>
                        <p className="text-slate-400 text-lg">Real-time tracking of technical SEO, accessibility, and performance.</p>
                    </div>
                    <div className="px-4 py-2 bg-brand-medium/20 border border-brand-medium/50 rounded-full text-brand-cyan text-sm font-semibold flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                        Live Monitoring Active
                    </div>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {METRICS.map((metric, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col gap-4"
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${metric.bg}`}>
                                <metric.icon className={`w-6 h-6 ${metric.color}`} />
                            </div>
                            <div>
                                <h3 className="text-slate-400 text-sm font-medium">{metric.label}</h3>
                                <p className="text-3xl font-bold text-white mt-1">{metric.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </section>

                <section className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mt-8">
                    <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                        <Shield className="w-6 h-6 text-brand-medium" />
                        System Diagnostics
                    </h2>
                    
                    <div className="space-y-4">
                        {ISSUES.map((issue, i) => (
                            <div key={i} className={`p-4 rounded-xl border flex items-start gap-3 ${
                                issue.type === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-200' :
                                issue.type === 'warning' ? 'bg-amber-500/10 border-amber-500/20 text-amber-200' :
                                'bg-emerald-500/10 border-emerald-500/20 text-emerald-200'
                            }`}>
                                {issue.type === 'error' && <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />}
                                {issue.type === 'warning' && <AlertTriangle className="w-5 h-5 shrink-0 text-amber-400" />}
                                {issue.type === 'success' && <CheckCircle className="w-5 h-5 shrink-0 text-emerald-400" />}
                                <p className="text-sm font-medium">{issue.message}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
