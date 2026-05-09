"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PhoneInputProps {
    value: string;
    onChange: (value: string) => void;
    countryCode: string;
    onCountryCodeChange: (code: string) => void;
    placeholder?: string;
    className?: string;
}

const countryCodes = [
    { code: '+91', country: 'IN', label: '🇮🇳 +91' },
    { code: '+1', country: 'US', label: '🇺🇸 +1' },
    { code: '+44', country: 'UK', label: '🇬🇧 +44' },
    { code: '+971', country: 'AE', label: '🇦🇪 +971' },
    { code: '+61', country: 'AU', label: '🇦🇺 +61' },
    { code: '+65', country: 'SG', label: '🇸🇬 +65' },
    { code: '+49', country: 'DE', label: '🇩🇪 +49' },
    { code: '+33', country: 'FR', label: '🇫🇷 +33' },
    { code: '+81', country: 'JP', label: '🇯🇵 +81' },
    { code: '+7', country: 'RU', label: '🇷🇺 +7' },
    { code: '+86', country: 'CN', label: '🇨🇳 +86' },
    { code: '+39', country: 'IT', label: '🇮🇹 +39' },
    { code: '+34', country: 'ES', label: '🇪🇸 +34' },
    { code: '+55', country: 'BR', label: '🇧🇷 +55' },
    { code: '+27', country: 'ZA', label: '🇿🇦 +27' },
    { code: '+82', country: 'KR', label: '🇰🇷 +82' },
    { code: '+31', country: 'NL', label: '🇳🇱 +31' },
    { code: '+41', country: 'CH', label: '🇨🇭 +41' },
    { code: '+46', country: 'SE', label: '🇸🇪 +46' },
    { code: '+47', country: 'NO', label: '🇳🇴 +47' },
    { code: '+45', country: 'DK', label: '🇩🇰 +45' },
    { code: '+353', country: 'IE', label: '🇮🇪 +353' },
    { code: '+64', country: 'NZ', label: '🇳🇿 +64' },
    { code: '+60', country: 'MY', label: '🇲🇾 +60' },
    { code: '+62', country: 'ID', label: '🇮🇩 +62' },
    { code: '+66', country: 'TH', label: '🇹🇭 +66' },
    { code: '+84', country: 'VN', label: '🇻🇳 +84' },
    { code: '+63', country: 'PH', label: '🇵🇭 +63' },
    { code: '+92', country: 'PK', label: '🇵🇰 +92' },
    { code: '+880', country: 'BD', label: '🇧🇩 +880' },
    { code: '+94', country: 'LK', label: '🇱🇰 +94' },
    { code: '+90', country: 'TR', label: '🇹🇷 +90' },
    { code: '+966', country: 'SA', label: '🇸🇦 +966' },
    { code: '+974', country: 'QA', label: '🇶🇦 +974' },
    { code: '+965', country: 'KW', label: '🇰🇼 +965' },
    { code: '+968', country: 'OM', label: '🇴🇲 +968' },
    { code: '+973', country: 'BH', label: '🇧🇭 +973' },
    { code: '+20', country: 'EG', label: '🇪🇬 +20' },
    { code: '+234', country: 'NG', label: '🇳🇬 +234' },
    { code: '+254', country: 'KE', label: '🇰🇪 +254' },
    { code: '+212', country: 'MA', label: '🇲🇦 +212' },
    { code: '+52', country: 'MX', label: '🇲🇽 +52' },
    { code: '+54', country: 'AR', label: '🇦🇷 +54' },
    { code: '+56', country: 'CL', label: '🇨🇱 +56' },
    { code: '+57', country: 'CO', label: '🇨🇴 +57' },
    { code: '+48', country: 'PL', label: '🇵🇱 +48' },
    { code: '+351', country: 'PT', label: '🇵🇹 +351' },
    { code: '+30', country: 'GR', label: '🇬🇷 +30' },
    { code: '+420', country: 'CZ', label: '🇨🇿 +420' },
    { code: '+36', country: 'HU', label: '🇭🇺 +36' },
    { code: '+43', country: 'AT', label: '🇦🇹 +43' },
    { code: '+32', country: 'BE', label: '🇧🇪 +32' },
    { code: '+40', country: 'RO', label: '🇷🇴 +40' },
    { code: '+358', country: 'FI', label: '🇫🇮 +358' },
    { code: '+380', country: 'UA', label: '🇺🇦 +380' },
    { code: '+972', country: 'IL', label: '🇮🇱 +972' },
    { code: '+98', country: 'IR', label: '🇮🇷 +98' },
    { code: '+964', country: 'IQ', label: '🇮🇶 +964' },
    { code: '+93', country: 'AF', label: '🇦🇫 +93' },
    { code: '+977', country: 'NP', label: '🇳🇵 +977' },
    { code: '+95', country: 'MM', label: '🇲🇲 +95' },
    { code: '+855', country: 'KH', label: '🇰🇭 +855' },
    { code: '+856', country: 'LA', label: '🇱🇦 +856' },
    { code: '+976', country: 'MN', label: '🇲🇳 +976' },
    { code: '+852', country: 'HK', label: '🇭🇰 +852' },
    { code: '+886', country: 'TW', label: '🇹🇼 +886' },
];

