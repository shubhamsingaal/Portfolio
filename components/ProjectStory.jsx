import React from 'react';

const ProjectStory = ({ challenge, approach, outcome }) => {
  const sections = [
    { title: 'Challenge', content: challenge },
    { title: 'Approach', content: approach },
    { title: 'Outcome', content: outcome },
  ];

  return (
    <section className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 py-6'>
      {sections.map((section) => (
        <div key={section.title} className='surface p-5'>
          <h3 className='font-mono text-xs uppercase tracking-[0.18em] text-accent'>
            {section.title}
          </h3>
          <p className='mt-3 text-sm leading-relaxed text-slate-300'>
            {section.content}
          </p>
        </div>
      ))}
    </section>
  );
};

export default ProjectStory;
