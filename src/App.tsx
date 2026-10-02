/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { MobileMenu } from './components/MobileMenu';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { About } from './components/About';
import { Founder } from './components/Founder';
import { Services } from './components/Services';
import { Expertise } from './components/Expertise';
import { Industries } from './components/Industries';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { GSTResearchFoundation } from './components/GSTResearchFoundation';
import { Credentials } from './components/Credentials';
import { Insights } from './components/Insights';
import { FAQ } from './components/FAQ';
import { Consultation } from './components/Consultation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { OFFICE_LOCATIONS } from './data/siteData';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [founderPortraitUrl, setFounderPortraitUrl] = useState<string | null>(
    null
  );
  const [preselectedService, setPreselectedService] = useState<string>(
    'GST SCN Management & Appeals'
  );

  const [phonePlaceholder, setPhonePlaceholder] = useState<string>(
    OFFICE_LOCATIONS.defaultPlaceholders.phone
  );
  const [emailPlaceholder, setEmailPlaceholder] = useState<string>(
    OFFICE_LOCATIONS.defaultPlaceholders.email
  );
  const [whatsappPlaceholder, setWhatsappPlaceholder] = useState<string>(
    OFFICE_LOCATIONS.defaultPlaceholders.whatsapp
  );

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'services',
      'expertise',
      'gst-foundation',
      'insights',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectServiceForConsultation = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUpdateContactPlaceholders = (
    phone: string,
    email: string,
    whatsapp: string
  ) => {
    setPhonePlaceholder(phone);
    setEmailPlaceholder(email);
    setWhatsappPlaceholder(whatsapp);
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F4F4F0] flex flex-col">
      <Header
        activeSection={activeSection}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
        onSelectService={handleSelectServiceForConsultation}
      />

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
      />

      <main className="flex-1">
        <Hero
          founderPortraitUrl={founderPortraitUrl}
          onUploadFounderPortrait={setFounderPortraitUrl}
        />

        <TrustStats />

        <About />

        <Founder
          founderPortraitUrl={founderPortraitUrl}
          onUploadFounderPortrait={setFounderPortraitUrl}
        />

        <Services
          onSelectServiceForConsultation={handleSelectServiceForConsultation}
        />

        <Expertise
          onSelectServiceForConsultation={handleSelectServiceForConsultation}
        />

        <Industries />

        <WhyChooseUs />

        <Process />

        <GSTResearchFoundation
          onSelectTrainingInquiry={handleSelectServiceForConsultation}
        />

        <Credentials />

        <Insights />

        <FAQ />

        <Consultation />

        <Contact
          preselectedService={preselectedService}
          phonePlaceholder={phonePlaceholder}
          emailPlaceholder={emailPlaceholder}
          whatsappPlaceholder={whatsappPlaceholder}
          onUpdateContactPlaceholders={handleUpdateContactPlaceholders}
        />
      </main>

      <Footer
        phonePlaceholder={phonePlaceholder}
        emailPlaceholder={emailPlaceholder}
      />
    </div>
  );
}
