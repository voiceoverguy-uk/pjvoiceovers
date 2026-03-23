'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { audioDemos, AudioDemo } from '@/lib/data';

function formatTime(secs: number): string {
  if (!isFinite(secs) || isNaN(secs)) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function AudioCard({
  demo,
  isActive,
  onPlay,
}: {
  demo: AudioDemo;
  isActive: boolean;
  onPlay: (id: number) => void;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isActive && playing) {
      audioRef.current?.pause();
      setPlaying(false);
    }
  }, [isActive, playing]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      onPlay(demo.id);
      setLoading(true);
      audio.play().then(() => {
        setPlaying(true);
        setLoading(false);
      }).catch(() => setLoading(false));
    }
  }, [playing, onPlay, demo.id]);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) setCurrentTime(audio.currentTime);
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) setDuration(audio.duration);
    setLoading(false);
  };

  const handleEnded = () => {
    setPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) audioRef.current.currentTime = 0;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const val = parseFloat(e.target.value);
    audio.currentTime = val;
    setCurrentTime(val);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <article
      className={`group relative rounded-2xl border transition-all duration-300 p-5 ${
        isActive && playing
          ? 'bg-red-950/30 border-red-700/50 shadow-lg shadow-red-900/20'
          : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20'
      }`}
    >
      <audio
        ref={audioRef}
        src={demo.file}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onWaiting={() => setLoading(true)}
        onCanPlay={() => setLoading(false)}
      />

      <div className="flex items-start gap-4">
        {/* Play button */}
        <button
          onClick={togglePlay}
          aria-label={playing ? `Pause ${demo.title}` : `Play ${demo.title}`}
          className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${
            playing
              ? 'bg-red-600 hover:bg-red-700'
              : 'bg-white/10 hover:bg-red-600 group-hover:bg-red-600/80'
          }`}
        >
          {loading ? (
            <svg className="w-4 h-4 text-white animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          ) : playing ? (
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          {/* Category + title */}
          <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
            {demo.category}
          </span>
          <h3 className="text-white font-semibold text-sm md:text-base leading-snug mt-0.5 mb-3">
            {demo.title}
          </h3>

          {/* Progress bar */}
          <div className="relative">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-1.5">
              <div
                className="h-full bg-red-600 rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-valuenow={Math.round(progress)}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <input
              type="range"
              min={0}
              max={duration || 100}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              className="audio-progress absolute inset-0 opacity-0 cursor-pointer w-full"
              aria-label={`Seek ${demo.title}`}
            />
          </div>

          {/* Time */}
          <div className="flex justify-between text-xs text-gray-500">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function AudioDemos() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handlePlay = useCallback((id: number) => {
    setActiveId(id);
  }, []);

  return (
    <section id="demos" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-4">
            Listen
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Audio Demo Reels
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Seven demos showcasing the full range: commercial, narration, character, accents and
            audio drama.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {audioDemos.map((demo) => (
            <AudioCard
              key={demo.id}
              demo={demo}
              isActive={activeId === demo.id}
              onPlay={handlePlay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
