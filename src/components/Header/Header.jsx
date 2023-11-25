import React from 'react'
import navLinks from '../../navbarLinks'
import { CiSearch } from "react-icons/ci";
import Button from '../Button/Button';
import { useState , useEffect } from 'react';

export default function Header() {
  const [isValid, setIsValid] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsValid(scrollY > 125);
      };
  
      window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <>
    <div className='fixed bg-transparent w-full z-50'>
    <div className={`h-[80px] p-7 flex justify-between items-center duration-300 ${isValid && "bg-[#141414] h-[70px]"}`}>
      <div className="logo  hover:-translate-y-1 duration-300">
        <a href="/" className='text-xl font-semibold text-white'>Amirjt</a>
      </div>
      <div className="links">
       <ul className='flex gap-7'>
       {navLinks.map(link =>(
            <li className={`hover:-translate-y-1 duration-300 text-white px-4 py-2 rounded-lg ${link.isActive && "bg-main text-white"}`}>
              <a href={link.title} key={link.id}>{link.title}</a>
            </li>
        ))}
       </ul>
      </div>
      <div className='search'>
        <div className='flex gap-2 items-center p-2 border border-solid border-white  rounded-tr-lg rounded-bl-lg'>
          <CiSearch size={20} className='text-white'/>
          <input type="text" placeholder='Search For a Moive' className='bg-transparent outline-none placeholder:text-sm text-white w-48 focus:w-60 duration-300'/>
        </div>
      </div>
      <Button text="Sign in" />
    </div>
    </div>
    </>
  )
}
