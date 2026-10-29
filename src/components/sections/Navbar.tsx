'use client';

import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { ThemeMode } from '../../types';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Methodology", href: "#methodology" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Advisory Plans", href: "#pricing" },
    { label: "Essays", href: "#resources" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-3 sm:gap-8">
        
        {/* Zone 1: Single text wordmark */}
        <a 
          href="#" 
          className="text-lg sm:text-2xl font-serif font-bold tracking-tight text-stone-900 dark:text-stone-50 truncate hover:opacity-90 transition-opacity"
        >
          Aura Advisory
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-stone-600 dark:text-stone-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 hover:text-stone-950 dark:hover:text-white transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 dark:bg-amber-400 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 dark:text-stone-300 dark:hover:text-white dark:hover:bg-stone-800 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-stone-700" />}
          </button>

          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-medium text-stone-50 bg-stone-900 rounded-lg hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white active:scale-[0.98] transition-all whitespace-nowrap shadow-xs cursor-pointer"
          >
            Book a Call
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-stone-700 dark:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 px-5 py-4 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-stone-700 dark:text-stone-200 hover:text-stone-950 dark:hover:text-white transition-colors py-1.5"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-xs font-medium text-center text-stone-50 bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-lg cursor-pointer"
            >
              Schedule Discovery Session
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
