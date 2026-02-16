import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, TrendingUp, Clock } from 'lucide-react';
import './CaseStudyBlock.css';

const CaseStudyBlock = ({ caseStudy }) => {
    if (!caseStudy) return null;

    return (
        <div className="case-study-block case-study-premium">
            <div className="case-study-header">
                <div className="header-top">
                    <span className="case-tag">Success Story</span>
                    <div className="case-icon-wrapper">
                        <TrendingUp className="case-icon" size={24} />
                    </div>
                </div>
                <h3>{caseStudy.clientType}</h3>
            </div>

            <div className="case-content-grid">
                <div className="case-text">
                    <div className="case-section">
                        <div className="section-title">
                            <Clock size={16} className="section-icon warning" />
                            <h4>Challenge</h4>
                        </div>
                        <p>{caseStudy.challenge}</p>
                    </div>
                    <div className="case-section">
                        <div className="section-title">
                            <CheckCircle size={16} className="section-icon success" />
                            <h4>Solution</h4>
                        </div>
                        <p>{caseStudy.solution}</p>
                    </div>
                </div>

                <div className="case-results">
                    <h4>Key Results</h4>
                    <div className="results-grid">
                        {caseStudy.results.map((result, index) => (
                            <motion.div
                                key={index}
                                className="result-item"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="result-metric">{result.metric}</div>
                                <div className="result-desc">{result.desc}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyBlock;
