import { Link } from "react-router-dom";
import React, { useState } from "react";
import UCSCLogo from "../assets/UCSCLogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200 shadow-lg relative">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo and Name */}
        <div className="flex items-center">
          <Link to="/">
          <img
            src={UCSCLogo}
            alt="UCSC Barbell Logo"
            className="h-10 w-10 mr-3"
          />
          </Link>
          <Link to="/">
            <span className="text-lg font-bold text-gray-800">UCSC BARBELL</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          
          <a
            href="/weeklylifts"
            className="text-gray-800 hover:text-gray-600 font-semibold"
          >
            WEEKLY LIFTS
          </a>
          <a
            href="/events"
            className="text-gray-800 hover:text-gray-600 font-semibold"
          >
            EVENTS
          </a>
          <a
            href="/faq"
            className="text-gray-800 hover:text-gray-600 font-semibold"
          >
            FAQ
          </a>
        </div>

        {/* Hamburger Menu Button (Mobile/Tablet) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Sidebar */}
        {isOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-10"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* Sidebar */}
            <div
              className={`fixed top-0 right-0 w-2/3 h-full bg-gray-100 shadow-lg z-20 transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300 ease-in-out`}
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 hover:text-gray-600 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col space-y-6 px-8">
                <a
                  href="#about"
                  className="text-gray-800 hover:text-gray-600 font-semibold"
                >
                  ABOUT
                </a>
                <a
                  href="#weekly-lifts"
                  className="text-gray-800 hover:text-gray-600 font-semibold"
                >
                  WEEKLY LIFTS
                </a>
                <a
                  href="#events"
                  className="text-gray-800 hover:text-gray-600 font-semibold"
                >
                  EVENTS
                </a>
                <a
                  href="#faq"
                  className="text-gray-800 hover:text-gray-600 font-semibold"
                >
                  FAQ
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}