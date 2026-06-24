import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "Zenith Vision",
    "image": "https://zenithvision.bf/assets/logo/logo%20ZENITH.png",
    "telephone": "+226 65 41 48 99",
    "email": "abdousalamkoanda@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ouagadougou",
      "addressCountry": "BF"
    },
    "description": "Agence de communication visuelle basée à Ouagadougou spécialisée dans la création de kakemonos, affiches publicitaires, vidéos promotionnelles et design graphique.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50"
    }
  };

  return (
    <HelmetProvider>
      <div className="app">
        <Helmet>
          <title>Zenith Vision | Agence de Communication Visuelle au Burkina Faso</title>
          <meta name="description" content="Zenith Vision est une agence de communication basée à Ouagadougou spécialisée dans la création de kakemonos, affiches publicitaires, vidéos promotionnelles et design graphique." />
          <meta name="keywords" content="Zenith Vision, kakemono Burkina Faso, affiche publicitaire Burkina Faso, vidéo publicitaire Burkina Faso, design graphique Ouagadougou, agence de communication Burkina Faso" />
          <meta property="og:title" content="Zenith Vision | Agence de Communication Visuelle" />
          <meta property="og:description" content="Boostez la visibilité de votre entreprise avec des créations professionnelles au Burkina Faso." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/assets/logo/logo ZENITH.png" />
          <meta name="theme-color" content="#0D1B3E" />
          
          {/* Schema.org for SEO */}
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
        </Helmet>

        <Navbar />
        
        <main>
          <Hero />
          <Stats />
          <Marquee />
          <Services />
          <Portfolio />
          <Testimonials />
          <WhyChooseUs />
          <HowItWorks />
          <FAQ />
          <CTA />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
        <FloatingWhatsApp />
      </div>
    </HelmetProvider>
  );
}

export default App;
