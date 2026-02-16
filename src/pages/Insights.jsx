import React from 'react';
import HeroSection from '../components/UI/HeroSection';
import { BookOpen } from 'lucide-react';
import logo from '../assets/logo.png';
import InsightsGrid from '../components/UI/InsightsGrid';
import CTASection from '../components/UI/CTASection';
import './Pages.css';

const Insights = () => {
    return (
        <div className="page-insights">
            <HeroSection
                logo={logo}
                PageIcon={<BookOpen size={64} />}
                title="Insights"
                subtitle="Thought leadership and industry trends."
                ctaText="Subscribe"
                ctaLink="/contact"
                image="/images/assets/hero-bg-2.jpg"
            />

            <div className="container section-padding">
                <InsightsGrid />
            </div>

            <CTASection />
        </div>
    );
};

export default Insights;
