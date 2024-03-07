import { useState } from 'react'
import {navLinks} from '../constants'
import menu from '../assets/images/menu.svg'
import close from '../assets/images/close.svg'

import logo from '../assets/images/logo.png'


export default function Navbar() {

  
  const [toggle, settoggle] = useState(false);
  
  return (
    <nav className='paddingx w-full flex py-5 justify-between items-center fixed top-0 z-20 bg-foreground shadow-md'>
    <img src={logo} alt="koinx" className=' cursor-pointer w-[100px] h-[32px]' />
    <div className='flex gap-10'>
    <ul className='list-none widescreen:flex hidden justify-end items-center flex-1'>
       {navLinks.map((nav,i) =>(
        <li
          key = {nav.id}
          className={`font-inter
          font-[700] cursor-pointer text-[16px] text-[#0F1629] ${i=== navLinks.length-1 ? 'mr-0' : 'mr-10'}`}>
            <a href = {`#${nav.id}`}>
                {nav.title}
            </a>
        </li>
       ))}
       
    </ul>
    <button
  type='button'
  className='widescreen:flex hidden px-5 py-2 font-medium text-[16px] rounded-lg text-foreground bg-gradient-to-r from-[#2870EA] via-[#1B4AEF] to-[#2870EA] hover:from-[#0f43b2] hover:via-[#0f43b2] hover:to-[#1B4AEF] duration-300 outline-none border-none'
>
  Get Started
</button>
    </div>
    <div className='widescreen:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} 
        className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=> settoggle((prev)=> !prev)} />
    <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-foreground absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar shadow-xl`}>
    <ul className='list-none flex flex-col justify-end items-center flex-1'>
       {navLinks.map((nav,i) =>(
        <li
          key = {nav.id}
          className={`font-poppins
          font-medium cursor-pointer text-[16px] text-black ${i=== navLinks.length-1 ? 'mb-0' : 'mb-4'}`}>
            <a href = {`#${nav.id}`}>
                {nav.title}
            </a>
        </li>
       ))}
       <button type='button' className='mt-4 px-5 py-2 font-medium text-[16px] rounded-lg text-foreground bg-blue hover:bg-[#0f43b2] duration-300 outline-none border-none'>
        Get Started
       </button>
    </ul>
    </div>
    </div>
</nav>

  )
}
