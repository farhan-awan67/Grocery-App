import { createContext, useContext, useEffect, useState } from "react";
import { dummyProducts } from "../assets/greencart_assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState({});

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

  const updateCart = (id) => {
    let cartItem = structuredClone(cartData);
    cartItem[id] += 1;
    setCartData(cartItem);
    toast.success("cart updated");
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
    let count = 0;
    count = Object.keys(cartData || {}).length;
    return count;
  };

  const value = {
    user,
    setUser,
    products,
    setProducts,
    addToCart,
    updateCart,
    deleteItem,
    cartData,
    getCartCount,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
