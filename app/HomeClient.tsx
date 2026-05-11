"use client";

import dynamic from 'next/dynamic';
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

// Skeleton placeholder for below-fold sections while they hydrate
const SectionSkeleton = () => (
    <div className="w-full py-16 md:py-24 bg-background animate-pulse">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
            <div className="h-4 w-32 bg-white/5 rounded-full" />
            <div className="h-10 w-2/3 bg-white/5 rounded-2xl" />
            <div className="h-4 w-full max-w-xl bg-white/5 rounded-full" />
        </div>
    </div>
);

// SSR-disabled only for components that use browser-only APIs (drag, Three.js, scroll position)
const Services = dynamic(() => import('../components/Services'), {
    ssr: false,
    loading: () => <SectionSkeleton />,
});
const WhyChooseUs = dynamic(() => import('../components/WhyChooseUs'), {
    ssr: false,
    loading: () => <SectionSkeleton />,
});
const StatsCounter = dynamic(() => import('../components/StatsCounter'), {
    ssr: false,
    loading: () => <SectionSkeleton />,
});
const SimpleSteps = dynamic(() => import('../components/SimpleSteps'), {
    ssr: false,
    loading: () => <SectionSkeleton />,
});
const ReadyToPartner = dynamic(() => import('../components/ReadyToPartner'), {
    ssr: false,
    loading: () => <SectionSkeleton />,
});
const Testimonials = dynamic(() => import('../components/Testimonials'), {
    ssr: false,
    loading: () => <SectionSkeleton />,
});
const ProductShowcase = dynamic(() => import('../components/ProductShowcase'), {
    ssr: false,
    loading: () => <SectionSkeleton />,
});
const Insights = dynamic(() => import('../components/Insights'), {
    ssr: false,
    loading: () => <SectionSkeleton />,
});
const HomeFAQ = dynamic(() => import('../components/HomeFAQ'), {
    ssr: false,
    loading: () => <SectionSkeleton />,
});

export default function HomeClient() {
    return (
        <main className="w-full max-w-full selection:bg-brand-medium/30 overflow-x-clip bg-background text-foreground transition-colors duration-300">
            <Navbar />

            <Hero />

            <Services />

            <WhyChooseUs />

            <StatsCounter />

            <Insights />

            <SimpleSteps />

            <Testimonials />

            <ProductShowcase />

            <HomeFAQ />

            <ReadyToPartner />

            <Footer />
        </main>
    );
}
