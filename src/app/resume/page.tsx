'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Resume() {
  const [isViewing, setIsViewing] = useState(false);

  const handleView = () => {
    setIsViewing(true);
    // Only run on client side
    if (typeof window !== 'undefined') {
      window.open('/Harthik_Resume.pdf', '_blank');
    }
    setIsViewing(false);
  };



  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900">
      <div className="relative isolate pt-20">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Enhanced Header Section */}
            <div className="card-interactive-premium mx-auto max-w-4xl animate-fade-in-scale p-12 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="gradient-text mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Resume
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                View my latest resume below. For more details about my 
                <span className="font-semibold text-indigo-600 dark:text-indigo-400"> experience</span>, 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> skills</span>, and 
                <span className="font-semibold text-pink-600 dark:text-pink-400"> projects</span>, feel free to explore the rest of this portfolio or{' '}
                <Link
                  href="/contact"
                  className="underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-300"
                >
                  contact me
                </Link>
                .
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-4">
                <div className="flex items-center space-x-2 rounded-full bg-indigo-100 px-3 py-2 sm:px-4 dark:bg-indigo-900/50">
                  <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                  <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300 sm:text-sm">Professional Experience</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-purple-100 px-3 py-2 sm:px-4 dark:bg-purple-900/50">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 sm:text-sm">Education & Skills</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-pink-100 px-3 py-2 sm:px-4 dark:bg-pink-900/50">
                  <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                  <span className="text-xs font-medium text-pink-700 dark:text-pink-300 sm:text-sm">Achievements</span>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleView}
                  disabled={isViewing}
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative z-10">
                    {isViewing ? 'Opening...' : 'View Resume (PDF)'}
                  </span>
                </button>
              </div>
            </div>
        
            {/* Experience Section */}
            <div className="card-interactive-premium mx-auto mt-16 animate-fade-in-scale p-8">
              <h3 className="gradient-text mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
                Experience
              </h3>
              <div className="space-y-8">

                {/* Research Internship 1 */}
                <div className="rounded-lg bg-white p-6 shadow transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
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
                    <div className="ml-4 flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Research Intern
                          </h4>
                          <p className="mt-1 text-base font-medium text-indigo-600 dark:text-indigo-400">
                            Manipal Institute of Technology (MIT) Bengaluru
                          </p>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                            Supervisor: Dr. Usha Moorthy
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          A Machine Learning Framework for Data-Scarce Regression using SMOGN with Joint Hyperparameter Optimization: A Case Study with Cricket Performance Prediction
                        </p>
                        <div className="mt-2 flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                            <span className="font-semibold text-green-600 dark:text-green-400">First Author</span> on publication accepted at{' '}
                            <span className="font-semibold">IEEE TENCON 2025</span> (flagship conference of IEEE Region 10, Asia Pacific)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Research Internship 2 */}
                <div className="rounded-lg bg-white p-6 shadow transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
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
                    <div className="ml-4 flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Research Intern
                          </h4>
                          <p className="mt-1 text-base font-medium text-indigo-600 dark:text-indigo-400">
                            Manipal Institute of Technology (MIT) Bengaluru
                          </p>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                            Supervisors: Soumyashree M. Panchal and Dr. Vishnu Srinivasa Murthy Y
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          Performance Degradation of Deep and Traditional Machine Learning Models Under Market Volatility: An Inter-Day Stock Trend Comparison
                        </p>
                        <div className="mt-2 flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                            <span className="font-semibold text-green-600 dark:text-green-400">Accepted for Presentation</span> at{' '}
                            <span className="font-semibold">IEEE INDICON 2025</span> (the flagship IEEE India Council conference in India)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Research Internship 3 */}
                <div className="rounded-lg bg-white p-6 shadow transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
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
                    <div className="ml-4 flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Research Intern
                          </h4>
                          <p className="mt-1 text-base font-medium text-indigo-600 dark:text-indigo-400">
                            Manipal Institute of Technology (MIT) Bengaluru
                          </p>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                            Supervisor: Shweta S. Aladakatti
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          An Efficient and Explainable Transformer Framework for Unified Summarization and Question Answering
                        </p>
                        <div className="mt-2 flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                            <span className="font-semibold text-green-600 dark:text-green-400">Accepted for Presentation</span> at{' '}
                            <span className="font-semibold">Second International Conference on Artificial Intelligence, Computation, Communication, and Network Security (AICCoNS 2026)</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="card-interactive-premium mx-auto mt-16 animate-fade-in-scale p-8">
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
        </div>
      </div>
    </main>
  );
}
