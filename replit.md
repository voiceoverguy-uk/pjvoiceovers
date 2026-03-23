# PJ Voiceovers Website

## Project Overview

A complete single-page website for PJ Voiceovers (Paul Jones), a British male voiceover artist. Built with Next.js 14, React 19, TypeScript, and Tailwind CSS v3. Dark premium theme with red accent colour, replacing an old WordPress site.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Runtime**: Node.js 22
- **Deployment target**: Vercel (standalone output)

## Project Structure

```
app/
  layout.tsx         - Root layout with SEO metadata, JSON-LD schema, Google Fonts
  page.tsx           - Main page assembling all sections
  globals.css        - Tailwind base + global styles + audio player styles

components/
  Header.tsx         - Sticky responsive navigation with mobile hamburger
  Hero.tsx           - Full-screen hero with headline, subheadline, two CTAs
  About.tsx          - Two-column about section with stats grid
  AudioDemos.tsx     - Custom audio player cards, only one plays at a time
  VideoWork.tsx      - Featured video player with selectable thumbnail list
  Services.tsx       - 6-card services grid with SVG icons
  Studio.tsx         - Studio features list with icons
  Contact.tsx        - CTA section with click-to-call and mailto links
  Footer.tsx         - Simple footer with contact links

lib/
  data.ts            - All content data: audioDemos, videoWork, services, studioFeatures

public/
  audio/             - 7 MP3 demo files (copied from attached_assets)
```

## Key Sections (Single Page)

1. Sticky header with smooth scroll navigation
2. Hero - PJ Voiceovers headline, British Male Voiceover Artist subheadline
3. About - Paul Jones bio with stats (15+ years, 500+ projects, 24hr turnaround)
4. Audio Demo Reels - 7 custom styled audio players, one plays at a time
5. TV and Commercial Credits - Featured video player with 4 external videos
6. Services - 6 cards (Commercials, Narration, E-learning, Characters, Drama, Accents)
7. Studio - 5 feature items (Home Studio, Fast Turnaround, Source Connect, MP3/WAV, Remote)
8. Contact - Phone and email CTA
9. Footer

## Audio Files

All 7 MP3 files are in `/public/audio/`:
- `pj-commercial-voiceover-demo.mp3`
- `commercial-voice-reel-2-pj-voiceovers.mp3`
- `big-voice-pj-example.mp3`
- `welsh-accent-showreel.mp3`
- `pj-narration-example.mp3`
- `big-finish-pj-acting-demo.mp3`
- `pj-character-demo.mp3`

## Contact Details

- Phone: 07970 118818
- Email: paul@pjvoiceovers.com

## Development

- Workflow: `npm run dev` on port 5000
- The `next.config.js` includes `allowedDevOrigins` for Replit preview compatibility
- Tailwind CSS v3 used (v4 is incompatible with Next.js 14)

## Deployment

Configured for Vercel with `output: 'standalone'` in `next.config.js`. Run `npm run build` to create a production build.
