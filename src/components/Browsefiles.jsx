import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
const Browsefiles = () => {
  const [filesData,setFilesData]=useState([]);
  const [loading,setLoading]=useState(false);
  const [searchData,setSearchData]=useState('');

  const getData=async()=>{
     try{
      setLoading(true);
       const res=await axios.get(`${import.meta.env.VITE_SKILCENTA_URL}/skilcenta/api/v1/files/get/files`);
      // console.log(res);

      setFilesData(res.data.files);
      // console.log(filesData);
     }catch(err){
      console.log(err.message);
      setFilesData([]);
     }
     finally{
      setLoading(false);
     }
    }
  useEffect(()=>{
    getData();
    // console.log(filesData);
  },[]);

  const filteredFiles=searchData ? 
  filesData.filter((file)=>(
    file.title.toLowerCase().includes(searchData.toLowerCase()) ||
    file.category.toLowerCase().includes(searchData.toLowerCase())
  )): filesData;

  return (
    <>
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
              onChange={e=>setSearchData(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border relative -top-6 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          
          <div>
            <select
              name="names"
              id="r-names"
              onChange={e=>setSearchData(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg outline-none md:w-xl w-full"
            >
              <option value="">All Resources</option>
              <option value="upsc">UPSC</option>
              <option value="gate">GATE</option>
              <option value="academic">ACADEMIC</option>
            {/* <option></option>  */}
            </select>
          </div>
        </div>

       
        {
          loading ? (
      <div className="flex justify-center items-center min-h-[200px]">
        <svg className="animate-spin h-10 w-10 text-blue-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
        </svg>
        <span className="text-lg text-blue-600 font-semibold">Loading resources...</span>
      </div>
    ):
           (<div className="grid grid-cols-1 md:grid-cols-2 ">
        {
          filteredFiles.length!==0 ? (
            filteredFiles.map((file)=>(
                <div 
                key={file._id}
                className="border border-gray-200 rounded-lg p-6 m-6 hover:shadow-sm transition-shadow">
            <div className="sm:flex items-start justify-between space-y-3 ">
                <div className="flex space-x-4">
                  <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750941738/blank_js79ji.png" className="h-6" />
                  <p className="font-bold">{file.title.toUpperCase()}</p>
                  <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750943502/file_qilgtk.png" className="h-6" alt="" />
                </div>
               <div className="flex space-x-6">
                {/* <a
                target='_blank'
                href={file.url}
                >
                   <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750942263/eye_n2qoka.png" className="h-5 cursor-pointer relative top-1 hover:" alt="see" />
                </a> */}
                <a
                target='_blank'
                href={file.url}
                className="bg-orange-400 p-1 rounded-lg text-sm cursor-pointer">↓ Download</a>
               </div>
            </div>
            <p className='text-sm mt-2 text-gray-700'>Description: {file.description}</p>
            <div className="flex mt-4 space-x-4">
              {/* <p className="text-gray-500">15.2MB</p> */}
              <div className="flex space-x-1">
                <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750943083/calendar_o8cy0z.png" className="h-4 relative top-1" alt="" />
                <p className="text-gray-500">{file.createdAt.split("T")[0]}</p>
              </div>
            </div>
            <div>
              <p className="text-sm mt-4 font-bold text-gray-500">Uploaded by {file.author} </p>
              <p className="text-sm mt-2 font-bold text-gray-500">Email: {file.email}</p>
            </div>
        </div>
            ))
          ):(
           <div className='flex justify-center text-gray-600'> <p className='text-2xl font-semibold '>No data found</p></div>
          )
        }
      </div>

        )}


    </>
  )
}

export default Browsefiles