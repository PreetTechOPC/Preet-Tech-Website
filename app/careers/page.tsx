"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
    Briefcase, 
    Zap, 
    Globe, 
    Rocket, 
    Users, 
    Target, 
    ArrowRight, 
    CheckCircle2, 
    Clock, 
    MapPin, 
    Code2, 
    Layout, 
    TrendingUp, 
    Shield, 
    Heart, 
    Coffee, 
    Cpu, 
    ChevronRight,
    Star,
    Sparkles,
    X,
    Upload,
    FileText,
    CheckCircle,
    Video,
    Palette,
    Search,
    Megaphone,
    UserCheck,
    Map
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreeSphereScene from '@/components/ThreeSphere';
import PhoneInput from '@/components/PhoneInput';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

// --- 🛰️ Lightweight Static Background (CSS-only) ---
const TechnicalBackground = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
                backgroundImage: `linear-gradient(to right, #3994fa 1px, transparent 1px), linear-gradient(to bottom, #3994fa 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
            }}
        />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#3994fa]/5 blur-[48px] rounded-full opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#3994fa]/5 blur-[48px] rounded-full opacity-40" />
    </div>
);

const CareersPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState<any>(null);
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        position: '',
        name: '',
        email: '',
        phone: '',
        countryCode: '+91',
        experience: '',
        portfolio: '',
        motivation: '',
        resume: null as File | null,
        resumeName: ''
    });

    const generatePDF = (data: any, position: string) => {
        const doc = new jsPDF();
        
        // Header
        doc.setFontSize(22);
        doc.setTextColor(57, 148, 250); // Brand Medium
        doc.text('Job Application Summary', 20, 20);
        
        doc.setFontSize(10);
        doc.setTextColor(100, 116, 139); // Slate 500
        doc.text(`Preet Tech OPC Private Limited | Generated on ${new Date().toLocaleString()}`, 20, 30);
        
        // Table
        autoTable(doc, {
            startY: 40,
            head: [['Field', 'Details']],
            body: [
                ['Applied Position', position],
                ['Full Name', data.name],
                ['Email Address', data.email],
                ['Phone Number', data.phone],
                ['Experience', `${data.experience} Year(s)`],
                ['Portfolio/LinkedIn', data.portfolio || 'Not provided'],
                ['Motivation', data.motivation],
            ],
            theme: 'striped',
            headStyles: { fillColor: [57, 148, 250], textColor: [255, 255, 255], fontStyle: 'bold' },
            bodyStyles: { fontSize: 10 },
            columnStyles: { 0: { fontStyle: 'bold', cellWidth: 50 } }
        });
        
        doc.save(`Application_${data.name.replace(/\s/g, '_')}.pdf`);
    };

    const handleApplySubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');

        try {
            const response = await fetch('/api/apply', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    position: selectedJob?.title,
                    resumeName: selectedFile?.name || 'No file',
                    ...formData
                })
            });

            if (response.ok) {
                // Generate PDF on success
                generatePDF({ ...formData, resume: selectedFile?.name || 'Not uploaded' }, selectedJob?.title);
                setFormStatus('success');
                // Reset form
                setFormData({
                    position: '',
                    name: '',
                    email: '',
                    phone: '',
                    countryCode: '+91',
                    experience: '',
                    portfolio: '',
                    motivation: '',
                    resume: null,
                    resumeName: ''
                });
                setSelectedFile(null);
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setFormStatus('error');
        }
    };

    const openApplyModal = (job: any) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };
    
    const JOBS = [
        {
            id: 'frontend-engineer',
            title: 'Senior Frontend Engineer',
            dept: 'Engineering',
            type: 'Full-Time',
            location: 'Remote / Haldwani',
            icon: Code2,
            tags: ['React', 'Next.js', 'Framer Motion'],
            salary: 'Competitive'
        },
        {
            id: 'ui-ux-designer',
            title: 'Product Designer (UI/UX)',
            dept: 'Design',
            type: 'Full-Time',
            location: 'Hybrid',
            icon: Layout,
            tags: ['Figma', 'Prototyping', 'Design Systems'],
            salary: 'Competitive'
        },
        {
            id: 'performance-marketer',
            title: 'Performance Marketing Specialist',
            dept: 'Growth',
            type: 'Full-Time',
            location: 'Remote',
            icon: TrendingUp,
            tags: ['Meta Ads', 'Google Ads', 'Analytics'],
            salary: 'Competitive'
        },
        {
            id: 'backend-dev',
            title: 'Node.js Backend Developer',
            dept: 'Engineering',
            type: 'Full-Time',
            location: 'Haldwani',
            icon: Cpu,
            tags: ['Node.js', 'PostgreSQL', 'AWS'],
            salary: 'Competitive'
        },
        {
            id: 'video-editor',
            title: 'Video Editor',
            dept: 'Design',
            type: 'Full-Time',
            location: 'Remote / Haldwani',
            icon: Video,
            tags: ['Premiere Pro', 'After Effects', 'Short-form'],
            salary: 'Competitive'
        },
        {
            id: 'graphics-designer',
            title: 'Graphics Designer',
            dept: 'Design',
            type: 'Full-Time',
            location: 'Hybrid',
            icon: Palette,
            tags: ['Branding', 'Social Media', 'Figma'],
            salary: 'Competitive'
        },
        {
            id: 'seo-expert',
            title: 'SEO Expert',
            dept: 'Growth',
            type: 'Full-Time',
            location: 'Remote',
            icon: Search,
            tags: ['Technical SEO', 'Backlinks', 'Optimization'],
            salary: 'Competitive'
        },
        {
            id: 'digital-marketer',
            title: 'Digital Marketer Executive',
            dept: 'Growth',
            type: 'Full-Time',
            location: 'Remote / Haldwani',
            icon: Megaphone,
            tags: ['Campaigns', 'Social Ads', 'Content Strategy'],
            salary: 'Competitive'
        },
        {
            id: 'bd-executive',
            title: 'Business Development Executive',
            dept: 'Sales',
            type: 'Full-Time',
            location: 'Haldwani',
            icon: Briefcase,
            tags: ['Lead Gen', 'Outreach', 'CRM'],
            salary: 'Competitive'
        },
        {
            id: 'bd-manager',
            title: 'Business Development Manager',
            dept: 'Sales',
            type: 'Full-Time',
            location: 'Remote / Hybrid',
            icon: UserCheck,
            tags: ['Strategy', 'Partnerships', 'Revenue'],
            salary: 'Competitive'
        },
        {
            id: 'regional-manager',
            title: 'Regional Manager',
            dept: 'Operations',
            type: 'Full-Time',
            location: 'Regional Office',
            icon: Map,
            tags: ['Operations', 'Team Leadership', 'Scaling'],
            salary: 'Competitive'
        },
        {
            id: 'state-manager',
            title: 'State Manager',
            dept: 'Operations',
            type: 'Full-Time',
            location: 'State HQ',
            icon: Globe,
            tags: ['Compliance', 'Strategic Planning', 'Management'],
            salary: 'Competitive'
        }
    ];

    const BENEFITS = [
        { title: 'Global Impact', desc: 'Work on projects that reach millions of users worldwide.', icon: Globe },
        { title: 'Cutting Edge', desc: 'We only use the latest tech stacks and modern architectures.', icon: Zap },
        { title: 'Growth Mindset', desc: 'Unlimited learning resources and mentorship programs.', icon: Target },
        { title: 'Flexible Work', desc: 'Work from where you are most productive — remote or hybrid.', icon: Clock },
        { title: 'Health & Wellness', desc: 'Comprehensive health coverage and mental wellness support.', icon: Heart },
        { title: 'Modern Tools', desc: 'MacBooks, premium software, and an ergonomic setup.', icon: Briefcase }
    ];

    return (
        <main className="relative z-10 selection:bg-brand-medium/20 bg-white dark:bg-[#050608] text-slate-900 dark:text-white transition-colors duration-300 overflow-x-hidden font-sans">
            <Navbar isDark={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />

            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
                <TechnicalBackground />
                <ThreeSphereScene />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center gap-6 mb-4"
                        >
                            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm">
                                <div className="flex items-center -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" />
                                        </div>
                                    ))}
                                    <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-brand-medium flex items-center justify-center text-[10px] font-bold text-white">+12</div>
                                </div>
                                <div className="h-4 w-px bg-slate-200 dark:bg-white/10" />
                                <div className="flex items-center gap-1.5">
                                    <div className="flex items-center gap-0.5">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">4.9/5 Average Rating</span>
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-medium/10 border border-brand-medium/20">
                                <span className="w-2 h-2 rounded-full bg-brand-medium animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-medium">We're Hiring</span>
                            </div>
                        </motion.div>
                        
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-6xl md:text-[7.5rem] font-black tracking-[-0.04em] leading-[0.85] uppercase"
                        >
                            <span className="block text-slate-900 dark:text-white mb-2">Shape the</span>
                            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#3994fa] via-[#004aad] to-[#3994fa] bg-[length:200%_auto] animate-gradient italic px-2">
                                Future of Digital.
                                <span className="absolute inset-0 bg-brand-medium/20 blur-[40px] -z-10 opacity-50" />
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto tracking-tight"
                        >
                            Join a team of elite engineers, designers, and growth experts building <br className="hidden md:block" />
                            <span className="text-slate-900 dark:text-white">high-performance solutions</span> for global visionaries.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
                        >
                            <a href="#positions" className="px-10 py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl shadow-[#3994fa]/20 hover:scale-105 transition-all">
                                View Openings
                            </a>
                            <a href="/about" className="px-10 py-5 border border-slate-200 dark:border-white/10 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                                Our Mission
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>





            {/* 4. Open Positions */}
            <section id="positions" className="py-24 md:py-32 px-6 bg-slate-50 dark:bg-[#030712]/50">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div className="space-y-4">
                            <span className="text-brand-medium text-[10px] font-black uppercase tracking-[0.4em] block">Current Openings</span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-[0.95]">Join the <span className="text-brand-medium italic">Engine.</span></h2>
                        </div>
                        <p className="text-slate-500 text-sm font-medium max-w-sm">
                            Don't see a role that fits? We are always looking for exceptional talent. <a href="/contact" className="text-brand-medium hover:underline">Send us an email.</a>
                        </p>
                    </div>

                    <div className="space-y-4">
                        {JOBS.map((job, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:border-brand-medium/30 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-brand-medium/10 flex items-center justify-center shrink-0">
                                        <job.icon className="w-7 h-7 text-brand-medium" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white uppercase leading-none">{job.title}</h3>
                                            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">{job.dept}</span>
                                        </div>
                                        <div className="flex items-center gap-6 text-xs font-medium text-slate-500">
                                            <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> {job.location}</div>
                                            <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> {job.type}</div>
                                        </div>
                                        <div className="flex gap-2">
                                            {job.tags.map(tag => (
                                                <span key={tag} className="text-[10px] font-bold text-brand-medium/60">#{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => openApplyModal(job)}
                                    className="px-8 py-4 bg-brand-medium/5 hover:bg-brand-medium text-brand-medium hover:text-white border border-brand-medium/20 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-3"
                                >
                                    Apply Now <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl"
                        />
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-white dark:bg-[#0a0b0f] rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden"
                        >
                            {/* Modal Header */}
                            <div className="p-8 md:p-10 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50/50 dark:bg-white/[0.02]">
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Job Application</h3>
                                    <p className="text-sm text-slate-500 font-medium italic">Join the high-performance engine at Preet Tech.</p>
                                </div>
                                <button 
                                    onClick={() => setIsModalOpen(false)}
                                    className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-brand-medium transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-8 md:p-10 max-h-[70vh] overflow-y-auto custom-scrollbar">
                                {formStatus === 'success' ? (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center py-12 space-y-6"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto text-emerald-500">
                                            <CheckCircle className="w-10 h-10" />
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase">Application Received!</h4>
                                            <p className="text-slate-500 font-medium">Our talent acquisition team will review your profile and reach out within 48 hours.</p>
                                        </div>
                                        <button 
                                            onClick={() => {
                                                setIsModalOpen(false);
                                                setFormStatus('idle');
                                            }}
                                            className="px-8 py-4 bg-brand-medium text-white rounded-xl font-black uppercase tracking-widest text-[10px]"
                                        >
                                            Return to Careers
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form className="space-y-6" onSubmit={handleApplySubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Position (Auto-filled)</label>
                                                <input 
                                                    type="text" 
                                                    value={selectedJob?.title || ''} 
                                                    readOnly 
                                                    className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-sm font-bold text-brand-medium outline-none cursor-not-allowed"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                                                <input 
                                                    required
                                                    type="text" 
                                                    placeholder="John Doe" 
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-sm font-medium outline-none focus:border-brand-medium transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                                                <input 
                                                    required
                                                    type="email" 
                                                    placeholder="john@example.com" 
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-sm font-medium outline-none focus:border-brand-medium transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Phone Number</label>
                                                <PhoneInput 
                                                    value={formData.phone}
                                                    onChange={(val) => setFormData({ ...formData, phone: val })}
                                                    countryCode={formData.countryCode}
                                                    onCountryCodeChange={(code) => setFormData({ ...formData, countryCode: code })}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Experience (Years)</label>
                                            <select 
                                                required 
                                                value={formData.experience}
                                                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                                className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-sm font-medium outline-none focus:border-brand-medium transition-all appearance-none"
                                            >
                                                <option value="" className="bg-white dark:bg-slate-900">Select Experience</option>
                                                <option value="0-1" className="bg-white dark:bg-slate-900">0 - 1 Year</option>
                                                <option value="1-3" className="bg-white dark:bg-slate-900">1 - 3 Years</option>
                                                <option value="3-5" className="bg-white dark:bg-slate-900">3 - 5 Years</option>
                                                <option value="5+" className="bg-white dark:bg-slate-900">5+ Years</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Portfolio / LinkedIn URL</label>
                                            <input 
                                                type="url" 
                                                placeholder="https://linkedin.com/in/johndoe" 
                                                value={formData.portfolio}
                                                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                                                className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-sm font-medium outline-none focus:border-brand-medium transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Why should we hire you?</label>
                                            <textarea 
                                                required
                                                rows={4}
                                                placeholder="Briefly describe your core expertise and why you want to join our engine..." 
                                                value={formData.motivation}
                                                onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                                                className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-sm font-medium outline-none focus:border-brand-medium transition-all resize-none"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Resume / CV</label>
                                            <div className="relative group/upload">
                                                <input 
                                                    required
                                                    type="file" 
                                                    accept=".pdf,.doc,.docx"
                                                    onChange={(e) => {
                                                        if (e.target.files && e.target.files[0]) {
                                                            setSelectedFile(e.target.files[0]);
                                                        }
                                                    }}
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                                />
                                                <div className={`w-full bg-slate-50 dark:bg-white/5 border-2 border-dashed rounded-3xl p-8 flex flex-col items-center justify-center gap-3 transition-all ${selectedFile ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-slate-200 dark:border-white/10 group-hover/upload:border-brand-medium/50'}`}>
                                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform ${selectedFile ? 'bg-emerald-500 text-white' : 'bg-brand-medium/10 text-brand-medium group-hover/upload:scale-110'}`}>
                                                        {selectedFile ? <CheckCircle className="w-6 h-6" /> : <Upload className="w-6 h-6" />}
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="text-sm font-bold text-slate-900 dark:text-white uppercase">
                                                            {selectedFile ? selectedFile.name : 'Upload PDF or DOCX'}
                                                        </p>
                                                        <p className="text-[10px] text-slate-500 font-medium italic mt-1">
                                                            {selectedFile ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB` : 'Max file size: 5MB'}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-4 space-y-4">
                                            {formStatus === 'error' && (
                                                <motion.p 
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-red-500 text-[10px] font-black uppercase tracking-widest text-center bg-red-500/5 py-3 rounded-xl border border-red-500/20"
                                                >
                                                    Submission Failed. Please check your connection or email us.
                                                </motion.p>
                                            )}
                                            <button 
                                                type="submit"
                                                disabled={formStatus === 'submitting'}
                                                className="w-full py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-[#3994fa]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {formStatus === 'submitting' ? (
                                                    <>
                                                        <span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                                                        Processing...
                                                    </>
                                                ) : (
                                                    <>
                                                        Submit Application <ArrowRight className="w-4 h-4" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* 5. Final CTA */}
            <section className="py-24 md:py-36 px-6 relative text-center">
                <div className="max-w-4xl mx-auto space-y-10 relative z-10">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight uppercase">
                        Not Ready to <span className="text-brand-medium italic">Apply?</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        Follow our journey or reach out for a casual chat. We love meeting people who are passionate about building the future.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
                        <a href="https://www.linkedin.com/company/preet-tech" className="w-full sm:w-auto px-12 py-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl font-black uppercase tracking-widest text-xs hover:border-brand-medium transition-all flex items-center justify-center gap-3">
                            Follow on LinkedIn <Users className="w-5 h-5" />
                        </a>
                        <a href="/contact" className="w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-[#3994fa]/20 hover:scale-105 transition-all flex items-center justify-center gap-3">
                            General Inquiry <Sparkles className="w-5 h-5" />
                        </a>
                    </div>
                </div>
                
                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-medium/5 blur-[120px] rounded-full -z-10" />
            </section>

            <Footer />
        </main>
    );
};

export default CareersPage;
