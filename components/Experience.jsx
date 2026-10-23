import React from 'react';
import { motion } from 'framer-motion';

const roles = [
  {
    title: 'Assistant Manager — Technology Excellence',
    org: 'JSW Steel',
    place: 'Dolvi, Navi Mumbai',
    dates: 'Jul 2025 — Present',
    points: [
      'Analyzed SAP and MES production datasets to find bottlenecks and optimization opportunities.',
      'Built KPI dashboards and automated reports for operational analytics.',
      'Ran RCA and data analysis to close process gaps and improve workflows.',
    ],
  },
  {
    title: 'Software Development Intern',
    org: 'Coditioning',
    place: 'London, UK — Remote',
    dates: 'Oct 2024 — Jun 2025',
    points: [
      'Shipped end-to-end features with React, Next.js, TypeScript, and CSS.',
      'Migrated React to Next.js with SSR, SSG, dynamic metadata, and SEO.',
      'Integrated Builder.io and lifted search visibility by ~80%.',
    ],
  },
  {
    title: 'Web & Tech Head',
    org: 'ISTE Students’ Chapter, NIT Durgapur',
    place: 'Durgapur, India',
    dates: 'Feb 2022 — May 2025',
    points: [
      'Led a 15-member team shipping web apps used by 5,000+ students.',
      'Owned frontend performance, feature delivery, and production releases.',
    ],
  },
];

const Experience = () => {
  return (
    <section id='experience' className='w-full section-pad'>
      <div className='page-wrap'>
        <p className='section-kicker'>Experience</p>
        <h2 className='py-3'>Where I&#39;ve shipped</h2>
        <div className='mt-8 relative space-y-5'>
          <div className='hidden md:block absolute left-[11px] top-3 bottom-3 w-px bg-white/10' />
          {roles.map((role, index) => (
            <motion.article
              key={role.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className='relative md:pl-10'
            >
              <span className='hidden md:block absolute left-0 top-8 h-[22px] w-[22px] rounded-full border-2 border-accent bg-ink-950' />
              <div className='surface p-5 sm:p-7'>
                <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2'>
                  <div>
                    <h3 className='text-lg sm:text-xl text-white leading-snug'>
                      {role.title}
                    </h3>
                    <p className='text-accent mt-1 text-sm sm:text-base'>
                      {role.org} · {role.place}
                    </p>
                  </div>
                  <p className='font-mono text-[11px] uppercase tracking-wider text-slate-400 shrink-0 sm:pt-1'>
                    {role.dates}
                  </p>
                </div>
                <ul className='mt-4 space-y-2 text-slate-400 list-disc pl-5'>
                  {role.points.map((point) => (
                    <li key={point} className='leading-relaxed marker:text-accent'>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
