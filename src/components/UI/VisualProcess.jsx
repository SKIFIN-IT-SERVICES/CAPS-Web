import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './VisualProcess.css';

const VisualProcess = ({ steps, images }) => {
    if (!steps || !images) return null;

    return (
        <div className="visual-process-section">
            <div className="process-header-wrapper">
                <h3 className="section-title-premium">How It Works</h3>
                <div className="section-line-gradient"></div>
            </div>
            <div className="visual-steps-container">
                {steps.map((step, index) => {
                    // Alternating layout: even index = text left, image right
                    const isEven = index % 2 === 0;
                    const image = images[index] || images[0]; // Fallback if not enough images

                    return (
                        <motion.div
                            key={index}
                            className={`visual-step-row ${isEven ? 'row-normal' : 'row-reverse'}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className="step-content">
                                <span className="step-number-watermark">0{index + 1}</span>
                                <div className="step-header">
                                    <div className="step-badge">Step {index + 1}</div>
                                    <h4>{step.title}</h4>
                                </div>
                                <p>{step.desc}</p>
                                <div className="step-indicator">
                                    <div className="step-dot"></div>
                                    <div className="step-line"></div>
                                </div>
                            </div>

                            <div className="step-image-wrapper glass-panel">
                                {image ? (
                                    <img
                                        src={image}
                                        alt={step.title}
                                        className="step-image-real"
                                    />
                                ) : (
                                    <div className="step-image-placeholder">
                                        <span className="placeholder-number">0{index + 1}</span>
                                        <span className="placeholder-text">Visualizing {step.title}</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default VisualProcess;
