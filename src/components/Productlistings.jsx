import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";
import { firestore } from "../server/Firebase";
import { collection,getDocs } from "firebase/firestore";
    

const Productlistings = ({search}) => {
  const [products,setProducts]=useState([]);

  const getProducts=async()=>{
    const docRef=await getDocs(collection(firestore,"products"));
    const productsFromFireStore=docRef.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
      }));
      setProducts(productsFromFireStore);
  }
  useEffect(()=>{
    getProducts();
  },[]);

  const filteredProducts=search ? 
  products.filter((product)=>(
    product.productName.toLowerCase().includes(search.toLowerCase().trim())
  )):products;
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-10  p-4">
      {
        filteredProducts.length>0 ? (
          filteredProducts.map((product)=>(
            <li key={product.id} className="w-full">
              <Productcard {...product} />
            </li>
          ))
        ):(
          <p className="text-center text-gray-600 col-span-full">No products found.</p>
        )
      }
    </ul>
  );
};

export default Productlistings;
