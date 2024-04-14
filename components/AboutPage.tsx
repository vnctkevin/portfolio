import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';
import Footer from './Footer';
import {BsInstagram, BsTwitter, BsGithub, BsMedium, BsYoutube} from 'react-icons/bs'
import { HiOutlineMail } from "react-icons/hi";
import { useTheme } from 'next-themes';

export default function AboutPage() {
  const { theme, setTheme } = useTheme();
    return (
        <div className="flex flex-col min-h-[100dvh] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <Navbar />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 md:gap-10">
            <img src={theme === "dark" ? "logo-kevin-fit-white.png" : "logo-kevin-fit.png"} alt="Kevin" className='w-40' />
            <div className="space-y-3 md:order-1">
              <div className="space-y-2 text-center md:text-left">
                
                <p className="max-w-[600px] text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-200">
                I synthesize ideas into visuals and codes. My name is Kevin. Currently, I'm studying Computer Science at University of Indonesia as an undergraduate student. As a creative and dedicated person who's passionate about <b>visual design, UI/UX design, and software and web development</b>, I have helped people visualize their dreams and visions for more than five years, and I will be more than happy to cooperate with you.
                </p>
              </div>
              
              </div>
            <img
              alt="Image"
              className="mx-auto overflow-hidden rounded-xl object-cover object-center md:w-[300px] lg:w-[500px] md:order-0"
              height="400"
              src="images/profile-2024-v1.jpg"
              width="500"
            />
          </div>
          <div className="flex flex-col pt-4 justify-center gap-4 min-[400px]:flex-row">
            <Link href="mailto:vnctkevin@gmail.com">
              <HiOutlineMail className="w-6 h-6" />
            </Link>
            <Link href="https://github.com/vnctkevin">
              <BsGithub className="w-6 h-6" />
            </Link>
            <Link href="https://www.twitter.com/vnctkevin/">
              <BsTwitter className="w-6 h-6" />
            </Link> 
            <Link href="https://www.instagram.com/vnctkevin/" >
              <BsInstagram className="w-6 h-6" />
            </Link>
            <Link href="https://medium.com/@vnctkevin">
              <BsMedium className="w-6 h-6" />
            </Link>
            <Link href="https://www.youtube.com/@vnctkevin/videos">
              <BsYoutube className="w-6 h-6" />
            </Link>
            </div>
        </section>
        <Footer/>
        </div>
    );
}
