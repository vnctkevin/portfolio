import Image from 'next/image'
import * as React from 'react'
import Link from 'next/link'
import { SKILLS } from "../constants/experiences/skills"
import { ExperienceSkill, } from '../constants/experiences/types'

import { useState } from 'react'
import { render } from 'react-dom'
import { motion } from 'framer-motion';

export default function Skills() {
  //render all skills
  const [state, setState] = useState("");
  return (
    <section id="skills" className="py-8 md:py-12 lg:py-24 dark:bg-gray-100">
      <div className='max-w-6xl mx-auto space-y-4'>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-gray-800">Skill</h2>
        <div className="flex flex-wrap gap-4 ">
          {Object.values(SKILLS).map((i, idx) => (
          <motion.div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-md p-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
              <Link href={i.link}>
                  <Image src={i.logo} alt={i.name} width={50} height={50} />
              </Link>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  ) 
}