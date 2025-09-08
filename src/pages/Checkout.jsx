import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contextApi/AuthContext";

const Checkout = () => {
  const { id } = useParams();
  // console.log(id);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const buyProduct = () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
    navigate(
      `/BuyProduct?id=${id}&name=${product.productName}&cost=${product.productPrice}`
    );
  };
  const getProduct = async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SKILCENTA_URL}/skilcenta/api/v1/market/get/product/${id}`
      );
      // console.log(res);
      setProduct(res.data.product);
    } catch (err) {
      console.log(err);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
        <div className="text-xl text-blue-700 font-semibold">
          Loading product...
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
        <div className="text-xl text-red-600 font-semibold">
          Product not found.
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="text-md min-h-screen mt-20 md:mt-10 flex items-center justify-center bg-gray-100 py-10">
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-12  ">
          <img
            src={product.productImageUrl || "https://via.placeholder.com/300"}
            alt={product.productName}
            className="w-80 h-auto object-cover rounded-2xl border-4 border-gray-400 shadow-lg transition-transform hover:scale-105"
          />
          <div className="flex-1 ">
            <h2 className="text-2xl font-light text-black mb-4 border-2 border-cyan-200 rounded p-1 bg-cyan-100">
              {product.productName}
            </h2>
            <hr className="border-dashed mb-3" />
           <div className="border-3 border-[#d5f4c5] p-2 rounded-lg bg-[#ECFAE5] text-white shadow-md mb-2">
             <p className="text-lg text-gray-800 mb-3">
              <span className="font-semibold text-gray-800">Seller:</span>
              <span className="font-semibold  text-gray-500  ml-2">
                {product.sellerName}
              </span>
            </p>
            <p className="text-lg text-gray-800 mb-3">
              <span className="font-semibold text-gray-800">Cost:</span>
              <span className="font-semibold text-emerald-700 ml-2 text-xl">
                ₹{product.productPrice}
              </span>
            </p>
            <p className="text-lg text-gray-800 mb-3">
              <span className="font-semibold text-gray-800">Description:</span>
              <span className="font-medium text-gray-500 ml-2">
                {product.productDescription}
              </span>
            </p>
            <p className="text-lg text-gray-800 mb-3">
              <span className="font-semibold text-gray-800">
                Seller Address:
              </span>
              <span className="font-medium text-gray-500 ml-2">
                {product.sellerAddress}
              </span>
            </p>
            <p className="text-lg text-gray-800 mb-3">
              <span className="font-semibold text-gray-800">
                Seller college:
              </span>
              <span className="font-medium text-gray-500 ml-2">
                {product.sellerCollege}
              </span>
            </p>
           </div>
            <span className="font-medium text-red-600 ml-2">
               Payment Mode: Only Cash On Delivery(COD)
              </span>
            <div className="mt-6 flex items-center bg-blue-50 rounded-lg p-3">
              <img
                src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1751291333/info_fbbhkq.png"
                className="h-6 w-6 mr-3"
                alt="info"
              />
              <p className="text-blue-900">
                For product queries, please{" "}
                <Link
                  to="/contact"
                  className="text-blue-600 hover:underline font-semibold "
                >
                  contact us
                </Link>
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={buyProduct}
                className="px-7 py-2 cursor-pointer bg-gradient-to-r from-yellow-300 to-yellow-400 text-black rounded-xl font-medium shadow-md hover:shadow-lg"
              >
                Proceed to Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
