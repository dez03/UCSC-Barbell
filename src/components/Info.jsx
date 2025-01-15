import React from "react";
import { FaUsers, FaChartLine, FaCalendarAlt } from "react-icons/fa";

const Info = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-16 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-yellow-500 tracking-wide drop-shadow-lg">
        Why Choose UCSC Barbell
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-12 md:space-y-0">
        {/* Community Section */}
        <div className="bg-gray-800/80 rounded-lg shadow-lg p-6 text-center max-w-md">
          <div className="flex flex-col items-center mb-6">
            <FaUsers className="text-yellow-500 text-6xl" /> {/* Icon for Community */}
          </div>
          <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
            Community
          </h3>
          <p className="text-gray-300">
            Train with a team. Our culture is more than just lifting weights;
            it's about supporting each other, pushing limits, and creating a
            home away from home. We offer a group atmosphere that motivates,
            supports, and celebrates success.
          </p>
        </div>

        {/* Programming Section */}
        <div className="bg-gray-800/80 rounded-lg shadow-lg p-6 text-center max-w-md">
          <div className="flex flex-col items-center mb-6">
            <FaChartLine className="text-yellow-500 text-6xl" /> {/* Icon for Programming */}
          </div>
          <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
            Programming
          </h3>
          <p className="text-gray-300">
            We provide training programs tailored for you. Volume, intensity,
            time, training days, and movement progression built around your
            wants, needs, and goals as an athlete. Competitive and
            non-competitive programs with an opportunity to compete at any age
            and any level.
          </p>
        </div>

        {/* Events Section */}
        <div className="bg-gray-800/80 rounded-lg shadow-lg p-6 text-center max-w-md">
          <div className="flex flex-col items-center mb-6">
            <FaCalendarAlt className="text-yellow-500 text-6xl" /> {/* Icon for Events */}
          </div>
          <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
            Events
          </h3>
          <p className="text-gray-300">
            We host fun events year-round. Outside of our weekly team lifts, we
            host powerlifting events for prizes, educational workshops to refine
            technique, friendly competitions to celebrate personal progress, and
            social gatherings to build a stronger community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;