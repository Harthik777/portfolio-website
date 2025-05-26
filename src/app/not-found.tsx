'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900">
      <div className="card mx-auto w-full max-w-2xl animate-fade-in-up border border-indigo-100 bg-white/80 px-8 py-16 text-center shadow-2xl dark:border-indigo-900 dark:bg-gray-900/80">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="gradient-text mb-4 text-8xl font-extrabold tracking-tight">
            404
          </h1>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Page Not Found
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <Link href="/" className="btn-primary">
            <HomeIcon className="h-5 w-5" />
            Go Home
          </Link>
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.history.back();
              }
            }}
            className="btn-secondary"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Go Back
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Or explore these sections:
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {[
              { name: 'About', href: '/about' },
              { name: 'Projects', href: '/projects' },
              { name: 'Skills', href: '/skills' },
              { name: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 transition-colors hover:bg-indigo-200 dark:bg-indigo-900/50 dark:text-indigo-300 dark:hover:bg-indigo-900/70"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
} 