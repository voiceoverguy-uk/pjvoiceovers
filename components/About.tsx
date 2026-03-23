export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-4">
              About Paul
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              The voice behind the brand
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-5">
              Paul Jones is an award-winning British male voiceover artist with over 15 years of
              professional experience. Based in the UK with a fully equipped home studio, Paul
              delivers broadcast-quality recordings with a fast turnaround for clients around the world.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-5">
              From TV and radio commercials to corporate narration, e-learning modules, character
              voices and audio drama, Paul brings versatility, professionalism and genuine warmth
              to every project.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              His credits include campaigns for major brands, drama productions for Big Finish, and
              voiceover work heard across the UK and internationally.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Delivered' },
              { value: '24hr', label: 'Typical Turnaround' },
              { value: 'Award', label: 'Winning Artist' },
            ].map((stat) => (
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
