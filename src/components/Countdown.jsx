import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Countdown = () => {
  // State to hold the remaining time
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Function to calculate time left
    const calculateTimeLeft = () => {
      const targetDate = new Date("March 8, 2025 00:00:00").getTime();
      const currentDate = new Date().getTime();
      const difference = targetDate - currentDate;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Initial calculation
    calculateTimeLeft();

    // Update countdown every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black max-w-full overflow-hidden md:p-6 md:pb-8 mr-4 rounded-3xl text-center shadow-lg">
      <h3 className="text-xl font-heading font-bold mb-4 text-yellow-500">
        Register for our Power Lifting Competition
      </h3>
      <div className="flex justify-center space-x-4">
        <div className="text-center">
          <p className="text-2xl md:text-4xl font-bold text-white">{timeLeft.days}</p>
          <p className="text-sm text-gray-400">Days</p>
        </div>
        <div className="text-center">
          <p className="text-2xl md:text-4xl font-bold text-white">{timeLeft.hours}</p>
          <p className="text-sm text-gray-400">Hours</p>
        </div>
        <div className="text-center">
          <p className="text-2xl md:text-4xl font-bold text-white">{timeLeft.minutes}</p>
          <p className="text-sm text-gray-400">Minutes</p>
        </div>
        <div className="text-center">
          <p className="text-2xl md:text-4xl font-bold text-white">{timeLeft.seconds}</p>
          <p className="text-sm text-gray-400">Seconds</p>
        </div>
      </div>
      <Link to="/events">
        <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg shadow-md">
          Compete March 8th
        </button>
      </Link>
      <h1 className="pt-4 font-body text-gray-300">Enter for a chance to win $100!</h1>
    </div>
  );
};

export default Countdown;