import React from "react";
import SearchBar from "./SearchBar";
import Calendar from "../assets/calendar-2.png";
import Notification from "../assets/notification.png";
import Message from "../assets/message-question.png";
import ProfileImg from "../assets/Profilegirl.png";
import ProfileIcon from "../assets/arrow-down.png";
import scrollSidebar from '../assets/Group 639.png'

const Header = ({isOpen, setIsOpen}) => {

  const toggleFunction = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex md:flex-row flex-col-reverse md:h-[88px] w-full md:px-10 border-b-[1px] md:justify-between  items-center">
      <div style={{ display : isOpen ? "none" : ""}} onClick={toggleFunction} className='relative md:top-2 md:left-0 bottom-20 right-36 md:ml-10 z-10 cursor-pointer'>
         <img  className="rotate-180 delay-100" src={scrollSidebar} alt='scrollSidebar' />
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="flex mt-2">
        <div className="flex md:w-[120px] relative items-center md:right-[70px]">
          <img
            className="md:w-[24px] md:h-[24px] md:mx-[12px] mx-[6px] cursor-pointer"
            src={Calendar}
            alt="calen"
          ></img>
          <img
            className="md:w-[24px] md:h-[24px] md:mx-[12px] mx-[6px] cursor-pointer"
            src={Message}
            alt="message"
          ></img>
          <img
            className="md:w-[24px] md:h-[24px] md:mx-[12px] mx-[6px] cursor-pointer"
            src={Notification}
            alt="notification"
          ></img>
        </div>
        <div className="md:w-[201px] w-[130px] md:h-[39px] flex space-evenly cursor-pointer items-center">
          <div className="text-right md:mr-3 mr-2 my-2 md:my-0">
            <p className="text-[#0D062D] md:h-[19px] md:text-base text-sm font-thin leading-3">Anima Agarwal</p>
            <p className="text-[#787486] md:h-[17px] md:text-sm text-xs font-thin ">U.P, India</p>
          </div>
          <div>
            <img src={ProfileImg} alt="profile-mg "></img>
          </div>
          <img src={ProfileIcon} alt="profile-icon" className="md:w-[18px] md:h-[18px] ml-3"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
