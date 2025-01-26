import ParticlesBg from "particles-bg";
import React from "react";
import { Navbar } from "./Navbar";
import BreakoutGame from "./BreakOutGame";
import MatrixFalling from "./MatrixFalling";
import character from "../BackgroundImages/WhatsApp Image 2025-01-25 at 12.32.28 AM.png";

export const MainWindow = () => {
  return (
    <div className="relative h-full w-full ">
      <div
        className="absolute h-full w-full z-0"
        style={{ backgroundColor: "#1e262a" }}
      ></div>
      <div className="sticky top-0 left-0 w-full z-20">
        <Navbar />
      </div>
      <div className="flex flex-wrap items-center justify-around pt-10 z-20 h-full">
        <div className="relative w-[400px] h-[500px] z-20 flex-shrink-0">
          <ParticlesBg
            type="cobweb"
            color="#39fa43"
            num={50}
            bg={{
              zIndex: -1,
              width: 400,
              height: 500,
            }}
          />
        </div>
        <img
          src={character}
          alt="Character"
          className="max-w-[400px] max-h-[400px] w-auto h-auto z-20 flex-shrink-0"
        />
        <div className="w-[400px] h-[500px] z-20 flex-shrink-1 overflow-hidden relative">
          {/* Add a fade effect around the div using a gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e262a] via-transparent to-[#1e262a]  opacity-50"></div>

          {/* MatrixFalling content */}
          <MatrixFalling width={500} height={500} />
        </div>
      </div>
    </div>
  );
};
