'use client';

import { studioFeatures } from '@/lib/data';

const featureIcons = [
  // Microphone
  <svg key="mic" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>,
  // Clock
  <svg key="clock" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Signal
  <svg key="signal" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>,
  // Download
  <svg key="download" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
  </svg>,
  // Video
  <svg key="video" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>,
];

export default function Studio() {
  return (
    <section id="studio" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-4">
              The Studio
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Professional kit. Fast delivery.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Paul records from a fully acoustically treated home studio equipped with
              broadcast-quality microphones and audio interfaces. Whatever your format or
              deadline, he has the tools and expertise to deliver.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-colors duration-200 text-sm"
            >
              Request a Quote
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {studioFeatures.map((feature, i) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-600/15 border border-red-600/20 flex items-center justify-center text-red-400">
                  {featureIcons[i]}
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
