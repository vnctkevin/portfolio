import Image from 'next/image'
import * as React from 'react'
import Link from 'next/link'
import { SKILLS } from "../constants/experiences/skills"
import { ExperienceSkill, } from '../constants/experiences/types'

import { useState } from 'react'
import { render } from 'react-dom'

export default function Experiences() {
  //render all skills
  const [state, setState] = useState("");
  return (
    <section id="skills" className="py-8 md:py-12 lg:py-24 px-4 md:px-6 space-y-4 dark:bg-gray-100">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-gray-800">Skill</h2>
      <div className="flex flex-wrap gap-4">
        {Object.values(SKILLS).map((i, idx) => (
        <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
            <Link href={i.link}>
                <Image src={i.logo} alt={i.name} width={50} height={50} />
            </Link>
        </div>
        ))}
      </div>
    </section>
  ) 
}