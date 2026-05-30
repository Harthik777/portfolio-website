import Link from 'next/link';

const proofPoints = [
  {
    label: 'First Author',
    title: 'IEEE TENCON 2025',
    detail:
      'Accepted research on data-scarce regression using SMOGN and joint hyperparameter optimization.',
  },
  {
    label: 'Accepted Research',
    title: 'AICCoNS 2026',
    detail:
      'Explainable transformer framework for CPU-based summarisation and question answering.',
  },
  {
    label: 'Leadership',
    title: 'IEEE Student Branch Vice-Chair',
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
  },
  {
    title: 'Agentic-XAI',
    summary:
      'Full-stack decision support platform using FastAPI, React, TypeScript, and Gemini API for structured recommendations.',
    tags: ['Agentic AI', 'FastAPI', 'React', 'Vercel'],
  },
  {
    title: 'SustainAI',
    summary:
      'Air quality prediction platform with model explainability and carbon footprint tracking using CodeCarbon.',
    tags: ['Sustainable AI', 'SHAP', 'CodeCarbon', 'Python'],
  },
];

const focusAreas = [
  'Explainable AI and model interpretability',
  'NLP systems for summarisation and question answering',
  'Data-scarce regression and machine learning research',
  'Full-stack AI products with reliable deployment',
];

function HeroSection() {
  return (
    <section className="section-shell grid min-h-[calc(100svh-4rem)] gap-8 py-10 sm:py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-20">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-3 rounded-md border border-slate-200 bg-white/80 px-3 py-2 dark:border-slate-800 dark:bg-slate-900/80">
          <span className="h-2 w-2 rounded-sm bg-emerald-500" />
          <p className="eyebrow">AI/ML Research Intern & Team Lead</p>
        </div>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
          Harthik M V
        </h1>
        <p className="mt-5 max-w-2xl text-2xl font-semibold leading-tight text-slate-800 dark:text-slate-100 sm:text-3xl">
          Research-led AI systems with explainable depth.
        </p>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
          Focused on explainable machine learning, NLP, data science, and
          research-oriented systems. Currently pursuing B.Tech in Computer
          Science (AI) at Manipal Institute of Technology (MIT) Bengaluru.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/projects" className="premium-button">
            View Projects
          </Link>
          <Link href="/resume" className="premium-button-secondary">
            View Resume
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50 dark:text-indigo-300 dark:hover:bg-indigo-950/50"
          >
            Contact
          </Link>
        </div>

        <div className="mt-8 grid max-w-2xl grid-cols-3 overflow-hidden rounded-lg border border-slate-200 bg-white/75 text-center dark:border-slate-800 dark:bg-slate-900/75">
          {['XAI', 'NLP', 'Data Science'].map(item => (
            <div
              key={item}
              className="border-r border-slate-200 px-3 py-4 last:border-r-0 dark:border-slate-800"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="brand-panel p-5 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-[0.62fr_1fr] sm:items-stretch">
          <div className="signature-mark min-h-56 sm:min-h-full">
            <div className="relative z-10 text-center">
              <p className="text-5xl font-semibold tracking-tight">AI</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
                XAI / ML
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-5 rounded-lg border border-white/10 bg-white/[0.06] p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
                Strongest Signals
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight">
                Research proof before decoration.
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              {['IEEE', 'CPU AI', 'Leadership'].map(item => (
                <div
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.06] px-2 py-3"
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 divide-y divide-white/10 rounded-lg border border-white/10 bg-slate-950/45">
          {proofPoints.map(item => (
            <article key={item.title} className="p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <span className="status-chip w-fit">{item.label}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectsSection() {
  return (
    <section className="section-band py-12 sm:py-16">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Selected Work</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">
              Applied AI with research-grade depth
            </h2>
          </div>
          <Link
            href="/projects"
            className="w-fit text-sm font-semibold text-indigo-700 hover:text-indigo-900 dark:text-indigo-300 dark:hover:text-indigo-200"
          >
            Browse all projects
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className={`p-5 sm:p-6 ${
                index === 0
                  ? 'accent-panel lg:col-span-2 lg:row-span-2 lg:p-8'
                  : 'premium-card'
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                  index === 0
                    ? 'text-emerald-200'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                Project 0{index + 1}
              </p>
              <h3
                className={`mt-3 font-semibold ${
                  index === 0
                    ? 'text-3xl leading-tight text-white sm:text-4xl'
                    : 'text-xl text-slate-950 dark:text-white'
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`mt-4 text-sm leading-6 ${
                  index === 0
                    ? 'max-w-2xl text-indigo-100'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {project.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className={
                      index === 0
                        ? 'rounded-md border border-white/10 bg-white/10 px-2.5 py-1 text-xs font-medium text-white'
                        : 'soft-chip'
                    }
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
  return (
    <section className="section-shell grid gap-8 py-12 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <div>
        <p className="eyebrow">Focus</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">
          Clear, practical, research-led engineering
        </h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {focusAreas.map(item => (
          <div key={item} className="premium-panel-muted p-4">
            <p className="text-sm font-medium leading-6 text-slate-700 dark:text-slate-200">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section-shell pb-12 sm:pb-16">
      <div className="rounded-lg bg-slate-950 p-6 text-white shadow-sm dark:bg-white dark:text-slate-950 sm:p-8 md:flex md:items-center md:justify-between md:gap-8">
        <div>
          <h2 className="text-2xl font-semibold">
            Open to internships and research collaborations
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 dark:text-slate-600">
            I am interested in AI/ML projects, data science work, research
            opportunities, and applied intelligent systems.
          </p>
        </div>
        <Link
          href="/contact"
          className="mt-6 inline-flex min-h-11 shrink-0 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-800 md:mt-0"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="page-surface">
      <HeroSection />
      <FeaturedProjectsSection />
      <FocusSection />
      <CTASection />
    </div>
  );
}
