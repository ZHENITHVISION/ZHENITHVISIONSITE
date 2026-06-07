import React from 'react';
import { PhoneCall } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './CTA.css';

const CTA = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="cta-section bg-dark">
      <div className={`container animate-on-scroll ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <div className="cta-content glass-dark">
          <h2 className="cta-title">Prêt à donner une vraie image professionnelle à votre entreprise ?</h2>
          <p className="cta-subtitle">
            Contactez-nous dès aujourd'hui et discutons de votre prochain projet visuel.
          </p>
          <div className="cta-buttons">
            <a href="https://wa.me/22665414899?text=Bonjour%20Zenith%20Vision,%20je%20suis%20sur%20votre%20site%20web%20et%20je%20souhaite%20avoir%20plus%20d'informations." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <PhoneCall size={20} />
              +226 65 41 48 99
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
