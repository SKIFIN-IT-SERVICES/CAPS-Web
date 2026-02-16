import React from 'react';
import HeroSection from '../components/UI/HeroSection';
import SectionHeader from '../components/UI/SectionHeader';
import { Users, Target, History } from 'lucide-react';
import { motion } from 'framer-motion';
import CompanyStats from '../components/UI/CompanyStats';
import LeadershipTeam from '../components/UI/LeadershipTeam';
import Methodology from '../components/UI/Methodology';
import Certifications from '../components/UI/Certifications';
import GlobalPresence from '../components/UI/GlobalPresence';
import Partners from '../components/UI/Partners';
import CTASection from '../components/UI/CTASection';
import { aboutData } from '../data/aboutData';
import './Pages.css';

const About = () => {
    return (
        <div className="page-about">
            <HeroSection
                title="About CAPS"
                subtitle="Building the future of healthcare administration through intelligence and empathy."
                ctaText="Join Our Team"
                ctaLink="/contact"
                image="/images/assets/consulting.jpg"
            />

            <div className="container section-padding">

                {/* Mission & Story */}
                <section className="about-story-section">
                    <div className="story-grid">
                        <motion.div
                            className="story-content"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <SectionHeader
                                title="Our Mission"
                                subtitle="To empower healthcare providers with intelligent automation and expert support."
                                align="left"
                                icon={Target}
                            />
                            <p className="story-text">
                                Founded in 2005, CAPS (Claims & Administrative Processing Solutions) began with a singular vision: to eliminate the friction in healthcare payments. What started as a small claims processing unit has evolved into a global leader in healthcare BPO and KPO services.
                            </p>
                            <p className="story-text">
                                We believe that technology should serve people, not replace them. That's why we've built a "Human-in-the-Loop" AI model that combines the speed of predictive algorithms with the judgment of experienced medical professionals.
                            </p>
                            <p className="story-text">
                                Today, we serve over 500+ clients ranging from regional TPAs to national insurance carriers, processing millions of transactions annually with 99.9% accuracy.
                            </p>
                        </motion.div>
                        <motion.div
                            className="story-image-wrapper glass-panel"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Placeholder for a company culture image */}
                            <div className="culture-image-placeholder">
                                <History size={64} color="var(--primary-color)" />
                                <span>Our Journey</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* specific styles for story section (inline for now or add to Pages.css) */}
                <style>{`
                    .story-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 4rem;
                        align-items: center;
                        margin-bottom: 4rem;
                    }
                    .story-text {
                        font-size: 1.1rem;
                        line-height: 1.8;
                        color: var(--text-muted);
                        margin-bottom: 1.5rem;
                    }
                    .culture-image-placeholder {
                        height: 400px;
                        background: linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(46, 204, 113, 0.1));
                        border-radius: 16px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 1rem;
                        color: var(--primary-color);
                        font-weight: 600;
                    }
                    @media (max-width: 992px) {
                        .story-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                `}</style>

                {/* Stats */}
                <CompanyStats stats={aboutData.stats} />

                {/* Methodology */}
                <Methodology steps={aboutData.methodology} />

                {/* Leadership */}
                <LeadershipTeam leaders={aboutData.leadership} />

                {/* Certifications */}
                <Certifications certs={aboutData.certifications} />

                {/* Global Presence */}
                <GlobalPresence locations={aboutData.locations} />

                {/* Partners */}
                <Partners partners={aboutData.partners} />

            </div>

            <CTASection />
        </div>
    );
};

export default About;
