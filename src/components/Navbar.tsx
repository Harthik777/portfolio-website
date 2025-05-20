'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

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

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <nav className="flex items-center justify-between p-4 md:p-6 lg:px-8 relative" aria-label="Global">
        <div className="flex lg:flex-1 items-center" />
        <div className="flex lg:hidden z-50">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition z-50"
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
              className="text-base font-medium leading-6 px-3 py-2 rounded hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-300 transition"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact" className="ml-4 rounded-lg bg-indigo-600 px-4 py-2 text-base font-semibold text-white shadow hover:bg-indigo-500 transition">
            Contact
          </Link>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-gray-900 flex flex-col justify-center items-center min-h-screen w-full transition-opacity duration-300">
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
              className="mt-4 rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow hover:bg-indigo-500 transition text-center"
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