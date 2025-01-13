import React from "react";

const Info = () => {
  return (
    <div className="bg-white py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-8">
        Why Choose UCSC Barbell
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-8 md:space-y-0">
        {/* Community Section */}
        <div className="text-center">
          <div className="text-red-500 text-5xl mb-4">
            <i className="fas fa-dumbbell"></i>{" "}
            {/* Replace with actual image/icon */}
          </div>
          <h3 className="text-xl font-semibold text-red-500 mb-2">Community</h3>
          <p className="text-gray-700">
            Train with a team. Our culture is more than just lifting weights;
            it's about supporting each other, pushing limits, and creating a
            home away from home. We offer a group atmosphere that motivates,
            supports, and celebrates success.
          </p>
        </div>

        {/* Programming Section */}
        <div className="text-center">
          <div className="text-red-500 text-5xl mb-4">
            <i className="fas fa-chart-line"></i>{" "}
            {/* Replace with actual image/icon */}
          </div>
          <h3 className="text-xl font-semibold text-red-500 mb-2">
            Programming
          </h3>
          <p className="text-gray-700">
            We provide training programs tailored for you. Volume, intensity,
            time, training days, and movement progression built around your
            wants, needs, and goals as an athlete. Competitive and
            non-competitive programs with an opportunity to compete at any age
            and any level.
          </p>
        </div>

        {/* Events Section */}
        <div className="text-center">
          <div className="text-red-500 text-5xl mb-4">
            <i className="fas fa-calendar-alt"></i>{" "}
            {/* Replace with actual image/icon */}
          </div>
          <h3 className="text-xl font-semibold text-red-500 mb-2">Events</h3>
          <p className="text-gray-700">
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
