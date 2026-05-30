'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

const achievements = [
  {
    label: 'IEEE TENCON 2025',
    title: 'First Author',
    detail:
      'Accepted research on data-scarce regression using SMOGN and joint hyperparameter optimization.',
  },
  {
    label: 'AICCoNS 2026',
    title: 'Accepted Research',
    detail:
      'Explainable transformer framework for CPU-based summarisation and question answering.',
  },
  {
    label: 'IEEE Student Branch',
    title: 'Vice-Chair',
    detail:
      'Leading a student branch with 11 IEEE technical societies and interdisciplinary events.',
  },
];

const featuredProjects = [
  {
    title: 'Smart Document Summarizer & Q&A Assistant',
    summary:
      'CPU-optimized NLP application for summarization, question answering, semantic retrieval, explainability, and ROUGE evaluation.',
    tags: ['NLP', 'Transformers', 'Explainable AI', 'Python'],
    href: '/projects',
  },
  {
    title: 'Agentic-XAI',
    summary:
      'Full-stack decision support platform using FastAPI, React, TypeScript, and Gemini API for structured recommendations.',
    tags: ['Agentic AI', 'FastAPI', 'React', 'Vercel'],
    href: '/projects',
  },
  {
    title: 'SustainAI',
    summary:
      'Air quality prediction platform with model explainability and carbon footprint tracking using CodeCarbon.',
    tags: ['Sustainable AI', 'SHAP', 'CodeCarbon', 'Python'],
    href: '/projects',
  },
];

function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div initial="initial" animate="animate" className="max-w-3xl">
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold uppercase text-indigo-700 dark:text-indigo-300"
          >
            AI/ML Research Intern & Team Lead
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="mt-4 text-4xl font-bold text-gray-950 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Harthik M V
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg"
          >
            AI/ML Engineer focused on explainable machine learning, NLP, data
            science, and research-oriented systems. Currently pursuing B.Tech in
            Computer Science (AI) at Manipal Institute of Technology (MIT)
            Bengaluru.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/projects"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              View Projects
            </Link>
            <Link
              href="/resume"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
            >
              View Resume
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50 dark:text-indigo-300 dark:hover:bg-indigo-950/50"
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="grid gap-3"
        >
          {achievements.map(item => (
            <article
              key={item.label}
              className="rounded-lg border border-gray-200 bg-white/85 p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/80"
            >
              <p className="text-xs font-semibold uppercase text-indigo-700 dark:text-indigo-300">
                {item.label}
              </p>
              <h2 className="mt-2 text-lg font-semibold text-gray-950 dark:text-white">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {item.detail}
              </p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedProjectsSection() {
  return (
    <section className="border-y border-gray-200 bg-white/80 px-4 py-14 dark:border-gray-800 dark:bg-gray-950/35 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-indigo-700 dark:text-indigo-300">
              Selected Work
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-950 dark:text-white sm:text-3xl">
              Research and applied AI projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-semibold text-indigo-700 hover:text-indigo-900 dark:text-indigo-300 dark:hover:text-indigo-200"
          >
            Browse all projects
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {featuredProjects.map(project => (
            <article
              key={project.title}
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {project.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-md border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/50 dark:text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FocusSection() {
  const items = [
    'Explainable AI and model interpretability',
    'NLP systems for summarisation and question answering',
    'Data-scarce regression and machine learning research',
    'Full-stack AI products with reliable deployment',
  ];

  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase text-indigo-700 dark:text-indigo-300">
            Focus
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-950 dark:text-white sm:text-3xl">
            Built around research depth and practical systems
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map(item => (
            <div
              key={item}
              className="rounded-lg border border-gray-200 bg-white/85 p-4 text-sm font-medium text-gray-700 dark:border-gray-800 dark:bg-gray-900/80 dark:text-gray-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="px-4 pb-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-lg border border-gray-200 bg-gray-950 p-6 text-white shadow-sm dark:border-gray-800 sm:p-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Open to internships and research collaborations
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-300">
            I am interested in AI/ML projects, data science work, research
            opportunities, and applied intelligent systems.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-950 transition hover:bg-gray-100"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-white">
      <HeroSection />
      <FeaturedProjectsSection />
      <FocusSection />
      <CTASection />
    </div>
  );
}
