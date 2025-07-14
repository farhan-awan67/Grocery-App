import React from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const { products } = useAppContext();
  return (
    <div className="mt-16 flex flex-col">
      {/* title */}
      <div class="flex flex-col items-end w-max">
        <p class="text-2xl font-medium uppercase">All products</p>
        <div class="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      {/* products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {products.map((product, key) => {
          return <ProductCard product={product} key={key} />;
        })}
      </div>
    </div>
  );
};

export default AllProducts;
