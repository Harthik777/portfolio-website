import Link from 'next/link';

type Project = {
  title: string;
  type: string;
  date: string;
  status?: string;
  summary: string;
  highlights: string[];
  tags: string[];
  links?: Array<{ label: string; href: string }>;
};

const projects: Project[] = [
  {
    title:
      'Explainable Transformer Framework for CPU-Based Document Summarisation and Question Answering',
    type: 'Accepted Research',
    date: '10/2025',
    status: 'AICCoNS 2026',
    summary:
      'Lightweight NLP framework for summarization and question answering entirely on CPU hardware.',
    highlights: [
      'Integrated compact transformer models including DistilBART, T5-Small, DistilBERT, MobileBERT, and RoBERTa-Base.',
      'Used KeyBERT and Sentence-BERT to surface input influence without expensive post-hoc explainers.',
      'Focused on low-latency, explainable inference without GPU or cloud dependency.',
    ],
    tags: ['NLP', 'Transformers', 'Explainable AI', 'CPU Inference', 'Python'],
  },
  {
    title: 'Smart Document Summarizer & Q&A Assistant',
    type: 'Application',
    date: '10/2025',
    summary:
      'NLP-powered application for multi-model document summarization, question answering, retrieval, and explainability.',
    highlights: [
      'Implemented BART and T5 summarization with DistilBERT and RoBERTa question answering.',
      'Added BM25, sentence embeddings, KeyBERT, LIME, ROUGE evaluation, wordclouds, and Gradio UI.',
      'Supports PDF and text processing with optimized CPU inference.',
    ],
    tags: ['NLP', 'PyTorch', 'Gradio', 'KeyBERT', 'ROUGE'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Harthik777/SmartNLPAssistant',
      },
    ],
  },
  {
    title: 'SustainAI: Carbon-Aware Air Quality Prediction Platform',
    type: 'Ongoing Research',
    date: '08/2025 - Present',
    status: 'Targeting IEEE Publication',
    summary:
      'Machine learning platform for air quality prediction with explainability and carbon footprint tracking.',
    highlights: [
      'Implemented Random Forest, XGBoost, and LSTM models for air quality prediction.',
      'Added SHAP and LIME interpretability dashboards.',
      'Tracks training and inference emissions with CodeCarbon.',
    ],
    tags: ['Sustainable AI', 'CodeCarbon', 'SHAP', 'XGBoost', 'Python'],
  },
  {
    title: 'Radiomics-Based CT Lesion Classification Framework',
    type: 'Research',
    date: '10/2025',
    summary:
      'Explainable radiomics pipeline for multi-class cerebrovascular CT lesion classification.',
    highlights: [
      'Built feature extraction using HOG, LBP, GLCM, Haralick descriptors, and Gabor filters.',
      'Benchmarks Random Forest, XGBoost, SVM, Bayesian Networks, and other ML algorithms.',
      'Includes SHAP explainability, calibration analysis, robustness tests, and CPU deployability focus.',
    ],
    tags: [
      'Medical AI',
      'Radiomics',
      'SHAP',
      'Model Calibration',
      'Healthcare ML',
    ],
  },
  {
    title: 'Agentic-XAI: AI-Powered Decision Support Platform',
    type: 'Full-Stack AI',
    date: '06/2025 - Present',
    status: 'Work in Progress',
    summary:
      'Full-stack decision support system for structured recommendations, reasoning, and confidence scores.',
    highlights: [
      'Built with Python, FastAPI, React, TypeScript, and Google Gemini API.',
      'Focused on scalable REST API design, robust error handling, and prompt engineering.',
      'Deployed frontend and backend using Vercel and Render.',
    ],
    tags: ['Agentic AI', 'FastAPI', 'React', 'TypeScript', 'Vercel'],
    links: [
      {
        label: 'Live',
        href: 'https://agentic-xai-harthik-s-projects.vercel.app/',
      },
      { label: 'GitHub', href: 'https://github.com/Harthik777/Agentic-XAI' },
    ],
  },
  {
    title: 'End-to-End Medical DevOps Pipeline',
    type: 'Data Engineering',
    date: '09/2025 - Present',
    status: 'Work in Progress',
    summary:
      'Containerized medical imaging data pipeline for ingestion, storage, and distributed processing.',
    highlights: [
      'Processes a large medical imaging dataset with more than 10,000 CT scans.',
      'Uses Docker, PostgreSQL, Apache Spark, PySpark, Python, and SQLAlchemy.',
      'Designed around a scalable master-slave architecture.',
    ],
    tags: ['MLOps', 'Docker', 'PostgreSQL', 'PySpark', 'ETL'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Harthik777/Medical-Devops-Project',
      },
    ],
  },
  {
    title: 'Predictive Modelling & Data Augmentation for Cricket Analytics',
    type: 'Research Project',
    date: '10/2024 - 05/2025',
    summary:
      'Machine learning pipeline for sparse WPL cricket analytics data using SMOGN and feature engineering.',
    highlights: [
      'Applied SMOGN to improve regression performance in a data-scarce setting.',
      'Evaluated regression models and collaborated with faculty.',
      'Created a Python CLI for scraping and preprocessing.',
    ],
    tags: ['SMOGN', 'Regression', 'Feature Engineering', 'Python'],
    links: [
      {
        label: 'Paper',
        href: '/SMOGN_Cricket_Analytics_Research_Paper.pdf',
      },
    ],
  },
  {
    title: 'RBI NEFT Data Analysis and Visualization Platform',
    type: 'Data Visualization',
    date: '03/2025 - 04/2025',
    summary:
      'Flask application for scraping, analyzing, and visualizing large-scale RBI NEFT transaction datasets.',
    highlights: [
      'Automated web scraping and data processing.',
      'Generated dynamic visualizations with Matplotlib.',
      'Built an interactive frontend with HTML, CSS, and Jinja2.',
    ],
    tags: ['Flask', 'SQLAlchemy', 'MySQL', 'BeautifulSoup', 'Matplotlib'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Harthik777/rbi_neft_graphs',
      },
    ],
  },
  {
    title: 'Machine Learning Framework for Data-Scarce Regression using SMOGN',
    type: 'Publication',
    date: '10/2024 - 05/2025',
    status: 'IEEE TENCON 2025',
    summary:
      'Accepted paper on SMOGN-based data augmentation and joint hyperparameter optimization for cricket performance prediction.',
    highlights: [
      'Accepted at IEEE TENCON 2025, flagship conference of IEEE Region 10.',
      'Focuses on data-scarce regression in sports analytics.',
      'Uses LaTeX, machine learning, SMOGN, and regression modelling.',
    ],
    tags: ['Publication', 'SMOGN', 'Regression', 'Machine Learning', 'LaTeX'],
    links: [
      {
        label: 'Paper',
        href: '/SMOGN_Cricket_Analytics_Research_Paper.pdf',
      },
    ],
  },
  {
    title: 'Personal Portfolio Website',
    type: 'Web Development',
    date: '05/2025',
    summary:
      'Responsive portfolio website built to showcase projects, skills, professional background, and contact paths.',
    highlights: [
      'Built with Next.js, React, TypeScript, Tailwind CSS, and Vercel.',
      'Includes project displays, skills section, resume access, and contact flow.',
      'Demonstrates modern web development and UI/UX practices.',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    links: [
      {
        label: 'Live',
        href: 'https://portfolio-website1-harthik-s-projects.vercel.app/',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/Harthik777/portfolio-website',
      },
    ],
  },
  {
    title: 'MarketSense - Financial Market Sentiment Analysis Platform',
    type: 'Financial AI',
    date: '07/2025 - Present',
    status: 'Work in Progress',
    summary:
      'AI-powered platform for financial market sentiment analysis using TensorFlow.js and RSS news feeds.',
    highlights: [
      'Includes sentiment analysis, batch processing, market dashboard, and portfolio risk assessment.',
      'Built with React 18, TypeScript, Chart.js, Tailwind CSS, Vite, and Vercel.',
      'Uses free RSS feeds from Yahoo Finance with zero API costs.',
    ],
    tags: ['TensorFlow.js', 'Financial Analysis', 'Chart.js', 'Vite', 'Vercel'],
    links: [
      { label: 'Live', href: 'https://project2-ten-iota.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/Harthik777/Project2' },
    ],
  },
];

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={`premium-card content-visibility-auto p-5 sm:p-6 ${
        featured ? 'lg:p-7' : ''
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          {project.type}
        </span>
        {project.status && (
          <span className="status-chip">{project.status}</span>
        )}
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {project.date}
        </span>
      </div>

      <h2
        className={`mt-4 font-semibold leading-tight text-slate-950 dark:text-white ${
          featured ? 'text-2xl sm:text-3xl' : 'text-xl'
        }`}
      >
        {project.title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {project.summary}
      </p>

      <ul className="mt-5 space-y-2">
        {project.highlights.map(highlight => (
          <li
            key={highlight}
            className="flex gap-2 text-sm leading-6 text-slate-700 dark:text-slate-300"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-300" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0, 6).map(tag => (
          <span key={tag} className="soft-chip">
            {tag}
          </span>
        ))}
      </div>

      {project.links && (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={
                link.href.startsWith('http') ? 'noopener noreferrer' : undefined
              }
              className="premium-link"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  const featuredProjects = projects.slice(0, 3);
  const additionalProjects = projects.slice(3);

  return (
    <div className="page-surface">
      <section className="section-shell py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow">Projects</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-5xl">
              Research, AI systems, and applied data products
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 lg:justify-self-end">
            A focused view of my strongest AI/ML, data science, research, and
            software engineering work. Each card highlights the purpose,
            strongest proof points, stack, and available links.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
            >
              <ProjectCard project={project} featured={index === 0} />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              More work
            </h2>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {additionalProjects.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
