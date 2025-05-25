'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

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
    <header className="fixed inset-x-0 top-0 z-50 glass-strong shadow-lg border-b border-white/20 dark:border-gray-700/30">
      <nav className="flex items-center justify-between px-8 py-4 md:py-5 lg:px-16 relative" aria-label="Global">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <Link href="/" className="text-2xl font-extrabold tracking-tight gradient-text select-none hover:scale-105 transition-transform glow-hover">
            Harthik M V
          </Link>
        </motion.div>
        
        <div className="flex lg:hidden z-50">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 dark:text-gray-200 glass hover:glass-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition-all z-50"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-7 w-7" aria-hidden="true" />
          </motion.button>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex lg:gap-x-6 items-center"
        >
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={`relative text-base font-semibold leading-6 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
                  pathname === item.href
                    ? 'text-indigo-700 dark:text-indigo-300 font-bold glass-strong glow'
                    : 'text-gray-900 dark:text-white hover:glass hover:text-indigo-700 dark:hover:text-indigo-300'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.span 
                    layoutId="underline"
                    className="absolute left-1/2 -bottom-1 w-2/3 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-full -translate-x-1/2 glow" 
                  />
                )}
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <ThemeToggle />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link 
              href="/contact" 
              className="ml-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-6 py-2.5 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 glow-hover"
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </nav>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/60 dark:bg-black/80 flex flex-col justify-center items-center min-h-screen w-full backdrop-blur-xl"
          >
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="absolute top-6 right-6 text-3xl text-white glass-strong rounded-full p-2 focus:outline-none hover:bg-white/20"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </motion.button>
            
            <nav className="flex flex-col items-center space-y-8 w-full">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className={`text-2xl font-semibold transition-all duration-300 hover:scale-110 px-6 py-3 rounded-xl ${
                      pathname === item.href
                        ? 'text-indigo-300 glass-strong glow'
                        : 'text-white hover:text-indigo-300 hover:glass'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: navigation.length * 0.1, duration: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="mt-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:shadow-2xl transition-all text-center hover:scale-110 glow-hover"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: (navigation.length + 1) * 0.1, duration: 0.4 }}
                className="mt-6"
              >
                <ThemeToggle />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}