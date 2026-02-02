import React from 'react';
import HeroSection from '../components/UI/HeroSection';
import SectionHeader from '../components/UI/SectionHeader';
import { Users } from 'lucide-react';

const About = () => {
    return (
        <div className="page-about">
            <HeroSection
                title="About Us"
                subtitle="Building the future of healthcare administration."
                ctaText="Join Our Team"
                ctaLink="/team"
            />

            <section className="section-padding container">
                <SectionHeader
                    title="Our Mission"
                    subtitle="To empower healthcare providers with intelligent automation and expert support."
                    icon={Users}
                />

                <div className="glass-panel" style={{ padding: '2rem', marginTop: '2rem' }}>
                    <p>CAPS is dedicated to streamlining operations...</p>
                    {/* Placeholder content */}
                </div>
            </section>
        </div>
    );
};

export default About;
