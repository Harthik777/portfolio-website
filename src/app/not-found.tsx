import Link from 'next/link';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

export default function NotFound() {
  return (
    <div className="page-surface flex min-h-screen items-center">
      <section className="section-shell py-12 sm:py-16">
        <div
          className="premium-panel mx-auto max-w-2xl p-8 text-center sm:p-12"
          data-reveal="scale"
        >
          <p className="eyebrow">404</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white sm:text-5xl">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="premium-button">
              Go Home
            </Link>
            <Link href="/projects" className="premium-button-secondary">
              View Projects
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {links.map(link => (
              <Link key={link.href} href={link.href} className="soft-chip">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
