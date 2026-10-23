import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectItem = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
  featured,
  summary,
  liveUrl,
}) => {
  return (
    <div
      className={`group relative overflow-hidden surface hover:border-accent/40 hover:shadow-glow transition duration-300 h-full ${
        featured ? 'md:grid md:grid-cols-2 md:items-stretch' : 'flex flex-col'
      }`}
    >
      {featured && (
        <span className='absolute top-4 left-4 z-10 font-mono text-[10px] uppercase tracking-[0.2em] bg-accent text-ink-950 rounded-full px-3 py-1 font-semibold'>
          Featured
        </span>
      )}
      <div
        className={`relative overflow-hidden ${
          featured ? 'h-56 sm:h-72 md:h-full min-h-[240px]' : 'h-44 sm:h-52'
        }`}
      >
        <Image
          className='object-cover object-top group-hover:scale-105 transition duration-500'
          src={backgroundImg}
          alt={`Screenshot of ${title}`}
          layout='fill'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent' />
      </div>
      <div className='p-5 sm:p-6 flex flex-col justify-center flex-1'>
        <p className='font-mono text-[11px] uppercase tracking-[0.18em] text-accent'>
          {tech}
        </p>
        <h3 className='text-xl mt-1 mb-2 text-white'>{title}</h3>
        {summary && (
          <p className='text-slate-400 text-sm leading-relaxed mb-4'>
            {summary}
          </p>
        )}
        <div className='mt-auto flex flex-wrap gap-3'>
          <Link href={projectUrl}>
            <a className='inline-flex w-fit items-center text-sm uppercase tracking-wider text-slate-200 border border-white/15 rounded-lg px-4 py-2 hover:border-accent/50 hover:text-accent transition'>
              Details
            </a>
          </Link>
          {liveUrl && (
            <a
              href={liveUrl}
              target='_blank'
              rel='noreferrer'
              className='inline-flex w-fit items-center text-sm uppercase tracking-wider text-accent border border-accent/30 rounded-lg px-4 py-2 hover:bg-accent/10 transition'
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
