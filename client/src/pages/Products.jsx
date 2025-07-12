import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { pathName } = useParams();
  const { products } = useAppContext();
  const [product, setProduct] = useState([]);
  const productWithPathname = products.filter(
    (product) => product.category === pathName
  );
  useEffect(() => {
    setProduct(productWithPathname);
  }, [pathName]);
  return (
    <div className="mt-16">
      <div class="flex flex-col items-end w-max">
        <p class="text-2xl font-medium">ORGANIC VEGGIES</p>
        <div class="w-16 h-0.5 bg-[#4fbf8b] rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
        {product.map((product, idx) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
