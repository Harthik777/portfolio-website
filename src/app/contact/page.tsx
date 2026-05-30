import { Linkedin, Mail } from 'lucide-react';

const contactLinks = [
  {
    label: 'Email',
    detail: 'harthik7777@gmail.com',
    href: 'mailto:harthik7777@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    detail: 'linkedin.com/in/harthik-mv',
    href: 'https://www.linkedin.com/in/harthik-mv/',
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <div className="page-surface">
      <section className="section-shell py-12 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-5xl">
            Let&apos;s talk about AI/ML projects, research, or internships
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Have a question or want to work together? I&apos;m always excited to
            discuss AI/ML projects, research collaborations, or internship
            opportunities.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {contactLinks.map(link => {
            const Icon = link.icon;

            return (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  link.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="premium-card group p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">
                  {link.label}
                </h2>
                <p className="mt-2 break-words text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {link.detail}
                </p>
                <p className="mt-5 text-sm font-semibold text-indigo-700 group-hover:text-indigo-900 dark:text-indigo-300 dark:group-hover:text-indigo-200">
                  Open link
                </p>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
