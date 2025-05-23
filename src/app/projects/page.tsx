import Link from 'next/link';

const projects = [

  {
    title: 'Predictive Modelling & Data Augmentation for Cricket Analytics',
    description: 'Developed a machine learning pipeline for predictive modeling in niche sports analytics (WPL cricket), addressing sparse datasets. Applied SMOGN and feature engineering to improve prediction accuracy. Collaborated with faculty and evaluated regression models. Created Python CLI for data scraping and preprocessing.',
    tags: ['Python', 'SMOGN', 'Regression', 'Feature Engineering', 'Sports Analytics', 'Machine Learning'],
    link: 'https://docs.google.com/document/d/14HNHQ-XNDwT1Xysy7s41vyIKMKrlKzlob1ni2wmspdM/edit?tab=t.0',
    date: '10/2024 - 04/2025',
  },
  {
    title: 'RBI NEFT Data Analysis and Visualization Platform',
    description: 'Developed a Flask web app to analyze and visualize large-scale RBI NEFT transaction datasets. Automated web scraping, processed data, and generated dynamic visualizations. Created interactive frontend using HTML, CSS, and Jinja2.',
    tags: ['Flask', 'SQLAlchemy', 'MySQL', 'BeautifulSoup', 'Jinja2', 'Matplotlib', 'Data Visualization'],
    link: 'https://github.com/Harthik777/rbi_neft_graphs',
    date: '03/2025 - 04/2025',
  },
  {
    title: 'A Validated Machine Learning Framework for Data-Scarce Regression: SMOGN Augmentation in Cricket Performance Prediction',
    description: 'Manuscript Draft Completed, Pending Submission. This research focuses on applying SMOGN for data augmentation in regression tasks within data-scarce sports analytics, specifically cricket performance prediction, to enhance model accuracy and reliability.',
    tags: ['Publication', 'SMOGN', 'Regression', 'Machine Learning', 'Research'],
    link: 'https://docs.google.com/document/d/14HNHQ-XNDwT1Xysy7s41vyIKMKrlKzlob1ni2wmspdM/edit?tab=t.0', // No direct link if it's part of another project's documentation
    date: '10/2024 - 04/2025',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Engineered a dynamic and responsive personal portfolio website leveraging Next.js, React, TypeScript, and Tailwind CSS to effectively showcase technical projects, skills (AI/ML, Data Science, Software Engineering), and professional background. Implemented key features including interactive project displays, and a skills section. Successfully deployed on Vercel, demonstrating proficiency in modern web development practices and UI/UX principles.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'UI/UX', 'Web Development'],
    link: 'https://portfolio-website1-harthik-s-projects.vercel.app/', // Link to the live portfolio
    githubLink: 'https://github.com/Harthik777/portfolio-website', // Link to the GitHub repo
    date: '05/2025', // Adjust date as per your development timeline
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900">
      <div className="relative isolate pt-40">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 text-center">
              <h2 className="relative z-10 text-4xl font-extrabold tracking-tight sm:text-5xl gradient-text mb-4 bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 bg-clip-text text-transparent px-4 py-2 rounded-lg">
                Projects & Publications
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Here are some of my key projects and publications, demonstrating my skills in AI/ML, data analysis, and software development.
              </p>
            </div>
            <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:mt-24 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {projects.map((project, idx) => (
                <article
                  key={project.title}
                  className={`card flex flex-col items-start p-8 bg-white/80 dark:bg-gray-900/80 shadow-2xl border border-indigo-100 dark:border-indigo-900 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 animate-fade-in-up`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="group relative w-full">
                    <h3 className="mt-3 text-2xl font-bold leading-7 text-gray-900 dark:text-white">
                      {project.link ? (
                        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                          <span className="absolute inset-0" />
                          {project.title}
                        </Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </h3>
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{project.date}</p>
                    <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                  {/* GitHub link rendering */}
                  {project.githubLink && (
                     <div className="mt-4">
                        <Link
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-x-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                            View on GitHub
                        </Link>
                     </div>
                  )}
                  <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 px-3 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-200 shadow"
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