import React from "react";
import Roadmaps from "../Data/Roadmaps.json";
import { useAuth } from "../contextApi/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
const Roadmap = () => {
  // {
  //   console.log(Roadmaps);
  // }
  const navigate=useNavigate();
  const {currentUser}=useAuth();
  return (
    <div className="mt-30 ">
      <div className=" flex flex-col shadow-lg p-6 justify-center rounded-2xl text-white h-auto items-center m-6 bg-gradient-to-r from-[#DDF6D2] to-[#CAE8BD]">
        <h1 className="text-4xl md:text-6xl  text-amber-950 font-serif mb-4">
          Roadmaps
        </h1>
        <p className="text-xl text-center md:text-2xl text-zinc-400 opacity-90 max-w-3xl mx-auto">
          Structured learning paths to achieve your career goals
        </p>
        <p className="mt-6 text-lg font-extralight text-gray-950">
          Start. Skill. Succeed.
        </p>
      </div>
      {/* from the json file  */}
      <div className="md:p-20 p-14">
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Roadmaps.map((data) => (
            <li key={data.id}>
              <div className="shadow hover:shadow-lg p-4 rounded-2xl h-full ">
                <div>
                  <img
                    src={data.img}
                    className="h-16"
                  />
                </div>
                <p className="text-xl font-bold text-gray-900 mb-3 mt-4">
                  {data.name}
                </p>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {data.quote}
                </p>
                <div className="flex flex-col space-y-3 text-sm">
                  <div className="flex space-x-3">
                  <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750928744/clock_sjt4kk.png" className="h-5" />
                  <p className="text-sm text-gray-600">{data.time}</p>
                </div>
                <div className="flex space-x-3">
                  <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750929084/badge_ufqmis.png" className="h-5" />
                  <p className="text-sm text-gray-600">{data.roadmap}</p>
                </div></div>
                <div className="flex justify-between text-blue-800 mt-6 items-center ">
                 {
                  currentUser ? (
                    <a href={data.link} target="_blank" className="font-semibold">View Roadmap</a>
                  ):(<button onClick={()=>navigate("/login")} className="font-semibold cursor-pointer">View Roadmap</button>)
                 }
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Roadmap;
