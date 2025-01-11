import ManLifting from "../assets/ManLifting.png";
import Hex from "../assets/Hex.png";
import Countdown  from "./Countdown";

export default function Hero() {
  return (
    <div className="flex flex-column relative h-1/2 bg-black">
      {/* Main Image */}
      <img
        src={ManLifting}
        alt="Man Lifting Weights"
        className=" left-0 top-0 h-full object-cover"
        style={{ width: "auto" }}
      />

      {/* Hex Image */}
      <img
        src={Hex}
        alt="Hex Pattern"
        className="absolute bottom-0 right-0 h-3/4 w-auto"
      />
      
      {/* Hero Content */}

      
      <div className="absolute top-12 left-8 text-white">
        <h2 className="text-xl md:text-3xl font-semibold leading-tight">
          STRENGTH IN COMMUNITY,<br />
          POWER IN PROGRESS
        </h2>
      </div>

      {/* Join UCSC Barbell */}
      <div
        className="absolute top-12 text-white text-left"
        style={{
          left: "50%", // Start the element at the midpoint of the hero section
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          JOIN UCSC BARBELL
        </h1>
        <div className="mt-16">
          <Countdown />
        </div>
      </div>
    </div>
  );
}


// // import React from "react";
// // import ManLifting from "../assets/ManLifting.png";
// // import Hex from "../assets/Hex.png";
// // import Countdown from "./Countdown";

// // export default function Hero() {
// //   return (
// //     <div className="relative bg-black flex max-w-screen md:flex-column  md:h-1/2 ">
// //       {/* Desktop and Tablet View */}
// //       <div className="hidden md:block h-1/2">
// //         {/* Main Image */}
// //         <img
// //           src={ManLifting}
// //           alt="Man Lifting Weights"
// //           className="absolute md:left-0 md:top-0 h-full md:object-cover"
// //           style={{ width: "auto" }}
// //         />

// //         {/* Hex Image */}
// //         <img
// //           src={Hex}
// //           alt="Hex Pattern"
// //           className="absolute bottom-0 right-0 h-3/4 w-auto"
// //         />

// //         {/* Strength in Community, Power in Progress */}
// //         <div className="absolute top-12 left-8 text-white">
// //           <h2 className="text-xl md:text-3xl font-semibold leading-tight">
// //             STRENGTH IN COMMUNITY,<br />
// //             POWER IN PROGRESS
// //           </h2>
// //         </div>

// //         {/* Join UCSC Barbell */}
// //         <div
// //           className="absolute md:top-1/4 text-white text-left"
// //           style={{
// //             left: "50%",
// //           }}
// //         >
// //           <h1 className="text-4xl md:text-6xl font-bold">
// //             JOIN UCSC BARBELL
// //           </h1>
// //         </div>

// //         {/* Countdown Component */}
// //         <div
// //           className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white p-6 rounded-md shadow-lg"
// //           style={{
// //             width: "300px",
// //           }}
// //         >
// //           <Countdown />
// //         </div>
// //       </div>

// //       {/* Mobile View */}
// //       <div className="block md:hidden md:flex flex-col items-center text-white text-center py-8 px-4">
// //         {/* Main Image */}
// //         <img
// //           src={ManLifting}
// //           alt="Man Lifting Weights"
// //           className="w-full max-w-xs object-cover mb-4"
// //         />

// //         {/* Join UCSC Barbell */}
// //         <h1 className="text-3xl font-bold mb-4">JOIN UCSC BARBELL</h1>

// //         {/* Strength in Community, Power in Progress */}
// //         <h2 className="text-lg font-semibold mb-4">
// //           STRENGTH IN COMMUNITY,<br />
// //           POWER IN PROGRESS
// //         </h2>

// //         {/* Countdown Component */}
// //         <div className="bg-white p-6 rounded-md shadow-lg">
// //           <Countdown />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// import ManLifting from "../assets/ManLifting.png";
// import Hex from "../assets/Hex.png";
// import Countdown from "./Countdown";

// export default function Hero() {
//   return (
//     <div className="relative bg-black h-screen flex flex-col items-center justify-start text-center text-white px-4">
//       {/* Join UCSC Barbell */}
//       <h1 className="text-3xl font-bold mt-4">JOIN UCSC BARBELL</h1>

//       {/* Main Image */}
//       <img
//         src={ManLifting}
//         alt="Man Lifting Weights"
//         className="w-full object-cover my-4"
//       />

//       {/* Hex Image (Behind Countdown) */}
//       <div className="relative w-full">
//         <div className="absolute inset-0 flex items-center justify-center -z-10">
//           <img
//             src={Hex}
//             alt="Hex Pattern"
//             className="w-2/3 opacity-20"
//           />
//         </div>

//         {/* Countdown Component */}
//         <div className="bg-white p-4 rounded-md shadow-lg relative z-10">
//           <Countdown />
//         </div>
//       </div>

//       {/* Strength in Community, Power in Progress */}
//       <h2 className="text-lg font-semibold mt-4">
//         STRENGTH IN COMMUNITY,<br />
//         POWER IN PROGRESS
//       </h2>
//     </div>
//   );
// }