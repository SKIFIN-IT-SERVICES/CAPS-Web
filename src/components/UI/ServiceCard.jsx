import React from 'react';
import { motion } from 'framer-motion';
import './ServiceCard.css';

const ServiceCard = ({ title, description, icon, link, index = 0 }) => {
    return (
        <motion.div
            className="service-card glass-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -12 }} // Let CSS handle shadow/border, Framer handle motion if preferred, but CSS is doing translateY too. Let's stick to Framer for entrance, CSS for hover to correspond with CSS file changes? 
        // Actually, if we use CSS hover transform, Framer might conflict. Let's remove Framer whileHover y and let CSS handle it for consistency with class.
        >
            <div className="card-icon-wrapper">
                {icon}
            </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-desc">{description}</p>
            {link && <a href={link} className="card-link">Learn More &rarr;</a>}
        </motion.div>
    );
};

export default ServiceCard;
