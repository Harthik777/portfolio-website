'use client';

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
          Have a question or want to work together? Reach out via email or LinkedIn!
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 my-16">
        <a
          href="mailto:harthik7777@gmail.com"
          className="text-indigo-600 hover:underline text-xl font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          📧 harthik7777@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/harthik-mv/"
          className="text-indigo-600 hover:underline text-xl font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          💼 LinkedIn
        </a>
      </div>
    </div>
  );
} 