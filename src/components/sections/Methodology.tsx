import React from 'react';
import { Compass, GitMerge, ShieldAlert, TrendingUp } from 'lucide-react';

export const Methodology: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Confidential Leadership & Friction Audit",
      description: "We map where executive attention dissipates: redundant meetings, approval bottlenecks, hesitation under risk, and delegation voids.",
      icon: Compass
    },
    {
      num: "02",
      title: "Governance Calibration & Decision Filters",
      description: "We establish crystal-clear operating matrices so senior managers resolve 80% of cross-departmental friction without requiring CEO intervention.",
      icon: GitMerge
    },
    {
      num: "03",
      title: "Strategic Sparring & Constructive Pressure",
      description: "Dedicated sessions where we stress-test capital assumptions, simulate tough board questioning, and dismantle subconscious confirmation biases.",
      icon: ShieldAlert
    },
    {
      num: "04",
      title: "Cognitive Sovereignty & Sustainable Scale",
      description: "Shielding the founder's mental energy and sleep hygiene against chronic burnout, ensuring corporate growth rests on sustainable psychological bedrock.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="methodology" className="py-20 lg:py-28 border-b border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="text-xs font-medium tracking-wide text-amber-800 dark:text-amber-300">
            Methodology · Tactical Rigor Without Superficial Formulas
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-stone-50">
            A proven 4-stage strategic intervention cycle.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-light">
            We avoid generic psychological tests or contrived workshops. We immerse ourselves directly into the reality of your balance sheet and boardroom tensions.
          </p>
        </div>

        {/* 4 Steps Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-stone-200/90 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 p-6 sm:p-7 flex flex-col justify-between hover:border-stone-300 dark:hover:border-stone-700 transition-colors shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-amber-800 dark:text-amber-400">
                      {s.num}.
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-serif font-semibold text-stone-900 dark:text-stone-100 leading-snug">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-200/60 dark:border-stone-800 text-2xs text-stone-400">
                  Stage {index + 1} of 4
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
