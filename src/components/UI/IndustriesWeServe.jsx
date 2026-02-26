import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { industries } from '../../data/homeData';
import './IndustriesWeServe.css';

const IndustriesWeServe = () => {
    return (
        <section className="industries-section section-padding bg-light">
            <div className="container">
                <div className="industries-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        The solutions we serve.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Tailored solutions for the unique challenges of the healthcare and insurance ecosystems.
                    </motion.p>
                </div>

                <div className="industries-grid">
                    {industries.map((ind, index) => {
                        const Icon = ind.icon;
                        return (
                            <motion.div
                                key={index}
                                className="industry-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="industry-icon-wrapper">
                                    <Icon size={32} />
                                </div>
                                <h3>{ind.title}</h3>
                                <p>{ind.desc}</p>
                                <Link to={ind.link} className="industry-link">
                                    Learn More <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default IndustriesWeServe;
