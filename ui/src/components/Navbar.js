import React from "react";
import frame from "../BackgroundImages/frame.png";
import frame2 from "../BackgroundImages/frame2.png";

export const Navbar = () => {
  return (
    <div className="top-0">
      <div className="relative z-10">
        <div className="flex justify-between items-center p-4 top-0">
          <div className="relative flex space-x-16 p-3">
            <img className="absolute inset-0 w-full h-full" src={frame} alt="frame" />
            <div className="bruno-ace-regular text-lg text-white z-20">Past Events</div>
            <div className="bruno-ace-regular text-lg text-white z-20">Competitions</div>
          </div>
          <div className="flex-1"></div>
          <div className="relative flex space-x-reverse space-x-16 p-3">
            <img className="absolute inset-0 w-full h-full" src={frame2} alt="frame" />
            <div className="bruno-ace-regular text-lg text-white z-20">Gallery</div>
            <div className="bruno-ace-regular text-lg text-white z-20">Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
};
