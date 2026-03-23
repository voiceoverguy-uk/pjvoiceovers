'use client';

import { useState } from 'react';
import { videoWork } from '@/lib/data';

export default function VideoWork() {
  const [selectedId, setSelectedId] = useState(videoWork[0].id);
  const [playing, setPlaying] = useState(false);

  const selected = videoWork.find((v) => v.id === selectedId) ?? videoWork[0];

  const handleSelect = (id: number) => {
    if (id !== selectedId) {
      setSelectedId(id);
      setPlaying(false);
    }
  };

  return (
    <section id="work" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-4">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            TV and Commercial Credits
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A selection of broadcast commercial and TV campaigns featuring Paul's voiceover work.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Main player */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video shadow-2xl">
              {!playing ? (
                <>
                  <img
                    src={selected.poster}
                    alt={`${selected.title} thumbnail`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={() => setPlaying(true)}
                      aria-label={`Play ${selected.title}`}
                      className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-105"
                    >
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 3l14 9-14 9V3z" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg drop-shadow-lg">
                      {selected.title}
                    </h3>
                    {selected.description && (
                      <p className="text-gray-300 text-sm mt-0.5 drop-shadow">{selected.description}</p>
                    )}
                  </div>
                </>
              ) : selected.youtubeId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selected.youtubeId}?autoplay=1&rel=0`}
                  title={selected.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <video
                  src={selected.video}
                  poster={selected.poster}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  aria-label={selected.title}
                />
              )}
            </div>
          </div>

          {/* Thumbnail sidebar — scrollable */}
          <div className="flex flex-col gap-2 lg:max-h-[430px] overflow-y-auto pr-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 flex-shrink-0">
              All credits ({videoWork.length})
            </p>
            {videoWork.map((video) => (
              <button
                key={video.id}
                onClick={() => handleSelect(video.id)}
                className={`flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all duration-200 flex-shrink-0 ${
                  video.id === selectedId
                    ? 'bg-red-950/30 border-red-700/50'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex-shrink-0 w-14 h-10 rounded-lg overflow-hidden bg-black">
                  <img
                    src={video.poster}
                    alt={`${video.title} thumbnail`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-sm font-medium text-gray-200 leading-tight line-clamp-2 block">
                    {video.title}
                  </span>
                  {video.youtubeId && (
                    <span className="text-xs text-gray-500 mt-0.5 block">YouTube</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
