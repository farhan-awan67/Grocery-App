import React, { useEffect, useState } from "react";
import { Link, Links } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { assets, dummyAddress } from "../assets/greencart_assets/assets";

const Cart = () => {
  const {
    getCartCount,
    products,
    cartData,
    currency,
    updateQuantity,
    getTotalAmount,
  } = useAppContext();
  const [showProdcuts, setShowproducts] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [address, setAddress] = useState(dummyAddress);
  const [selectedAddress, setSelectedAddress] = useState(address[0]);
  const [showAddress, setShowAddress] = useState(false);

  useEffect(() => {
    const matchedProducts = Object.keys(cartData)
      .map((id) => products.find((product) => product._id === id))
      .filter(Boolean); // Removes undefined if no match found

    setShowproducts(matchedProducts.length ? matchedProducts : null);
  }, [products, cartData]);

  console.log("products of cart page", address[0].city);

  const deleteItemFromCart = (id) => {
    let productsFromState = showProdcuts.slice();
    let productsAfterDeletion = productsFromState.filter(
      (product) => product._id !== id
    );
    setShowproducts(productsAfterDeletion || null);
  };

  return showProdcuts ? (
    <div className="flex flex-col md:flex-row mt-16">
      {/* left */}
      <div className="flex-1 max-w-4xl">
        <h1 className="text-3xl font-medium mb-6">
          Shopping Cart{" "}
          <span className="text-sm text-[#4fbf8b]">{getCartCount()} Item</span>
        </h1>

        <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
          <p className="text-left">Product Details</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>

        {showProdcuts &&
          showProdcuts.map((product, idx) => {
            return (
              <div
                key={idx}
                className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3"
              >
                <div className="flex items-center md:gap-6 gap-3">
                  <Link
                    to={`/products/${product.catrgory}/${product._id}`}
                    className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded"
                  >
                    <img
                      className="max-w-full h-full object-cover"
                      src={product.image[0]}
                      alt=""
                    />
                  </Link>
                  <div>
                    <p className="hidden md:block font-semibold">
                      {product.name}
                    </p>
                    <div className="font-normal text-gray-500/70">
                      <p>
                        Weight: <span>{product.weight || "N/A"}</span>
                      </p>
                      <div className="flex items-center">
                        <p>Qty:</p>
                        <select
                          onChange={(e) =>
                            updateQuantity(product._id, e.target.value)
                          }
                          value={cartData[product._id]}
                          className="outline-none"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* price */}
                <p className="flex justify-center items-center">
                  {currency}
                  {product.offerPrice * cartData[product._id]}
                </p>

                {/* button */}
                <button
                  onClick={() => deleteItemFromCart(product._id)}
                  className="cursor-pointer"
                >
                  <img
                    className="inline-block w-6 h-6"
                    alt="Remove item"
                    src={assets.remove_icon}
                  />
                </button>

                <Link
                  to={"/products"}
                  className="text-[#4fbf8b] mt-5 w-max flex text-sm gap-2 group"
                >
                  <img
                    className="w-4 group-hover:-translate-x-1 transition"
                    src={assets.arrow_right_icon_colored}
                    alt=""
                  />
                  Continue Shopping
                </Link>
              </div>
            );
          })}
      </div>

      {/* right */}
      <div className="max-w-90 w-full bg-gray-100 p-5 max-md:mt-16">
        <h2 className="text-xl md:text-2xl font-medium">Order Summary</h2>
        <hr class="border-gray-300 my-5" />
        <div className="mb-6">
          <p className="text-base font-medium uppercase">Delivery Address</p>
          <div className="relative flex justify-between items-start mt-2">
            <p className="text-gray-500">
              {selectedAddress
                ? `${selectedAddress.street},${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}`
                : "No address found"}
            </p>
            <button
              onClick={() => setShowAddress(!showAddress)}
              className="text-[#4fbf8b] hover:underline cursor-pointer"
            >
              Change
            </button>
            {showAddress && (
              <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                <p className="text-primary text-center cursor-pointer p-2 hover:bg-primary/10">
                  Add address
                </p>
              </div>
            )}
          </div>
          <p className="text-base font-medium uppercase mt-6">Payment Method</p>
          <select
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none"
          >
            <option value="COD">Cash On Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
        </div>
        <hr className="border-gray-300" />
        <div className="text-gray-500 mt-4 space-y-2">
          <p className="flex justify-between">
            <span>Price</span>
            <span>
              {currency}
              {getTotalAmount()}
            </span>
          </p>
          <p className="flex justify-between">
            <span>Shipping Fee</span>
            <span className="text-green-600">Free</span>
          </p>
          <p className="flex justify-between">
            <span>Tax (2%)</span>
            <span>
              {currency}
              {(getTotalAmount() * 2) / 100}
            </span>
          </p>
          <p className="flex justify-between text-lg font-medium mt-3">
            <span>Total Amount:</span>
            <span>
              {currency}
              {getTotalAmount() + (getTotalAmount() * 2) / 100}
            </span>
          </p>
        </div>
        <button className="w-full py-3 mt-6 cursor-pointer bg-[#4fbf8b] text-white font-medium hover:bg-primary-dull transition">
          {paymentMethod === "COD" ? "Place Order" : "Proceed to Checkout"}
        </button>
      </div>
    </div>
  ) : (
    <div className="flex items-center mt-32">
      <p className="w-full text-center">No product in cart</p>
    </div>
  );
};

export default Cart;
