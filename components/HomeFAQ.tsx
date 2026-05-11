import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
    {
        question: "What makes Preet Tech OPC Private Limited a top Next Gen IT Company?",
        answer: "As a leading Next Gen IT Company, we combine over a decade of IT experience with cutting-edge generative AI integration. We specialize in custom software development, AI-driven marketing, and scalable tech solutions to ensure your business stays ahead of the digital curve."
    },
    {
        question: "Do you offer custom software and e-commerce development?",
        answer: "Yes. Our web and app development company builds robust, scalable platforms tailored to your specific business needs. From complex enterprise IT solutions to high-converting e-commerce development, we engineer digital products built for aggressive market growth."
    },
    {
        question: "How do your SEO optimization services improve ranking?",
        answer: "We use data-driven, ROI-focused SEO and performance marketing strategies. By optimizing site structure, improving Core Web Vitals, producing E-E-A-T compliant content, and leveraging AI SEO techniques, we help brands dominate search engine results and AI answer engines."
    },
    {
        question: "Why should a B2B business choose your cloud migration services?",
        answer: "Our B2B IT Company specializes in secure, seamless cloud migration services. We reduce infrastructure costs, improve security, and ensure 99.99% uptime, allowing your enterprise to scale its tech solutions safely and efficiently."
    },
    {
        question: "Why is Preet Tech considered the Best IT Company in Haldwani?",
        answer: "Preet Tech is recognized as the Best IT Company in Haldwani because we combine local market understanding with global tech standards. As a premier Website Developer in Haldwani, we offer end-to-end Digital Marketing, SEO, and Software Development services that deliver real business growth."
    }
];

const HomeFAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 md:py-24 bg-background relative overflow-hidden" id="faq">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-sm md:text-base font-bold text-brand-medium tracking-widest uppercase">Digital Growth FAQs</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
                        Get clear, concise answers about our IT services, AI marketing strategies, and custom development from our expert team.
                    </p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 dark:border-white/10 rounded-2xl bg-white dark:bg-[#0b0f1a] overflow-hidden transition-all duration-300 hover:border-brand-medium/50"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
                            >
                                <h3 className="text-sm md:text-base font-semibold text-foreground leading-tight">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className={`w-5 h-5 text-brand-medium transition-transform duration-300 flex-shrink-0 ml-4 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div


                                        exit={{ height: 0, opacity: 0 }}

                                    >
                                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeFAQ;
