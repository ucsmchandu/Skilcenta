import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const OrderPop = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const productName = params.get('product') || 'Your product';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-200">
      <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center max-w-lg w-full border-2 border-green-200">
        <img
          src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
          alt="Success"
          className="w-32 h-32 mb-6 animate-bounce"
        />
        <h1 className="text-4xl font-extrabold text-green-700 mb-2 text-center">Congratulations!</h1>
        <p className="text-xl text-gray-700 mb-4 text-center">
          <span className="font-semibold text-blue-700">{productName}</span> has been ordered successfully!
        </p>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Thank you for your purchase. You will receive a confirmation email soon.<br />
          For any queries, feel free to <Link to="/contact" className="text-blue-600 font-semibold hover:underline">contact us</Link>.
        </p>
        <Link to="/orders" className="mt-4">
          <button className="cursor-pointer bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:from-green-600 hover:to-blue-600 transition">
            Go to Orders
          </button>
        </Link>
      </div>
    </div>
  )
}

export default OrderPop