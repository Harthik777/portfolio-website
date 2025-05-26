import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './tailwind-fixes.css'; // Import fixes for CSS directives
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { MobileOptimizer } from '@/components/MobileOptimizer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Harthik M V | AI/ML Engineer & Full-Stack Developer',
    template: '%s | Harthik M V',
  },
  description:
    'Portfolio website of Harthik M V - AI/ML Engineer, Full-Stack Developer, and Computer Science student at MIT Bengaluru. Showcasing projects in artificial intelligence, machine learning, and software development.',
  keywords: [
    'Harthik M V',
    'AI Engineer',
    'ML Engineer',
    'Full Stack Developer',
    'MIT Bengaluru',
    'Computer Science',
    'Artificial Intelligence',
    'Machine Learning',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
    'Software Engineer',
    'Data Science',
    'Python',
    'JavaScript',
  ],
  authors: [{ name: 'Harthik M V', url: 'https://harthikmv.com' }],
  creator: 'Harthik M V',
  publisher: 'Harthik M V',
  metadataBase: new URL('https://harthikmv.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harthikmv.com',
    siteName: 'Harthik M V Portfolio',
    title: 'Harthik M V | AI/ML Engineer & Full-Stack Developer',
    description:
      'Portfolio website showcasing my work in AI/ML, software development, and research projects.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Harthik M V - AI/ML Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harthik M V | AI/ML Engineer & Full-Stack Developer',
    description:
      'Portfolio website showcasing my work in AI/ML, software development, and research projects.',
    images: ['/og-image.jpg'],
    creator: '@harthikmv',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.className} custom-scrollbar theme-transition flex min-h-screen flex-col bg-transparent font-sans antialiased`}
      >
        {/* Glassmorphism animated background - global */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
          <div className="absolute inset-0 bg-white/15 dark:bg-[#181926cc] backdrop-blur-2xl transition-colors duration-700" />
          <div className="absolute left-[-10vw] top-[-10vh] w-[60vw] h-[60vw] bg-gradient-to-tr from-blue-400 via-violet-400 to-pink-400 opacity-70 rounded-full filter blur-3xl animate-blob1 mix-blend-screen" />
          <div className="absolute right-[-12vw] top-[20vh] w-[55vw] h-[55vw] bg-gradient-to-br from-teal-300 via-cyan-400 to-blue-400 opacity-60 rounded-full filter blur-2xl animate-blob2 mix-blend-screen" />
          <div className="absolute left-[20vw] bottom-[-10vh] w-[50vw] h-[50vw] bg-gradient-to-tr from-pink-400 via-orange-300 to-yellow-200 opacity-50 rounded-full filter blur-2xl animate-blob3 mix-blend-screen" />
        </div>
        <ErrorBoundary>
          <ThemeProvider>
            <MobileOptimizer />
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 pt-16 xs:pt-18 sm:pt-20 safe-top" role="main">
                {children}
              </main>
              <Footer />
              <BackToTop />
            </div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
