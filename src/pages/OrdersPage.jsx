import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../contextApi/AuthContext";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

  const fetchOrders = async () => {
    if (!currentUser) return;
    try {
      setLoading(true);
      const res = await axios.get(
        `${
          import.meta.env.VITE_SKILCENTA_URL
        }/skilcenta/api/v1/market/get/ordered/product/${currentUser.uid}`
      );
      setOrders(res.data.products);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [currentUser]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#e0e7ff] to-[#f8fafc]">
        <div className="text-3xl text-indigo-700 font-extrabold animate-pulse">
          Loading your orders...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-20 p-6 bg-gradient-to-br from-[#e0e7ff] to-[#f8fafc] py-16 flex flex-col items-center">
      <h2 className="text-5xl font-extrabold text-indigo-900 mb-12 tracking-tight drop-shadow-lg text-center">
        <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Your Orders
        </span>
      </h2>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {orders.length === 0 ? (
          <div className="col-span-full flex flex-col items-center mt-20">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              alt="No orders"
              className="w-32 h-32 mb-6 opacity-80"
            />
            <div className="text-center text-gray-500 text-2xl mb-8 font-semibold">
              No orders found.
            </div>
            <Link to="/market">
              <button className="px-8 cursor-pointer py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg hover:from-blue-700 hover:to-indigo-700 transition text-lg">
                Go to Market
              </button>
            </Link>
          </div>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={
                    order.productImageUrl || "https://via.placeholder.com/300"
                  }
                  alt={order.productName || "Product"}
                  className="w-full h-42 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <span className="absolute top-3 right-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold shadow">
                  Ordered
                </span>
              </div>

              <div className="p-6 flex flex-col space-y-3">
                <h3 className="text-xl font-bold text-gray-900 text-center">
                  {order.productName}
                </h3>
                <p className="text-lg font-semibold text-green-600 text-center">
                  ₹{order.productPrice}
                </p>

                <div className="text-sm text-gray-600 space-y-1 text-center">
                  <p>
                    <span className="font-semibold text-gray-800">
                      Order ID:
                    </span>{" "}
                    <span className="font-mono">{order._id}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">
                      Ordered On:
                    </span>{" "}
                    {order.createdAt.split("T")[0]}
                  </p>
                   <p>
                    <span className="font-semibold text-gray-800">
                     Warranty:
                    </span>{" "}
                    {order.warranty}
                  </p>
                </div>

                <p className="text-sm text-gray-700 mt-2 text-center">
                  Our team will contact you within{" "}
                  <span className="font-semibold">3 days</span>
                </p>
                <div className="flex justify-center mt-4">
                  <Link to="/contact">
                    <button className="px-4 py-2 text-sm rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition cursor-pointer">
                      Support
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-16 text-center text-gray-400 text-sm">
        Need help?{" "}
        <Link
          to="/contact"
          className="text-indigo-600 underline hover:text-indigo-800"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default OrdersPage;
