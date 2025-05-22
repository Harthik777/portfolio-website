'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400 mt-16">
      <div className="flex justify-center gap-6 mb-2">
        <a href="https://github.com/Harthik777" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">
          <Github className="h-5 w-5" />
        </a>
        <a href="https://www.linkedin.com/in/harthik-mv/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
      <div>Made with <span className="text-red-500">❤️</span> by Harthik Manichandra Vanumu</div>
      <div className="mt-1 text-xs text-gray-400">&copy; {new Date().getFullYear()} Harthik M V. All rights reserved.</div>
    </footer>
  );
} 