const PhoneInput: React.FC<PhoneInputProps> = ({
    value,
    onChange,
    countryCode,
    onCountryCodeChange,
    placeholder = "98765 43210",
    className = ""
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const filteredCodes = countryCodes.filter(c =>
        c.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.country.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const selectedCountry = countryCodes.find(c => c.code === countryCode) || countryCodes[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`relative flex items-center group ${className}`}>
            <div className="relative shrink-0" ref={dropdownRef}>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-l-2xl py-4 pl-4 pr-3 outline-none hover:border-brand-medium transition-all cursor-pointer border-r-0 min-w-[110px]"
                >
                    <span className="text-base">{selectedCountry.label.split(' ')[0]}</span>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{countryCode}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute left-0 top-full mt-2 w-64 max-h-[400px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-[100] overflow-hidden flex flex-col"
                        >
                            {/* Search Box */}
                            <div className="p-3 border-b border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-20">
                                <div className="relative group">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-focus-within:text-brand-medium transition-colors" />
                                    <input
                                        autoFocus
                                        type="text"
                                        placeholder="Search country..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl py-2 pl-9 pr-3 outline-none focus:border-brand-medium/50 transition-all text-xs text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            {/* Scrollable List with Fade Masks */}
                            <div className="relative flex-1 min-h-0 flex flex-col">
                                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white dark:from-slate-900 to-transparent z-10 pointer-events-none flex items-start justify-center pt-1">
                                    <ChevronDown className="w-3 h-3 text-slate-300 rotate-180" />
                                </div>
                                
                                <div className="flex-1 overflow-y-auto py-4 custom-scrollbar scroll-smooth">
                                    {filteredCodes.length > 0 ? (
                                        filteredCodes.map((c) => (
                                            <button
                                                key={`${c.country}-${c.code}`}
                                                type="button"
                                                onClick={() => {
                                                    onCountryCodeChange(c.code);
                                                    setIsOpen(false);
                                                    setSearchQuery('');
                                                }}
                                                className={`w-full flex items-center justify-between px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-left group/item ${countryCode === c.code ? 'bg-brand-medium/5 text-brand-medium' : 'text-slate-700 dark:text-slate-300'}`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="text-xl group-hover/item:scale-110 transition-transform">{c.label.split(' ')[0]}</span>
                                                    <div className="flex flex-col -space-y-0.5">
                                                        <span className="text-[10px] font-bold uppercase tracking-tight opacity-50">{c.country}</span>
                                                        <span className="text-xs font-bold">{c.label.split(' ')[1]}</span>
                                                    </div>
                                                </div>
                                                {countryCode === c.code ? (
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-medium shadow-[0_0_8px_rgba(57,148,250,0.5)]" />
                                                ) : (
                                                    <div className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-800 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                                )}
                                            </button>
                                        ))
                                    ) : (
                                        <div className="py-12 text-center space-y-2">
                                            <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto">
                                                <Search className="w-5 h-5 text-slate-300" />
                                            </div>
                                            <p className="text-slate-500 text-[10px] font-medium uppercase tracking-widest">No results found</p>
                                        </div>
                                    )}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-slate-900 to-transparent z-10 pointer-events-none flex items-end justify-center pb-1">
                                    <ChevronDown className="w-3 h-3 text-slate-300" />
                                </div>
                            </div>

                            <style jsx>{`
                                .custom-scrollbar::-webkit-scrollbar {
                                    width: 4px;
                                }
                                .custom-scrollbar::-webkit-scrollbar-track {
                                    background: transparent;
                                }
                                .custom-scrollbar::-webkit-scrollbar-thumb {
                                    background: rgba(156, 163, 175, 0.2);
                                    border-radius: 20px;
                                }
                                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                                    background: rgba(156, 163, 175, 0.4);
                                }
                            `}</style>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="relative flex-1">
                <input
                    required
                    type="tel"
                    value={value || ''}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-r-2xl py-4 px-6 outline-none focus:border-brand-medium transition-all text-sm font-medium text-slate-700 dark:text-slate-200"
                />
            </div>
        </div>
    );
};

export default PhoneInput;
