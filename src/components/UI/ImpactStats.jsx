import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Activity, Clock } from 'lucide-react';
import styled from 'styled-components';

const StatsSection = styled.section`
  padding: 5rem 0;
  background: var(--primary); /* Dark Blue */
  color: var(--white);
  position: relative;
  overflow: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const StatItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Number = styled.div`
  font-size: 3rem;
  font-weight: 800;
  margin: 1rem 0 0.5rem;
  background: var(--gradient-tri);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: var(--font-heading);
`;

const Label = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  color: var(--accent);
`;

const ImpactStats = () => {
    const stats = [
        { icon: <Activity />, number: "1M+", label: "Claims Processed" },
        { icon: <CheckCircle />, number: "99.9%", label: "Accuracy Rate" },
        { icon: <Users />, number: "500+", label: "Happy Providers" },
        { icon: <Clock />, number: "10+", label: "Years Experience" },
    ];

    return (
        <StatsSection>
            <div className="container">
                <Grid>
                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <IconWrapper>{stat.icon}</IconWrapper>
                            <Number>{stat.number}</Number>
                            <Label>{stat.label}</Label>
                        </StatItem>
                    ))}
                </Grid>
            </div>

            {/* Background elements */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.1), transparent 40%)',
                pointerEvents: 'none'
            }}></div>
        </StatsSection>
    );
};

export default ImpactStats;
