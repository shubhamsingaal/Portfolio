import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { color } from 'framer-motion';



const ResumeLink = 'https://drive.google.com/file/d/1ojM4hI_Ucar2A2PcOTRj-k-oHIXlsO7E/view?usp=sharing'; 
// Replace this with the actual path or URL of your PDF file

  const Resume = () => {
    const downloadResume = () => {
      // You can customize the download logic here
      window.open(ResumeLink, '_blank');
    };
  return (
    <>
      <Head>
        <title>Shubham | Resume</title>
        <meta
          name='description'
          content='I’m a full stack web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='text-center py-4'>
          <button
            onClick={downloadResume}
            className='text-white font-bold py-2 px-4 rounded'
          >
            Download Resume
          </button>
        </div>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Shubham Kumar</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/shubhamsingaal/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/shubhamsingaal'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        A dedicated and highly motivated undergraduate student eager to learn and work with diverse tech stacks and
emerging technologies. Proficient in the MERN stack, with hands-on experience in developing dynamic, responsive
web applications. Enthusiastic about taking on challenges and committed to continuous learning and growth.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            
            <span className='px-2'>:</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>ReactJs 
            <span className='px-2'>|</span>NextJs
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind CSS
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span>Git & Github
           
          </p>
         
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Coditioning
            </span>
            <span className='px-2'>|</span>London, UK - Remote
          </p>
          <p className='py-1 italic'>AI Prompt Engineering Intern</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Generated gamified version of DSA challenges and their solutions in multiple programming
            languages.
            </li>
            <li>
            Developed technical content in the software engineering domain to support student learning.

            </li>
            <li>
            Conducted research and contributed to the gamification of educational content.
            </li>
            <li>
            Assisted with quality control and proactively identified potential issues.
            </li>
           
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            ISTE Students’ Chapter NIT Durgpur
            </span>
            <span className='px-2'>|</span>Durgapur, India
          </p>
          <p className='py-1 italic'>Web & Tech Head </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Developed various websites including <a style={{ color: 'green' }} href="https://www.istenitdgp.com/">ISTE NIT Durgapur</a>
            , <a style={{ color: 'green' }} href="https://cit.istenitdgp.com/">CIT 7.0 </a>,
            <a style={{ color: 'green' }} href="https://escape-room-game-d6308f.spheron.app/"> Adventure-alcove </a>, 
            <a style={{ color: 'green' }} href="https://space.panorama.istenitdgp.com/"> Space-odyssey </a>, 
            <a style={{ color: 'green' }} href="https://shubhamsingaal.github.io/Mirage/"> Mirage </a>,
            and the <a style={{ color: 'green' }} href="https://shubhamsingaal.github.io/ISTE-Auditions-2023/"> ISTE Auditions page</a>.
            </li>
            <li>
            Lead a team of 15 students, overseeing all aspects of web development projects from conception to deployment.

            </li>
            
           
          </ul>
        </div>


        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>National Institute of Technology Durgapur</span>
            <span className='px-2'>|</span>Durgapur , India
          </p>
          <p className='py-1 italic'>Bachelor of Technology in Metallurgical and Materials Engineering</p>
          <p className='py-1 italic'>CourseWork - Fundamentals of Algorithms , Data Structures, Introduction to Computing</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Organisations: Indian Society for Technical Education (ISTE)

            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resume;
