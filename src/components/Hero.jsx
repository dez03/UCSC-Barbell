import React from "react";
import ManLifting from "../assets/ManLifting.png";
import Hex from "../assets/Hex.png";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <div className="bg-black w-full">
      {/* Desktop/Tablet Layout */}
      <div className="hidden md:block">
        <div className="container mx-auto relative h-[600px] overflow-hidden">
          {/* Left Side */}
          <div className="absolute left-0 top-0 w-1/2 h-full p-8">
            <h2 className="text-xl md:text-3xl text-white font-semibold leading-tight">
              STRENGTH IN COMMUNITY,
              <br />
              POWER IN PROGRESS
            </h2>
            <div className="relative h-[100%] pb-10">
              <img
                src={ManLifting}
                alt="Man Lifting Weights"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="absolute right-0 top-0 w-1/2 h-full p-8">
            {/* Hex background - only on large screens */}
            <img
              src={Hex}
              alt="Hex Pattern"
              className="hidden lg:block absolute right-0 bottom-0 h-3/4 w-auto"
            />

            {/* Content */}
            <div className="relative z-10">
              <h1 className="text-4xl lg:text-6xl text-white font-bold mb-16">
                JOIN UCSC BARBELL
              </h1>
              <div className="bg-white rounded-lg p-6 max-w-md">
                <Countdown />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex flex-col items-center px-4 py-8">
          <h1 className="text-3xl font-bold text-white mb-6">
            JOIN UCSC BARBELL
          </h1>

          <div className="relative w-full mb-6">
            <img
              src={ManLifting}
              alt="Man Lifting Weights"
              className="w-full object-cover"
            />
          </div>

          <h2 className="text-xl font-semibold text-white text-center mb-8">
            STRENGTH IN COMMUNITY,
            <br />
            POWER IN PROGRESS
          </h2>

          <div className="w-full max-w-sm">
            <div className="bg-white rounded-lg p-6">
              <Countdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
