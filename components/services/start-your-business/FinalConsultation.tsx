"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, User, Mail, Phone, Lightbulb, IndianRupee, Calendar } from 'lucide-react';
import PhoneInput from '@/components/PhoneInput';
import { useCurrency } from '@/hooks/useCurrency';
import { DollarSign } from 'lucide-react';

const FinalConsultation = () => {
    const { currency } = useCurrency();
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        countryCode: '+91',
        timeline: '',
        businessIdea: '',
        budget: '',
    });

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: `${formData.countryCode} ${formData.phone}`,
                    businessName: formData.businessIdea,
                    industry: `Timeline: ${formData.timeline}`,
                    budget: formData.budget,
                    service: 'Start Business',
                }),
            });

            if (res.ok) {
                setFormStatus('success');
                setFormData({ name: '', email: '', phone: '', countryCode: '+91', timeline: '', businessIdea: '', budget: '' });
            } else {
                setFormStatus('idle');
                alert('Submission failed. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setFormStatus('idle');
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <section className="py-24 space-y-32">
            {/* Free Consultation Section (Section 18) - High-Fidelity Redesign */}
            <div className="max-w-5xl mx-auto px-6 relative">
                {/* Decorative Elements */}
                <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-3 h-3 bg-brand-medium dark:bg-brand-cyan rounded-full hidden lg:block opacity-60 shadow-[0_0_15px_rgba(95,211,230,0.8)]" />

                <div className="text-center mb-16 space-y-4">
                    <span className="text-brand-medium dark:text-brand-cyan text-[11px] font-black uppercase tracking-[0.6em] block">Blueprint Your Success</span>
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
                        FREE <span className="text-brand-medium dark:text-brand-cyan italic">CONSULTATION</span>
                    </h2>
                </div>

                <div className="bg-white dark:bg-slate-900/40 rounded-[3.5rem] p-8 md:p-20 border border-slate-100 dark:border-white/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] dark:shadow-none relative overflow-hidden backdrop-blur-md">
                    {/* Soft Inner Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />

                    {formStatus === 'success' ? (
                        <motion.div

                            
                            className="py-16 text-center"
                        >
                            <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                            </div>
                            <h3 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4">Inquiry Transmitted</h3>
                            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">Our engineering team will bridge the gap. Expect a response within 24 business hours.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name Input */}
                                <div className="relative group">
                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-700 dark:text-slate-300 group-focus-within:text-brand-medium dark:text-brand-cyan transition-colors" />
                                    <input required type="text" value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your Name" className="w-full h-16 bg-slate-50 dark:bg-black/40 border border-slate-100 dark:border-white/5 rounded-2xl py-2 pl-16 pr-6 text-base font-medium placeholder:text-slate-600 dark:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-medium/10 dark:ring-brand-cyan/10 focus:bg-white dark:focus:bg-black transition-all" />
                                </div>

                                {/* Email Input */}
                                <div className="relative group">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-700 dark:text-slate-300 group-focus-within:text-brand-medium dark:text-brand-cyan transition-colors" />
                                    <input required type="email" value={formData.email || ''} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email Address" className="w-full h-16 bg-slate-50 dark:bg-black/40 border border-slate-100 dark:border-white/5 rounded-2xl py-2 pl-16 pr-6 text-base font-medium placeholder:text-slate-600 dark:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-medium/10 dark:ring-brand-cyan/10 focus:bg-white dark:focus:bg-black transition-all" />
                                </div>

                                <div className="space-y-2">
                                    <PhoneInput
                                        value={formData.phone || ''}
                                        onChange={(val) => setFormData({ ...formData, phone: val })}
                                        countryCode={formData.countryCode}
                                        onCountryCodeChange={(code) => setFormData({ ...formData, countryCode: code })}
                                    />
                                </div>

                                {/* Timeline Input */}
                                <div className="relative group">
                                    <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-700 dark:text-slate-300 group-focus-within:text-brand-medium dark:text-brand-cyan transition-colors" />
                                    <input required type="text" value={formData.timeline || ''} onChange={(e) => setFormData({ ...formData, timeline: e.target.value })} placeholder="Timeline (e.g. ASAP)" className="w-full h-16 bg-slate-50 dark:bg-black/40 border border-slate-100 dark:border-white/5 rounded-2xl py-2 pl-16 pr-6 text-[11px] font-black uppercase text-slate-700 dark:text-slate-300 tracking-[0.2em] placeholder:text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-4 focus:ring-brand-medium/10 dark:ring-brand-cyan/10 focus:bg-white dark:focus:bg-black transition-all" />
                                </div>
                            </div>

                            {/* Business Idea */}
                            <div className="relative group">
                                <Lightbulb className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-700 dark:text-slate-300 group-focus-within:text-brand-medium dark:text-brand-cyan transition-colors" />
                                <input required type="text" value={formData.businessIdea || ''} onChange={(e) => setFormData({ ...formData, businessIdea: e.target.value })} placeholder="Business Idea" className="w-full h-16 bg-slate-50 dark:bg-black/40 border border-slate-100 dark:border-white/5 rounded-2xl py-2 pl-16 pr-6 text-base font-medium placeholder:text-slate-600 dark:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-medium/10 dark:ring-brand-cyan/10 focus:bg-white dark:focus:bg-black transition-all" />
                            </div>

                            {/* Target Budget */}
                            <div className="relative group">
                                {currency.code === 'INR' ? (
                                    <IndianRupee className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-700 dark:text-slate-300 group-focus-within:text-brand-medium dark:text-brand-cyan transition-colors" />
                                ) : (
                                    <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-700 dark:text-slate-300 group-focus-within:text-brand-medium dark:text-brand-cyan transition-colors" />
                                )}
                                <input required type="text" value={formData.budget || ''} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} placeholder={`TARGET BUDGET (${currency.code})`} className="w-full h-16 bg-slate-50 dark:bg-black/40 border border-slate-100 dark:border-white/5 rounded-2xl py-2 pl-16 pr-6 text-[11px] font-black uppercase text-slate-700 dark:text-slate-300 tracking-[0.2em] placeholder:text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-4 focus:ring-brand-medium/10 dark:ring-brand-cyan/10 focus:bg-white dark:focus:bg-black transition-all" />
                            </div>

                            <button
                                disabled={formStatus === 'submitting'}
                                className="w-full h-20 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(57,148,250,0.5)] hover:shadow-[0_30px_60px_-10px_rgba(57,148,250,0.6)] hover:-translate-y-1 active:scale-95 disabled:opacity-50 group"
                            >
                                {formStatus === 'submitting' ? 'SYNCHRONIZING...' : 'GET FREE CONSULTATION'}
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                            </button>
                        </form>
                    )}
                </div>
            </div>

            {/* Final CTA (Section 19) */}
            <div className="bg-white dark:bg-[#030712] py-32 px-6 relative overflow-hidden group">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-medium dark:bg-brand-cyan opacity-5 blur-[60px] rounded-full pointer-events-none group-hover:opacity-10 transition-opacity" />

                <div className="max-w-5xl mx-auto text-center relative z-10 space-y-10">
                    <h2 className="text-4xl md:text-[80px] font-black text-slate-900 dark:text-white uppercase tracking-tight leading-[0.8] mb-12">
                        From Idea To Income — <br />
                        <span className="text-brand-medium dark:text-brand-cyan italic">Let's Build It Together</span>
                    </h2>

                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        
                        
                        className="px-16 py-8 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-[0_0_40px_rgba(57,148,250,0.4)] relative group"
                    >
                        <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:animate-ping group-hover:opacity-20 pointer-events-none" />
                        Start My Business Today
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default FinalConsultation;
