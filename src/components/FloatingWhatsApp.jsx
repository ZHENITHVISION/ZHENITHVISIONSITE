import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Numéro de téléphone au format international sans le +
  const phoneNumber = "22665414899";
  // Message pré-rempli
  const prefilledMessage = encodeURI("Bonjour Zenith Vision, je suis sur votre site web et je souhaite avoir plus d'informations concernant vos services de création visuelle.");

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`;

  useEffect(() => {
    // Afficher le widget après quelques secondes pour attirer l'attention
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`floating-whatsapp-container ${isVisible ? 'is-visible' : ''}`}>
      {/* Fenêtre de chat */}
      <div className={`whatsapp-chat-window glass-dark ${isOpen ? 'is-open' : ''}`}>
        <div className="whatsapp-chat-header">
          <div className="whatsapp-avatar">
            <img src="/assets/logo/logo ZENITH.png" alt="Zenith Vision" />
            <div className="online-indicator"></div>
          </div>
          <div className="whatsapp-header-info">
            <h4>Zenith Vision</h4>
            <p>Répond généralement en 1h</p>
          </div>
          <button className="close-btn" onClick={toggleWidget} aria-label="Fermer">
            <X size={20} />
          </button>
        </div>
        
        <div className="whatsapp-chat-body">
          <div className="whatsapp-message">
            Bonjour ! 👋<br/><br/>
            Besoin d'un devis pour un kakemono, une affiche ou une vidéo ? Comment pouvons-nous vous aider aujourd'hui ?
            <span className="message-time">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
          </div>
        </div>
        
        <div className="whatsapp-chat-footer">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-send-btn">
            Démarrer la discussion
          </a>
        </div>
      </div>

      {/* Bouton flottant */}
      <button 
        className="floating-whatsapp-btn" 
        onClick={toggleWidget}
        aria-label="Contactez-nous sur WhatsApp"
      >
        <MessageCircle size={32} />
        {/* Pastille de notification */}
        {!isOpen && <span className="notification-badge">1</span>}
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
