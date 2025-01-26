// import React from "react";
// import { useSpring, animated } from "react-spring";
// import "../../index.css"
// // Importing event images
// import Hactivate from "../../EventImages/Hactivate2.jpeg";
// import Home from "../../EventImages/HomeAutomation.jpeg";
// import Line from "../../EventImages/LineFollower.jpeg";
// import OpenCV from "../../EventImages/OpenCV.jpeg";
// import BotWars from "../../EventImages/BotWars.webp";

// const trans = (x, y, s) =>
//   `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

// const calc = (x, y) => {
//   const BUFFER = 50;

//   const why = -(y - window.innerHeight / 2) / BUFFER;
//   const ex = (x - window.innerWidth / 2) / BUFFER;

//   console.log("why", why);
//   console.log("y", y);
//   return [-(y / 50), x / 50, 1.1];
// };

// export const Events = () => {
//   const [props, set] = useSpring(() => ({
//     xys: [0, 0, 1],
//     config: { mass: 5, tension: 350, friction: 40 },
//   }));
//   return (
//     <div className="flex flex-wrap justify-center gap-8 p-8 bg-[#1e262a]">
//       <div className="relative w-[300px] h-[350px] bg-gray-600 overflow-hidden group z-10 rounded-md">
//         <div className="absolute inset-0 bg-zinc-700 z-[-1]"></div>
//         <img
//           src={Hactivate}
//           alt="Hacktivate"
//           className="w-full h-full object-cover shadow-lg p-3"
//         />
//       </div>
//       <div className="relative w-[300px] h-[350px] bg-zinc-700 overflow-hidden group z-10 rounded-md">
//         <div className="absolute inset-0 bg-zinc-700 z-[-1]"></div>
//         <img
//           src={Home}
//           alt="Home Automation"
//           className="w-full h-full object-cover shadow-lg p-3"
//         />
//       </div>
//       <div className="relative w-[300px] h-[350px] bg-zinc-700 overflow-hidden group z-10 rounded-md">
//         <div className="absolute inset-0 bg-zinc-700 z-[-1]"></div>
//         <img
//           src={Line}
//           alt="Line Follower"
//           className="w-full h-full object-cover shadow-lg p-3"
//         />
//       </div>
//       <div className="relative w-[300px] h-[350px] bg-zinc-700 overflow-hidden group z-10 rounded-md">
//         <div className="absolute inset-0 bg-zinc-700 z-[-1]"></div>
//         <img
//           src={OpenCV}
//           alt="OpenCV"
//           className="w-full h-full object-cover shadow-lg p-3"
//         />
//       </div>
//       <div className="relative w-[300px] h-[350px] bg-black overflow-hidden group z-10 rounded-md">
//         <div
//           className="absolute inset-0 bg-zinc-700 z-[-1] rounded-md"
//           style={{
//             transform: "rotateY(0deg) rotateX(0deg)",
//             transformStyle: "preserve-3d",
//             transition: "transform .05s linear",
//           }}
//         ></div>
//         <div className=" w-full h-full p-3 overflow-hidden">
//           <img
//             src={BotWars}
//             alt="Bot Wars"
//             className="w-full h-full shadow-lg "
//           />
//         </div>
//       </div>
//       <div
//         className="relative w-[300px] h-[350px] bg-black overflow-hidden group z-10 rounded-md"
//         style={{
//           transition: "transform .05s linear", // Smooth transition
//         }}
//       >
//         {/* Background element */}
//         <div className="absolute inset-0 bg-zinc-700 z-[-1] rounded-md"></div>

//         {/* Content wrapper with image */}
//         <div className="w-full h-full p-3 overflow-hidden group-hover:transform group-hover:rotate-y-180 group-hover:rotate-x-15 group-hover:scale-105">
//           <img
//             src={BotWars}
//             alt="Bot Wars"
//             className="w-full h-full object-cover shadow-lg transition-transform duration-500"
//           />
//         </div>
//       </div>
//       <div className="App">
//         <h1>Hello CodeSandbox</h1>
//         <animated.div
//           class="card"
//           onMouseMove={(e) => {
//             const { clientX: x, clientY: y } = e;

//             return set({ xys: calc(x, y) });
//           }}
//           onMouseLeave={() => set({ xys: [0, 0, 1] })}
//           style={{ transform: props.xys.interpolate(trans) }}
//         />
//       </div>
//     </div>
//   );
// };

import React from "react";
import { useSpring, animated } from "react-spring";
import "./styles.css";

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const calc = (x, y) => {
  const BUFFER = 50;

  const why = -(y - window.innerHeight / 2) / BUFFER;
  const ex = (x - window.innerWidth / 2) / BUFFER;

  console.log("why", why);
  console.log("y", y);
  return [-(y / 50), x / 50, 1.1];
};

export function Events() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <animated.div
        class="card"
        onMouseMove={e => {
          const { clientX: x, clientY: y } = e;

          return set({ xys: calc(x, y) });
        }}
        // onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      />
    </div>
  );
}
