import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harthik M V | Portfolio",
  description: "Portfolio website showcasing my work in AI/ML, software development, and research",
  metadataBase: new URL('https://harthikmv.com'),
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
        <Navbar />
        <div className="flex-grow pt-20">{children}</div>
        <Footer />
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">Made with ❤️ by Harthik</p>
      </body>
    </html>
  );
}
