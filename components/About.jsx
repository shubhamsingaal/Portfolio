import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const snapshot = [
  { label: 'Role', value: 'Assistant Manager, Technology Excellence · JSW Steel' },
  { label: 'Building', value: 'DevMatch — live interview-prep matchmaking' },
  { label: 'Education', value: 'B.Tech, NIT Durgapur · 2025' },
  { label: 'Stack', value: 'Next.js, TypeScript, Node.js, PostgreSQL, Docker' },
  { label: 'Location', value: 'Mumbai · Open to SDE / full-stack roles' },
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
      <div className='page-wrap grid md:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-start'>
        <div>
          <p className='section-kicker'>About</p>
          <h2 className='py-3'>Who I am</h2>
          <p className='py-2 text-slate-400 leading-relaxed'>
            I&#39;m a full-stack engineer who likes taking messy operational
            problems and turning them into production web products — dashboards,
            matchmaking flows, and SEO-ready Next.js apps.
          </p>
          <p className='py-2 text-slate-400 leading-relaxed'>
            At JSW Steel I work on technology excellence: SAP/MES production
            data, KPI dashboards, RCA, and cross-functional system improvements.
            Before that I interned at Coditioning, migrating a React codebase to
            Next.js with SSR, SSG, and Builder.io.
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
            — profiles, swipe-to-match, real-time chat, mocks, and a live
            co-solve editor for interview practice.
          </p>
          <Link href='/#projects'>
            <a className='inline-block pt-4 text-accent hover:underline'>
              See selected work →
            </a>
          </Link>
        </div>

        <div className='surface p-6 sm:p-7'>
          <p className='font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-4'>
            Snapshot
          </p>
          <dl className='space-y-4'>
            {snapshot.map((item) => (
              <div key={item.label}>
                <dt className='font-mono text-[10px] uppercase tracking-wider text-slate-500'>
                  {item.label}
                </dt>
                <dd className='mt-1 text-sm text-slate-200 leading-relaxed'>
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
