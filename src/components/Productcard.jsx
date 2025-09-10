import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Productcard = ({product,orderCount}) => {
  // console.log(product);
  // console.log(orderCount);
  const [count,setCount]=useState('');

  const calculateProbability=()=>{
    if(orderCount===0) {
      setCount(100);
    }else{
      const cal= orderCount+1;
      setCount(100/cal);
    }
  }
  useEffect(()=>{
    calculateProbability();
  },[orderCount]);

  return (
    <div className="bg-white rounded-lg shadow-sm  hover:shadow-md transition-shadow group">
      <div className="flex justify-center cursor-pointer">
       <Link to={`/product/${product._id}`}>
        <img src={product.productImageUrl} alt={product.productName} className=" h-40 w-auto object-cover rounded-lg" />
       </Link>
      </div>
      <div className="p-4">
        <p className="font-semibold text-gray-900 mb-2  transition-colors">
          {product.productName}
        </p>
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-xl font-bold text-green-600">₹{product.productPrice}</span>
        </div>
        <div className="text-sm text-gray-600 mb-4">
          <strong>Sold by:</strong><span className="font-medium"> {product.sellerName}</span>
        </div>
         <div className="text-sm text-gray-600 mb-4">
          <strong>College:</strong><span className="font-medium"> {product.sellerCollege}</span>
        </div>
         <div className="text-sm text-gray-600 mb-4">
          <strong>Availability Chance:</strong><span className="font-medium"> {count}%</span>{" "}{orderCount>0 ? (<span className="text-red-500">(WL)</span>):(<></>)}
        </div>
        <div className="text-sm text-gray-600 mb-4">
        Warranty: <span className="font-medium">{product.warranty}</span>
        </div>
       <Link to={`/product/${product._id}`}>
        <button className="w-full bg-yellow-300  cursor-pointer text-black py-2 rounded-lg shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
          <span className="font-semibold">Buy at ₹{product.productPrice}</span>
        </button>
       </Link>
      </div>
    </div>
  );
};

export default Productcard;
