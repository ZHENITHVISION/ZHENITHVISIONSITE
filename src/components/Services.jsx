import React from 'react';
import { MonitorPlay, PenTool, Image, LayoutTemplate } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Services.css';

const Services = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const services = [
    {
      title: 'Kakemonos / Roll-ups',
      description: 'Supports verticaux percutants pour vos événements et points de vente.',
      price: '39 000 FCFA',
      icon: <LayoutTemplate size={32} />,
      color: '#FFD700'
    },
    {
      title: 'Affiches Publicitaires',
      description: 'Designs créatifs et accrocheurs pour vos campagnes marketing.',
      price: 'À partir de 5 000 FCFA',
      icon: <Image size={32} />,
      color: '#25D366'
    },
    {
      title: 'Vidéos Publicitaires',
      description: 'Vidéos promotionnelles et motion design pour vos réseaux sociaux.',
      price: 'À partir de 15 000 FCFA',
      icon: <MonitorPlay size={32} />,
      color: '#FF4757'
    },
    {
      title: 'Branding & Design',
      description: 'Logos, identité visuelle et conception de tous vos supports de communication.',
      price: 'Sur devis',
      icon: <PenTool size={32} />,
      color: '#1E90FF'
    }
  ];

  return (
    <section id="services" className="py-section">
      <div className={`container animate-on-scroll ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <h2 className="section-title">Nos Services</h2>
        <p className="section-subtitle">
          Des solutions visuelles complètes pour faire briller votre entreprise à Ouagadougou et partout au Burkina.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card glass" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="service-icon" style={{ backgroundColor: `${service.color}15`, color: service.color }}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-price">{service.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
