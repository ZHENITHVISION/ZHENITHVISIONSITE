import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Moussa Traoré',
    role: 'Gérant, BET-Business',
    text: 'Zenith Vision a créé notre kakemono en moins de 24h. Résultat : impeccable, professionnel, exactement ce qu\'on voulait. Je recommande à 100% !',
    stars: 5,
    initials: 'MT',
  },
  {
    id: 2,
    name: 'Aminata Ouédraogo',
    role: 'Directrice, Avenir Academy',
    text: 'Notre logo et nos affiches ont complètement transformé l\'image de notre école. Les clients nous prennent beaucoup plus au sérieux depuis. Merci Zenith Vision !',
    stars: 5,
    initials: 'AO',
  },
  {
    id: 3,
    name: 'Ibrahim Koné',
    role: 'Responsable, IEMS-TA',
    text: 'Service rapide, prix correct et qualité top. La vidéo promotionnelle qu\'ils ont réalisée pour nous tourne encore sur nos réseaux. Excellent travail !',
    stars: 5,
    initials: 'IK',
  },
  {
    id: 4,
    name: 'Fatou Sawadogo',
    role: 'Organisatrice, S-Event Prod',
    text: 'Pour nos événements, on compte toujours sur Zenith Vision. Réactivité, créativité et professionnalisme sont au rendez-vous à chaque fois.',
    stars: 5,
    initials: 'FS',
  },
  {
    id: 5,
    name: 'Drissa Compaoré',
    role: 'Propriétaire, Salon Beauté',
    text: 'La vidéo promo de mon salon a fait le tour de Ouagadougou ! J\'ai eu plein de nouveaux clients grâce à ça. Investissement qui vaut vraiment la peine.',
    stars: 5,
    initials: 'DC',
  },
];

const Stars = ({ count }) => (
  <div className="testimonial-stars">
    {[...Array(count)].map((_, i) => (
      <span key={i} style={{ color: '#F2C335', fontSize: '1rem' }}>★</span>
    ))}
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [ref, isVisible] = useIntersectionObserver();

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section className="testimonials-section py-section">
      <div className={`container animate-on-scroll ${isVisible ? 'is-visible' : ''}`} ref={ref}>

        <div className="section-tag" style={{ margin: '0 auto 20px', display: 'table' }}>
          ⭐ Témoignages
        </div>
        <h2 className="section-title">
          Ce que disent <span>nos clients</span>
        </h2>
        <p className="section-subtitle">
          Plus de 50 entreprises au Burkina Faso nous font confiance. Voici ce qu'ils en pensent.
        </p>

        {/* Carrousel */}
        <div className="testimonials-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="testimonial-card"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
            >
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">{testimonials[active].text}</p>
              <Stars count={testimonials[active].stars} />
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonials[active].initials}
                </div>
                <div>
                  <strong className="testimonial-name">{testimonials[active].name}</strong>
                  <span className="testimonial-role">{testimonials[active].role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Contrôles */}
          <div className="testimonials-controls">
            <button className="testi-btn" onClick={prev} aria-label="Précédent">‹</button>
            <div className="testi-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testi-dot ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
            <button className="testi-btn" onClick={next} aria-label="Suivant">›</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
