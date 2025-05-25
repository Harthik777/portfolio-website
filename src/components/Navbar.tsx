'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/', ariaLabel: 'Go to home page' },
  { name: 'About', href: '/about', ariaLabel: 'Learn about me' },
  { name: 'Projects', href: '/projects', ariaLabel: 'View my projects' },
  {
    name: 'Publications',
    href: '/publications',
    ariaLabel: 'Read my publications',
  },
  { name: 'Blog', href: '/blog', ariaLabel: 'Read my blog articles' },
  { name: 'Skills', href: '/skills', ariaLabel: 'See my skills' },
  { name: 'Resume', href: '/resume', ariaLabel: 'Download my resume' },
];

// Animation variants
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/50 bg-white/80 shadow-lg backdrop-blur-md dark:border-gray-700/50 dark:bg-gray-900/80">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Global navigation"
        >
          {/* Logo */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={navVariants}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-gray-900 transition-colors hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400 sm:text-2xl"
              aria-label="Harthik M V - Home"
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Harthik M V
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="hidden items-center space-x-1 lg:flex"
          >
            {navigation.map(item => (
              <motion.div key={item.name} variants={navVariants}>
                <Link
                  href={item.href}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    pathname === item.href
                      ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
                  }`}
                  aria-label={item.ariaLabel}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-lg bg-indigo-100 dark:bg-indigo-900/50"
                      style={{ zIndex: -1 }}
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            <motion.div variants={navVariants} className="ml-4">
              <ThemeToggle />
            </motion.div>

            <motion.div variants={navVariants}>
              <Link
                href="/contact"
                className="ml-4 inline-flex min-h-[48px] items-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                aria-label="Contact me"
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            initial="hidden"
            animate="visible"
            variants={navVariants}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white lg:hidden"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
          >
            <span className="sr-only">
              {mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            </span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </motion.button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Menu panel */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ duration: 0.2 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 dark:bg-gray-900 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 lg:hidden"
            >
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="text-lg font-bold tracking-tight"
                  onClick={closeMobileMenu}
                  aria-label="Harthik M V - Home"
                >
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Harthik M V
                  </span>
                </Link>
                <button
                  type="button"
                  className="rounded-md p-2.5 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
                  <div className="space-y-2 py-6">
                    {navigation.map(item => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors ${
                          pathname === item.href
                            ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
                            : 'text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800'
                        }`}
                        onClick={closeMobileMenu}
                        aria-label={item.ariaLabel}
                        aria-current={
                          pathname === item.href ? 'page' : undefined
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="py-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
                        <ThemeToggle />
                      </div>
                      <Link
                        href="/contact"
                        className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                        onClick={closeMobileMenu}
                        aria-label="Contact me"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
