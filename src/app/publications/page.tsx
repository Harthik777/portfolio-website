import Link from 'next/link';

const publications = [
  {
    title: 'A Validated Machine Learning Framework for Data-Scarce Regression: SMOGN Augmentation in Cricket Performance Prediction',
    description: 'Manuscript Draft Completed, Pending Submission. This work presents a validated ML framework using SMOGN for regression in cricket performance prediction. See the main project for more details.',
    status: 'Pending Submission',
    link: 'https://docs.google.com/document/d/14HNHQ-XNDwT1Xys7s41ylKMKr1kZlo1bni2wmspdM/edit?tab=0',
    date: '10/2024 - 04/2025',
  },
];

export default function Publications() {
  return (
    <main className="min-h-screen">
      <div className="relative isolate pt-14">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Publications</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Here are my academic publications and manuscripts.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
              {publications.map((pub) => (
                <article key={pub.title} className="mb-10">
                  <h3 className="text-xl font-semibold leading-7">
                    {pub.link ? (
                      <Link href={pub.link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                        {pub.title}
                      </Link>
                    ) : (
                      <span>{pub.title}</span>
                    )}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">{pub.date} &mdash; <span className="italic">{pub.status}</span></p>
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