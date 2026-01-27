import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = ({ title, subtitle, image, ctaText = "Learn More", ctaLink = "/contact", logo, PageIcon, animateLogo = false }) => {
    return (
        <section className="hero-section">
            <div className="hero-background" style={{ backgroundImage: image ? `url(${image})` : 'none' }}>
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-content">
                {PageIcon ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "backOut" }}
                        style={{ marginBottom: '1.5rem', display: 'inline-block' }}
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="hero-icon-wrapper"
                        >
                            {PageIcon}
                        </motion.div>
                    </motion.div>
                ) : logo && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: -20 }}
                        animate={animateLogo ? {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            rotateX: [0, 10, 0], // Subtle 3D tilt
                            rotateY: [0, 10, 0],
                            filter: ["drop-shadow(0 0 0px rgba(37, 99, 235, 0))", "drop-shadow(0 0 20px rgba(37, 99, 235, 0.6))", "drop-shadow(0 0 0px rgba(37, 99, 235, 0))"]
                        } : { opacity: 1, scale: 1, y: 0 }}
                        transition={animateLogo ? {
                            duration: 1,
                            ease: "easeOut",
                            rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                            rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                            filter: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                        } : { duration: 1, ease: "easeOut" }}
                        style={{ marginBottom: '2rem', perspective: '1000px' }}
                    >
                        <img
                            src={logo}
                            alt="CAPS Logo"
                            className="hero-logo"
                            style={animateLogo ? { width: '280px', height: 'auto', maxWidth: '80vw' } : {}} // Bigger logo for readability
                        />
                    </motion.div>
                )}

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {title}
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <Link to={ctaLink} className="hero-cta">{ctaText}</Link>
                </motion.div>
            </div>

            {/* Abstract Animated Shapes */}
            <motion.div
                className="hero-shape shape-1"
                animate={{
                    y: [0, -30, 0],
                    rotate: [0, 10, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="hero-shape shape-2"
                style={{
                    width: '200px', height: '200px', bottom: '-50px', left: '-50px',
                    background: 'var(--accent-green)', borderRadius: '50%', position: 'absolute', filter: 'blur(100px)', opacity: 0.4
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
        </section>
    );
};

export default HeroSection;
