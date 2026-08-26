
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const STEPS = [
    {
        id: "01",
        title: "Discover & Strategize",
        description: "We analyze your business model, competitors, and target audience to define a clear path for growth.",
        icon: <Search className="w-6 h-6" />,
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: "02",
        title: "Design & Architecture",
        description: "Creating intuitive UX/UI and a robust technical architecture tailored to your unique scaling needs.",
        icon: <Compass className="w-6 h-6" />,
        color: "from-indigo-500 to-purple-500"
    },
    {
        id: "03",
        title: "Build & Test",
        description: "Agile development with regular check-ins, followed by rigorous Quality Assurance across all devices.",
        icon: <Zap className="w-6 h-6" />,
        color: "from-amber-500 to-orange-500"
    },
    {
        id: "04",
        title: "Launch & Grow",
        description: "Deployment, ongoing support, security updates, and data-driven performance marketing.",
        icon: <TrendingUp className="w-6 h-6" />,
        color: "from-emerald-500 to-teal-500"
    }
];

const SimpleSteps: React.FC = () => {
    return (
        <section id="process" className="py-10 md:py-16 bg-background relative overflow-hidden transition-colors duration-300">
            {/* Background Global Map & Pins */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div 
                    className="absolute inset-0 opacity-20 dark:opacity-10 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-300" 
                    style={{ 
                        backgroundImage: "url('/images/world-map.svg')", 
                        backgroundSize: '120% auto', 
                        backgroundPosition: 'center 20%', 
                        backgroundRepeat: 'no-repeat',
                        filter: 'invert(40%) sepia(100%) saturate(400%) hue-rotate(190deg)'
                    }} 
                />
                
                {/* Animated Location Pins (Full screen relative to match background map) */}
                <div className="absolute inset-0 w-full h-full opacity-50 dark:opacity-100">
                    {[
                        { top: '35%', left: '22%', delay: 0, label: 'North America' },    
                        { top: '65%', left: '32%', delay: 1.5, label: 'South America' },  
                        { top: '30%', left: '51%', delay: 0.5, label: 'Europe' },         
                        { top: '45%', left: '68%', delay: 2, label: 'India' },            
                        { top: '72%', left: '82%', delay: 1, label: 'Australia' },        
                        { top: '55%', left: '53%', delay: 2.5, label: 'Africa' },         
                        { top: '38%', left: '82%', delay: 0.8, label: 'Japan' },          
                    ].map((pin, i) => (
                        <div 
                            key={i}
                            className="absolute w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-cyan/80 dark:bg-brand-cyan shadow-[0_0_10px_2px_rgba(0,195,255,0.4)] dark:shadow-[0_0_15px_3px_rgba(0,195,255,0.8)]"
                            style={{ top: pin.top, left: pin.left }}
                        >
                            <div 
                                className="absolute inset-0 rounded-full bg-brand-cyan animate-ping" 
                                style={{ animationDelay: `${pin.delay}s`, animationDuration: '3s' }} 
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-12 md:mb-16">

                    <h2
                        className="text-3xl md:text-5xl lg:text-7xl font-black text-foreground tracking-tighter mb-6 leading-tight uppercase"
                    >
                        OUR PROVEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan">PROCESS.</span>
                    </h2>

                    <p
                        className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        We've streamlined our delivery process to take you from discovery to digital dominance with total transparency.
                    </p>
                </div>

                {/* Steps Layout */}
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-px bg-slate-200 dark:bg-white/10" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                        {STEPS.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className="relative group"
                            >
                                {/* Step Indicator */}
                                <div className="hidden lg:block absolute -top-[5px] left-0 w-3 h-3 rounded-full bg-background border-2 border-slate-300 dark:border-white/20 group-hover:border-brand-medium transition-colors z-20" />

                                <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-4">
                                    {/* Large Number with Mask */}
                                    <div className="mb-8 relative">
                                        <div className="text-6xl md:text-7xl font-black text-slate-300 dark:text-white/10 select-none leading-none group-hover:text-brand-medium/20 transition-colors">
                                            {step.id}
                                        </div>
                                        <div className={`absolute top-1/2 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                                            <div className="w-full h-full bg-white dark:bg-[#0b0f1a] rounded-[14px] flex items-center justify-center text-foreground">
                                                {step.icon}
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-brand-medium transition-colors">
                                        {step.title}
                                    </h3>

                                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final CTA Visual */}
                <motion.div
                    className="mt-12 md:mt-16 relative rounded-[2rem] md:rounded-[3rem] p-[1px] overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-2xl dark:shadow-brand-medium/5"
                >
                    {/* Animated Gradient Border */}
                    <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,var(--tw-colors-brand-medium)_360deg)] animate-[spin_4s_linear_infinite] opacity-20 group-hover:opacity-100 transition-opacity duration-400" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-medium/30 via-brand-cyan/30 to-brand-medium/30 rounded-[2rem] md:rounded-[3rem] opacity-30 dark:opacity-50 group-hover:opacity-100 transition-opacity" />

                    <div className="relative h-full w-full bg-slate-50/90 dark:bg-[#070b14] backdrop-blur-md rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden">

                        {/* Background Accents (Inner) */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-medium/10 rounded-full blur-[48px] -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity duration-400" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[40px] translate-y-1/2 -translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity duration-400" />

                        <div className="relative z-10 text-center lg:text-left max-w-2xl">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 md:mb-6 tracking-tighter leading-[1.1]">
                                Ready to start your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan italic pr-2">journey?</span>
                            </h3>
                            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed m-0">
                                The first step is a conversation. Let's discuss how we can engineer your business's next exponential growth phase.
                            </p>
                        </div>

                        <div className="relative z-10 shrink-0 w-full sm:w-auto">
                            <Link href="/contact">
                                <button className="w-full lg:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white shadow-[0_0_40px_-10px_rgba(57,148,250,0.4)] font-bold uppercase tracking-[0.2em] text-[10px] hover:opacity-90 hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(57,148,250,0.6)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group/btn border border-white/10 relative overflow-hidden">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Schedule an Audit
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SimpleSteps;
