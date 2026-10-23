import Image from 'next/image';
import React from 'react';
import auditionsImg from '../public/assets/projects/auditions.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import PageMeta from '../components/PageMeta';
import ProjectStory from '../components/ProjectStory';

const auditions = () => {
  return (
    <div className='w-full'>
      <PageMeta
        title='Auditions App | Campus Auditions Platform'
        description='A campus auditions platform built with JavaScript, CSS, and MongoDB, designed for a large student community.'
        path='/auditions'
        image='/assets/projects/auditions.png'
      />
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={auditionsImg}
          alt='Screenshot of the ISTE Auditions App'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Auditions App</h2>
          <h3>JavaScript / CSS / MongoDB</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='section-kicker'>Project</p>
          <h2 className='py-2'>A simpler audition experience for campus</h2>
          <p className='text-slate-400 leading-relaxed'>
            The Auditions App gives students a single place to take part in
            campus auditions, with an interface designed to work in both dark
            and light themes.
          </p>
          <ProjectStory
            challenge='Make the audition process easier to access and manage for a large campus community.'
            approach='Built a web app with JavaScript and CSS, backed by MongoDB, and included dark and light themes.'
            outcome='The platform has attracted more than 1,500 students.'
          />
          <a
            href='https://github.com/shubhamsingaal/ISTE-Auditions-2023'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://iste-auditions-2023.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 surface py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-slate-300 py-2 flex items-center cursor-default'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-slate-300 py-2 flex items-center cursor-default'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-slate-300 py-2 flex items-center cursor-default'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
           
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default auditions;
