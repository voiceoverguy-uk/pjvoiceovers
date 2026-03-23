export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-4">
          Get in Touch
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
          Ready to work together?
        </h2>
        <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto mb-12">
          Whether you need a full voiceover demo, a quote for a project, or just want to ask a
          question, Paul would love to hear from you. Get in touch today for a fast, friendly
          response.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
          <a
            href="tel:07970118818"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-full transition-all duration-200"
          >
            <svg
              className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            07970 118818
          </a>
          <a
            href="mailto:paul@pjvoiceovers.com"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-red-900/30"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            paul@pjvoiceovers.com
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <span>Available for remote sessions</span>
            <span className="text-white/20">|</span>
            <span>Source Connect Ready</span>
            <span className="text-white/20">|</span>
            <span>Fast turnaround</span>
            <span className="text-white/20">|</span>
            <span>UK based</span>
          </div>
        </div>
      </div>
    </section>
  );
}
