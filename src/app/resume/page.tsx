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
    <div className="min-h-screen bg-gray-50 px-4 py-12 text-gray-950 dark:bg-gray-950 dark:text-white sm:px-6 sm:py-16 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
            <p className="text-sm font-semibold uppercase text-indigo-700 dark:text-indigo-300">
              Resume
            </p>
            <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
              Research experience, publications, and project work
            </h1>
            <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
              View my latest resume PDF, or use the quick links below to review
              the portfolio sections most relevant to AI/ML internships,
              research collaborations, and software projects.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/Harthik_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                View Resume PDF
              </a>
              {quickLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {experiences.map(experience => (
              <article
                key={experience.title}
                className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-6"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-950 dark:text-white">
                      {experience.role}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-indigo-700 dark:text-indigo-300">
                      {experience.organization}
                    </p>
                  </div>
                  <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    Accepted
                  </span>
                </div>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                  Supervisor: {experience.supervisor}
                </p>
                <p className="mt-4 text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  {experience.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {experience.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
