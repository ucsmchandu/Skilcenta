import React from "react";

const Resources = () => {
  return (
    <div className="mt-30">
      <div className=" flex flex-col shadow-2xl p-6 justify-center rounded-2xl text-white h-auto items-center m-6 bg-gradient-to-r from-[#B1F0F7] to-[#81BFDA]">
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
      <div className="border-blue-100 border-2 min-h-screen m-10 rounded-2xl">
        <nav className="flex p-3 space-x-10 border-b-2 border-blue-100">
          <div className="cursor-pointer p-1 ">
            <span className="text-gray-800 hover:text-black">
              Browse Resources
            </span>
          </div>
          <div className="cursor-pointer p-1">
            <span className="text-gray-800 hover:text-black">
              Upload Resources
            </span>
          </div>
        </nav>

        <div className="p-6 flex flex-col justify-between">
          <div className=" flex1/2 relative  ">
            <img
              src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743402566/search_dvvaet.gif"
              className="h-6 relative left-2 top-2"
            />
            <input
              type="text"
              name="resources"
              placeholder="search here.."
              className="w-full pl-10 pr-4 py-2 border relative -top-6 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div>
            <select
              name="names"
              id="r-names"
              className="px-4 py-2 border border-gray-300 rounded-lg outline-none md:w-xl w-full"
            >
              <option value="all">All Resources</option>
              <option value="upsc">UPSC</option>
              <option value="gate">GATE</option>
              {/* <option value=""></option>
            <option></option> */}
            </select>
          </div>
        </div>
        {/* need to get data form the backend */}
      <div className="grid grid-cols-1">
        <div className="border border-gray-200 rounded-lg p-6 m-6 hover:shadow-sm transition-shadow">
            <div className="sm:flex items-start justify-between space-y-3 ">
                <div className="flex space-x-4">
                  <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750941738/blank_js79ji.png" className="h-6" />
                  <p className="font-semibold">UPSC History Complete Notes 2024</p>
                  <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750943502/file_qilgtk.png" className="h-6" alt="" />
                </div>
               <div className="flex space-x-6">
                 <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750942263/eye_n2qoka.png" className="h-5 cursor-pointer relative top-1 hover:" alt="see" />
                <button className="bg-orange-400 p-1 rounded-lg text-sm cursor-pointer">↓ Download</button>
               </div>
            </div>
            <div className="flex mt-4 space-x-4">
              <p className="text-gray-500">15.2MB</p>
              <div className="flex space-x-1">
                <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750943083/calendar_o8cy0z.png" className="h-4 relative top-1" alt="" />
                <p className="text-gray-500">1/15/2024</p>
              </div>
            </div>
            <div>
              <p className="text-sm mt-4 text-gray-500">Uploaded by chandu </p>
            </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 m-6 hover:shadow-sm transition-shadow">
            <div className="sm:flex items-start justify-between space-y-3 ">
                <div className="flex space-x-4">
                  <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750941738/blank_js79ji.png" className="h-6" />
                  <p className="font-semibold">UPSC History Complete Notes 2024</p>
                  <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750943502/play-button_lgjitk.png" className="h-6" alt="" />
                </div>
               <div className="flex space-x-6">
                 <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750942263/eye_n2qoka.png" className="h-5 cursor-pointer relative top-1 hover:" alt="see" />
                <button className="bg-orange-400 p-1 rounded-lg text-sm cursor-pointer">↓ Download</button>
               </div>
            </div>
            <div className="flex mt-4 space-x-4">
              <p className="text-gray-500">15.2MB</p>
              <div className="flex space-x-1">
                <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750943083/calendar_o8cy0z.png" className="h-4 relative top-1" alt="" />
                <p className="text-gray-500">1/15/2024</p>
              </div>
            </div>
            <div>
              <p className="text-sm mt-4 text-gray-500">Uploaded by chandu </p>
            </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 m-6 hover:shadow-sm transition-shadow">
            <div className="sm:flex items-start justify-between space-y-3 ">
                <div className="flex space-x-4">
                  <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750941738/blank_js79ji.png" className="h-6" />
                  <p className="font-semibold">GATE CSE Previous Year Solutions</p>
                  <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750943502/play-button_lgjitk.png" className="h-6" alt="" />
                </div>
               <div className="flex space-x-6">
                 <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750942263/eye_n2qoka.png" className="h-5 cursor-pointer relative top-1 hover:" alt="see" />
                <button className="bg-orange-400 p-1 rounded-lg text-sm cursor-pointer">↓ Download</button>
               </div>
            </div>
            <div className="flex mt-4 space-x-4">
              <p className="text-gray-500">15.2MB</p>
              <div className="flex space-x-1">
                <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750943083/calendar_o8cy0z.png" className="h-4 relative top-1" alt="" />
                <p className="text-gray-500">1/15/2024</p>
              </div>
            </div>
            <div>
              <p className="text-sm mt-4 text-gray-500">Uploaded by chandu </p>
            </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 m-6 hover:shadow-sm transition-shadow">
            <div className="sm:flex items-start justify-between space-y-3 ">
                <div className="flex space-x-4">
                  <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750941738/blank_js79ji.png" className="h-6" />
                  <p className="font-semibold">GATE CSE Previous Year Solutions</p>
                  <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750943502/play-button_lgjitk.png" className="h-6" alt="" />
                </div>
               <div className="flex space-x-6">
                 <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750942263/eye_n2qoka.png" className="h-5 cursor-pointer relative top-1 hover:" alt="see" />
                <button className="bg-orange-400 p-1 rounded-lg text-sm cursor-pointer">↓ Download</button>
               </div>
            </div>
            <div className="flex mt-4 space-x-4">
              <p className="text-gray-500">15.2MB</p>
              <div className="flex space-x-1">
                <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750943083/calendar_o8cy0z.png" className="h-4 relative top-1" alt="" />
                <p className="text-gray-500">1/15/2024</p>
              </div>
            </div>
            <div>
              <p className="text-sm mt-4 text-gray-500">Uploaded by chandu </p>
            </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Resources;
