import React from "react";
import { Link } from "react-router-dom";
const Productcard = ({ id, productName, img, cost, soldBy }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm  hover:shadow-xl transition-shadow group">
      <div className="flex justify-center cursor-pointer">
       <Link to={`/product/${id}`}>
        <img src={img} className=" h-28 object-cover" />
       </Link>
      </div>
      <div className="p-4">
        <p className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
          {productName}
        </p>
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-xl font-bold text-green-600">₹{cost}</span>
        </div>
        <div className="text-sm text-gray-600 mb-4">
          Sold by:<span className="font-medium">{soldBy}</span>
        </div>
       <Link to={`/product/${id}`}>
        <button className="w-full bg-green-600 cursor-pointer text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
          <span>Buy</span>
        </button>
       </Link>
      </div>
    </div>
  );
};

export default Productcard;
