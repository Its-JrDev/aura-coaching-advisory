import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aura Coaching & Advisory — Executive Leadership & Strategy',
  description: 'Modern, high-performance coaching platform for executive leaders, founders, and high-growth leadership teams.',
  openGraph: {
    title: 'Aura Coaching & Advisory — Executive Leadership & Strategy',
    description: 'Modern, high-performance coaching platform for executive leaders, founders, and high-growth leadership teams.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Aura Advisory',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aura Coaching & Advisory — Executive Leadership & Strategy',
    description: 'Modern, high-performance coaching platform for executive leaders, founders, and high-growth leadership teams.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-stone-50 text-stone-800 antialiased selection:bg-amber-100 selection:text-amber-900 transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
