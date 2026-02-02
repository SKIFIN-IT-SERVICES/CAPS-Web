import React from 'react';
import HeroSection from '../components/UI/HeroSection';
import SectionHeader from '../components/UI/SectionHeader';
import { Building2 } from 'lucide-react';

const Industries = () => {
    return (
        <div className="page-industries">
            <HeroSection
                title="Industries We Serve"
                subtitle="Tailored solutions for diverse sectors."
                ctaText="See Services"
                ctaLink="/services"
            />

            <section className="section-padding container">
                <SectionHeader
                    title="Sectors"
                    subtitle="From Healthcare to Insurance, we cover it all."
                    icon={Building2}
                />

                <div className="glass-panel" style={{ padding: '2rem', marginTop: '2rem' }}>
                    <p>Discover how we help different industries...</p>
                    {/* Placeholder content */}
                </div>
            </section>
        </div>
    );
};

export default Industries;
