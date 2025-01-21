import React, { useState } from "react";
import LegendsImg from "../../assets/sponsors/legends.jpg";
import { Link } from "react-router-dom";

export default function Sponsors() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="bg-black-900 py-8 sm:py-8 mb-6">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <h2 className="text-center text-4xl tracking-wider font-semibold AstranovaHeroFont leading-8 text-white">
          <span className="text-5xl text-teal-500">T</span>itle{" "}
          <span className="text-5xl text-teal-500">S</span>ponsor
        </h2>

        {/* Click Here Link */}
        <div className="text-center mt-4">
          <button
            onClick={togglePopup}
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-md text-lg"
          >
            Click Here for Details
          </button>
        </div>

        {/* Full-Screen Popup Modal */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative w-full h-full">
              {/* Close Button */}
              <button
                onClick={togglePopup}
                className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-800 hover:bg-gray-900 p-2 rounded-full"
              >
                &times;
              </button>

              {/* Full-Screen Image */}
              <img
                src={LegendsImg}
                alt="Sponsor Details"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>

      {/* Astranova 2k24 Section */}
      <div className="mx-auto max-w-full px-6 lg:px-8 mt-12">
        <hr className="border-purple-500 my-4" />
        <h2 className="text-center text-5xl tracking-wider font-bold AstranovaHeroFont text-purple-500">
          Astranova 2k24
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center mt-8 space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Participants */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-purple-500 mt-4">
              Participants
            </h3>
            <p className="text-white text-xl font-semibold mt-2">1500+</p>
          </div>

          {/* Prize Pool */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-purple-500 mt-4">
              Prize Pool
            </h3>
            <p className="text-white text-xl font-semibold mt-2">₹50,000+</p>
          </div>
        

        {/* Events */}
        <div className="flex flex-col items-center mt-8">
          <h3 className="text-2xl font-bold text-purple-500">Events</h3>
          <p className="text-white text-xl font-semibold mt-2">20+</p>
        </div>

        {/* Date */}
        <div className="flex flex-col items-center mt-4">
          <h3 className="text-2xl font-bold text-purple-500">Date</h3>
          <p className="text-white text-xl font-semibold mt-2">
            March 8 - 9
          </p>
        </div>
        </div>
        {/* Know More Link */}
        <div className="mt-6 text-center">
          <Link
            to="/A2k24"
            className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-md text-lg"
          >
            Click Here to Know More...
          </Link>
        </div>
      </div>
    </div>
  );
}
