import React from 'react';
import logo from "../Assets/logo.png";
import github from "../Assets/github.svg";

import { HOME_JSON } from '../JSON/json';

const Home = () => {
  return (
    <div className="py-10 space-y-6">
      <div className="lg:w-7/12 space-y-4 ">
        <img src={logo} alt="profileImage" className="h-[70px]" />
        <h1 className="text-5xl font-bold leading-snug">{HOME_JSON.main}</h1>
      <p className="leading-loose text-gray-500">{HOME_JSON.sub}</p>
      </div>
          <SocialNetworks />
          <Work />
      <Education />
    </div>
  );
}


const SocialNetworks = () => {
    const networks = [
      {
        icon: github,
        navigate: "/",
        name: "github",
      },
      {
        icon: github,
        navigate: "/",
        name: "github",
      },
      {
        icon: github,
        navigate: "/",
        name: "github",
      },
      {
        icon: github,
        navigate: "/",
        name: "github",
      },
    ];
    return (
      <div className='flex items-center space-x-6 '>
        {networks.map((net, index) => (
          <a key={index} href={net.navigate} target='_blank' rel='noreferrer'>
            <img className='h-[30px] w-[30px] bg-white' alt={net.name} src={net.icon} />
          </a>
        ))}
      </div>
    );
}

const Work = () => {
    const companies = [
      {
        name: "Venzo Technologies Private Limited",
        location: "Thoraipakkam, Chennai",
        role: "Software Developer Level 2",
            perks: [],
        duration:"October 2022 - Present"
      },
      {
        name: "Venzo Technologies Private Limited",
        location: "Thoraipakkam, Chennai",
          role: "Software Developer Trainee",
          duration:"October 2021 - September 2022",
        perks:[]
      },
    ];
    return (
      <div>
        <div>
          <h4 id="work" className="text-2xl font-bold">
            Work
          </h4>
        </div>
        <div>
          {companies.map((comp, index) => (
            <div key={index} className="border my-3 p-3 space-y-2">
              <h3 className="text-xl font-semibold">{comp.role}</h3>
              <h4 className="text-md">{comp.name}</h4>
              <p className="text-sm text-gray-400">{comp.location}</p>
              <p className="text-sm text-gray-400">{comp.duration}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

const Education = () => {
    const eduStages = [
      {
        name: "College of Engineering Guindy, Anna university",
        year: "2017 - 2021",
            degree: "Agricultural and Irrigation Engineering",
        perks:[]
      },
      {
        name: "Sri Gnananandha Matriculation higher secondary school",
        year: "2015 - 2017",
          degree: "Higher Secondary Education",
        perks:[]
      },
      {
        name: "Sri Gnananandha Matriculation higher secondary school",
        year: "2015",
          degree: "SSLC",
        perks:[]
        },
      
    ];
    return (
      <div className="">
        <h4 id="education" className="text-2xl font-bold">
          Education
        </h4>
        <div>
          {eduStages.map((edu, index) => (
            <div key={index} className="border space-y-2  my-3 p-3">
              <h4 className="text-lg font-semibold">{edu.name}</h4>
              <p className="text-gray-500 text-md">{edu.degree}</p>
              <p className="text-gray-500 text-md">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Home