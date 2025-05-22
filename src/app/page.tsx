import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 opacity-80" />

      {/* SVG Wave Divider */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 -z-10"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,197.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      {/* Hero Section */}
      <section className="relative isolate pt-40 pb-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight gradient-text drop-shadow-lg animate-fade-in">
          HARTHIK MANICHANDRA VANUMU
        </h1>
        <p className="mt-6 text-2xl font-semibold text-white/90 dark:text-indigo-100 animate-fade-in">
          B.Tech in Computer Science and Engineering (Artificial Intelligence) @ MIT Bengaluru
        </p>
        <p className="mt-4 text-xl sm:text-2xl leading-9 text-white/80 dark:text-indigo-200 mb-10 animate-fade-in">
          Aspiring AI/ML Engineer &bull; Data Science &bull; Research<br />
          Open to Internships & Collaborations
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 animate-fade-in">
          <Link
            href="/projects"
            className="rounded-full bg-white/90 dark:bg-indigo-700 px-8 py-4 text-lg font-bold text-indigo-700 dark:text-white shadow-xl hover:bg-indigo-100 dark:hover:bg-indigo-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-indigo-700 px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-indigo-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Get in Touch
          </Link>
          <Link
            href="https://www.linkedin.com/in/harthik-mv/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-white/80 px-8 py-4 text-lg font-bold text-white hover:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/Harthik777"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-white/80 px-8 py-4 text-lg font-bold text-white hover:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            GitHub
          </Link>
        </div>
      </section>
    </main>
  );
}
