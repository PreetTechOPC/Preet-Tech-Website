"use client";

import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Cpu, Hexagon, Activity, Sparkles } from 'lucide-react';
import Link from 'next/link';
import ThreeSphereScene from './ThreeSphere';

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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.03] dark:opacity-[0.15]" />

        {/* Radial Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-brand-medium/10 blur-[48px] rounded-full gpu" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-brand-cyan/10 blur-[48px] rounded-full delay-200 gpu" />
      </div>

      {/* 2. 3D CENTRAL ELEMENT (BACKGROUND) */}
      <ThreeSphereScene />

      {/* 3. CENTERED CONTENT */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div
           
           
           
           
          className="flex flex-col items-center max-w-4xl gpu"
        >
          {/* Main Headline */}
          <div className="flex flex-col items-center gap-2 mb-6 md:mb-8">
            <span
              className="text-[10px] sm:text-xs md:text-sm font-black uppercase text-slate-500 dark:text-white/70 mb-2 whitespace-nowrap"
            >
              Welcome to Preet Tech OPC Private Limited
            </span>
            <h1 className="text-[3rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black tracking-tighter leading-[0.95] md:leading-[0.9] flex flex-col items-center text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium via-brand-cyan to-brand-deep italic pb-3 md:pb-6 px-2 md:px-4">
                REDEFINE POSSIBLE.
              </span>
            </h1>
          </div>

          <p
            className="text-sm sm:text-base md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed mb-6 md:mb-8 font-medium px-4 md:px-0 text-center mx-auto"
          >
            Preet Tech OPC Private Limited is a top <span className="text-foreground dark:text-white font-bold">Next Gen Digital Agency</span> providing cutting-edge IT and digital marketing solutions. We excel in <span className="text-foreground dark:text-white font-bold">custom software development</span>, <span className="text-foreground dark:text-white font-bold">AI-driven marketing</span>, and scalable <span className="text-foreground dark:text-white font-bold">enterprise IT solutions</span> to power your brand's growth.
          </p>

          {/* Action Buttons */}
          <motion.div
            
            
            
            
            className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-10 sm:px-0"
          >
            <Link
              href="/about"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white font-black tracking-widest uppercase text-[10px] sm:text-xs rounded-2xl overflow-hidden transition-all shadow-lg shadow-[#3994fa]/20 hover:opacity-90 hover:-translate-y-1 active:scale-95 text-center flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-400 skew-x-12" />
              <span className="relative flex items-center justify-center gap-3">
                Learn More <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>

            <Link 
              href="/contact"
              className="group px-8 sm:px-12 py-4 sm:py-5 bg-white dark:bg-white/5 border-2 border-[#3994fa]/20 text-slate-900 dark:text-white font-black text-[10px] sm:text-xs tracking-widest uppercase transition-all rounded-2xl hover:bg-gradient-to-r hover:from-[#3994fa] hover:to-[#004aad] hover:text-white hover:border-transparent hover:-translate-y-1 active:scale-95 shadow-lg hover:shadow-[#3994fa]/20 flex items-center justify-center"
            >
              <span className="flex items-center justify-center gap-3">
                Book Strategy Call <Hexagon className="w-5 h-5 transition-transform duration-400 group-hover:rotate-180" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* 4. ANIMATED PROPS (LEFT & RIGHT) */}

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
                animate={{ height: `${h}%` }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeOut" }}
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
          <h4 className="font-black text-sm uppercase tracking-widest mb-1 text-foreground">App & Software</h4>
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
