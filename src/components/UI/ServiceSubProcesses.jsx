import React from 'react';
import { motion } from 'framer-motion';
import './ServiceSubProcesses.css';

const ServiceSubProcesses = ({ subProcesses }) => {
    if (!subProcesses || subProcesses.length === 0) return null;

    return (
        <div className="service-sub-processes">
            <h3 className="sub-process-title">Comprehensive Service Breakdown</h3>
            <div className="sub-process-grid">
                {subProcesses.map((process, index) => {
                    const Icon = process.icon;
                    return (
                        <motion.div
                            key={index}
                            className="sub-process-card glass-panel"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="process-icon-wrapper">
                                <Icon size={24} />
                            </div>
                            <div className="process-content">
                                <h4>{process.title}</h4>
                                <p>{process.desc}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default ServiceSubProcesses;
