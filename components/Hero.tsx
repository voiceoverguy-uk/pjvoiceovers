'use client';

import { siteConfig } from '@/lib/data';

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-6">
          {hero.subheadline}
        </p>
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-none mb-6">
          PJ
          <br />
          <span className="text-red-500">Voiceovers</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
          {hero.body}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#demos"
            onClick={(e) => handleSmoothScroll(e, '#demos')}
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full text-base transition-all duration-200 shadow-lg shadow-red-900/30 hover:shadow-red-900/50"
          >
            Listen to Demos
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full text-base transition-all duration-200 border border-white/20 backdrop-blur-sm"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
