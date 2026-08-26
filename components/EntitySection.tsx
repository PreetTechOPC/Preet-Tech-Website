"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Code2, Smartphone, Cpu, Users, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const glanceItems = [
    {
        icon: Globe,
        label: "Company",
        value: "Preet Tech OPC Private Limited",
        sub: "Est. 2021 · Haldwani, Uttarakhand",
        color: "text-brand-medium",
        bg: "bg-brand-medium/10",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Haldwani, Uttarakhand",
        sub: "near Krishna Hospital, Subhash Nagar · 263139",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
    },
    {
        icon: Code2,
        label: "Core Services",
        value: "Website Development",
        sub: "Custom · Business · E-commerce · Web Apps",
        color: "text-brand-cyan",
        bg: "bg-brand-cyan/10",
    },
    {
        icon: Smartphone,
        label: "App Development",
        value: "Android · iOS · Cross-Platform",
        sub: "React Native · Flutter · Native",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
    {
        icon: Cpu,
        label: "Software Development",
        value: "Custom Software & Automation",
        sub: "Business Tools · CRM/ERP · SaaS",
        color: "text-amber-500",
        bg: "bg-amber-500/10",
    },
    {
        icon: Users,
        label: "Who We Work With",
        value: "Startups & Businesses",
        sub: "Local Haldwani clients · India · Global remote",
        color: "text-rose-500",
        bg: "bg-rose-500/10",
    },
];

const technologies = [
    "Next.js", "React", "Node.js", "TypeScript",
    "React Native", "Flutter", "MongoDB", "PostgreSQL", "Firebase",
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.07 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function EntitySection() {
    return (
        <section
            aria-label="Preet Tech at a Glance"
            className="py-16 md:py-24 bg-slate-50 dark:bg-[#07090f] border-t border-slate-100 dark:border-white/5 relative overflow-hidden"
        >
            {/* Subtle bg accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-medium/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <span className="text-sm font-bold text-brand-medium tracking-widest uppercase">
                        Company Information
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mt-3 mb-4 text-foreground leading-tight">
                        Preet Tech at a{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan">
                            Glance
                        </span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
                        Preet Tech is a technology company based in{" "}
                        <strong className="text-foreground dark:text-white">Haldwani, Uttarakhand</strong>{" "}
                        providing website development, mobile app development, custom software development and digital solutions for startups and businesses.
                    </p>
                </div>

                {/* Glance Card Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12"
                >
                    {glanceItems.map((item) => (
                        <motion.div
                            key={item.label}
                            variants={itemVariants}
                            className="group p-5 md:p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] hover:border-brand-medium/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-medium/5"
                        >
                            <div className="flex items-start gap-4">
                                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className={`w-5 h-5 ${item.color}`} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
                                        {item.label}
                                    </p>
                                    <p className="text-sm font-bold text-foreground leading-snug mb-0.5">
                                        {item.value}
                                    </p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                        {item.sub}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Technology Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-5 md:p-8 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] mb-10"
                >
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                        Technology Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-600 dark:text-slate-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Service Area + CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-5 md:p-8 rounded-2xl bg-gradient-to-r from-brand-medium/10 via-brand-medium/5 to-transparent border border-brand-medium/20"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-brand-medium/10 flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-5 h-5 text-brand-medium" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Service Area</p>
                            <p className="text-sm font-bold text-foreground">
                                Haldwani, Uttarakhand, India
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Also serving remote and global clients since 2021
                            </p>
                        </div>
                    </div>
                    <Link
                        href="/contact"
                        className="flex items-center gap-2 px-6 py-3 bg-brand-medium text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-medium/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-medium/30 transition-all duration-300 whitespace-nowrap flex-shrink-0"
                    >
                        Get a Free Consultation
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
