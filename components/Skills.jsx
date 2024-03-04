import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import React, { useEffect } from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png';
import AWS from '../public/assets/skills/aws.png';

const SkillCard = ({ image, alt, title }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 0 }}
      animate={controls}
      transition={{ duration: 2 }}
      className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
    >
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={image} width='64px' height='64px' alt={alt} />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <SkillCard image={Html} alt='HTML' title='HTML' />
          <SkillCard image={Css} alt='CSS' title='CSS' />
          <SkillCard image={Javascript} alt='JavaScript' title='JavaScript' />
          <SkillCard image={ReactImg} alt='React' title='React' />
          <SkillCard image={Tailwind} alt='Tailwind' title='Tailwind' />
          <SkillCard image={Firebase} alt='Firebase' title='Firebase' />
          <SkillCard image={Github} alt='Github' title='Github' />
          <SkillCard image={NextJS} alt='Next' title='Next' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
