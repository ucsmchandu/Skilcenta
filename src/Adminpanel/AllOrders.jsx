import React, { useEffect, useState } from "react";
import axios from "axios";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try{
        const res=await axios.get(`${import.meta.env.VITE_SKILCENTA_URL}/skilcenta/api/v1/market/all/orders`);
        // console.log(res);
        setOrders(res.data.orders);
      }catch(err){
        console.log(err);
        console.log(err.message);
        return;
      }
    };
    fetchOrders();
  }, []);

  // Filter orders by productId, order id, or buyerId
  const filteredOrders = orders.filter((order) =>
    (order.productId && order.productId.toString().toLowerCase().includes(search.toLowerCase().trim())) ||
    (order._id && order._id.toString().toLowerCase().includes(search.toLowerCase().trim())) ||
    (order.buyerId && order.buyerId.toString().toLowerCase().includes(search.toLowerCase().trim()))||
    (order.buyerName && order.buyerName.toString().toLowerCase().includes(search.toLowerCase().trim()))||
    (order.sellerName && order.sellerName.toString().toLowerCase().includes(search.toLowerCase().trim()))||
    (order.sellerId && order.sellerId.toString().toLowerCase().includes(search.toLowerCase().trim()))
  );

  return (
    <div className="min-h-screen mt-20 bg-gray-50 py-10 px-2 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">All Orders</h2>
      <div className="w-full max-w-6xl mb-6 flex justify-end">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by Product ID, Order ID, or Buyer ID"
          className="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-xs"
        />
      </div>
      <div className="w-full max-w-6xl overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-3">Ordered Date</th>  
              <th className="py-2 px-3">Product Id</th>  
              <th className="py-2 px-3">Order Id</th> 
                <th className="py-2 px-3">Buyer ID</th>
                <th className="py-2 px-3">seller Id</th>
              <th className="py-2 px-3">Product</th>
              <th className="py-2 px-3">Price</th>
              <th className="py-2 px-3">Buyer Name</th>
              <th className="py-2 px-3">Buyer Email</th>
              <th className="py-2 px-3">Buyer Phone</th>
              <th className="py-2 px-3">Buyer Address</th>
              <th className="py-2 px-3">Branch</th>
              <th className="py-2 px-3">Year</th>
              <th className="py-2 px-3">seller name</th>
             <th className="py-2 px-3">Image</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan={12} className="text-center py-8 text-gray-400">
                  No orders found.
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <tr key={order._id} className="border-b">
                  <td className="py-2 px-3">{order.createdAt.split("T")[0]}</td>
                  <td className="py-2 px-3">{order.productId}</td>
                  <td className="py-2 px-3">{order._id}</td>
                    <td className="py-2 px-3">{order.buyerId}</td>
                    <td className="py-2 px-3">{order.sellerId}</td>
                  <td className="py-2 px-3">{order.productName}</td>
                  <td className="py-2 px-3">₹{order.productPrice}</td>
                  <td className="py-2 px-3">{order.buyerName}</td>
                  <td className="py-2 px-3">{order.buyerEmail}</td>
                  <td className="py-2 px-3">{order.buyerPhone}</td>
                  <td className="py-2 px-3">{order.buyerAddress}</td>
                  <td className="py-2 px-3">{order.buyerBranch}</td>
                  <td className="py-2 px-3">{order.buyerYear}</td>
                  <td className="py-2 px-3">{order.sellerName}</td>
                 <td className="py-2 px-3">
                    <img
                      src={order.productImageUrl || "https://via.placeholder.com/60"}
                      alt={order.productName}
                      className="h-12 w-12 object-cover rounded"
                    />
                  </td>
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