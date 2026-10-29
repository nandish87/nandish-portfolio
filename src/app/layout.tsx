import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nandish.dev'),
  title: { default: 'Y. Nandish | B.Tech Student & Tech Enthusiast', template: '%s | Y. Nandish' },
  description: 'Portfolio of Y. Nandish, a B.Tech student in Tamil Nadu exploring technology, building projects, and sharing the journey.',
  keywords: ['Y Nandish', 'Nandish Yalapala', 'B.Tech student', 'technology portfolio', 'Tamil Nadu developer'],
  authors: [{ name: 'Y. Nandish' }],
  creator: 'Y. Nandish',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'en_IN', title: 'Y. Nandish | B.Tech Student & Tech Enthusiast', description: 'Building in tech. Exploring ideas. Sharing the journey.', siteName: 'Y. Nandish' },
  twitter: { card: 'summary_large_image', title: 'Y. Nandish', description: 'B.Tech student exploring technology and content creation.' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#09090b', colorScheme: 'dark' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
