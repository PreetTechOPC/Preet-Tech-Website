"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ArrowLeft, ShoppingCart, MessageCircle, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const PRODUCTS = [
    {
        id: 'business-tool',
        title: 'Business Tool',
        category: 'Management',
        description: 'Operations & growth automation engine. Streamline workflows, track key metrics, and scale your operations effortlessly.',
        image: '/business-tool.png',
        discountBadge: '80% OFF',
        whatsappMsg: "Hello Preet Tech OPC Private Limited, I would like to enquire about the Business Tool.",
    },
    {
        id: 'crm-tool',
        title: 'Nexus CRM',
        category: 'SaaS',
        description: 'Next-gen customer management portal. Build stronger relationships, track interactions, and drive sales pipeline growth.',
        image: '/crm-tool.png',
        discountBadge: '80% OFF',
        whatsappMsg: "Hello Preet Tech OPC Private Limited, I would like to enquire about the Nexus CRM portal.",
    },
    {
        id: 'analytics-tool',
        title: 'Insight Pro',
        category: 'Analytics',
        description: 'Real-time data visualization streams. Transform raw data into actionable insights with beautiful, dynamic dashboards.',
        image: '/analytics-tool.png',
        discountBadge: '80% OFF',
        whatsappMsg: "Hello Preet Tech OPC Private Limited, I would like to enquire about the Insight Pro Analytics tool.",
    },
    {
        id: 'automation-tool',
        title: 'Flow Master',
        category: 'Automation',
        description: 'Intelligent high-velocity automation. Connect your core apps, automate repetitive tasks, and boost team productivity.',
        image: '/automation-tool.png',
        discountBadge: '80% OFF',
        whatsappMsg: "Hello Preet Tech OPC Private Limited, I would like to enquire about the Flow Master Automation suite.",
    }
];

// Triple for seamless infinite loop (12 cards total)
const LOOPED = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS];

