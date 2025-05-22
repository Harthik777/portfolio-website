'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="relative py-10 border-t-0 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950 text-center text-base text-gray-700 dark:text-gray-300 mt-16">
      {/* Gradient Divider */}
      <div className="absolute top-0 left-1/2 w-3/4 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-full -translate-x-1/2" />
      <div className="flex justify-center gap-8 mb-4">
        <a href="https://github.com/Harthik777" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition text-2xl">
          <Github className="h-7 w-7" />
        </a>
        <a href="https://www.linkedin.com/in/harthik-mv/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition text-2xl">
          <Linkedin className="h-7 w-7" />
        </a>
      </div>
      <div className="font-extrabold text-lg gradient-text mb-1">Harthik Manichandra Vanumu</div>
      <div className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Harthik M V. All rights reserved.</div>
    </footer>
  );
} 