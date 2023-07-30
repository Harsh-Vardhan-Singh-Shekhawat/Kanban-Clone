import React from 'react'

const DoneHead = ({cardsLength}) => {
  return (
    <div className='bg-[#F5F5F5] pt-6 px-[20px] rounded-t-[16px] mb-0 '>
      <div className="flex  justify-between items-center">
        <div className="w-full flex items-center gap-[8px]">
          <p className="w-[8px] h-[8px] rounded-full bg-[#76A5EA]"></p>
          <span className="text-[16px] font-medium">Completed</span>
          <p className="w-[20px] h-[20px] rounded-full text-center text-[12px] text-[#625F6D] bg-[#E0E0E0]">
            {cardsLength}
          </p>
        </div>
        
      </div>
      <p className="w-full h-[3px] mt-[10px] bg-[#8BC48A]"></p>
    </div>
  )
}

export default DoneHead
