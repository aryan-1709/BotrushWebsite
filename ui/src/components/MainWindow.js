import React from "react";
import { Navbar } from "./Navbar";
import Particle from "./Particle";
import BreakoutGame from "./BreakOutGame";

import background from "../BackgroundImages/—Pngtree—futuristic ai concept with a_6937771.jpg";
import character from "../BackgroundImages/WhatsApp Image 2025-01-25 at 12.32.28 AM.png";

export const MainWindow = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center">
      <img
        className="absolute h-full w-full blur-md z-0"
        src={background}
        alt="background"
      />
      <div className="absolute top-0 left-0 w-full z-20 ">
        <Navbar />
      </div>
      <div className="flex items-center justify-between top-28 pt-28">
        <div className="z-20">
          <img
            src={character}
            alt="Character"
            className="w-[600px] h-[600px] "
          />
          {/* <Particle className=""/>s */}
        </div>
        <div className="z-20 m-10">
          <BreakoutGame />
        </div>
      </div>
      {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
    </div>
  );
};
