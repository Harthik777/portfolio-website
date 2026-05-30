import Link from 'next/link';

const links = [
  { label: 'GitHub', href: 'https://github.com/Harthik777' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harthik-mv/' },
  { label: 'Email', href: 'mailto:harthik7777@gmail.com' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50 px-4 py-6 dark:border-slate-800 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-600 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>&copy; {currentYear} Harthik M V. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={
                link.href.startsWith('http') ? 'noopener noreferrer' : undefined
              }
              className="font-medium transition hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
