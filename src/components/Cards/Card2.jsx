import React from 'react'
import img1 from "../../assets/Untidfggtled.jpg";
import img2 from "../../assets/Untitle1d.jpg";
import img3 from "../../assets/Untitled.jpg";
import img4 from "../../assets/av2-9574ed26.jpg";
import commentIcon from "../../assets/Group 627.png";
import filesIcon from "../../assets/Group 628.png";

const Card2 = () => {
  return (
    
      <div className="w-full rounded-[16px] bg-white">
        <div className="flex justify-between">
          <p className="w-[36px] h-[23px] rounded-[4px] text-xs flex items-center justify-center bg-[#f7ece2] font-medium text-[#d8727d]">
            High
          </p>
          <span className="font-extrabold text-[16px]">...</span>
        </div>
        <h1 className="font-semibold text-[18px] leading-[21px]">Research</h1>
        <p className="text-[12px] font-medium py-[8px] leading-[15px] text-[#787486]">
          User research helps you to create an optimal product for users.
        </p>
        <div className="h-[24px] mt-3 flex justify-between items-center relative bottom-0">
          <div className="flex ">
            <img
              className="z-30 mr-[-4px] w-[24px] h-[24px] rounded-full border-white border-[1px]"
              src={img4}
              alt="p-img"
            />
            <img
              className="z-20 mr-[-4px] w-[24px] h-[24px] rounded-full border-white border-[1px]"
              src={img3}
              alt="p-img"
            />
          </div>

          <div className="flex justify-end w-[168px] h-[16px] ">
            <img src={commentIcon} alt="" />{" "}
            <span className="text-[#787486] text-[12px] font-normal mx-[8px]">
              10 Comments
            </span>
            <img src={filesIcon} alt="" />{" "}
            <span className="text-[#787486] text-[12px] font-normal ml-[6px]">
              3 files
            </span>
          </div>
        </div>
      </div>
    
  )
}

export default Card2
