"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Bot, Zap, Maximize2, Minimize2, CheckCircle, ChevronRight, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation';
import MeetingSchedulerModal from './MeetingSchedulerModal';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface Message {
    role: 'user' | 'assistant';
    content: string;
    options?: { label: string; action: string }[];
}

export default function ChatWidget() {
    const pathname = usePathname();
    const widgetRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);

    const initialMessages: Message[] = [
        { 
            role: 'assistant', 
            content: "Welcome to Preet Tech OPC Private Limited. How can I help you build the future today?",
            options: [
                { label: "Book a Strategy Call", action: "BOOK_CALL" },
                { label: "Our Services", action: "SERVICES" },
                { label: "Contact Us", action: "CONTACT" }
            ]
        }
    ];

    const [messages, setMessages] = useState<Message[]>(initialMessages);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        const showTimer = setTimeout(() => setShowTooltip(true), 1500);
        return () => clearTimeout(showTimer);
    }, []);

    useEffect(() => {
        if (isOpen) setShowTooltip(false);
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (widgetRef.current && !widgetRef.current.contains(event.target as Node) && !isMeetingModalOpen) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, isMeetingModalOpen]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleAction = (label: string, action: string) => {
        // Add User Message
        const newMessages = [...messages, { role: 'user', content: label } as Message];
        setMessages(newMessages);

        // Process Action
        setTimeout(() => {
            let botReply: Message = { role: 'assistant', content: "" };

            switch(action) {
                case "BOOK_CALL":
                    botReply.content = "Great! Let's get your strategy call scheduled. Opening the calendar now...";
                    setIsMeetingModalOpen(true);
                    botReply.options = [
                        { label: "Back to Main Menu", action: "MAIN_MENU" }
                    ];
                    break;
                case "SERVICES":
                    botReply.content = "We offer a wide range of digital solutions:\n\n• Web Engineering & Development\n• Mobile Apps & Custom Software\n• Performance Marketing & SEO\n• Content, UI/UX & Design\n\nWhich of these would you like to discuss?";
                    botReply.options = [
                        { label: "Book a Strategy Call", action: "BOOK_CALL" },
                        { label: "Back to Main Menu", action: "MAIN_MENU" }
                    ];
                    break;
                case "CONTACT":
                    botReply.content = "You can reach us anytime!\n\n📞 Phone: +91 9756667397\n📧 Email: hello@preettech.com\n\nOr simply book a call directly with us.";
                    botReply.options = [
                        { label: "Book a Strategy Call", action: "BOOK_CALL" },
                        { label: "Back to Main Menu", action: "MAIN_MENU" }
                    ];
                    break;
                case "MAIN_MENU":
                    botReply.content = "What else can I help you with?";
                    botReply.options = [
                        { label: "Book a Strategy Call", action: "BOOK_CALL" },
                        { label: "Our Services", action: "SERVICES" },
                        { label: "Contact Us", action: "CONTACT" }
                    ];
                    break;
                default:
                    botReply.content = "How can I assist you further?";
                    botReply.options = [
                        { label: "Back to Main Menu", action: "MAIN_MENU" }
                    ];
                    break;
            }

            setMessages(prev => [...prev, botReply]);
        }, 500); // Small artificial delay to feel natural
    };

    const resetChat = () => {
        setMessages(initialMessages);
    };

    return (
        <>
            <div ref={widgetRef} className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9998] font-sans flex flex-col items-end">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{
                                layout: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
                                opacity: { duration: 0.2 },
                                y: { duration: 0.3 }
                            }}
                            className={cn(
                                "absolute bottom-20 right-0 bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-white/10 flex flex-col overflow-hidden glass-morphism origin-bottom-right mb-4 gpu",
                                isExpanded
                                    ? "w-[95vw] md:w-[85vw] lg:w-[1000px] h-[85vh] max-h-[900px] rounded-2xl"
                                    : "w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] rounded-2xl"
                            )}
                        >
                            {/* Header */}
                            <div className="p-5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-brand-medium flex items-center justify-center text-black overflow-hidden shadow-inner relative">
                                        <Image 
                                            src="/ChatBot Icon.png" 
                                            alt="Preet Tech OPC Private Limited AI" 
                                            fill
                                            className="object-cover" 
                                            sizes="40px"
                                            priority 
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">Preet Tech Support</h3>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Online</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={resetChat}
                                        className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 text-slate-500 hover:text-brand-medium mr-2"
                                    >
                                        Reset
                                    </button>
                                    <button
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        className="hidden md:block p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors"
                                    >
                                        {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                                    </button>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Messages */}
                            <div
                                className="flex-1 overflow-y-auto p-5 space-y-5 scroll-smooth bg-white dark:bg-[#07090f] pb-10"
                                data-lenis-prevent
                            >
                                {messages.map((m, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={cn(
                                            "flex flex-col gap-2 max-w-[85%] gpu",
                                            m.role === 'user' ? "ml-auto items-end" : "items-start"
                                        )}
                                    >
                                        <div className={cn(
                                            "p-4 rounded-xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap",
                                            m.role === 'user'
                                                ? "bg-brand-medium text-white font-medium rounded-tr-sm"
                                                : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 rounded-tl-sm border border-slate-200 dark:border-white/5"
                                        )}>
                                            {m.content}
                                        </div>
                                        
                                        {/* Render Options if they exist and it's the last message */}
                                        {m.options && i === messages.length - 1 && (
                                            <div className="flex flex-col gap-2 mt-2 w-full">
                                                {m.options.map((opt, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => handleAction(opt.label, opt.action)}
                                                        className="text-left w-full max-w-full sm:w-auto px-4 py-3 bg-white dark:bg-slate-800/80 border border-brand-medium/30 hover:border-brand-medium text-brand-medium dark:text-brand-cyan text-sm font-medium rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-between group"
                                                    >
                                                        {opt.label}
                                                        <ChevronRight size={16} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Welcome Tooltip */}
                <AnimatePresence>
                    {!isOpen && showTooltip && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute bottom-full mb-4 right-0 md:right-1"
                        >
                            <div 
                                className="relative px-4 py-3 bg-white dark:bg-slate-800 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] rounded-2xl rounded-br-sm border border-slate-200 dark:border-white/10 whitespace-nowrap flex items-center gap-3 cursor-pointer group hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors gpu"
                                onClick={() => setIsOpen(true)}
                            >
                                <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_10px_rgba(0,195,255,0.8)]" />
                                <span className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-200 tracking-wide">
                                    Need help? Click here 👋
                                </span>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
                                    className="ml-1 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                                    aria-label="Close tooltip"
                                >
                                    <X size={14} />
                                </button>
                                <div className="absolute -bottom-[7px] right-5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white dark:border-t-slate-800" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close Menu" : "Open Menu"}
                    className={cn(
                        "flex items-center justify-center transition-all duration-300 relative z-50 shadow-2xl overflow-hidden",
                        isOpen
                            ? "w-12 h-12 md:w-14 md:h-14 bg-slate-900 rounded-full border border-white/10 text-white rotate-90"
                            : "w-14 h-14 md:w-16 md:h-16 bg-transparent border-0 p-0"
                    )}
                >
                    {isOpen ? (
                        <X size={24} className="-rotate-90" />
                    ) : (
                        <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
                            <Image
                                src="/ChatBot Icon.png"
                                alt="Support Menu"
                                width={64}
                                height={64}
                                className="w-full h-full object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    )}
                </motion.button>
            </div>

            <MeetingSchedulerModal 
                isOpen={isMeetingModalOpen} 
                onClose={() => setIsMeetingModalOpen(false)} 
            />
        </>
    );
}
