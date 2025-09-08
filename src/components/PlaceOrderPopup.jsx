import React, { useState } from "react";

const PlaceOrderPopup = () => {
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
          💳 Payments on Skilcenta
        </h2>

        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-4">
          <li>Currently, we support only the following payment methods:</li>
          <li>🏠 Cash on Delivery (COD) – Pay when you receive the product.</li>
          <li>💵 Offline Payments – Direct handover or in-person payments.</li>
        </ul>
        <p className="text-gray-600 text-sm mb-3">⚠ Note:</p>
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-4">
          <li>Online payments are not available yet.</li>
          <li>
            Please ensure you complete the payment directly with our team or at
            delivery.{" "}
          </li>
          <li>
            Any attempt to bypass our payment system may lead to order
            cancellation or account restrictions.{" "}
          </li>
        </ul>
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

export default PlaceOrderPopup;
