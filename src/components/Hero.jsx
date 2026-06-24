import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, ArrowRight, Star } from 'lucide-react';
import MagneticButton from './MagneticButton';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacity  = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="home" className="hero-zv" ref={containerRef}>
      {/* Background décors */}
      <div className="hero-orb-1" />
      <div className="hero-orb-2" />
      <div className="hero-grid" />

      <div className="container hero-zv-inner">

        {/* ── LEFT: Content ── */}
        <motion.div
          className="hero-content"
          style={{ y: yContent, opacity }}
        >
          {/* Tag */}
          <motion.div
            className="hero-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Agence de Communication Visuelle — Burkina Faso
          </motion.div>

          {/* Titre */}
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Donnez vie à vos<br />
            idées avec des<br />
            créations <span className="highlight">qui vendent.</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            Kakemonos, affiches, vidéos, design graphique — 
            Zenith Vision crée des visuels professionnels qui attirent vos clients 
            et font grandir votre business.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <MagneticButton
              href="https://wa.me/22665414899"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle size={19} />
              Démarrer un projet
            </MagneticButton>
            <MagneticButton href="#portfolio" className="btn btn-outline">
              Voir nos réalisations
              <ArrowRight size={19} />
            </MagneticButton>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            className="hero-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <div className="trust-avatars">
              <div className="trust-avatar">ZV</div>
              <div className="trust-avatar">BF</div>
              <div className="trust-avatar">OK</div>
            </div>
            <p className="trust-text">
              <strong>+50 clients</strong> satisfaits au Burkina Faso
            </p>
            <div style={{ display:'flex', gap:'2px' }}>
              {[...Array(5)].map((_,i) => (
                <Star key={i} size={13} fill="#F2C335" color="#F2C335" />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: 3D Visual ── */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          {/* Floating badges */}
          <div className="badge-float badge-1">🎨 Affiches</div>
          <div className="badge-float badge-2">🎬 Vidéos</div>
          <div className="badge-float badge-3">📐 Kakemonos</div>

          {/* Main 3D card */}
          <motion.div
            className="hero-card-3d"
            animate={{ y: [0, -14, 0], rotateX: [0, 3, 0], rotateY: [0, 6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Logo */}
            <div className="logo-3d-wrap">
              <div className="logo-3d-glow" />
              <div className="logo-ring" />
              <div className="logo-ring logo-ring-2" />
              <img
                src="/assets/logo/logo ZENITH.png"
                alt="Zenith Vision"
                className="logo-3d-img"
              />
            </div>

            {/* Stats */}
            <div className="card-stats">
              <div className="card-stat">
                <span className="card-stat-value">50+</span>
                <span className="card-stat-label">Clients</span>
              </div>
              <div className="card-stat">
                <span className="card-stat-value">100%</span>
                <span className="card-stat-label">Qualité</span>
              </div>
              <div className="card-stat">
                <span className="card-stat-value">24h</span>
                <span className="card-stat-label">Délai*</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
