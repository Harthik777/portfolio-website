import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative isolate pt-28 pb-16">
        <div className="py-16 sm:py-24 lg:pb-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-4 text-indigo-900 dark:text-indigo-200">
                HARTHIK MANICHANDRA VANUMU
              </h1>
              <p className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                B.Tech in Computer Science and Engineering (Artificial Intelligence) @ Manipal Institute of Technology (MIT) Bengaluru
              </p>
              <p className="mt-4 text-xl leading-8 text-gray-700 dark:text-gray-200 mb-6">
                Aspiring AI/ML Engineer &bull; Data Science &bull; Research<br />Open to Internships & Collaborations
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
                <Link
                  href="/projects"
                  className="rounded-lg bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
                >
                  View Projects
                </Link>
                <Link href="https://www.linkedin.com/in/harthik-mv/" target="_blank" rel="noopener noreferrer" className="text-base font-semibold leading-6 underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-300 transition">
                  LinkedIn
                </Link>
                <Link href="https://github.com/Harthik777" target="_blank" rel="noopener noreferrer" className="text-base font-semibold leading-6 underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-300 transition">
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-2xl font-bold leading-7 text-indigo-700 dark:text-indigo-300 mb-2">What I Do</h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl mb-4 text-gray-900 dark:text-white">
              Building the Future with AI, Data, and Automation
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-200">
              I specialize in developing machine learning solutions, building intelligent systems, and automating data-driven workflows for impactful results.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
