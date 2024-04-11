import {BsInstagram, BsTwitter, BsGithub, BsMedium, BsYoutube, BsGlobe} from 'react-icons/bs'

export default function Footer() {
    return (
        
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">Copyright © 2024 Kevin. All rights reserved.</p>
            <div className="flex items-center sm:ml-auto flex gap-4 sm:gap-6">
                <a href='https://github.com/vnctkevin'><BsGithub className="w-4 h-4" /></a>
                <a href='https://www.twitter.com/vnctkevin/'><BsTwitter className="w-4 h-4" /></a>
                <a href='https://www.instagram.com/vnctkevin/'><BsInstagram className="w-4 h-4" /></a>
                <a href='https://medium.com/@vnctkevin'><BsMedium className="w-4 h-4" /></a>
                <a href='https://www.youtube.com/@vnctkevin/videos'><BsYoutube className="w-4 h-4" /></a>
                <a href='https://vnctkevin.com/'><BsGlobe className="w-4 h-4" /></a>
            </div>
        </footer>
    )
  }