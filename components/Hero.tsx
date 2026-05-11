"use client";

import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Cpu, Hexagon, Activity, Sparkles } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ThreeSphereScene = dynamic(() => import('./ThreeSphere'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 bg-background" />
});

interface HeroProps {
  isDark?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark: _ignoredIsDark }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background py-16 lg:py-32">
      {/* 1. LAYERED BACKGROUNDS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.03] dark:opacity-[0.15]" />

        {/* Radial Glows - Enhanced for depth */}
        <div className="absolute top-1/2 left-1/2 md:left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-brand-medium/15 blur-[80px] md:blur-[120px] rounded-full gpu opacity-50 md:opacity-100" />
        <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-cyan/10 blur-[80px] md:blur-[100px] rounded-full delay-500 gpu opacity-40 md:opacity-100" />
      </div>

      {/* 2. 3D CENTRAL ELEMENT (BACKGROUND) */}
      <ThreeSphereScene />

      {/* 2b. MOBILE FLOATING ACCENTS */}
      <div className="absolute inset-0 z-10 pointer-events-none lg:hidden overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] text-brand-medium/30"
        >
          <Cpu className="w-10 h-10" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.15, 0.4, 0.15], rotate: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1, ease: "easeInOut" }}
          className="absolute top-[45%] right-[-5%] text-brand-cyan/20"
        >
          <Globe className="w-16 h-16" />
        </motion.div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[25%] left-[10%] text-brand-medium/20"
        >
          <Sparkles className="w-12 h-12" />
        </motion.div>
        
        {/* Mobile-only background blobs for extra depth */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full h-1/2 bg-brand-medium/5 blur-[100px] rounded-full pointer-events-none" />
      </div>

      {/* 3. CENTERED CONTENT */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center max-w-4xl gpu"
        >
          {/* Main Headline */}
          <div className="flex flex-col items-center gap-4 mb-10 md:mb-12">
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-medium/10 border border-brand-medium/20 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-brand-medium dark:text-brand-cyan mb-2 backdrop-blur-sm shadow-lg shadow-brand-medium/5"
            >
              <Sparkles className="w-3 h-3" />
              BEST IT COMPANY
            </motion.span>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.95] md:leading-[0.9] flex flex-col items-center text-center px-4 drop-shadow-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-950 via-slate-800 to-brand-medium dark:from-white dark:via-white/90 dark:to-brand-medium/50 py-2 max-w-5xl">
                SCALE <br /> GLOBALLY
              </span>
            </h1>
          </div>

          <p
            className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed md:leading-relaxed mb-10 md:mb-12 font-medium px-4 md:px-0 text-center mx-auto opacity-90"
          >
            Building high-performance digital experiences that help modern businesses grow, scale, and lead in the digital era.
          </p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0"
          >
            <Link
              href="/about"
              className="group relative px-10 sm:px-12 py-4.5 md:py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white font-bold tracking-widest uppercase text-[11px] sm:text-xs rounded-2xl overflow-hidden transition-all shadow-xl shadow-[#3994fa]/30 hover:shadow-2xl hover:shadow-[#3994fa]/40 hover:-translate-y-1 active:scale-95 text-center flex items-center justify-center min-h-[56px] md:min-h-[60px]"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              <span className="relative flex items-center justify-center gap-3">
                Learn More about Preet Tech <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>

            <Link 
              href="/contact"
              className="group px-10 sm:px-12 py-4.5 md:py-5 bg-slate-100 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-[11px] sm:text-xs tracking-widest uppercase transition-all rounded-2xl hover:bg-slate-200 dark:hover:bg-white/10 hover:-translate-y-1 active:scale-95 flex items-center justify-center min-h-[56px] md:min-h-[60px]"
            >
              <span className="flex items-center justify-center gap-3">
                Book Strategy Call <Hexagon className="w-5 h-5 transition-transform duration-500 group-hover:rotate-180" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* 3b. SCROLL INDICATOR (MOBILE) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 lg:hidden pointer-events-none"
      >
        <div className="w-5 h-8 rounded-full border-2 border-slate-400/30 flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-brand-medium rounded-full"
          />
        </div>
      </motion.div>

      {/* 4. ANIMATED PROPS (LEFT & RIGHT) - DESKTOP ONLY */}

      {/* Left Props */}
      <div className="absolute left-4 lg:left-8 xl:left-8 2xl:left-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 2xl:gap-10 z-30 pointer-events-none scale-75 2xl:scale-100 origin-left">
        {/* Prop 1: System Latency */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: [0, -15, 0], opacity: 1 }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.8 }
          }}
          className="glass-morphism p-6 rounded-[2.5rem] border border-brand-medium/20 w-56 flex flex-col gap-4 shadow-2xl gpu"
        >
          <div className="flex items-center justify-between">
            <Globe className="text-brand-medium w-6 h-6" />
            <div className="flex gap-1">
              {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-medium/40 animate-pulse" />)}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Web Development</p>
            <p className="text-2xl font-black text-foreground">Next<span className="text-brand-medium ml-1">Gen</span></p>
          </div>
          <div className="h-1 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "65%" }}
              transition={{ duration: 2, ease: "easeOut", delay: 1 }}
              className="h-full bg-brand-medium"
            />
          </div>
        </motion.div>

        {/* Prop 2: Growth Visual */}
        <motion.div
          initial={{ y: 50, opacity: 0, rotate: -3 }}
          animate={{ y: [0, 15, 0], opacity: 1 }}
          transition={{ 
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            opacity: { duration: 0.8, delay: 0.2 }
          }}
          className="p-8 rounded-[3rem] bg-black text-white border border-white/10 w-64 shadow-[0_50px_100px_rgba(0,0,0,0.5)] transform gpu"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/20 flex items-center justify-center">
              <Activity className="w-6 h-6 text-brand-cyan" />
            </div>
            <p className="text-xs font-black uppercase tracking-[0.2em]">Digital Marketing</p>
          </div>
          <div className="flex items-end gap-2 h-16">
            {[40, 70, 50, 90, 60, 80, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: [`${h * 0.7}%`, `${h}%`, `${h * 0.8}%`, `${h}%`] }}
                transition={{ 
                  height: {
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 0.5 + i * 0.1
                  }
                }}
                className="flex-1 bg-brand-cyan rounded-t-sm"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Props */}
      <div className="absolute right-4 lg:right-8 xl:right-8 2xl:right-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 2xl:gap-10 z-30 pointer-events-none scale-75 2xl:scale-100 origin-right">
        {/* Prop 3: Security Shield */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: [0, 20, 0], opacity: 1 }}
          transition={{ 
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
            opacity: { duration: 0.8, delay: 0.4 }
          }}
          className="glass-morphism p-8 rounded-[3rem] border border-emerald-500/20 w-60 shadow-2xl items-center flex flex-col text-center gpu"
        >
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-emerald-500/20 blur-2xl animate-pulse" />
            <Cpu className="w-16 h-16 text-emerald-500 relative z-10" />
          </div>
          <div className="font-black text-sm uppercase tracking-widest mb-1 text-foreground">App & Software</div>
          <p className="text-[10px] font-bold text-emerald-500 uppercase">Scalable Solutions...</p>
        </motion.div>

        {/* Prop 4: Sparkle Feature */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: [0, -10, 0], opacity: 1 }}
          transition={{ 
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
            opacity: { duration: 0.8, delay: 0.6 }
          }}
          className="p-8 rounded-[2.5rem] bg-gradient-to-br from-brand-medium/20 to-brand-cyan/20 border border-white/10 backdrop-blur-md w-72 shadow-2xl relative overflow-hidden gpu"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-medium/20 blur-3xl" />
          <div className="flex items-center gap-4 mb-4">
            <Sparkles className="w-6 h-6 text-brand-medium" />
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Content Creation</p>
          </div>
          <p className="text-xl font-black text-foreground tracking-tighter leading-tight">
            Engaging Brand Stories & Media
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Hero);
