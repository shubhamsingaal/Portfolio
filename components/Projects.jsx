import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import jkbrosImg from '../public/assets/projects/jkbros.png';
import citImg from '../public/assets/projects/cit.png';
import auditionsImg from '../public/assets/projects/auditions.png';
import panoramaImg from '../public/assets/projects/panorama.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const controls = useAnimation();
  const [animationPlayed, setAnimationPlayed] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('projects');
    if (element && !animationPlayed) {
      const scrollY = window.scrollY;
      const elementOffset = element.offsetTop;
      const elementHeight = element.clientHeight;
      const elementInView =
        scrollY >= elementOffset - window.innerHeight / 2 &&
        scrollY <= elementOffset + elementHeight / 2;

      if (elementInView) {
        controls.start('visible');
        setAnimationPlayed(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, animationPlayed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      id='projects'
      className='w-full'
      initial='hidden'
      animate={controls}
      variants={containerVariants}
    >
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <motion.div
          className='grid md:grid-cols-2 gap-8'
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <ProjectItem
              title='Jk-Bros | Logistics'
              backgroundImg={jkbrosImg}
              projectUrl='/jkbros'
              tech='React JS'
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProjectItem
              title='CIT | ISTE'
              backgroundImg={citImg}
              projectUrl='/cit'
              tech='Next JS'
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProjectItem
              title='Auditions App'
              backgroundImg={auditionsImg}
              projectUrl='/auditions'
              tech='JavaScript'
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProjectItem
              title='Panorama'
              backgroundImg={panoramaImg}
              projectUrl='/panorama'
              tech='React JS'
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
