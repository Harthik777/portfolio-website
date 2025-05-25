export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900">
      <div className="relative isolate pt-20">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="card mx-auto max-w-2xl animate-fade-in-up border border-indigo-100 bg-white/80 p-10 text-center shadow-2xl dark:border-indigo-900 dark:bg-gray-900/80 lg:mx-0">
              <h2 className="gradient-text mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                About Me
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Hi! I&apos;m Harthik Manichandra Vanumu, an aspiring AI/ML
                engineer passionate about building intelligent systems and
                solving real-world problems. I am currently pursuing my B.Tech
                in Computer Science and Engineering (Artificial Intelligence) at
                Manipal Institute of Technology (MIT) Bengaluru.
              </p>
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
