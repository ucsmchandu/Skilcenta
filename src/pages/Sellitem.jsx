import React, { useState } from 'react'

const Sellitem = () => {
  const [form, setForm] = useState({
    productName: '',
    sellerName: '',
    address: '',
    description:'',
    price: '',
    image: null,
    video: null,
  });
  
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" || name === "video") {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare email content (for demonstration, you would use a backend/email service in production)
    const emailBody = `
      Product Name: ${form.productName}
      Seller Name: ${form.sellerName}
      Address: ${form.address}
      Description: ${form.description}
      Price: ${form.price}
      Image: ${form.image ? form.image.name : 'No image uploaded'}
      Video: ${form.video ? form.video.name : 'No video uploaded'}
    `;

    // Simulate sending email (replace with real API/email service)
    setMessage("Your product details have been sent to the administrator!");
    console.log(emailBody);
    // Reset form
    setForm({
      productName: '',
      sellerName: '',
      address: '',
      price: '',
      image: null,
      video: null,
    });
    e.target.reset();
  };

  return (
    <div className="mt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2 text-center">Sell Your Product</h2>
        <p className="text-gray-600 mb-8 text-center">
          Fill in the details below. Your product info will be sent to the site administrator for approval.
        </p>
        {message && (
          <div className="text-green-600 text-center font-semibold py-4 mb-4">
            {message}
          </div>
        )}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name</label>
            <input
              type="text"
              name="productName"
              required
              value={form.productName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
              placeholder="Enter product name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Seller Name</label>
            <input
              type="text"
              name="sellerName"
              required
              value={form.sellerName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
            <textarea
              name="address"
              required
              value={form.address}
              onChange={handleChange}
              rows="2"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
              placeholder="Enter address to receive customers"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              required
              value={form.description}
              onChange={handleChange}
              rows="2"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
              placeholder="Description about the product"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Price (₹)</label>
            <input
              type="number"
              name="price"
              required
              value={form.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
              placeholder="Enter price"
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Product Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              required
              onChange={handleChange}
              className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Product Video</label>
            <input
              type="file"
              name="video"
              accept="video/*"
              onChange={handleChange}
              className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 cursor-pointer"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-bold text-lg shadow hover:from-orange-600 hover:to-orange-700 transition-all"
          >
            Submit for Review
          </button>
        </form>
        <div className="mt-8 text-center text-gray-500 text-sm">
          Your product details will be reviewed by the administrator before being listed.
        </div>
      </div>
    </div>
  )
}

export default Sellitem