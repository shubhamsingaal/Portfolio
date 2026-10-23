import Image from "next/image";
import React from "react";
import citImg from "../public/assets/projects/cit.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import ProjectStory from "../components/ProjectStory";

const cit = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={citImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">CIT - Cognitive Intelligence Test</h2>
          <h3>Next JS / Django / Sql</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="section-kicker">Project</p>
          <h2 className="py-2">A digital home for ISTE&apos;s flagship event</h2>
          <p className="text-slate-400 leading-relaxed">
            Cognitive Intelligence Test 7.0 was the seventh edition of ISTE
            Students&apos; Chapter NIT Durgapur&apos;s annual flagship event, focused on
            exploring competitive exams such as CAT.
          </p>
          <ProjectStory
            challenge="Help students discover and engage with the event amid the busy transition into college life."
            approach="Built the event website with Next.js, Django, Firebase, and SQL, with a focus on presenting the event and its exam-oriented experience."
            outcome="The event site is live, and its source code is available to explore."
          />
          <a
            href="https://github.com/shubhamsingaal/stcit-5"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://cit.istenitdgp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 surface py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-slate-300 py-2 flex items-center cursor-default">
                <RiRadioButtonFill className="pr-1" /> Next JS
              </p>
              <p className="text-slate-300 py-2 flex items-center cursor-default">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-slate-300 py-2 flex items-center cursor-default">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-slate-300 py-2 flex items-center cursor-default">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-slate-300 py-2 flex items-center cursor-default">
                <RiRadioButtonFill className="pr-1" /> Django
              </p>
              <p className="text-slate-300 py-2 flex items-center cursor-default">
                <RiRadioButtonFill className="pr-1" /> Sql
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default cit;
