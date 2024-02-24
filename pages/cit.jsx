import Image from "next/image";
import React from "react";
import citImg from "../public/assets/projects/cit.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

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
          <h2 className="py-2">CIT - Coginitive Intelligence Test</h2>
          <h3>Next JS / Django / Sql</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The starting of college life was a turmoil, tons of events and
            classes and a race for survival where a minute's denial can lead to
            unfortunate consequences in a stampede. To every parents question
            which goes like, "Kya? Kuch soche ho?", we remain unanswerable. Torn
            between the scopes that engineering provides us, we all do deserve a
            trailer, a guide to what those competitive exams look like! ISTE
            Students' Chapter NIT Durgapur, presents you the seventh edition of
            its Annual Flagship Event, a journey to explore the "what-ifs" of
            your career. Take a venture around the complexities of exams like
            CAT and unleash your intelligence in COGNITIVE INTELLIGENCE TEST 7.0
          </p>
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
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Django
              </p>
              <p className="text-gray-600 py-2 flex items-center">
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
