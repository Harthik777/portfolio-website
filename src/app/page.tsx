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
              <span className="text-shimmer block sm:inline mt-1 sm:mt-0">
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
                className="w-full sm:w-auto btn-gradient hover-lift"
              >
                View My Work
              </Link>

              <div className="w-full sm:w-auto btn-gradient-outline hover-lift">
                <Link
                  href="/about"
                  className="btn-gradient-outline-inner block w-full"
                >
                  Learn About Me
                </Link>
              </div>
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
    <section className="py-8 sm:py-12 lg:py-16 relative overflow-hidden bg-white dark:bg-transparent">
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
              className="w-full sm:w-auto btn-glass hover-lift text-white backdrop-blur-lg"
            >
              Get in Touch
            </Link>
            
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl gradient-sunset text-white font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
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
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-indigo-50/20 to-purple-50/30 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-purple-950/20"></div>
      <div className="absolute inset-0 bg-dots opacity-30"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 sm:mb-4"
          >
            What I Do
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto max-w-3xl text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 px-4"
          >
            Leveraging artificial intelligence and data science to create innovative solutions
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* AI & Machine Learning */}
          <motion.div 
            variants={fadeInUp}
            className="card-interactive-premium hover-lift group"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-secondary rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg group-hover:animate-bounce-gentle">
                <span className="text-xl sm:text-2xl">🤖</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-glow">AI & Machine Learning</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg">
              Exploring Machine Learning, Deep Learning, LLMs, and Agentic AI
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 glass text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium hover:bg-secondary-50 dark:hover:bg-secondary-900/20 hover:text-secondary-700 dark:hover:text-secondary-300 hover:border-secondary-200 dark:hover:border-secondary-700 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Data Science */}
          <motion.div 
            variants={fadeInUp}
            className="card-interactive-premium hover-lift group"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-ocean rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg group-hover:animate-bounce-gentle">
                <span className="text-xl sm:text-2xl">📊</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-glow">Data Science</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg">
              Data analysis, visualization, and statistical modeling
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['Pandas', 'NumPy', 'Matplotlib', 'Jupyter'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 glass text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-700 dark:hover:text-primary-300 hover:border-primary-200 dark:hover:border-primary-700 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Home Component
export default function Home() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900">
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
        <WhatIDoSection />
        <CTASection />
      </Suspense>
    </div>
  );
}
