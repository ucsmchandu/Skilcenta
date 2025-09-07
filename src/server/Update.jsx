import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../contextApi/AuthContext";
const Update = () => {
  const {currentUser}=useAuth();
  const [updateId, setUpdateId] = useState("");
  const [form, setForm] = useState({
    sellerId: "",
    sellerName: "",
    productName: "",
    sellerAddress: "",
    sellerCollege: "",
    sellerEmail: "",
    sellerPhone: "",
    productDescription: "",
    productPrice: "",
    productImageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(form.sellerPhone)) {
        toast.error("Enter valid phone number!", {
          position: "top-left",
        });
        return;
      }
      const updateProduct={
        sellerId: form.sellerId.trim(),
        sellerName: form.sellerName.trim(),
        productName:form.productName.trim(),
        sellerAddress:form.sellerAddress.trim(),
        sellerCollege: form.sellerCollege.trim(),
        sellerEmail: form.sellerEmail.trim(),
        sellerPhone: form.sellerPhone.trim(),
        productDescription: form.productDescription.trim(),
        productPrice: form.productPrice.trim(),
        productImageUrl: form.productImageUrl.trim(),
      }

      const res=await axios.put(`http://localhost:3000/skilcenta/api/v1/market/update/product/${updateId.trim()}`,updateProduct);
      alert("Product updated!");
      setForm({
        sellerId: "",
        sellerName: "",
        productName: "",
        sellerAddress: "",
        sellerCollege: "",
        sellerEmail: "",
        sellerPhone: "",
        productDescription: "",
        productPrice: "",
        productImageUrl: "",
      });
      setUpdateId("");
    } catch (error) {
      alert("Check console");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen mt-10 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
     {
        currentUser.email==="chanduuppu0@gmail.com" ? (
           <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">
          Update Product
        </h2>
        <form onSubmit={handleUpdate} className="flex flex-col space-y-4">
          <input
            type="text"
            value={updateId}
            onChange={(e) => setUpdateId(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            placeholder="Enter Firestore Product ID"
            required
          />
          <input
            type="text"
            name="sellerId"
            value={form.sellerId}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            placeholder="seller ID"
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
            name="sellerName"
            value={form.sellerName}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Customer Name"
            required
          />
          <input
            type="text"
            name="sellerAddress"
            value={form.sellerAddress}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            placeholder="address"
            required
          />
          <input
            type="text"
            name="sellerCollege"
            value={form.sellerCollege}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            placeholder="college name"
            required
          />
          <input
            type="email"
            name="sellerEmail"
            value={form.sellerEmail}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            placeholder="email"
            required
          />
          <input
            type="tel"
            name="sellerPhone"
            value={form.sellerPhone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            maxLength={10}
            minLength={10}
            className="border border-gray-300 rounded-lg px-4 py-2"
            placeholder="phone"
            required
          />
          <input
            type="text"
            name="productPrice"
            value={form.productPrice}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            placeholder="price"
            required
          />
          <input
            type="url"
            name="productImageUrl"
            value={form.productImageUrl}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Product Image URL"
            required
          />
          <textarea
            name="productDescription"
            value={form.productDescription}
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
        ):(
          <>
          <p>you are not admin</p>
          </>
        )
     }
    </div>
  );
};

export default Update;
