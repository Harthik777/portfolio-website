import Link from 'next/link';

const publications = [
  {
    title:
      'A Validated Machine Learning Framework for Data-Scarce Regression: SMOGN Augmentation in Cricket Performance Prediction',
    description:
      'Manuscript Draft Completed, Pending Submission. This work presents a validated ML framework using SMOGN for regression in cricket performance prediction. See the main project for more details.',
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
            <div className="mx-auto max-w-2xl text-center lg:mx-0">
              <h2 className="gradient-text mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Publications
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Here are my academic publications and manuscripts.
              </p>
            </div>
            <div className="mx-auto mt-20 grid max-w-2xl animate-fade-in-up grid-cols-1 gap-y-16 sm:mt-24 lg:mx-0 lg:max-w-none">
              {publications.map((pub, idx) => (
                <article
                  key={pub.title}
                  className="card animate-fade-in-up border border-indigo-100 bg-white/80 p-8 shadow-2xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl dark:border-indigo-900 dark:bg-gray-900/80"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
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
                  <p className="mb-2 mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {pub.date} &mdash;{' '}
                    <span className="italic">{pub.status}</span>
                  </p>
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
