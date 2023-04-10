import React from 'react'
import { EXPERIENCE_JSON } from '../JSON/json';

const Experience = () => {
  return (
    <div className="space-y-6 py-6">
      <div className="lg:w-8/12 space-y-4 ">
        {/* <img src={logo} alt="profileImage" className="h-[70px]" /> */}
        <h1 className="text-3xl lg:text-5xl font-bold leading-relaxed lg:leading-snug">{EXPERIENCE_JSON.main}</h1>
        <p className="leading-loose text-gray-500">{EXPERIENCE_JSON.sub}</p>
      </div>
      <Certifications />
      <Skills />
    </div>
  );
}

const Certifications = () => {

  return (
    <div className="">
      <h4 className="text-2xl font-bold">Certifications</h4>
      <div className='mt-4'>
        {EXPERIENCE_JSON.certifications.map((cert, index) => (
          <CertificationsSub CertificationGroup={cert} key={index} />
        ))}
      </div>
    </div>
  );
}

const CertificationsSub = ({ CertificationGroup }) => {
  return (
    <div className='mt-6'>
      <h5 className="border-b pr-3 font-medium pb-1 inline-block">{CertificationGroup.title}</h5>
      <div className="flex flex-wrap">
        {CertificationGroup?.certificates?.map(({ title, link }, index) => (
          <a className="mr-5 p-4 hover:bg-zinc-800 rounded-md mt-4 space-y-2" href={link} target="_blank" rel="noreferrer" key={index}>
            <p>{title}</p>
            <p className="text-blue-500">View certificate</p>
          </a>
        ))}
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <div>
      <h4 className="text-2xl font-bold">Skills</h4>
      <div className='space-y-6 pt-8'>
        {EXPERIENCE_JSON.skills.map(({title,set}, index) => (
          <div key={index}>
            <p className="font-medium pr-3 pb-1 inline-block">{title}</p>
            <div className='flex flex-wrap'>
              {
                set?.map((s, index) => (
                  <p className='px-5 py-1 mr-4 mt-3 bg-zinc-700 rounded-md' key={index}>{s}</p>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience