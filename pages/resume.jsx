import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Resume = () => {
  return (
    <>
      <Head>
        <title>Shubham Kumar | Resume</title>
        <meta
          name='description'
          content='Resume of Shubham Kumar — full-stack engineer, JSW Steel, founder of DevMatch.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[860px] mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16'>
        <h2 className='text-center'>Resume</h2>
        <div className='text-center py-4'>
          <a
            href='/assets/Shubham_Kumar_Resume.pdf'
            target='_blank'
            rel='noreferrer'
            className='bg-accent text-ink-950 font-bold py-2 px-5 rounded-xl hover:bg-accent-dim'
          >
            Open Resume PDF
          </a>
        </div>

        <div className='surface my-4 p-4 w-full flex justify-between items-center'>
          <div>
            <h2 className='text-lg'>Shubham Kumar</h2>
            <p className='text-sm text-slate-400'>
              Mumbai · Maharashtra · India
            </p>
          </div>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/shubhamsingaal/'
              target='_blank'
              rel='noreferrer'
              className='mr-4 text-slate-200 hover:text-accent'
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href='https://github.com/shubhamsingaal'
              target='_blank'
              rel='noreferrer'
              className='text-slate-200 hover:text-accent'
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        <div className='text-center py-4 font-mono text-xs uppercase tracking-[0.18em] text-accent'>
          Full-Stack Engineering · Product · Data-informed systems
        </div>
        <p className='text-slate-400 leading-relaxed'>
          Full-stack engineer and NIT Durgapur graduate. Currently Assistant
          Manager — Technology Excellence at JSW Steel. Founder of DevMatch.
          Experienced shipping React/Next.js products, SEO-driven migrations,
          and operational analytics dashboards.
        </p>

        <div className='text-center py-6'>
          <h5 className='text-center text-accent font-mono text-xs uppercase tracking-[0.2em] py-2'>
            Skills
          </h5>
          <p className='py-2 text-slate-300'>
            <span className='font-semibold text-white'>Programming</span>:
            JavaScript, TypeScript, C, C++, SQL, HTML, CSS
          </p>
          <p className='py-2 text-slate-300'>
            <span className='font-semibold text-white'>
              Frameworks & Databases
            </span>
            : React.js, Next.js, Node.js, Express.js, Tailwind CSS, PostgreSQL,
            Firebase, MySQL
          </p>
          <p className='py-2 text-slate-300'>
            <span className='font-semibold text-white'>Tools</span>: Docker,
            Git/GitHub, GitHub Actions (CI/CD), REST APIs, SEO, Google Analytics
          </p>
        </div>

        <h5 className='text-center text-accent font-mono text-xs uppercase tracking-[0.2em] py-4'>
          Experience
        </h5>

        <div className='py-6'>
          <p>
            <span className='font-bold'>JSW Steel</span>
            <span className='px-2 text-slate-500'>|</span>
            Dolvi, Navi Mumbai
          </p>
          <p className='py-1 text-slate-400'>
            Assistant Manager — Technology Excellence · Jul 2025 – Present
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed text-slate-400'>
            <li>
              Analyzed production datasets from SAP and MES to identify
              performance bottlenecks.
            </li>
            <li>
              Built KPI dashboards and automated reports for operational
              analytics.
            </li>
            <li>
              Performed RCA and data analysis to identify process gaps and
              optimize workflows.
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p>
            <span className='font-bold'>Coditioning</span>
            <span className='px-2 text-slate-500'>|</span>
            London, UK — Remote
          </p>
          <p className='py-1 text-slate-400'>
            Software Development Intern · Oct 2024 – Jun 2025
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed text-slate-400'>
            <li>
              Built end-to-end web features using React.js, Next.js, TypeScript,
              and CSS.
            </li>
            <li>
              Migrated the codebase from React to Next.js with SSR, SSG, dynamic
              metadata, and SEO.
            </li>
            <li>
              Integrated Builder.io for dynamic content, contributing to an 80%
              increase in search visibility.
            </li>
            <li>
              Used Docker and AI-assisted tooling to review code and ship
              reusable components.
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p>
            <span className='font-bold'>ISTE Students’ Chapter NIT Durgapur</span>
            <span className='px-2 text-slate-500'>|</span>
            Durgapur, India
          </p>
          <p className='py-1 text-slate-400'>
            Web & Tech Head · Feb 2022 – May 2025
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed text-slate-400'>
            <li>
              Led a 15-member team to develop and deploy scalable web
              applications for 5,000+ users.
            </li>
            <li>
              Owned frontend performance, feature development, code integration,
              and production releases.
            </li>
          </ul>
        </div>

        <h5 className='text-center text-accent font-mono text-xs uppercase tracking-[0.2em] py-4'>
          Projects
        </h5>
        <div className='py-4 text-slate-400'>
          <p>
            <span className='font-bold text-white'>DevMatch</span> — Developer
            matchmaking for interview prep, real-time interaction, and
            engagement.{' '}
            <a
              href='https://devmatch.space/'
              className='text-accent hover:underline'
              target='_blank'
              rel='noreferrer'
            >
              Preview
            </a>
          </p>
          <p className='pt-3'>
            <span className='font-bold text-white'>JK-bros</span> — Logistics
            platform with React, Firebase, and Node.js.{' '}
            <a
              href='https://jk-bros-netlify.netlify.app/'
              className='text-accent hover:underline'
              target='_blank'
              rel='noreferrer'
            >
              Preview
            </a>
          </p>
        </div>

        <h5 className='text-center text-accent font-mono text-xs uppercase tracking-[0.2em] py-4'>
          Education
        </h5>
        <div className='py-6'>
          <p>
            <span className='font-bold'>
              National Institute of Technology Durgapur
            </span>
            <span className='px-2 text-slate-500'>|</span>
            Durgapur, India
          </p>
          <p className='py-1 text-slate-400'>
            Bachelor of Technology in Metallurgical and Materials Engineering ·
            May 2025
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed text-slate-400'>
            <li>
              Coursework: Data Structures and Algorithms, Compiler Design,
              Computer Networks
            </li>
            <li>Organizations: Indian Society for Technical Education (ISTE)</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resume;
