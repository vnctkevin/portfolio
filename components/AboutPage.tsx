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
            <img src={theme === "dark" ? "logo-kevin-fit-white.png" : "logo-kevin-fit.png"} alt="Kevin" className='w-40 md:w-52' />
            <div className="space-y-3 md:order-1">
              <div className="space-y-2 text-center md:text-left">
                
                <p className="max-w-[600px] text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-200">
                I synthesize ideas into visuals and codes. My name is Kevin. Currently, I'm a Bachelor of Computer Science graduate from University of Indonesia. As a creative and dedicated software engineer who's passionate about <b>crafting experiences</b>, I have helped people visualize their dreams and visions for more than five years, and I will be more than happy to cooperate with you.
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
          <div className="grid pt-12 justify-center px-4 gap-4 min-[400px]:flex-row">
            <Link href="mailto:vnctkevin@gmail.com">
              <button className='bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white dark:text-gray-200 py-2 px-4 border border-gray-500 hover:border-transparent rounded w-full flex items-center gap-4'>
                <HiOutlineMail className="w-6 h-6" />
                Email Me!
              </button>
              
            </Link>
            <Link href="https://github.com/vnctkevin">
            <button className='bg-black hover:bg-gray-200 text-white font-semibold hover:text-black py-2 px-4 border border-gray-500 hover:border-transparent rounded w-full flex items-center gap-4'>
              <BsGithub className="w-6 h-6" />
                Github
              </button>
            </Link>
            <Link href="https://www.twitter.com/vnctkevin/">
            <button className='bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-blue-500 rounded w-full flex items-center gap-4'>
              <BsTwitter className="w-6 h-6" />
                Follow me on Twitter
              </button>
            </Link> 
            <Link href="https://www.instagram.com/vnctkevin/" >
            <button className='bg-orange-500 hover:bg-white text-white font-semibold hover:text-orange-600 py-2 px-4 border border-orange-700 hover:border-orange-500 rounded w-full flex items-center gap-4'>
              <BsInstagram className="w-6 h-6" />
                Follow my Instagram
              </button>
            </Link>
            <Link href="https://medium.com/@vnctkevin">
              <button className='bg-gray-500 hover:bg-white text-white font-semibold hover:text-gray-700 py-2 px-4 border border-gray-500 hover:border-gray-200 rounded w-full flex items-center gap-4'>
                <BsMedium className="w-6 h-6" />
                  Read on Medium
                </button>
            </Link>
            <Link href="https://www.youtube.com/@vnctkevin/videos">
              <button className='bg-red-700 hover:bg-white text-white font-semibold hover:text-red-600 py-2 px-4 border border-red-900 hover:border-red-200 rounded w-full flex items-center gap-4'>
                <BsYoutube className="w-6 h-6" />
                  Personal Youtube Channel
                </button>
            </Link>
            </div>
        </section>
        <Footer/>
        </div>
    );
}
