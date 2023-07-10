import React from "react";
import SearchBar from "./SearchBar";
import Calendar from "../assets/calendar-2.png";
import Notification from "../assets/notification.png";
import Message from "../assets/message-question.png";
import ProfileImg from "../assets/Mask Group.png";
import ProfileIcon from "../assets/arrow-down.png";

const Profile = () => {
  return (
    <div className="flex h-full justify-between items-center">
      <div className="">
        <SearchBar />
      </div>
      <div className="flex  ">
        <div className="flex w-[120px] relative items-center right-[70px]">
          <img
            className="w-[24px] h-[24px] mx-[12px] cursor-pointer"
            src={Calendar}
            alt="calen"
          ></img>
          <img
            className="w-[24px] h-[24px] mx-[12px] cursor-pointer"
            src={Message}
            alt="message"
          ></img>
          <img
            className="w-[24px] h-[24px] mx-[12px] cursor-pointer"
            src={Notification}
            alt="noti"
          ></img>
        </div>
        <div className="w-[201px] h-[39px] relative right-4 flex space-evenly cursor-pointer items-center">
          <div className="text-right mr-3">
            <p className="text-[#0D062D] h-[19px] text-base font-thin leading-3">Anima Agarwal</p>
            <p className="text-[#787486] h-[17px] text-sm font-thin">U.P, India</p>
          </div>
          <div>
            <img src={ProfileImg} alt="profile-mg "></img>
          </div>
          <img src={ProfileIcon} alt="profile-icon" className="w-[18px] h-[18px] ml-3"></img>
        </div>
      </div>
    </div>
  );
};

export default Profile;
