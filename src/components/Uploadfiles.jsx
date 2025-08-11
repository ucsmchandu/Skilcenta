import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../contextApi/AuthContext';
const Uploadfiles = () => {
  const {currentUser}=useAuth();
  const [loading,setLoading]=useState(false);
  const [data,setData]=useState({
    id:currentUser.uid,
    email:currentUser.email,
    author:'',
    title:'',
    branch:'',
    year:'',
    sem:'',
    category:'',
    description:'',
    file:null
  });
  /*
  title:dbms notes
  branch:it
  year:2nd year
  sem:1st sem
  category:gate/upsc/academic
  description:some stuff
  file:pdf  
  */

  const handleChange=(e)=>{
    const {name,value,files}=e.target;
    if(name==='file'){
      setData({...data,[name]:files[0]});
    }
    else{
      setData({...data,[name]:value});
    }
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true);
    // email api ----> http://localhost:3000/skilcenta/api/v1/mail/resource/files
    const emailBody={
    id:currentUser.uid,
    email:currentUser.email,
    author:data.author.trim(),
    branch:data.branch,
    year:data.year,
    sem:data.sem,
    title: data.title.trim(),
    category: data.category,
    description: data.description.trim(),
    file: data.file ? data.file : "",
    };
    const formData = new FormData();
    formData.append("id", currentUser.uid);
formData.append("email", currentUser.email);
formData.append("author", data.author.trim());
formData.append("branch", data.branch);
formData.append("year", data.year);
formData.append("sem", data.sem);
formData.append("title", data.title.trim());
formData.append("category", data.category);
formData.append("description", data.description.trim());
formData.append("file",data.file ? data.file :" ");

    try{
      const res=await axios.post("http://localhost:3000/skilcenta/api/v1/mail/resource/files",formData);
      const custRes=await axios.post("http://localhost:3000/skilcenta/api/v1/mail/customer/resource/files",emailBody);
     setData({
     id:currentUser.uid || "",
     email:currentUser.email || "",
    author:'',
    title:'',
    branch:'',
    year:'',
    sem:'',
    category:'',
    description:'',
    file:null
    });
    
    e.target.reset();
    toast.success("Resource uploaded",{
      position:'top-left'
    });
      // console.log("email sended");
    }catch(err){
      console.log(err);
      console.log(err.message);
    }finally{
      setLoading(false);
    }

    // console.log(emailBody);
   

  }

  const scrollToTop=()=>{
    window.scrollTo(0,0);
  }

  return (
    <div className='p-6'>
    <div className='max-w-2xl'>
      <p className='text-xl font-bold text-gray-900 mb-6'>Upload New Resource</p>
      <p className='text-sm mb-3 font-mono'><span className='text-red-500 text-lg'>*</span>Your Resource details will be reviewed by the administrator before being listed.</p>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
            <label  className='block text-sm font-medium text-gray-700 mb-2'>Your name</label>
            <input
             type="text"
             required 
             name='author'
             value={data.author}
             onChange={handleChange}
             className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder='Author name' />
        </div>
        <div>
            <label  className='block text-sm font-medium text-gray-700 mb-2'>Resources Title</label>
            <input
             type="text"
             required 
             name='title'
             value={data.title}
             onChange={handleChange}
             className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder=' Enter resource title' />
        </div>
         <div>
            <label  className='block text-sm font-medium text-gray-700 mb-2'>Branch</label>
            <select 
            name="branch"
            value={data.branch}
            onChange={handleChange}
             required
              id=""
               className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
                <option value="">Select Branch</option>
                <option value="cse">CSE</option>
                  <option value="it">IT</option>
                    <option value="csd">CSD</option>
                      <option value="csm">CSM</option>
                  <option value="ece">ECE</option>
                    <option value="eee">EEE</option>
                    <option value="civil">CIVIL</option>
                      <option value="mech">MECH</option>
            </select>
        </div>
        <div>
            <label  className='block text-sm font-medium text-gray-700 mb-2'>Year</label>
            <select 
            name="year"
            value={data.year}
            onChange={handleChange}
             required
              id=""
               className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
                <option value="">Select year</option>
                <option value="1y">1st year</option>
                <option value="2y">2nd year</option>
                <option value="3y">3rd year</option>
                <option value="4y">4th year</option>
            </select>
        </div>
         <div>
            <label  className='block text-sm font-medium text-gray-700 mb-2'>Semester</label>
            <select 
            name="sem"
            value={data.sem}
            onChange={handleChange}
             required
              id=""
               className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
                <option value="">Select semester</option>
                <option value="1s">1st sem</option>
                <option value="2s">2nd sem</option>
            </select>
        </div>
        <div>
            <label  className='block text-sm font-medium text-gray-700 mb-2'>category</label>
            <select 
            name="category"
            value={data.category}
            onChange={handleChange}
             required
              id=""
               className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
                <option value="">Select category</option>
                <option value="upsc">UPSC</option>
                <option value="gate">GATE</option>
                 <option value="academic">ACADEMIC</option>
            </select>
        </div>
        <div>
            <label  className='block text-sm font-medium text-gray-700 mb-2'>Description</label>
            <textarea 
            required
             name="description"
              id=""
              value={data.description}
              onChange={handleChange}
               placeholder='Describe your resource' rows="4" className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'></textarea>
        </div>
        <div className=''>
            <label  className='block text-sm font-medium text-gray-700 mb-2'>Upload File</label>
            <input 
            name='file'
            type="file"
             required
            accept='application/pdf'
            onChange={handleChange}
              className=' text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 cursor-pointer'  />
        </div>
        <button 
        // onClick={()=>scrollToTop()}
        type='submit' 
        disabled={loading}
        className='cursor-pointer w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-500 transition-colors'>
          {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                Uploading...
              </span>
            ) : (
              "Upload Resource"
            )}
          
          </button>
      </form>
      <p className='text-gray-600 text-sm mt-3 text-center'>Your resource details will be reviewed by the administrator before being listed.</p>
    </div>
    </div>
  )
}

export default Uploadfiles