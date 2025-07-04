import Link from 'next/link';

const publications = [
  {
    title:
      'A Machine Learning Framework for Data-Scarce Regression using SMOGN with Joint Hyperparameter Optimization: A Case Study with Cricket Performance Prediction',
    description:
      'Manuscript Draft Completed, Submitted for Review (IEEE TENCON 2025). This work presents a validated ML framework using SMOGN for regression in cricket performance prediction. See the main project for more details.',
    status: 'Pending Review',
    link: '/SMOGN_Cricket_Analytics_Research_Paper.pdf',
    date: '10/2024 - 05/2025',
  },
];

export default function Publications() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900">
      <div className="relative isolate pt-20">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="card mx-auto max-w-4xl animate-fade-in-up border border-indigo-100 bg-white/80 p-12 text-center shadow-2xl dark:border-indigo-900 dark:bg-gray-900/80">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="gradient-text mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Publications
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Here are my 
                <span className="font-semibold text-indigo-600 dark:text-indigo-400"> academic publications</span> and 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> research manuscripts</span>, showcasing my contributions to 
                <span className="font-semibold text-pink-600 dark:text-pink-400"> AI/ML research</span>.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-4">
                <div className="flex items-center space-x-2 rounded-full bg-indigo-100 px-3 py-2 sm:px-4 dark:bg-indigo-900/50">
                  <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                  <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300 sm:text-sm">Research Papers</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-purple-100 px-3 py-2 sm:px-4 dark:bg-purple-900/50">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 sm:text-sm">Conference Proceedings</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-pink-100 px-3 py-2 sm:px-4 dark:bg-pink-900/50">
                  <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                  <span className="text-xs font-medium text-pink-700 dark:text-pink-300 sm:text-sm">Academic Contributions</span>
                </div>
              </div>
            </div>
            
            <div className="mx-auto mt-20 grid max-w-2xl animate-fade-in-up grid-cols-1 gap-y-16 sm:mt-24 lg:mx-0 lg:max-w-none">
              {publications.map((pub, idx) => (
                <article
                  key={pub.title}
                  className="group relative overflow-hidden rounded-3xl border border-indigo-200 bg-white/90 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl dark:border-indigo-800 dark:bg-gray-800/90"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <h3 className="mb-2 text-2xl font-bold leading-7 text-gray-900 dark:text-white">
                      {pub.link ? (
                        <Link
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                        >
                          {pub.title}
                        </Link>
                      ) : (
                        <span>{pub.title}</span>
                      )}
                    </h3>
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V7a1 1 0 00-1 1v9a1 1 0 001 1h6a1 1 0 001-1V8a1 1 0 00-1-1" />
                        </svg>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{pub.date}</span>
                      </div>
                      <div className="rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 px-3 py-1 dark:from-indigo-900/50 dark:to-purple-900/50">
                        <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">{pub.status}</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 p-4 dark:from-indigo-900/20 dark:to-purple-900/20">
                      <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                        {pub.description}
                      </p>
                    </div>
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
