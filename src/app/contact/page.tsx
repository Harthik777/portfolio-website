'use client';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900">
      <div className="card mx-auto w-full max-w-xl animate-fade-in-up border border-indigo-100 bg-white/80 px-8 py-16 shadow-2xl dark:border-indigo-900 dark:bg-gray-900/80">
        <div className="text-center">
          <h1 className="gradient-text mb-4 text-4xl font-extrabold tracking-tight">
            Get in Touch
          </h1>
          <p className="mb-10 text-lg text-gray-600 dark:text-gray-300">
            Have a question or want to work together? Reach out via email or
            LinkedIn!
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-8 sm:flex-row">
          <a
            href="mailto:harthik7777@gmail.com"
            className="rounded-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 px-8 py-5 text-lg font-bold text-indigo-700 shadow transition-all duration-200 hover:scale-105 hover:shadow-xl dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 dark:text-indigo-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/harthik-mv/"
            className="rounded-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 px-8 py-5 text-lg font-bold text-indigo-700 shadow transition-all duration-200 hover:scale-105 hover:shadow-xl dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 dark:text-indigo-200"
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
