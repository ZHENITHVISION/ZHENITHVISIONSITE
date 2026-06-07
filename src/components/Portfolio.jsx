import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Portfolio.css';

const portfolioData = [
  // Kakemonos
  { id: 1, type: 'kakemonos', url: '/assets/kakemonos/KAKEMONO POUR BET-BUSINESS.webp', title: 'Kakemono BET-Business' },
  { id: 2, type: 'kakemonos', url: '/assets/kakemonos/KAKEMONO POUR DRIVERS AGENCY .webp', title: 'Kakemono Drivers Agency' },
  { id: 3, type: 'kakemonos', url: '/assets/kakemonos/KAKEMONO POUR IEMS-TA.webp', title: 'Kakemono IEMS-TA' },
  { id: 4, type: 'kakemonos', url: '/assets/kakemonos/KAKEMONO POUR ONG ..webp', title: 'Kakemono ONG' },
  { id: 5, type: 'kakemonos', url: '/assets/kakemonos/KAKEMONO POUR S-EVENT PROD.webp', title: 'Kakemono S-EVENT PROD' },
  { id: 6, type: 'kakemonos', url: '/assets/kakemonos/KAKEMONO POUR UICN ..webp', title: 'Kakemono UICN' },
  { id: 7, type: 'kakemonos', url: '/assets/kakemonos/kakemono pour CDEJ.webp', title: 'Kakemono CDEJ' },
  
  // Affiches
  { id: 8, type: 'affiches', url: '/assets/affiches/AFFICHE CENTRE DE FORMATION.webp', title: 'Affiche Formation' },
  { id: 9, type: 'affiches', url: '/assets/affiches/AFFICHE COSMETIQUE.webp', title: 'Affiche Cosmétique' },
  { id: 10, type: 'affiches', url: '/assets/affiches/AFFICHE IMMOBILIER.webp', title: 'Affiche Immobilier' },
  { id: 11, type: 'affiches', url: '/assets/affiches/AFFICHE RESTO.webp', title: 'Affiche Restaurant' },
  { id: 12, type: 'affiches', url: '/assets/affiches/AFFICHE TOURNOI BURKINA.webp', title: 'Affiche Tournoi' },
  { id: 13, type: 'affiches', url: '/assets/affiches/APACHE .webp', title: 'Affiche Apache' },
  
  // Branding / Logos (Les mockups et logos manquants)
  { id: 20, type: 'branding', url: '/assets/affiches/LOGO AVENIR ACADEMY.webp', title: 'Logo Avenir Academy' },
  { id: 21, type: 'branding', url: '/assets/affiches/LOGO HABITAT PLUD.webp', title: 'Logo Habitat Plud' },
  { id: 22, type: 'branding', url: '/assets/affiches/QUELQUE MAQUETTES POUR HABITAT PLUD.webp', title: 'Maquette Habitat Plud' },
  { id: 23, type: 'branding', url: '/assets/affiches/QUELQUES MAQUETTES POUR AVENIR ACADEMIE.webp', title: 'Maquette Avenir Académie' },

  // Videos
  { id: 14, type: 'videos', url: '/assets/videos/KAKEMONO ADS.mp4', title: 'Kakemono ADS Video' },
  { id: 15, type: 'videos', url: '/assets/videos/SERVICE DE CRETION DE VIDEOS.mp4', title: 'Service Création Vidéos' },
  { id: 16, type: 'videos', url: '/assets/videos/VIDEOS MOTION smoothie aux fraises.mp4', title: 'Motion Smoothie' },
  { id: 17, type: 'videos', url: '/assets/videos/asphalt videos promo ia.mp4', title: 'Promo IA Asphalt' },
  { id: 18, type: 'videos', url: '/assets/videos/salon video promo ia.mp4', title: 'Promo IA Salon' },
  { id: 19, type: 'videos', url: '/assets/videos/sirius videos prom ia.mp4', title: 'Promo IA Sirius' },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [ref, isVisible] = useIntersectionObserver();

  const filteredData = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.type === filter);

  return (
    <section id="portfolio" className="py-section bg-dark">
      <div className={`container animate-on-scroll ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <h2 className="section-title">Nos Réalisations</h2>
        <p className="section-subtitle">
          Découvrez quelques-uns de nos récents projets créatifs pour nos clients.
        </p>

        <div className="portfolio-filters">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>Tous</button>
          <button className={`filter-btn ${filter === 'affiches' ? 'active' : ''}`} onClick={() => setFilter('affiches')}>Affiches</button>
          <button className={`filter-btn ${filter === 'kakemonos' ? 'active' : ''}`} onClick={() => setFilter('kakemonos')}>Kakemonos</button>
          <button className={`filter-btn ${filter === 'branding' ? 'active' : ''}`} onClick={() => setFilter('branding')}>Logos & Branding</button>
          <button className={`filter-btn ${filter === 'videos' ? 'active' : ''}`} onClick={() => setFilter('videos')}>Vidéos</button>
        </div>

        <div className="portfolio-grid">
          {filteredData.map((item, index) => (
            <div className="portfolio-item" key={item.id} style={{ transitionDelay: `${(index % 6) * 0.1}s` }}>
              {item.type === 'videos' ? (
                <div className="video-container">
                  <video 
                    controls 
                    preload="metadata"
                    className="portfolio-media"
                    loading="lazy"
                  >
                    <source src={item.url} type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                </div>
              ) : (
                <div className="image-container">
                  <img 
                    src={item.url} 
                    alt={`${item.title} - Agence de création de visuels et affiches publicitaires à Ouagadougou, Burkina Faso`} 
                    className="portfolio-media" 
                    loading="lazy" 
                  />
                  <div className="portfolio-overlay">
                    <span>{item.title}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
