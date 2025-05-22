'use client';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900 flex items-center justify-center">
      <div className="card max-w-xl w-full mx-auto px-8 py-16 bg-white/80 dark:bg-gray-900/80 shadow-2xl border border-indigo-100 dark:border-indigo-900 animate-fade-in-up">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight gradient-text mb-4">Get in Touch</h1>
          <p className="mb-10 text-lg text-gray-600 dark:text-gray-300">
            Have a question or want to work together? Reach out via email or LinkedIn!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
          <a
            href="mailto:harthik7777@gmail.com"
            className="rounded-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 px-8 py-5 text-indigo-700 dark:text-indigo-200 text-lg font-bold shadow hover:scale-105 hover:shadow-xl transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/harthik-mv/"
            className="rounded-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 px-8 py-5 text-indigo-700 dark:text-indigo-200 text-lg font-bold shadow hover:scale-105 hover:shadow-xl transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
} 