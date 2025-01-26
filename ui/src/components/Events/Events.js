import React from "react";
import Hactivate from "../../EventImages/Hactivate2.jpeg";
import Home from "../../EventImages/HomeAutomation.jpeg";
import Line from "../../EventImages/LineFollower.jpeg";
import OpenCV from "../../EventImages/OpenCV.jpeg";
import BotWars from "../../EventImages/BotWars.webp";
import { CardContainer, CardItem } from "../ui/3D-Card";

export const Events = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8 bg-[#1e262a]">
      <CardContainer className="relative w-[300px] h-[350px] bg-gray-600 overflow-hidden group z-10 rounded-md hover:cursor-pointer">
        <div className="relative w-full h-full">
          <img
            src={Hactivate}
            alt="Hacktivate"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out flex items-center justify-start px-4" />

          <div className="absolute inset-0 flex items-end justify-center bottom-2 text-white text-2xl font-bold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
            <span>Hacktivate</span>
          </div>
        </div>
      </CardContainer>

      <CardContainer className="relative w-[300px] h-[350px] bg-zinc-700 overflow-hidden group z-10 rounded-md hover:cursor-pointer">
        <div className="relative w-full h-full">
          <img
            src={Home}
            alt="Home Automation"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out flex items-center justify-start px-4" />
          <div className="absolute inset-0 flex items-end justify-center bottom-2 text-white text-2xl font-bold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
            <span>Heist-O-Matic</span>
          </div>
        </div>
      </CardContainer>
      <CardContainer className="relative w-[300px] h-[350px] bg-zinc-700 overflow-hidden group z-10 rounded-md hover:cursor-pointer">
        <div className="relative w-full h-full">
          <img
            src={Line}
            alt="Line Follower"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out flex items-center justify-start px-4" />
          <div className="absolute inset-0 flex items-end justify-center bottom-2 text-white text-2xl font-bold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
            <span>Heist Track</span>
          </div>
        </div>
      </CardContainer>
      <CardContainer className="relative w-[300px] h-[350px] bg-zinc-700 overflow-hidden group z-10 rounded-md hover:cursor-pointer">
        <div className="relative w-full h-full">
          <img
            src={OpenCV}
            alt="OpenCV"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out flex items-center justify-start px-4" />
          <div className="absolute inset-0 flex items-end justify-center bottom-2 text-white text-2xl font-bold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
            <span>Infiltrator</span>
          </div>
        </div>
      </CardContainer>

      <CardContainer className="relative w-[300px] h-[350px] bg-zinc-700 overflow-hidden group z-10 rounded-md hover:cursor-pointer">
        <div className="relative w-full h-full">
          <img
            src={BotWars}
            alt="Bot Wars"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out flex items-center justify-start px-4"></div>
          <div className="absolute inset-0 flex items-end justify-center bottom-2 text-white text-2xl font-bold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
            <span>Bot Wars</span>
          </div>
        </div>
      </CardContainer>
      <CardContainer className="relative w-[300px] h-[350px] bg-zinc-700 overflow-hidden group z-10 rounded-md hover:cursor-pointer">
        <div className="relative w-full h-full">
          <img
            src={BotWars}
            alt="Bot Wars"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out flex items-center justify-start px-4" />
          <div className="absolute inset-0 flex items-end justify-center bottom-2 text-white text-2xl font-bold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
            <span>Bot Wars</span>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};
