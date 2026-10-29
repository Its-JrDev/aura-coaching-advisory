'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Shield } from 'lucide-react';
import { Modal } from '../ui/Modal';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <footer className="border-t border-stone-200/90 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-950 py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Editorial Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-xl font-serif font-bold text-stone-900 dark:text-stone-50">
              Aura Advisory
            </span>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-light leading-relaxed max-w-sm">
              Boutique executive advisory practice specializing in corporate governance, leadership architecture, and high-altitude strategic sparring for CEOs and scaleup leadership teams.
            </p>
            <div className="pt-2 text-xs text-stone-500 dark:text-stone-400 space-y-1">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                London & Madrid · In-person retreats and global confidential remote
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-stone-400" />
                partners@aura-advisory.com
              </p>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-400">
              <li>
                <a href="#services" className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors">
                  Advisory Programs
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors">
                  Intervention Methodology
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors">
                  Client Case Studies
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors">
                  Investment Retainers
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors">
                  Strategic Essays
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Action (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100">
              Executive Admissions
            </span>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-light">
              Cohort admissions for our flagship 1:1 advisory are evaluated on a rolling basis to preserve rigorous individual attention for each client.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-4.5 py-2.5 text-xs font-medium text-stone-50 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white rounded-lg cursor-pointer transition-colors"
              >
                Inquire for Discovery Session
              </button>
            </div>
          </div>

        </div>

        {/* Sub-Footer with Author Credit and Legal */}
        <div className="pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p>
              © {new Date().getFullYear()} Aura Advisory Partners Ltd. All rights reserved.
            </p>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <p>
              Crafted by{' '}
              <a
                href="https://its-jr.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-stone-800 dark:text-stone-200 hover:text-amber-700 dark:hover:text-amber-400 underline underline-offset-2 transition-colors"
              >
                Jose D. Romero
              </a>
            </p>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors cursor-pointer"
            >
              NDA & Confidentiality Notice
            </button>
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>

      </div>

      {/* Legal & Privacy Modal */}
      <Modal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        title="Mutual Confidentiality & NDA Charter"
        subtitle="Aura Advisory Partners Ltd."
        maxWidth="xl"
      >
        <div className="space-y-4 text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-light">
          <p>
            At Aura Advisory, we recognize that all matters discussed during executive advisory engagements—including financial disclosures, board friction, capital rounds, restructuring, or personal dilemmas—are of the highest confidentiality.
          </p>
          <div className="p-3.5 rounded-xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700/60 space-y-1">
            <span className="font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
              Mutual Legal Non-Disclosure Agreement (NDA)
            </span>
            <p>
              Prior to commencing any advisory agreement, a binding mutual NDA is formalized with legal penalties protecting all trade secrets and organizational information.
            </p>
          </div>
          <p>
            Client details submitted via this calendar are utilized solely to coordinate the strategic discovery session and are never sold or transmitted to third parties (fully compliant with GDPR and international data standards).
          </p>
          <div className="pt-2 text-right">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="px-4 py-2 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 rounded-lg text-xs font-medium cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>

    </footer>
  );
};
