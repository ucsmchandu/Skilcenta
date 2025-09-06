import React, { useState } from 'react'
// import { firestore } from './Firebase'
// import { doc, deleteDoc } from 'firebase/firestore'
import axios from 'axios';

const Delete = () => {
  const [deleteId, setDeleteId] = useState("");
  const handleDelete = (e) => {
    const data = e.target.value;
    setDeleteId(data);
    // console.log(data);
  }
  const deleteProduct = async (e) => {
    e.preventDefault();
    try {
      const deleteProduct=await axios.delete(`http://localhost:3000/skilcenta/api/v1/market/delete/product/${deleteId}`);
     alert(deleteProduct.data.message);
    }
    catch (error) {
      console.log(error);
      alert("check console");
      return;
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Delete Product</h2>
        <form onSubmit={deleteProduct} className="flex flex-col space-y-6">
          <input
            type="text"
            value={deleteId}
            onChange={handleDelete}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            placeholder="Enter Firestore Product ID"
          />
          <button
            type="submit"
            className="bg-red-600 cursor-pointer text-white rounded-lg px-6 py-2 font-semibold hover:bg-red-700 transition"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  )
}

export default Delete