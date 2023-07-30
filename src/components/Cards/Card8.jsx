import React from 'react'

import img1 from "../../assets/Untidfggtled.jpg";
import img2 from "../../assets/Untitle1d.jpg";
import img3 from "../../assets/Untitled.jpg";
import img4 from "../../assets/av2-9574ed26.jpg";
import commentIcon from "../../assets/Group 627.png";
import filesIcon from "../../assets/Group 628.png";
import uiImg from '../../assets/Mask Group.png'

const Card8 = () => {
  return (
    <div className="w-full p-[10px] rounded-[16px] bg-white">
        <div className="flex justify-between">
        <p className=" h-[23px] p-1 rounded-[4px] text-xs flex items-center justify-center bg-[#e6f3eb] font-medium text-[#8BC48A]">
            Completed
          </p>
          <span className="font-extrabold text-[16px]">...</span>
        </div>
        <h1 className="font-semibold text-[18px] leading-[21px]">
          Design System
        </h1>
        <div className='flex justify-between my-2'>
        <p className="text-[12px] font-medium py-[8px] leading-[15px] text-[#787486]">
        It just needs to adapt the UI from what you did before
        </p>
        </div>
        <div className="h-[24px] mt-5 flex justify-between items-center relative bottom-0">
          
            <img
              className=" mr-[-4px] w-[24px] h-[24px] rounded-full border-white border-[1px]"
              src={img2}
              alt="p-img"
            />

          <div className="flex justify-end w-[168px] h-[16px] ">
            <img src={commentIcon} alt="" />{" "}
            <span className="text-[#787486] text-[12px] font-normal mx-[6px]">
              12 Comments
            </span>
            <img src={filesIcon} alt="" />{" "}
            <span className="text-[#787486] text-[12px] font-normal ml-[3px]">
              15 files
            </span>
          </div>
        </div>
      </div>
  )
}

export default Card8
