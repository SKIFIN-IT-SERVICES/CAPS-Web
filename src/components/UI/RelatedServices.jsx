import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import './RelatedServices.css';

const RelatedServices = ({ relatedIds }) => {
    if (!relatedIds || relatedIds.length === 0) return null;

    const relatedItems = relatedIds.map(id => servicesData.find(s => s.id === id)).filter(Boolean);

    if (relatedItems.length === 0) return null;

    return (
        <div className="related-services-section">
            <h3>Related Services</h3>
            <div className="related-grid">
                {relatedItems.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={index}
                            className="related-card glass-panel"
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Link to={`/services/${service.id}`} className="related-link">
                                <div className="related-icon">
                                    <Icon size={24} />
                                </div>
                                <div className="related-info">
                                    <h4>{service.title}</h4>
                                    <span className="read-more">Learn More <ArrowRight size={14} /></span>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default RelatedServices;
