import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/greencart_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const SpecificProduct = () => {
  const { products, currency } = useAppContext();
  const { productId } = useParams();
  const [specificProduct, setSpecificProduct] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (products && products.length > 0) {
      const product = products.find((product) => product._id === productId);
      setSpecificProduct(product || null);
      // checking for image
      if (product && product.image && product.image.length > 0) {
        setImage(product.image[0]);
      }
    }
  }, [products, productId]);

  if (!specificProduct) {
    return <p className="text-center mt-12">Product not found.</p>;
  }

  return (
    <div className="mt-12">
      {/* product */}
      {specificProduct && (
        <div
          key={specificProduct._id}
          className="flex flex-col md:flex-row gap-16 mt-4"
        >
          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              <div className="border p-1 max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer">
                {specificProduct.image.map((img, idx) => {
                  return (
                    <img
                      onClick={(e) => setImage(img)}
                      // className="shadow-lg mb-3"
                      className={`shadow-lg rounded cursor-pointer ${
                        specificProduct.image.length > 1 ? "mb-3" : ""
                      } ${image === img ? "ring-2 ring-[#2222]" : ""}`}
                      key={idx}
                      alt="other images"
                      src={img}
                    />
                  );
                })}
              </div>
            </div>
            <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
              <img alt="Selected product" src={image} />
            </div>
          </div>

          <div className="text-sm w-full md:w-1/2">
            <h1 className="text-3xl font-medium">{specificProduct.name}</h1>
            <div className="flex items-center gap-0.5 mt-1">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <img
                    key={i}
                    className="w-3 md:w-3.5"
                    src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                    alt="star_icon"
                  />
                ))}
              <p className="text-base ml-2">(4)</p>
            </div>
            <div className="mt-6">
              <p className="text-gray-500/70 line-through">
                MRP: {currency}
                {specificProduct.price}
              </p>
              <p className="text-2xl font-medium">
                MRP: {currency}
                {specificProduct.offerPrice}
              </p>
              <span className="text-gray-500/70">(inclusive of all taxes)</span>
            </div>
            <p className="text-base font-medium mt-6">About Product</p>
            <ul className="list-disc ml-4 text-gray-500/70">
              {specificProduct.description.map((description, idx) => {
                return <li key={idx}>{description}</li>;
              })}
            </ul>
            <div className="flex items-center mt-10 gap-4 text-base">
              <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
                Add to Cart
              </button>
              <button className="w-full py-3.5 cursor-pointer font-medium bg-[#4fbf8b] text-white hover:bg-primary-dull transition">
                Buy now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* related products */}
      <RelatedProducts />
    </div>
  );
};

export default SpecificProduct;
