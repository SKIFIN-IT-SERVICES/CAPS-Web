import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 6rem 0;
  background: var(--light-surface);
`;

const TestimonialCard = styled(motion.div)`
  background: var(--white);
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
`;

const QuoteIcon = styled.div`
  color: var(--accent);
  margin-bottom: 2rem;
  opacity: 0.3;
`;

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-dark);
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 2rem;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--gradient-sec);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`;

const Info = styled.div`
  text-align: left;
`;

const Name = styled.div`
  font-weight: 700;
  color: var(--primary);
`;

const Role = styled.div`
  font-size: 0.9rem;
  color: var(--text-light);
`;

const Testimonials = () => {
    return (
        <Section>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>What Our Partners Say</h2>
                </div>

                <TestimonialCard
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <QuoteIcon><Quote size={48} /></QuoteIcon>
                    <Text>"CAPS transformed our claims processing workflow. The accuracy has improved by 40% and we've reduced our operational costs significantly."</Text>
                    <Author>
                        <Avatar>JD</Avatar>
                        <Info>
                            <Name>Jonathan Doe</Name>
                            <Role>Director of Operations, MedHealth Inc.</Role>
                        </Info>
                    </Author>
                </TestimonialCard>
            </div>
        </Section>
    );
};

export default Testimonials;
