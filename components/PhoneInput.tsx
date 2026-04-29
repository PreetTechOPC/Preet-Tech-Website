"use client";

import React from 'react';
import { Phone, ChevronDown } from 'lucide-react';

interface PhoneInputProps {
    value: string;
    onChange: (value: string) => void;
    countryCode: string;
    onCountryCodeChange: (code: string) => void;
    placeholder?: string;
    className?: string;
}

const countryCodes = [
    { code: '+91', country: 'IN', label: '🇮🇳 India (+91)' },
    { code: '+1', country: 'US', label: '🇺🇸 USA/Canada (+1)' },
    { code: '+44', country: 'UK', label: '🇬🇧 UK (+44)' },
    { code: '+971', country: 'AE', label: '🇦🇪 UAE (+971)' },
    { code: '+61', country: 'AU', label: '🇦🇺 Australia (+61)' },
    { code: '+65', country: 'SG', label: '🇸🇬 Singapore (+65)' },
    { code: '+49', country: 'DE', label: '🇩🇪 Germany (+49)' },
    { code: '+33', country: 'FR', label: '🇫🇷 France (+33)' },
    { code: '+81', country: 'JP', label: '🇯🇵 Japan (+81)' },
    { code: '+7', country: 'RU', label: '🇷🇺 Russia (+7)' },
];

const PhoneInput: React.FC<PhoneInputProps> = ({
    value,
    onChange,
    countryCode,
    onCountryCodeChange,
    placeholder = "98765 43210",
    className = ""
}) => {
    return (
        <div className={`relative flex items-center group ${className}`}>
            <div className="relative group/select shrink-0">
                <select
                    value={countryCode}
                    onChange={(e) => onCountryCodeChange(e.target.value)}
                    className="appearance-none bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-l-2xl py-4 pl-4 pr-10 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all text-sm text-slate-700 dark:text-slate-200 cursor-pointer border-r-0"
                >
                    {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>
                            {c.code}
                        </option>
                    ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none group-focus-within/select:text-[#3994fa] transition-colors" />
            </div>

            <div className="relative flex-1">
                <Phone strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3994fa] transition-colors" />
                <input
                    required
                    type="tel"
                    value={value || ''}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-r-2xl py-4 pl-12 pr-4 outline-none focus:border-[#3994fa] focus:ring-1 focus:ring-[#3994fa]/20 transition-all text-sm text-slate-700 dark:text-slate-200"
                />
            </div>
        </div>
    );
};

export default PhoneInput;
