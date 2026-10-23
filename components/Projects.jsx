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
    liveUrl: 'https://devmatch.space/',
    tech: 'Next.js · Real-time · Matching',
    summary:
      'Live matchmaking for interview prep: profiles, swipe-to-match, chat, mocks, and a co-solve editor.',
    featured: true,
  },
  {
    title: 'Jk-Bros | Logistics',
    backgroundImg: jkbrosImg,
    projectUrl: '/jkbros',
    liveUrl: 'https://jk-bros-netlify.netlify.app/',
    tech: 'React · Firebase · Node.js',
    summary:
      'Logistics web app for intra- and intercity delivery — auth, data, and ops flows on Firebase.',
  },
  {
    title: 'CIT | ISTE',
    backgroundImg: citImg,
    projectUrl: '/cit',
    liveUrl: 'https://cit.istenitdgp.com/',
    tech: 'Next.js',
    summary:
      'Technical-fest platform for ISTE NIT Durgapur — event pages, registration, and production deploys.',
  },
  {
    title: 'Auditions App',
    backgroundImg: auditionsImg,
    projectUrl: '/auditions',
    liveUrl: 'https://iste-auditions-2023.vercel.app/',
    tech: 'JavaScript',
    summary:
      'Campus auditions workflow so clubs can collect, review, and manage applicant rounds.',
  },
  {
    title: 'Panorama',
    backgroundImg: panoramaImg,
    projectUrl: '/panorama',
    liveUrl: 'https://space-odyssey-game.vercel.app/',
    tech: 'React',
    summary:
      'Interactive React front-end for campus-scale content and event discovery.',
  },
];

const Projects = () => {
  return (
    <section id='projects' className='w-full overflow-x-hidden section-pad'>
      <div className='page-wrap'>
        <p className='section-kicker'>Projects</p>
        <h2 className='py-3'>What I&#39;ve built</h2>
        <p className='text-slate-400 max-w-2xl mb-8'>
          Production products: a live matchmaking app, a logistics platform, and
          campus systems shipped with a 15-person tech team.
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
