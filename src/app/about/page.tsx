export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900">
      <div className="relative isolate pt-20">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="card mx-auto max-w-4xl animate-fade-in-up border border-indigo-100 bg-white/80 p-12 text-center shadow-2xl dark:border-indigo-900 dark:bg-gray-900/80">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="gradient-text mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                About Me
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Hi! I'm Harthik Manichandra Vanumu, an 
                <span className="font-semibold text-indigo-600 dark:text-indigo-400"> AI/ML Research Intern & Team Lead</span> passionate about building intelligent systems and solving real-world problems. I am currently pursuing my B.Tech in Computer Science and Engineering (Artificial Intelligence) at 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> Manipal Institute of Technology (MIT) Bengaluru</span>.
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                <div className="flex items-center space-x-2 rounded-full bg-indigo-100 px-4 py-2 dark:bg-indigo-900/50">
                  <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                  <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Research Leadership</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-purple-100 px-4 py-2 dark:bg-purple-900/50">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-sm font-medium text-purple-700 dark:text-purple-300">AI/ML Engineering</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-pink-100 px-4 py-2 dark:bg-pink-900/50">
                  <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                  <span className="text-sm font-medium text-pink-700 dark:text-pink-300">Data Science</span>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl animate-fade-in-up grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div className="card border border-indigo-100 bg-white/80 p-8 shadow-2xl dark:border-indigo-900 dark:bg-gray-900/80">
                <h3 className="mb-4 border-l-4 border-indigo-600 pl-6 text-xl font-bold">
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">
                      Manipal Institute of Technology (MIT) Bengaluru
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      B.Tech in Computer Science and Engineering (Artificial
                      Intelligence)
                    </p>
                    <p className="text-sm text-gray-500">07/2023 - 07/2027</p>
                  </div>
                </div>
              </div>
              <div className="card border border-indigo-100 bg-white/80 p-8 shadow-2xl dark:border-indigo-900 dark:bg-gray-900/80">
                <h3 className="mb-4 border-l-4 border-indigo-600 pl-6 text-xl font-bold">
                  Key Achievements
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">
                      1st Place, RoboRun Competition & TechTatva Selection
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      09/2024 - 10/2024
                    </p>
                    <ul className="mt-2 list-inside list-disc text-sm">
                      <li>
                        Won MAHE Bengaluru&apos;s university-wide
                        &apos;RoboRun&apos; line follower robotics competition
                        (1st Place).
                      </li>
                      <li>
                        Selected for the official, institutionally-funded MIT
                        Bengaluru team at TechTatva (MIT-Manipal&apos;s
                        technical fest).
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      MaRRS International Spelling Bee Final Championship
                      Finalist
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">05/2015</p>
                    <ul className="mt-2 list-inside list-disc text-sm">
                      <li>
                        Finalist in the MaRRS International Spelling Bee, which
                        was held in Indian Social and Cultural Center, Abu
                        Dhabi, UAE on 23rd May 2015.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card border border-indigo-100 bg-white/80 p-8 shadow-2xl dark:border-indigo-900 dark:bg-gray-900/80">
                <h3 className="mb-4 border-l-4 border-indigo-600 pl-6 text-xl font-bold">
                  Volunteering
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">
                      IEEE Student Branch Executive
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      01/2025 - Present
                    </p>
                    <ul className="mt-2 list-inside list-disc text-sm">
                      <li>
                        Led and managed IEEE Student Branch activities,
                        including events and workshops, and boosted member
                        engagement.
                      </li>
                      <li>
                        Served as a liaison between the IEEE Student Branch and
                        the IEEE CS Society, improving communication and
                        collaboration efficiency.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Radar (The Robotics Club of the College) - Outreach Head
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      10/2024 - Present
                    </p>
                    <ul className="mt-2 list-inside list-disc text-sm">
                      <li>
                        Led a 5-person outreach team, securing
                        speakers/MOUs/competition entries and organising an
                        industry visit, and assisted the robotics team.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
