import React, { useState } from "react";
import Productlistings from "../components/Productlistings";
import { Link } from "react-router-dom";
import MarketPlacePopup from "../components/MarketPlacePopup";
const Market = () => {
  const [search,setSearch]=useState('');

  const handleSearch=(e)=>{
    setSearch(e.target.value);
    // console.log(search);
  }
  const message={
    title:"Welcome to Skilcenta Marketplace!",
    subTitle:"Here’s how ordering works:"
  }
 const warranty = [
  <>
    <p className="font-semibold text-red-600">⚠️ Important Notice</p>
    <p>
      <span className="font-semibold">Warranty on products</span> is{" "}
      <span className="font-semibold text-yellow-600">decided by the seller</span>.
    </p>
    <p>
      If a seller provides a <span className="font-semibold text-green-600">warranty</span>, it will be clearly 
      mentioned on the product details page.
    </p>
    <p>
      If <span className="font-semibold text-red-600">no warranty</span> is provided by the seller, 
      the product is considered{" "}
      <span className="font-semibold text-yellow-600">pre-owned and sold as-is</span>. Skilcenta is{" "}
      <span className="font-semibold text-red-600">not responsible</span> for such items.
    </p>
  </>,
];


  const points=[
    <>
      If you’re the <strong>first buyer</strong>, your chance of getting the product is highest (100%).
    </>,
    <>
      If multiple buyers order the same product, the chance is <strong>shared fairly</strong> among everyone.
      </>,
      <>
      The earlier you place your order, the <strong>better your chances!</strong>
      </>
  ]
  return (
    <div className="mt-30">
      <MarketPlacePopup message={message} points={points} warranty={warranty}/>
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
      placeholder="search by college or product"
      className="w-full pl-10 pr-4 py-2 border relative -top-6 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
    />
  </div>
  <div className="relative sm:-top-3 lg:top-0 ">
    <Link to="/sellerDashboard">
      <button className="flex items-center gap-2 px-5 py-2 rounded-xl cursor-pointer bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-white font-bold shadow-lg hover:scale-105 hover:from-pink-600 hover:to-yellow-500 transition-all duration-200 text-base">
        <span className="text-lg">+</span>Seller Dashboard
      </button>
    </Link>
  </div>
</div>
<div className="flex flex-wrap gap-2 mt-4 md:-mt-3">
  <div className="flex flex-wrap gap-2 mt-4">
    <Link to="/orders">
      <button className="flex space-x-1 px-5 py-2 rounded-xl bg-gradient-to-r bg-blue-400 cursor-pointer text-white font-bold shadow-lg hover:scale-105 transition-all duration-200 text-base">
        <span><img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1757259056/order_rf29nq.png" alt="" className="h-7" /></span> <span className="mt-0.5 font-semibold">Orders</span>
      </button>
    </Link>
  </div>
    <div className="flex flex-wrap gap-2 mt-4">
    <Link to="/sellitem">
      <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r bg-blue-400 cursor-pointer text-white font-bold shadow-lg hover:scale-105 transition-all duration-200 text-base">
        + Sell Item
      </button>
    </Link>
  </div>
</div>
<div className="mt-5 text-gray-500 font-semibold"><p>*Choose your college :</p></div>
<div className="flex space-x-4">
  <div className="flex flex-wrap gap-2 mt-4">
    <button 
      onClick={()=>setSearch("anits")}
      className="px-5 py-2 rounded-xl bg-gradient-to-r bg-amber-800 cursor-pointer text-white font-bold shadow-lg hover:scale-105 transition-all duration-200 text-base"
    >
      ANITS
    </button>
  </div>
  <div className="flex flex-wrap gap-2 mt-4">
    <button
      onClick={()=>setSearch("au")}
      className="px-5 py-2 rounded-xl bg-gradient-to-r bg-amber-800 cursor-pointer text-white font-bold shadow-lg hover:scale-105 transition-all duration-200 text-base"
    >
      AU
    </button>
  </div>
  <div className="flex flex-wrap gap-2 mt-4">
    <button
      onClick={()=>setSearch("rec")}
      className="px-5 py-2 rounded-xl bg-gradient-to-r bg-amber-800 cursor-pointer text-white font-bold shadow-lg hover:scale-105 transition-all duration-200 text-base"
    >
      REC
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
