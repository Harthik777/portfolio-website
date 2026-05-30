const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'C'],
  },
  {
    category: 'Machine Learning & AI',
    items: [
      'ML Model Development',
      'Feature Engineering',
      'SMOGN Data Augmentation',
      'Regression Analysis',
      'Ensemble Learning',
      'Scikit-learn',
      'Large Language Models',
      'Generative AI',
    ],
  },
  {
    category: 'Data Analysis & Visualisation',
    items: [
      'Data Analytics',
      'Statistical Analysis',
      'Pandas',
      'NumPy',
      'Seaborn',
      'Matplotlib',
    ],
  },
  {
    category: 'Web Development & Automation',
    items: [
      'Flask',
      'HTML',
      'CSS',
      'Jinja2',
      'Selenium',
      'BeautifulSoup4',
      'Requests',
    ],
  },
  {
    category: 'Databases',
    items: ['SQLAlchemy', 'MySQL'],
  },
  {
    category: 'Tools',
    items: ['Jupyter', 'VS Code', 'Git', 'GitHub', 'Excel'],
  },
];

export default function Skills() {
  return (
    <div className="page-surface">
      <section className="section-shell py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow">Skills</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-5xl">
              Technical range for research and applied systems
            </h1>
          </div>
          <div className="premium-panel p-5 lg:justify-self-end">
            <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
              Technical skills and competencies demonstrated through academic
              work, AI/ML research, data analysis, and deployed project work.
            </p>
          </div>
        </div>
        <div className="brand-divider mt-8" />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, index) => (
            <article
              key={group.category}
              className={`p-5 sm:p-6 ${
                index === 1
                  ? 'brand-panel md:col-span-2 xl:col-span-1'
                  : 'premium-card'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-sm font-semibold ${
                    index === 1
                      ? 'border border-white/10 bg-white/10 text-white'
                      : 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h2
                    className={`text-lg font-semibold ${
                      index === 1
                        ? 'text-white'
                        : 'text-slate-950 dark:text-white'
                    }`}
                  >
                    {group.category}
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map(skill => (
                      <span
                        key={skill}
                        className={
                          index === 1
                            ? 'rounded-md border border-white/10 bg-white/10 px-2.5 py-1 text-xs font-medium text-white'
                            : 'soft-chip'
                        }
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
