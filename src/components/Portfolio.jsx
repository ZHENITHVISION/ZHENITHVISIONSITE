import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Portfolio.css';

const portfolioData = [
  // Kakemonos
  { id: 1, type: 'kakemonos', url: '/assets/kakemonos/KAKEMONO POUR BET-BUSINESS.jpeg', title: 'Kakemono BET-Business' },
  { id: 2, type: 'kakemonos', url: '/assets/kakemonos/KAKEMONO POUR DRIVERS AGENCY .jpeg', title: 'Kakemono Drivers Agency' },
  { id: 3, type: 'kakemonos', url: '/assets/kakemonos/KAKEMONO POUR IEMS-TA.jpeg', title: 'Kakemono IEMS-TA' },
  { id: 4, type: 'kakemonos', url: '/assets/kakemonos/KAKEMONO POUR ONG ..jpeg', title: 'Kakemono ONG' },
  { id: 5, type: 'kakemonos', url: '/assets/kakemonos/KAKEMONO POUR S-EVENT PROD.jpeg', title: 'Kakemono S-EVENT PROD' },
  { id: 6, type: 'kakemonos', url: '/assets/kakemonos/KAKEMONO POUR UICN ..jpeg', title: 'Kakemono UICN' },
  { id: 7, type: 'kakemonos', url: '/assets/kakemonos/kakemono pour CDEJ.jpeg', title: 'Kakemono CDEJ' },
  
  // Affiches
  { id: 8, type: 'affiches', url: '/assets/affiches/AFFICHE CENTRE DE FORMATION.png', title: 'Affiche Formation' },
  { id: 9, type: 'affiches', url: '/assets/affiches/AFFICHE COSMETIQUE.png', title: 'Affiche Cosmétique' },
  { id: 10, type: 'affiches', url: '/assets/affiches/AFFICHE IMMOBILIER.png', title: 'Affiche Immobilier' },
  { id: 11, type: 'affiches', url: '/assets/affiches/AFFICHE RESTO.png', title: 'Affiche Restaurant' },
  { id: 12, type: 'affiches', url: '/assets/affiches/AFFICHE TOURNOI BURKINA.png', title: 'Affiche Tournoi' },
  { id: 13, type: 'affiches', url: '/assets/affiches/APACHE .png', title: 'Affiche Apache' },
  
  // Branding / Logos
  { id: 20, type: 'branding', url: '/assets/affiches/LOGO AVENIR ACADEMY.jpeg', title: 'Logo Avenir Academy' },
  { id: 21, type: 'branding', url: '/assets/affiches/LOGO HABITAT PLUD.jpeg', title: 'Logo Habitat Plud' },
  { id: 22, type: 'branding', url: '/assets/affiches/QUELQUE MAQUETTES POUR HABITAT PLUD.png', title: 'Maquette Habitat Plud' },
  { id: 23, type: 'branding', url: '/assets/affiches/QUELQUES MAQUETTES POUR AVENIR ACADEMIE.png', title: 'Maquette Avenir Académie' },

  // Videos
  { id: 16, type: 'videos', url: '/assets/videos/VIDEOS MOTION smoothie aux fraises.mp4', title: 'Motion Smoothie' },
  { id: 17, type: 'videos', url: '/assets/videos/asphalt videos promo ia.mp4', title: 'Promo IA Asphalt' },
  { id: 18, type: 'videos', url: '/assets/videos/salon video promo ia.mp4', title: 'Promo IA Salon' },
  { id: 24, type: 'videos', url: '/assets/videos/ADS VIDEOS.mp4', title: 'Video A PA' },
  { id: 25, type: 'videos', url: '/assets/videos/VIDEOS POUR SIF.mp4', title: 'Promo Paragraphe' },
  { id: 26, type: 'videos', url: '/assets/videos/KAKEMONO MOTION ADS.mp4', title: 'Kakemono Motion' },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [ref, isVisible] = useIntersectionObserver();

  const filteredData = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.type === filter);

  return (
    <section id="portfolio" className="py-section relative">
      <div className="container" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Notre <span>Galerie</span></h2>
          <p className="section-subtitle">
            Explorez notre univers visuel. Des créations 3D immersives aux affiches percutantes.
          </p>
        </motion.div>

        <div className="portfolio-filters-3d">
          {['all', 'affiches', 'kakemonos', 'branding', 'videos'].map(f => (
            <button 
              key={f}
              className={`filter-btn-3d ${filter === f ? 'active' : ''}`} 
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'Tout' : f.charAt(0).toUpperCase() + f.slice(1)}
              {filter === f && (
                <motion.div layoutId="activeFilter" className="filter-active-glow" />
              )}
            </button>
          ))}
        </div>

        <motion.div layout className="portfolio-grid-3d">
          <AnimatePresence>
            {filteredData.map((item, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateX: -20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="portfolio-item-3d glass-dark hologram-border" 
                key={item.id}
              >
                {item.type === 'videos' ? (
                  <div className="video-container-3d">
                    <video 
                      controls 
                      preload="metadata"
                      className="portfolio-media-3d"
                      loading="lazy"
                    >
                      <source src={item.url} type="video/mp4" />
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  </div>
                ) : (
                  <div className="image-container-3d">
                    <img 
                      src={item.url} 
                      alt={item.title} 
                      className="portfolio-media-3d" 
                      loading="lazy" 
                    />
                    <div className="portfolio-overlay-3d">
                      <span className="text-gradient-electric">{item.title}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
