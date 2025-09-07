import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";
import axios from "axios";

const Productlistings = ({ search }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SKILCENTA_URL}/skilcenta/api/v1/market/get/all/products`
      );
      // console.log(res.data.products);
      setProducts(res.data.products);
    } catch (err) {
      console.log("Error from productlistings.jsx ", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = search
    ? products.filter(
        (product) =>
          product.productName
            .toLowerCase()
            .includes(search.toLowerCase().trim()) ||
          product.sellerCollege
            .toLowerCase()
            .includes(search.toLowerCase().trim())
      )
    : products;
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-10  p-4">
      {loading ? (
        <div className="flex flex-col items-center py-12">
          <svg
            className="animate-spin h-10 w-10 text-blue-600 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            ></path>
          </svg>
          <span className="text-blue-700 font-semibold text-lg">Loading</span>
        </div>
      ) : filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <li key={product._id} className="w-full">
            <Productcard product={product} />
          </li>
        ))
      ) : (
        <p className="text-center text-gray-600 col-span-full">
          No products found.
        </p>
      )}
    </ul>
  );
};

export default Productlistings;
