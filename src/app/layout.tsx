import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harthik M V | AI/ML Engineer",
  description: "Portfolio website showcasing my work in AI/ML, software development, and research",
  metadataBase: new URL('https://harthikmv.com'),
  openGraph: {
    title: "Harthik M V | AI/ML Engineer",
    description: "Portfolio website showcasing my work in AI/ML, software development, and research",
    url: 'https://harthikmv.com',
    siteName: 'Harthik M V Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Harthik M V | AI/ML Engineer",
    description: "Portfolio website showcasing my work in AI/ML, software development, and research",
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} antialiased min-h-screen font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex-grow pt-20">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}