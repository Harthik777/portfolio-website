const skills = {
  'Programming Languages': ['Python', 'Java', 'C'],
  'Data Analysis & Visualisation': ['Data Analytics', 'Statistical Analysis', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib'],
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
  'Databases': ['SQLAlchemy', 'MySQL'],
  'Web Development & Automation': ['Flask', 'HTML', 'CSS', 'Jinja2', 'Selenium', 'BeautifulSoup4', 'Requests'],
  'Tools': ['Jupyter', 'VS Code', 'Git', 'GitHub', 'Excel'],
};

export default function Skills() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900">
      <div className="relative isolate pt-20">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 text-center">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl gradient-text mb-4">Skills & Competencies</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Here are my technical skills and competencies, as demonstrated in my academic and project work.
              </p>
            </div>
            <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-10 sm:mt-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {Object.entries(skills).map(([category, items], idx) => (
                <div key={category} className="card flex flex-col p-8 bg-white/80 dark:bg-gray-900/80 shadow-2xl border border-indigo-100 dark:border-indigo-900 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <h3 className="text-2xl font-bold leading-7 tracking-tight text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    {/* Optionally add icons here for each category */}
                    {category}
                  </h3>
                  <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 px-3 py-2 text-sm font-semibold text-indigo-700 dark:text-indigo-200 shadow mb-2"
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