import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import LogoDivider from '@/components/LogoDivider';
import ResultsSection from '@/components/ResultsSection';
import Differentials from '@/components/Differentials';
import HowItWorks from '@/components/HowItWorks';
import Faq from '@/components/Faq';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Amplus Solutions",
    "url": "https://www.amplus.solutions",
    "logo": "https://horizons-cdn.hostinger.com/b617257d-912a-4ff7-8810-6a353dd8a8ba/gemini_generated_image_do1h2jdo1h2jdo1h1-Z4mJ3.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-22-99613-1004",
      "contactType": "sales",
      "areaServed": "BR",
      "availableLanguage": ["Portuguese"],
      "email": "contato@amplussolutions.com.br"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av: Evaldo Costa 588 Sol e Mar",
      "addressLocality": "Macaé",
      "addressRegion": "RJ",
      "addressCountry": "BR"
    },
    "description": "Especialistas em automação de processos para PMEs no Brasil. Aumente sua produtividade e reduza custos com nossas soluções personalizadas."
  };

  return (
    <>
      <Helmet>
        <title>Amplus Solutions - Automação de Processos Empresariais para PMEs</title>
        <meta name="description" content="Especialistas em automação de processos para PMEs no Brasil. Aumente sua produtividade, reduza erros e custos com nossas soluções personalizadas." />
        <meta name="keywords" content="automação de processos, pmes, pequenas e médias empresas, otimização de tempo, redução de erros, aumento de produtividade, software de gestão, erp, crm, brasil" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <LogoDivider />
          <ResultsSection />
          <Differentials />
          <HowItWorks />
          <Faq />
          <ContactForm />
        </main>
        <Footer />
        <ScrollToTopButton />
        <WhatsAppButton phoneNumber="5522996131004" />
        <Toaster />
      </div>
    </>
  );
}

export default App;