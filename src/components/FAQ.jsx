import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    q: 'Quels sont vos délais de livraison ?',
    a: 'Pour la plupart de nos créations (affiches, kakemonos, logos), le délai est de 24 à 48h après validation du brief. Pour les vidéos et projets complexes, comptez 3 à 7 jours selon la durée et la complexité.',
  },
  {
    q: 'Comment se passe le paiement ?',
    a: 'Nous acceptons les paiements par Mobile Money (Orange Money, Moov Money), par virement bancaire ou en espèces. Un acompte de 50% est demandé avant le démarrage, le reste à la livraison.',
  },
  {
    q: 'Vous livrez dans toute la ville de Ouagadougou ?',
    a: 'Oui, nous livrons partout à Ouagadougou et ses environs. Pour les villes de l\'intérieur du Burkina Faso, nous envoyons les fichiers numériques par email/WhatsApp. L\'impression peut se faire chez un prestataire local.',
  },
  {
    q: 'Dans quel format livrez-vous les fichiers ?',
    a: 'Nous livrons les fichiers en haute résolution : PDF, JPG, PNG, et les sources modifiables (AI, PSD) sur demande. Pour les vidéos : MP4 HD (1080p ou 4K selon la demande).',
  },
  {
    q: 'Peut-on demander des modifications après livraison ?',
    a: 'Absolument ! Nous incluons 2 révisions gratuites dans chaque projet. Des révisions supplémentaires sont disponibles à un tarif très accessible. Notre objectif est que vous soyez 100% satisfait.',
  },
  {
    q: 'Travaillez-vous avec des entreprises de toutes tailles ?',
    a: 'Oui ! Nous accompagnons aussi bien les petits commerces, les associations, les ONG que les grandes entreprises. Nos tarifs sont adaptés à chaque budget, avec des options pour tous les profils.',
  },
];

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className={`faq-item ${open ? 'open' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{faq.q}</span>
        <motion.span
          className="faq-icon"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <p>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="faq-section py-section">
      <div className={`container animate-on-scroll ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <div className="section-tag" style={{ margin: '0 auto 20px', display: 'table' }}>
          💬 FAQ
        </div>
        <h2 className="section-title">
          Questions <span>Fréquentes</span>
        </h2>
        <p className="section-subtitle">
          Tout ce que vous voulez savoir avant de nous contacter.
        </p>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        <div className="faq-cta">
          <p>Vous avez une autre question ?</p>
          <a
            href="https://wa.me/22665414899?text=Bonjour Zenith Vision, j'ai une question..."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            💬 Posez-la sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
