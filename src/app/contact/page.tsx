'use client';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900">
      <div className="relative isolate pt-20">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Enhanced Header Section */}
            <div className="card-interactive-premium mx-auto max-w-4xl animate-fade-in-scale p-12 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h1 className="gradient-text mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Get in Touch
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Have a question or want to work together? I'm always excited to discuss 
                <span className="font-semibold text-indigo-600 dark:text-indigo-400"> AI/ML projects</span>, 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> research collaborations</span>, or 
                <span className="font-semibold text-pink-600 dark:text-pink-400"> internship opportunities</span>!
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-4">
                <div className="flex items-center space-x-2 rounded-full bg-indigo-100 px-3 py-2 sm:px-4 dark:bg-indigo-900/50">
                  <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                  <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300 sm:text-sm">Professional Networking</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-purple-100 px-3 py-2 sm:px-4 dark:bg-purple-900/50">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 sm:text-sm">Collaboration</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-pink-100 px-3 py-2 sm:px-4 dark:bg-pink-900/50">
                  <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                  <span className="text-xs font-medium text-pink-700 dark:text-pink-300 sm:text-sm">Let's Connect</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
                <a
                  href="mailto:harthik7777@gmail.com"
                  className="group relative overflow-hidden min-h-[48px] w-full max-w-[280px] rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-center text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto sm:max-w-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Mail className="relative z-10 mr-2 inline h-5 w-5 flex-shrink-0" />
                  <span className="relative z-10">Send Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/harthik-mv/"
                  className="group relative overflow-hidden min-h-[48px] w-full max-w-[280px] rounded-full border-2 border-indigo-600 bg-white/90 px-8 py-4 text-center text-sm font-semibold text-indigo-600 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-indigo-400 dark:bg-gray-800/90 dark:text-indigo-400 sm:w-auto sm:max-w-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-indigo-900/20 dark:to-purple-900/20" />
                  <Linkedin className="relative z-10 mr-2 inline h-5 w-5 flex-shrink-0" />
                  <span className="relative z-10">Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
