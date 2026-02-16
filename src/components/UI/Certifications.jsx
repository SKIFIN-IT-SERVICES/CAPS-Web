import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import './Certifications.css';

const Certifications = ({ certs }) => {
    return (
        <section className="certifications-section">
            <div className="certs-header">
                <h3>Compliance & Certifications</h3>
                <p>We adhere to the strictest global standards for data security and privacy.</p>
            </div>
            <div className="certs-grid">
                {certs.map((cert, index) => {
                    const Icon = cert.icon;
                    return (
                        <motion.div
                            key={index}
                            className="cert-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className="cert-icon-box">
                                <Icon size={32} />
                            </div>
                            <div className="cert-info">
                                <h4>{cert.title}</h4>
                                <p>{cert.desc}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Certifications;
