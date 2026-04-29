"use client";
import React, { useState, useRef, useCallback, useEffect, memo } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface CardData {
    id: string;
    label: string;
    platform: string;
    bg?: string;
    bgStyle?: React.CSSProperties;
    content: React.ReactNode;
}

interface PortfolioCarouselProps {
    cards: CardData[];
}

const CARD_WIDTH = 340;
const CARD_GAP = 20;
const CARD_STEP = CARD_WIDTH + CARD_GAP;

const PortfolioCard = memo(({ card, i, activeIndex, isDragging, snapTo }: { card: CardData; i: number; activeIndex: number; isDragging: boolean; snapTo: (idx: number) => void }) => (
    <motion.div
        onClick={() => !isDragging && snapTo(i)}
        className="shrink-0 relative rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing shadow-xl shadow-slate-200/50 dark:shadow-none gpu"
        style={{
            width: `${CARD_WIDTH}px`,
            height: '440px',
            opacity: Math.abs(i - activeIndex) === 0 ? 1 : Math.abs(i - activeIndex) === 1 ? 0.75 : 0.45,
            transition: 'opacity 0.3s ease',
            ...(card.bgStyle ?? {}),
        }}
    >
        {card.bg && (
            <div className={`absolute inset-0 bg-gradient-to-br ${card.bg}`} />
        )}
        <div className="relative z-10 h-full">
            {card.content}
        </div>
        <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/30 backdrop-blur border border-white/20 text-[10px] font-bold text-white uppercase tracking-wider">
            {card.platform}
        </div>
        {i === activeIndex && (
            <div className="absolute inset-0 rounded-3xl border-2 border-white/40 pointer-events-none z-30" />
        )}
    </motion.div>
));

PortfolioCard.displayName = 'PortfolioCard';

