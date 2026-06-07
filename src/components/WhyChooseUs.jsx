import React from 'react';
import { CheckCircle2, Zap, Clock, ThumbsUp, HeartHandshake, HeadphonesIcon } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const reasons = [
    { title: 'Créativité Professionnelle', icon: <CheckCircle2 size={24} /> },
    { title: 'Livraison Rapide', icon: <Zap size={24} /> },
    { title: 'Communication Claire', icon: <HeartHandshake size={24} /> },
    { title: 'Prix Adaptés au Marché', icon: <ThumbsUp size={24} /> },
    { title: 'Design Moderne', icon: <Clock size={24} /> },
    { title: 'Support WhatsApp Réactif', icon: <HeadphonesIcon size={24} /> }
  ];

  return (
    <section className="py-section bg-light">
      <div className={`container animate-on-scroll ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <h2 className="section-title">Pourquoi Nous Choisir ?</h2>
        <p className="section-subtitle">
          Zenith Vision se démarque par son approche centrée sur les résultats de ses clients.
        </p>

        <div className="reasons-grid">
          {reasons.map((reason, idx) => (
            <div className="reason-item glass" key={idx} style={{ transitionDelay: `${idx * 0.1}s` }}>
              <div className="reason-icon">
                {reason.icon}
              </div>
              <span className="reason-title">{reason.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
