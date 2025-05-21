'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="text-center md:text-left space-y-2">
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Harthik Manichandra Vanumu.
            </p>
            <p className="text-xs leading-5 text-gray-500 dark:text-gray-500">
              Made with <Heart className="inline-block h-3 w-3 text-red-500 animate-pulse" /> by Harthik Manichandra Vanumu
            </p>
          </div>
          <div className="flex justify-center space-x-8 sm:space-x-6">
            {[
              {
                icon: Github,
                href: "https://github.com/Harthik777",
                label: "GitHub"
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/harthik-mv/",
                label: "LinkedIn"
              },
              {
                icon: Mail,
                href: "mailto:harthik7777@gmail.com",
                label: "Email"
              }
            ].map(({ icon: Icon, href, label }) => (
              <motion.div 
                key={label}
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
                className="touch-manipulation"
              >
                <Link 
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-2 -m-2"
                >
                  <span className="sr-only">{label}</span>
                  <Icon className="h-6 w-6 sm:h-5 sm:w-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 