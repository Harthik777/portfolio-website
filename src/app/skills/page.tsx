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
    <main className="min-h-screen">
      <div className="relative isolate pt-14">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Competencies</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Here are my technical skills and competencies, as demonstrated in my academic and project work.
              </p>
            </div>
            <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-10 sm:mt-24 lg:mx-0 lg:max-w-none lg:grid-cols-2 animate-fade-in">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="card flex flex-col p-7">
                  <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    {/* Optionally add icons here for each category */}
                    {category}
                  </h3>
                  <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {items.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-x-3 rounded-md bg-white dark:bg-gray-800 p-3 shadow-sm ring-1 ring-gray-900/5"
                      >
                        <div className="h-2 w-2 rounded-full bg-indigo-600" />
                        <span className="text-sm font-medium leading-6 text-gray-900 dark:text-white">
                          {skill}
                        </span>
                      </div>
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