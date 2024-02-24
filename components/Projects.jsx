import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import jkbrosImg from '../public/assets/projects/jkbros.png';
import citImg from '../public/assets/projects/cit.png';
import auditionsImg from '../public/assets/projects/auditions.png';
import panoramaImg from '../public/assets/projects/panorama.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Jk-Bros | Logistics'
            backgroundImg={jkbrosImg}
            projectUrl='/jkbros'
            tech='React JS'
          />
          <ProjectItem
            title='CIT | ISTE'
            backgroundImg={citImg}
            projectUrl='/cit'
            tech='Next JS'

          />
          <ProjectItem
            title='Auditions App'
            backgroundImg={auditionsImg}
            projectUrl='/auditions'
            tech='JavaScript'

          />
          <ProjectItem
            title='Panorama'
            backgroundImg={panoramaImg}
            projectUrl='/panorama'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
