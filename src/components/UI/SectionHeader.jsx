import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import './SectionHeader.css';

const SectionHeader = ({ title, subtitle, icon: Icon = Sparkles, align = 'center' }) => {
    return (
        <motion.div 
            className={`section-header-styled ${align}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="header-glass-container">
                <motion.div 
                    className="header-icon-badge"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                >
                    <Icon size={24} />
                </motion.div>
                <h2 className="header-title">{title}</h2>
                {subtitle && <p className="header-subtitle">{subtitle}</p>}
                
                <div className="header-decoration">
                    <motion.div 
                        className="deco-line"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default SectionHeader;
