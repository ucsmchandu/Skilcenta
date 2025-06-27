import React, { useState } from 'react'

const Profile = () => {
  // Example user data (replace with real data or props/context)
  const [user, setUser] = useState({
    name: "chandu",
    email: "chandu@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Chandu&background=0D8ABC&color=fff",
    bio: "fuck you",
    branch: "cse",
    year: "3rd Year",
    location: "Abc"
  });

  return (
    <div className="min-h-screen mt-20 flex items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
        <div className="flex flex-col items-center">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-blue-200 shadow mb-4"
          />
          <h2 className="text-3xl font-bold text-gray-900 mb-1">{user.name}</h2>
          <p className="text-gray-500 mb-2">{user.email}</p>
          <p className="text-blue-700 font-semibold mb-4">{user.branch} &middot; {user.year}</p>
          <p className="text-gray-700 text-center mb-4">{user.bio}</p>
          <p className="text-gray-400 text-sm mb-6">{user.location}</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <span className="font-medium">Full Name:</span>
              <div>{user.name}</div>
            </div>
            <div>
              <span className="font-medium">Email:</span>
              <div>{user.email}</div>
            </div>
            <div>
              <span className="font-medium">Branch:</span>
              <div>{user.branch}</div>
            </div>
            <div>
              <span className="font-medium">Year:</span>
              <div>{user.year}</div>
            </div>
            <div>
              <span className="font-medium">Location:</span>
              <div>{user.location}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile