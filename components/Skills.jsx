import { motion } from 'framer-motion';
import React from 'react';
import {
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiGithubactions,
  SiGoogleanalytics,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { FaDatabase, FaSearch } from 'react-icons/fa';
import { AiOutlineApi } from 'react-icons/ai';

const groups = [
  {
    label: 'Frontend',
    items: [
      { title: 'TypeScript', icon: SiTypescript },
      { title: 'JavaScript', icon: SiJavascript },
      { title: 'React.js', icon: SiReact },
      { title: 'Next.js', icon: SiNextdotjs },
      { title: 'Tailwind CSS', icon: SiTailwindcss },
      { title: 'HTML / CSS', icon: SiHtml5 },
    ],
  },
  {
    label: 'Backend & Data',
    items: [
      { title: 'Node.js', icon: SiNodedotjs },
      { title: 'Express.js', icon: SiExpress },
      { title: 'PostgreSQL', icon: SiPostgresql },
      { title: 'Firebase', icon: SiFirebase },
      { title: 'MySQL', icon: SiMysql },
      { title: 'REST APIs', icon: AiOutlineApi },
      { title: 'SQL', icon: FaDatabase },
    ],
  },
  {
    label: 'Infra & Tooling',
    items: [
      { title: 'Docker', icon: SiDocker },
      { title: 'Git / GitHub', icon: SiGithub },
      { title: 'GitHub Actions', icon: SiGithubactions },
      { title: 'SEO', icon: FaSearch },
      { title: 'Google Analytics', icon: SiGoogleanalytics },
      { title: 'C / C++', icon: SiCplusplus },
    ],
  },
];

const SkillCard = ({ icon: Icon, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.35, delay }}
    className='surface px-3 py-3 flex items-center gap-3 hover:border-accent/40 hover:shadow-glow transition min-h-[56px]'
  >
    <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-accent text-lg'>
      <Icon />
    </span>
    <h3 className='text-sm font-medium text-slate-100 leading-tight'>{title}</h3>
  </motion.div>
);

const Skills = () => {
  return (
    <section id='skills' className='w-full section-pad'>
      <div className='page-wrap'>
        <p className='section-kicker'>Skills</p>
        <h2 className='py-3'>The stack I work in</h2>
        <p className='text-slate-400 max-w-2xl mb-8'>
          Day-to-day: TypeScript, Next.js, and Node. Comfortable across data,
          APIs, and shipping with Docker and CI.
        </p>
        {groups.map((group) => (
          <div key={group.label} className='mb-8 last:mb-0'>
            <p className='font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-3'>
              {group.label}
            </p>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3'>
              {group.items.map((skill, i) => (
                <SkillCard
                  key={skill.title}
                  icon={skill.icon}
                  title={skill.title}
                  delay={i * 0.03}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
