import React from 'react'

const OnProgressHead = ({cardsLength}) => {
  return (
    <div className='bg-[#F5F5F5] pt-6 px-[20px] rounded-t-[16px] mb-0'>
      <div className="flex  justify-between items-center ">
        <div className="w-full flex items-center gap-[8px]">
          <p className="w-[8px] h-[8px] rounded-full bg-[#FFA500]"></p>
          <span className="text-[16px] font-medium">On Progress</span>
          <p className="w-[20px] h-[20px] rounded-full text-center text-[12px] text-[#625F6D] bg-[#E0E0E0]">
            {cardsLength}
          </p>
        </div>
        
      </div>
      <p className="w-full h-[3px] mt-[10px] bg-[#FFA500]"></p>
    </div>
  )
}

export default OnProgressHead
