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
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Harthik M V
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl"
          >
            AI/ML Engineer & Full-Stack Developer passionate about creating
            intelligent solutions that make a difference. Currently pursuing
            B.Tech in Computer Science (AI) at MIT Bengaluru.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/projects"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <CodeBracketIcon className="h-5 w-5" />
              View My Work
            </Link>

            <Link
              href="/resume"
              className="group inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-8 py-4 text-sm font-semibold text-gray-900 backdrop-blur-sm transition-all hover:bg-white hover:shadow-lg dark:border-gray-600 dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800"
            >
              <AcademicCapIcon className="h-5 w-5" />
              Download Resume
            </Link>
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
      description: 'Deep learning, neural networks, computer vision, and NLP',
      icon: '🤖',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
    },
    {
      title: 'Full-Stack Development',
      description: 'Modern web applications with React, Next.js, and Node.js',
      icon: '💻',
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js'],
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
            Combining artificial intelligence with modern web development to
            create innovative solutions
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={scaleIn}
              className="group relative rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl dark:bg-gray-800/80"
            >
              <div className="mb-4 text-4xl">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {skill.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.technologies.map(tech => (
                  <span
                    key={tech}
                    className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200"
                  >
                    {tech}
                  </span>
                ))}
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
            fellow developers and innovators.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-indigo-600 shadow-lg transition-all hover:scale-105 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="text-sm font-semibold leading-6 text-white hover:text-indigo-100"
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
    <div className="min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
        <SkillsSection />
        <CTASection />
      </Suspense>
    </div>
  );
}
