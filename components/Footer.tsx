"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp, Mail, MapPin, Send, Cpu, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
    // Newsletter State
    const [subscribeEmail, setSubscribeEmail] = useState('');
    const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [subscribeMessage, setSubscribeMessage] = useState('');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubscribeStatus('loading');
        setSubscribeMessage('');

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: subscribeEmail })
            });

            const data = await response.json();

            if (data.success) {
                setSubscribeStatus('success');
                setSubscribeEmail('');
                setSubscribeMessage(data.message || 'Subscription successful!');
                setTimeout(() => {
                    setSubscribeStatus('idle');
                    setSubscribeMessage('');
                }, 5000);
            } else {
                setSubscribeStatus('error');
                setSubscribeMessage(data.message || 'Something went wrong.');
            }
        } catch (err) {
            setSubscribeStatus('error');
            setSubscribeMessage('Network Error. Please try again.');
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const FOOTER_LINKS = {
        Solutions: [
            { name: 'Eco Website', href: '/services/eco-website' },
            { name: 'Advance Website', href: '/services/advance-website' },
            { name: 'App Development', href: '/services/app-development' },
            { name: 'Software Development', href: '/services/software-development' },
        ],
        Company: [
            { name: 'About Us', href: '/about' },
            { name: 'Careers', href: '/careers' },
            { name: 'Contact Us', href: '/contact' },
            { name: 'Blog', href: '/blog' },
            { name: 'Business Tools', href: '/services/business-tools' },
        ],
        Legal: [
            { name: 'Privacy Policy', href: '/privacy-policy' },
            { name: 'Terms of Service', href: '/terms-of-service' },
            { name: 'Cookie Policy', href: '/cookie-policy' },
        ]
    };

    return (
        <footer className="bg-black text-white border-t border-white/5 pt-20 md:pt-32 pb-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 md:mb-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="flex items-center gap-4">
                            <img
                                src="/logo-preet-tech-black.png"
                                alt="Preet Tech OPC Private Limited Logo"
                                className="h-12 md:h-14 w-auto object-contain"
                            />
                        </div>
                        <p className="text-slate-400 leading-relaxed max-w-sm text-sm md:text-base italic">
                            "A high-performance digital partner specializing in engineering growth, building scalable architectures, and delivering measurable results for global visionaries."
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Linkedin, href: "https://www.linkedin.com/company/preet-tech?originalSubdomain=in" },
                                { Icon: Twitter, href: "#" },
                                { Icon: Facebook, href: "https://www.facebook.com/Preetinfotech/" },
                                { Icon: Instagram, href: "https://www.instagram.com/preettech/" }
                            ].map(({ Icon, href }, i) => (
                                <motion.a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    
                                    className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-slate-400 transition-all border border-white/5 hover:bg-white/10 hover:border-brand-medium/30"
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                        <div className="space-y-8">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-medium">Solutions</h4>
                            <ul className="space-y-4">
                                {FOOTER_LINKS.Solutions.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group whitespace-nowrap">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-medium/0 group-hover:bg-brand-medium transition-all" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-medium">Company</h4>
                            <ul className="space-y-4">
                                {FOOTER_LINKS.Company.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group whitespace-nowrap">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-medium/0 group-hover:bg-brand-medium transition-all" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Subscription Column */}
                    <div className="lg:col-span-4 space-y-8">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-medium">Stay Updated</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Join our high-performance newsletter to receive the latest insights on digital growth.</p>
                        <form onSubmit={handleSubscribe} className="relative group">
                            <input
                                type="email"
                                placeholder="Email address"
                                value={subscribeEmail}
                                onChange={(e) => setSubscribeEmail(e.target.value)}
                                required
                                suppressHydrationWarning
                                disabled={subscribeStatus === 'loading'}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-medium transition-all text-sm text-white placeholder:text-slate-600 group-hover:bg-white/[0.07] disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={subscribeStatus === 'loading'}
                                className="absolute right-2 top-2 bottom-2 px-5 rounded-xl bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white flex items-center justify-center hover:opacity-90 transition-all shadow-[0_4px_14px_rgba(57,148,250,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {subscribeStatus === 'loading' ? (
                                    <span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                                ) : (
                                    <Send className="w-4 h-4" />
                                )}
                            </button>
                        </form>
                        {subscribeMessage && (
                            <p className={`text-xs ml-2 font-bold ${subscribeStatus === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                                {subscribeMessage}
                            </p>
                        )}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin className="w-3.5 h-3.5" />
                                </div>
                                <span className="flex-1">Preet Tech OPC Private Limited, near Krishna Hospital, Subhash Nagar, Haldwani, Uttarakhand 263139</span>
                            </div>
                            <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <Mail className="w-3.5 h-3.5" />
                                </div>
                                info@preettech.com
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12 text-center lg:text-left">
                        <span className="text-slate-500 text-[9px] font-medium tracking-wide italic">© {new Date().getFullYear()} Preet Tech OPC Private Limited. All Rights Reserved. Designed & Developed by Preet Tech OPC Private Limited.</span>
                        <div className="flex gap-4 lg:gap-6">
                            {FOOTER_LINKS.Legal.map(link => (
                                <Link key={link.name} href={link.href} className="text-slate-500 hover:text-brand-medium text-[9px] transition-colors uppercase tracking-widest font-bold">{link.name}</Link>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-all"
                    >
                        Back to Top
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-medium group-hover:bg-brand-medium/10 transition-all">
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        </div>
                    </button>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
