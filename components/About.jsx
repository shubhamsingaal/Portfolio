import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProfilePhoto from './ProfilePhoto';

const highlights = [
  { value: 'NIT Durgapur', label: 'B.Tech, 2025' },
  { value: 'JSW Steel', label: 'Technology Excellence' },
  { value: '~80%', label: 'Search visibility lift' },
  { value: '5,000+', label: 'Students reached' },
];

const About = () => {
  return (
    <motion.section
      id='about'
      className='w-full section-pad'
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className='page-wrap grid md:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center'>
        <div>
          <p className='section-kicker'>About</p>
          <h2 className='py-3'>Who I am</h2>
          <p className='py-2 text-slate-400 leading-relaxed'>
            I&#39;m a product-focused full-stack engineer from NIT Durgapur. I
            turn messy operational problems into clean web products —
            dashboards, matchmaking flows, and fast sites that actually rank.
          </p>
          <p className='py-2 text-slate-400 leading-relaxed'>
            At JSW Steel I work on technology excellence: SAP/MES production
            data, KPI dashboards, RCA, and cross-functional system improvements.
            Before that I interned at Coditioning, migrating a React codebase to
            Next.js with SSR/SSG, SEO, and Builder.io.
          </p>
          <p className='py-2 text-slate-400 leading-relaxed'>
            I also founded{' '}
            <a
              href='https://devmatch.space/'
              target='_blank'
              rel='noreferrer'
              className='text-accent hover:underline'
            >
              DevMatch
            </a>
            , a developer matchmaking platform for interview practice, real-time
            chat, mocks, and accountability.
          </p>
          <Link href='/#projects'>
            <a className='inline-block pt-4 text-accent hover:underline'>
              Check out some of my latest projects →
            </a>
          </Link>
        </div>

        <div className='surface p-6 sm:p-7'>
          <div className='flex items-center gap-4 mb-6'>
            <ProfilePhoto size='sm' ring />
            <div>
              <p className='text-white font-semibold'>Shubham Kumar</p>
              <p className='text-sm text-slate-400'>Full-Stack Engineer</p>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-3'>
            {highlights.map((item) => (
              <div
                key={item.label}
                className='rounded-xl border border-white/10 bg-ink-950/60 px-3 py-4'
              >
                <p className='text-white font-semibold text-sm sm:text-base leading-tight'>
                  {item.value}
                </p>
                <p className='mt-1 font-mono text-[10px] uppercase tracking-wider text-slate-400'>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
