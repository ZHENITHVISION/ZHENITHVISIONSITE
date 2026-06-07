import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Réalisations', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="logo">
          <div className="logo-circle">
            <img src="/assets/logo/logo ZENITH.png" alt="Zenith Vision Logo" />
          </div>
          ZENITH VISION
        </a>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <li>
            <a href="https://wa.me/22665414899?text=Bonjour%20Zenith%20Vision,%20je%20suis%20sur%20votre%20site%20web%20et%20je%20souhaite%20avoir%20plus%20d'informations." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp nav-btn">
              WhatsApp
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active glass' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.name}</a>
            </li>
          ))}
          <li>
            <a href="https://wa.me/22665414899?text=Bonjour%20Zenith%20Vision,%20je%20suis%20sur%20votre%20site%20web%20et%20je%20souhaite%20avoir%20plus%20d'informations." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp mobile-nav-btn">
              WhatsApp (+226 65 41 48 99)
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
