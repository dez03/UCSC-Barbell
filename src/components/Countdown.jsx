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
    <div className="bg-white p-6 pb-8 rounded-3xl text-center">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Register for our Power Lifting Competition</h3>
      <div className="flex justify-center space-x-4">
        <div className="text-center">
          <p className="text-4xl font-bold text-gray-800">{timeLeft.days}</p>
          <p className="text-sm text-gray-600">Days</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-gray-800">{timeLeft.hours}</p>
          <p className="text-sm text-gray-600">Hours</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-gray-800">{timeLeft.minutes}</p>
          <p className="text-sm text-gray-600">Minutes</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-gray-800">{timeLeft.seconds}</p>
          <p className="text-sm text-gray-600">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;