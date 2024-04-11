/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qIfaZ6Ne5Gb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import HeroSection from "./Hero"
import Navbar from "./Navbar"
import Image from "next/image"
import Experiences from "./Experiences"
import Projects from "./Projects"
import Footer from "./Footer"
import CTASection from "./CTASection"

export default function IndexPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main>
        <HeroSection />
        <Experiences />
        <CTASection />
      </main>
      <Footer/>
    </div>
  )
}

