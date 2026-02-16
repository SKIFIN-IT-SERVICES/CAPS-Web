import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import HeroSection from '../components/UI/HeroSection';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Info, ExternalLink, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/UI/SectionHeader';
import ServiceSubProcesses from '../components/UI/ServiceSubProcesses';
import ProcessWorkflow from '../components/UI/ProcessWorkflow';
import ServiceStats from '../components/UI/ServiceStats';
import CaseStudyBlock from '../components/UI/CaseStudyBlock';
import FAQAccordion from '../components/UI/FAQAccordion';
import RelatedServices from '../components/UI/RelatedServices';
import CTASection from '../components/UI/CTASection';
import ComplianceBadges from '../components/UI/ComplianceBadges';
import ServiceCharts from '../components/UI/ServiceCharts';
import TechStack from '../components/UI/TechStack';
import VisualProcess from '../components/UI/VisualProcess';
import './Pages.css';
import '../components/UI/ServiceCard.css';

const ServiceDetail = () => {

    const { id } = useParams();
    const service = servicesData.find(s => s.id === id);

    if (!service) {
        return <Navigate to="/services" replace />;
    }


    const Icon = service.icon;


    return (
        <div className="page-service-detail">
            {/* Animated Hero */}
            <HeroSection
                logo={logo}
                PageIcon={<Icon size={80} strokeWidth={1} />}
                title={service.title}
                subtitle={service.subtitle}
                ctaText="Discuss Your Needs"
                ctaLink="/contact"
                image={service.image}
            />

            <div className="container section-padding">
                <Link to="/services" className="back-link">
                    <ArrowLeft size={20} /> Back to Services
                </Link>

                {/* Industry Context Banner */}
                {service.industryContext && (
                    <motion.div
                        className="industry-context glass-panel highlight-context"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Info size={28} className="context-icon" />
                        <p>{service.industryContext}</p>
                    </motion.div>
                )}

                {/* Service Stats */}
                <ServiceStats stats={service.stats} />

                {/* Performance Charts */}
                {service.charts && (
                    <div className="section-spacer">
                        <SectionHeader title="Performance Impact" subtitle="Real results driven by our technology" />
                        <ServiceCharts data={service.charts} />
                    </div>
                )}

                {/* Key Capabilities - MOVED to Full Width Section */}
                <div className="section-spacer">
                    <SectionHeader title="Key Capabilities" subtitle="What makes our solution stand out" />
                    <div className="key-capabilities-grid">
                        {service.features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                className="capability-card glass-panel"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <CheckCircle size={32} className="capability-icon" />
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Main Content - No Sidebar */}
                <div className="detail-full-width">
                    <SectionHeader title="Service Overview" align="center" />

                    {/* Compliance Badges */}
                    <div className="compliance-wrapper-center">
                        <ComplianceBadges badges={service.compliance} />
                    </div>

                    <div className="overview-text-center">
                        {service.fullDesc.map((paragraph, idx) => (
                            <motion.p
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="detail-text"
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>

                    {/* Sub-Processes Grid */}
                    <div className="section-spacer">
                        <h3 className="subsection-title-center">Core Modules</h3>
                        <ServiceSubProcesses subProcesses={service.subProcesses} />
                    </div>

                    {/* Process Visuals - Restored & Fixed */}
                    <div className="section-spacer">
                        {service.visualSteps ? (
                            <VisualProcess steps={service.visualSteps} images={service.processImages} />
                        ) : (
                            <ProcessWorkflow steps={service.processSteps} />
                        )}
                    </div>

                    {/* Tech Stack Grid */}
                    {service.techStack && (
                        <div className="section-spacer">
                            <TechStack stack={service.techStack} />
                        </div>
                    )}

                    {/* Case Study */}
                    <div className="case-study-wrapper section-spacer">
                        <CaseStudyBlock caseStudy={service.caseStudy} />
                    </div>

                    {service.faqs && service.faqs.length > 0 && (
                        <div className="section-spacer">
                            <SectionHeader title="Frequently Asked Questions" />
                            <FAQAccordion faqs={service.faqs} />
                        </div>
                    )}
                </div>
            </div>

            {/* Related Services */}
            <div className="container section-padding">
                <RelatedServices relatedIds={service.relatedServices} />
            </div>

            {/* Full Width CTA Section - Always Last */}
            <CTASection />
        </div>
    );
};

export default ServiceDetail;
