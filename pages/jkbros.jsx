import Image from 'next/image';
import React from 'react';
import jkbrosImg from '../public/assets/projects/jkbros.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

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
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            JK-Bros is a technology-driven logistics firm providing seamless
            intracity and intercity delivery solutions. Built with React for
            dynamic interfaces, Tailwind CSS for responsive styling, Firebase
            for data, and Node.js on the server.
          </p>
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
