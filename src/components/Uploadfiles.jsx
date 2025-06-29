// import React, { useState } from 'react'

// const Uploadfiles = () => {
//   const [data,setData]=useState({
//     title:'',
//     category:'',
//     description:'',
//     file:null
//   });

//   const handleChange=(e)=>{
//     const {name,value,files}=e.target;
//     if(name==='file'){
//       setData({...data,[name]:files[0]});
//     }
//     else{
//       setData({...data,[name]:value});
//     }
//   };

//   const handleSubmit=async(e)=>{
//     e.preventDefault();

//     const emailBody=`
//     Title: ${data.title}
//     Category: ${data.category}
//     Description: ${data.description}
//     File: ${data.file ? data.file.name : ""}
//     `;

//     console.log(emailBody);
//     setData({
//       title:'',
//        category:'',
//     description:'',
//     file:''
//     });
//     e.target.reset();
//   }

//   return (
//     <div className='p-6'>
//     <div className='max-w-2xl'>
//       <p className='text-xl font-bold text-gray-900 mb-6'>Upload New Resource</p>
//       <form onSubmit={handleSubmit} className='space-y-6'>
//         <div>
//             <label  className='block text-sm font-medium text-gray-700 mb-2'>Resources Title</label>
//             <input
//              type="text"
//              required 
//              name='title'
//              value={data.title}
//              onChange={handleChange}
//              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder=' Enter resource title' />
//         </div>
//         <div>
//             <label  className='block text-sm font-medium text-gray-700 mb-2'>category</label>
//             <select 
//             name="category"
//             value={data.category}
//             onChange={handleChange}
//              required
//               id=""
//                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
//                 <option value="">Select category</option>
//                 <option value="upsc">UPSC</option>
//                 <option value="gate">GATE</option>
//             </select>
//         </div>
//         <div>
//             <label  className='block text-sm font-medium text-gray-700 mb-2'>Description</label>
//             <textarea 
//             required
//              name="description"
//               id=""
//               value={data.description}
//               onChange={handleChange}
//                placeholder='Describe your resource' rows="4" className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'></textarea>
//         </div>
//         <div className=''>
//             <label  className='block text-sm font-medium text-gray-700 mb-2'>Upload File</label>
//             <input 
//             name='file'
//             type="file"
//              required
//             accept='application/pdf'
//             onChange={handleChange}
//               className=' text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 cursor-pointer'  />
//         </div>
//         <button type='submit' className='w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors'>Upload Resource</button>
//       </form>
//     </div>
//     </div>
//   )
// }

// export default Uploadfiles