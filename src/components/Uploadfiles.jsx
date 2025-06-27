import React from 'react'

const Uploadfiles = () => {
  return (
    <div className='p-6'>
    <div className='max-w-2xl'>
      <p className='text-xl font-bold text-gray-900 mb-6'>Upload New Resource</p>
      <form action="" className='space-y-6'>
        <div>
            <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-2'>Resources Title</label>
            <input type="text" required className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder=' Enter resource title' />
        </div>
        <div>
            <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-2'>category</label>
            <select name="" required id="" className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
                <option value="">Select category</option>
                <option value="upsc">UPSC</option>
                <option value="gate">GATE</option>
            </select>
        </div>
        <div>
            <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-2'>category</label>
            <textarea required name="" id="" placeholder='Describe your resource' rows="4" className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'></textarea>
        </div>
        <div className=''>
            <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-2'>Upload File</label>
            <input type="file" required className=' text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 cursor-pointer'  />
        </div>
        <button type='submit' className='w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors'>Upload Resource</button>
      </form>
    </div>
    </div>
  )
}

export default Uploadfiles