import Link from 'next/link';

const projects = [
  {
    title: 'Predictive Modelling & Data Augmentation for Cricket Analytics',
    description: 'Developed a machine learning pipeline for predictive modeling in niche sports analytics (WPL cricket), addressing sparse datasets. Applied SMOGN and feature engineering to improve prediction accuracy. Collaborated with faculty and evaluated regression models. Created Python CLI for data scraping and preprocessing.',
    tags: ['Python', 'SMOGN', 'Regression', 'Feature Engineering', 'Sports Analytics'],
    link: 'https://docs.google.com/document/d/14HNHQ-XNDwT1Xys7s41ylKMKr1kZlo1bni2wmspdM/edit?tab=0',
    date: '10/2024 - 04/2025',
  },
  {
    title: 'RBI NEFT Data Analysis and Visualization Platform',
    description: 'Developed a Flask web app to analyze and visualize large-scale RBI NEFT transaction datasets. Automated web scraping, processed data, and generated dynamic visualizations. Created interactive frontend using HTML, CSS, and Jinja2.',
    tags: ['Flask', 'SQLAlchemy', 'MySQL', 'BeautifulSoup', 'Jinja2', 'Matplotlib'],
    link: 'https://github.com/Harthik777/rbi_neft_graphs',
    date: '03/2025 - 04/2025',
  },
  {
    title: 'A Validated Machine Learning Framework for Data-Scarce Regression: SMOGN Augmentation in Cricket Performance Prediction',
    description: 'Manuscript Draft Completed, Pending Submission. (See details in first project above.)',
    tags: ['Publication', 'SMOGN', 'Regression'],
    link: '',
    date: '10/2024 - 04/2025',
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen">
      <div className="relative isolate pt-14">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects & Publications</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Here are some of my key projects and publications, demonstrating my skills in AI/ML, data analysis, and software development.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="flex flex-col items-start">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6">
                      {project.link ? (
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          <span className="absolute inset-0" />
                          {project.title}
                        </Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </h3>
                    <p className="mt-2 text-xs text-gray-500">{project.date}</p>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300 ring-1 ring-inset ring-indigo-700/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 