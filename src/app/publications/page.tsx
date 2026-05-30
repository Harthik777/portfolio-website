import Link from 'next/link';

const publications = [
  {
    title:
      'An Explainable and Resource-Efficient Transformer Pipeline for CPU-Based Document Summarisation and Question Answering',
    description:
      'Developed an explainable and resource-efficient transformer framework for unified text summarization and question answering. The system integrates lightweight models such as DistilBART, T5-Small, and MobileBERT, achieving competitive ROUGE and F1 scores with full CPU-only deployment. The framework embeds keyword and sentence-level explainability without external post-hoc computation.',
    status:
      'Accepted for Presentation at Second International Conference on Artificial Intelligence, Computation, Communication, and Network Security (AICCoNS 2026)',
    link: 'https://drive.google.com/file/d/18sE4HxkUeFYuDJ9gtP4r69GMyL4hf2sh/view?usp=sharing',
    date: '01/2026',
  },
  {
    title:
      'Performance Degradation of Deep and Traditional Machine Learning Models Under Market Volatility: An Inter-Day Stock Trend Comparison',
    description:
      'Investigated the performance degradation of machine learning models for stock trend prediction during periods of high market volatility, using inter-day data from 2015-2024. Evaluated and compared the performance of Long Short-Term Memory (LSTM), Dense Neural Networks (DNN), and Gradient Boosting Classifiers (GBC) on both stable and volatile stocks.',
    status:
      'Accepted for Presentation at IEEE INDICON 2025 (the flagship IEEE India Council conference in India)',
    link: 'https://drive.google.com/file/d/1R5XoQzxthCNheDpmSTBnC4iL0w0IJ7SX/view?usp=drive_link',
    date: '07/2025 - 08/2025',
  },
  {
    title:
      'A Machine Learning Framework for Data-Scarce Regression using SMOGN with Joint Hyperparameter Optimization: A Case Study with Cricket Performance Prediction',
    description:
      'First Author on publication accepted at IEEE TENCON 2025 (flagship conference of IEEE Region 10, Asia Pacific). Engineered a joint hyperparameter optimization framework in Python that integrates data augmentation (SMOGN) and model training, demonstrating a significant improvement over traditional sequential methods.',
    status:
      'Accepted for Presentation at IEEE TENCON 2025 (flagship conference of IEEE Region 10, Asia Pacific)',
    link: '/SMOGN_Cricket_Analytics_Research_Paper.pdf',
    date: '10/2024 - 06/2025',
  },
];

export default function Publications() {
  return (
    <div className="page-surface">
      <section className="section-shell py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow">Publications</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-5xl">
              Accepted research and academic manuscripts
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 lg:justify-self-end">
            Academic publications and research manuscripts showcasing
            contributions to AI/ML research, explainable systems, and applied
            machine learning.
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {publications.map((pub, index) => (
            <article
              key={pub.title}
              className="premium-card grid gap-5 p-5 sm:p-6 lg:grid-cols-[0.22fr_1fr]"
            >
              <div>
                <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                  {pub.date}
                </p>
                <span className="mt-3 inline-flex rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Paper {index + 1}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-2xl">
                  {pub.title}
                </h2>
                <p className="mt-3 text-sm font-semibold leading-6 text-emerald-700 dark:text-emerald-300">
                  {pub.status}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {pub.description}
                </p>
                <Link
                  href={pub.link}
                  target={pub.link.startsWith('http') ? '_blank' : undefined}
                  rel={
                    pub.link.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="premium-link mt-5"
                >
                  View Paper
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
