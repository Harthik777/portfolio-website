'use client';

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
          Have a question or want to work together? Send me a message!
        </p>
      </div>

      <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfGjLwAHezXi1LT11h61MlfDgUkdeQrPDOXpzJ0jXQ-9awbiQ/viewform?embedded=true"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="rounded-lg"
          style={{ backgroundColor: 'transparent' }}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
} 