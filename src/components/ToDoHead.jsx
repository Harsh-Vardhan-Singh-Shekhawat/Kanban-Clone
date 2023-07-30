import React from 'react'
import AddIcon from "../assets/add-square-8a945af5.svg";

const ToDoHead = ({cardsLength}) => {
  return (
    <div className='bg-[#F5F5F5] pt-6 px-[20px] rounded-t-[16px]'>
      <div className="flex  justify-between items-center">
        <div className=" flex justify-between gap-[8px] items-center">
          <p className="w-[8px] h-[8px] rounded-full bg-[#5030E5]"></p>
          <span className="text-[16px] font-medium">To Do</span>
          <p className="w-[20px] h-[20px] rounded-full text-center text-[12px] text-[#625F6D] bg-[#E0E0E0]">
            {cardsLength}
          </p>
        </div>
        <div>
          <img src={AddIcon} alt="add-icon" />
        </div>
      </div>
      <p className="w-full h-[3px] mt-[10px] bg-[#5030E5]"></p>
    </div>
  )
}

export default ToDoHead
