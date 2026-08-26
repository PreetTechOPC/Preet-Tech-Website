
import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Layers, TrendingUp, ShieldCheck, Search, Banknote } from 'lucide-react';

const FEATURES = [
    {
        icon: Banknote,
        title: "Business-First Approach",
        description: "We align every line of code and marketing campaign with your revenue goals. We aren't just developers; we are business growth consultants."
    },
    {
        icon: Layers,
        title: "Custom Solutions",
        description: "No generic templates. We build technology tailored to your specific operational needs, ensuring a perfect fit for your unique workflows."
    },
    {
        icon: Search,
        title: "Transparent Communication",
        description: "Clear milestones, direct developer access, and honest project management. Full transparency into every campaign and project."
    },
    {
        icon: TrendingUp,
        title: "Scalable Technology",
        description: "Systems architected to grow with your business over the next decade, preventing you from outgrowing your digital infrastructure."
    },
    {
        icon: ShieldCheck,
        title: "End-to-End Security",
        description: "Robust protection against vulnerabilities and architecture built to handle traffic spikes, ensuring your digital assets remain secure."
    },
    {
        icon: Handshake,
        title: "Long-term Partnership",
        description: "We embed with your team as a high-performance technical partner, providing ongoing support, security updates, and performance marketing."
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
                        Why Businesses Choose Preet Tech as Their <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan">Technology Partner.</span>
                    </h2>

                    <p
                        className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto"
                    >
                        We bridge the gap between ambitious vision and technical reality with robust <span className="font-bold text-foreground dark:text-white">custom software development</span>, secure <span className="font-bold text-foreground dark:text-white">scalable architecture</span>, and data-driven <span className="font-bold text-foreground dark:text-white">digital growth systems</span>. Partner with a team built for your success.
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
