import React, { useRef, useState, useEffect, memo, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ArrowRight, ArrowLeft, BookOpen, Calendar, Clock, Tag } from 'lucide-react';

const INSIGHTS = [
    {
        id: 1,
        title: "The Future of AI in Fintech: Beyond Automation",
        excerpt: "Discover how predictive algorithms are reshaping financial services, from fraud detection to personalized wealth management.",
        category: "Fintech",
        readTime: "5 min read",
        date: "Oct 12, 2024",
        image: "/images/services/software-development.png",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        slug: "future-ai-fintech-beyond-automation"
    },
    {
        id: 2,
        title: "Scaling SaaS: From MVP to Market Leader",
        excerpt: "Key strategies for technical scalability and user acquisition during the critical growth phase of your startup.",
        category: "Startup Strategy",
        readTime: "7 min read",
        date: "Oct 08, 2024",
        image: "/images/services/saasflow-dashboard.png",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        slug: "scaling-saas-mvp-to-market-leader"
    },
    {
        id: 3,
        title: "Web3 & The New Internet Infrastructure",
        excerpt: "An engineer's guide to decentralized architectures and how they will impact enterprise application development.",
        category: "Technology",
        readTime: "6 min read",
        date: "Sep 28, 2024",
        image: "/images/services/logicflow-logistics.png",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        slug: "web3-new-internet-infrastructure"
    }
];

