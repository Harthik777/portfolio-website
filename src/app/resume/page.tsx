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

  return (
    <main className="min-h-screen">
      <div className="relative isolate pt-14">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Resume</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                View my latest resume below. You can download it directly from the PDF viewer. For more details about my experience, skills, and projects, feel free to explore the rest of this portfolio or <Link href="/contact" className="underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-300">contact me</Link>.
              </p>
              <div className="mt-6">
                <button
                  onClick={handleView}
                  disabled={isViewing}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isViewing ? 'Opening...' : 'View Resume (PDF)'}
                </button>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">Certifications & Achievements</h3>
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">MaRRS International Spelling Bee - Finalist</h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">2023</p>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Achieved finalist position in the prestigious MaRRS International Spelling Bee competition, demonstrating exceptional spelling and vocabulary skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">Experience</h3>
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Web Developer</h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">2023 - Present</p>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Developed and maintained web applications using modern technologies like React, Next.js, and Tailwind CSS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">Education</h3>
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Technology in Computer Science</h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">2020 - 2024</p>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Studied computer science with a focus on software development and web technologies.
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