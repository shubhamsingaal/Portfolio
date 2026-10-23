import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ProfilePhoto from './ProfilePhoto';

const proof = [
  { label: 'NIT Durgapur', value: 'B.Tech · 2025' },
  { label: 'JSW Steel', value: 'Asst. Manager' },
  { label: 'DevMatch', value: 'Founder' },
];

const Main = () => {
  return (
    <motion.section
      id='home'
      className='relative w-full overflow-hidden'
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className='absolute inset-0 bg-grid bg-[size:56px_56px] opacity-40' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(45,212,191,0.12),transparent_34%),radial-gradient(circle_at_82%_8%,rgba(99,102,241,0.14),transparent_30%)]' />

      <div className='relative page-wrap pt-24 pb-12 sm:pt-28 sm:pb-16 md:min-h-[100svh] grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-8 md:gap-10 md:items-center'>
        <div className='text-center md:text-left min-w-0'>
          <p className='section-kicker mb-4'>Available for software roles</p>
          <h1 className='text-white text-[2rem] sm:text-5xl lg:text-6xl'>
            Hi, I&#39;m{' '}
            <span className='text-accent'>Shubham</span>
          </h1>
          <h2 className='mt-3 text-lg sm:text-2xl font-medium text-slate-200'>
            Full-Stack Engineer building products people actually use.
          </h2>
          <p className='py-5 text-slate-400 max-w-[540px] mx-auto md:mx-0 leading-relaxed text-[15px] sm:text-base'>
            NIT Durgapur graduate. Assistant Manager — Technology Excellence at
            JSW Steel. Founder of DevMatch. I ship production web products with
            React, Next.js, TypeScript, and Node.js.
          </p>

          <div className='flex flex-wrap justify-center md:justify-start gap-2 mb-7'>
            {['Next.js', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker'].map(
              (item) => (
                <span
                  key={item}
                  className='font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300'
                >
                  {item}
                </span>
              )
            )}
          </div>

          <div className='flex flex-wrap items-center justify-center md:justify-start gap-3'>
            <Link href='/#projects'>
              <a className='inline-flex items-center justify-center rounded-xl bg-accent text-ink-950 font-semibold uppercase tracking-wider text-sm px-6 py-3 hover:bg-accent-dim transition w-full sm:w-auto'>
                View work
              </a>
            </Link>
            <Link href='/resume'>
              <a className='inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm uppercase tracking-wider text-slate-200 hover:border-accent/50 hover:text-accent transition w-full sm:w-auto'>
                Resume
              </a>
            </Link>
          </div>

          <div className='flex items-center justify-center md:justify-start gap-3 py-7'>
            <a
              href='https://www.linkedin.com/in/shubhamsingaal/'
              target='_blank'
              rel='noreferrer'
              aria-label='LinkedIn'
            >
              <div className='icon-btn'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/shubhamsingaal'
              target='_blank'
              rel='noreferrer'
              aria-label='GitHub'
            >
              <div className='icon-btn'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <a aria-label='Email'>
                <div className='icon-btn'>
                  <AiOutlineMail />
                </div>
              </a>
            </Link>
            <Link href='/resume'>
              <a aria-label='Resume'>
                <div className='icon-btn'>
                  <BsFillPersonLinesFill />
                </div>
              </a>
            </Link>
          </div>

          <div className='grid grid-cols-3 gap-2 sm:gap-3 max-w-lg mx-auto md:mx-0'>
            {proof.map((item) => (
              <div key={item.label} className='surface px-2 py-3 sm:px-3 text-center'>
                <p className='text-[11px] sm:text-sm font-semibold text-white leading-tight'>
                  {item.label}
                </p>
                <p className='mt-1 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400'>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col items-center lg:items-center'>
          <ProfilePhoto size='hero' priority />
          <div className='mt-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400'>
            <span>Mumbai · India</span>
            <span className='h-1 w-1 rounded-full bg-accent' />
            <span className='text-accent'>Open to roles</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Main;
