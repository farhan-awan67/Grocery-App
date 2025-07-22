import { createContext, useContext, useEffect, useState } from "react";
import { dummyProducts } from "../assets/greencart_assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState({});
  const [showLogin, setShowLogin] = useState(false);
  const [userSearch, setUserSearch] = useState("");
  const currency = "$";

  console.log("dummy products", dummyProducts);

  const fetchAllProducts = async () => {
    setProducts(dummyProducts);
  };
  console.log("state products", products);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    console.log("✅ Products updated:", products);
  }, [products]);

  const addToCart = (id) => {
    let cartItem = structuredClone(cartData);
    console.log("Adding:", id);
    console.log("Before:", cartItem);

    if (cartItem[id]) {
      cartItem[id] += 1;
    } else {
      cartItem[id] = 1;
    }

    setCartData(cartItem);
    console.log("After:", cartItem); // ✅ logs new state
    toast.success("Added to cart");
  };

  const updateQuantity = (id, quanity) => {
    let cartItem = structuredClone(cartData);
    cartItem[id] = Number(quanity);
    setCartData(cartItem);
    toast.success("quanity updated");
  };

  const deleteItem = (id) => {
    let cartItem = structuredClone(cartData);
    if (cartItem[id]) {
      cartItem[id] -= 1;
      if (cartItem[id] === 0) {
        delete cartItem[id];
      }
    }
    setCartData(cartItem);
    toast.success("removed item");
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (let item in cartData) {
      totalCount += cartData[item];
    }
    return totalCount;
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    let productsCopy = products.slice();

    for (let item in cartData) {
      let itemInfo = productsCopy.find((product) => product._id == item);
      if (itemInfo) {
        totalAmount += itemInfo.offerPrice * cartData[item];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };
  getTotalAmount();

  const value = {
    user,
    setUser,
    products,
    setProducts,
    addToCart,
    updateQuantity,
    deleteItem,
    cartData,
    getCartCount,
    showLogin,
    setShowLogin,
    currency,
    userSearch,
    setUserSearch,
    getTotalAmount,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
