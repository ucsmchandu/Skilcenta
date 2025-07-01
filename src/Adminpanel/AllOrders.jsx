import React, { useEffect, useState } from "react";
import { firestore } from "../server/Firebase";
import { collection, getDocs } from "firebase/firestore";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const querySnapshot = await getDocs(collection(firestore, "orders"));
      const ordersArr = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setOrders(ordersArr);
    };
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen mt-20 bg-gray-50 py-10 px-2 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">All Orders</h2>
      <div className="w-full max-w-6xl overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-3">Product Id</th>  
              <th className="py-2 px-3">Product</th>
              <th className="py-2 px-3">Image</th>
              <th className="py-2 px-3">Price</th>
              <th className="py-2 px-3">Buyer Name</th>
              <th className="py-2 px-3">Buyer Email</th>
              <th className="py-2 px-3">Buyer Phone</th>
              <th className="py-2 px-3">Buyer Address</th>
              <th className="py-2 px-3">Branch</th>
              <th className="py-2 px-3">Year</th>
              <th className="py-2 px-3">Buyer ID</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan={10} className="text-center py-8 text-gray-400">
                  No orders found.
                </td>
              </tr>
            ) : (
              orders.map(order => (
                <tr key={order.id} className="border-b">
                    <td className="py-2 px-3">{order.productId}</td>
                  <td className="py-2 px-3">{order.product}</td>
                  <td className="py-2 px-3">
                    <img
                      src={order.productImg || "https://via.placeholder.com/60"}
                      alt={order.product}
                      className="h-12 w-12 object-cover rounded"
                    />
                  </td>
                  <td className="py-2 px-3">₹{order.price}</td>
                  <td className="py-2 px-3">{order.buyerName}</td>
                  <td className="py-2 px-3">{order.buyerEmail}</td>
                  <td className="py-2 px-3">{order.buyerPhone}</td>
                  <td className="py-2 px-3">{order.buyerAddress}</td>
                  <td className="py-2 px-3">{order.buyerBranch}</td>
                  <td className="py-2 px-3">{order.buyerYear}</td>
                  <td className="py-2 px-3">{order.buyerId}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;