import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  const containerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } }, // Set the duration for the container animation
  };

  // const containerVariants = {
  //   hidden: { y: 30, opacity: 0 },
  //   visible: { y: 0, opacity: 1, transition: { duration: 1 } }, // Set the duration for the item animations
  // };

  return (
    <motion.div
      id='home'
      className='w-full h-[90vh] md:h-screen text-center'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <motion.div
          className='mt-12 -mb-12 md:mt-8 md:mb-0'
          variants={containerVariants}
        >
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m{' '}
            <span className='text-[#5651e5]'> Shubham</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] -mb-5 md:m-auto'>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/shubhamsingaal/'
              target='_blank'
              rel='noreferrer'
            >
              <motion.div
                className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                variants={containerVariants}
              >
                <FaLinkedinIn />
              </motion.div>
            </a>
            <a
              href='https://github.com/shubhamsingaal'
              target='_blank'
              rel='noreferrer'
            >
              <motion.div
                className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                variants={containerVariants}
              >
                <FaGithub />
              </motion.div>
            </a>
            <Link href='/#contact'>
              <motion.div
                className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                variants={containerVariants}
              >
                <AiOutlineMail />
              </motion.div>
            </Link>
            <Link href='/resume'>
              <motion.div
                className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                variants={containerVariants}
              >
                <BsFillPersonLinesFill />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Main;
