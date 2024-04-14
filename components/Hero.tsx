import Link from 'next/link';
import Image from 'next/image';
import TextAnimation from './TextAnimation';
import RedoTextAnimation from './RedoTextAnimation';
import { motion } from "framer-motion";


const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function HeroSection() {
    return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container flex flex-col md:flex-row items-center justify-center gap-4 px-4 text-center md:px-6 md:gap-10">
            <div className="space-y-3 md:order-1">
              <div className="space-y-2 text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/tight lg:text-6xl/none">
                  Hi, I'm Kevin
                </h1>
                
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                <b>I am a <RedoTextAnimation /></b></p> 
                <p className="max-w-[600px] text-gray-500 md:text-base/relaxed dark:text-gray-400">
                Currently, I'm studying Computer Science at University of Indonesia as an undergraduate student. I am a creative and dedicated person who's passionate about <b>visual design, UI/UX design, and software and web development.</b>
                </p>
              </div>
              <div className="flex flex-col justify-center md:justify-start gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="assets/CV_Kevin.pdf"
                >
                  Download CV
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="assets/Portfolio_Kevin.pdf"
                >
                  Download Portfolio
                </Link>
              </div>
            </div>
            <img
              alt="Image"
              className="mx-auto overflow-hidden rounded-xl object-cover object-center md:w-[400px] lg:w-[500px] md:order-0"
              height="400"
              src="images/profile-2024.jpg"
              width="600"
            />
          </div>
        </section>

    );
}
