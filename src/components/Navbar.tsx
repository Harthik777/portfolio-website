'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Publications', href: '/publications' },
  { name: 'Skills', href: '/skills' },
  { name: 'Resume', href: '/resume' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl border-b border-white/20 dark:border-gray-800/60 shadow-lg">
      <nav className="flex items-center justify-between px-8 py-4 md:py-5 lg:px-16 relative" aria-label="Global">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-extrabold tracking-tight gradient-text select-none">Harthik M V</span>
        </div>
        <div className="flex lg:hidden z-50">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition z-50"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-base font-semibold leading-6 px-3 py-2 rounded transition-colors duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-300 ${
                pathname === item.href
                  ? 'text-indigo-700 dark:text-indigo-300 font-bold'
                  : 'text-gray-900 dark:text-white'
              }`}
            >
              {item.name}
              {pathname === item.href && (
                <span className="absolute left-1/2 -bottom-1 w-2/3 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-full -translate-x-1/2 animate-underline" />
              )}
            </Link>
          ))}
          <Link href="/contact" className="ml-4 rounded-full bg-indigo-700 px-5 py-2 text-base font-semibold text-white shadow hover:bg-indigo-800 transition">
            Contact
          </Link>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-gray-900/80 dark:bg-gray-950/90 flex flex-col justify-center items-center min-h-screen w-full transition-opacity duration-300 backdrop-blur-md">
          <button
            type="button"
            className="absolute top-6 right-6 text-3xl text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
          </button>
          <nav className="flex flex-col items-center space-y-6 w-full">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-semibold text-white hover:text-indigo-300 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 rounded-full bg-indigo-700 px-8 py-3 text-lg font-semibold text-white shadow hover:bg-indigo-800 transition text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 