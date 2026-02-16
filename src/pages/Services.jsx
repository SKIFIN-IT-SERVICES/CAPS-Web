import React from 'react';
import HeroSection from '../components/UI/HeroSection';
import ServiceCard from '../components/UI/ServiceCard';
import './Pages.css';
import logo from '../assets/logo.png';
import { Layers } from 'lucide-react';
import SectionHeader from '../components/UI/SectionHeader';
import CTASection from '../components/UI/CTASection';
import { servicesData } from '../data/servicesData';

const Services = () => {
    const [activeCategory, setActiveCategory] = React.useState('all');

    const categories = [
        { id: 'all', label: 'All Services' },
        { id: 'healthcare-operations', label: 'Healthcare Ops' },
        { id: 'insurance-solutions', label: 'Insurance' },
        { id: 'technology-services', label: 'Technology' },
        { id: 'consulting-advisory', label: 'Consulting' }
    ];

    const filteredServices = activeCategory === 'all'
        ? servicesData
        : servicesData.filter(svc => svc.category === activeCategory);

    return (
        <div className="page-services">
            <HeroSection
                logo={logo}
                PageIcon={<Layers size={64} />}
                title="Our Services"
                subtitle="Comprehensive solutions for every aspect of operational management."
                ctaText="Get a Quote"
                ctaLink="/contact"
                image="/images/assets/services-hero.jpg"
            />

            <div className="container section-padding">
                <SectionHeader
                    title="Expertise That Drives Results"
                    subtitle="Explore our specialized services designed to optimize your healthcare administration and insurance workflows."
                />

                <div className="services-filter-tabs">
                    {categories.map(cat => {
                        const count = cat.id === 'all'
                            ? servicesData.length
                            : servicesData.filter(s => s.category === cat.id).length;

                        return (
                            <button
                                key={cat.id}
                                className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat.id)}
                            >
                                {cat.label}
                                <span className="filter-count">{count}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="services-list-layout">
                    {filteredServices.map((svc, index) => (
                        <section key={svc.id} className="service-detail-section">
                            <div className="service-detail-container">
                                <div className="service-detail-content">
                                    <h2 className="service-detail-title">{svc.title}</h2>
                                    <p className="service-detail-desc">{svc.shortDesc}</p>
                                    <p className="service-detail-desc">{svc.fullDesc[0].substring(0, 150)}...</p>

                                    <a href={`/services/${svc.id}`} className="cta-button primary-btn" style={{ marginTop: '2rem', alignSelf: 'flex-start', width: 'fit-content' }}>
                                        Read More
                                    </a>
                                </div>
                                <div className="service-detail-image">
                                    <div className="glass-panel image-wrapper">
                                        <img src={svc.image} alt={svc.title} className="service-img" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>

            <CTASection />
        </div>
    );
};

export default Services;
