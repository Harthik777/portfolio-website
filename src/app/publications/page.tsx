import Link from 'next/link';

const publications = [
  {
    title: 'A Validated Machine Learning Framework for Data-Scarce Regression: SMOGN Augmentation in Cricket Performance Prediction',
    description: 'Manuscript Draft Completed, Pending Submission. This work presents a validated ML framework using SMOGN for regression in cricket performance prediction. See the main project for more details.',
    status: 'Pending Submission',
    link: 'https://docs.google.com/document/d/14HNHQ-XNDwT1Xysy7s41vyIKMKrlKzlob1ni2wmspdM/edit?tab=t.0',
    date: '10/2024 - 04/2025',
  },
];

export default function Publications() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900">
      <div className="relative isolate pt-20">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 text-center">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl gradient-text mb-4">Publications</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Here are my academic publications and manuscripts.
              </p>
            </div>
            <div className="mx-auto mt-20 max-w-2xl lg:mx-0 lg:max-w-none grid grid-cols-1 gap-y-16 sm:mt-24 animate-fade-in-up">
              {publications.map((pub, idx) => (
                <article
                  key={pub.title}
                  className="card p-8 bg-white/80 dark:bg-gray-900/80 shadow-2xl border border-indigo-100 dark:border-indigo-900 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <h3 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white mb-2">
                    {pub.link ? (
                      <Link href={pub.link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        {pub.title}
                      </Link>
                    ) : (
                      <span>{pub.title}</span>
                    )}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 mb-2">{pub.date} &mdash; <span className="italic">{pub.status}</span></p>
                  <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
                    {pub.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 