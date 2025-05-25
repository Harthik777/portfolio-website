'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Resume() {
  const [isViewing, setIsViewing] = useState(false);

  const handleView = () => {
    setIsViewing(true);
    window.open('/Harthik_Resume.pdf', '_blank');
    setIsViewing(false);
  };

  const handleDownload = () => {
    // Direct download approach for mobile
    const url = '/Harthik_Resume.pdf';
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900">
      <div className="card mx-auto w-full max-w-2xl animate-fade-in-up border border-indigo-100 bg-white/80 px-10 py-16 shadow-2xl dark:border-indigo-900 dark:bg-gray-900/80">
        <h2 className="gradient-text mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Resume
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          View or download my latest resume below. For more details about my
          experience, skills, and projects, feel free to explore the rest of
          this portfolio or{' '}
          <Link
            href="/contact"
            className="underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-300"
          >
            contact me
          </Link>
          .
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={handleView}
            disabled={isViewing}
            className="rounded-full bg-indigo-700 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-200 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isViewing ? 'Opening...' : 'View Resume (PDF)'}
          </button>
          <a
            href="/Harthik_Resume.pdf"
            download="Harthik_Resume.pdf"
            className="rounded-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 px-8 py-4 text-lg font-bold text-indigo-700 shadow transition-all duration-200 hover:scale-105 hover:shadow-xl dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 dark:text-indigo-200"
          >
            Download Resume (PDF)
          </a>
        </div>
        {/* Certifications Section */}
        <div className="card mx-auto mt-16 animate-fade-in-up border border-indigo-100 bg-white/80 p-8 shadow-xl dark:border-indigo-900 dark:bg-gray-900/80">
          <h3 className="gradient-text mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
            Certifications
          </h3>
          <div className="space-y-8">
            {/* Add your certifications here */}
            <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Coming Soon
                  </h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    -
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Certifications will be added here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
