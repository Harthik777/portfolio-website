'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

// Simplified animations for better performance
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
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
        
        {/* Simple background gradient - optimized for both themes */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-50/30 via-white/20 to-purple-50/30 dark:from-gray-900/60 dark:via-gray-800/40 dark:to-indigo-900/60"></div>

        <div className="relative z-30 mx-auto max-w-7xl w-full">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center px-4 sm:px-6 lg:px-8"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0">
                Harthik M V
              </span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-6 sm:leading-7 md:leading-8 text-gray-600 dark:text-gray-300"
            >
              AI/ML Engineer passionate about creating intelligent solutions that make a difference. 
              Currently pursuing B.Tech in Computer Science (AI) at{' '}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Manipal Institute of Technology (MIT) Bengaluru.</span>
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-gray-500 dark:text-gray-400"
            >
              Aspiring AI/ML Engineer • Data Science • Research • Open to Internships & Collaborations
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                View My Work
              </Link>

              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-900 bg-white border border-gray-300 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-white dark:border-gray-600"
              >
                Learn About Me
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 sm:mt-16">
              <ArrowDownIcon className="mx-auto h-5 w-5 sm:h-6 sm:w-6 animate-bounce text-gray-400 dark:text-gray-500" />
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
    <section className="py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-6 py-8 sm:px-8 sm:py-12 lg:py-16 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white relative z-10 leading-tight">
            Let's Build Something Amazing Together
          </h2>
          
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-indigo-100 relative z-10 px-2">
            I'm always excited to work on new projects and collaborate with
            fellow developers and innovators. Open to internships, research opportunities, and learning experiences.
          </p>
          
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 relative z-10">
            <Link
              href="/contact"
              className="w-full sm:w-auto block rounded-full bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-lg transition-all hover:bg-gray-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
            >
              Get in Touch
            </Link>
            
            <Link
              href="/projects"
              className="w-full sm:w-auto block rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:from-pink-600 hover:to-red-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-indigo-600"
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 sm:mb-4">
            What I Do
          </h2>
          <p className="mx-auto max-w-3xl text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 px-4">
            Leveraging artificial intelligence and data science to create innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* AI & Machine Learning */}
          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700/50 hover:border-purple-300 dark:hover:border-purple-500/30 transition-colors shadow-lg dark:shadow-none">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                <span className="text-xl sm:text-2xl">🤖</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">AI & Machine Learning</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg">
              Exploring Machine Learning, Deep Learning, LLMs, and Agentic AI
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-100 dark:bg-purple-600/20 text-purple-700 dark:text-purple-300 rounded-full text-xs sm:text-sm font-medium border border-purple-200 dark:border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Data Science */}
          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-500/30 transition-colors shadow-lg dark:shadow-none">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                <span className="text-xl sm:text-2xl">📊</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Data Science</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg">
              Data analysis, visualization, and statistical modeling
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['Pandas', 'NumPy', 'Matplotlib', 'Jupyter'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 dark:bg-blue-600/20 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium border border-blue-200 dark:border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
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
    <div className="min-h-screen relative bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
        <WhatIDoSection />
        <CTASection />
      </Suspense>
    </div>
  );
}
