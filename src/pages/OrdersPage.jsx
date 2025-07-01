import React, { useEffect, useState } from 'react'
import { firestore } from '../server/Firebase'
import { collection, getDocs, where, query } from 'firebase/firestore';
import { auth } from '../server/Firebase';
import { Link } from 'react-router-dom';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    setLoading(true);
    const q = query(
      collection(firestore, "orders"),
      where("buyerId", "==", auth.currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    const ordersArr = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setOrders(ordersArr);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
        <div className="text-2xl text-indigo-700 font-bold animate-pulse">Loading orders...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-12 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-indigo-800 mb-10 tracking-tight drop-shadow-lg">Your Orders</h2>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {orders.length === 0 ? (
          <div className='col-span-full flex flex-col items-center mt-16'>
            <div className="text-center text-gray-500 text-xl mb-6">No orders found.</div>
            <Link to="/market" className=''>
              <button className='px-6 cursor-pointer py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow hover:from-blue-700 hover:to-indigo-700 transition'>
                Go to Market
              </button>
            </Link>
          </div>
        ) : (
          orders.map(order => (
            <div key={order.id} className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center border-2 border-indigo-100 hover:shadow-indigo-200 transition">
              <img
                src={order.productImg || "https://via.placeholder.com/300"}
                alt={order.product || "Product"}
                className="w-48 h-48 object-cover rounded-2xl mb-6 border-4 border-indigo-200 shadow"
              />
              <h3 className="text-2xl font-bold text-indigo-700 mb-2 text-center">{order.product}</h3>
              <p className="text-lg text-gray-700 mb-1 text-center">
                <span className="font-semibold text-indigo-600">Cost:</span> <span className="text-green-700 font-bold">₹{order.price}</span>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrdersPage;