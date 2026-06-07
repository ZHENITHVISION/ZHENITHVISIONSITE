import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    entreprise: '',
    telephone: '',
    service: '',
    message: '',
    bot_field: '' // Honeypot
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic anti-spam (Honeypot)
    if (formData.bot_field) {
      return; // Silently reject
    }

    if (!formData.nom || !formData.message) {
      setStatus('error');
      return;
    }

    // Construction du message formaté pour WhatsApp
    const messageText = 
      `Bonjour Zenith Vision ! 👋\n\n` +
      `Je suis *${formData.nom}*\n` +
      `${formData.entreprise ? `🏢 Entreprise : ${formData.entreprise}\n` : ''}` +
      `${formData.telephone ? `📞 Téléphone : ${formData.telephone}\n` : ''}` +
      `${formData.service ? `🎯 Service qui m'intéresse : ${formData.service}\n` : ''}` +
      `\n📝 *Mon message :*\n${formData.message}`;

    // Encodage du texte pour l'URL
    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/22665414899?text=${encodedText}`;

    // Ouverture de WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Réinitialisation du formulaire pour faire propre
    setStatus('success');
    setFormData({
      nom: '', entreprise: '', telephone: '', service: '', message: '', bot_field: ''
    });
    
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="py-section">
      <div className="container">
        <h2 className="section-title">Contactez-nous</h2>
        <p className="section-subtitle">
          Une question ? Un projet ? N'hésitez pas à nous écrire, nous vous répondrons dans les plus brefs délais.
        </p>

        <div className="contact-wrapper">
          <div className="contact-info glass-dark">
            <h3>Informations de contact</h3>
            <p>Retrouvez-nous à Ouagadougou ou contactez-nous directement en ligne.</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <div>
                  <h4>WhatsApp / Téléphone</h4>
                  <p>+226 65 41 48 99</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p>abdousalamkoanda@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Localisation</h4>
                  <p>Ouagadougou, Burkina Faso</p>
                </div>
              </div>
            </div>
            
            {/* Socials can be added here if needed */}
          </div>

          <div className="contact-form-container glass">
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Honeypot field - hidden from users */}
              <input 
                type="text" 
                name="bot_field" 
                className="hidden-honeypot" 
                value={formData.bot_field} 
                onChange={handleChange} 
                tabIndex="-1" 
                autoComplete="off" 
              />

              <div className="form-group">
                <label htmlFor="nom">Nom complet *</label>
                <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required placeholder="Votre nom" />
              </div>
              
              <div className="form-group">
                <label htmlFor="entreprise">Entreprise</label>
                <input type="text" id="entreprise" name="entreprise" value={formData.entreprise} onChange={handleChange} placeholder="Nom de votre entreprise" />
              </div>

              <div className="form-group">
                <label htmlFor="telephone">Téléphone (WhatsApp) *</label>
                <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} required placeholder="+226 XX XX XX XX" />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service souhaité</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange}>
                  <option value="">Sélectionnez un service...</option>
                  <option value="kakemono">Kakemono / Roll-up</option>
                  <option value="affiche">Affiche publicitaire</option>
                  <option value="video">Vidéo publicitaire</option>
                  <option value="branding">Branding / Design graphique</option>
                  <option value="autre">Autre besoin</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Votre message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Décrivez votre projet..." rows="4"></textarea>
              </div>

              <div className="form-group full-width">
                <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Envoi en cours...' : <><Send size={18} /> Envoyer le message</>}
                </button>
              </div>
              
              {status === 'success' && (
                <div className="form-success full-width">
                  Merci ! Votre message a été envoyé avec succès. Nous vous contacterons très vite.
                </div>
              )}
              {status === 'error' && (
                <div className="form-error full-width">
                  Veuillez remplir tous les champs obligatoires.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
