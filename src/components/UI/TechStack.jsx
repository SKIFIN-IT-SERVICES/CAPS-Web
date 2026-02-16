import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Cloud, Shield, Server, Code } from 'lucide-react';
import './TechStack.css';

const TechStack = ({ stack }) => {
    if (!stack) return null;

    // Mapping string names to Lucide icons for now
    const getIcon = (name) => {
        const lowerName = name.toLowerCase();
        if (lowerName.includes('ai') || lowerName.includes('bot')) return <Cpu />;
        if (lowerName.includes('data') || lowerName.includes('sql')) return <Database />;
        if (lowerName.includes('cloud') || lowerName.includes('azure') || lowerName.includes('aws')) return <Cloud />;
        if (lowerName.includes('secure') || lowerName.includes('auth')) return <Shield />;
        if (lowerName.includes('api') || lowerName.includes('connect')) return <Server />;
        return <Code />;
    };

    return (
        <div className="tech-stack-section">
            <h3 className="tech-section-title">Technology Stack</h3>
            <p className="tech-section-subtitle">Powered by enterprise-grade infrastructure.</p>

            <div className="tech-grid">
                {stack.map((tech, index) => (
                    <motion.div
                        key={index}
                        className="tech-card"
                        whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="tech-icon">
                            {getIcon(tech)}
                        </div>
                        <span className="tech-name">{tech}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
