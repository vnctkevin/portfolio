"use client";
import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react'
import Link from 'next/link'
import { EXPERIENCES } from "../constants/experiences"
import { ExperiencesType, SingularExperienceType } from "../constants/experiences/types"

import { useState } from 'react'
import { render } from 'react-dom'

export default function Experiences() {
  //get all experiences
  const [state, setState] = useState("");

  const allExperiences = EXPERIENCES
  const experienceKeys: (keyof ExperiencesType)[] = Object.keys(
    EXPERIENCES
  ) as (keyof ExperiencesType)[];

  const [experienceTabs, setExperienceTabs] = useState<number>(0);

  //render singular experience
  const selectedExperience: SingularExperienceType[] =
      EXPERIENCES[experienceKeys[experienceTabs]];

  const renderExperiences = (experiences: SingularExperienceType[]) => {
      return experiences.map((experience: SingularExperienceType) => {
        return (
          <>
            <div className="space-y-2 border rounded-lg p-4 my-4 border-gray-200 dark:border-gray-300 dark:bg-gray-800">
                <h3 className="text-lg font-bold">{experience.name}</h3>
                {experience.history.map((history, index) => (
                    <div key={index} className='pr-8'>
                    <p className="text-sm pb-2">{history.role} | {history.date}</p>
                    {history.job_desc?.map((desc, i) => (
                        <li key={i}>{desc}</li>
                    ))}                
            </div>
            ))}
            <div className="flex justify-between w-full pt-4">
            <div className="flex flex-row space-x-2 items-center">
                  {experience.skills?.map((skill, i) => (
                      <div key={i}>
                          <Link href={skill.link}>
                              <Image src={skill.logo} alt={skill.name} width={20} height={20} />
                          </Link>
                        </div>
                      ))}
                  </div>
            <Link href={experience.link} 
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
                Learn More
            </Link>
            </div>
            </div>
          </>
        )
      })
  }

  return (
    <>
      <section className="py-8 md:py-12 lg:py-24 dark:bg-gray-900" id='experiences'>
        <div className="px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">I have worked with a range of companies, organizations, and projects. Here are a few of my experiences.</p>
              <div className="flex justify-between md:justify-start space-x-4 bg-gray-100 dark:bg-gray-900 rounded-md border-b border-t border-gray-400 dark:border-gray-600">
                <button
                  className={`px-4 py-2 text-sm font-medium focus:outline-none rounded-md ${
                    experienceTabs === 0 ? 'text-gray-900 dark:bg-gray-100 bg-gray-300' : 'text-gray-500 bg-transparent'
                  }`}
                  onClick={() => setExperienceTabs(0)}
                >
                  Work
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium focus:outline-none rounded-md ${
                    experienceTabs === 1 ? 'text-gray-900 dark:bg-gray-100 bg-gray-300' : 'text-gray-500 bg-transparent'
                  }`}
                  onClick={() => setExperienceTabs(1)}
                >
                  Projects
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium focus:outline-none rounded-md ${
                    experienceTabs === 2 ? 'text-gray-900 dark:bg-gray-100 bg-gray-300' : 'text-gray-500 bg-transparent'
                  }`}
                  onClick={() => setExperienceTabs(2)}
                >
                  Organizations
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium focus:outline-none rounded-md ${
                    experienceTabs === 3 ? 'text-gray-900 dark:bg-gray-100 bg-gray-300' : 'text-gray-500 bg-transparent'
                  }`}
                  onClick={() => setExperienceTabs(3)}
                >
                  Education
                </button>
              </div>
              {renderExperiences(selectedExperience)}
            </div>
          </div>
      </section>

    </>
  );
} 

