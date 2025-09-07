import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../contextApi/AuthContext";

const Admin = () => {
  const { currentUser } = useAuth();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  //getting products from firestore
  const getProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/skilcenta/api/v1/market/get/all/products"
      );
      // console.log(res);
      setProducts(res.data.products);
    } catch (err) {
      console.log(err);
      console.log(err.message);
      return;
    }
  };
  //calling
  useEffect(() => {
    getProducts();
  }, []);

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

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const product = {
        sellerId: form.sellerId.trim(),
        sellerName: form.sellerName.trim(),
        productName: form.productName.trim(),
        sellerAddress: form.sellerAddress.trim(),
        sellerCollege: form.sellerCollege.trim(),
        sellerEmail: form.sellerEmail.trim(),
        sellerPhone: form.sellerPhone.trim(),
        productDescription: form.productDescription.trim(),
        productPrice: form.productPrice.trim(),
        productImageUrl: form.productImageUrl.trim(),
      };
      const res = await axios.post(
        "http://localhost:3000/skilcenta/api/v1/market/add/product",
        product
      );
      // console.log(res);
      const sendMail=await axios.post(
        "http://localhost:3000/skilcenta/api/v1/mail/product/live",
        product
      );
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
      alert("Product added!");
      e.target.reset();
    } catch (error) {
      console.log("Error adding document :", error);
      alert("error check console");
    }
  };

  const filteredProducts = products.filter(
    (p) =>
      (p._id &&
        p._id.toString().toLowerCase().includes(search.toLowerCase().trim())) ||
      (p.sellerId && p.sellerId.includes(search.trim())) ||
      (p.productName &&
        p.productName.toLowerCase().includes(search.toLowerCase().trim())) ||
      (p.sellerName &&
        p.sellerName.toLowerCase().includes(search.toLowerCase().trim())) ||
      (p.sellerPhone && p.sellerPhone.includes(search.trim())) ||
      (p.sellerEmail &&
        p.sellerEmail
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase().trim()))
  );

  return (
    <div className="min-h-screen mt-30 bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] py-8 px-2 flex flex-col items-center">
      {currentUser.email === "chanduuppu0@gmail.com" ? (
        <>
          <div className="flex md:flex-row flex-col space-y-2 md:space-y-0  space-x-10 m-5 ">
            <Link to="/deletedata">
              {" "}
              <button className="shadow-md hover:shadow-2xl px-4 py-2 p-1 rounded-lg text-white text-sm bg-red-500 cursor-pointer">
                Delete Product
              </button>
            </Link>
            <Link to="/updatedata">
              <button className="shadow-md hover:shadow-2xl px-4 py-2 p-1 rounded-lg text-white text-sm bg-blue-500 cursor-pointer">
                Update Product
              </button>
            </Link>
            <Link to="/allorders">
              <button className="shadow-md hover:shadow-2xl px-4 py-2 p-1 rounded-lg text-white text-sm bg-amber-500 cursor-pointer">
                All Orders
              </button>
            </Link>
            <Link to="/admin/resourceFiles">
              <button className="shadow-md hover:shadow-2xl px-4 py-2 p-1 rounded-lg text-white text-sm bg-amber-500 cursor-pointer">
                Resource
              </button>
            </Link>
          </div>

          <div className="w-full max-w-lg md:max-w-2xl bg-white rounded-2xl shadow-2xl p-6 md:p-10 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>
            <form className="space-y-3" onSubmit={handleAdd}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  name="sellerId"
                  value={form.sellerId}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="seller ID"
                />
                <input
                  type="text"
                  name="productName"
                  required
                  value={form.productName}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Product Name"
                />
                <input
                  type="text"
                  name="sellerName"
                  required
                  value={form.sellerName}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Customer Name"
                />
                <input
                  type="tel"
                  name="sellerPhone"
                  pattern="[0-9]{10,15}"
                  maxLength={15}
                  required
                  value={form.sellerPhone}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Customer Phone"
                />
                <input
                  type="email"
                  name="sellerEmail"
                  required
                  value={form.sellerEmail}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Customer Email"
                />
                <input
                  type="text"
                  name="sellerAddress"
                  required
                  value={form.sellerAddress}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Customer Address"
                />
                <input
                  type="text"
                  name="sellerCollege"
                  required
                  value={form.sellerCollege}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Customer college"
                />
                <input
                  type="number"
                  name="productPrice"
                  required
                  value={form.productPrice}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Cost (₹)"
                  min="0"
                />
                <input
                  type="url"
                  name="productImageUrl"
                  required
                  value={form.productImageUrl}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Product Image URL"
                />
              </div>
              <textarea
                name="productDescription"
                required
                value={form.productDescription}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-2"
                placeholder="Product Description"
                rows={2}
              />
              <div className="flex gap-2 justify-center mt-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="w-full max-w-full overflow-x-auto bg-white rounded-2xl shadow p-4 md:p-8">
            <h2 className="text-xl font-bold mb-4 text-center">
              Products List
            </h2>
            {/* sorting */}
            <div className="flex mb-4 items-center">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by ID, Product ID, Name, Customer"
                className="px-3 py-2 border border-gray-300 rounded-lg w-full max-w-xs"
              />
              <button
                className="ml-3 px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
                onClick={() => {
                  setProducts((prev) =>
                    [...prev].sort((a, b) => a._id.localeCompare(b._id))
                  );
                }}
                style={{ whiteSpace: "nowrap" }}
              >
                Sort by ID
              </button>
            </div>

            {filteredProducts.length === 0 ? (
              <p className="text-gray-500 text-center">
                No products available.
              </p>
            ) : (
              <table className="min-w-[700px] w-full text-left border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-3">Buyer ID</th>
                    <th className="py-2 px-3">Product ID</th>
                    <th className="py-2 px-3">Product Name</th>
                    <th className="py-2 px-3">phone</th>
                    <th className="py-2 px-3">email</th>
                    <th className="py-2 px-3">Customer</th>
                    <th className="py-2 px-3">Customer Address</th>
                    <th className="py-2 px-3">College</th>
                    <th className="py-2 px-3">Cost</th>
                    <th className="py-2 px-3">Description</th>
                    <th className="py-2 px-3">Image</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((p) => (
                    <tr key={p._id}>
                      <td className="py-2 px-3">{p.sellerId}</td>
                      <td className="py-2 px-3">{p._id}</td>
                      <td className="py-2 px-3">{p.productName}</td>
                      <td className="py-2 px-3">{p.sellerPhone}</td>
                      <td className="py-2 px-3">{p.sellerEmail}</td>
                      <td className="py-2 px-3">{p.sellerName}</td>
                      <td className="py-2 px-3">{p.sellerAddress}</td>
                      <td className="py-2 px-3">{p.sellerCollege}</td>
                      <td className="py-2 px-3">₹{p.productPrice}</td>
                      <td className="py-2 px-3">{p.productDescription}</td>
                      <td className="py-2 px-3">
                        {p.productImageUrl ? (
                          <img
                            src={p.productImageUrl}
                            alt={p.productName}
                            className="h-auto w-auto object-cover rounded"
                            style={{ maxWidth: "80px" }}
                          />
                        ) : (
                          <span className="text-gray-400">No Image</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      ) : (
        <>
          <p>You are not admin</p>
        </>
      )}
    </div>
  );
};

export default Admin;
