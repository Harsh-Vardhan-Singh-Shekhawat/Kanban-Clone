import React from 'react'
import Search from '../assets/search-normal.png'
const SearchBar = () => {
  return (
    <div className='md:w-[417px] w-[300px] flex justify-items-center items-center rounded-[6px] h-[44px] bg-[#F5F5F5]'>
      <img src={Search} className='w-[22px] h-[22px] ml-4' alt='search-icon'></img>
      <input placeholder='Search for anything...' className='w-full h-[17px] ml-2 font-normal text-[14px] focus:outline-none bg-[#F5F5F5] placeholder:text-[#787486] placeholder:bg-[#F5F5F5]'></input>
    </div>
  )
}

export default SearchBar
