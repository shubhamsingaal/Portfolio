import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ProfilePhoto from './ProfilePhoto';

const Contact = () => {
  return (
    <section id='contact' className='w-full section-pad'>
      <div className='page-wrap'>
        <p className='section-kicker'>Contact</p>
        <h2 className='py-3'>Let&#39;s talk</h2>
        <div className='grid md:grid-cols-5 gap-6 lg:gap-8 items-stretch mt-4'>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='md:col-span-2 w-full surface p-6 sm:p-7 flex flex-col'
          >
            <div className='flex items-center gap-4'>
              <ProfilePhoto size='md' />
              <div>
                <h3 className='text-xl text-white'>Shubham Kumar</h3>
                <p className='text-accent text-sm'>Full-Stack Engineer</p>
              </div>
            </div>
            <p className='py-5 text-slate-400 leading-relaxed'>
              Mumbai · Assistant Manager at JSW Steel · Founder of DevMatch.
              Open to full-time software roles and interesting product
              collaborations.
            </p>
            <a
              href='mailto:shubhamsingaal@gmail.com'
              className='text-sm text-slate-300 hover:text-accent break-all'
            >
              shubhamsingaal@gmail.com
            </a>
            <div className='mt-auto'>
              <p className='uppercase pt-8 font-mono text-xs tracking-[0.2em] text-slate-400'>
                Connect with me
              </p>
              <div className='flex items-center gap-3 py-4'>
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
                <a href='mailto:shubhamsingaal@gmail.com' aria-label='Email'>
                  <div className='icon-btn'>
                    <AiOutlineMail />
                  </div>
                </a>
                <Link href='/resume'>
                  <a aria-label='Resume'>
                    <div className='icon-btn'>
                      <BsFillPersonLinesFill />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='md:col-span-3 w-full surface p-5 sm:p-7'
          >
            <form
              action='https://getform.io/f/mepNOrbM'
              method='POST'
              encType='multipart/form-data'
            >
              <div className='grid sm:grid-cols-2 gap-4 w-full'>
                <div className='flex flex-col'>
                  <label className='uppercase text-xs py-2 text-slate-400 tracking-wider'>
                    Name
                  </label>
                  <input
                    className='rounded-lg p-3 bg-ink-950 border border-white/10 text-slate-100 focus:outline-none focus:border-accent/60'
                    type='text'
                    name='name'
                    required
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='uppercase text-xs py-2 text-slate-400 tracking-wider'>
                    Phone Number
                  </label>
                  <input
                    className='rounded-lg p-3 bg-ink-950 border border-white/10 text-slate-100 focus:outline-none focus:border-accent/60'
                    type='text'
                    name='phone'
                  />
                </div>
              </div>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-xs py-2 text-slate-400 tracking-wider'>
                  Email
                </label>
                <input
                  className='rounded-lg p-3 bg-ink-950 border border-white/10 text-slate-100 focus:outline-none focus:border-accent/60'
                  type='email'
                  name='email'
                  required
                />
              </div>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-xs py-2 text-slate-400 tracking-wider'>
                  Subject
                </label>
                <input
                  className='rounded-lg p-3 bg-ink-950 border border-white/10 text-slate-100 focus:outline-none focus:border-accent/60'
                  type='text'
                  name='subject'
                  required
                />
              </div>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-xs py-2 text-slate-400 tracking-wider'>
                  Message
                </label>
                <textarea
                  className='rounded-lg p-3 bg-ink-950 border border-white/10 text-slate-100 focus:outline-none focus:border-accent/60'
                  rows='5'
                  name='message'
                  required
                ></textarea>
              </div>
              <button className='w-full p-4 mt-4 bg-accent text-ink-950 font-semibold tracking-wider hover:bg-accent-dim transition'>
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <div className='flex justify-center pt-12'>
          <Link href='/'>
            <a aria-label='Back to top'>
              <div className='icon-btn'>
                <HiOutlineChevronDoubleUp className='text-accent' size={24} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
