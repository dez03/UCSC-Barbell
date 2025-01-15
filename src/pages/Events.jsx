import { useEffect, useState } from "react";

const Events = () => {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const targetDate = new Date("March 8, 2025 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeRemaining("The event has started!");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-8 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-lg text-yellow-500">
          Upcoming Events
        </h1>
        <p className="text-xl mt-4 text-gray-300 max-w-3xl mx-auto">
          Stay tuned for exciting events we’re hosting throughout the year! We
          aim to host at least one event every quarter. Don’t miss out!
        </p>
      </div>

      {/* Countdown Section */}
      <div className="text-center mb-12 bg-gray-800/80 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-yellow-500 mb-4">
          Countdown to Our Next Event!
        </h2>
        <p className="text-2xl max-w-auto mt-4 font-mono px-6 py-4 ">
          {timeRemaining}
        </p>
      </div>

      {/* Event Details Section */}
      <div className="text-center mb-12 bg-gray-800/80 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-yellow-500 mb-4">Event Details</h2>
        <p className="text-lg text-gray-300">
          🏋️ <span className="font-semibold">Event:</span> Powerlifting Competition
        </p>
        <p className="text-lg text-gray-300 mt-4">
          📍 <span className="font-semibold">Location:</span> UCSC Multipurpose Room, 405 E Field Service Rd,
          Santa Cruz, CA 95064
        </p>
        <p className="text-lg text-gray-300 mt-4">
          🗓️ <span className="font-semibold">Date:</span> March 8, 2025
        </p>
        <p className="text-lg text-gray-300 mt-4">
          ⏰ <span className="font-semibold">Time:</span> 1:00 PM - 3:00 PM
        </p>
      </div>

      {/* Registration Form */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfg-7Zn5iO3M1P17TTVPfyIoRyCNU2YF_ZoWXz6gVqZ7SkYXQ/viewform?embedded=true"
        width="640"
        height="757"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        className="mx-auto bg-white rounded-lg shadow-xl"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Events;