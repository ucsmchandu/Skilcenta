import React from 'react';
import { useAuth } from '../contextApi/AuthContext';
import { auth } from '../server/Firebase';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

const Profile = () => {
  const { currentUser } = useAuth();
  // console.log(currentUser);
  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast.success('Logged out successfully', { position: 'top-right' });
    } catch (error) {
      toast.error('Something went wrong', { position: 'top-right' });
    }
  };

  if (!currentUser) return <Navigate to="/login" />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        <img
          src={
            currentUser.photoURL ||
            `https://ui-avatars.com/api/?name=${currentUser.displayName || "User"}&background=0D8ABC&color=fff`
          }
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-indigo-200 shadow mb-6 object-cover"
        />
        <h2 className="text-3xl font-bold text-indigo-800 mb-2 text-center">
          {currentUser.displayName || "No Name"}
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">{currentUser.email}</p>
        <button
          onClick={handleLogout}
          className="bg-red-600 cursor-pointer hover:bg-red-700 transition text-white font-semibold px-8 py-2 rounded-lg shadow-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;