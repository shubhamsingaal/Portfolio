import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const ResumeLink = 'https://drive.google.com/file/d/1wZHnOnoqZ6_uoPrPNeRUYg0PX3Liyeif/view?usp=sharing';

const Resume = () => {
  const downloadResume = () => {
    window.open(ResumeLink, '_blank');
  };

  return (
    <>
      <Head>
        <title>Shubham | Resume</title>
        <meta
          name="description"
          content="I’m a full stack web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center text-2xl font-bold">Resume</h2>
        <div className="text-center py-4">
          <button
            onClick={downloadResume}
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-800"
          >
            Download Resume
          </button>
        </div>

        {/* Header Section */}
        <div className="bg-gray-200 my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center text-lg font-bold">Shubham Kumar</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/shubhamsingaal/"
              target="_blank"
              rel="noreferrer"
              className="mr-4"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com/shubhamsingaal"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Summary Section */}
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <p>Proven Leadership | Web Development | Complex Problem Solving</p>
        </div>
        <p>
          A dedicated and highly motivated undergraduate student eager to learn and work with diverse tech stacks
          and emerging technologies. Proficient in the MERN stack, with hands-on experience in developing dynamic,
          responsive web applications. Enthusiastic about taking on challenges and committed to continuous learning
          and growth.
        </p>

        {/* Skills Section */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Programming Languages</span>: JavaScript, C, C++, HTML, CSS, SQL, Algorithms, Data Structures, Networks
          </p>
          <p className="py-2">
            <span className="font-bold">Libraries/Tools</span>: ReactJS, NextJS, STL, Bootstrap, Tailwind CSS, SEO, Git, GitHub
          </p>
        </div>

        {/* Professional Experience */}
        <h5 className="text-center underline text-[18px] py-4">Professional Experience</h5>

        {/* Experience: Software Engineering Intern */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Coditioning</span>
            <span className="px-2">|</span>London, UK - Remote
          </p>
          <p className="py-1 italic">Software Engineering Intern</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Implemented SEO strategies, including keyword optimization, on-page SEO, backlink building, and technical SEO, improving search rankings by 80%.</li>
            <li>Developed and integrated interactive sections like forms, navigation menus, and chat windows, boosting user engagement by 40%.</li>
            <li>Debugged and troubleshot issues, ensuring application performance and minimizing downtime.</li>
            <li>Led backend integration and collaborated with a team of two developers to maintain seamless platform functionality.</li>
          </ul>
        </div>

        {/* Experience: AI Prompt Engineering Intern */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Coditioning</span>
            <span className="px-2">|</span>London, UK - Remote
          </p>
          <p className="py-1 italic">AI Prompt Engineering Intern</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Generated gamified versions of DSA challenges and solutions in multiple programming languages.</li>
            <li>Created technical content in the software engineering domain to support student learning, increasing subscriptions by 30%.</li>
            <li>Conducted research and contributed to gamification of educational content, enhancing user engagement.</li>
          </ul>
        </div>

        {/* Experience: ISTE */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">ISTE Students’ Chapter NIT Durgapur</span>
            <span className="px-2">|</span>Durgapur, India
          </p>
          <p className="py-1 italic">Web & Tech Head</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed various websites including{' '}
              <a href="https://www.istenitdgp.com/" className="text-blue-500">
                ISTE NIT Durgapur
              </a>,{' '}
              <a href="https://cit.istenitdgp.com/" className="text-blue-500">
                CIT 7.0
              </a>,{' '}
              <a href="https://adventure-alcove.vercel.app/" className="text-blue-500">
                Adventure-alcove
              </a>, and more.
            </li>
            <li>Led a team of 15 students, overseeing all aspects of web development projects from conception to deployment.</li>
          </ul>
        </div>

        {/* Education Section */}
        <h5 className="text-center underline text-[18px] py-4">Education</h5>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">National Institute of Technology Durgapur</span>
            <span className="px-2">|</span>Durgapur, India
          </p>
          <p className="py-1 italic">Bachelor of Technology in Metallurgical and Materials Engineering</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Coursework: Fundamentals of Algorithms, Data Structures, Introduction to Computing, Computer Networks</li>
            <li>Organizations: Indian Society for Technical Education (ISTE)</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resume;
