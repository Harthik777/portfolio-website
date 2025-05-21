export default function About() {
  return (
    <main className="min-h-screen">
      <div className="relative isolate pt-14">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Hi! I&apos;m Harthik Manichandra Vanumu, an aspiring AI/ML engineer passionate about building intelligent systems and solving real-world problems. I am currently pursuing my B.Tech in Artificial Intelligence at Manipal Institute of Technology (MIT) Bengaluru.
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div>
                <h3 className="border-l-4 border-indigo-600 pl-6 font-semibold">Education</h3>
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="font-semibold">Manipal Institute of Technology (MIT) Bengaluru</h4>
                    <p className="text-gray-600 dark:text-gray-300">B.Tech in Computer Science and Engineering (Artificial Intelligence)</p>
                    <p className="text-sm text-gray-500">07/2023 - 07/2027</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="border-l-4 border-indigo-600 pl-6 font-semibold">Key Achievements</h3>
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="font-semibold">1st Place, RoboRun Competition & TechTatva Selection</h4>
                    <p className="text-gray-600 dark:text-gray-300">09/2024 - 10/2024</p>
                    <ul className="list-disc list-inside text-sm mt-2">
                      <li>Won MAHE Bengaluru&apos;s university-wide &apos;RoboRun&apos; line follower robotics competition (1st Place).</li>
                      <li>Selected for the official, institutionally-funded MIT Bengaluru team at TechTatva (MIT-Manipal&apos;s technical fest).</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">MaRRS International Spelling Bee Final Championship Finalist</h4>
                    <p className="text-gray-600 dark:text-gray-300">05/2015</p>
                    <ul className="list-disc list-inside text-sm mt-2">
                      <li>Finalist in the MaRRS International Spelling Bee, which was held in Indian Social and Cultural Center, Abu Dhabi, UAE on 23rd May 2015.</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="border-l-4 border-indigo-600 pl-6 font-semibold">Volunteering</h3>
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="font-semibold">IEEE Student Branch Executive</h4>
                    <p className="text-gray-600 dark:text-gray-300">01/2025 - Present</p>
                    <ul className="list-disc list-inside text-sm mt-2">
                      <li>Led and managed IEEE Student Branch activities, including events and workshops, and boosted member engagement.</li>
                      <li>Served as a liaison between the IEEE Student Branch and the IEEE CS Society, improving communication and collaboration efficiency.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Radar (The Robotics Club of the College) - Outreach Head</h4>
                    <p className="text-gray-600 dark:text-gray-300">10/2024 - Present</p>
                    <ul className="list-disc list-inside text-sm mt-2">
                      <li>Led a 5-person outreach team, securing speakers/MOUs/competition entries and organising an industry visit, and assisted the robotics team.</li>
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