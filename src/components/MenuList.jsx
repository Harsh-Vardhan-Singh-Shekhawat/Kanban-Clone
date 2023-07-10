import React from 'react'
import Home from '../assets/category.png'
import Message from '../assets/message.png'
import Task from '../assets/task-square.png'
import Member from '../assets/profile-2user.png'
import Setting from '../assets/setting-2.png'
import plus from '../assets/add-square.png'
import Lamp from '../assets/lamp-on.png'
const MenuList = () => {
  return (
    <div className=' text-[#787486]  px-[12.5px] py-[25px] '>
      <div>
        <div className='flex text-base justify-items-center h-[50px] px-[12px] py-[13px] text-[19px] items-center cursor-pointer hover:bg-[#f1eefd] hover:rounded-[6px]'>
            <img src={Home}></img>
            <span className='w-[46px] font-medium  ml-[14px]'>
                Home
            </span>
        </div>

        <div className='flex text-base justify-items-center h-[50px] px-[13px] py-[12px] text-[19px] items-center cursor-pointer hover:bg-[#f1eefd] hover:rounded-[6px]'>
            <img src={Message}></img>
            <span className='w-[46px] font-medium ml-[14px]'>
                Messages
            </span>
        </div>

        <div className='flex text-base justify-items-center h-[50px] px-[13px] py-[12px] text-[19px] items-center cursor-pointer hover:bg-[#f1eefd] hover:rounded-[6px]'>
            <img src={Task}></img>
            <span className='w-[46px] font-medium ml-[14px]'>
                Tasks
            </span>
        </div>

        <div className='flex text-base justify-items-center h-[50px] px-[13px] py-[12px] text-[19px] items-center cursor-pointer hover:bg-[#f1eefd] hover:rounded-[6px]'>
        <img src={Member}></img>
            <span className='w-[46px] font-medium ml-[14px]'>
                Members
            </span>
        </div>

        <div className='flex text-base justify-items-center h-[50px] px-[13px] py-[12px] text-[19px] items-center cursor-pointer hover:bg-[#f1eefd] hover:rounded-[6px]'>
            <img src={Setting}></img>
            <span className='w-[46px] font-medium ml-[14px]'>
                Settings
            </span>
        </div>
      </div>
      
      <hr className='text-[#DBDBDB]' />
      
      <div className='py-4'>
        
        <div className='flex justify-items-center px-[13.5px] py-[12px] justify-between items-center'>
            <span className='font-bold text-[12px] leading-[19.5px]'>MY PROJECTS</span>
            <img  className='w-[16px] h-[16px]' src={plus} alt='add'>
            </img>
        </div>

      <div className='flex my-[9px] text-base justify-items-center h-[39px] px-[13px] py-[12px] text-[19px] items-center cursor-pointer active:text-black active:bg-[#f1eefd] hover:text-black hover:bg-[#f1eefd] hover:rounded-[6px]'>
            <span className='w-[8px] h-[8px] rounded-full bg-[#7AC555]'></span>
            <span className='font-medium ml-[14px]'>
                Mobile App
            </span>
            <span className='items-center text-[16px] w-[16px] h-[19px] font-bold '>...</span>
        </div>
        
        <div className='flex my-[9px] text-base justify-items-center h-[39px] px-[13px] py-[12px] text-[19px] items-center cursor-pointer  hover:text-black hover:bg-[#f1eefd] hover:rounded-[6px]'>
            <span className='w-[8px] h-[8px] rounded-full bg-[#FFA500]'></span>
            <span className='font-medium ml-[14px]'>
                Website Redesign
            </span>
        </div>

        <div className='flex my-[9px] text-base justify-items-center h-[39px] px-[13px] py-[12px] text-[19px] items-center cursor-pointer  hover:text-black hover:bg-[#f1eefd] hover:rounded-[6px]'>
            <span className='w-[8px] h-[8px] rounded-full bg-[#E4CCFD]'></span>
            <span className='font-medium ml-[14px]'>
                Design System
            </span>
        </div>

        <div className='flex text-base justify-items-center h-[39px] px-[13px] py-[12px] text-[19px] items-center cursor-pointer  hover:text-black hover:bg-[#f1eefd] hover:rounded-[6px]'>
            <span className='w-[8px] h-[8px] rounded-full bg-[#76A5EA]'></span>
            <span className='font-medium ml-[14px]'>
                Wireframes
            </span>
        </div>
      </div>

      <div className='m-auto text-center w-[206px] h-[233px]'>
            <div className='w-[65px] flex justify-items-center align-items-center h-[65px] relative top- m-auto rounded-full bg-[#F5F5F5]'>
                <img className='m-auto w-[33px] h-[33px] z-10' src={Lamp} alt='lamp'></img>
            </div>
            <div className=' bg-[#F5F5F5] relative bottom-8 h-full font-normal rounded-xl '>
                <div className=' w-[101px] relative  top-10 h-[17px] py-2 text-[14px] m-auto font-normal text-black'>
                    Thoughts Time
                </div>
                <p className='m-auto w-[166px] relative py-6 top-10 h-[60px] text-[#787486] text-center text-xs  '>
                We don’t have any notice for you, till then you can share your thoughts with your peers.
                </p>
                <div className=' relative top-24 m-auto bg-white rounded-[4px] w-[166px] h-[40px]'>
                    <p className='text-[14px] text-black items-center'>
                        Write a message
                    </p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default MenuList
