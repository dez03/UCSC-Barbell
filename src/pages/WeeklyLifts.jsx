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
  FaCubes 
} from "react-icons/fa";

const WeeklyLifts = () => {
  console.log("Google Maps API Key:", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
 
  return (
    <div className="container mx-auto py-8 px-6">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center mb-6">
        Weekly Lifts
      </h1>
      <p className="text-lg text-center text-gray-700 mb-8">
        Join us every Saturday at 1 PM for our group lifting sessions at the UCSC Multipurpose Room! All skill levels are welcome.
      </p>

      {/* Location Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Location</h2>
        <p className="text-gray-700 mt-2">UCSC Multipurpose Room</p>
        <p className="text-gray-600">405 E Field Service Rd, Santa Cruz, CA 95064</p>
        <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg">
          Contact Us
        </button>
      </div>

      {/* What to Expect Section */}
      <div className="mb-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center">What to Expect</h2>
        <ul className="mt-4 text-gray-700">
          <li className="flex items-center space-x-2">
            <FaRunning className="text-yellow-500" />
            <span>Warm-up and mobility exercises</span>
          </li>
          <li className="flex items-center space-x-2 mt-2">
            <FaDumbbell className="text-yellow-500" />
            <span>Main lifts (e.g., squats, bench, deadlifts)</span>
          </li>
          <li className="flex items-center space-x-2 mt-2">
            <FaCheckCircle className="text-yellow-500" />
            <span>Accessory work to enhance strength and technique</span>
          </li>
          <li className="flex items-center space-x-2 mt-2">
            <FaStopwatch className="text-yellow-500" />
            <span>Stretching and cooldown to wrap up the session</span>
          </li>
        </ul>
      </div>

      {/* Multipurpose Room Amenities */}
      <div className="mb-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center">Multipurpose Room Amenities</h2>
        <ul className="mt-4 text-gray-700">
          <li className="flex items-center space-x-2">
            <FaRulerCombined className="text-yellow-500" />
            <span>1,920 Square Feet of Training Space</span>
          </li>
          <li className="flex items-center space-x-2 mt-2">
            <FaMapMarkerAlt className="text-yellow-500" />
            <span>Hardwood Floor and Mirrored Walls</span>
          </li>
          <li className="flex items-center space-x-2 mt-2">
            <span>
              <strong>Olympic Weightlifting Equipment:</strong>
              <ul className="list-inside pl-4 mt-1">
                <li className="flex items-center space-x-2">
                  <FaBullseye className="text-yellow-500" />
                  <span>12 Olympic Weightlifting Platforms</span>
                </li>
                <li className="flex items-center space-x-2 mt-2">
                  <FaCubes className="text-yellow-500" />
                  <span>12 Sets of 10lb-55lb Olympic Bumper Plates</span>
                </li>
                <li className="flex items-center space-x-2 mt-2">
                  <FaBalanceScale className="text-yellow-500" />
                  <span>7 Pairs of Removable Squat Stands</span>
                </li>
                <li className="flex items-center space-x-2 mt-2">
                  <FaDumbbell className="text-yellow-500" />
                  <span>5 Squat/Half Racks</span>
                </li>
                <li className="flex items-center space-x-2 mt-2">
                  <FaDumbbell className="text-yellow-500" />
                  <span>6 Multi-Adjustable Benches</span>
                </li>
                <li className="flex items-center space-x-2 mt-2">
                  <FaWeightHanging className="text-yellow-500" />
                  <span>28mm Olympic Training Bars</span>
                </li>
                <li className="flex items-center space-x-2 mt-2">
                  <FaWeightHanging className="text-yellow-500" />
                  <span>29mm Power Lifting Bars</span>
                </li>
                <li className="flex items-center space-x-2 mt-2">
                  <FaDumbbell className="text-yellow-500" />
                  <span>5-50lb Dumbbells</span>
                </li>
                <li className="flex items-center space-x-2 mt-2">
                  <FaCubes className="text-yellow-500" />
                  <span>3"-24" Stackable Plyo Boxes</span>
                </li>
                <li className="flex items-center space-x-2 mt-2">
                  <FaCubes className="text-yellow-500" />
                  <span>8lb, 10 lb, & 12lb Medicine Balls</span>
                </li>
              </ul>
            </span>
          </li>
        </ul>
      </div>

      {/* Community Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center">Why Join?</h2>
        <p className="text-gray-700 mt-4 text-center">
          The UCSC Barbell Club isn't just about lifting weights—it's about building a supportive community of strength enthusiasts. 
          Whether you're new to lifting or a seasoned athlete, there's a place for you here.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold">Ready to Lift?</h2>
        <p className="text-gray-700 mt-2">
          Mark your calendar and join us this Saturday at 1 PM in the UCSC Multipurpose Room!
        </p>
      </div>
    </div>
  );
};

export default WeeklyLifts;