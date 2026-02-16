import React from 'react';
import { motion } from 'framer-motion';
import './Methodology.css';

const Methodology = ({ steps }) => {
    return (
        <section className="methodology-section">
            <div className="methodology-header">
                <h3>Our Methodology</h3>
                <p>A proven approach to healthcare transformation.</p>
            </div>
            <div className="methodology-steps">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <motion.div
                            key={index}
                            className="methodology-card glass-panel"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="step-number">{step.step}</div>
                            <div className="step-icon-wrapper">
                                <Icon size={28} />
                            </div>
                            <h4>{step.title}</h4>
                            <p>{step.desc}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Methodology;
