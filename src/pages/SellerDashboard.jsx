import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contextApi/AuthContext";
const SellerDashboard = () => {
  const { currentUser } = useAuth();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const getProducts = async (req, res) => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_SKILCENTA_URL
        }/skilcenta/api/v1/market/get/seller/products/${currentUser.uid}`
      );
      console.log(res);
      setProducts(res.data.products);
    } catch (err) {
      console.log(err);
      console.log(err.message);
    }
  };
  useEffect(() => {
    getProducts();
  }, [currentUser]);
  return (
    <div className="mt-20 bg-gray-50">
      <div className="flex">
        <div className="border-r bg-white w-60 h-screen p-4 shadow-sm hidden md:flex ">
          <div className="flex flex-col space-y-4 mt-10 w-full">
            <button
              onClick={() => navigate("/sellitem")}
              className="bg-[#FFD6BA] cursor-pointer w-full p-3 text-left rounded-lg shadow-sm  hover:shadow-md transition"
            >
              ➕ Sell Item
            </button>
            <button className="bg-[#EBFFD8] cursor-pointer w-full p-3 text-left rounded-lg shadow-sm  hover:shadow-md transition">
              📦 My Products
            </button>
          </div>
        </div>

        <div>
          <div className="md:hidden flex justify-center my-6 mt-20">
            <select
              name="dashboard-menu"
              className="p-3 rounded-lg border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-gray-400 text-base font-semibold bg-white"
              onChange={(e) => {
                if (e.target.value === "sell") {
                  navigate("/sellitem");
                } else if (e.target.value === "products") {
                  // e.g., navigate("/myproducts");
                }
              }}
              defaultValue=""
            >
              <option value="" disabled>
                Select
              </option>
              <option value="sell" className="bg-[#EBFFD8] ">
                ➕ Sell Item
              </option>
              <option value="products" className="bg-[#FFD6BA] ">
                📦 My Products
              </option>
            </select>
          </div>
          {/* products here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 w-full">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product._id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5  w-full h-fit"
                >
                  <div className="relative">
                    <img
                      src={product.productImageUrl}
                      alt="Product"
                      className="h-50 w-full object-cover rounded-md bg-gray-100"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.productName}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Your Name: {product.sellerName}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Your college: {product.sellerCollege}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Description: {product.productDescription}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Your Address: {product.sellerAddress}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Your Email: {product.sellerEmail}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Your Phone: {product.sellerPhone}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xl font-bold text-green-600">
                        ₹{product.productPrice}
                      </span>
                      {/* <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    Best Price
                  </span> */}
                    </div>
                    <a
                      href={`https://skilcenta.vercel.app/product/${product._id}`}
                    >
                      <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition">
                        Check Product
                      </button>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="flex justify-center">
                  <p className="text-center text-gray-400 text-lg font-medium py-12 ">
                    No products found
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
