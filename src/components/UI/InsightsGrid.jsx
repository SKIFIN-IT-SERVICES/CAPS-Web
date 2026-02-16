import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { insights } from '../../data/homeData';
import './InsightsGrid.css';

const InsightsGrid = () => {
    return (
        <section className="insights-section section-padding">
            <div className="container">
                <div className="section-header-simple">
                    <h2>Insights & Thought Leadership</h2>
                    <p>Strategic perspectives on the future of healthcare administration.</p>
                </div>

                <div className="insights-grid">
                    {insights.map((post, index) => (
                        <motion.article
                            key={index}
                            className="insight-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="insight-image-wrapper">
                                <img src={post.image} alt={post.title} className="insight-img" />
                                <span className="insight-category">{post.category}</span>
                            </div>
                            <div className="insight-content">
                                <div className="insight-meta">
                                    <span className="meta-item"><Calendar size={14} /> {post.date}</span>
                                    <span className="meta-item"><Clock size={14} /> {post.readTime}</span>
                                </div>
                                <h3>{post.title}</h3>
                                <p>{post.desc}</p>
                                <a href="#" className="read-more-link">
                                    Read Article <ArrowRight size={16} />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InsightsGrid;
