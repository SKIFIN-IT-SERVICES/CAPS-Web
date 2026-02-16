import React from 'react';
import { motion } from 'framer-motion';
import './ServiceStats.css';

const ServiceStats = ({ stats }) => {
    if (!stats || stats.length === 0) return null;

    return (
        <div className="service-stats-container">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    className="stat-card glass-panel"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                </motion.div>
            ))}
        </div>
    );
};

export default ServiceStats;
