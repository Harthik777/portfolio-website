'use client';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h1>
        <p className="mb-10 text-lg text-gray-600 dark:text-gray-300">
          Have a question or want to work together? Reach out via email or LinkedIn!
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        <a
          href="mailto:harthik7777@gmail.com"
          className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg border border-gray-200 dark:border-gray-700 text-indigo-700 dark:text-indigo-300 text-lg font-semibold transition-all hover:bg-indigo-50 dark:hover:bg-gray-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="h-6 w-6" />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/harthik-mv/"
          className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg border border-gray-200 dark:border-gray-700 text-indigo-700 dark:text-indigo-300 text-lg font-semibold transition-all hover:bg-indigo-50 dark:hover:bg-gray-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-6 w-6" />
          LinkedIn
        </a>
      </div>
    </div>
  );
} 