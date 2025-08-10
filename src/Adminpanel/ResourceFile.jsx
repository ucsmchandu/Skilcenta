import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useAuth } from '../contextApi/AuthContext';
const ResourceFile = () => {
    const {currentUser}=useAuth();
    const [data,setData]=useState({
      id:'',
      author:'',
      email:'',
      title:'',
      branch:'',
      year:'',
      sem:'',
      category:'',
      description:'',
      // file:null
      url:''
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
      // const {name,value,files}=e.target;
      // if(name==='file'){
      //   setData({...data,[name]:files[0]});
      // }
      // else{
      //   setData({...data,[name]:value});
      // }
      const {name,value}=e.target;
      setData({...data,[name]:value});
    };
  
    const handleSubmit=async(e)=>{
      e.preventDefault();
      // const formData=new FormData();
      // formData.append("id",data.id);
      // formData.append("author",data.author);
      // formData.append("branch",data.branch);
      // formData.append("year",data.year);
      // formData.append("sem",data.sem);
      // // formData.append("file",data.file);
      // formData.append("url",data.url);
      // formData.append("title",data.title);
      // formData.append("description",data.description);
      // formData.append("category",data.category);
       const emailBody={
      id:data.id,
      author:data.author,
      email:currentUser.email,
      branch:data.branch,
      year:data.year,
      sem:data.sem,
      title: data.title,
      category: data.category,
      description: data.description,
      // file: data.file ? data.file : ""
      url:data.url
      };
      try{
        // api for add the resource into db
        const res=await axios.post("http://localhost:3000/skilcenta/api/v1/files/upload/file",emailBody);
        // api for sending mail for the customer for their live product
        const resLive=await axios.post("http://localhost:3000/skilcenta/api/v1/mail/resource/live",emailBody);
        console.log("mail sent",resLive);
        console.log("file uploaded",res);
      }catch(err){
        console.log(err);
        console.log(err.message);
      }

     
  
      // console.log(emailBody);
      setData({
       id:'',
      author:'',
      email:'',
      title:'',
      branch:'',
      year:'',
      sem:'',
      category:'',
      description:'',
      // file:''
      url:''
      });
      e.target.reset();
    }
    return (
      <div className='p-6 mt-20 '>
      <div className='max-w-2xl'>
        {
            currentUser.email==="chanduuppu0@gmail.com" ? (<>
            <p className='text-xl font-bold text-gray-900 mb-6'>Upload New Resource</p>
        <form onSubmit={handleSubmit} className='space-y-6'>
             <div>
              <label  className='block text-sm font-medium text-gray-700 mb-2'>Customer Id</label>
              <input
               type="text"
               required 
               name='id'
               value={data.id}
               onChange={handleChange}
               className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder='id' />
          </div>
          <div>
              <label  className='block text-sm font-medium text-gray-700 mb-2'>Customer name</label>
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
          {/* <div className=''>
              <label  className='block text-sm font-medium text-gray-700 mb-2'>Upload File</label>
              <input 
              name='file'
              type="file"
               required
              accept='application/pdf'
              onChange={handleChange}
                className=' text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 cursor-pointer'  />
          </div> */}
           <div>
              <label  className='block text-sm font-medium text-gray-700 mb-2'>File URL</label>
              <input
               type="text"
               required 
               name='url'
               value={data.url}
               onChange={handleChange}
               className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder='url' />
          </div>
          <button type='submit' className='w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors'>Upload Resource</button>
        </form>
            </>):(<>
            <p>You are not admin</p>
            </>)
        }
        
      </div>
      </div>
    )
  }
  

export default ResourceFile