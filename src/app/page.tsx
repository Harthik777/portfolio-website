'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowDownIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

// Loading component
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
      {/* Responsive container with proper padding */}
      <div className="w-full px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Simple animated background pattern - much lighter than ParticleSystem */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-white/20 to-purple-50/30 dark:from-gray-900/60 dark:via-gray-800/40 dark:to-indigo-900/60"></div>
          <div className="absolute top-10 left-10 h-2 w-2 rounded-full bg-indigo-500/20 animate-pulse"></div>
          <div className="absolute top-20 right-20 h-1 w-1 rounded-full bg-purple-500/30 animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 h-1.5 w-1.5 rounded-full bg-pink-500/25 animate-pulse"></div>
          <div className="absolute bottom-20 right-1/3 h-1 w-1 rounded-full bg-blue-500/20 animate-bounce"></div>
        </div>

        {/* Responsive Background gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-indigo-50/50 via-white/30 to-purple-50/50 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-indigo-900/80" />

        {/* Simplified Responsive Animated background elements */}
        <div className="absolute inset-0 z-20 overflow-hidden">
          {/* Desktop only - minimal elements */}
          <div className="hidden lg:block absolute -right-20 -top-20 h-40 w-40 animate-pulse rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 opacity-10 blur-2xl" />
          <div className="hidden lg:block absolute -bottom-20 -left-20 h-40 w-40 animate-pulse rounded-full bg-gradient-to-br from-purple-400 to-pink-600 opacity-10 blur-2xl" />
          
          {/* Simple floating elements - much reduced */}
          <div className="absolute right-1/4 top-1/3 h-8 w-8 sm:h-12 sm:w-12 animate-pulse rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-8 blur-lg" />
          <div className="absolute left-1/3 bottom-1/4 h-6 w-6 sm:h-10 sm:w-10 animate-bounce rounded-full bg-gradient-to-br from-pink-400 to-rose-500 opacity-10 blur-md" />
        </div>

        <div className="relative z-30 mx-auto max-w-7xl w-full">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center px-4 sm:px-6 lg:px-8"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
            >
              Hi, I'm{' '}
              <motion.span 
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block xs:inline mt-1 xs:mt-0"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: 'linear' 
                }}
                style={{ 
                  backgroundSize: '200% 200%' 
                }}
              >
                Harthik M V
              </motion.span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-3 xs:mt-4 sm:mt-6 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl leading-5 xs:leading-6 sm:leading-7 md:leading-8 text-gray-600 dark:text-gray-300 px-2 xs:px-3 sm:px-4"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                AI/ML Engineer passionate about creating
                intelligent solutions that make a difference. Currently pursuing
                B.Tech in Computer Science (AI) at{' '}
                <span className="whitespace-nowrap font-semibold text-indigo-600 dark:text-indigo-400">Manipal Institute of Technology (MIT) Bengaluru.</span>
              </motion.span>
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-3 xs:mt-4 max-w-2xl xs:max-w-3xl sm:max-w-4xl text-xs xs:text-sm sm:text-base md:text-lg leading-5 xs:leading-6 sm:leading-6 md:leading-7 text-gray-500 dark:text-gray-400 px-3 xs:px-4 sm:px-6"
            >
              Aspiring AI/ML Engineer • Data Science • Research • Open to Internships & Collaborations
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="mt-6 xs:mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 xs:gap-4 sm:gap-6 px-3 xs:px-4 sm:px-6 w-full"
            >
              {/* Enhanced Main action buttons with better mobile optimization */}
              <div className="flex w-full flex-col items-center gap-3 xs:gap-4 sm:flex-row sm:justify-center sm:gap-4 md:gap-6 max-w-2xl">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    href="/projects"
                    className="group relative inline-flex min-h-[48px] xs:min-h-[52px] sm:min-h-[56px] w-full sm:max-w-none max-w-[320px] xs:max-w-[360px] items-center justify-center gap-2 xs:gap-3 overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 xs:px-8 sm:px-10 py-3 xs:py-4 text-sm xs:text-base sm:text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <CodeBracketIcon className="relative z-10 h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                    <span className="relative z-10">View My Work</span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    href="/about"
                    className="group relative inline-flex min-h-[48px] xs:min-h-[52px] sm:min-h-[56px] w-full sm:max-w-none max-w-[320px] xs:max-w-[360px] items-center justify-center gap-2 xs:gap-3 overflow-hidden rounded-full border border-gray-300 bg-white/80 px-6 xs:px-8 sm:px-10 py-3 xs:py-4 text-sm xs:text-base sm:text-lg font-semibold text-gray-900 backdrop-blur-sm transition-all hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-indigo-900/20 dark:to-purple-900/20"
                    />
                    <BriefcaseIcon className="relative z-10 h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                    <span className="relative z-10">Learn more about me</span>
                  </Link>
                </motion.div>
              </div>
              {/* Enhanced Responsive Social links with better mobile optimization */}
              <div className="flex w-full flex-col items-center gap-2 xs:gap-3 sm:flex-row sm:justify-center sm:gap-3 md:gap-4 lg:gap-6 max-w-3xl mx-auto">
                <a
                  href="https://www.linkedin.com/in/harthik-mv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[44px] xs:min-h-[48px] sm:min-h-[52px] w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[260px] md:max-w-[280px] items-center justify-center gap-2 xs:gap-3 rounded-full border border-blue-300 bg-blue-50/80 px-4 xs:px-6 sm:px-8 py-3 xs:py-4 text-xs xs:text-sm sm:text-base font-semibold text-blue-700 backdrop-blur-sm transition-all hover:scale-105 hover:bg-blue-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-blue-600 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/40"
                >
                  <svg className="h-4 w-4 xs:h-5 xs:w-5 sm:h-5 sm:w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Connect on LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Harthik777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[44px] xs:min-h-[48px] sm:min-h-[52px] w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[260px] md:max-w-[280px] items-center justify-center gap-2 xs:gap-3 rounded-full border border-gray-300 bg-gray-50/80 px-4 xs:px-6 sm:px-8 py-3 xs:py-4 text-xs xs:text-sm sm:text-base font-semibold text-gray-700 backdrop-blur-sm transition-all hover:scale-105 hover:bg-gray-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  <svg className="h-4 w-4 xs:h-5 xs:w-5 sm:h-5 sm:w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">View on GitHub</span>
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 xs:mt-14 sm:mt-16">
              <ArrowDownIcon className="mx-auto h-5 w-5 xs:h-6 xs:w-6 animate-bounce text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Skills Section Component
