import React from "react";

export const Navbar = () => {
  return (
    <div className="top-0">
      <div class="relative z-10">
        <div class="flex justify-between items-center p-4 top-0">
          <div class="flex space-x-16 border-black border-4 p-3">
            <div class="bruno-ace-regular text-lg text-white">Past Events</div>
            <div class="bruno-ace-regular text-lg text-white">Competitions</div>
          </div>
          <div class="flex-1"></div>
          <div class="flex space-x-16 border-black border-4 p-3">
            <div class="bruno-ace-regular text-lg text-white">Gallery</div>
            <div class="bruno-ace-regular text-lg text-white">Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
};
