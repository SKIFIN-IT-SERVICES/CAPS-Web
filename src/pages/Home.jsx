import React from 'react';
import HeroSection from '../components/UI/HeroSection';
import ServiceCard from '../components/UI/ServiceCard';
import aiLogo from '../assets/images/caps_ai_logo_1769512786566.png';
import heroBg from '../assets/images/hero_bg_workflow.png';
import { Link } from 'react-router-dom';
import './Pages.css';
import logo from '../assets/logo.png';
import { servicesData } from '../data/servicesData';
import SectionHeader from '../components/UI/SectionHeader';
import TrustedBy from '../components/UI/TrustedBy';
import ImpactStats from '../components/UI/ImpactStats';
import WhyChooseUs from '../components/UI/WhyChooseUs';
import HowItWorks from '../components/UI/HowItWorks';
import Testimonials from '../components/UI/Testimonials';

const Home = () => {
    return (
        <div className="page-home">
            <HeroSection
                logo={logo}
                animateLogo={false}
                subtitle="Intelligent Arrangements for Your Workflow and Workforce"
                ctaText="Explore Services"
                ctaLink="/services"
                image={heroBg}
            />

            <TrustedBy />

            <section className="section-padding container">
                <SectionHeader
                    title="Our Core Expertise"
                    subtitle="Delivering precision and efficiency in healthcare and insurance administration."
                />

                <div className="services-grid">
                    {servicesData.map((svc, index) => {
                        const Icon = svc.icon;
                        return (
                            <ServiceCard
                                key={index}
                                title={svc.title}
                                description={svc.shortDesc}
                                icon={Icon ? <Icon size={32} /> : null}
                                link={`/services/${svc.id}`}
                                index={index}
                            />
                        );
                    })}
                </div>
            </section>

            <WhyChooseUs />

            <ImpactStats />

            <HowItWorks />

            <Testimonials />

            <section className="section-padding bg-light">
                <div className="container">
                    <div className="glass-panel highlight-box">
                        <h2>Ready to Optimize Your Operations?</h2>
                        <p>Partner with CAPS for streamlined claims and provider management.</p>
                        <Link to="/contact">
                            <button className="cta-button primary-btn">Contact Us Today</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
