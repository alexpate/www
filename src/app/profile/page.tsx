import Image from 'next/image';
import {Fragment} from 'react';

const experience: {
  company: string;
  role: string;
  date: string;
}[] = [
  {
    company: 'MoonPay',
    role: 'Front-end Engineer',
    date: '2022 - present',
  },
  {
    company: 'Monzo',
    role: 'Web Engineer',
    date: '2019 - 2021',
  },
  {
    company: 'Kalo',
    role: 'UI Engineer',
    date: '2017 - 2019',
  },
  {
    company: 'Pusher',
    role: 'Front-end Engineer',
    date: '2015 - 2017',
  },
];

const skills: string[] = [
  'JavaScript / Node.js',
  'HTML / CSS',
  'React',
  'Go',
  'Next.js',
  'Ruby',
  'JavaScript',
  'Figma / Sketch',
];

export default function Home() {
  return (
    <main>
      <section className="py-20">
        <h1 className="font-medium text-4xl tracking-tighter text-white">
          Profile
        </h1>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <h2 className="font-medium text-2xl mb-4 text-white">Experience</h2>
          <div>
            {experience.map((exp) => {
              return (
                <Fragment key={exp.company}>
                  <h3 className="mt-5">
                    <span className="font-medium text-xl text-white/90">
                      {exp.company}
                    </span>
                    <br />
                    <span className="text-white/50">{exp.role}</span>
                  </h3>
                  <span className="text-white/40">{exp.date}</span>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <h2 className="font-medium text-2xl mb-4 text-white">
            Skills & technologies
          </h2>
          <div>
            <ul className="space-y-2">
              {skills.map((skill) => {
                return (
                  <li key={skill} className="font-normal text-lg text-white/90">
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
