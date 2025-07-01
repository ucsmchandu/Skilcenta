import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { firestore } from '../server/Firebase'
import { collection, getDocs, where, query } from 'firebase/firestore'


const Checkout = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();

  const buyProduct = () => {
    Navigate(`/BuyProduct?id=${id}&name=${product.productName}&cost=${product.cost}`);
  }

  const getProduct = async (id) => {
    setLoading(true);
    const docRef = query(
      collection(firestore, 'products'),
      where('id', '==', id)
    );
    const value = await getDocs(docRef);
    if (!value.empty) {
      setProduct(value.docs[0].data());
    } else {
      setProduct(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    getProduct(id)
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
        <div className="text-xl text-blue-700 font-semibold">Loading product...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
        <div className="text-xl text-red-600 font-semibold">Product not found.</div>
      </div>
    );
  }

  return (
    <>
    <div className="min-h-screen mt-20 md:mt-0 flex items-center justify-center bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] py-10">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-12 border-2 border-blue-100">
        <img
          src={product.img || "https://via.placeholder.com/300"}
          alt={product.productName}
          className="w-80 h-80 object-cover rounded-2xl border-4 border-blue-300 shadow-lg transition-transform hover:scale-105"
        />
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-4">{product.productName}</h2>
          <p className="text-xl text-gray-700 mb-3">
            <span className="font-semibold text-blue-700">Owner:</span>
            <span className="font-semibold text-gray-900 ml-2">{product.soldBy}</span>
          </p>
          <p className="text-xl text-gray-700 mb-3">
            <span className="font-semibold text-blue-700">Cost:</span>
            <span className="font-semibold text-green-700 ml-2 text-2xl">₹{product.cost}</span>
          </p>
          <p className="text-lg text-gray-700 mb-3">
            <span className="font-semibold text-blue-700">Description:</span>
            <span className="font-medium text-gray-900 ml-2">{product.description}</span>
          </p>
          <p className="text-lg text-gray-700 mb-3">
            <span className="font-semibold text-blue-700">Contact Owner:</span>
            <span className="font-medium text-gray-900 ml-2">{product.email}</span>
          </p>
           <p className="text-lg text-gray-700 mb-3">
            <span className="font-semibold text-blue-700">Owner Address:</span>
            <span className="font-medium text-gray-900 ml-2">{product.address}</span>
          </p>
          <div className='mt-6 flex items-center bg-blue-50 rounded-lg p-3'>
            <img src='https://res.cloudinary.com/dllvcgpsk/image/upload/v1751291333/info_fbbhkq.png' className='h-6 w-6 mr-3' alt="info" />
            <p className='text-blue-900'>
              If the owner does not respond, please{' '}
              <Link to="/contact" className='text-blue-600 hover:underline font-semibold '>contact us</Link>
            </p>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              onClick={buyProduct}
              className="px-8 py-3 cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition"
            >
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Checkout