import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

const siteUrl = 'https://www.pjvoiceovers.com';

export const metadata: Metadata = {
  title: 'PJ Voiceovers | British & Welsh Voiceover Artist - Paul Jones',
  description:
    'Paul Jones is an award-winning British & Welsh voiceover artist with a professional studio. Covering commercials, narration, e-learning, character voices and audio drama. Fast turnaround. Get in touch today.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PJ Voiceovers | British & Welsh Voiceover Artist',
    description:
      'Award-winning British & Welsh voiceover artist Paul Jones. Professional studio, fast turnaround, covering commercials, narration, character voices and more.',
    url: siteUrl,
    siteName: 'PJ Voiceovers',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PJ Voiceovers | British & Welsh Voiceover Artist',
    description:
      'Award-winning British & Welsh voiceover artist Paul Jones. Professional studio, fast turnaround.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'PJ Voiceovers',
  description:
    'Award-winning British male voiceover artist Paul Jones, offering commercial, narration, e-learning, character voice and audio drama services.',
  url: siteUrl,
  telephone: '+447970118818',
  email: 'paul@pjvoiceovers.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
  },
  founder: {
    '@type': 'Person',
    name: 'Paul Jones',
    jobTitle: 'Voiceover Artist',
  },
  knowsAbout: [
    'Voiceover',
    'Commercial Voiceover',
    'Narration',
    'E-learning',
    'Character Voices',
    'Audio Drama',
    'Welsh Accent',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className={`${inter.className} bg-[#0a0a0a] text-gray-100 antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
