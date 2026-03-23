import { siteConfig } from '@/lib/data';

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-4">
              {about.sectionLabel}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              {about.heading}
            </h2>
            {about.paragraphs.map((para, i) => (
              <p key={i} className="text-gray-400 text-lg leading-relaxed mb-5 last:mb-0">
                {para}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
              >
                <p className="text-3xl font-black text-red-500 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
