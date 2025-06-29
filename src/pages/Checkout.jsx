import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from '../server/Firebase'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { Link,useNavigate } from 'react-router-dom'
const Checkout = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
    const Navigate=useNavigate();

    const buyProduct=()=>{
        Navigate(`/BuyProduct?name=${product.productName}&cost=${product.cost}`);
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
      console.log(value.docs[0].data())
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
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-gray-600">Loading product...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-red-500">Product not found.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-10">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row items-center gap-8">
        <img
          src={product.img || "https://via.placeholder.com/150"}
          alt={product.productName}
          className="w-48 h-48 object-cover rounded-xl border-4 border-indigo-200 shadow"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-indigo-800 mb-2">{product.productName}</h2>
          <p className="text-lg text-gray-600 mb-2"><span className="font-semibold">Sold By:</span> {product.soldBy}</p>
          <p className="text-lg text-gray-600 mb-2"><span className="font-semibold">Cost:</span> ₹{product.cost}</p>
          <p className="text-gray-700 mt-4"><span className="font-semibold">Description:</span>{product.description}</p>
        </div>
        <div>
            <button 
            onClick={()=>buyProduct()}
            className='p-1 py-2 cursor-pointer px-3 bg-blue-600 text-white rounded-lg'>
                Proceed to Buy
            </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout