import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Presentation, Palette, Film, Sparkles, Flag } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Services.css';

const HolographicCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="service-card-3d glass-dark hologram-border"
    >
      <div className="card-content-3d" style={{ transform: "translateZ(40px)" }}>
        <div className="service-icon-3d" style={{ color: service.color, boxShadow: `0 0 20px ${service.color}40` }}>
          {service.icon}
        </div>
        <h3 className="service-title-3d">{service.title}</h3>
        <p className="service-desc-3d">{service.description}</p>
        <div className="service-price-3d">{service.price}</div>
      </div>
      
      {/* Reflection effect */}
      <motion.div 
        className="card-reflection"
        style={{
          opacity: useTransform(mouseYSpring, [-0.5, 0.5], [0, 0.3]),
          background: `radial-gradient(circle at ${useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])} ${useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])}, rgba(255,255,255,0.8) 0%, transparent 50%)`
        }}
      />
    </motion.div>
  );
};

const Services = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const services = [
    {
      title: 'Kakemonos / Roll-ups',
      description: 'Supports verticaux premium pour vos événements. Design holographique et impression HD.',
      price: 'À partir de 39 000 FCFA',
      icon: <Presentation size={48} strokeWidth={1.5} />,
      color: '#00E5FF' // Electric Blue
    },
    {
      title: 'X-Banner',
      description: 'Support de communication ultra-léger et portable, idéal pour vos promotions rapides.',
      price: 'À partir de 24 900 FCFA',
      icon: <Flag size={48} strokeWidth={1.5} />,
      color: '#FFD700' // Gold
    },
    {
      title: 'Affiches Publicitaires',
      description: 'Visuels à haute conversion conçus pour capter l\'attention instantanément.',
      price: 'À partir de 5 000 FCFA',
      icon: <Palette size={48} strokeWidth={1.5} />,
      color: '#00E5FF' 
    },
    {
      title: 'Vidéos Immersives',
      description: 'Motion design et vidéos promotionnelles pour exploser sur les réseaux sociaux.',
      price: 'À partir de 15 000 FCFA',
      icon: <Film size={48} strokeWidth={1.5} />,
      color: '#FFD700'
    },
    {
      title: 'Branding Visuel',
      description: 'Identité visuelle complète pour positionner votre entreprise comme leader.',
      price: 'Sur devis',
      icon: <Sparkles size={48} strokeWidth={1.5} />,
      color: '#00E5FF'
    }
  ];

  return (
    <section id="services" className="py-section relative">
      <div className="container" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Nos <span>Expertises</span></h2>
          <p className="section-subtitle">
            Des solutions technologiques et créatives pour dominer votre marché au Burkina Faso.
          </p>
        </motion.div>

        <div className="services-grid-3d">
          {services.map((service, index) => (
            <HolographicCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
