"use client";
import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react'
import { EXPERIENCES } from "../constants/experiences"
import { ExperiencesType, SingularExperienceType } from "../constants/experiences/types"
import Link from 'next/link';
import { useState } from 'react'
import { render } from 'react-dom'

export default function Projects() {
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
            <div className="mx-auto w-full h-full items-center justify-center content-between p-4 sm:p-8 border">
                <h3 className="text-lg font-bold">{experience.name}</h3>
                <div className="flex flex-col w-full space-y-4">
                    {experience.history.map((history, index) => (
                        <div key={index} className="flex flex-col w-full space-y-2">
                        <p className="text-sm text-gray-500 dark:text-gray-400">{history.role} | {history.date}</p>
                        {history.job_desc?.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                        <div className="flex flex-row w-full space-x-2 items-center">
                            {experience.skills?.map((skill, i) => (
                                <div key={i}>
                                  <Link href={skill.link}>
                                    <Image src={skill.logo} alt={skill.name} width={20} height={20} />
                                  </Link>
                                </div>
                            ))}
                        </div>
                        <Link
                          className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                          href={experience.link}
                        >
                         Open Link
                        </Link>
                        </div>
                    ))}
                    </div>
              </div>
          </>
        )
      })
  }

  return (
    <>
    <section className="w-full py-8 md:py-12 lg:py-24">
          <div className="px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Projects</h2>
              <div className="divide-y rounded-lg border">
                <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch justify-center content-space divide-x divide-y">
                  {renderExperiences(allExperiences.Projects)}
                </div>
              </div>
            </div>
          </div>
        </section>
  </>
  )
} 

