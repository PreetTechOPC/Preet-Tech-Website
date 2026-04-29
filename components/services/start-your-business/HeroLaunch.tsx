"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2,
    User,
    Phone,
    Mail,
    Building2,
    ArrowRight,
    ChevronDown,
    Play,
    Wallet,
    X
} from 'lucide-react';
import PhoneInput from '@/components/PhoneInput';

const HeroLaunch = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        businessIdea: '',
        email: '',
        phone: '',
        countryCode: '+91',
        budget: 'Budget',
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
                    businessName: formData.businessIdea,
                    email: formData.email,
                    phone: `${formData.countryCode} ${formData.phone}`,
                    budget: formData.budget,
                    service: 'Start Business',
                }),
            });

            if (res.ok) {
                setFormStatus('success');
                setFormData({ name: '', businessIdea: '', email: '', phone: '', countryCode: '+91', budget: 'Budget' });
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
        <section className="relative min-h-[90vh] pt-32 pb-20 px-6 lg:px-20 flex items-center overflow-hidden bg-white dark:bg-[#030712] transition-colors duration-300">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.4] dark:opacity-[0.1]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Ambient Glows */}
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#3994fa]/10 blur-[60px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#3994fa]/10 blur-[48px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
                {/* Left Side: Content */}
                <div className="lg:col-span-7">
                    <motion.div
                        
                        
                        
                        className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#3994fa]/5 border border-[#3994fa]/10 dark:bg-[#3994fa]/10 dark:border-[#3994fa]/20 mb-8"
                    >
                        <span className="text-[#3994fa] dark:text-[#3994fa] text-[10px] font-bold uppercase tracking-widest">
                            NEXT-GEN BUSINESS BLUEPRINT
                        </span>
                    </motion.div>

                    <h1
                        
                        
                        
                        className="text-[44px] sm:text-6xl md:text-7xl lg:text-[76px] font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-8"
                    >
                        From Idea To <br />
                        <span className="text-[#3994fa] dark:text-[#3994fa] italic">Income — Together.</span>
                    </h1>

                    <p
                        
                        
                        
                        className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-2xl"
                    >
                        We architect, engineer, and launch your business from the ground up. Registration, branding, technology, and marketing — all synchronized for cinematic impact.
                    </p>

                    <motion.div
                        
                        
                        
                    >
                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="px-8 py-4 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-90 text-white font-bold rounded-2xl transition-all shadow-lg shadow-[#3994fa]/20 flex items-center gap-3 group"
                        >
                            Watch Demo
                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                <Play className="w-3 h-3 fill-white" />
                            </div>
                        </button>
                    </motion.div>
                </div>

                {/* Right Side: Form Card */}
                <motion.div
                    
                    
                    
                    className="lg:col-span-5 relative"
                >
                    <div className="relative bg-white dark:bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/5">
                        <div className="relative z-10">
                            {formStatus === 'success' ? (
                                <motion.div
                                    
                                    
                                    className="py-16 text-center space-y-6"
                                >
                                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Consultation Requested!</h3>
                                    <p className="text-slate-500 dark:text-slate-400">Our experts will contact you within 24 hours.</p>
                                    <button
                                        onClick={() => setFormStatus('idle')}
                                        className="text-[#3994fa] dark:text-[#3994fa] font-bold uppercase text-xs tracking-widest hover:opacity-70 transition-opacity"
                                    >
                                        Back to Form
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleFormSubmit} className="space-y-5">
                                    {/* Full Name */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#3994fa] transition-colors" />
                                            <input required type="text" value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="w-full bg-slate-50 dark:bg-slate-950/30 border border-slate-100 dark:border-slate-800 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-[#3994fa]/30 transition-all text-sm text-slate-700 dark:text-slate-200" />
                                        </div>
                                    </div>

                                    {/* Business Idea */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-1">Business Idea / Industry</label>
                                        <div className="relative group">
                                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#3994fa] transition-colors" />
                                            <input required type="text" value={formData.businessIdea || ''} onChange={(e) => setFormData({ ...formData, businessIdea: e.target.value })} placeholder="e.g. Fintech Startup or Retail Chain" className="w-full bg-slate-50 dark:bg-slate-950/30 border border-slate-100 dark:border-slate-800 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-[#3994fa]/30 transition-all text-sm text-slate-700 dark:text-slate-200" />
                                        </div>
                                    </div>

                                    {/* Email & Phone */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-1">Email</label>
                                            <div className="relative group">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#3994fa] transition-colors" />
                                                <input required type="email" value={formData.email || ''} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" className="w-full bg-slate-50 dark:bg-slate-950/30 border border-slate-100 dark:border-slate-800 rounded-xl py-4 pl-10 pr-4 outline-none focus:border-blue-600/30 transition-all text-[11px] text-slate-700 dark:text-slate-200" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-1">Phone</label>
                                            <PhoneInput
                                                value={formData.phone || ''}
                                                onChange={(val) => setFormData({ ...formData, phone: val })}
                                                countryCode={formData.countryCode}
                                                onCountryCodeChange={(code) => setFormData({ ...formData, countryCode: code })}
                                            />
                                        </div>
                                    </div>

                                    {/* Budget Range */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-1">Investment Range</label>
                                        <div className="relative group">
                                            <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                            <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full bg-slate-50 dark:bg-slate-950/30 border border-slate-100 dark:border-slate-800 rounded-xl py-4 pl-12 pr-10 outline-none focus:border-blue-600/30 transition-all appearance-none text-slate-600 dark:text-slate-400 text-sm cursor-pointer">
                                                <option value="Budget" disabled>Select Investment Range</option>
                                                <option value="₹50,000 - ₹2,00,000">₹50,000 - ₹2,00,000</option>
                                                <option value="₹2,00,000 - ₹10,00,000">₹2,00,000 - ₹10,00,000</option>
                                                <option value="₹10,00,000+">₹10,00,000+</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            disabled={formStatus === 'submitting'}
                                            className="w-full py-4 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-90 text-white font-bold rounded-xl transition-all shadow-lg shadow-[#3994fa]/20 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
                                        >
                                            {formStatus === 'submitting' ? 'Please wait...' : 'GET FREE CONSULTATION'}
                                            {formStatus === 'idle' && <ArrowRight className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Video Modal Popup */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        
                        
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        onClick={() => setIsVideoOpen(false)}
                    >
                        <motion.div
                            
                            
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <video
                                src="/videos/hero-mobile.mp4"
                                autoPlay
                                controls
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default HeroLaunch;
