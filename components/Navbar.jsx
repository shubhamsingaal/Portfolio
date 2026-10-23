import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/#contact', label: 'Contact' },
];

const BrandMark = () => (
  <span className='flex h-9 w-9 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 font-mono text-sm font-semibold text-accent'>
    SK
  </span>
);

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      setShadow(window.scrollY >= 40);
    };
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, duration: 0.7 }}
      className={
        shadow
          ? 'fixed w-full h-16 sm:h-20 z-[100] bg-ink-950/85 backdrop-blur-md border-b border-white/10'
          : 'fixed w-full h-16 sm:h-20 z-[100] bg-ink-950/40 backdrop-blur-sm'
      }
    >
      <div className='flex justify-between items-center w-full h-full page-wrap 2xl:max-w-none 2xl:px-12'>
        <Link href='/'>
          <a className='flex items-center gap-3 group'>
            <BrandMark />
            <span className='hidden sm:flex flex-col leading-tight'>
              <span className='text-sm font-semibold text-white tracking-wide'>
                Shubham Kumar
              </span>
              <span className='font-mono text-[10px] uppercase tracking-[0.18em] text-accent'>
                Full-Stack Engineer
              </span>
            </span>
          </a>
        </Link>
        <div>
          <ul className='hidden lg:flex items-center'>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className='ml-5 xl:ml-7 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-300 hover:text-accent list-none'
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <button
            type='button'
            onClick={handleNav}
            className='lg:hidden text-slate-100 p-2'
            aria-label='Open menu'
          >
            <AiOutlineMenu size={22} />
          </button>
        </div>
      </div>

      <div
        className={
          nav
            ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-[110]'
            : 'hidden'
        }
      >
        <div className='fixed left-0 top-0 w-[82%] max-w-sm h-screen bg-ink-900 p-8 border-r border-white/10 overflow-y-auto'>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a onClick={() => setNav(false)} className='flex items-center gap-3'>
                  <BrandMark />
                  <span className='text-sm font-semibold text-white'>
                    Shubham Kumar
                  </span>
                </a>
              </Link>
              <button
                type='button'
                onClick={handleNav}
                className='rounded-full border border-white/10 p-3 cursor-pointer hover:border-accent/50'
                aria-label='Close menu'
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className='border-b border-white/10 my-4'>
              <p className='w-[90%] py-4 text-slate-400 text-sm'>
                Next.js · TypeScript · Node.js
              </p>
            </div>
          </div>
          <div className='py-2 flex flex-col'>
            <ul className='uppercase'>
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  onClick={() => setNav(false)}
                  className='py-3.5 text-sm tracking-[0.16em] text-slate-200 list-none'
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className='pt-16'>
              <p className='uppercase tracking-widest text-accent font-mono text-xs'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center gap-3 my-4'>
                <a
                  href='https://www.linkedin.com/in/shubhamsingaal/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='icon-btn'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/shubhamsingaal'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='icon-btn'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <a onClick={() => setNav(false)}>
                    <div className='icon-btn'>
                      <AiOutlineMail />
                    </div>
                  </a>
                </Link>
                <Link href='/resume'>
                  <a onClick={() => setNav(false)}>
                    <div className='icon-btn'>
                      <BsFillPersonLinesFill />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
