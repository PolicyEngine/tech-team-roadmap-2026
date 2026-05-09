import type { Metadata, Viewport } from 'next';
import { ClientProviders } from './providers';
import './globals.css';

const SITE_URL = 'https://tech-team-roadmap-2026.vercel.app';
const TITLE = 'PE Tech Team Roadmap 2026 | PolicyEngine';
const DESCRIPTION =
  'PolicyEngine technology team quarterly roadmap and sprint planning for 2026.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: 'PolicyEngine' }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'PolicyEngine',
  },
  icons: { icon: '/favicon.svg' },
};

export const viewport: Viewport = {
  themeColor: '#2C6496',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
