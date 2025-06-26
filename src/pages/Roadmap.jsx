import React from 'react'
import Roadmaps from '../Data/Roadmaps.json' 
const Roadmap = () => {
  return (
    <div className='mt-30'>
      <div className=" flex flex-col shadow-2xl p-6 justify-center rounded-2xl text-white h-auto items-center m-6 bg-gradient-to-r from-[#DDF6D2] to-[#CAE8BD]">
        <h1 className="text-4xl md:text-6xl  text-amber-950 font-serif mb-4">Roadmaps</h1>
        <p className="text-xl text-center md:text-2xl text-zinc-400 opacity-90 max-w-3xl mx-auto">
          Structured learning paths to achieve your career goals
        </p>
        <p className="mt-6 text-lg font-extralight text-gray-950">
          Start. Skill. Succeed.
        </p>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-10'>
        <div className='border p-4 rounded-2xl'>
        <div><img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750926232/programming_njyqrk.png" className='h-16'/></div>
        <p className='text-xl font-bold text-gray-900 mb-3 mt-4'>Web Development</p>
        <p className='text-gray-600 mb-6 line-clamp-2'>Complete path from beginner to full-stack developer</p>
      </div>
      </div>

    </div>
  )
}

export default Roadmap