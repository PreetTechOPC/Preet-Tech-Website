"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Code2, Rocket, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface LocationClientProps {
    city: string;
}

export default function LocationClient({ city }: LocationClientProps) {
    return (
        <main className="w-full min-h-screen bg-background text-foreground transition-colors duration-300">
            <Navbar />
            
            <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center space-y-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-4 py-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full flex items-center gap-2 text-brand-cyan text-sm font-semibold uppercase tracking-widest"
                    >
                        <MapPin className="w-4 h-4" />
                        Serving {city} & Beyond
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white max-w-4xl"
                    >
                        Top Website & Software Development Company in <span className="text-brand-cyan">{city}</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed"
                    >
                        Preet Tech delivers enterprise-grade software development, AI automation, and ROI-focused digital marketing for businesses in {city}. Scale your operations with our world-class engineering team.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="pt-8 flex flex-col sm:flex-row gap-4 w-full justify-center"
                    >
                        <Link href="/contact" className="px-8 py-4 bg-brand-cyan text-white font-bold rounded-xl hover:bg-brand-medium transition-colors flex items-center justify-center gap-2">
                            Get Free Consultation <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/services" className="px-8 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-xl hover:bg-white/10 transition-colors">
                            Explore Our Services
                        </Link>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-slate-900/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: Code2, title: "Custom Software", desc: `Bespoke enterprise applications and SaaS platforms for ${city} businesses.` },
                        { icon: Rocket, title: "AI Automation", desc: "Integrate Generative AI to automate workflows and reduce operational costs." },
                        { icon: BarChart3, title: "Performance Marketing", desc: "Data-driven SEO and paid ads to dominate the local market." },
                        { icon: ShieldCheck, title: "Secure Cloud", desc: "AWS & Google Cloud infrastructure designed for maximum uptime." }
                    ].map((feature, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-cyan/30 transition-colors">
                            <feature.icon className="w-10 h-10 text-brand-cyan mb-4" />
                            <h2 className="text-xl font-bold text-white mb-2">{feature.title}</h2>
                            <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                    Why {city} Businesses Choose Preet Tech?
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                    We don't just build websites; we engineer digital growth systems. As a trusted technology partner in {city}, we understand the local market dynamics while delivering global software standards. From startups to established enterprises, our solutions are designed to scale seamlessly.
                </p>
                <div className="pt-8">
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-colors">
                        Start Your Project
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
