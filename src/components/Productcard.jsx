import React from "react";

const Productcard = ({ id, productName, img, cost, sellerName }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm  hover:shadow-xl transition-shadow group">
      <div className="flex justify-center">
        <img src={img} className=" h-28 object-cover" />
      </div>
      <div className="p-4">
        <p className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
          {productName}
        </p>
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-xl font-bold text-green-600">₹{cost}</span>
        </div>
        <div className="text-sm text-gray-600 mb-4">
          Sold by:<span className="font-medium">{sellerName}</span>
        </div>
        <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Productcard;
