'use client';

import React, { useState } from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { PRICING_DATA } from '../../data/coachingData';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'sprint'>('quarterly');

  return (
    <section id="pricing" className="py-14 sm:py-20 lg:py-28 border-b border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-8 sm:mb-10">
          <div className="text-xs font-medium tracking-wide text-amber-800 dark:text-amber-300">
            04 · Transparent Investment & Advisory Retainers
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 dark:text-stone-50 break-words leading-tight">
            Aligned incentives with zero hidden retainers.
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-stone-600 dark:text-stone-300 font-light">
            Structures designed for absolute high-altitude leverage. Every executive partnership comes backed with a 30-day full value guarantee.
          </p>
        </div>

        {/* Billing Cycle Switcher (Scroll-safe with no-scrollbar) */}
        <div className="flex items-center justify-start mb-10 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="inline-flex items-center gap-1 p-1 bg-stone-200/60 dark:bg-stone-800/80 rounded-xl shrink-0">
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-3 sm:px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                billingCycle === 'quarterly'
                  ? 'bg-stone-50 text-stone-900 dark:bg-stone-900 dark:text-stone-50 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              Quarterly (Save 12%)
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-3 sm:px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                billingCycle === 'monthly'
                  ? 'bg-stone-50 text-stone-900 dark:bg-stone-900 dark:text-stone-50 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              Monthly Retainer
            </button>
            <button
              onClick={() => setBillingCycle('sprint')}
              className={`px-3 sm:px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                billingCycle === 'sprint'
                  ? 'bg-stone-50 text-stone-900 dark:bg-stone-900 dark:text-stone-50 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              Closed Sprint
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_DATA.map((plan) => {
            const price = billingCycle === 'quarterly' 
              ? plan.quarterlyPrice 
              : billingCycle === 'monthly' 
                ? plan.monthlyPrice 
                : plan.sprintPrice;

            const periodLabel = billingCycle === 'quarterly' 
              ? '/ quarter' 
              : billingCycle === 'monthly' 
                ? '/ month' 
                : 'flat (Sprint)';

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-5 sm:p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                  plan.popular
                    ? 'border-2 border-amber-600/80 dark:border-amber-500/80 bg-stone-50 dark:bg-stone-900 shadow-md relative'
                    : 'border border-stone-200/90 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 shadow-xs'
                }`}
              >
                {/* Popular Notice without pill */}
                {plan.popular && (
                  <div className="text-2xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-2">
                    Flagship Partnership Program
                  </div>
                )}

                <div className="space-y-5">
                  {/* Plan Name & Tagline */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-50 break-words">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-xs text-stone-500 dark:text-stone-400 leading-relaxed font-light">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price display with tabular numerals */}
                  <div className="pt-2 pb-3 border-b border-stone-200/80 dark:border-stone-800">
                    <div className="flex items-baseline gap-1.5 font-mono flex-wrap">
                      <span className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 tabular-nums">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-xs text-stone-500 dark:text-stone-400 font-sans">
                        {periodLabel}
                      </span>
                    </div>
                    <p className="text-2xs text-stone-400 mt-1">Exclusive of local jurisdictional VAT/Taxes</p>
                  </div>

                  {/* Target Profile */}
                  <div className="text-xs text-stone-600 dark:text-stone-300">
                    <span className="font-semibold text-stone-900 dark:text-stone-100 block mb-1">
                      Ideal Profile:
                    </span>
                    <p className="font-light leading-relaxed">{plan.idealFor}</p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-stone-900 dark:text-stone-100 block">
                      Core Inclusions:
                    </span>
                    <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-300">
                      {plan.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                          <span className="break-words">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-stone-200/70 dark:border-stone-800">
                  <button
                    onClick={() => onSelectPlan(`${plan.name} (${billingCycle})`)}
                    className={`w-full py-3 px-4 text-xs font-medium rounded-xl transition-all cursor-pointer text-center ${
                      plan.popular
                        ? 'bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white shadow-xs'
                        : 'bg-stone-200/70 text-stone-800 hover:bg-stone-300/70 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-4 text-left">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center shrink-0 text-amber-800 dark:text-amber-300">
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100">
              30-Day Full Value Money-Back Guarantee
            </h4>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              If following our initial month of joint sessions you do not experience at least a 10x strategic return on your time and investment, we will issue a full 100% refund with zero interrogations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
