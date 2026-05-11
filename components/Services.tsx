import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, useMotionValue, animate, useSpring, useTransform } from 'framer-motion';
import { Globe, Smartphone, Palette, Share2, TrendingUp, ArrowUpRight, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Binary, Rocket, MessageSquare, Code2, Wrench, Users, Target, ShoppingCart, Cpu, Cloud, Database } from 'lucide-react';
import Link from 'next/link';

const SERVICES = [
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    tag: 'ROI_01',
    description: 'Data-driven growth strategies engineered to maximize conversion rates and scale revenue through precision targeting.',
    icon: Target,
    accent: 'text-brand-medium',
    bg: 'from-blue-500/10 to-transparent'
  },
  {
    id: 'start-your-business',
    title: 'Start Your Business',
    tag: 'LAUNCH_02',
    description: 'Complete architectural foundation for new ventures. We handle the tech stack and scaling strategy while you build your vision.',
    icon: Rocket,
    accent: 'text-brand-sky',
    bg: 'from-sky-500/10 to-transparent'
  },
  {
    id: 'social-media-handling',
    title: 'Social Media Handling',
    tag: 'SYNC_03',
    description: 'Algorithmic-first social management designed to build high-authority communities and drive organic brand equity.',
    icon: MessageSquare,
    accent: 'text-brand-cyan',
    bg: 'from-cyan-400/10 to-transparent'
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    tag: 'VISUAL_04',
    description: 'High-fidelity cinematic and digital content engineered to capture attention and communicate complex brand narratives.',
    icon: Palette,
    accent: 'text-brand-deep',
    bg: 'from-indigo-600/10 to-transparent'
  },
  {
    id: 'app-development',
    title: 'App Development',
    tag: 'MOBILE_05',
    description: 'Native and cross-platform mobility solutions built for performance, retaining users through frictionless UX logic.',
    icon: Smartphone,
    accent: 'text-brand-medium',
    bg: 'from-blue-600/10 to-transparent'
  },
  {
    id: 'software-development',
    title: 'Software Development',
    tag: 'CODE_06',
    description: 'Bespoke enterprise software engineered with full-stack precision. We build scalable tools for complex business needs.',
    icon: Code2,
    accent: 'text-brand-sky',
    bg: 'from-sky-500/10 to-transparent'
  },
  {
    id: 'business-tools',
    title: 'Tools for Business',
    tag: 'LOGIC_07',
    description: 'Proprietary internal systems and automation tools designed to optimize operations and reduce resource friction.',
    icon: Wrench,
    accent: 'text-brand-cyan',
    bg: 'from-cyan-400/10 to-transparent'
  },
  {
    id: 'partnership-marketing',
    title: 'Partnership Marketing',
    tag: 'ALLOY_08',
    description: 'Collaborative scaling engines. We manage high-impact partnerships that create exponential brand multipliers.',
    icon: Users,
    accent: 'text-brand-deep',
    bg: 'from-indigo-600/10 to-transparent'
  },
  {
    id: 'eco-website',
    title: 'Eco Website',
    tag: 'WEB_09',
    description: 'Rapid & Budget-Friendly digital foundation. Blazingly fast website architected for immediate deployment.',
    icon: Globe,
    accent: 'text-brand-medium',
    bg: 'from-blue-600/10 to-transparent'
  },
  {
    id: 'advance-website',
    title: 'Advance Website',
    tag: 'WEB_10',
    description: 'Custom Enterprise Features and complex operations engineered for maximum horizontal scaling and authority.',
    icon: Globe,
    accent: 'text-brand-deep',
    bg: 'from-indigo-600/10 to-transparent'
  },
  {
    id: 'ecommerce-development',
    title: 'Ecommerce Development',
    tag: 'STORE_11',
    description: 'High-conversion online stores and multi-vendor marketplaces built to scale your retail business globally.',
    icon: ShoppingCart,
    accent: 'text-brand-medium',
    bg: 'from-blue-500/10 to-transparent'
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    tag: 'BRAIN_12',
    description: 'Generative AI integration and intelligent automation to future-proof your business operations.',
    icon: Cpu,
    accent: 'text-brand-sky',
    bg: 'from-sky-500/10 to-transparent'
  },
  {
    id: 'saas-development',
    title: 'SaaS Development',
    tag: 'CLOUD_13',
    description: 'Scalable cloud-native software-as-a-service platforms engineered for millions of concurrent users.',
    icon: Cloud,
    accent: 'text-brand-cyan',
    bg: 'from-cyan-400/10 to-transparent'
  },
  {
    id: 'crm-erp-systems',
    title: 'CRM/ERP Systems',
    tag: 'LOGIC_14',
    description: 'Custom enterprise resource planning and customer relationship management tools to optimize your workflow.',
    icon: Database,
    accent: 'text-brand-deep',
    bg: 'from-indigo-600/10 to-transparent'
  }
];

