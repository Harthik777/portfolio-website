'use client';

import React, { useEffect, useState } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />
    );
  }

  const themes = [
    { name: 'Light', value: 'light', icon: Sun },
    { name: 'Dark', value: 'dark', icon: Moon },
    { name: 'System', value: 'system', icon: Monitor },
  ];

  const currentTheme = themes.find(t => t.value === theme) || themes[2];
  const CurrentIcon = currentTheme.icon;

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowDropdown(!showDropdown)}
        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-indigo-100 to-purple-100 shadow-lg backdrop-blur-sm transition-all duration-300 hover:from-indigo-200 hover:to-purple-200 hover:shadow-xl dark:border-gray-600/50 dark:from-gray-700 dark:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500"
        aria-label={`Current theme: ${currentTheme.name}. Click to change theme`}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -90, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative"
        >
          <CurrentIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        </motion.div>

        {/* Indicator dot for system theme */}
        {theme === 'system' && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-gradient-to-br from-green-400 to-emerald-500 shadow-sm dark:border-gray-800"
          />
        )}
      </motion.button>

      <AnimatePresence>
        {showDropdown && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setShowDropdown(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute right-0 top-12 z-50 w-48 overflow-hidden rounded-xl border border-gray-200/50 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-gray-700/50 dark:bg-gray-800/95"
            >
              <div className="p-2">
                {themes.map(themeOption => {
                  const Icon = themeOption.icon;
                  const isActive = theme === themeOption.value;
                  const isCurrentResolved =
                    resolvedTheme === themeOption.value ||
                    (themeOption.value === 'system' && theme === 'system');

                  return (
                    <motion.button
                      key={themeOption.value}
                      whileHover={{ x: 4 }}
                      onClick={() => {
                        setTheme(themeOption.value);
                        setShowDropdown(false);
                      }}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-all duration-200 ${
                        isActive
                          ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      <div className="relative">
                        <Icon
                          className={`h-4 w-4 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400'}`}
                        />
                        {isCurrentResolved && theme === 'system' && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-green-500"
                          />
                        )}
                      </div>
                      <span className="font-medium">{themeOption.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTheme"
                          className="ml-auto h-2 w-2 rounded-full bg-indigo-500"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Current resolved theme indicator */}
              <div className="border-t border-gray-200/50 bg-gray-50/50 px-3 py-2 dark:border-gray-700/50 dark:bg-gray-900/50">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Currently:{' '}
                  <span className="font-medium capitalize">
                    {resolvedTheme}
                  </span>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
