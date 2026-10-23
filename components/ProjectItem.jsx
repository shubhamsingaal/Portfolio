import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectItem = ({ title, backgroundImg, tech, projectUrl, featured }) => {
  return (
    <div
      className={`group relative overflow-hidden surface hover:border-accent/40 hover:shadow-glow transition duration-300 h-full ${
        featured ? 'md:grid md:grid-cols-2 md:items-stretch' : ''
      }`}
    >
      {featured && (
        <span className='absolute top-4 left-4 z-10 font-mono text-[10px] uppercase tracking-[0.2em] bg-accent text-ink-950 rounded-full px-3 py-1 font-semibold'>
          Featured
        </span>
      )}
      <div
        className={`relative overflow-hidden ${
          featured ? 'h-56 sm:h-72 md:h-full min-h-[240px]' : 'h-48 sm:h-56'
        }`}
      >
        <Image
          className='object-cover object-top group-hover:scale-105 transition duration-500'
          src={backgroundImg}
          alt={title}
          layout='fill'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent' />
      </div>
      <div className='p-5 sm:p-6 flex flex-col justify-center'>
        <p className='font-mono text-[11px] uppercase tracking-[0.18em] text-accent'>
          {tech}
        </p>
        <h3 className='text-xl mt-1 mb-4 text-white'>{title}</h3>
        <Link href={projectUrl}>
          <a className='inline-flex w-fit items-center text-sm uppercase tracking-wider text-slate-200 border border-white/15 rounded-lg px-4 py-2 hover:border-accent/50 hover:text-accent transition'>
            More info
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