const ProductShowcase: React.FC = () => {
    // Use ref callback so scrollLeft is set BEFORE first paint (no flicker)
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const initialized = useRef(false);

    const setContainerRef = useCallback((el: HTMLDivElement | null) => {
        (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
        if (el && !initialized.current) {
            initialized.current = true;
            // Set to middle third immediately
            el.style.scrollBehavior = 'auto';
            el.scrollLeft = el.scrollWidth / 3;
        }
    }, []);

    // All drag state in refs — ZERO React re-renders during drag/scroll
    const isDragging = useRef(false);
    const startX = useRef(0);
    const startScrollLeft = useRef(0);
    const lastScrollTime = useRef(0);
    const rafId = useRef<number | null>(null);

    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // IntersectionObserver — only auto-slide when visible
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => setIsVisible(e.isIntersecting),
            { threshold: 0.15 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    const scrollBy = useCallback((dir: 'left' | 'right') => {
        const el = containerRef.current;
        if (!el) return;
        const card = el.querySelector('.p-card') as HTMLElement;
        if (!card) return;
        const step = card.offsetWidth + 24;
        el.style.scrollBehavior = 'smooth';
        el.scrollLeft += dir === 'left' ? -step : step;
    }, []);

    // Smooth Auto-scroll marquee logic
    const animate = useCallback(() => {
        if (!isVisible || isHovered || isDragging.current || !containerRef.current) {
            rafId.current = requestAnimationFrame(animate);
            return;
        }
        
        const el = containerRef.current;
        el.style.scrollBehavior = 'auto';
        // Slow, smooth movement (approx 1px per frame @ 60fps = 60px/s)
        el.scrollLeft += 0.5; 
        
        // Manual jump check inside animation frame for zero-latency looping
        const third = el.scrollWidth / 3;
        if (el.scrollLeft >= third * 2) {
            el.scrollLeft = third;
        } else if (el.scrollLeft <= 0) {
            el.scrollLeft = third;
        }

        rafId.current = requestAnimationFrame(animate);
    }, [isVisible, isHovered]);

    useEffect(() => {
        rafId.current = requestAnimationFrame(animate);
        return () => { if (rafId.current) cancelAnimationFrame(rafId.current); };
    }, [animate]);

    // Infinite loop jump for manual scroll/drag
    const handleScroll = useCallback(() => {
        const el = containerRef.current;
        if (!el || isDragging.current) return;
        
        const third = el.scrollWidth / 3;
        if (el.scrollLeft >= third * 2) {
            el.scrollLeft = third;
        } else if (el.scrollLeft <= 0) {
            el.scrollLeft = third;
        }
    }, []);

    // Mouse drag — direct DOM manipulation, no React state
    const onMouseDown = useCallback((e: React.MouseEvent) => {
        const el = containerRef.current;
        if (!el) return;
        isDragging.current = true;
        startX.current = e.pageX - el.offsetLeft;
        startScrollLeft.current = el.scrollLeft;
        el.style.scrollBehavior = 'auto';
        el.style.cursor = 'grabbing';
    }, []);

    const onMouseMove = useCallback((e: React.MouseEvent) => {
        if (!isDragging.current || !containerRef.current) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        containerRef.current.scrollLeft = startScrollLeft.current - walk;
        handleScroll(); // Check loop during drag
    }, []);

    const onMouseUp = useCallback(() => {
        isDragging.current = false;
        if (containerRef.current) containerRef.current.style.cursor = 'grab';
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-8 md:py-16 relative bg-background overflow-hidden transition-colors duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); onMouseUp(); }}
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-medium/10 border border-brand-medium/20 text-brand-medium text-[10px] font-black uppercase tracking-[0.3em]">
                            <ShoppingCart className="w-3.5 h-3.5" />
                            Inventory_Assets
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter uppercase leading-none">
                            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan italic">Tools.</span>
                        </h2>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => scrollBy('left')}
                            className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-transparent rounded-full border-2 border-[#E9EEF4] dark:border-white/10 flex items-center justify-center text-[#8C9FAF] hover:bg-gradient-to-r hover:from-[#3994fa] hover:to-[#004aad] hover:text-white hover:border-transparent shadow-sm hover:shadow-lg transition-all duration-300 active:scale-95"
                            aria-label="Previous"
                        >
                            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 stroke-[2px]" />
                        </button>
                        <button
                            onClick={() => scrollBy('right')}
                            className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-transparent rounded-full border-2 border-[#E9EEF4] dark:border-white/10 flex items-center justify-center text-[#8C9FAF] hover:bg-gradient-to-r hover:from-[#3994fa] hover:to-[#004aad] hover:text-white hover:border-transparent shadow-sm hover:shadow-lg transition-all duration-300 active:scale-95"
                            aria-label="Next"
                        >
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 stroke-[2px]" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Slider */}
            <div className="relative w-full">
                <div
                    ref={setContainerRef}
                    onScroll={handleScroll}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseUp}
                    className="flex gap-6 overflow-x-auto pb-12 px-6 md:pl-[max(1.5rem,calc((100%-1280px+3rem)/2))] md:pr-[max(1.5rem,calc((100%-1280px+3rem)/2))] cursor-grab"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
                >
                    {LOOPED.map((product, idx) => (
                        <div
                            key={`${product.id}-${idx}`}
                            className="p-card shrink-0 w-[calc(100%-48px)] md:w-[280px] lg:w-[calc((100%-120px)/4)] xl:w-[290px]"
                        >
                            <div className="group relative h-[360px] md:h-[400px] bg-white dark:bg-slate-900/50 rounded-[2rem] border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-2xl hover:border-brand-medium/50 transition-all duration-300 flex flex-col">
                                {/* Image */}
                                <div className="relative h-36 w-full overflow-hidden shrink-0">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 290px"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                                        <div className="px-2.5 py-1 bg-black/40 backdrop-blur border border-white/10 rounded-full">
                                            <span className="text-[8px] font-black text-white uppercase tracking-widest">{product.category}</span>
                                        </div>
                                        <div className="px-2.5 py-1 bg-brand-medium text-white rounded-full">
                                            <span className="text-[9px] font-black uppercase">{product.discountBadge}</span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 left-3">
                                        <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-500/20 backdrop-blur border border-emerald-500/30 rounded-lg">
                                            <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">Verified Logic</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex-1 flex flex-col">
                                    <div className="space-y-2 mb-auto">
                                        <div className="flex items-start justify-between gap-3">
                                            <h3 className="text-lg md:text-xl font-black tracking-tight leading-tight group-hover:text-brand-medium transition-colors line-clamp-2">
                                                {product.title}
                                            </h3>
                                            <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ArrowUpRight className="w-3.5 h-3.5 text-brand-medium" />
                                            </div>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-medium line-clamp-3">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="mt-5 pt-5 border-t border-slate-100 dark:border-white/5">
                                        <a
                                            href={`https://wa.me/919756667397?text=${encodeURIComponent(product.whatsappMsg)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-3 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-xl font-black text-[9px] uppercase tracking-[0.25em] flex items-center justify-center gap-2 active:scale-[0.98] shadow-lg hover:shadow-[#3994fa]/20 transition-all"
                                        >
                                            <MessageCircle className="w-3.5 h-3.5" />
                                            Buy via WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none hidden md:block" />
                <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none hidden md:block" />
            </div>

            <div className="mt-2 md:mt-6 flex justify-center items-center w-full px-6 relative z-10">
                <Link
                    href="/services/business-tools"
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-90 text-white text-[11px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#3994fa]/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                    View More Deals
                    <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
            </div>
        </section>
    );
};

export default ProductShowcase;