const InsightCard = memo(({ post, index }: { post: any; index: number }) => (
    <div
        className="insight-card group flex flex-col w-[calc(100vw-48px)] md:w-[320px] bg-white dark:bg-[#111624] rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/5 hover:border-brand-medium/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.2)] flex-shrink-0 select-none"
    >
        <Link
            href={`/blog/${post.slug}`}
            className="flex flex-col h-full"
            onDragStart={(e) => e.preventDefault()}
            draggable={false}
        >
            {/* Image Visual */}
            <div className="relative h-44 md:h-48 overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                    draggable={false}
                    sizes="(max-width: 768px) 100vw, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-5 left-5">
                    <span className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-white/95 dark:bg-black/80 backdrop-blur-md ${post.color} border border-white/10 shadow-xl`}>
                        {post.category}
                    </span>
                </div>
            </div>

            {/* Post Content */}
            <div className="flex-1 p-5 md:p-8 flex flex-col">
                <div className="flex items-center gap-5 text-[10px] font-mono text-slate-500 mb-6 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-brand-medium" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-brand-medium" /> {post.readTime}</span>
                </div>

                <h3 className="text-base md:text-lg font-black text-foreground mb-4 leading-tight group-hover:text-brand-medium transition-colors line-clamp-2">
                    {post.title}
                </h3>

                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground group-hover:text-brand-medium transition-colors">
                        Read Analysis
                    </span>
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-brand-medium group-hover:text-white transition-all duration-300 shadow-sm">
                        <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                </div>
            </div>
        </Link>
    </div>
));

InsightCard.displayName = 'InsightCard';

const Insights: React.FC = () => {
    const [cardWidth, setCardWidth] = useState(320);
    const GAP = 32;
    const STEP = cardWidth + GAP;
    
    const extendedInsights = useMemo(() => [...INSIGHTS, ...INSIGHTS, ...INSIGHTS], []);
    
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    
    const sectionRef = useRef<HTMLElement>(null);
    const requestRef = useRef<number>(0);
    const x = useMotionValue(-INSIGHTS.length * STEP);
    
    // Handle window resize for responsive card widths
    useEffect(() => {
        const updateWidth = () => {
            if (window.innerWidth < 768) {
                setCardWidth(window.innerWidth - 48);
            } else {
                setCardWidth(320);
            }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    // Update x value when STEP changes (resize)
    useEffect(() => {
        const currentX = x.get();
        const currentIndex = Math.round(-currentX / STEP);
        x.set(-currentIndex * STEP);
    }, [STEP, x]);

    // Pause auto-slide when section is not visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleLoop = useCallback((currentX: number) => {
        const fullSetWidth = INSIGHTS.length * STEP;
        if (currentX <= -INSIGHTS.length * 2 * STEP) {
            return currentX + fullSetWidth;
        } else if (currentX >= -0.5 * STEP) {
            return currentX - fullSetWidth;
        }
        return currentX;
    }, [STEP]);

    // Continuous Auto-Slide Marquee (Left to Right)
    useEffect(() => {
        if (isDragging || isHovered || !isVisible) return;

        let lastTime = performance.now();
        const drift = (time: number) => {
            const delta = time - lastTime;
            lastTime = time;
            
            const speed = 0.035; // Slightly slower than services for readability
            const currentX = x.get();
            const nextX = handleLoop(currentX - speed * delta); // Negative for Right-to-Left
            
            x.set(nextX);
            requestRef.current = requestAnimationFrame(drift);
        };

        requestRef.current = requestAnimationFrame(drift);
        return () => cancelAnimationFrame(requestRef.current);
    }, [isDragging, isHovered, isVisible, STEP, x, handleLoop]);

    const snapTo = useCallback((index: number) => {
        const targetX = -index * STEP;
        
        animate(x, targetX, {
            type: 'spring',
            stiffness: 150,
            damping: 25,
            onUpdate: (latest) => {
                const resetX = handleLoop(latest);
                if (resetX !== latest) x.set(resetX);
            }
        });
    }, [STEP, x, handleLoop]);

    const handleDragEnd = (_: any, info: any) => {
        setIsDragging(false);
        const currentX = x.get();
        const offsetIndex = Math.round(-currentX / STEP);
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
            id="insights"
            ref={sectionRef}
            className="pt-8 md:pt-12 pb-24 bg-slate-50 dark:bg-[#080c14] overflow-hidden transition-colors duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-16 gap-6 md:gap-8 border-t border-slate-100 dark:border-white/5 pt-12">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-medium/10 border border-brand-medium/20 mb-3 md:mb-4 font-mono">
                            <BookOpen className="w-4 h-4 text-brand-medium" />
                            <span className="text-[10px] md:text-xs font-bold text-brand-medium uppercase tracking-[0.2em]">Knowledge Base</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 leading-[1.1] md:leading-tight uppercase tracking-tighter">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan">Case Studies.</span>
                        </h2>
                    </div>

                    <div className="hidden md:flex items-center gap-4 mt-2 md:mt-0">
                        <button
                            onClick={() => manualScroll('left')}
                            className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-transparent rounded-full flex items-center justify-center border-2 border-[#E9EEF4] dark:border-white/10 text-[#8C9FAF] hover:bg-[#3994fa] dark:hover:bg-[#3994fa] hover:text-white dark:hover:text-white hover:border-[#3994fa] dark:hover:border-[#3994fa] shadow-sm hover:shadow-lg transition-all duration-300 active:scale-95 group"
                            aria-label="Scroll left"
                        >
                            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 stroke-[2px]" />
                        </button>
                        <button
                            onClick={() => manualScroll('right')}
                            className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-transparent rounded-full flex items-center justify-center border-2 border-[#E9EEF4] dark:border-white/10 text-[#8C9FAF] hover:bg-[#3994fa] dark:hover:bg-[#3994fa] hover:text-white dark:hover:text-white hover:border-[#3994fa] dark:hover:border-[#3994fa] shadow-sm hover:shadow-lg transition-all duration-300 active:scale-95 group"
                            aria-label="Scroll right"
                        >
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 stroke-[2px]" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Infinite Slider Layout */}
            <div className="relative w-full overflow-visible gpu">
                {/* Drag Hint */}
                <div className="absolute -top-8 right-6 md:right-12 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-2 pointer-events-none animate-pulse z-10">
                    <ArrowRight className="w-3 h-3" />
                    Drag to Explore
                </div>

                <div className="overflow-visible cursor-grab active:cursor-grabbing px-6 md:pl-[max(1.5rem,calc((100%-1280px+3rem)/2))]">
                    <motion.div
                        style={{ x }}
                        drag="x"
                        dragConstraints={{ left: -20000, right: 20000 }}
                        dragElastic={0.05}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={handleDragEnd}
                        className="flex gap-6 md:gap-8 will-change-transform"
                    >
                        {extendedInsights.map((post, index) => (
                            <InsightCard 
                                key={`${post.id}-${index}`} 
                                post={post} 
                                index={index} 
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Side Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-8 md:w-[max(1.5rem,calc((100%-1280px+3rem)/2))] bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent dark:from-[#080c14] dark:via-[#080c14]/80 z-10 pointer-events-none hidden md:block" />
                <div className="absolute right-0 top-0 bottom-0 w-8 md:w-[max(1.5rem,calc((100%-1280px+3rem)/2))] bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent dark:from-[#080c14] dark:via-[#080c14]/80 z-10 pointer-events-none hidden md:block" />
            </div>

            <div className="mt-12 flex justify-center w-full relative z-10">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-medium text-white shadow-lg shadow-brand-medium/20 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brand-medium/90 hover:-translate-y-0.5 transition-all"
                >
                    Enter Archives
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
};

export default Insights;
