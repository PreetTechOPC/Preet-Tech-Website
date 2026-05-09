"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2, Calendar, Sparkles, ArrowRight, Maximize2, Minimize2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { usePathname } from 'next/navigation';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
    reasoning_details?: any;
}

const QUICK_ACTIONS = [
    { label: "Book a Call", icon: Calendar },
    { label: "Our Services", icon: Bot },
    { label: "How It Works", icon: Sparkles },
];

export default function ChatWidget() {
    const pathname = usePathname();
    const widgetRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: "Welcome to Preet Tech OPC Private Limited. I am your Digital Assistant. How can I help you build the future today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Close on navigation
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (content: string) => {
        if (!content.trim() || isLoading) return;

        const newMessages: Message[] = [...messages, { role: 'user', content }];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: newMessages.map(m => ({
                        role: m.role,
                        content: m.content,
                        reasoning_details: m.reasoning_details
                    }))
                }),
            });

            const data = await response.json();
            if (data.text) {
                setMessages([...newMessages, {
                    role: 'assistant',
                    content: data.text,
                    reasoning_details: data.reasoning_details
                }]);
            } else {
                throw new Error(data.error || "Something went wrong");
            }
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages([...newMessages, { role: 'assistant', content: "I'm having trouble connecting to the neural network. Please try again or book a call directly." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleQuickAction = (action: string) => {
        handleSendMessage(action);
    };

    return (
        <div ref={widgetRef} className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] font-sans flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        layout


                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{
                            layout: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
                            opacity: { duration: 0.2 },
                            y: { duration: 0.3 }
                        }}
                        className={cn(
                            "absolute bottom-20 right-0 bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-white/10 flex flex-col overflow-hidden glass-morphism origin-bottom-right mb-4 gpu",
                            isExpanded
                                ? "w-[95vw] md:w-[85vw] lg:w-[1000px] h-[85vh] max-h-[900px] rounded-[2rem]"
                                : "w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] rounded-[2.5rem]"
                        )}
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-slate-200 dark:border-white/10 flex items-center justify-between bg-gradient-to-r from-brand-medium/10 to-transparent">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-2xl bg-brand-medium flex items-center justify-center text-black overflow-hidden shadow-inner">
                                    <img src="/ChatBot Icon.png" alt="Preet Tech OPC Private Limited AI" className="w-full h-full object-cover" loading="eager" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-black uppercase tracking-wider">Preet Tech OPC Private Limited AI</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">System Online</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
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
                            className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
                            data-lenis-prevent
                        >
                            {messages.map((m, i) => (
                                <motion.div



                                    key={i}
                                    className={cn(
                                        "flex flex-col gap-2 max-w-[85%] gpu",
                                        m.role === 'user' ? "ml-auto items-end" : "items-start"
                                    )}
                                >
                                    <div className={cn(
                                        "p-4 rounded-[1.5rem] text-sm leading-relaxed shadow-sm",
                                        m.role === 'user'
                                            ? "bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white font-medium rounded-tr-none"
                                            : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 rounded-tl-none border border-slate-200 dark:border-white/5"
                                    )}>
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            components={{
                                                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                                ul: ({ children }) => <ul className="list-disc ml-4 mb-2 space-y-1">{children}</ul>,
                                                ol: ({ children }) => <ol className="list-decimal ml-4 mb-2 space-y-1">{children}</ol>,
                                                li: ({ children }) => <li className="leading-tight">{children}</li>,
                                                strong: ({ children }) => (
                                                    <strong className={m.role === 'user' ? "font-black text-white" : "font-black text-brand-medium"}>
                                                        {children}
                                                    </strong>
                                                ),
                                                a: ({ href, children }) => (
                                                    <a href={href} target="_blank" rel="noopener noreferrer"
                                                        className={m.role === 'user' ? "text-white underline hover:opacity-80 transition-opacity" : "text-brand-medium underline hover:opacity-80 transition-opacity"}>
                                                        {children}
                                                    </a>
                                                ),
                                            }}
                                        >
                                            {m.content}
                                        </ReactMarkdown>
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex items-start gap-2 max-w-[85%]">
                                    <div className="p-4 rounded-[1.5rem] rounded-tl-none bg-slate-100 dark:bg-white/5 flex items-center gap-2">
                                        <Loader2 size={16} className="animate-spin text-brand-medium" />
                                        <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Typing...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions */}
                        <div
                            className="px-6 py-2 flex gap-2 overflow-x-auto no-scrollbar"
                            data-lenis-prevent
                        >
                            {QUICK_ACTIONS.map((action, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleQuickAction(action.label)}
                                    className="flex-none px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 hover:border-brand-medium/50 text-[10px] font-black uppercase tracking-widest transition-all hover:bg-brand-medium/5 whitespace-nowrap"
                                >
                                    <action.icon size={12} className="inline mr-2 text-brand-medium" />
                                    {action.label}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-6">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSendMessage(input);
                                }}
                                className="relative"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Message Preet Tech OPC Private Limited AI..."
                                    className="w-full px-6 py-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-medium/50 text-sm transition-all shadow-inner"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
                                >
                                    <ArrowRight size={20} />
                                </button>
                            </form>
                            <p className="mt-4 text-[9px] text-center font-bold text-slate-400 uppercase tracking-[0.2em]">
                                © {new Date().getFullYear()} Preet Tech OPC Private Limited. All Rights Reserved.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
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
                        <img
                            src="/ChatBot Icon.png"
                            alt="ChatBot"
                            className="w-full h-full object-contain drop-shadow-2xl"
                            loading="eager"
                        />
                    </div>
                )}
            </motion.button>
        </div>
    );
}
