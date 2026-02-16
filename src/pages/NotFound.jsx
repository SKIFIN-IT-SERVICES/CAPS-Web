import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Map, AlertTriangle } from 'lucide-react';
import './Pages.css';

const NotFound = () => {
    return (
        <div className="page-not-found">
            <div className="container not-found-content">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: 1,
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 0.5,
                        opacity: { duration: 0.5 },
                        scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                        rotate: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }
                    }}
                    className="error-icon-wrapper"
                >
                    <AlertTriangle size={80} className="error-icon" />
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    404
                </motion.h1>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Page Not Found
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    It seems you've ventured into uncharted territory.
                    The page you are looking for might have been removed or is temporarily unavailable.
                </motion.p>

                <motion.div
                    className="error-actions"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link to="/" className="cta-button primary-btn">
                        <Home size={18} /> Return Home
                    </Link>
                    <Link to="/services" className="cta-button secondary-btn">
                        <Map size={18} /> Explore Services
                    </Link>
                </motion.div>
            </div>

            {/* Background Elements */}
            <div className="bg-shape shape-1"></div>
            <div className="bg-shape shape-2"></div>
        </div>
    );
};

export default NotFound;
