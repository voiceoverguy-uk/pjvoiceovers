export interface AudioDemo {
  id: number;
  title: string;
  category: string;
  file: string;
}

export interface VideoWork {
  id: number;
  title: string;
  video: string;
  poster: string;
}

export const audioDemos: AudioDemo[] = [
  {
    id: 1,
    title: 'UK Male Commercial Voiceover Demo',
    category: 'Commercial',
    file: '/audio/pj-commercial-voiceover-demo.mp3',
  },
  {
    id: 2,
    title: 'Commercial Voice Reel 2',
    category: 'Commercial',
    file: '/audio/commercial-voice-reel-2-pj-voiceovers.mp3',
  },
  {
    id: 3,
    title: 'BIG Announcer Voice',
    category: 'Announcer',
    file: '/audio/big-voice-pj-example.mp3',
  },
  {
    id: 4,
    title: 'Welsh Accent Showreel',
    category: 'Accents',
    file: '/audio/welsh-accent-showreel.mp3',
  },
  {
    id: 5,
    title: 'Narration - Warm Friendly',
    category: 'Narration',
    file: '/audio/pj-narration-example.mp3',
  },
  {
    id: 6,
    title: 'Audio Drama Demo (with Alexander Vlahos)',
    category: 'Audio Drama',
    file: '/audio/big-finish-pj-acting-demo.mp3',
  },
  {
    id: 7,
    title: 'Quick Fire Character Demo',
    category: 'Character',
    file: '/audio/pj-character-demo.mp3',
  },
];

export const videoWork: VideoWork[] = [
  {
    id: 1,
    title: 'Lego Movie DVD Legoland Trail',
    video: '/videos/lego-legoland-trail.mp4',
    poster: '/posters/legoland.jpg',
  },
  {
    id: 2,
    title: 'Twix TV Commercial',
    video: '/videos/twix-tv-commercial.mp4',
    poster: '/posters/twix.jpg',
  },
  {
    id: 3,
    title: "Moonpig Father's Day TVC",
    video: '/videos/moonpig-fathers-day.mp4',
    poster: '/posters/moonpig.jpg',
  },
  {
    id: 4,
    title: 'Virgin Trains - Train vs Plane',
    video: '/videos/virgin-trains-train-vs-plane.mp4',
    poster: '/posters/virgin-trains.png',
  },
];

export const services = [
  {
    id: 1,
    title: 'Commercials',
    description: 'Radio, TV and digital ads that connect with audiences and drive results.',
    icon: 'M',
  },
  {
    id: 2,
    title: 'Narration',
    description: 'Clear, engaging narration for documentaries, explainers, and brand films.',
    icon: 'N',
  },
  {
    id: 3,
    title: 'E-learning',
    description: 'Warm, authoritative voices that make learning accessible and enjoyable.',
    icon: 'E',
  },
  {
    id: 4,
    title: 'Character Voices',
    description: 'A wide range of distinct character voices for animation and games.',
    icon: 'C',
  },
  {
    id: 5,
    title: 'Audio Drama',
    description: 'Immersive performances for audio dramas, audiobooks and podcasts.',
    icon: 'A',
  },
  {
    id: 6,
    title: 'Accents and Impressions',
    description: 'Authentic regional accents and character impressions done right.',
    icon: 'I',
  },
];

export const studioFeatures = [
  {
    title: 'Professional Home Studio',
    description: 'Acoustically treated recording space with broadcast-quality equipment.',
  },
  {
    title: 'Fast Turnaround',
    description: 'Most projects delivered within 24 hours of receiving your script.',
  },
  {
    title: 'Source Connect Ready',
    description: 'Record remotely in real time via Source Connect Standard and Now.',
  },
  {
    title: 'MP3 and WAV Delivery',
    description: 'Files delivered in your preferred format, ready for post-production.',
  },
  {
    title: 'Remote Recording Available',
    description: 'Zoom, Cleanfeed, ipDTL and phone patch sessions all available.',
  },
];
