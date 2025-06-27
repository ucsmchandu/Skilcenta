import React from "react";
import Products from "../Data/Products.json";
import Productcard from "./Productcard";
const Productlistings = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-10 mt-10 p-4">
      {Products.map((product) => (
        <li key={product.id} className="w-full">
          <Productcard {...product} />
        </li>
      ))}
    </ul>
  );
};

export default Productlistings;
