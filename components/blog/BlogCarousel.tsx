import React, { useRef, useState, useEffect } from 'react';
import { BlogPost } from '@/lib/blog-data';
import BlogCard from './BlogCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogCarouselProps {
    posts: BlogPost[];
}

export default function BlogCarousel({ posts }: BlogCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [posts]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    if (!posts || posts.length === 0) return null;

    return (
        <div className="w-full relative py-8">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    Explore Stories
                </h3>
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        className={`w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center transition-colors
                            ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gradient-to-r hover:from-[#3994fa] hover:to-[#004aad] hover:border-transparent group border'}`}
                    >
                        <ChevronLeft className={`w-5 h-5 ${canScrollLeft ? 'group-hover:text-slate-950 text-slate-400' : 'text-slate-600'}`} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className={`w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center transition-colors
                            ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gradient-to-r hover:from-[#3994fa] hover:to-[#004aad] hover:border-transparent group border'}`}
                    >
                        <ChevronRight className={`w-5 h-5 ${canScrollRight ? 'group-hover:text-slate-950 text-slate-400' : 'text-slate-600'}`} />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                onScroll={checkScroll}
                className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {posts.map(post => (
                    <div key={post.id} className="min-w-[320px] md:min-w-[360px] lg:min-w-[380px] snap-center">
                        <BlogCard post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
}
