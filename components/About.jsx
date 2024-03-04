import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion'; // Import motion from Framer Motion
import AboutImg from '../public/assets/about.png';

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };
  const imageVariants = {
    hidden: { x: 0, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const element = document.getElementById('about');
      if (element) {
        const elementOffset = element.offsetTop;
        const elementHeight = element.clientHeight;
        const elementInView = scrollY >= elementOffset - window.innerHeight / 2 && scrollY <= elementOffset + elementHeight / 2;
        if (elementInView) {
          setIsInView(true);
        }
      }
    };

    controls.start(isInView ? 'visible' : 'hidden');

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInView, controls]);

  return (
    <motion.div
      id='about'
      className='w-full md:h-screen p-2 flex items-center py-16'
      initial='hidden'
      animate={controls}
      variants={containerVariants}
    >
      <motion.div
        className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'
        variants={containerVariants}
      >
        <motion.div
          className='col-span-2'
          variants={itemVariants}
        >
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            A dedicated and highly motivated undergraduate student eager to learn and work on different tech stacks. As an avid
            learner, I have always been passionate about problem-solving. I am broadening my horizons by learning and exploring
            the MERN Stack. I am always enthusiastic about taking on new challenges and believe in continuous learning and
            growth.
          </p>
          <p className='py-2 text-gray-600'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript,
            React and Next. I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-gray-600'>

          </p>
          <Link href='/#projects'>
            <motion.p
              className='py-2 text-gray-600 underline cursor-pointer'
              variants={itemVariants}
            >
              Check out some of my latest projects.
            </motion.p>
          </Link>
        </motion.div>
        <motion.div
          className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'
          variants={imageVariants}
        >
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
