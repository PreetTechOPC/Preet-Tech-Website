import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
    {
        question: "Which is the best website development company in Haldwani?",
        answer: "Preet Tech OPC Private Limited is a leading website development company in Haldwani, Uttarakhand. Since 2021, we have built high-performance websites, mobile apps, and custom software for startups and businesses across Uttarakhand and beyond. We combine local market understanding with global technology standards."
    },
    {
        question: "How much does website development cost in Haldwani?",
        answer: "Website development costs in Haldwani vary based on scope and complexity. Our Eco Website packages are budget-friendly and ideal for small businesses and startups. Custom websites, e-commerce platforms, and advanced web applications are priced based on features, integrations, and scale. We offer a free consultation to give you a transparent, precise quote."
    },
    {
        question: "Does Preet Tech serve businesses outside Haldwani?",
        answer: "Yes. While Preet Tech is headquartered in Haldwani, Uttarakhand, we work with clients across India and globally. We offer complete remote collaboration for discovery, design, development, testing, deployment, and ongoing support. Build Local. Scale Global."
    },
    {
        question: "What makes Preet Tech OPC Private Limited a top IT company in Haldwani?",
        answer: "Preet Tech combines deep local knowledge of the Haldwani and Uttarakhand market with modern technology standards. We specialize in custom website development, mobile app development, software development, and digital marketing services that deliver real business growth."
    },
    {
        question: "Do you offer custom software and e-commerce development?",
        answer: "Yes. We build robust, scalable platforms tailored to your specific business needs. From high-converting e-commerce stores to enterprise business software and SaaS applications, we engineer digital products built for growth and long-term reliability."
    },
    {
        question: "What is your typical project turnaround time?",
        answer: "Our Eco Website packages can go live in as little as 7–14 days. Standard custom web applications take 4–8 weeks. Large-scale enterprise software, SaaS platforms, and mobile applications typically range from 3–6 months, depending on scope and complexity. We provide detailed timelines at the start of every project."
    },
    {
        question: "How do I start a project with Preet Tech?",
        answer: "Starting is simple. You can book a free consultation through our Contact page, or send us your project brief via email at info@preettech.com. Our team will review your requirements and schedule a discovery session within 24 hours to discuss your goals, timeline, and budget."
    },
    {
        question: "Do you offer post-launch support and maintenance?",
        answer: "Yes. All our projects include a post-launch support period, and we offer ongoing maintenance retainers for bug fixes, security updates, performance optimization, and feature additions. We are a long-term technology partner, not a one-time vendor."
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
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
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
