'use client';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900">
      <div className="relative isolate pt-20">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Enhanced Header Section */}
            <div className="card mx-auto max-w-4xl animate-fade-in-up border border-indigo-100 bg-white/80 p-12 text-center shadow-2xl dark:border-indigo-900 dark:bg-gray-900/80">
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
              <div className="mt-8 flex justify-center space-x-4">
                <div className="flex items-center space-x-2 rounded-full bg-indigo-100 px-4 py-2 dark:bg-indigo-900/50">
                  <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                  <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Project Collaboration</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-purple-100 px-4 py-2 dark:bg-purple-900/50">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Research Opportunities</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-pink-100 px-4 py-2 dark:bg-pink-900/50">
                  <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                  <span className="text-sm font-medium text-pink-700 dark:text-pink-300">General Inquiries</span>
                </div>
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
          </div>
        </div>
      </div>
    </main>
  );
}
