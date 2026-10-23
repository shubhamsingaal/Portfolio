import Image from 'next/image';
import React from 'react';
import jkbrosImg from '../public/assets/projects/jkbros.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import ProjectStory from '../components/ProjectStory';

const jkbros = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={jkbrosImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>JK-Bros | Logistics</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='section-kicker'>Project</p>
          <h2 className='py-2'>A digital platform for delivery operations</h2>
          <p className='text-slate-400 leading-relaxed'>
            JK-Bros provides intracity and intercity delivery services. This
            project brings its logistics offering to a web platform.
          </p>
          <ProjectStory
            challenge='Support a logistics business serving both local and intercity delivery needs with a clear online experience.'
            approach='Built the platform with React and Tailwind CSS, using Firebase for data and Node.js on the server.'
            outcome='Delivered a live logistics platform with both a public demo and source code available.'
          />
          <a
            href='https://github.com/shubhamsingaal/JK-bross'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 bg-accent text-ink-950 font-semibold'>Code</button>
          </a>
          <a
            href='https://jk-bros-netlify.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 bg-white/10 border border-white/15'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 surface py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-slate-300 py-2 flex items-center cursor-default'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-slate-300 py-2 flex items-center cursor-default'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-slate-300 py-2 flex items-center cursor-default'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-slate-300 py-2 flex items-center cursor-default'>
                <RiRadioButtonFill className='pr-1' /> Firebase
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

export default jkbros;
