'use client';

import React, { useState } from 'react';
import { Star, Building2, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/coachingData';

export const SocialProof: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'founders' | 'product' | 'engineering'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredTestimonials = activeCategory === 'all'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter(t => t.category === activeCategory);

  return (
    <section id="case-studies" className="py-14 sm:py-20 lg:py-28 border-b border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Claim */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-medium tracking-wide text-amber-800 dark:text-amber-300">
              02 · Verifiable Impact & Evidence
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-stone-900 dark:text-stone-50 break-words leading-tight">
              Tangible transformation across high-growth ventures.
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-stone-600 dark:text-stone-300 font-light">
              Quantitative results and verified testimonials from C-Suite leaders navigating fundraising, market expansion, and operational pivots.
            </p>
          </div>

          {/* Interactive Segmented Filter Controls (Scroll safe with no-scrollbar) */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/60 dark:bg-stone-800/80 rounded-xl shrink-0 overflow-x-auto no-scrollbar max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-stone-50 text-stone-900 dark:bg-stone-900 dark:text-stone-50 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              All Roles
            </button>
            <button
              onClick={() => setActiveCategory('founders')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === 'founders'
                  ? 'bg-stone-50 text-stone-900 dark:bg-stone-900 dark:text-stone-50 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              Founders & CEOs
            </button>
            <button
              onClick={() => setActiveCategory('product')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === 'product'
                  ? 'bg-stone-50 text-stone-900 dark:bg-stone-900 dark:text-stone-50 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              Product
            </button>
            <button
              onClick={() => setActiveCategory('engineering')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === 'engineering'
                  ? 'bg-stone-50 text-stone-900 dark:bg-stone-900 dark:text-stone-50 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              CTOs & Tech
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredTestimonials.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-stone-200/90 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 p-5 sm:p-7 flex flex-col justify-between hover:border-stone-300 dark:hover:border-stone-700 transition-colors shadow-xs"
              >
                <div className="space-y-4">
                  
                  {/* Top row: 5 Star rating & Metric Banner */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-amber-500 shrink-0">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                      ))}
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-serif font-bold text-stone-900 dark:text-stone-100 font-mono tabular-nums block">
                        {item.metric}
                      </span>
                      <span className="text-2xs text-stone-400 dark:text-stone-500 block">
                        {item.timeframe}
                      </span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-xs sm:text-sm lg:text-base text-stone-700 dark:text-stone-300 leading-relaxed font-serif italic relative break-words">
                    <Quote className="w-4 h-4 text-stone-300 dark:text-stone-700 inline-block mr-1 -mt-1 opacity-70" />
                    {item.quote}
                  </blockquote>

                  {/* Expandable Case Study Detail */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-stone-200/80 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-400 animate-in fade-in duration-200 break-words">
                      <p className="font-medium text-stone-800 dark:text-stone-200 mb-1">
                        Intervention Scope & Deliverables:
                      </p>
                      <p>{item.detailedCase}</p>
                    </div>
                  )}

                </div>

                {/* Profile Signature & Expansion Toggle */}
                <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-stone-200/60 dark:border-stone-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-800 shrink-0">
                      <img 
                        src={item.avatarUrl} 
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-stone-900 dark:text-stone-100 truncate">
                        {item.name}
                      </p>
                      <p className="text-2xs text-stone-500 dark:text-stone-400 flex items-center gap-1 truncate">
                        <Building2 className="w-3 h-3 text-stone-400 shrink-0" />
                        <span className="truncate">{item.role} · {item.company}</span>
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    className="text-xs text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200 flex items-center gap-1 cursor-pointer py-1 shrink-0"
                  >
                    <span>{isExpanded ? "Less" : "Case"}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Corporate Trust Logos */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-stone-200/70 dark:border-stone-800/80 text-center">
          <p className="text-2xs sm:text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-4 font-medium">
            Leaders advised from or backed by premier organizations:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3 text-xs sm:text-sm font-serif font-semibold text-stone-400 dark:text-stone-600">
            <span>GLOBANT</span>
            <span>CABIFY</span>
            <span>SCALE VENTURES</span>
            <span>IE BUSINESS SCHOOL</span>
            <span>MIT REAP</span>
          </div>
        </div>

      </div>
    </section>
  );
};
