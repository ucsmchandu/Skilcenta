import React, { useState } from "react";
import Productlistings from "../components/Productlistings";
import { Link } from "react-router-dom";
import { firestore } from "../server/Firebase";
import { getDoc,doc,where,query } from "firebase/firestore";
const Market = () => {
  const [search,setSearch]=useState('');

  const handleSearch=(e)=>{
    setSearch(e.target.value);
    // console.log(search);
  }
  
  return (
    <div className="mt-30">
      <div className=" flex flex-col shadow-lg p-6 justify-center rounded-2xl text-white h-auto items-center m-6 bg-gradient-to-r from-[#80B3FF] to-[#f5dbdb]">
        <h1 className="text-4xl md:text-6xl  text-black font-serif mb-4">
          Student Marketplace
        </h1>
        <p className="text-xl text-center md:text-2xl text-zinc-600 opacity-90 max-w-3xl mx-auto">
          Buy and sell second-hand products
        </p>
        <p className="mt-6 text-lg font-extralight text-gray-600">
          Buy. Sell. Save.
        </p>
      </div>

      <div className="m-10 lg:m-20 -mt-2 lg:-mt-4 ">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            <div className=" flex1/2 relative md:w-2xl ">
              <img
                src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743402566/search_dvvaet.gif"
                className="h-6 relative left-2 top-2"
              />
              <input
                type="text"
                value={search}
                onChange={handleSearch}
                name="resources"
                placeholder="search here.."
                className="w-full pl-10 pr-4 py-2 border relative -top-6 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="relative sm:-top-3 lg:top-0 ">
              <Link to="/sellitem">
              <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm cursor-pointer md:-p-5">
                + Sell Item
              </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 md:-mt-3">
            <div className="flex flex-wrap gap-2 mt-4">
              <Link to="/orders">
              <button className="px-4 cursor-pointer py-2 rounded-full text-sm font-medium transition-colors bg-cyan-600 text-white">
               Your Orders
              </button>
              </Link>
            </div>
          </div>
           <div className="mt-5 text-gray-500 font-semibold"><p>*Choose your college :</p></div>
           <div className="flex space-x-4">
              <div className="flex flex-wrap gap-2 mt-4">
              <button 
              onClick={()=>setSearch("anits")}
              className=" cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-colors bg-green-600 text-white">
                ANITS
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <button
              onClick={()=>setSearch("au")}
              className="px-4 cursor-pointer py-2 rounded-full text-sm font-medium transition-colors bg-green-600 text-white">
               AU
              </button>
            </div>
            </div>
        </div>
      </div>

      <div className="m-20 -mt-4">
        <Productlistings search={search} />
      </div>
    </div>
  );
};

export default Market;
