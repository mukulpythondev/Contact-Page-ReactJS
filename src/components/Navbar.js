import React from 'react'
import logo from '../images/logo.jpg'
const Navbar = () => {
  return (
    <nav className='flex justify-between px-2 pt-3 md:px-16 md:h-16 items-center'>
        <img src={logo} className='h-14 w-14 ' alt="" />
        <ul className='flex md:gap-6 gap-3 text-base uppercase font-semibold cursor-pointer'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar