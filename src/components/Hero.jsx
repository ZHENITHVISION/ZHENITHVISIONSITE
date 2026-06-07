import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge glass-dark">Agence de Communication Visuelle</div>
          <h1 className="hero-title">
            Boostez la visibilité de votre entreprise avec des créations <span className="text-gradient">professionnelles</span>.
          </h1>
          <p className="hero-subtitle">
            Kakemonos, affiches publicitaires, vidéos promotionnelles et design visuel pour les entreprises au Burkina Faso.
          </p>
          <div className="hero-cta">
            <a href="https://wa.me/22665414899" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={20} />
              Nous contacter sur WhatsApp
            </a>
            <a href="#portfolio" className="btn btn-outline">
              Voir nos réalisations
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
        <div className="hero-visual floating">
          <div className="visual-card glass-dark">
            <img src="/assets/logo/logo ZENITH.png" alt="Zenith Vision" className="hero-logo" />
            <div className="visual-stats">
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Professionnel</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">Rapide</span>
                <span className="stat-label">Livraison</span>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="decor-circle circle-1"></div>
          <div className="decor-circle circle-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
