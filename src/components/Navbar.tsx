'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { navVariants, mobileMenuVariants, staggerContainer } from '@/lib/animations';

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

export function Navbar() {
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
    <>      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/50 bg-white/80 shadow-lg backdrop-blur-md dark:border-gray-700/50 dark:bg-gray-900/80 supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-gray-900/60">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-3 xs:py-4 sm:py-5"
          aria-label="Global navigation"
        >
          {/* Enhanced Logo with better mobile sizing */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={navVariants}
            transition={{ duration: 0.5 }}
          >            <Link
              href="/"
              className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold tracking-tight text-gray-900 transition-all duration-300 hover:text-indigo-600 hover:scale-105 dark:text-white dark:hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-lg p-1"
              aria-label="Harthik M V - Home"
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Harthik M V
              </span>
            </Link>
          </motion.div>          {/* Desktop Navigation */}          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="hidden items-center space-x-1 xl:space-x-2 lg:flex"
          >
            {navigation.map(item => (
              <motion.div key={item.name} variants={navVariants}>
                <Link
                  href={item.href}
                  className={`relative rounded-lg px-2.5 xl:px-3 py-2 text-sm xl:text-base font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 ${
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
            </motion.div>            <motion.div variants={navVariants}>
              <Link
                href="/contact"
                className="ml-3 xl:ml-4 inline-flex min-h-[44px] items-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 sm:px-6 xl:px-8 py-2.5 xl:py-3 text-sm xl:text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95"
                aria-label="Contact me"
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>          {/* Mobile menu button */}
          <motion.button
            initial="hidden"
            animate="visible"
            variants={navVariants}
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white lg:hidden transition-all duration-200 active:scale-95"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
          >
            <span className="sr-only">
              {mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            </span>
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </motion.div>
              )}
            </AnimatePresence>
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
            />            {/* Menu panel */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ duration: 0.2 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-md px-4 xs:px-6 py-4 xs:py-6 dark:bg-gray-900/95 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-700/50 lg:hidden border-l border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="flex items-center justify-between mb-6">
                <Link
                  href="/"
                  className="text-lg xs:text-xl font-bold tracking-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-lg p-1"
                  onClick={closeMobileMenu}
                  aria-label="Harthik M V - Home"
                >
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Harthik M V
                  </span>
                </Link>
                <button
                  type="button"
                  className="rounded-md p-2.5 min-h-[44px] min-w-[44px] text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">                  <motion.div 
                    className="space-y-1 py-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        variants={navVariants}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className={`block rounded-lg px-4 py-3 text-base font-semibold leading-7 transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-[0.98] min-h-[44px] flex items-center ${
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
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="py-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center justify-between py-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
                        <ThemeToggle />
                      </div>
                      <Link
                        href="/contact"
                        className="w-full inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95"
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
