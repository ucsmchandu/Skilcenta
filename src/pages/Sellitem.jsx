import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../contextApi/AuthContext";
const Sellitem = () => {
  const { currentUser } = useAuth();
  const [form, setForm] = useState({
    productName: "",
    sellerName: "",
    email: "",
    phone: "",
    address: "",
    college: "",
    description: "",
    price: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
    // console.log(value);
  };

  //uploading image to cloudinary
  const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "unsigned_upload");
    data.append("cloud_name", "dllvcgpsk");
    setLoading(true);
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dllvcgpsk/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const json = await res.json();
      return json.secure_url;
    } catch (error) {
      console.error("Cloudinary Upload Failed:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(form.phone)) {
      toast.error("Enter valid phone number!", {
        position: "top-left",
      });
      setLoading(false);
      return;
    }
    try {
      const file = e.target.image.files[0];
      const imgUrl = await uploadImageToCloudinary(file);
      if (!imgUrl) {
        setMessage("image upload failed");
        toast.error("image upload failed", {
          position: "top-left",
        });
        return;
      }

      const templateParams = {
        sellerId: currentUser.uid.trim(),
        productName: form.productName.trim(),
        name: form.sellerName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        address: form.address.trim(),
        college: form.college.trim(),
        price: form.price.trim(),
        description: form.description.trim(),
        image: imgUrl.trim(),
      };

      //for customer
      const custRes = await axios.post(
        `${
          import.meta.env.VITE_SKILCENTA_URL
        }/skilcenta/api/v1/mail/customer/sell`,
        templateParams
      );
      // console.log("mail sent to customer",custRes);

      //for admin
      const adminRes = await axios.post(
        `${
          import.meta.env.VITE_SKILCENTA_URL
        }/skilcenta/api/v1/mail/admin/sell`,
        templateParams
      );
      // console.log("mail send to admin",adminRes);

      toast.success("Details submitted successfully", {
        position: "top-left",
      });
      setMessage("Your product details have been sent to the administrator!");
    } catch (error) {
      console.error("Email error:", error);
      toast.error("Error try again", {
        position: "top-left",
      });
      setMessage("There was an error. Please try again.");
    } finally {
      setLoading(false);
    }
    // console.log(form);
    setForm({
      productName: "",
      sellerName: "",
      email: "",
      phone: "",
      address: "",
      college: "",
      description: "",
      price: "",
      image: null,
    });
    e.target.reset();
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="mt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2 text-center">
          Sell Your Product
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Fill in the details below. Your product info will be sent to the site
          administrator for approval.
        </p>
        {loading ? (
          <div className="flex flex-col items-center py-12">
            <svg
              className="animate-spin h-10 w-10 text-blue-600 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
            <span className="text-blue-700 font-semibold text-lg">
              Sending your message...
            </span>
          </div>
        ) : (
          message && (
            <div className="text-green-600 text-center font-semibold py-4 mb-4">
              {message}
            </div>
          )
        )}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product Name
            </label>
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
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Seller Name
            </label>
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
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Address
            </label>
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
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              College
            </label>
            <select
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
              name="college"
              id="college"
              value={form.college}
              onChange={handleChange}
            >
              <option value="">select college</option>
              <option value="Anits">Anits</option>
              <option value="Au">Au</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              required
              pattern="[0-9]{10}"
              maxLength={10}
              minLength={10}
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
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
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Price (₹)
            </label>
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
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Upload Product Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              required
              onChange={handleChange}
              className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 cursor-pointer"
            />
          </div>
          <button
            onClick={() => scrollToTop()}
            type="submit"
            className="w-full bg-gradient-to-r cursor-pointer from-orange-500 to-orange-600 text-white py-3 rounded-lg font-bold text-lg shadow hover:from-orange-600 hover:to-orange-700 transition-all"
          >
            Submit for Review
          </button>
        </form>
        <div className="mt-8 text-center text-gray-500 text-sm">
          Your product details will be reviewed by the administrator before
          being listed.
        </div>
      </div>
    </div>
  );
};

export default Sellitem;
