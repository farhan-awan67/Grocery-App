import React, { use } from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";

const BestSeller = () => {
  const { products } = useAppContext();
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-4">Best Sellers</h2>
      {/* cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {products
          .filter((product) => product.inStock) // Step 1: Filter in-stock products
          .slice(0, 5) // Step 2: Take the first 5
          .map(
            (
              product,
              idx // Step 3: Render each ProductCard
            ) => (
              <ProductCard key={idx} product={product} />
            )
          )}
      </div>
    </div>
  );
};

export default BestSeller;
