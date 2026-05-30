'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

const navigation = [
  { name: 'Home', href: '/', ariaLabel: 'Go to home page' },
  { name: 'Projects', href: '/projects', ariaLabel: 'View projects' },
  {
    name: 'Publications',
    href: '/publications',
    ariaLabel: 'Read publications',
  },
  { name: 'Skills', href: '/skills', ariaLabel: 'See skills' },
  { name: 'Resume', href: '/resume', ariaLabel: 'View resume' },
];

function NavLink({
  href,
  name,
  ariaLabel,
  onClick,
}: {
  href: string;
  name: string;
  ariaLabel: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
      className={`rounded-md px-3 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 ${
        isActive
          ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white'
      }`}
    >
      {name}
    </Link>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-slate-50/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Global navigation"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md text-base font-bold text-slate-950 transition hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-white dark:hover:text-indigo-300 dark:focus:ring-offset-slate-950"
            aria-label="Harthik M V - Home"
          >
            <span className="grid h-7 w-7 place-items-center rounded-md bg-slate-950 text-[0.65rem] font-semibold text-white dark:bg-white dark:text-slate-950">
              HM
            </span>
            Harthik M V
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map(item => (
              <NavLink key={item.href} {...item} />
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
            <Link
              href="/contact"
              className="ml-2 inline-flex min-h-10 items-center rounded-md bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 dark:focus:ring-offset-slate-950"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-slate-300 dark:hover:bg-slate-900 dark:focus:ring-offset-slate-950 lg:hidden"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 h-full w-full bg-slate-950/60"
            aria-label="Close menu overlay"
            onClick={closeMobileMenu}
          />
          <div className="absolute inset-y-0 right-0 w-full max-w-sm border-l border-slate-200 bg-white p-5 shadow-xl dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="inline-flex items-center gap-2 font-bold text-slate-950 dark:text-white"
              >
                <span className="grid h-7 w-7 place-items-center rounded-md bg-slate-950 text-[0.65rem] font-semibold text-white dark:bg-white dark:text-slate-950">
                  HM
                </span>
                Harthik M V
              </Link>
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-8 grid gap-2">
              {navigation.map(item => (
                <NavLink key={item.href} {...item} onClick={closeMobileMenu} />
              ))}
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Theme
                </span>
                <ThemeToggle />
              </div>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
