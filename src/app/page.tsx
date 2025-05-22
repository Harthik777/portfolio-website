import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative isolate pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
        <div className="py-20 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center animate-fade-in">
              <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl mb-6 gradient-text drop-shadow-lg">
                HARTHIK MANICHANDRA VANUMU
              </h1>
              <p className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-4">
                B.Tech in Computer Science and Engineering (Artificial Intelligence) @ Manipal Institute of Technology (MIT) Bengaluru
              </p>
              <p className="mt-4 text-2xl leading-9 text-gray-700 dark:text-gray-200 mb-8">
                Aspiring AI/ML Engineer &bull; Data Science &bull; Research<br />Open to Internships & Collaborations
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                <Link
                  href="/projects"
                  className="rounded-xl bg-indigo-600 px-7 py-4 text-lg font-semibold text-white shadow-xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
                >
                  View Projects
                </Link>
                <Link href="/contact" className="rounded-xl bg-white/80 dark:bg-gray-800/80 px-7 py-4 text-lg font-semibold text-indigo-700 dark:text-indigo-300 shadow-xl ring-1 ring-inset ring-indigo-200 dark:ring-indigo-700 hover:bg-indigo-50 dark:hover:bg-gray-700 transition">
                  Get in Touch
                </Link>
                <Link href="https://www.linkedin.com/in/harthik-mv/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold leading-6 underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-300 transition">
                  LinkedIn
                </Link>
                <Link href="https://github.com/Harthik777" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold leading-6 underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-300 transition">
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 sm:py-32 animate-fade-in">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-2xl font-bold leading-7 text-indigo-700 dark:text-indigo-300 mb-2">What I Do</h2>
            <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 text-gray-900 dark:text-white">
              Building the Future with AI, Data, and Automation
            </p>
            <p className="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-200">
              I specialize in developing machine learning solutions, building intelligent systems, and automating data-driven workflows for impactful results.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
