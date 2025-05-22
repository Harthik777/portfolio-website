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
    <main className="min-h-screen">
      <div className="relative isolate pt-14">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Resume Section */}
            <div className="mx-auto max-w-2xl lg:mx-0 card p-8 animate-fade-in">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Resume</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                View or download my latest resume below. For more details about my experience, skills, and projects, feel free to explore the rest of this portfolio or <Link href="/contact" className="underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-300">contact me</Link>.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleView}
                  disabled={isViewing}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isViewing ? 'Opening...' : 'View Resume (PDF)'}
                </button>
                <a
                  href="/Harthik_Resume.pdf"
                  download="Harthik_Resume.pdf"
                  className="rounded-md bg-white dark:bg-gray-800 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Download Resume (PDF)
                </a>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="mx-auto mt-16 max-w-2xl lg:mx-0 card p-8 animate-fade-in">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">Certifications</h3>
              <div className="space-y-8">
                {/* Add your certifications here */}
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Coming Soon</h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">-</p>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Certifications will be added here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 