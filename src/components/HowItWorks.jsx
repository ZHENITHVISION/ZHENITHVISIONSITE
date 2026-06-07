import React from 'react';
import { MessageSquare, FileText, Lightbulb, PenTool, CheckSquare, Send } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './HowItWorks.css';

const HowItWorks = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const steps = [
    { id: 1, title: 'Vous nous contactez', icon: <MessageSquare size={28} /> },
    { id: 2, title: 'Vous envoyez votre besoin', icon: <FileText size={28} /> },
    { id: 3, title: 'Nous proposons une solution', icon: <Lightbulb size={28} /> },
    { id: 4, title: 'Nous créons le visuel', icon: <PenTool size={28} /> },
    { id: 5, title: 'Vous validez', icon: <CheckSquare size={28} /> },
    { id: 6, title: 'Livraison finale', icon: <Send size={28} /> }
  ];

  return (
    <section className="py-section">
      <div className={`container animate-on-scroll ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <h2 className="section-title">Comment ça marche ?</h2>
        <p className="section-subtitle">
          Un processus simple, transparent et rapide pour donner vie à vos projets.
        </p>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-item" key={step.id} style={{ transitionDelay: `${index * 0.15}s` }}>
              <div className="step-number">{step.id}</div>
              <div className="step-icon glass-dark">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              {index !== steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
