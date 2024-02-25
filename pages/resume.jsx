import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';



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
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='text-center py-4'>
          <button
            onClick={downloadResume}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
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
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            ISTE NIT Durgapur
            </span>
            <span className='px-2'>|</span>Durgapur, India
          </p>
          <p className='py-1 italic'>Front End Web Developer & Event Coordinator</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Developed a professional and engaging website that accurately reflects the organization’s brand identity and
              values.

            </li>
            <li>
              Implemented features such as user-friendly navigation menu, interactive sections, forms, and dynamic content.
              Additionally, orchestrated a robust search engine optimization strategy, leading to a note-worthy 30% improvement in the organization’s online visibility and search engine rankings.
            </li>
           
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Teaching & Mentoring Web Development
            </span>
            <span className='px-2'>|</span>Durgapur, India
          </p>
          <p className='py-1 italic'>ISTE Students&lsquo; Chapter - NIT Durgapur (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              As a senior member of ISTE Students&lsquo; Chapter I have mentored over a group of 10+ students what I’ve learned in web development, specifically
              front-end development.
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
