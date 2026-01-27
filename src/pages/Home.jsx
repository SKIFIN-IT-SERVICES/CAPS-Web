import React from 'react';
import HeroSection from '../components/UI/HeroSection';
import ServiceCard from '../components/UI/ServiceCard';
import aiLogo from '../assets/images/caps_ai_logo_1769512786566.png';
import { Activity, ShieldCheck, Users, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Pages.css';
import logo from '../assets/logo.png';

const Home = () => {
    const services = [
        {
            title: "Health Claims Management",
            description: "Accurate submission, processing, and payment of healthcare claims with verification and adjudication.",
            icon: <Activity size={32} />,
            link: "/services/claims"
        },
        {
            title: "Dental Claims Processing",
            description: "Specialized handling of dental procedures, benefit verification, and pre-determination.",
            icon: <ClipboardList size={32} />,
            link: "/services/dental"
        },
        {
            title: "Provider Management",
            description: "Network maintenance, credentialing, and contracting for hospitals and clinics.",
            icon: <Users size={32} />,
            link: "/services/provider"
        },
        {
            title: "P&C Insurance",
            description: "Coverage for physical assets and liability protection against accidents and damages.",
            icon: <ShieldCheck size={32} />,
            link: "/services/pnc"
        }
    ];

    return (
        <div className="page-home">
            <HeroSection
                logo={logo}
                animateLogo={true}
                subtitle="Intelligent Arrangements for Your Workflow and Workforce"
                ctaText="Explore Services"
                ctaLink="/services"
                image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070"
            />

            <section className="section-padding container">
                <div className="section-header">
                    <h2>Our Core Expertise</h2>
                    <p>Delivering precision and efficiency in healthcare and insurance administration.</p>
                </div>

                <div className="services-grid">
                    {services.map((svc, index) => (
                        <ServiceCard key={index} {...svc} index={index} />
                    ))}
                </div>
            </section>

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
