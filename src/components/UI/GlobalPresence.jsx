import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import './GlobalPresence.css';

const GlobalPresence = ({ locations }) => {
    return (
        <section className="global-presence-section">
            <div className="global-header">
                <h3>Global Delivery Centers</h3>
                <p>24/7/365 Operations across multiple time zones.</p>
            </div>
            <div className="locations-grid">
                {locations.map((loc, index) => (
                    <motion.div
                        key={index}
                        className="location-card glass-panel"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="map-icon-box">
                            <MapPin size={24} />
                        </div>
                        <div className="location-info">
                            <h4>{loc.city}</h4>
                            <span className="location-type">{loc.type}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default GlobalPresence;
