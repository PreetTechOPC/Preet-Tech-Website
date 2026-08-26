"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaseStudies, { CaseStudy } from '@/components/CaseStudies';

// Importing modular components for the "Start Your Business" service page
import HeroLaunch from '@/components/services/start-your-business/HeroLaunch';
import WhoIsThisFor from '@/components/services/start-your-business/WhoIsThisFor';
import Challenges from '@/components/services/start-your-business/Challenges';
import WhyChoosePreetTech from '@/components/services/start-your-business/WhyChoosePreetTech';

import RegistrationServices from '@/components/services/start-your-business/RegistrationServices';
import CreativeServices from '@/components/services/start-your-business/CreativeServices';
import StrategyAndMarketing from '@/components/services/start-your-business/StrategyAndMarketing';
import TrustAndProcess from '@/components/services/start-your-business/TrustAndProcess';
import FinalConsultation from '@/components/services/start-your-business/FinalConsultation';

const StartYourBusiness = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDark(true);
        } else if (storedTheme === 'light') {
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        if (newTheme) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    };

    const STARTUP_CASE_STUDIES: CaseStudy[] = [
        {
            id: 'startup-1',
            title: 'Fintech Launch: Zero to One',
            client: 'NeoBank India',
            category: 'Startup Launch',
            description: 'Handled everything from legal registration and GST to brand identity and the initial MVP launch in 45 days.',
            stats: [
                { label: 'Time to Market', value: '45 Days' },
                { label: 'Waitlist', value: '10k+' },
                { label: 'Funding', value: 'Seed' }
            ],
            tags: ['Company Registration', 'Branding', 'MVP']
        },
        {
            id: 'startup-2',
            title: 'D2C Brand: Market Entry',
            client: 'PureOrganics',
            category: 'E-commerce Launch',
            description: 'Strategic market entry for an organic skincare brand, including legal compliance, packaging design, and web setup.',
            stats: [
                { label: 'Launch ROAS', value: '3.2x' },
                { label: 'SKUs', value: '25+' },
                { label: 'Compliance', value: '100%' }
            ],
            tags: ['Trademark', 'Shopify', 'Creative']
        }
    ];

    return (
        <main className="bg-white dark:bg-[#030712] transition-colors duration-300 selection:bg-brand-cyan/30">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />

            <HeroLaunch />
            <WhoIsThisFor />
            <Challenges />
            <WhyChoosePreetTech />


            <RegistrationServices />
            <CreativeServices />
            <StrategyAndMarketing />

            <TrustAndProcess />
            
            {/* Success Stories Section */}
            <CaseStudies 
                studies={STARTUP_CASE_STUDIES} 
                subtitle="Startup Success" 
                title="From Idea to Enterprise."
                themeColor="#3994fa"
            />

            <FinalConsultation />

            <Footer />
        </main>
    );
};

export default StartYourBusiness;
