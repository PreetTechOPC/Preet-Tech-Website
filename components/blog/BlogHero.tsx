"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Check } from 'lucide-react';
import { CATEGORIES } from '@/lib/blog-data';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogHeroProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
    onSearch: (term: string) => void;
}

const ALL_CATEGORIES = ['All', ...CATEGORIES];

export default function BlogHero({ activeCategory, onCategoryChange, onSearch }: BlogHeroProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const handleSelect = (cat: string) => {
        onCategoryChange(cat);
        setDropdownOpen(false);
    };

    return (
        <section className="relative pt-32 pb-8 bg-background z-[100]">
            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-8">

                    {/* Search Bar */}
                    <motion.div
                        
                        
                        className="relative w-full max-w-2xl group"
                    >
                        <div className="absolute inset-0 bg-brand-cyan/20 blur-xl opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity" />
                        <div className="relative">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-cyan w-5 h-5 pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Search library..."
                                onChange={(e) => onSearch(e.target.value)}
                                className="w-full h-16 pl-16 pr-6 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-cyan/30 outline-none transition-all text-lg font-bold placeholder:text-slate-600 shadow-xl"
                            />
                        </div>
                    </motion.div>

                    {/* Categories Row: scrollable tabs + dropdown */}
                    <div className="w-full flex items-center gap-3">

                        {/* Scrollable tab pills */}
                        <div className="flex-1 relative -mx-4 px-4 sm:mx-0 sm:px-0 overflow-hidden">
                            <motion.div
                                
                                
                                className="flex justify-start sm:justify-center gap-2 overflow-x-auto hide-scrollbar pb-2 pt-2"
                            >
                                {ALL_CATEGORIES.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => handleSelect(cat)}
                                        className={`flex-shrink-0 px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${activeCategory === cat
                                            ? 'bg-gradient-to-r from-[#3994fa] to-[#004aad] border-transparent text-white shadow-lg shadow-[#3994fa]/20 scale-105'
                                            : 'bg-white/5 border-white/10 text-slate-500 hover:border-brand-sky/40 hover:text-brand-cyan'
                                            }`}
                                    >
                                        {cat === 'All' ? 'All Posts' : cat}
                                    </button>
                                ))}
                            </motion.div>
                        </div>

                        {/* Dropdown filter button */}
                        <div className="relative flex-shrink-0 z-[200]" ref={dropdownRef}>
                            <button
                                onClick={() => setDropdownOpen((prev) => !prev)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all duration-300 ${dropdownOpen
                                    ? 'bg-gradient-to-r from-[#3994fa] to-[#004aad] border-transparent text-white shadow-lg shadow-[#3994fa]/20'
                                    : 'bg-white/5 border-white/10 text-slate-400 hover:border-brand-sky/40 hover:text-brand-cyan'
                                    }`}
                            >
                                <span className="hidden sm:inline">
                                    {activeCategory === 'All' ? 'Filter' : activeCategory}
                                </span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {dropdownOpen && (
                                    <motion.div
                                        
                                        
                                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                                        
                                        className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-[#0d1120] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl shadow-black/20 overflow-hidden z-50"
                                    >
                                        <div className="p-2 space-y-0.5 max-h-72 overflow-y-auto">
                                            {ALL_CATEGORIES.map((cat) => (
                                                <button
                                                    key={cat}
                                                    onClick={() => handleSelect(cat)}
                                                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-[11px] font-bold transition-all duration-200 text-left ${activeCategory === cat
                                                        ? 'bg-gradient-to-r from-[#3994fa]/15 to-[#004aad]/10 text-[#3994fa] border border-[#3994fa]/20'
                                                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                                                        }`}
                                                >
                                                    <span>{cat === 'All' ? 'All Posts' : cat}</span>
                                                    {activeCategory === cat && (
                                                        <Check className="w-3.5 h-3.5 text-[#3994fa] flex-shrink-0" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
