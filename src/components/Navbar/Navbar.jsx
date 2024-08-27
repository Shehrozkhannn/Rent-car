"use client";
import React, {useEffect} from 'react';
import Link from 'next/link';
import {HiMenuAlt3 , HiMenuAlt1} from 'react-icons/hi';
import DarkMode from './DarkMode';
import ResponsiveMenu from './ResponsiveMenu';
import { usePathname } from 'next/navigation';
export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 3,
    name: "FEATURES",
    link: "/#features",
  },
  {
    id: 4,
    name: "BLOG",
    link: "/#blog",
  },
  {
    id: 5,
    name: "CONTACT",
    link: "/#contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  useEffect(() => {
    console.log(pathname)
  }, [])
  
  return (
  <nav className='relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300'>
    <div className="container py-2 md:py-0">
      <div className="flex items-center justify-between">
        <Link href='/' className='text-3xl font-bold'>
          <span>Rent</span>
          <span className='text-primary'>Hub</span>
        </Link>

        <div className="hidden md:block">
          <ul className='flex items-center gap-6'>
            {Navlinks.map(({id , name , link})=>{
              const isActive = pathname === link;
              return (
                <li key={id} className='py-4'>
                  <Link
                  href={link}
                  className={`${isActive ?'bg-primary dark:text-black' : ''} text-lg font-medium text-black dark:text-white py-2 px-4
                  rounded-full hover:bg-primary duration-300
                  `}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
            {/* dark mode starts here  */}
            <DarkMode/>
          </ul>
        </div>
        {/* Mobile menu section starts here  */}
        <div className='md:hidden flex items-center gap-4'>
          <DarkMode/>
          {
            showMenu ? (
              <HiMenuAlt1
              onClick={toggleMenu}
              className='cursor-pointer transition-all'
              size={30}
              />
            ):(
              <HiMenuAlt3
              onClick={toggleMenu}
              className='cursor-pointer transition-all'
              size={30}
              />
            )
          }
        </div>
      </div>
    </div>
    <ResponsiveMenu showMenu={showMenu}/>
  </nav>
  )
}

export default Navbar