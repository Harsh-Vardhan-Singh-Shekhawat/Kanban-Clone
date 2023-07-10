import React from 'react'
import filterIcon from '../assets/filter.png'
import ArrowIcon from '../assets/arrow-down.png'
import CalendarIcon from '../assets/calendar.svg'
import ShareIcon from '../assets/profile-2user.png'
import PauseIcon from '../assets/pause.png'
import menuIcon from '../assets/menu.svg'
const Filter = () => {
  return (
    <div className='flex justify-between '>
      <div className='w-[256px] h-[40px] flex justify-between'>
        <div className='w-[122px] border-[1px] h-[40px] border-[#787486] rounded-[6px] flex justify-evenly items-center'>
            <img className='w-[16px] h-[16px]' src={filterIcon} alt='filter-img'></img>
            <span className='text-[#787486] text-[16px] font-medium'>Filter</span>
            <img className='w-[16px] h-[16px]' src={ArrowIcon} alt='arrow-img'></img>
        </div>
        <div className='w-[122px] border-[1px] h-[40px] border-[#787486] rounded-[6px] flex justify-evenly items-center'>
            <img className='w-[16px] h-[16px]' src={CalendarIcon} alt='filter-img'></img>
            <span className='text-[#787486] text-[16px] font-medium'>Today</span>
            <img className='w-[16px] h-[16px]' src={ArrowIcon} alt='arrow-img'></img>
        </div>
      </div>
      <div className='w-[220px] h-[40px] flex justify-between items-center mr-'>
        <div className='w-[97px] h-[40px] border-[1px] flex justify-evenly items-center rounded-[6px] border-[#787486]'>
            <img src={ShareIcon} alt='share-img'></img>
            <span className='text-[#787486] text-[16px] font-medium'>Share</span>
        </div>
        <p className='h-[28px] w-0 border-[1px] border-[#787486]'></p>
        <div className='w-[40px] h-[40px] rounded-[6px] bg-[#5030E5]'>
            <img className='m-auto mt-[10px]' src={PauseIcon} alt=''></img>
        </div>
        <img className='w-[21px] h-[21px]' src={menuIcon} alt='' />
      </div>
    </div>
  )
}

export default Filter
