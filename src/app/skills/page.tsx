const skills = {
  'Programming Languages': ['Python', 'Java', 'C'],
  'Data Analysis & Visualisation': [
    'Data Analytics',
    'Statistical Analysis',
    'Pandas',
    'NumPy',
    'Seaborn',
    'Matplotlib',
  ],
  'Machine Learning & AI': [
    'Machine Learning Model Development & Evaluation',
    'Feature Engineering',
    'Data Augmentation (SMOGN)',
    'Regression',
    'Ensemble Learning',
    'Scikit-learn',
    'LLM',
    'Generative AI',
  ],
  Databases: ['SQLAlchemy', 'MySQL'],
  'Web Development & Automation': [
    'Flask',
    'HTML',
    'CSS',
    'Jinja2',
    'Selenium',
    'BeautifulSoup4',
    'Requests',
  ],
  Tools: ['Jupyter', 'VS Code', 'Git', 'GitHub', 'Excel'],
};

export default function Skills() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900">
      <div className="relative isolate pt-20">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="card mx-auto max-w-4xl animate-fade-in-up border border-indigo-100 bg-white/80 p-12 text-center shadow-2xl dark:border-indigo-900 dark:bg-gray-900/80">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="gradient-text mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Skills & Competencies
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Here are my technical skills and competencies, as demonstrated in my 
                <span className="font-semibold text-indigo-600 dark:text-indigo-400"> academic</span> and 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> project work</span>, with focus on 
                <span className="font-semibold text-pink-600 dark:text-pink-400"> AI/ML research</span>.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-4">
                <div className="flex items-center space-x-2 rounded-full bg-indigo-100 px-3 py-2 sm:px-4 dark:bg-indigo-900/50">
                  <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                  <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300 sm:text-sm">Technical Expertise</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-purple-100 px-3 py-2 sm:px-4 dark:bg-purple-900/50">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 sm:text-sm">Programming Languages</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-pink-100 px-3 py-2 sm:px-4 dark:bg-pink-900/50">
                  <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                  <span className="text-xs font-medium text-pink-700 dark:text-pink-300 sm:text-sm">Tools & Frameworks</span>
                </div>
              </div>
            </div>
            
            <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-10 sm:mt-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {Object.entries(skills).map(([category, items], idx) => (
                <div
                  key={category}
                  className="card flex animate-fade-in-up flex-col border border-indigo-100 bg-white/80 p-8 shadow-2xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl dark:border-indigo-900 dark:bg-gray-900/80"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold leading-7 tracking-tight text-gray-900 dark:text-white">
                    {/* Optionally add icons here for each category */}
                    {category}
                  </h3>
                  <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {items.map(skill => (
                      <span
                        key={skill}
                        className="mb-2 inline-flex items-center rounded-full border border-indigo-200 bg-white/90 px-3 py-2 text-sm font-semibold text-indigo-700 shadow backdrop-blur-sm transition-all hover:scale-105 hover:shadow-lg dark:border-indigo-700 dark:bg-gray-800/90 dark:text-indigo-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
