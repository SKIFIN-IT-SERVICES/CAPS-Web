import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled.section`
  padding: 6rem 0;
  background: var(--white);
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const ConnectorLine = styled.div`
  position: absolute;
  top: 40px;
  left: 10%;
  right: 10%;
  height: 2px;
  background: #e2e8f0;
  z-index: 0;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Step = styled(motion.div)`
  flex: 1;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 0 1rem;
`;

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  background: var(--white);
  border: 2px solid var(--accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
  margin: 0 auto 1.5rem;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 1);
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--primary);
`;

const StepDesc = styled.p`
  color: var(--text-light);
  font-size: 1rem;
`;

const HowItWorks = () => {
    const steps = [
        { num: 1, title: "Analysis", desc: "We conduct a deep-dive audit of your current workflows to identify bottlenecks." },
        { num: 2, title: "Integration", desc: "Our team seamlessly connects with your systems, ensuring zero disruption." },
        { num: 3, title: "Optimization", desc: "Continuous monitoring and AI-driven adjustments to maximize efficiency." }
    ];

    return (
        <Section>
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>How We Work</h2>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>A simple, transparent process to elevate your operations.</p>
                </div>

                <StepContainer>
                    <ConnectorLine />
                    {steps.map((step, index) => (
                        <Step
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <StepNumber>{step.num}</StepNumber>
                            <StepTitle>{step.title}</StepTitle>
                            <StepDesc>{step.desc}</StepDesc>
                        </Step>
                    ))}
                </StepContainer>
            </div>
        </Section>
    );
};

export default HowItWorks;
