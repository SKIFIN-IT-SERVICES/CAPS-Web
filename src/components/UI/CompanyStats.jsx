import React from 'react';
import { motion } from 'framer-motion';
import './CompanyStats.css';

const CompanyStats = ({ stats }) => {
    return (
        <section className="company-stats-section">
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="company-stat-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="stat-number">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CompanyStats;
