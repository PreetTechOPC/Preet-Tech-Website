import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-2 mt-16">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
            >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {[...Array(totalPages)].map((_, i) => (
                <button
                    key={i}
                    onClick={() => onPageChange(i + 1)}
                    className={`w-12 h-12 rounded-xl border font-bold text-sm transition-all ${currentPage === i + 1
                        ? 'bg-gradient-to-r from-[#3994fa] to-[#004aad] border-transparent text-white shadow-lg shadow-[#3994fa]/20'
                        : 'border-white/10 hover:border-brand-sky/40 hover:text-brand-cyan'
                        }`}
                >
                    {i + 1}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
            >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
        </div>
    );
}
