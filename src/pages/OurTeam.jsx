import React from 'react';
import HeroSection from '../components/UI/HeroSection';
import SectionHeader from '../components/UI/SectionHeader';
import { UserCheck } from 'lucide-react';

const OurTeam = () => {
    return (
        <div className="page-team">
            <HeroSection
                title="Our Team"
                subtitle="Meet the experts behind our success."
                ctaText="Contact Us"
                ctaLink="/contact"
            />

            <section className="section-padding container">
                <SectionHeader
                    title="Leadership"
                    subtitle="Driven by passion and expertise."
                    icon={UserCheck}
                />

                <div className="glass-panel" style={{ padding: '2rem', marginTop: '2rem' }}>
                    <p>Meet our dedicated leadership team...</p>
                    {/* Placeholder content */}
                </div>
            </section>
        </div>
    );
};

export default OurTeam;