function SkillsSection() {
  return (
    <section className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      <div className="mx-auto max-w-7xl px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Neural Skill Matrix
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-2 xs:mt-3 sm:mt-4 max-w-sm xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 px-3 xs:px-4 sm:px-6"
          >
            AI-powered expertise visualization with real-time neural network patterns
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {[
            'React', 'Next.js', 'TypeScript', 'Python', 'AI/ML', 'Node.js',
            'TailwindCSS', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Git'
          ].map((skill, index) => (
            <motion.div
              key={skill}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative overflow-hidden rounded-xl bg-white/50 backdrop-blur-sm p-4 text-center shadow-lg transition-all hover:shadow-xl dark:bg-gray-800/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="relative z-10 text-sm font-semibold text-gray-900 dark:text-white">
                {skill}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section Component
function CTASection() {
  return (
    <section className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative isolate overflow-hidden rounded-xl xs:rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 text-center shadow-2xl"
        >
          {/* Enhanced Neural Network Pattern Overlay for mobile */}
          <div className="absolute inset-0 opacity-8 xs:opacity-10">
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id="neural-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" className="xs:w-20 xs:h-20 sm:w-24 sm:h-24">
                  <circle cx="16" cy="16" r="1.5" fill="white" opacity="0.3" className="xs:r-2">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="64" cy="32" r="1.5" fill="white" opacity="0.3" className="xs:r-2">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="40" cy="64" r="1.5" fill="white" opacity="0.3" className="xs:r-2">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <line x1="16" y1="16" x2="64" y2="32" stroke="white" strokeWidth="0.5" opacity="0.15" />
                  <line x1="64" y1="32" x2="40" y2="64" stroke="white" strokeWidth="0.5" opacity="0.15" />
                  <line x1="40" y1="64" x2="16" y2="16" stroke="white" strokeWidth="0.5" opacity="0.15" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#neural-pattern)" />
            </svg>
          </div>

          <motion.h2 
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white relative z-10 leading-tight"
            whileInView={{ 
              textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.5)", "0 0 0px rgba(255,255,255,0)"]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            Let's Build Something Amazing Together
          </motion.h2>
          
          <motion.p 
            className="mx-auto mt-4 xs:mt-5 sm:mt-6 max-w-sm xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl text-sm xs:text-base sm:text-lg md:text-xl leading-6 xs:leading-7 sm:leading-8 text-indigo-100 relative z-10 px-2 xs:px-4"
            variants={fadeInUp}
          >
            I'm always excited to work on new projects and collaborate with
            fellow developers and innovators. Open to internships, research opportunities, and learning experiences.
          </motion.p>
          
          <div className="mt-8 xs:mt-9 sm:mt-10 flex flex-col items-center justify-center gap-3 xs:gap-4 sm:flex-row sm:gap-4 md:gap-6 relative z-10">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="group min-h-[44px] xs:min-h-[48px] sm:min-h-[52px] w-full max-w-[280px] xs:max-w-[320px] sm:max-w-none rounded-full bg-white px-6 xs:px-8 py-3 xs:py-4 text-center text-sm xs:text-base sm:text-lg font-semibold text-indigo-600 shadow-lg transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 relative overflow-hidden"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(236,72,153,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/projects"
                className="group min-h-[44px] xs:min-h-[48px] sm:min-h-[52px] w-full max-w-[280px] xs:max-w-[320px] sm:max-w-none rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-6 xs:px-8 py-3 xs:py-4 text-center text-sm xs:text-base sm:text-lg font-semibold text-white shadow-lg transition-all hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-indigo-600 relative overflow-hidden"
              >
                <span className="relative z-10">View Projects <span aria-hidden="true">→</span></span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Home Component
export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.3 }}
      />
      
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
        <SkillsSection />
        <CTASection />
      </Suspense>
    </div>
  );
}
