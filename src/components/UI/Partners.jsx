import React from 'react';
import { motion } from 'framer-motion';
import './Partners.css';

const Partners = ({ partners }) => {
    return (
        <section className="partners-section">
            <div className="partners-header">
                <h3>Technology Ecosystem</h3>
                <p>Powered by world-class infrastructure partners.</p>
            </div>
            <div className="partners-grid">
                {partners.map((partner, index) => (
                    <motion.div
                        key={index}
                        className="partner-card"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        {/* In real app, use <img src={partnerLogo} /> */}
                        <span className="partner-name">{partner}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Partners;
