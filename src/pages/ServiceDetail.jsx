import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import HeroSection from '../components/UI/HeroSection';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/UI/SectionHeader';
import './Pages.css';
import '../components/UI/ServiceCard.css'; // Re-use animations

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData.find(s => s.id === id);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const Icon = service.icon;

    return (
        <div className="page-service-detail">
            {/* Animated Hero for this specific service */}
            <HeroSection
                logo={logo}
                // render a large specific icon for this service
                PageIcon={<Icon size={80} strokeWidth={1} />}
                title={service.title}
                subtitle={service.subtitle}
                ctaText="Discuss Your Needs"
                ctaLink="/contact"
                image={service.image} // Use the specific service image as hero background
            />

            <div className="container section-padding">
                <Link to="/services" className="back-link">
                    <ArrowLeft size={20} /> Back to Services
                </Link>

                {/* Content Layout */}
                <div className="detail-grid">
                    {/* Left: Rich Text Content */}
                    <div className="detail-content">
                        <SectionHeader
                            title="Overview"
                            align="left"
                        />

                        {service.fullDesc.map((paragraph, idx) => (
                            <motion.p
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="detail-text"
                            >
                                {paragraph}
                            </motion.p>
                        ))}


                    </div>

                    {/* Right: Animated Feature Cards */}
                    <div className="detail-features">
                        <h3 className="features-title">Key Capabilities</h3>
                        <div className="features-list">
                            {service.features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    className="feature-card glass-panel"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.15 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="feature-icon">
                                        <CheckCircle size={24} />
                                    </div>
                                    <div className="feature-info">
                                        <h4>{feature.title}</h4>
                                        <p>{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="detail-cta-box centralized-cta"
                >
                    <h3>Ready to optimize your {service.title}?</h3>
                    <p>Contact our experts today for a personalized consultation.</p>
                    <Link to="/contact">
                        <button className="cta-button primary-btn">Contact Our Team</button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default ServiceDetail;
