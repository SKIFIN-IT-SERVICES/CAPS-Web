import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Globe, Layers } from 'lucide-react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 6rem 0;
  background: var(--surface);
  position: relative;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 1rem;
    font-family: var(--font-heading);
    font-weight: 800;
  }
  
  p {
    color: var(--text-light);
    font-size: 1.1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: var(--white);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
    border-color: var(--accent);
  }
`;

const IconBox = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--brand-blue);
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-dark);
`;

const Text = styled.p`
  color: var(--text-light);
  line-height: 1.6;
  font-size: 0.95rem;
`;

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Cpu size={28} />,
      title: "AI-Driven Efficiency",
      text: "Leverage advanced algorithms to automate claims processing and reduce manual errors by up to 40%."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "HIPAA & SOC2 Compliant",
      text: "Your data security is our top priority. We adhere to the strictest international standards for data protection."
    },
    {
      icon: <Globe size={28} />,
      title: "Scalable Global Workforce",
      text: "Access a dedicated team of professionals ready to scale with your business needs, 24/7."
    },
    {
      icon: <Layers size={28} />, // Lowercase layers might be an issue if not imported correctly, checking import
      title: "End-to-End Management",
      text: "From provider credentialing to final payment, we handle the entire lifecycle of your operations."
    }
  ];

  return (
    <Section>
      <div className="container">
        <Header>
          <h2>Why Choose CAPS?</h2>
          <p>We combine cutting-edge technology with human expertise to deliver superior results for healthcare organizations.</p>
        </Header>

        <Grid>
          {features.map((feature, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <IconBox>{feature.icon}</IconBox>
              <Title>{feature.title}</Title>
              <Text>{feature.text}</Text>
            </Card>
          ))}
        </Grid>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
