"use client";

import React, { memo } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Users,
    Target,
    Rocket,
    Zap,
    Globe,
    Cpu,
    Heart,
    CheckCircle2,
    ArrowRight,
    Code2,
    Command,
    Palette,
    Cloud,
    MessageSquare,
    Smile,
    Headphones
} from 'lucide-react';

import ThreeSphereScene from '../../components/ThreeSphere';
import AboutPerformanceGraph from '../../components/AboutPerformanceGraph';

const AboutHero = memo(() => {
    const { scrollYProgress } = useScroll();
    
    // Separate transforms for smoother performance
    const opacityHero = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const scaleHero = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
            <motion.div style={{ opacity: opacityHero, scale: scaleHero }} className="absolute inset-0 z-0 gpu">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-medium/20 rounded-full blur-[60px]" />
                <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[48px]" />
                <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[60px]" />

                <div className="absolute inset-0 z-[1] flex items-center justify-center opacity-60 lg:opacity-90">
                    <div className="w-full h-full max-w-5xl opacity-40">
                        <ThreeSphereScene />
                    </div>
                </div>

                <div className="absolute inset-0 z-[2]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent_100%)]" />
                </div>
            </motion.div>

            {/* Floating Badges & Accents (Desktop) */}
            <div className="absolute inset-0 z-10 pointer-events-none hidden xl:block overflow-hidden">
                <motion.div 
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[25%] left-[8%] glass-morphism p-5 rounded-[2rem] border border-brand-medium/20 shadow-2xl flex items-center gap-4 bg-white/5 backdrop-blur-xl"
                >
                    <div className="w-12 h-12 rounded-2xl bg-brand-medium/10 flex items-center justify-center text-brand-medium">
                        <Globe className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-0.5">Global Reach</p>
                        <p className="text-sm font-black text-foreground">Worldwide Focus</p>
                    </div>
                </motion.div>

                <motion.div 
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 7, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                    className="absolute bottom-[30%] right-[8%] glass-morphism p-5 rounded-[2rem] border border-brand-cyan/20 shadow-2xl flex items-center gap-4 bg-white/5 backdrop-blur-xl"
                >
                    <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                        <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-0.5">Innovation</p>
                        <p className="text-sm font-black text-foreground">AI Powered</p>
                    </div>
                </motion.div>

                {/* Micro tech dots/accents */}
                <motion.div 
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-[40%] right-[15%] text-brand-medium/30"
                >
                    
                </motion.div>
                <motion.div 
                    animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute bottom-[20%] left-[15%] text-brand-cyan/20"
                >
                    <Zap className="w-20 h-20" />
                </motion.div>
            </div>

            {/* Mobile Floating Accents */}
            <div className="absolute inset-0 z-10 pointer-events-none xl:hidden overflow-hidden">
                <motion.div 
                    animate={{ y: [0, -15, 0], opacity: [0.2, 0.5, 0.2], rotate: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[15%] left-[5%] text-brand-medium/30"
                >
                    <Globe className="w-10 h-10" />
                </motion.div>
                <motion.div 
                    animate={{ y: [0, 15, 0], opacity: [0.15, 0.4, 0.15], rotate: [0, -10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                    className="absolute top-[45%] right-[-5%] text-brand-cyan/20"
                >
                    <Cpu className="w-16 h-16" />
                </motion.div>
                
                {/* Mobile background depth blob */}
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full h-1/2 bg-brand-medium/5 blur-[100px] rounded-full pointer-events-none" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-20 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-medium/10 text-brand-medium text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-brand-medium/20 backdrop-blur-md">
                        
                        Innovation Meets Execution
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1] md:leading-[1.1] uppercase tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-foreground/40">
                        Building the Future of <br className="hidden md:block" />
                        <span className="text-brand-medium">Digital Innovation</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed font-medium mb-12">
                        We are a <strong className="text-foreground dark:text-white">global-focused digital innovation company</strong> empowering startups and businesses with <strong className="text-foreground dark:text-white">scalable websites</strong>, intelligent software solutions, and modern digital transformation strategies built for the future.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/contact" className="px-8 py-3.5 rounded-full bg-brand-medium hover:bg-brand-medium/90 text-white text-[11px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-brand-medium/20 hover:-translate-y-0.5 transition-all duration-300">
                            Work With Us <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator (Mobile) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.5, 1] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 xl:hidden pointer-events-none"
            >
                <div className="w-5 h-8 rounded-full border-2 border-slate-400/30 flex justify-center p-1">
                    <motion.div 
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-2 bg-brand-medium rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
});
AboutHero.displayName = 'AboutHero';

export default function AboutPage() {
    return (
        <main className="relative z-10 selection:bg-brand-medium/30 overflow-x-clip bg-background text-foreground transition-colors duration-300">
            <Navbar />

            <AboutHero />

            {/* 2. WHO WE ARE: HUMAN STORY */}
            <section className="py-24 px-6 bg-white dark:bg-[#07090f] transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden aspect-square max-w-lg mx-auto border border-slate-200 dark:border-white/5">
                                <div className="absolute inset-0 bg-brand-medium/5" />
                                <Image
                                    src="/Assets/Logo/About-page-image.png"
                                    alt="Our Team"
                                    fill
                                    className="object-cover grayscale transition-all duration-400 hover:grayscale-0 hover:scale-105"
                                />
                                <div className="absolute inset-x-8 bottom-8 p-6 bg-white/95 dark:bg-black/80 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-white/10">
                                    <p className="text-sm font-medium italic text-slate-600 dark:text-slate-300">
                                        \"We don’t just write code; we architect experiences that redefine how businesses interact with the world.\"
                                    </p>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-brand-medium" />
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-brand-cyan" />
                        </div>

                        <div>
                            <span className="text-brand-medium font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Our Story</span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 leading-none">
                                Premier Digital <br />
                                <span className="text-brand-medium">Transformation IT Company.</span>
                            </h2>
                            <div className="space-y-4 text-slate-500 dark:text-slate-400 text-base md:text-lg font-medium leading-relaxed">
                                <p>
                                    With years of proven expertise in <strong className="text-foreground dark:text-white">custom software development</strong> and <strong className="text-foreground dark:text-white">scalable cloud infrastructure</strong>, Preet Tech OPC Private Limited started with a clear mission: to bridge the gap between complex business challenges and high-performance technology.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mt-4 text-foreground dark:text-white">
                                    <li><strong>Future-ready technology:</strong> Building architectures that scale automatically with your business.</li>
                                    <li><strong>Enterprise IT solutions:</strong> Secure, robust workflows engineered for maximum reliability.</li>
                                    <li><strong>User-centric approach:</strong> Exceptional UI/UX design capabilities enhancing user engagement.</li>
                                </ul>
                                <p className="mt-4">
                                    Whether deploying <strong className="text-foreground dark:text-white">artificial intelligence solutions</strong> or crafting <strong className="text-foreground dark:text-white">web application development</strong> initiatives, our engineers bring reliable systems prioritizing E-E-A-T guidelines on every project.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-2 md:flex md:gap-6 gap-y-8 gap-x-4">
                                <div>
                                    <h4 className="text-2xl md:text-3xl font-black text-brand-medium mb-1">2021</h4>
                                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500">Founded</p>
                                </div>
                                <div className="hidden md:block w-px h-10 bg-slate-200 dark:bg-white/10" />
                                <div>
                                    <h4 className="text-2xl md:text-3xl font-black text-foreground mb-1">50+</h4>
                                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500">Systems Built</p>
                                </div>
                                <div className="hidden md:block w-px h-10 bg-slate-200 dark:bg-white/10" />
                                <div className="col-span-2 md:col-span-1">
                                    <h4 className="text-2xl md:text-3xl font-black text-foreground mb-1">99%</h4>
                                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500">Client Success</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.5 VIDEO SECTION: THE PREET TECH EXPERIENCE */}
            <section className="py-16 md:py-24 px-6 relative overflow-hidden bg-slate-50 dark:bg-[#0b101b]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(63,143,204,0.05),transparent_70%)]" />
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-10 md:mb-16 px-4">
                        <span className="text-brand-medium font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Visual Narrative</span>
                        <h2 className="text-2xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1] mb-4 text-foreground dark:text-white">
                            The Preet Tech OPC <br className="md:hidden" /> Private Limited <br /> <span className="text-brand-medium">Experience.</span>
                        </h2>
                    </div>

                    <div className="relative aspect-video rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-white/10 shadow-2xl group mx-2 md:mx-0">
                        <div className="absolute inset-0 pointer-events-none scale-[1.05]">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/2jmiNO3jwrA?autoplay=1&mute=1&loop=1&playlist=2jmiNO3jwrA&controls=0&modestbranding=1&rel=0&playsinline=1&showinfo=0"
                                title="Preet Tech OPC Private Limited Experience"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </div>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
                        
                        {/* Overlay Content - Adjusted for Mobile */}
                        <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 flex justify-between items-end bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none">
                            <div className="text-white max-w-[70%]">
                                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-brand-medium mb-1">Visual Narrative</p>
                                <h4 className="text-xs md:text-2xl font-black uppercase tracking-tighter line-clamp-2 md:line-clamp-none">The Preet Tech OPC Private Limited Experience</h4>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-8 w-8 md:h-12 md:w-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white -rotate-45" />
                                </div>
                            </div>
                        </div>

                        {/* Interactive Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300">
                            <a
                                href="https://youtu.be/2jmiNO3jwrA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 md:px-6 md:py-3 bg-brand-medium text-white rounded-full font-black text-[9px] md:text-[10px] uppercase tracking-widest shadow-2xl hover:scale-110 transition-transform backdrop-blur-md border border-white/20"
                            >
                                Watch with Sound
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. MISSION & VISION: TWO CARDS */}
            <section className="py-16 md:py-32 bg-slate-50 dark:bg-white/[0.02] relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-medium font-sans">
                        <div className="group p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-white dark:bg-[#0b0f1a] border border-slate-200 dark:border-white/5 relative overflow-hidden transition-all hover:border-brand-medium/30">
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-brand-medium/10 flex items-center justify-center text-brand-medium mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <Target className="w-8 h-8" />
                                </div>
                                <span className="text-brand-medium font-black uppercase tracking-widest text-[10px] mb-4 block">The Mission</span>
                                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4 leading-tight md:leading-none">Innovative. <br className="hidden md:block" /> Scalable. <br className="hidden md:block" /> Future-Ready.</h3>
                                <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Deliver innovative, scalable, and future-ready IT solutions that empower businesses to lead in an ever-evolving digital world.
                                </p>
                            </div>
                            <Target className="absolute -right-20 -bottom-20 w-80 h-80 text-brand-medium/5 group-hover:text-brand-medium/10 transition-colors duration-300" />
                        </div>

                        <div className="group p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-brand-medium text-white relative overflow-hidden transition-all shadow-[0_20px_50px_rgba(63,143,204,0.3)] hover:-translate-y-2">
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <Globe className="w-8 h-8" />
                                </div>
                                <span className="text-white/80 font-black uppercase tracking-widest text-[10px] mb-4 block">The Vision</span>
                                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4 leading-tight md:leading-none">Your Trusted <br className="hidden md:block" /> Global Tech <br className="hidden md:block" /> Partner.</h3>
                                <p className="text-base md:text-xl text-white/80 leading-relaxed">
                                    To become a trusted technology partner for growing businesses worldwide, setting the standard for digital excellence and innovation.
                                </p>
                            </div>
                            <Globe className="absolute -right-20 -bottom-20 w-80 h-80 text-white/10 group-hover:text-white/20 transition-colors duration-300" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. WHAT WE DO: SERVICE CARDS */}
            <section className="py-24 px-6 md:px-0">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-12 md:mb-16 px-4">
                        <span className="text-brand-medium font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Core Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[1.05] md:leading-[0.9] mb-8">
                            High-Impact <br className="md:hidden" /> <span className="text-brand-medium">Capabilities.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { title: "Web Development", link: "/services/web-development", icon: Code2, desc: "High-performance web architecture and robust web applications." },
                            { title: "Software Development", link: "/services/software-development", icon: Command, desc: "Custom software development automating business operations securely." },
                            { title: "Mobile App Development", link: "/services/app-development", icon: Zap, desc: "Top-tier mobile app development services for seamless mobile UX." },
                            { title: "UI/UX Design", link: "/services/ui-ux-design", icon: Palette, desc: "Exceptional UI/UX design crafting secure digital experiences." },
                            { title: "Partnership Marketing", link: "/services/partnership-marketing", icon: Cloud, desc: "Strategic partnership marketing combined with cloud efficiency." },
                            { title: "Start Your Business", link: "/services/start-your-business", icon: MessageSquare, desc: "Complete consultation as your trusted enterprise technology partner." }
                        ].map((service, i) => (
                            <Link href={service.link} key={i} className="group">
                                <div className="h-full p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-brand-medium/50 transition-all duration-500 flex flex-col items-start shadow-sm hover:shadow-xl hover:shadow-brand-medium/5 hover:-translate-y-1">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-brand-medium mb-5 md:mb-6 group-hover:bg-brand-medium group-hover:text-white transition-all duration-300">
                                        <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h4 className="text-lg md:text-xl font-black uppercase tracking-tighter mb-3 md:mb-4 group-hover:text-brand-medium transition-colors">{service.title}</h4>
                                    <p className="text-[13px] md:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-background relative overflow-hidden transition-colors duration-300">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="text-brand-medium font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">The Competitive Edge</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-10 leading-[0.9] text-foreground dark:text-white">
                                Why Choose <br /> <span className="text-brand-medium">Preet Tech OPC Private Limited?</span>
                            </h2>

                            <div className="space-y-6">
                                {[
                                    { title: "Future-Ready Stacks", desc: "We utilize robust, AI-ready tech stacks ensuring long-term product relevance.", icon: Rocket },
                                    { title: "Scalable Solutions", desc: "Serverless and elastic infrastructures built for extreme load and high traffic.", icon: Cloud },
                                    { title: "Performance First", desc: "Sub-second load times engineered directly into our core solutions.", icon: Zap },
                                    { title: "Radical Transparency", desc: "No hidden layers. Open communication regarding architecture and code.", icon: MessageSquare }
                                ].map((item, i) => (
                                    <div key={i} className="group flex gap-5 items-start p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-300">
                                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-brand-medium group-hover:border-brand-medium transition-all duration-300 shadow-sm">
                                            <item.icon className="w-6 h-6 text-brand-medium group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black uppercase tracking-wide mb-2 text-foreground dark:text-white group-hover:text-brand-medium transition-colors">{item.title}</h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="absolute top-8 -right-8 bottom-8 -left-8 bg-slate-100 dark:bg-white/[0.02] rounded-[3rem] -z-10 hidden lg:block" />
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-medium rounded-full blur-[40px] opacity-20 hidden lg:block pointer-events-none" />
                            <div className="relative rounded-[2.5rem] lg:rounded-[3rem] p-3 bg-white dark:bg-[#0b0f1a] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden group">
                                <AboutPerformanceGraph />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900 text-foreground dark:text-white transition-colors duration-300">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-medium/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[60px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mb-16">
                        <span className="text-brand-medium font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Innovation Engine</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
                            Staying Ahead of the <br /> <span className="text-brand-medium">Digital Curve.</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                            We stay ahead of industry trends like AI, automation, and cloud technologies to deliver next-gen solutions that give our clients a competitive edge.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Artificial Intelligence", icon: Cpu, desc: "Implementing LLMs and neural architectures to automate intelligence." },
                            { title: "Cloud Native", icon: Cloud, desc: "Building modular, elastic infrastructures for infinite global scale." },
                            { title: "Hyper Automation", icon: Zap, desc: "Eliminating manual friction with sophisticated robotic process automation." }
                        ].map((trend, i) => (
                            <div key={i} className="p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-medium transition-all group shadow-xl dark:shadow-none">
                                <trend.icon className="w-10 h-10 text-brand-medium mb-6 group-hover:scale-110 transition-transform" />
                                <h4 className="text-xl font-black uppercase tracking-tighter mb-4 text-foreground dark:text-white">{trend.title}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{trend.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-6 font-medium">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="space-y-6 md:space-y-8">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-medium/10 flex items-center justify-center text-brand-medium mx-auto">
                            <Heart className="w-6 h-6 md:w-8 md:h-8 fill-current" />
                        </div>
                        <h2 className="text-2xl md:text-5xl font-black tracking-tighter uppercase leading-tight md:leading-none">
                            Built on <span className="text-brand-medium">Partnership.</span>
                        </h2>
                        <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-light italic px-4">
                            \"At Preet Tech OPC Private Limited, we don’t just build projects. We build long-term partnerships. Your success is our reputation, and we take that personally.\"
                        </p>

                        <div className="flex justify-center gap-6 md:gap-8 pt-4 grayscale opacity-50">
                            <Smile className="w-8 h-8 md:w-10 md:h-10" />
                            <Users className="w-8 h-8 md:w-10 md:h-10" />
                            <Headphones className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-slate-50 dark:bg-[#07090f] text-foreground dark:text-white border-t border-slate-200 dark:border-white/5">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-brand-medium font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Common Questions</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6">Frequently Asked <span className="text-brand-medium">Questions</span></h2>
                    </div>
                    <div className="space-y-6">
                        {[
                            {
                                q: "What makes Preet Tech OPC Private Limited an innovative IT solutions company?",
                                a: "Our deep expertise in scalable cloud infrastructure, AI automation, and full-stack custom software development firmly positions us as a top digital transformation it company that consistently delivers forward-thinking results."
                            },
                            {
                                q: "Do you offer mobile app development services?",
                                a: "Yes, we specialize in high-performance iOS and Android application creation, ensuring mobile scalability as an integral component of your digital architecture."
                            },
                            {
                                q: "Why should we choose Preet Tech OPC Private Limited as our enterprise technology partner?",
                                a: "We embrace Google E-E-A-T principles by bringing real-world experience, proven technical expertise, authoritative leadership in architecture, and unquestionable trustworthiness to every partnership."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                                <h3 className="text-lg font-bold mb-2 flex items-center gap-3">
                                    <span className="text-brand-medium"><CheckCircle2 className="w-5 h-5" /></span> {faq.q}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed ml-8">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-medium/5" />
                <div className="max-w-5xl mx-auto">
                    <div className="relative p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-brand-medium/20 text-center overflow-hidden shadow-2xl dark:shadow-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(63,143,204,0.1),transparent_70%)]" />

                        <div className="relative z-10 space-y-6">
                            <h2 className="text-2xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1] md:leading-[0.9] text-foreground dark:text-white">
                                Ready to Build <br className="hidden md:block" /> <span className="text-brand-medium italic">Something Powerful?</span>
                            </h2>
                            <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
                                Let’s Turn Your Vision Into Reality. Initialize your digital transformation with our core team.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-10 py-4 bg-brand-medium text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-[0_20px_50px_rgba(63,143,204,0.4)] hover:scale-105 transition-transform"
                            >
                                Contact Us Today
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
