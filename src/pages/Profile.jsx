import React, { useState } from 'react'

const Profile = () => {
  const [user, setUser] = useState({
    name: "chandu",
    email: "chandu@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Chandu&background=0D8ABC&color=fff",
    bio: "fuck you",
    branch: "cse",
    year: "3rd Year",
    location: "Abc"
  });

  const [editing, setEditing] = useState(false);
  const [editFields, setEditFields] = useState({
    bio:user.bio,
    branch: user.branch,
    year: user.year,
    location: user.location
  });

  const handleEditChange = (e) => {
    setEditFields({ ...editFields, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, ...editFields });
    setEditing(false);
  };

  return (
    <div className="min-h-screen mt-20 flex items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] py-10">
      <div className="w-full m-4 max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
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
          {!editing ? (
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
              onClick={() => setEditing(true)}
            >
              Edit Profile
            </button>
          ) : (
            <form onSubmit={handleEditSubmit} className="w-full max-w-sm mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
                <input
                  type="text"
                  name="branch"
                  value={editFields.branch}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <input
                  type="text"
                  name="bio"
                  value={editFields.bio}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                <input
                  type="text"
                  name="year"
                  value={editFields.year}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={editFields.location}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
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