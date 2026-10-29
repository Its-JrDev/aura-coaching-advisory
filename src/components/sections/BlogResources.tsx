'use client';

import React, { useState } from 'react';
import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { ARTICLES_DATA } from '../../data/coachingData';
import { Article } from '../../types';
import { Modal } from '../ui/Modal';

export const BlogResources: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="resources" className="py-20 lg:py-28 border-b border-stone-200/80 dark:border-stone-800/80 bg-stone-100/40 dark:bg-stone-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs font-medium tracking-wide text-amber-800 dark:text-amber-300">
            05 · Strategic Essays & Frameworks
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-stone-50">
            Original thinking on leadership and enterprise scale.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-light">
            Concise, battle-tested essays with zero corporate filler. Hard-won principles distilled from hundreds of hours inside boardrooms and high-stakes turnarounds.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES_DATA.map((article) => (
            <article
              key={article.id}
              className="rounded-2xl border border-stone-200/90 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 p-6 sm:p-7 flex flex-col justify-between hover:border-stone-300 dark:hover:border-stone-700 transition-colors shadow-xs group"
            >
              <div className="space-y-4">
                
                {/* Unboxed Metadata Line with separators */}
                <div className="flex items-center gap-2 text-2xs text-stone-500 dark:text-stone-400">
                  <span className="font-medium text-amber-800 dark:text-amber-400">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.date}</span>
                </div>

                {/* Article Headline */}
                <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                  {article.excerpt}
                </p>

              </div>

              {/* Read Action Button */}
              <div className="pt-6 mt-6 border-t border-stone-200/60 dark:border-stone-800">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-xs font-medium text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-300 flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Read full essay
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Interactive Reader Modal */}
      <Modal
        isOpen={selectedArticle !== null}
        onClose={() => setSelectedArticle(null)}
        title={selectedArticle?.title || ""}
        subtitle={selectedArticle ? `${selectedArticle.category} · ${selectedArticle.readTime} · ${selectedArticle.date}` : ""}
        maxWidth="3xl"
      >
        {selectedArticle && (
          <div className="space-y-6 text-stone-800 dark:text-stone-200">
            
            {/* Key Takeaways Box */}
            <div className="p-5 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-900/50 space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200 block">
                Executive Takeaways to Apply Immediately:
              </span>
              <ul className="space-y-2 text-xs text-stone-700 dark:text-stone-300">
                {selectedArticle.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Body Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-stone-700 dark:text-stone-300 font-light">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Reader Footer & Author signature */}
            <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500">
              <span>Authored by Dr. Elena Valenzuela</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-stone-200/70 hover:bg-stone-300/70 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-lg cursor-pointer"
              >
                Close Reading View
              </button>
            </div>

          </div>
        )}
      </Modal>
    </section>
  );
};
