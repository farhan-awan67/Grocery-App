import { useState } from "react";
import { assets } from "../assets/greencart_assets/assets";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(0);
  const { cartData, addToCart, updateCart, deleteItem } = useAppContext();

  return (
    product && (
      <div className="border border-gray-500/20 rounded-md max-w-54 md:px-4 px-3 py-2">
        <div className="group cursor-pointer flex items-center justify-center px-2">
          <img
            className="group-hover:scale-105 transition max-w-26 md:max-w-36"
            src={product?.image[0]}
            alt={product?.name}
          />
        </div>
        <div className="text-gray-500/60 text-sm">
          <p>{product?.category}</p>
          <p className="text-gray-700 font-medium text-lg truncate w-full">
            {product?.name}
          </p>
          <div className="flex items-center gap-0.5">
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
            <p>(4)</p>
          </div>
          <div className="flex items-end justify-between mt-3">
            <p className="md:text-xl text-base font-medium text-indigo-500">
              {import.meta.env.VITE_CURRENCY}
              {product?.offerPrice}{" "}
              <span className="text-gray-500/60 md:text-sm text-xs line-through">
                {import.meta.env.VITE_CURRENCY}
                {product?.price}
              </span>
            </p>
            <div
              onClick={(e) => e.stopPropagation()}
              className="text-indigo-500"
            >
              {!cartData[product._id] ? (
                <button
                  className="cursor-pointer flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 md:w-[80px] w-[64px] h-[34px] rounded text-indigo-600 font-medium"
                  onClick={() => addToCart(product._id)}
                >
                  <img src={assets.cart_icon} alt="cart_icon" />
                  Add
                </button>
              ) : (
                <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-indigo-500/25 rounded select-none">
                  <button
                    onClick={() => deleteItem(product._id)}
                    className="cursor-pointer text-md px-2 h-full"
                  >
                    -
                  </button>
                  <span className="w-5 text-center">
                    {cartData[product._id]}
                  </span>
                  <button
                    onClick={() => addToCart(product._id)}
                    className="cursor-pointer text-md px-2 h-full"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;
