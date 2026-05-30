'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

// Simplified animations for better performance
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Lightweight loading component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative z-30 mx-auto w-full max-w-7xl">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="px-4 text-center sm:px-6 lg:px-8"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Hi, I'm{' '}
              <span className="mt-1 block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent sm:mt-0 sm:inline">
                Harthik M V
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-4 max-w-2xl text-base leading-6 text-gray-600 dark:text-gray-300 sm:mt-6 sm:text-lg sm:leading-7 md:text-xl md:leading-8"
            >
              AI/ML Engineer passionate about creating intelligent solutions
              that make a difference. Currently pursuing B.Tech in Computer
              Science (AI) at{' '}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                Manipal Institute of Technology (MIT) Bengaluru.
              </span>
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-3 max-w-2xl text-sm text-gray-500 dark:text-gray-400 sm:mt-4 sm:text-base"
            >
              Aspiring AI/ML Engineer • Data Science • Research • Open to
              Internships & Collaborations
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-6"
            >
              <Link
                href="/projects"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              >
                View My Work
              </Link>

              <Link
                href="/about"
                className="inline-flex w-full items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-lg transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white sm:w-auto"
              >
                Learn About Me
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 sm:mt-16">
              <ArrowDownIcon className="mx-auto h-5 w-5 animate-bounce text-gray-400 dark:text-gray-500 sm:h-6 sm:w-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// CTA Section Component
function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white py-8 dark:bg-transparent sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-6 py-8 text-center shadow-2xl sm:px-8 sm:py-12 lg:py-16">
          <h2 className="relative z-10 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Let's Build Something Amazing Together
          </h2>

          <p className="relative z-10 mx-auto mt-4 max-w-2xl px-2 text-base text-indigo-100 sm:mt-6 sm:text-lg">
            I'm always excited to work on new projects and collaborate with
            fellow developers and innovators. Open to internships, research
            opportunities, and learning experiences.
          </p>

          <div className="relative z-10 mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className="block w-full rounded-full bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-lg transition-all hover:scale-105 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:w-auto"
            >
              Get in Touch
            </Link>

            <Link
              href="/projects"
              className="block w-full rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-indigo-600 sm:w-auto"
            >
              View Projects →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// What I Do Section Component
function WhatIDoSection() {
  return (
    <section className="bg-gray-50/50 py-12 dark:bg-transparent sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:mb-4 sm:text-3xl lg:text-4xl">
            What I Do
          </h2>
          <p className="mx-auto max-w-3xl px-4 text-base text-gray-600 dark:text-gray-300 sm:text-lg lg:text-xl">
            Leveraging artificial intelligence and data science to create
            innovative solutions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* AI & Machine Learning */}
          <div className="card-interactive-premium group relative overflow-hidden rounded-3xl border border-indigo-200 bg-white/90 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl dark:border-indigo-800 dark:bg-gray-800/90 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 flex items-center sm:mb-6">
                <div className="hover-lift mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg sm:mr-4 sm:h-12 sm:w-12">
                  <span className="text-xl sm:text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                  AI & Machine Learning
                </h3>
              </div>
              <p className="mb-4 text-base text-gray-600 dark:text-gray-300 sm:mb-6 sm:text-lg">
                Exploring Machine Learning, Deep Learning, LLMs, and Agentic AI
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['Python', 'Scikit-learn'].map(tech => (
                  <span
                    key={tech}
                    className="btn-glass hover-lift px-3 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Data Science */}
          <div className="card-interactive-premium group relative overflow-hidden rounded-3xl border border-purple-200 bg-white/90 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl dark:border-purple-800 dark:bg-gray-800/90 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 flex items-center sm:mb-6">
                <div className="hover-lift mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg sm:mr-4 sm:h-12 sm:w-12">
                  <span className="text-xl sm:text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                  Data Science
                </h3>
              </div>
              <p className="mb-4 text-base text-gray-600 dark:text-gray-300 sm:mb-6 sm:text-lg">
                Data analysis, visualization, and statistical modeling
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['Pandas', 'NumPy', 'Matplotlib', 'Jupyter'].map(tech => (
                  <span
                    key={tech}
                    className="btn-glass hover-lift px-3 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Home Component
export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900">
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
        <WhatIDoSection />
        <CTASection />
      </Suspense>
    </div>
  );
}
