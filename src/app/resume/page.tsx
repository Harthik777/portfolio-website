import Link from 'next/link';

export default function Resume() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-indigo-900 dark:text-indigo-200">Resume</h1>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-200">
          Download or view my latest resume below. For more details about my experience, skills, and projects, feel free to explore the rest of this portfolio or <Link href="/contact" className="underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-300">contact me</Link>.
        </p>
        <a
          href="/Harthik_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
        >
          View / Download Resume (PDF)
        </a>
      </div>
    </main>
  );
} 