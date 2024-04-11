import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import {IoMdMoon, IoMdSunny} from 'react-icons/io';

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    return (
        <>
        <header className="px-4 lg:px-6 h-14 flex items-center dark:bg-gray-900">
              <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                  <img
                    src={theme === "dark" ? "logo-kevin-fit-white.png" : "logo-kevin-fit.png"}
                    alt="Kevin"
                    width="70"
                    height="40"
                  />
                  <span className="sr-only">Kevin</span>
                </Link>
              </header>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="https://jurnal.vnctkevin.com/">
            Blog
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="mailto:vnctkevin@gmail.com">
            Contact
          </Link>
          <button
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 transition-colors"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")
          } 
          >
            {theme === "dark" ? <IoMdSunny  /> : <IoMdMoon />}
          </button>
        </nav>
        </header>
        </>
    );
}


  