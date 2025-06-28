import React, { useState } from 'react'
import { firestore } from './Firebase'
import { doc, updateDoc } from 'firebase/firestore'

const Update = () => {
  const [updateId, setUpdateId] = useState("");
  const [form, setForm] = useState({
    id: "",
    productName: "",
    soldBy: "",
    cost: "",
    description: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(firestore, "products", updateId), {
        id: form.id,
        productName: form.productName,
        soldBy: form.soldBy,
        cost: Number(form.cost),
        description: form.description,
        img: form.img,
      });
      alert("Product updated!");
      setForm({
        id: "",
        productName: "",
        soldBy: "",
        cost: "",
        description: "",
        img: "",
      });
      setUpdateId("");
    } catch (error) {
      alert("Check console");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen mt-10 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Update Product</h2>
        <form onSubmit={handleUpdate} className="flex flex-col space-y-4">
          <input
            type="text"
            value={updateId}
            onChange={e => setUpdateId(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            placeholder="Enter Firestore Product ID"
            required
          />
          <input
            type="text"
            name="id"
            value={form.id}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Manual Product ID"
            required
          />
          <input
            type="text"
            name="productName"
            value={form.productName}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Product Name"
            required
          />
          <input
            type="text"
            name="soldBy"
            value={form.soldBy}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Customer Name"
            required
          />
          <input
            type="number"
            name="cost"
            value={form.cost}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Cost"
            min="0"
            required
          />
          <input
            type="url"
            name="img"
            value={form.img}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Product Image URL"
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Description"
            rows={2}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg px-6 py-2 font-semibold hover:bg-blue-700 transition"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default Update