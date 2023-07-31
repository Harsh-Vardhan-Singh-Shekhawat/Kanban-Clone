import React, { useState } from 'react'
import logo from '../assets/Group 7.png'
import scrollSidebar from '../assets/Group 639.png'
import MenuList from './MenuList'

const Sidebar = ({isOpen,setIsOpen}) => {

  const toggleFunction = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div style={{width : isOpen ? "250px" : "0px", visibility : isOpen ? "visible" : "hidden"}} className='md:w-[250px] h-full border-r-[1px]'>
      <div className='h-[88px] flex justify-items-center items-center w-full border-b-[1px]'>
            <div className='flex cursor-pointer justify-items-center mx-4 items-center h-[24px]'>
                <img className='' src={logo} alt='logo'></img>
                <span className='text-xl mx-1.5 font-semibold'>Project M.</span>
            </div>
            <div onClick={toggleFunction} className='ml-10 z-10 cursor-pointer'>
                <img  src={scrollSidebar} alt='scrollSidebar' />
            </div>
      </div>
      <MenuList />
    </div>
  )
}

export default Sidebar
