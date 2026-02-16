import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import './LeadershipTeam.css';

const LeadershipTeam = ({ leaders }) => {
    return (
        <section className="leadership-section">
            <div className="leadership-header">
                <h3>Meet Our Leadership</h3>
                <p>Decades of experience driving healthcare innovation.</p>
            </div>
            <div className="leaders-grid">
                {leaders.map((leader, index) => (
                    <motion.div
                        key={index}
                        className="leader-card glass-panel"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="leader-image-placeholder">
                            {/* In real app, use <img src={leader.image} /> */}
                            <span className="initials">{leader.name.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                        <div className="leader-info">
                            <h4>{leader.name}</h4>
                            <span className="leader-title">{leader.title}</span>
                            <p className="leader-bio">{leader.bio}</p>
                            <a href="#" className="linkedin-link"><Linkedin size={18} /> Connect</a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default LeadershipTeam;
