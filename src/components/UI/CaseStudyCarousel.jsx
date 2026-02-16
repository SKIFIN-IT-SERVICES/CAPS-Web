import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/homeData';
import './CaseStudyCarousel.css';

const CaseStudyCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    };

    const currentStudy = caseStudies[currentIndex];

    return (
        <section className="case-study-section section-padding">
            <div className="container">
                <div className="carousel-header">
                    <div>
                        <h2>Proven Results</h2>
                        <p>Real-world impact delivering measurable value.</p>
                    </div>
                    <div className="carousel-controls">
                        <button onClick={prevSlide} className="control-btn" aria-label="Previous slide">
                            <ArrowLeft size={20} />
                        </button>
                        <button onClick={nextSlide} className="control-btn" aria-label="Next slide">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="carousel-viewport">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            className="case-study-slide"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="slide-content">
                                <span className="slide-category">{currentStudy.category}</span>
                                <h3>{currentStudy.title}</h3>
                                <div className="slide-stat-row">
                                    <div className="slide-stat-value">{currentStudy.stat}</div>
                                    <div className="slide-stat-context">{currentStudy.statContext}</div>
                                </div>
                                <p>{currentStudy.desc}</p>
                                <Link to={currentStudy.link} className="slide-link">
                                    Read Full Story <ArrowUpRight size={18} />
                                </Link>
                            </div>
                            <div className="slide-image-wrapper">
                                <img src={currentStudy.image} alt={currentStudy.title} className="slide-image" />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="carousel-indicators">
                    {caseStudies.map((_, idx) => (
                        <button
                            key={idx}
                            className={`indicator-dot ${idx === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudyCarousel;
