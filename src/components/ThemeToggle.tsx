'use client';

import { useEffect, useState } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const themes = [
  { name: 'Light', value: 'light', icon: Sun },
  { name: 'Dark', value: 'dark', icon: Moon },
  { name: 'System', value: 'system', icon: Monitor },
];

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  const activeTheme = themes.find(item => item.value === theme) ?? themes[2];
  const ActiveIcon = activeTheme.icon;

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-md border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900" />
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(value => !value)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition duration-200 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
        aria-label={`Theme: ${activeTheme.name}`}
        aria-expanded={open}
      >
        <ActiveIcon className="h-4 w-4" aria-hidden="true" />
      </button>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default"
            aria-label="Close theme menu"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-12 z-50 w-44 overflow-hidden rounded-lg border border-slate-200 bg-white p-1 shadow-lg dark:border-slate-800 dark:bg-slate-950">
            {themes.map(item => {
              const Icon = item.icon;
              const isActive = item.value === theme;

              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => {
                    setTheme(item.value);
                    setOpen(false);
                  }}
                  className={`flex min-h-10 w-full items-center gap-3 rounded-md px-3 text-sm font-medium transition duration-200 ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span>{item.name}</span>
                </button>
              );
            })}
            <div className="border-t border-slate-200 px-3 py-2 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
              Active: {resolvedTheme}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
