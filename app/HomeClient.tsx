"use client";

import dynamic from 'next/dynamic';
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import EntitySection from '../components/EntitySection';

// SSR-ENABLED: pure React components — crawlers read these (SEO critical)
import WhyChooseUs from '../components/WhyChooseUs';
import StatsCounter from '../components/StatsCounter';
import SimpleSteps from '../components/SimpleSteps';
import ReadyToPartner from '../components/ReadyToPartner';
import Testimonials from '../components/Testimonials';
import Insights from '../components/Insights';
import HomeFAQ from '../components/HomeFAQ';

// Skeleton placeholder for below-fold dynamic sections while they hydrate
const SectionSkeleton = () => (
    <div className="w-full py-16 md:py-24 bg-background animate-pulse">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
            <div className="h-4 w-32 bg-white/5 rounded-full" />
            <div className="h-10 w-2/3 bg-white/5 rounded-2xl" />
            <div className="h-4 w-full max-w-xl bg-white/5 rounded-full" />
        </div>
    </div>
);

// SSR-disabled ONLY for components that require browser-only APIs (drag carousel, Three.js)
const Services = dynamic(() => import('../components/Services'), {
    ssr: false,
    loading: () => <SectionSkeleton />,
});


export default function HomeClient({ 
    initialTestimonials = [], 
    initialInsights = [] 
}: { 
    initialTestimonials?: any[];
    initialInsights?: any[];
}) {
    return (
        <main className="w-full max-w-full selection:bg-brand-medium/30 overflow-x-clip bg-background text-foreground transition-colors duration-300">
            <Navbar />

            <Hero />

            <EntitySection />

            <Services />

            <WhyChooseUs />

            <StatsCounter />

            <Insights initialInsights={initialInsights} />

            <SimpleSteps />

            <Testimonials initialReviews={initialTestimonials} />



            <HomeFAQ />

            <ReadyToPartner />

            <Footer />
        </main>
    );
}