const ServiceCard = React.memo(({ service, idx }: { service: any; idx: number }) => (
  <div
    className="service-card shrink-0 select-none"
  >
    <div className="group w-[calc(100vw-48px)] md:w-[310px] h-[320px] md:h-[400px] relative rounded-[2rem] bg-slate-50/80 dark:bg-[#080c14]/40 border border-slate-200/60 dark:border-white/[0.05] p-6 md:p-8 flex flex-col justify-between overflow-hidden transition-[transform,shadow,border-color,background-color] duration-300 hover:shadow-xl hover:shadow-brand-medium/5 hover:-translate-y-2 will-change-transform gpu">

      {/* Decorative Background Glow */}
      <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${service.bg} blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4 md:mb-8">
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center ${service.accent} group-hover:bg-brand-medium group-hover:text-white transition-all duration-300`}>
            <service.icon className="w-5 h-5 md:w-6 md:h-6" />
          </div>
        </div>

        <div className="space-y-3 md:space-y-4">
          <h3 className="text-lg md:text-xl font-black text-foreground uppercase tracking-tight group-hover:text-brand-medium transition-colors leading-[1.1]">
            {service.title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium leading-relaxed line-clamp-4">
            {service.description}
          </p>
        </div>
      </div>

      <div className="relative z-10 pt-5 md:pt-6 border-t border-slate-200/50 dark:border-white/5 flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest font-black">Status</span>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-black text-foreground/80 dark:text-white/80 uppercase">Available</span>
          </div>
        </div>

        <Link 
          href={`/services/${service.id}`} 
          className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-slate-100 dark:border-white/10 flex items-center justify-center group-hover:bg-brand-medium group-hover:text-white transition-all duration-300 group-hover:border-brand-medium"
          onDragStart={(e) => e.preventDefault()}
        >
          <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  </div>
));

ServiceCard.displayName = 'ServiceCard';

const Services: React.FC = () => {
  const [cardWidth, setCardWidth] = useState(310);
  const GAP = 24;
  const STEP = cardWidth + GAP;
  
  // Triple the data for infinite feeling
  const extendedServices = useMemo(() => [...SERVICES, ...SERVICES, ...SERVICES], []);
  
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const requestRef = useRef<number>(0);
  const x = useMotionValue(-SERVICES.length * STEP);
  
  // Handle window resize for responsive card widths
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 768) {
        setCardWidth(window.innerWidth - 48);
      } else {
        setCardWidth(310);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Update x value when STEP changes (resize) to maintain relative position
  useEffect(() => {
    const currentX = x.get();
    const currentIndex = Math.round(-currentX / (cardWidth + GAP));
    x.set(-currentIndex * (cardWidth + GAP));
  }, [cardWidth, x]);

  // Pause auto-slide when section is not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Seamless Loop Logic for continuous drift
  const handleLoop = useCallback((currentX: number) => {
    const fullSetWidth = SERVICES.length * STEP;
    if (currentX <= -SERVICES.length * 2 * STEP) {
      return currentX + fullSetWidth;
    } else if (currentX >= -0.5 * STEP) {
      return currentX - fullSetWidth;
    }
    return currentX;
  }, [STEP]);

  // Continuous Auto-Slide Marquee
  useEffect(() => {
    if (isDragging || isHovered || !isVisible) return;

    let lastTime = performance.now();
    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      
      const speed = 0.04; // Speed: pixels per millisecond
      const currentX = x.get();
      const nextX = handleLoop(currentX + speed * delta);
      
      x.set(nextX);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isDragging, isHovered, isVisible, STEP, x, handleLoop]);

  const snapTo = useCallback((index: number) => {
    const targetX = -index * STEP;
    
    animate(x, targetX, {
      type: 'spring',
      stiffness: 150,
      damping: 25,
      onUpdate: (latest) => {
        // Still need to handle loop during snapping if it goes too far
        const resetX = handleLoop(latest);
        if (resetX !== latest) x.set(resetX);
      }
    });
  }, [STEP, x, handleLoop]);

  const handleDragEnd = (_: any, info: any) => {
    setIsDragging(false);
    const currentX = x.get();
    const offsetIndex = Math.round(-currentX / STEP);

    // Threshold check for manual swipe
    const threshold = STEP / 6;
    let targetIndex = offsetIndex;

    if (info.offset.x < -threshold) {
      targetIndex = offsetIndex + 1;
    } else if (info.offset.x > threshold) {
      targetIndex = offsetIndex - 1;
    }

    snapTo(targetIndex);
  };

  const manualScroll = (direction: 'left' | 'right') => {
    const currentX = x.get();
    const currentIndex = Math.round(-currentX / STEP);
    const targetIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
    snapTo(targetIndex);
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="pt-12 md:pt-20 pb-6 md:pb-8 relative bg-background overflow-hidden transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Structural Accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      <div className="absolute top-0 right-0 w-[400px] h-full bg-slate-50/30 dark:bg-white/[0.01] -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Responsive Header */}
        <div className="mb-6 md:mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
          <div className="space-y-2 md:space-y-4 max-w-2xl">
            <span className="text-sm md:text-base font-bold text-brand-medium tracking-widest uppercase">Digital Transformation Services</span>
            <h2
              className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter leading-none"
            >
              Our Core <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan italic font-black">Solutions.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-base md:text-lg font-medium leading-relaxed">
              As a premier <span className="font-bold text-foreground dark:text-white">web and app development company</span>, we empower brands with <span className="font-bold text-foreground dark:text-white">generative AI integration</span>, robust <span className="font-bold text-foreground dark:text-white">e-commerce development</span>, and <span className="font-bold text-foreground dark:text-white">B2B IT Company</span> expertise.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-4 mt-2 md:mt-0">
            <button
              onClick={() => manualScroll('left')}
              className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-transparent rounded-full flex items-center justify-center border-2 border-[#E9EEF4] dark:border-white/10 text-[#8C9FAF] hover:bg-gradient-to-r hover:from-[#3994fa] hover:to-[#004aad] hover:text-white dark:hover:text-white hover:border-transparent shadow-sm hover:shadow-lg transition-all duration-300 active:scale-95 group"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 stroke-[2px]" />
            </button>
            <button
              onClick={() => manualScroll('right')}
              className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-transparent rounded-full flex items-center justify-center border-2 border-[#E9EEF4] dark:border-white/10 text-[#8C9FAF] hover:bg-gradient-to-r hover:from-[#3994fa] hover:to-[#004aad] hover:text-white dark:hover:text-white hover:border-transparent shadow-sm hover:shadow-lg transition-all duration-300 active:scale-95 group"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 stroke-[2px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Loop Slider Layout - Bleeding to edges */}
      <div className="relative w-full mt-4 gpu">
        {/* Drag Hint */}
        <div className="absolute -top-8 right-6 md:right-12 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-2 pointer-events-none animate-pulse">
           <ArrowRight className="w-3 h-3" />
           Drag to Explore
        </div>

        <div className="overflow-visible cursor-grab active:cursor-grabbing px-6 md:pl-[max(1.5rem,calc((100%-1280px+3rem)/2))]">
          <motion.div
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -20000, right: 20000 }} // Infinite drag space
            dragElastic={0.05}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            className="flex gap-6 will-change-transform"
          >
            {extendedServices.map((service, idx) => (
              <ServiceCard key={`${service.id}-${idx}`} service={service} idx={idx} />
            ))}
          </motion.div>
        </div>

        {/* Desktop-only Side Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-[max(1.5rem,calc((100%-1280px+3rem)/2))] bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none hidden md:block" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-[max(1.5rem,calc((100%-1280px+3rem)/2))] bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none hidden md:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Responsive Footer */}
        <div className="mt-8 flex flex-col justify-center items-center gap-6 md:gap-8 border-t border-slate-50 dark:border-white/5 pt-6 md:pt-8">
          <Link
            href="/services"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-90 text-white text-[11px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#3994fa]/20 hover:-translate-y-0.5 transition-all duration-300 w-[180px]"
          >
            View more
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

