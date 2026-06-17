import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import MagneticButton from './MagneticButton';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  
  // Parallax scrolling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleLogo = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section id="home" className="hero-3d" ref={containerRef}>
      {/* Deep Background with Parallax */}
      <motion.div 
        className="hero-3d-bg"
        style={{ y: yBackground }}
      >
        <div className="light-beam beam-1"></div>
        <div className="light-beam beam-2"></div>
        <div className="light-beam beam-3"></div>
      </motion.div>

      <div className="container hero-3d-container">
        
        {/* Left Content with Parallax */}
        <motion.div 
          className="hero-3d-content"
          style={{ y: yContent, opacity: opacityText }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-badge hologram-border glass-dark"
          >
            Agence de Communication Visuelle
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hero-title"
          >
            Boostez la visibilité de votre entreprise avec des créations <br/>
            <span className="text-gradient-electric">professionnelles.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hero-subtitle"
          >
            Design premium, vidéos immersives et kakemonos holographiques au Burkina Faso. 
            Écrasez la concurrence avec une identité visuelle d'élite.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="hero-cta"
          >
            <MagneticButton href="https://wa.me/22665414899" target="_blank" rel="noreferrer" className="btn btn-primary">
              <MessageCircle size={20} />
              Démarrer un projet
            </MagneticButton>
            <MagneticButton href="#portfolio" className="btn btn-outline glass">
              Explorer le Portfolio
              <ArrowRight size={20} />
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Right Visual 3D Float */}
        <motion.div 
          className="hero-3d-visual"
          style={{ scale: scaleLogo }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div 
            className="visual-core glass-dark hologram-border"
            animate={{ 
              y: [0, -20, 0],
              rotateX: [0, 5, 0],
              rotateY: [0, 10, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="logo-container-3d">
              <img src="/assets/logo/logo ZENITH.png" alt="Zenith Vision" className="hero-logo-glow" />
              <img src="/assets/logo/logo ZENITH.png" alt="Zenith Vision" className="hero-logo-front" />
            </div>
            
            <div className="visual-stats-3d">
              <div className="stat-item-3d glass">
                <span className="stat-value text-gradient-electric">100%</span>
                <span className="stat-label">Premium</span>
              </div>
              <div className="stat-item-3d glass">
                <span className="stat-value text-gradient-electric">Ultra</span>
                <span className="stat-label">Rapide</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Decor Particles */}
          <motion.div className="particle p1 glass" animate={{ y: [0, 30, 0], x: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}></motion.div>
          <motion.div className="particle p2 glass" animate={{ y: [0, -40, 0], x: [0, 30, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }}></motion.div>
          <motion.div className="particle p3 glass" animate={{ y: [0, 20, 0], x: [0, 20, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}></motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
