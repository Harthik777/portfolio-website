import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { MotionEnhancer } from '@/components/MotionEnhancer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Harthik M V | AI/ML Research & Engineering Portfolio',
    template: '%s | Harthik M V',
  },
  description:
    'Portfolio of Harthik M V, an AI/ML Research Intern and Computer Science (AI) student at MIT Bengaluru, showcasing explainable AI, NLP, data science, publications, and applied software projects.',
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
  authors: [
    { name: 'Harthik M V', url: 'https://portfolio-website1-beta.vercel.app' },
  ],
  creator: 'Harthik M V',
  publisher: 'Harthik M V',
  metadataBase: new URL('https://portfolio-website1-beta.vercel.app'),
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
    url: 'https://portfolio-website1-beta.vercel.app',
    siteName: 'Harthik M V Portfolio',
    title: 'Harthik M V | AI/ML Research & Engineering Portfolio',
    description:
      'AI/ML portfolio showcasing explainable AI, NLP, data science, publications, and software projects.',
  },
  twitter: {
    card: 'summary',
    title: 'Harthik M V | AI/ML Research & Engineering Portfolio',
    description:
      'AI/ML portfolio showcasing explainable AI, NLP, data science, publications, and software projects.',
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
      </head>
      <body
        className={`${inter.className} flex min-h-screen flex-col font-sans antialiased`}
      >
        <ErrorBoundary>
          <ThemeProvider>
            <MotionEnhancer />
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 pt-16" role="main">
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
