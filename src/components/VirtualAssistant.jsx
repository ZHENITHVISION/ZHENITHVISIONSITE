import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, ChevronRight } from 'lucide-react';
import './VirtualAssistant.css';

// Base64 tiny pop sound
const popSoundUrl = "data:audio/mp3;base64,//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"; // Simplified, will just be a silent placeholder if browser blocks.

const VirtualAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [leadData, setLeadData] = useState({ service: '', urgency: '' });
  const messagesEndRef = useRef(null);

  const getGreeting = () => {
    const hour = new Date().getHours();
    return hour < 18 ? "Bonjour" : "Bonsoir";
  };

  const [messages, setMessages] = useState([]);

  // Initialization
  useEffect(() => {
    const initialMsg = {
      id: 1,
      sender: 'bot',
      text: `${getGreeting()} ! Bienvenue chez Zenith Vision. Comment puis-je vous aider aujourd'hui ?`,
      options: [
        { label: "Démarrer un devis rapide", action: "startLeadGen" },
        { label: "Visite guidée du site", action: "startTour" },
        { label: "Juste jeter un œil", action: "closeBot" }
      ]
    };

    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsOpen(true);
      setMessages([initialMsg]);
      // Play sound
      try {
        const audio = new Audio(popSoundUrl);
        audio.volume = 0.5;
        audio.play().catch(e => console.log("Audio autoplay blocked"));
      } catch(e) {}
    }, 1500);

    // Exit Intent Detection
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !isOpen) {
        setIsOpen(true);
        setIsVisible(true);
        setMessages(prev => [...prev, {
          id: Date.now(),
          sender: 'bot',
          text: "Attendez ! Avant de partir, laissez-nous vous offrir un devis gratuit et rapide pour votre projet.",
          options: [
            { label: "Faire un devis rapide", action: "startLeadGen" },
            { label: "Non merci", action: "closeBot" }
          ]
        }]);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => setIsOpen(!isOpen);

  const handleAction = (option) => {
    if (option.action === 'closeBot') {
      setIsOpen(false);
      return;
    }

    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text: option.label };
    setMessages(prev => [...prev, userMsg]);

    let botResponse = {};
    
    switch(option.action) {
        // --- LEAD GEN FLOW ---
        case 'startLeadGen':
          botResponse = {
            id: Date.now() + 1,
            sender: 'bot',
            text: "Excellente idée. Pour commencer, de quoi avez-vous besoin ?",
            options: [
              { label: "Une vidéo (Motion/Promo)", action: "lead_service_video" },
              { label: "Un Kakemono / Roll-up", action: "lead_service_kakemono" },
              { label: "Une affiche / Design", action: "lead_service_affiche" }
            ]
          };
          break;
        case 'lead_service_video':
        case 'lead_service_kakemono':
        case 'lead_service_affiche':
          const service = option.label;
          setLeadData(prev => ({ ...prev, service }));
          botResponse = {
            id: Date.now() + 1,
            sender: 'bot',
            text: `Un projet de ${service.toLowerCase()} ! Très bien. Quel est le degré d'urgence de ce projet ?`,
            options: [
              { label: "Très urgent (Dès que possible)", action: "lead_urgency_urgent" },
              { label: "Cette semaine", action: "lead_urgency_week" },
              { label: "Pas d'urgence", action: "lead_urgency_none" }
            ]
          };
          break;
        case 'lead_urgency_urgent':
        case 'lead_urgency_week':
        case 'lead_urgency_none':
          const urgency = option.label;
          const finalService = leadData.service || "Design";
          
          const textMsg = `Bonjour Zenith Vision ! Je souhaite un devis pour : ${finalService}. Degré d'urgence : ${urgency}.`;
          const waLink = `https://wa.me/22665414899?text=${encodeURIComponent(textMsg)}`;
          
          botResponse = {
            id: Date.now() + 1,
            sender: 'bot',
            text: "Parfait ! J'ai toutes les informations. Cliquez sur le bouton ci-dessous pour m'envoyer ce récapitulatif directement sur WhatsApp et nous validerons ça ensemble.",
            options: [
              { label: "Envoyer sur WhatsApp", action: "openCustomWhatsApp", link: waLink },
              { label: "Recommencer", action: "startLeadGen" }
            ]
          };
          break;
          
        case 'openCustomWhatsApp':
          window.open(option.link, "_blank");
          botResponse = {
            id: Date.now() + 1,
            sender: 'bot',
            text: "Redirection vers WhatsApp en cours... À tout de suite !",
            options: []
          };
          break;

        // --- GUIDED TOUR FLOW ---
        case 'startTour':
          botResponse = {
            id: Date.now() + 1,
            sender: 'bot',
            text: "Voici les différentes sections de l'agence. Quelle est la section qui vous intéresse ?",
            options: [
              { label: "Nos Expertises & Prix", action: "scrollToServices" },
              { label: "Notre Portfolio", action: "scrollToPortfolio" },
              { label: "Nous contacter", action: "openWhatsApp" }
            ]
          };
          break;
        case 'scrollToServices':
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          botResponse = {
            id: Date.now() + 1,
            sender: 'bot',
            text: "Nous sommes dans la section Expertises ! Nous faisons des Kakemonos à partir de 39 000 FCFA et des affiches à partir de 5 000 FCFA.",
            options: [
              { label: "Voir le Portfolio", action: "scrollToPortfolio" },
              { label: "Faire un devis", action: "startLeadGen" }
            ]
          };
          break;
        case 'scrollToPortfolio':
          document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
          botResponse = {
            id: Date.now() + 1,
            sender: 'bot',
            text: "Voici notre galerie ! Nos vidéos immersives commencent à partir de 15 000 FCFA. Regardez nos exemples de motion design.",
            options: [
              { label: "Voir les tarifs", action: "scrollToServices" },
              { label: "Faire un devis", action: "startLeadGen" }
            ]
          };
          break;
        case 'openWhatsApp':
          botResponse = {
            id: Date.now() + 1,
            sender: 'bot',
            text: "Je vous redirige vers notre WhatsApp. Un membre de l'équipe vous répondra tout de suite !",
            options: []
          };
          setTimeout(() => {
            window.open("https://wa.me/22665414899?text=Bonjour,%20je%20souhaite%20discuter%20d'un%20projet.", "_blank");
          }, 1500);
          break;
        default:
          botResponse = {
            id: Date.now() + 1,
            sender: 'bot',
            text: "Puis-je vous aider avec autre chose ?",
            options: [
              { label: "Faire un devis rapide", action: "startLeadGen" },
              { label: "Voir les services", action: "scrollToServices" }
            ]
          };
      }

      setMessages(prev => [...prev, botResponse]);
  };

  return (
    <div className={`virtual-assistant-container ${isVisible ? 'is-visible' : ''}`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 20 }}
            className="va-chat-wrapper"
          >
            <div className="va-mascot-header">
              <img src="/assets/robot_mascot.png" className="va-mascot-img" alt="ZenithBot" />
              <div className="va-mascot-brand">Zenith Vision</div>
            </div>
            
            <div className="va-chat-window glass-dark hologram-border">
              <div className="va-header">
                <div className="va-avatar-container">
                  <div className="va-avatar">
                    <Bot size={24} />
                  </div>
                  <div className="va-status">
                    <h4>ZenithBot</h4>
                    <span>En ligne</span>
                  </div>
                </div>
                <button className="va-close-btn" onClick={toggleChat}>
                  <X size={20} />
                </button>
              </div>

              <div className="va-body">
                {messages.map((msg) => (
                  <div key={msg.id} className={`va-message-wrapper ${msg.sender}`}>
                    {msg.sender === 'bot' && <div className="va-message-avatar"><Bot size={16} /></div>}
                    <div className={`va-message ${msg.sender}`}>
                      <p dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>
                      
                      {msg.options && msg.options.length > 0 && (
                        <div className="va-options">
                          {msg.options.map((opt, idx) => (
                            <button key={idx} className="va-option-btn" onClick={() => handleAction(opt)}>
                              {opt.label} <ChevronRight size={14} />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    {msg.sender === 'user' && <div className="va-message-avatar user"><User size={16} /></div>}
                  </div>
                ))}
                
                <div ref={messagesEndRef} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="va-toggle-btn glass-dark hologram-border" 
        onClick={toggleChat}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {!isOpen && <span className="va-badge">1</span>}
      </motion.button>
    </div>
  );
};

export default VirtualAssistant;
