import React from "react";
import AddIcon from "../assets/add-square-8a945af5.svg";
import img1 from "../assets/Untidfggtled.jpg";
import img2 from "../assets/Untitle1d.jpg";
import img3 from "../assets/Untitled.jpg";
import img4 from "../assets/av2-9574ed26.jpg";
import commentIcon from "../assets/Group 627.png";
import filesIcon from "../assets/Group 628.png";

const ToDo = () => {
  return (
    <div className="w-[354px] my-[40px] bg-[#F5F5F5] p-[20px]">
      <div className="flex  justify-between items-center">
        <div className="w-full flex items-center">
          <p className="w-[8px] h-[8px] rounded-full bg-[#5030E5]"></p>
          <span className="text-[16px] font-medium">To Do</span>
          <p className="w-[20px] h-[20px] rounded-full text-center text-[12px] text-[#625F6D] bg-[#E0E0E0]">
            4
          </p>
        </div>
        <div>
          <img src={AddIcon} alt="add-icon" />
        </div>
      </div>
      <p className="w-full h-[3px] my-[10px] bg-[#5030E5]"></p>

      {/* Card 1 */}

      <div className="w-full h-[177px] mt-[20px] mb-[10px] p-[20px] rounded-[16px] bg-white">
        <div className="flex justify-between">
          <p className="w-[36px] h-[23px] rounded-[4px] text-xs flex items-center justify-center bg-[#f7ece2] font-medium text-[#D58D49]">
            Low
          </p>
          <span className="font-extrabold text-[16px]">...</span>
        </div>
        <h1 className="font-semibold text-[18px] leading-[21px]">
          Brainstorming
        </h1>
        <p className="text-[12px] font-medium py-[8px] leading-[15px] text-[#787486]">
          Brainstorming brings team members' diverse experience into play.
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
              src={img1}
              alt="p-img"
            />
            <img
              className="z-10 mr-[-4px] w-[24px] h-[24px] rounded-full border-white border-[1px]"
              src={img2}
              alt="p-img"
            />
          </div>

          <div className="flex justify-end w-[168px] h-[16px] ">
            <img src={commentIcon} alt="" />{" "}
            <span className="text-[#787486] text-[12px] font-normal mx-[8px]">
              12 Comments
            </span>
            <img src={filesIcon} alt="" />{" "}
            <span className="text-[#787486] text-[12px] font-normal ml-[6px]">
              0 files
            </span>
          </div>
        </div>
      </div>
      {/* Card 2 */}

      <div className="w-full h-[177px] mt-[20px] mb-[10px] p-[20px] rounded-[16px] bg-white">
        <div className="flex justify-between">
          <p className="w-[36px] h-[23px] rounded-[4px] text-xs flex items-center justify-center bg-[#f7ece2] font-medium text-[#D58D49]">
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

      {/* Card 3 */}

      <div className="w-full h-[177px] mt-[20px] mb-[10px] p-[20px] rounded-[16px] bg-white">
        <div className="flex justify-between">
          <p className="w-[36px] h-[23px] rounded-[4px] text-xs flex items-center justify-center bg-[#f7ece2] font-medium text-[#D58D49]">
            High
          </p>
          <span className="font-extrabold text-[16px]">...</span>
        </div>
        <h1 className="font-semibold text-[18px] leading-[21px]">
          Wireframes
        </h1>
        <p className="text-[12px] font-medium py-[8px] leading-[15px] text-[#787486]">
        Low fidelity wireframes include the most basic content and visuals.
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
            <img
              className="z-10 mr-[-4px] w-[24px] h-[24px] rounded-full border-white border-[1px]"
              src={img1}
              alt="p-img"
            />
          </div>

          <div className="flex justify-end w-[168px] h-[16px] ">
            <img src={commentIcon} alt="" />{" "}
            <span className="text-[#787486] text-[12px] font-normal mx-[8px]">
              7 Comments
            </span>
            <img src={filesIcon} alt="" />{" "}
            <span className="text-[#787486] text-[12px] font-normal ml-[6px]">
              1 files
            </span>
          </div>
        </div>
      </div>

      {/* Card 4 */}

      <div className="w-full h-[177px] mt-[20px] mb-[10px] p-[20px] rounded-[16px] bg-white">
        <div className="flex justify-between">
          <p className="w-[36px] h-[23px] rounded-[4px] text-xs flex items-center justify-center bg-[#f7ece2] font-medium text-[#D58D49]">
            Low
          </p>
          <span className="font-extrabold text-[16px]">...</span>
        </div>
        <h1 className="font-semibold text-[18px] leading-[21px]">
          Development
        </h1>
        <p className="text-[12px] font-medium py-[8px] leading-[15px] text-[#787486]">
        Development team manages time properly meet deadlines and increase efficiency.
        </p>
        <div className="h-[24px] mt-3 flex justify-between items-center relative bottom-0">
          <div className="flex ">
            <img
              className="z-30 mr-[-4px] w-[24px] h-[24px] rounded-full border-white border-[1px]"
              src={img2}
              alt="p-img"
            />
            <img
              className="z-20 mr-[-4px] w-[24px] h-[24px] rounded-full border-white border-[1px]"
              src={img3}
              alt="p-img"
            />
            <img
              className="z-10 mr-[-4px] w-[24px] h-[24px] rounded-full border-white border-[1px]"
              src={img1}
              alt="p-img"
            />
          </div>

          <div className="flex justify-end w-[168px] h-[16px] ">
            <img src={commentIcon} alt="" />{" "}
            <span className="text-[#787486] text-[12px] font-normal mx-[8px]">
              3 Comments
            </span>
            <img src={filesIcon} alt="" />{" "}
            <span className="text-[#787486] text-[12px] font-normal ml-[6px]">
              0 files
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
