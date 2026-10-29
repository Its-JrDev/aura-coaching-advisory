'use client';

import React, { useState } from 'react';
import { CheckCircle, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { READINESS_QUIZ_QUESTIONS } from '../../data/coachingData';

interface ReadinessAssessmentProps {
  onCompleteAssessment: (recommendedProgram: string, contextSummary: string) => void;
}

export const ReadinessAssessment: React.FC<ReadinessAssessmentProps> = ({
  onCompleteAssessment
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { text: string; category: string; score: string }>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleSelectOption = (option: { text: string; category: string; score: string }) => {
    const updated = { ...answers, [currentStep]: option };
    setAnswers(updated);

    if (currentStep < READINESS_QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsFinished(false);
  };

  const getRecommendation = () => {
    const categories = Object.values(answers).map(a => a.category);
    if (categories.includes('enterprise')) {
      return {
        program: "High Performance & Executive Team Alignment",
        tagline: "Recommended for removing executive bottlenecks and aligning leadership committees.",
        timeframe: "Strategic offsite retreat + 90 days integration"
      };
    } else if (categories.includes('career')) {
      return {
        program: "C-Level Transition Sprints (First 100 Days)",
        tagline: "Recommended for securing rapid board credibility and relational authority.",
        timeframe: "100-day accelerated framework / 8 tactical sessions"
      };
    } else if (categories.includes('essential')) {
      return {
        program: "Strategic Clarity Sprint",
        tagline: "Recommended for untangling an urgent strategic dilemma with clear deliverables.",
        timeframe: "30 days / 4 structured intensive sessions"
      };
    } else {
      return {
        program: "1:1 Executive Advisory (Flagship)",
        tagline: "Recommended for comprehensive continuous sparring at the highest strategic altitude.",
        timeframe: "6 or 12 months with encrypted asynchronous hotline"
      };
    }
  };

  const recommendation = isFinished ? getRecommendation() : null;

  return (
    <section id="assessment" className="py-20 lg:py-28 border-b border-stone-200/80 dark:border-stone-800/80 bg-stone-100/50 dark:bg-stone-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="text-xs font-medium tracking-wide text-amber-800 dark:text-amber-300">
            03 · Leadership Maturity Diagnostic
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-stone-50">
            Identify your highest leverage growth point.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 max-w-xl mx-auto font-light">
            Answer 3 strategic questions to receive an instant diagnostic summary and the recommended engagement structure for your current stage.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="rounded-2xl border border-stone-200/90 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 p-6 sm:p-10 shadow-xs">
          {!isFinished ? (
            <div className="space-y-8">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-200 dark:border-stone-800 pb-3">
                <span className="font-mono">Question {currentStep + 1} of {READINESS_QUIZ_QUESTIONS.length}</span>
                <span className="text-amber-800 dark:text-amber-400 font-medium">Confidential Assessment</span>
              </div>

              {/* Question */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-stone-900 dark:text-stone-100">
                  {READINESS_QUIZ_QUESTIONS[currentStep].question}
                </h3>
                <p className="text-xs text-stone-500">Select the option that most accurately reflects your reality:</p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {READINESS_QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option)}
                    className="w-full text-left p-4 sm:p-5 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-amber-600/60 dark:hover:border-amber-500/60 bg-white dark:bg-stone-950/60 hover:bg-amber-50/30 dark:hover:bg-amber-950/20 transition-all duration-150 flex items-start justify-between gap-4 group cursor-pointer"
                  >
                    <span className="text-sm sm:text-base text-stone-800 dark:text-stone-200 font-normal group-hover:text-stone-950 dark:group-hover:text-stone-50">
                      {option.text}
                    </span>
                    <span className="text-xs text-stone-400 group-hover:text-amber-700 dark:group-hover:text-amber-400 shrink-0 mt-0.5">
                      →
                    </span>
                  </button>
                ))}
              </div>

              {/* Navigation Back if needed */}
              {currentStep > 0 && (
                <div className="pt-2">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200 underline cursor-pointer"
                  >
                    ← Back to previous question
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6 text-center sm:text-left animate-in fade-in duration-300">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/60">
                <Sparkles className="w-3.5 h-3.5" />
                Diagnostic Complete
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-50">
                  Recommended Format: {recommendation?.program}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-300 font-light max-w-xl">
                  {recommendation?.tagline}
                </p>
              </div>

              {/* Summary of answers */}
              <div className="p-4 sm:p-5 rounded-xl bg-stone-100 dark:bg-stone-950/70 border border-stone-200 dark:border-stone-800 text-left space-y-3">
                <span className="text-xs font-medium text-stone-500 block uppercase tracking-wider">
                  Your Primary Focus Areas:
                </span>
                <ul className="space-y-2 text-xs text-stone-700 dark:text-stone-300">
                  {Object.values(answers).map((ans, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                      <span>{ans.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => {
                    if (recommendation) {
                      const summary = Object.values(answers).map(a => a.score).join(' · ');
                      onCompleteAssessment(recommendation.program, summary);
                    }
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-stone-50 bg-stone-900 rounded-xl hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white active:scale-[0.98] transition-all shadow-sm cursor-pointer whitespace-nowrap gap-2"
                >
                  Schedule Call with this Diagnostic
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center justify-center px-4 py-3 text-xs font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 transition-colors cursor-pointer gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Retake assessment
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
