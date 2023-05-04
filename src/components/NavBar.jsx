import React from 'react'
import logo from '../assets/logos/navlogo.png'

const NavBar = () => {
  return (
    <div className='bg-[#151515]' id='#'>
        <nav className='px-32 py-3 flex items-center justify-around'>
            {/* <h1 className='text-3xl text-[#7ee6c6]'>DevXplore</h1> */}
            <img src={logo} alt="" className='h-10 filter invert' />
            <ul className='flex items-center space-x-4'>
              <a href="#" className='text-white hover:text-[#7ee6c6]'><li>Home</li></a>
              <a href="#services" className='text-white hover:text-[#7ee6c6]'><li>Services</li></a>
              <a href="" className='text-white hover:text-[#7ee6c6]'><li>Portfolio</li></a>
              <a href="" className='text-white hover:text-[#7ee6c6]'><li>Pages</li></a>
              <a href="" className='text-white hover:text-[#7ee6c6]'><li>Contact Us</li></a>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar