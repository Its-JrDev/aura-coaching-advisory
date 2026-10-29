'use client';

import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Methodology } from './components/sections/Methodology';
import { SocialProof } from './components/sections/SocialProof';
import { ReadinessAssessment } from './components/sections/ReadinessAssessment';
import { Pricing } from './components/sections/Pricing';
import { BlogResources } from './components/sections/BlogResources';
import { BookingSection } from './components/sections/BookingSection';
import { Footer } from './components/sections/Footer';
import { Modal } from './components/ui/Modal';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('aura-theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return 'light';
    }
    return 'light';
  });

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("1:1 Executive Advisory");
  const [assessmentContext, setAssessmentContext] = useState("");

  // Sync theme with HTML document class & body attribute
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
      body.classList.add('dark');
      body.style.backgroundColor = '#0c0a09'; // stone-950
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.style.colorScheme = 'light';
      body.classList.remove('dark');
      body.style.backgroundColor = '#fafaf9'; // stone-50
    }
    
    localStorage.setItem('aura-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOpenBooking = (program?: string, context?: string) => {
    if (program) setSelectedProgram(program);
    if (context) setAssessmentContext(context);
    setBookingModalOpen(true);
  };

  const handleAssessmentComplete = (recommendedProgram: string, contextSummary: string) => {
    setSelectedProgram(recommendedProgram);
    setAssessmentContext(contextSummary);
    setBookingModalOpen(true);
  };

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-100 transition-colors duration-200`}>
      
      {/* 3-Zone Top Bar Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenAssessment={() => {
            const el = document.getElementById('assessment');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Services & Core Capabilities (Asymmetric Bento Grid) */}
        <Services
          onSelectProgramForBooking={(programName) => handleOpenBooking(programName)}
        />

        {/* 4-Step Strategic Methodology */}
        <Methodology />

        {/* Social Proof & Verifiable Case Studies */}
        <SocialProof />

        {/* Interactive Leadership Diagnostic Assessment */}
        <ReadinessAssessment
          onCompleteAssessment={handleAssessmentComplete}
        />

        {/* Pricing & Investment Packages */}
        <Pricing
          onSelectPlan={(planName) => handleOpenBooking(planName)}
        />

        {/* Blog / Strategic Essays & Reader */}
        <BlogResources />

        {/* Dedicated Embedded Booking Section */}
        <BookingSection
          initialProgram={selectedProgram}
          initialChallenge={assessmentContext}
        />
      </main>

      {/* Footer with Creator Credit */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Standalone Booking Modal (Triggered by CTAs across the app) */}
      <Modal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        title="Schedule Discovery Session"
        subtitle="Confidential 45-minute direct advisory session with Dr. Elena Valenzuela"
        maxWidth="3xl"
      >
        <BookingSection
          isModal={true}
          initialProgram={selectedProgram}
          initialChallenge={assessmentContext}
          onSuccess={() => {
            // keep open on confirmation screen
          }}
        />
      </Modal>

    </div>
  );
}
