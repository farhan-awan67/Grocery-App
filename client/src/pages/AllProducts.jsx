import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const { products, userSearch, setUserSearch } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(userSearch.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [userSearch, products]);

  return (
    <div className="mt-16 flex flex-col">
      {/* title */}
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl font-medium uppercase">All products</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      {/* products */}
      {filteredProducts.length === 0 ? (
        <p className="text-center mt-12">Product not found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
          {filteredProducts.map((product) => (
            <Link
              key={product._id}
              to={`/products/${product.category}/${product._id}`}
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
