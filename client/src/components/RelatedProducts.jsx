import React, { useEffect, useMemo, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Link, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const RelatedProducts = () => {
  const { products } = useAppContext();
  const { category, productId } = useParams();
  const relatedProduct = useMemo(() => {
    return products?.filter((product) => product.category === category) || [];
  }, [products, category]);

  if (relatedProduct.length < 0) {
    return <p className="text-center mt-12">Product not found.</p>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  return (
    <div className="flex flex-col items-center mt-20">
      {/* title */}
      <div className="flex flex-col items-center w-max">
        <p className="text-3xl font-medium">Related Products</p>
        <div className="w-20 h-0.5 bg-[#4fbf8b] rounded-full mt-2"></div>
      </div>

      {/* products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6 w-full">
        {relatedProduct &&
          relatedProduct.map((product) => {
            return (
              <Link
                key={product._id}
                to={`/products/${product.category}/${product._id}`}
              >
                <ProductCard product={product} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default RelatedProducts;
