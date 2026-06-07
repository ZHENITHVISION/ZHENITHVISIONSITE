import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/assets/logo/logo ZENITH.png" alt="Zenith Vision" />
              <span>ZENITH VISION</span>
            </div>
            <p className="footer-desc">
              Agence de communication visuelle au Burkina Faso. Nous créons des supports percutants pour booster votre visibilité.
            </p>
          </div>
          
          <div className="footer-links-group">
            <h4>Liens Rapides</h4>
            <ul>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#services">Nos Services</a></li>
              <li><a href="#portfolio">Réalisations</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h4>Réseaux Sociaux</h4>
            <ul>
              <li><a href="https://web.facebook.com/profile.php?id=61577264010135" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://wa.me/22665414899?text=Bonjour%20Zenith%20Vision,%20je%20suis%20sur%20votre%20site%20web%20et%20je%20souhaite%20avoir%20plus%20d'informations." target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Zenith Vision. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
