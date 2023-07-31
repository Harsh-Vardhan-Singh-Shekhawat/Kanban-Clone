import React from 'react'
import EditIcon from '../assets/edit-5b7ca014.svg'
import LinkIcon from '../assets/link-e1a611f4.svg'
import AddIcon from '../assets/add-square-8a945af5.svg'
import img1 from '../assets/Untidfggtled.jpg'
import img2 from '../assets/Untitle1d.jpg'
import img3 from '../assets/Untitled.jpg'
import img4 from '../assets/av2-9574ed26.jpg'
const MobileApp = () => {
  return (
    <div className='md:my-10 my-4'>
      <div className='w-full flex md:flex-row flex-col items-center md:justify-between justify-end'>
        <div className='flex justify-center md:w-[344px] md:h-[56px] overflow-hidden md:space-evenly space-between md:items-center'>
            <h1 className='font-[#0D062D] md:text-[46px] text-4xl md:leading-none md:font-semibold font-medium leading-relaxed capitalize'>Mobile App</h1>
            <img className='md:ml-[15px]' src={EditIcon} alt='edit icon'></img>
            <img className='md:ml-[10px]' src={LinkIcon} alt='link-icon'></img>

        </div>
        <div className='md:w-[250px] flex  items-center gap-[8px]'>
            <img className='md:w-[30px] ' src={AddIcon} alt='add-icon' />
            <span className='font-light text-[#5030e5]'>Invite</span>
            <div className='flex md:w-[238px] md:h-[38px]'>
                <img className='z-10 mr-[-10px] md:w-[38px] md:h-[38px] rounded-full border-white border-[1px]' src={img4} alt='p-img' />
                <img className='z-20 mr-[-10px] md:w-[38px] md:h-[38px] rounded-full border-white border-[1px]' src={img3} alt='p-img' />
                <img className='z-30 mr-[-10px] md:w-[38px] md:h-[38px] rounded-full border-white border-[1px]' src={img2} alt='p-img' />
                <img className='z-40 mr-[-10px] md:w-[38px] md:h-[38px] rounded-full border-white border-[1px]' src={img1} alt='p-img' />
                <span className='z-50 text-[#d25b68] md:w-[38px] flex border-white border-[1px] justify-center items-center text-[15px] font-normal leading-[10px] rounded-full bg-[#F4D7DA;]'>+2</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MobileApp
