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

// Animation variants for reusability
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 animate-pulse rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-gradient-to-br from-purple-400 to-pink-600 opacity-20 blur-3xl" />
        
        {/* Additional floating elements for 2025 immersive design */}
        <div className="absolute right-1/4 top-1/3 h-32 w-32 animate-float rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-10 blur-2xl" />
        <div className="absolute left-1/3 bottom-1/4 h-24 w-24 animate-bounce-slow rounded-full bg-gradient-to-br from-pink-400 to-rose-500 opacity-15 blur-xl" />
        <div className="absolute right-1/3 top-1/4 h-16 w-16 animate-pulse-slow rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 opacity-20 blur-lg" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I'm{' '}
            <motion.span 
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
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
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl"
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
            className="mx-auto mt-4 max-w-4xl text-base leading-7 text-gray-500 dark:text-gray-400 sm:text-lg"
          >
            Aspiring AI/ML Engineer • Data Science • Research • Open to Internships & Collaborations
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-6"
          >
            {/* Main action buttons */}
            <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/projects"
                  className="group relative inline-flex min-h-[48px] w-full max-w-[280px] items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto sm:max-w-none"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <CodeBracketIcon className="relative z-10 h-5 w-5 flex-shrink-0" />
                  <span className="relative z-10">View My Work</span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/about"
                  className="group relative inline-flex min-h-[48px] w-full max-w-[280px] items-center justify-center gap-2 overflow-hidden rounded-full border border-gray-300 bg-white/80 px-8 py-4 text-sm font-semibold text-gray-900 backdrop-blur-sm transition-all hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800 sm:w-auto sm:max-w-none"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-indigo-900/20 dark:to-purple-900/20"
                  />
                  <BriefcaseIcon className="relative z-10 h-5 w-5 flex-shrink-0" />
                  <span className="relative z-10">Learn more about me</span>
                </Link>
              </motion.div>
            </div>

            {/* Social links */}
            <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <a
                href="https://www.linkedin.com/in/harthik-mv/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[48px] w-full max-w-[280px] items-center justify-center gap-3 rounded-full border border-blue-300 bg-blue-50/80 px-8 py-4 text-sm font-semibold text-blue-700 backdrop-blur-sm transition-all hover:scale-105 hover:bg-blue-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-blue-600 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/40 sm:w-auto sm:max-w-none"
              >
                <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Connect on LinkedIn</span>
              </a>

              <a
                href="https://github.com/Harthik777"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[48px] w-full max-w-[280px] items-center justify-center gap-3 rounded-full border border-gray-300 bg-gray-50/80 px-8 py-4 text-sm font-semibold text-gray-700 backdrop-blur-sm transition-all hover:scale-105 hover:bg-gray-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-300 dark:hover:bg-gray-700 sm:w-auto sm:max-w-none"
              >
                <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">View on GitHub</span>
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-16">
            <ArrowDownIcon className="mx-auto h-6 w-6 animate-bounce text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Skills Section Component
function SkillsSection() {
  const skills = [
    {
      title: 'AI & Machine Learning',
      description: 'Exploring Machine Learning, Deep Learning, LLMs, and Agentic AI',
      icon: '🤖',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
    },
    {
      title: 'Data Science',
      description: 'Data analysis, visualization, and statistical modeling',
      icon: '📊',
      technologies: ['Pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            What I Do
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300"
          >
            Leveraging artificial intelligence and data science to
            create innovative solutions
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative overflow-hidden rounded-3xl bg-white/90 p-8 shadow-xl backdrop-blur-sm transition-all hover:shadow-2xl dark:bg-gray-800/90"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="mb-6 text-5xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {skill.icon}
                </motion.div>
                
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  {skill.title}
                </h3>
                
                <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {skill.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-4 py-2 text-sm font-medium text-indigo-800 shadow-sm transition-all hover:shadow-md dark:from-indigo-900/50 dark:via-purple-900/50 dark:to-pink-900/50 dark:text-indigo-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section Component
function CTASection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-6 py-24 text-center shadow-2xl sm:px-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's Build Something Amazing Together
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-100">
            I'm always excited to work on new projects and collaborate with
            fellow developers and innovators. Open to internships, research opportunities, and learning experiences.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
            <Link
              href="/contact"
              className="min-h-[48px] w-full max-w-[280px] rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-indigo-600 shadow-lg transition-all hover:scale-105 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:w-auto sm:max-w-none"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="min-h-[48px] w-full max-w-[280px] rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-8 py-4 text-center text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-indigo-600 sm:w-auto sm:max-w-none"
            >
              View Projects <span aria-hidden="true">→</span>
            </Link>
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
