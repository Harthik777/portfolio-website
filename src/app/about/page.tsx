const highlights = [
  {
    label: 'Education',
    title: 'Manipal Institute of Technology (MIT) Bengaluru',
    detail:
      'B.Tech in Computer Science and Engineering (Artificial Intelligence), 07/2023 - 07/2027.',
  },
  {
    label: 'Research',
    title: 'First Author - IEEE TENCON 2025',
    detail:
      'First author on conference paper accepted at IEEE TENCON 2025 for research on Machine Learning Framework for Data-Scarce Regression using SMOGN.',
  },
  {
    label: 'Leadership',
    title: 'IEEE Student Branch Vice-Chair',
    detail:
      'Leading a student branch comprising 11 IEEE technical societies, organizing interdisciplinary events and fostering collaboration among diverse technical chapters.',
  },
];

const achievements = [
  'RoboRun Competition & TechTatva Selection',
  'MaRRS International Spelling Bee Finalist',
  'Radar Robotics Club - Outreach Head',
];

export default function About() {
  return (
    <div className="page-surface">
      <section className="section-shell py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div data-reveal="left">
            <p className="eyebrow">About</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-5xl">
              AI/ML Research Intern & Team Lead
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
              Hi! I&apos;m Harthik Manichandra Vanumu, passionate about building
              intelligent systems and solving real-world problems. I am
              currently pursuing my B.Tech in Computer Science and Engineering
              (Artificial Intelligence) at Manipal Institute of Technology (MIT)
              Bengaluru.
            </p>
          </div>

          <div className="reveal-grid grid gap-4">
            {highlights.map((item, index) => (
              <article
                key={item.title}
                data-reveal="scale"
                className={`p-5 sm:p-6 ${
                  index === 1 ? 'brand-panel' : 'premium-card'
                }`}
              >
                <p
                  className={
                    index === 1
                      ? 'text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200'
                      : 'eyebrow'
                  }
                >
                  {item.label}
                </p>
                <h2
                  className={`mt-3 text-xl font-semibold ${
                    index === 1
                      ? 'text-white'
                      : 'text-slate-950 dark:text-white'
                  }`}
                >
                  {item.title}
                </h2>
                <p
                  className={`mt-3 text-sm leading-6 ${
                    index === 1
                      ? 'text-slate-300'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="brand-divider mt-8" />

        <div
          className="mt-8 rounded-lg border border-slate-200 bg-slate-950 p-6 text-white dark:border-slate-800 dark:bg-white dark:text-slate-950 sm:p-8"
          data-reveal="scale"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200 dark:text-indigo-700">
            Additional Signals
          </p>
          <div className="reveal-grid mt-5 grid gap-3 md:grid-cols-3">
            {achievements.map(item => (
              <div
                key={item}
                data-reveal
                className="rounded-md border border-white/10 bg-white/5 p-4 dark:border-slate-200 dark:bg-slate-50"
              >
                <p className="text-sm font-medium leading-6">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
