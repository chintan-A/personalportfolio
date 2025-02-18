import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaCode, FaAppStore, FaPaintBrush } from 'react-icons/fa';

const ServiceSection = styled.section`
  padding: 100px 0;
  background: #1a1a1a;
`;

const ServiceCard = styled(motion.div)`
  background: #262626;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    background: linear-gradient(45deg, #ff004f, #9000ff);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #ff004f;
`;

const services = [
  {
    icon: <FaCode />,
    title: "Web Design",
    description: "Creating responsive and modern web applications using latest technologies."
  },
  {
    icon: <FaAppStore />,
    title: "App Design",
    description: "Developing cross-platform mobile applications with intuitive interfaces."
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description: "Designing user-friendly interfaces with modern design principles."
  }
];

const Services = () => {
  return (
    <ServiceSection id="services">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>My Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceCard>
          ))}
        </div>
      </motion.div>
    </ServiceSection>
  );
};

export default Services; 