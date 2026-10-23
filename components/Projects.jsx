import React from 'react';
import { motion } from 'framer-motion';
import jkbrosImg from '../public/assets/projects/jkbros.png';
import citImg from '../public/assets/projects/cit.png';
import auditionsImg from '../public/assets/projects/auditions.png';
import panoramaImg from '../public/assets/projects/panorama.png';
import devmatchImg from '../public/assets/projects/devmatch.png';
import ProjectItem from './ProjectItem';

const items = [
  {
    title: 'DevMatch',
    backgroundImg: devmatchImg,
    projectUrl: '/devmatch',
    tech: 'Next.js · Real-time · Matching',
    featured: true,
  },
  {
    title: 'Jk-Bros | Logistics',
    backgroundImg: jkbrosImg,
    projectUrl: '/jkbros',
    tech: 'React JS · Firebase',
  },
  {
    title: 'CIT | ISTE',
    backgroundImg: citImg,
    projectUrl: '/cit',
    tech: 'Next JS',
  },
  {
    title: 'Auditions App',
    backgroundImg: auditionsImg,
    projectUrl: '/auditions',
    tech: 'JavaScript',
  },
  {
    title: 'Panorama',
    backgroundImg: panoramaImg,
    projectUrl: '/panorama',
    tech: 'React JS',
  },
];

const Projects = () => {
  return (
    <section id='projects' className='w-full overflow-x-hidden section-pad'>
      <div className='page-wrap'>
        <p className='section-kicker'>Projects</p>
        <h2 className='py-3'>What I&#39;ve built</h2>
        <p className='text-slate-400 max-w-2xl mb-8'>
          Live products and campus-scale platforms — matchmaking, logistics,
          events, and quizzes used by thousands of students.
        </p>
        <div className='grid md:grid-cols-2 gap-5 sm:gap-6'>
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className={item.featured ? 'md:col-span-2' : 'h-full'}
            >
              <ProjectItem {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
