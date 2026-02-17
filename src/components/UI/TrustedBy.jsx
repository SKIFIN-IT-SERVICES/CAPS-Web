import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const TickerWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  padding: 3rem 0;
  background: var(--light-surface);
  position: relative;
`;

const TickerContent = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 4rem;
`;

const LogoPlaceholder = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-light);
  opacity: 0.6;
  font-family: var(--font-heading);
`;

const TrustedBy = () => {
    // Placeholder logos/names
    const partners = [
        "HealthCare Plus", "MediCorp", "Global Insure", "Rapid Claims",
        "DocuHealth", "PharmaLink", "CareSystems", "VitalFlow"
    ];

    return (
        <TickerWrapper>
            <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <p style={{ color: 'var(--text-light)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Collaborating with Industry Leaders</p>
            </div>
            <TickerContent
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    },
                }}
            >
                {/* Double the list for seamless loop */}
                {[...partners, ...partners].map((partner, index) => (
                    <LogoPlaceholder key={index}>{partner}</LogoPlaceholder>
                ))}
            </TickerContent>
        </TickerWrapper>
    );
};

export default TrustedBy;
