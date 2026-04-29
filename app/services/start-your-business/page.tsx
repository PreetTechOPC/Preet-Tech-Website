"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
            <FinalConsultation />

            <Footer />
        </main>
    );
};

export default StartYourBusiness;
