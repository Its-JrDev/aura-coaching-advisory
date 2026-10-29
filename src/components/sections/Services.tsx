'use client';

import React, { useState } from 'react';
import { ArrowRight, Check, Clock, Users, Target, Sparkles, ChevronRight } from 'lucide-react';
import { SERVICES_DATA } from '../../data/coachingData';
import { ServiceProgram } from '../../types';
import { Modal } from '../ui/Modal';

interface ServicesProps {
  onSelectProgramForBooking: (programName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectProgramForBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceProgram | null>(null);

  return (
    <section id="services" className="py-14 sm:py-20 lg:py-28 border-b border-stone-200/80 dark:border-stone-800/80 bg-stone-100/40 dark:bg-stone-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="text-xs font-medium tracking-wide text-amber-800 dark:text-amber-300">
            01 · Strategic Advisory Programs
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-stone-900 dark:text-stone-50 break-words leading-tight">
            Interventions calibrated for your organization's exact maturity stage.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-stone-600 dark:text-stone-300 font-light leading-relaxed">
            Zero canned corporate curriculum. Every partnership merges analytical rigor, governance architectures, and high-velocity strategic sparring.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isMarquee = service.featured || index === 0;
            const colSpanClass = isMarquee ? "lg:col-span-7" : (index === 1 ? "lg:col-span-5" : "lg:col-span-6");

            return (
              <div
                key={service.id}
                className={`${colSpanClass} rounded-2xl border border-stone-200/90 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 p-5 sm:p-7 sm:p-8 flex flex-col justify-between hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-200 shadow-xs group`}
              >
                <div className="space-y-5">
                  {/* Human Editorial Numbering & Audience */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-serif text-2xl font-bold text-amber-800 dark:text-amber-400">
                      {service.number}.
                    </span>
                    <span className="text-2xs sm:text-xs text-stone-500 dark:text-stone-400 tracking-wide text-right truncate">
                      {service.audience}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors break-words">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Format & Duration Meta */}
                  <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-2xs sm:text-xs text-stone-500 dark:text-stone-400 border-t border-stone-200/60 dark:border-stone-800/80">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      {service.duration}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      {service.format}
                    </span>
                  </div>

                  {/* Concrete Outcomes */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-stone-900 dark:text-stone-200">
                      Measurable transformation outcomes:
                    </p>
                    <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-300">
                      {service.outcomes.slice(0, 3).map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                          <span className="break-words">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons (Responsive stacking on small mobile) */}
                <div className="pt-5 mt-5 border-t border-stone-200/60 dark:border-stone-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-medium text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 flex items-center justify-center sm:justify-start gap-1 cursor-pointer transition-colors py-1"
                  >
                    <span>Inspect Program Syllabus</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectProgramForBooking(service.title)}
                    className="text-xs font-medium text-stone-900 dark:text-stone-100 hover:text-amber-700 dark:hover:text-amber-300 flex items-center justify-center sm:justify-start gap-1.5 cursor-pointer transition-colors py-1"
                  >
                    <span>Check Availability</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Program Detailed Inspection Modal */}
      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ""}
        subtitle={selectedService ? `${selectedService.audience} · ${selectedService.duration}` : ""}
        maxWidth="2xl"
      >
        {selectedService && (
          <div className="space-y-5 text-sm text-stone-700 dark:text-stone-300">
            <p className="text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed font-serif">
              {selectedService.description}
            </p>

            <div className="p-4 rounded-xl bg-stone-100/80 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/60 space-y-2">
              <span className="text-2xs sm:text-xs font-semibold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
                Engagement Framework
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-stone-500 dark:text-stone-400">Time Commitment:</span>
                  <p className="font-medium text-stone-900 dark:text-stone-100">{selectedService.duration}</p>
                </div>
                <div>
                  <span className="text-stone-500 dark:text-stone-400">Structure:</span>
                  <p className="font-medium text-stone-900 dark:text-stone-100">{selectedService.format}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider mb-2.5">
                Key Strategic Modules & Deliverables
              </h4>
              <ul className="space-y-2">
                {selectedService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-600 dark:text-stone-300">
                    <Sparkles className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span className="break-words">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider mb-2.5">
                Quantitative Impact Target
              </h4>
              <ul className="space-y-2">
                {selectedService.outcomes.map((outc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-600 dark:text-stone-300">
                    <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="break-words">{outc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-medium text-stone-600 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800 rounded-lg cursor-pointer text-center"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectProgramForBooking(title);
                }}
                className="px-5 py-2.5 text-xs font-medium text-stone-50 bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-lg hover:bg-stone-800 dark:hover:bg-white cursor-pointer text-center"
              >
                Inquire for this Program
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
