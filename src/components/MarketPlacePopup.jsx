import { li } from "motion/react-client";
import React, { useState, useEffect } from "react";

const MarketPlacePopup = ({ message, points,warranty }) => {
  const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/1 backdrop-blur-sm bg-opacity-40 z-50">
      <div className="bg-white w-96 rounded-xl shadow-lg p-6 relative">
        <button
          className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-gray-800 mb-3 mt-6 text-center">
          {message.title}
        </h2>
        <p className="text-gray-600 text-sm mb-3">{message.subTitle}</p>
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-4">
          {points.map((m,id) => (
            <li key={id}>
                {m}
            </li>
          ))}
         
        </ul>
       {
        warranty ? (warranty[0]):(null)
       }
       <p className="mb-6"></p>

        <button
          onClick={() => setIsOpen(false)}
          className="cursor-pointer w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default MarketPlacePopup;
