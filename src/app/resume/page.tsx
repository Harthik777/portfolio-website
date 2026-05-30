import Link from 'next/link';

const experiences = [
  {
    role: 'Research Intern',
    organization: 'Manipal Institute of Technology (MIT) Bengaluru',
    supervisor: 'Dr. Usha Moorthy',
    title:
      'A Machine Learning Framework for Data-Scarce Regression using SMOGN with Joint Hyperparameter Optimization: A Case Study with Cricket Performance Prediction',
    outcome:
      'First Author on publication accepted at IEEE TENCON 2025, the flagship conference of IEEE Region 10, Asia Pacific.',
  },
  {
    role: 'Research Intern',
    organization: 'Manipal Institute of Technology (MIT) Bengaluru',
    supervisor: 'Soumyashree M. Panchal and Dr. Vishnu Srinivasa Murthy Y',
    title:
      'Performance Degradation of Deep and Traditional Machine Learning Models Under Market Volatility: An Inter-Day Stock Trend Comparison',
    outcome:
      'Accepted for Presentation at IEEE INDICON 2025, the flagship IEEE India Council conference in India.',
  },
  {
    role: 'Research Intern',
    organization: 'Manipal Institute of Technology (MIT) Bengaluru',
    supervisor: 'Shweta S. Aladakatti',
    title:
      'An Efficient and Explainable Transformer Framework for Unified Summarization and Question Answering',
    outcome:
      'Accepted for Presentation at Second International Conference on Artificial Intelligence, Computation, Communication, and Network Security (AICCoNS 2026).',
  },
];

const quickLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Publications', href: '/publications' },
  { label: 'Contact', href: '/contact' },
];

export default function Resume() {
  return (
    <div className="page-surface">
      <section className="section-shell py-12 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <aside className="brand-panel p-6 sm:p-8 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
              Resume
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Research experience, publications, and project work
            </h1>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              View my latest resume PDF, or use the quick links below to review
              the portfolio sections most relevant to AI/ML internships,
              research collaborations, and software projects.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href="/Harthik_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                View Resume PDF
              </a>
              {quickLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </aside>

          <div className="grid gap-4">
            {experiences.map(experience => (
              <article
                key={experience.title}
                className="premium-card p-5 sm:p-6"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                      {experience.organization}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">
                      {experience.role}
                    </h2>
                  </div>
                  <span className="status-chip w-fit">Accepted</span>
                </div>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  Supervisor: {experience.supervisor}
                </p>
                <p className="mt-4 text-base font-semibold leading-7 text-slate-950 dark:text-white">
                  {experience.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {experience.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="brand-divider mt-8" />
      </section>
    </div>
  );
}