export default function PortfolioCarousel({ cards }: PortfolioCarouselProps) {
    // Triple elements for infinite illusion
    const extendedCards = [...cards, ...cards, ...cards];
    const initialIndex = cards.length; // Start at the beginning of the middle set

    const [activeIndex, setActiveIndex] = useState(initialIndex);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(-initialIndex * CARD_STEP);
    const trackRef = useRef<HTMLDivElement>(null);

    const snapTo = useCallback((index: number, useSpring = true) => {
        const targetX = -index * CARD_STEP;
        setActiveIndex(index);

        if (useSpring) {
            const controls = animate(x, targetX, {
                type: 'spring',
                stiffness: 280,
                damping: 30,
                onComplete: () => {
                    // Seamless loop reset: if we are in the first or last set, jump back to middle set
                    if (index < cards.length) {
                        const newIndex = index + cards.length;
                        setActiveIndex(newIndex);
                        x.set(-newIndex * CARD_STEP);
                    } else if (index >= cards.length * 2) {
                        const newIndex = index - cards.length;
                        setActiveIndex(newIndex);
                        x.set(-newIndex * CARD_STEP);
                    }
                }
            });
            return controls;
        } else {
            x.set(targetX);
        }
    }, [cards.length, x]);

    useEffect(() => {
        if (isDragging || isHovered) return;

        const autoSlide = setInterval(() => {
            snapTo(activeIndex + 1);
        }, 5000); // Increased from 3s to reduce spring animation frequency

        return () => clearInterval(autoSlide);
    }, [activeIndex, isDragging, isHovered, snapTo]);

    const handleDragEnd = (_: any, info: any) => {
        setIsDragging(false);
        const currentX = x.get();
        const offsetIndex = Math.round(-currentX / CARD_STEP);

        // Threshold check for manual swipe
        const threshold = CARD_STEP / 4;
        let targetIndex = offsetIndex;

        if (info.offset.x < -threshold) {
            targetIndex = offsetIndex + 1;
        } else if (info.offset.x > threshold) {
            targetIndex = offsetIndex - 1;
        }

        snapTo(targetIndex);
    };

    // Calculate display index for markers/dots (0 to cards.length - 1)
    const displayIndex = activeIndex % cards.length;

    // Faded trailing opacity effect
    const cardOpacity = (i: number) => {
        const dist = Math.abs(i - activeIndex);
        if (dist === 0) return 1;
        if (dist === 1) return 0.75;
        return 0.45;
    };

    return (
        <section className="py-16 md:py-28 bg-[#fafafa] dark:bg-[#060911] text-slate-900 dark:text-white overflow-hidden reveal-section relative">
            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-deep/5 dark:bg-brand-deep/10 blur-[180px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#3994fa]/5 dark:bg-[#3994fa]/8 blur-[140px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="h-px w-8 bg-[#3994fa]" />
                            <span className="text-[#3994fa] font-bold uppercase tracking-[0.25em] text-xs">Our Work</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                            Apps That Build<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#3994fa]">
                                Lasting Success.
                            </span>
                        </h2>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-4">
                        <p className="text-slate-500 dark:text-slate-400 max-w-xs text-sm leading-relaxed md:text-right">
                            Premium mobile experiences crafted for performance — built to scale your startup.
                        </p>
                        {/* Nav Buttons */}
                        <div className="flex items-center gap-3">
                            <button
                                id="portfolio-prev"
                                onClick={() => snapTo(activeIndex - 1)}
                                className="w-11 h-11 rounded-full border-2 border-slate-200 dark:border-white/10 flex items-center justify-center transition-all text-slate-500 dark:text-slate-400 hover:bg-gradient-to-r hover:from-[#3994fa] hover:to-[#004aad] hover:text-white hover:border-transparent"
                                aria-label="Previous slide"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <span className="text-slate-600 dark:text-slate-500 text-sm font-bold tabular-nums">
                                {String(displayIndex + 1).padStart(2, '0')} / {String(cards.length).padStart(2, '0')}
                            </span>
                            <button
                                id="portfolio-next"
                                onClick={() => snapTo(activeIndex + 1)}
                                className="w-11 h-11 rounded-full border-2 border-slate-200 dark:border-white/10 flex items-center justify-center transition-all text-slate-500 dark:text-slate-400 hover:bg-gradient-to-r hover:from-[#3994fa] hover:to-[#004aad] hover:text-white hover:border-transparent"
                                aria-label="Next slide"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel Track — full bleed */}
            <div className="relative pl-4 md:pl-[max(1rem,calc((100%-80rem)/2+1.5rem))]">
                {/* Drag hint */}
                <motion.div
                    
                    className="absolute top-[-28px] right-4 md:right-8 text-[10px] text-slate-600 font-bold uppercase tracking-widest flex items-center gap-1.5 pointer-events-none"
                >
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Drag to explore
                </motion.div>

                <div ref={trackRef} className="overflow-visible cursor-grab active:cursor-grabbing" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <motion.div
                        drag="x"
                        dragConstraints={{
                            left: -((extendedCards.length - 1) * CARD_STEP),
                            right: 0
                        }}
                        dragElastic={0.08}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={handleDragEnd}
                        style={{ x }}
                        className="flex gap-5 select-none"
                        onClick={(e) => { if (isDragging) e.preventDefault(); }}
                    >
                        {extendedCards.map((card, i) => (
                            <PortfolioCard 
                                key={`${card.id}-${i}`} 
                                card={card} 
                                i={i} 
                                activeIndex={activeIndex} 
                                isDragging={isDragging} 
                                snapTo={snapTo} 
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-8 px-4">
                {cards.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => snapTo(i + cards.length)}
                        className={`transition-all duration-300 rounded-full ${i === displayIndex
                            ? 'w-7 h-2 bg-gradient-to-r from-[#3994fa] to-[#004aad]'
                            : 'w-2 h-2 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40'
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Footer CTA */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 mt-10">
                <motion.div
                    className="p-5 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                            {['#3994fa', '#3994fa', '#2F6FB5'].map((c, i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-[#060911]" style={{ background: c }} />
                            ))}
                        </div>
                        <div>
                            <div className="text-slate-900 dark:text-white font-bold text-sm">Custom products built for 150+ brands</div>
                            <div className="text-slate-500 text-xs">Delivering iOS, Android & Next-gen Web platforms</div>
                        </div>
                    </div>
                    <a
                        href="#consultation"
                        className="shrink-0 px-6 py-3 bg-gradient-to-r from-[#3994fa] to-[#004aad] rounded-xl font-bold text-white text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-[#3994fa]/30 transition-all flex items-center gap-2"
                    >
                        Start Your Project <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
