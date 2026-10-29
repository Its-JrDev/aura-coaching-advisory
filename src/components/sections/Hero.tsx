'use client';

import React from 'react';
import { ArrowRight, Calendar, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COACH_PROFILE } from '../../data/coachingData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenAssessment }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-stone-200/80 dark:border-stone-800/80">
      {/* Subtle warm ambient illumination */}
      <div className="absolute top-0 right-1/4 -z-10 w-72 sm:w-96 h-72 sm:h-96 bg-amber-100/40 dark:bg-amber-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-60 sm:w-80 h-60 sm:h-80 bg-stone-200/50 dark:bg-stone-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Column 1: Typography & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Unboxed Metadata Kicker (Anti-slop zero-pill, flex-wrap for mobile safe) */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium tracking-wide text-amber-800 dark:text-amber-300">
              <span>Boutique C-Suite Advisory</span>
              <span aria-hidden="true">·</span>
              <span>London & Madrid</span>
              <span aria-hidden="true">·</span>
              <span>Limited Q1-Q2 Cohorts</span>
            </div>

            {/* Display Headline: Balanced, mobile-friendly size */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-[1.16] break-words">
              Lucid leadership for founders and executives at critical inflection points.
            </h1>

            {/* Empathetic Subtext */}
            <p className="text-base sm:text-lg lg:text-xl text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl font-light break-words">
              A private, high-altitude sparring arena to navigate multi-million capital allocations, eliminate executive boardroom friction, and scale your organization without losing mental health or clarity.
            </p>

            {/* CTA Group: Full-width on mobile, auto on desktop */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-medium text-stone-50 bg-stone-900 rounded-xl hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white active:scale-[0.98] transition-all shadow-sm cursor-pointer gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-400 dark:text-amber-600 shrink-0" />
                <span>Schedule Discovery Session</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                onClick={onOpenAssessment}
                className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-3 text-xs sm:text-sm font-medium text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 bg-stone-100/60 dark:bg-stone-900/60 rounded-xl hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-colors cursor-pointer gap-1.5"
              >
                <span>Leadership Maturity Quiz (2 min)</span>
              </button>
            </div>

            {/* Trust and accreditation indicators */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs text-stone-500 dark:text-stone-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
                Strict Non-Disclosure Agreement (NDA)
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
                Master Certified Coach (ICF) & Ex-VP Globant
              </span>
            </div>

          </div>

          {/* Column 2: Coach Identity & Visual Presence (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-stone-200/90 dark:border-stone-800 bg-gradient-to-b from-stone-100/80 to-stone-50 dark:from-stone-900/80 dark:to-stone-950 p-5 sm:p-7 lg:p-8 shadow-sm">
              
              <div className="space-y-5">
                
                {/* Profile Header */}
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden shrink-0 border border-stone-300 dark:border-stone-700 bg-stone-200 dark:bg-stone-800 shadow-inner">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80" 
                      alt="Dr. Elena Valenzuela, Executive Consultant & Master Certified Coach"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900 dark:text-stone-100 truncate">
                      {COACH_PROFILE.name}
                    </h2>
                    <p className="text-xs font-medium text-amber-800 dark:text-amber-300 mt-0.5">
                      {COACH_PROFILE.role}
                    </p>
                    <p className="text-2xs sm:text-xs text-stone-500 dark:text-stone-400 mt-1 leading-snug line-clamp-2">
                      {COACH_PROFILE.credential}
                    </p>
                  </div>
                </div>

                {/* Core Philosophy Quote */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40">
                  <p className="text-xs sm:text-sm italic text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
                    &ldquo;{COACH_PROFILE.philosophy}&rdquo;
                  </p>
                </div>

                {/* Methodology Highlights */}
                <div className="space-y-2 text-xs text-stone-600 dark:text-stone-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>Zero generic dogma: resolving actual operational friction</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>Encrypted asynchronous hotline for high-stakes decision support</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>Strict cap of 8 concurrent advisory seats per quarter</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-200/70 dark:border-stone-800 flex items-center justify-between text-2xs sm:text-xs text-stone-500">
                  <span>Upcoming cohort availability:</span>
                  <span className="font-medium text-stone-800 dark:text-stone-200">2 seats remaining</span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Full-width Credibility KPIs Strip Directly Below Split */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-stone-200 dark:border-stone-800/80 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {COACH_PROFILE.metrics.map((m, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 dark:text-stone-50 font-mono tabular-nums">
                {m.value}
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-normal leading-snug">
                {m.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
