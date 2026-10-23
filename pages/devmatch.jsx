import Image from 'next/image';
import React from 'react';
import devmatchImg from '../public/assets/projects/devmatch.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import ProjectStory from '../components/ProjectStory';

const DevMatch = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          objectPosition='top'
          src={devmatchImg}
          alt='DevMatch'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>DevMatch</h2>
          <h3>Next.js / Real-time matching / Interview prep</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 px-4'>
        <div className='col-span-4'>
          <p className='section-kicker'>Project</p>
          <h2 className='py-2'>A better way to prepare together</h2>
          <p className='text-slate-400 leading-relaxed'>
            I founded and shipped DevMatch, a live platform that pairs
            developers at similar skill levels and time zones for interview
            practice.
          </p>
          <ProjectStory
            challenge='Interview preparation can be isolating. Developers need a way to find peers, practice together, and stay accountable.'
            approach='Built profiles, swipe-to-match, real-time chat, mock-session scheduling, progress tracking, study groups, and a live co-solve editor.'
            outcome='The platform is live at devmatch.space. Its homepage displays product statistics from the live database.'
          />
          <a
            href='https://devmatch.space/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 bg-accent text-ink-950 font-semibold'>
              Live site
            </button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 surface py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Capabilities</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              {[
                'Matchmaking',
                'Real-time chat',
                'Mock sessions',
                'Progress tracking',
                'Study groups',
                'Live co-solve',
              ].map((item) => (
                <p
                  key={item}
                  className='text-slate-300 py-2 flex items-center cursor-default'
                >
                  <RiRadioButtonFill className='pr-1 text-accent' /> {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer text-slate-300'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default DevMatch;
