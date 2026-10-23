import Image from 'next/image';
import React from 'react';
import ProfileImg from '../public/assets/shubham.jpg';

const ProfilePhoto = ({ className = '', priority = false }) => {
  return (
    <div
      className={`relative h-[200px] w-[200px] sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px] lg:h-[300px] lg:w-[300px] ${className}`}
    >
      <div className='absolute -inset-3 rounded-full bg-accent/25 blur-2xl' />
      <div className='relative h-full w-full overflow-hidden rounded-full bg-ink-900 ring-[3px] ring-accent/70 ring-offset-2 ring-offset-ink-950'>
        <Image
          src={ProfileImg}
          alt='Shubham Kumar'
          layout='fill'
          objectFit='cover'
          objectPosition='50% 12%'
          priority={priority}
        />
      </div>
    </div>
  );
};

export default ProfilePhoto;
