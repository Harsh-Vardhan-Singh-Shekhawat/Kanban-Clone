import React from 'react'
import logo from '../assets/Group 7.png'
import scrollSidebar from '../assets/Group 639.png'
import MenuList from './MenuList'
const Sidebar = () => {
  return (
    <div className='w-[250px] h-full border-r-[1px]'>
      <div className='h-[88px] flex justify-items-center items-center w-full border-b-[1px]'>
            <div className='flex cursor-pointer justify-items-center mx-4 items-center h-[24px]'>
                <img className='' src={logo} alt='logo'></img>
                <span className='text-xl mx-1.5 font-semibold'>Project M.</span>
            </div>
            <div className='ml-10 cursor-pointer'>
                <img src={scrollSidebar} alt='scrollSidebar' />
            </div>
      </div>
      <MenuList />
    </div>
  )
}

export default Sidebar
