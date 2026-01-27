import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

const HomeIcon = () => {
    return (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.2, 0.5],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                    zIndex: 0
                }}
            />
            <div style={{ position: 'relative', zIndex: 1, color: '#2563EB' }}> {/* Brand Blue */}
                <BrainCircuit size={80} color="white" strokeWidth={1.5} />
            </div>
        </div>
    );
};

export default HomeIcon;
