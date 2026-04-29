
import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Layers, TrendingUp, ShieldCheck, Search, Banknote } from 'lucide-react';

const FEATURES = [
    {
        icon: Banknote,
        title: "Strategic Risk Sharing",
        description: "Zero upfront friction. Our proprietary revenue-share model ensures we only succeed when you do—creating a perfect alignment of interests."
    },
    {
        icon: Layers,
        title: "Institutional Engineering",
        description: "Beyond simple code. We architect enterprise-grade digital infrastructures designed for infinite scale and long-term security."
    },
    {
        icon: TrendingUp,
        title: "Growth Acceleration",
        description: "We don't just drive metrics; we drive market share. Our data-led engineering team builds systems that dominate customer acquisition."
    },
    {
        icon: Handshake,
        title: "Full Strategic Alignment",
        description: "We operate as your high-performance technical board. We provide the strategic clarity and engineering muscle local leaders demand."
    },
    {
        icon: Search,
        title: "Radical Transparency",
        description: "Complete visibility into your growth metrics. Honest reporting, direct communication, and no-nonsense business logic."
    },
    {
        icon: ShieldCheck,
        title: "ROI-First Methodology",
        description: "Vanity metrics have no place here. Every engineering decision is evaluated against its impact on your bottom line and LTV."
    }
];

const WhyChooseUs: React.FC = () => {
    return (
        <section id="about" className="pt-10 md:pt-16 pb-20 md:pb-32 relative bg-surface dark:bg-[#050914] transition-colors duration-300 overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-medium/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">

                    <h2
                        className="text-3xl md:text-6xl font-black text-foreground mb-6 tracking-tight leading-tight"
                    >
                        Why Leaders Choose Our <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan">SEO & IT Agency.</span>
                    </h2>

                    <p
                        className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto"
                    >
                        As a top <span className="font-bold text-foreground dark:text-white">performance marketing agency</span>, we bridge the gap between ambitious vision and technical reality with robust <span className="font-bold text-foreground dark:text-white">SEO optimization services</span>, secure <span className="font-bold text-foreground dark:text-white">cloud migration services</span>, and distinct <span className="font-bold text-foreground dark:text-white">brand identity design</span>. Partner with a team built for digital dominance.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {FEATURES.map((feature, i) => (
                        <motion.div
                            key={i}
                            className="group p-6 md:p-8 rounded-3xl bg-white dark:bg-[#0b0f1a] border border-slate-200 dark:border-white/5 hover:border-brand-medium/30 transition-all duration-300 hover:shadow-xl dark:hover:shadow-none hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-medium/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-brand-medium dark:text-brand-sky" />
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-brand-medium transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
