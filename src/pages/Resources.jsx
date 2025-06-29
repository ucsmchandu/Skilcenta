import React, { useState } from "react";
// import Browsefiles from "../components/Browsefiles";
// import Uploadfiles from "../components/Uploadfiles";
const Resources = () => {
  const [resources,setResources]=useState(false); //for the re-toggleing
  return (
    <div className="mt-30">
      <div className=" flex flex-col shadow-lg p-6 justify-center rounded-2xl text-white h-auto items-center m-6 bg-gradient-to-r from-[#B1F0F7] to-[#81BFDA]">
        <h1 className="text-4xl md:text-6xl  text-black font-serif mb-4">
          Resource Sharing
        </h1>
        <p className="text-xl text-center md:text-2xl text-zinc-500 opacity-90 max-w-3xl mx-auto">
          Share and access study materials for competitive exams
        </p>
        <p className="mt-6 text-lg font-extralight text-gray-600">
          Share. Learn. Grow.
        </p>
      </div>
      {/* chart */}
      {/* <div className="border-blue-100 border-2 m-10 rounded-2xl lg:m-20">
        <nav className="flex p-3 space-x-10 border-b-2 border-blue-100">
          <div className="cursor-pointer p-1 ">
            <button className=" hover:text-black cursor-pointer " onClick={()=>setResources(false)}>
             { <span className={` border-b-orange-600 border-b-2 ${resources ? "text-gray-800 border-b-white" : "text-orange-600"}`}>Browse Resources</span>}
            </button>
          </div>
          <div className="cursor-pointer p-1">
            <button className=" cursor-pointer hover:text-black" onClick={()=>setResources(true)}>
             { <span className={`${!resources ? "text-gray-800 border-b-white" : "text-orange-600 border-b-2 border-b-orange-600"}`}>Upload Resources</span>}
            </button>
          </div>
        </nav>
      {
        !resources ? (<Browsefiles/>):(<Uploadfiles/>)
      }
      </div> */}
      <div className="flex justify-center mt-30">
        <h1 className="text-4xl text-gray-600 font-mono">Coming Soon</h1>
      </div>
    </div>
  );
};

export default Resources;
