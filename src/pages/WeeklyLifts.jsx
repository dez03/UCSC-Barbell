import React from "react";
import {
  FaDumbbell,
  FaRunning,
  FaCheckCircle,
  FaStopwatch,
  FaMapMarkerAlt,
  FaRulerCombined,
  FaWeightHanging,
  FaBullseye,
  FaBalanceScale,
  FaCubes,
} from "react-icons/fa";

const WeeklyLifts = () => {
  console.log("Google Maps API Key:", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-8 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-lg">
          Weekly Lifts
        </h1>
        <p className="text-xl mt-4 text-gray-300 max-w-4xl mx-auto">
          Join us every Saturday at 1 PM for our group lifting sessions at the
          UCSC Multipurpose Room! All skill levels are welcome.
        </p>
      </div>

      {/* Location Section */}
      <div className="text-center mb-12 bg-gray-800/80 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4">📍 Location</h2>
        <p className="text-lg text-gray-300">UCSC Multipurpose Room</p>
        <p className="text-gray-400">405 E Field Service Rd, Santa Cruz, CA 95064</p>
        <a href="mailto:ucscbarbell@gmail.com">
          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            Contact Us
          </button>
        </a>
      </div>

      {/* What to Expect Section */}
      <div className="mb-12 bg-gray-800/80 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">What to Expect</h2>
        <ul className="text-center space-y-4 text-lg text-gray-300">
          <li className="flex justify-center items-center space-x-4">
            <FaRunning className="text-yellow-500 text-2xl" />
            <span>Warm-up and mobility exercises</span>
          </li>
          <li className="flex justify-center items-center space-x-4">
            <FaDumbbell className="text-yellow-500 text-2xl" />
            <span>Main lifts (e.g., squats, bench, deadlifts)</span>
          </li>
          <li className="flex justify-center items-center space-x-4">
            <FaCheckCircle className="text-yellow-500 text-2xl" />
            <span>Accessory work to enhance strength and technique</span>
          </li>
          <li className="flex justify-center items-center space-x-4">
            <FaStopwatch className="text-yellow-500 text-2xl" />
            <span>Stretching and cooldown to wrap up the session</span>
          </li>
        </ul>
      </div>

      {/* Multipurpose Room Amenities */}
      <div className="mb-12 bg-gray-800/80 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Multipurpose Room Amenities</h2>
        <ul className="space-y-6 text-lg text-gray-300">
          <li className="flex justify-center items-center space-x-4">
            <FaRulerCombined className="text-yellow-500 text-2xl" />
            <span>1,920 Square Feet of Training Space</span>
          </li>
          <li className="flex justify-center items-center space-x-4">
            <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
            <span>Hardwood Floor and Mirrored Walls</span>
          </li>
          <li className="flex flex-col justify-center items-center space-x-4">
            <span className="font-bold ">Olympic Weightlifting Equipment:</span>
            <ul className="ml-8 mt-2 space-y-4 text-lg">
              <li className="flex items-center space-x-4">
                <FaBullseye className="text-yellow-500 text-2xl" />
                <span>12 Olympic Weightlifting Platforms</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaCubes className="text-yellow-500 text-2xl" />
                <span>12 Sets of 10lb-55lb Olympic Bumper Plates</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaBalanceScale className="text-yellow-500 text-2xl" />
                <span>7 Pairs of Removable Squat Stands</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaDumbbell className="text-yellow-500 text-2xl" />
                <span>5 Squat/Half Racks</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaDumbbell className="text-yellow-500 text-2xl" />
                <span>6 Multi-Adjustable Benches</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaWeightHanging className="text-yellow-500 text-2xl" />
                <span>28mm Olympic Training Bars</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaWeightHanging className="text-yellow-500 text-2xl" />
                <span>29mm Power Lifting Bars</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaDumbbell className="text-yellow-500 text-2xl" />
                <span>5-50lb Dumbbells</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaCubes className="text-yellow-500 text-2xl" />
                <span>3"-24" Stackable Plyo Boxes</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaCubes className="text-yellow-500 text-2xl" />
                <span>8lb, 10 lb, & 12lb Medicine Balls</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Community Section */}
      <div className="mb-12 bg-gray-800/80 rounded-lg shadow-lg p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-center">Why Join?</h2>
        <p className="text-lg text-gray-300 mt-4 text-center">
          The UCSC Barbell Club isn't just about lifting weights—it's about
          building a supportive community of strength enthusiasts. Whether you're new to lifting or a seasoned athlete, there's a place for you here.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="text-center bg-yellow-500/80 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-black">Ready to Lift?</h2>
        <p className="text-lg text-black mt-2">
          Mark your calendar and join us this Saturday at 1 PM in the UCSC Multipurpose Room!
        </p>
      </div>

    </div>
  );
};

export default WeeklyLifts;