import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Login from "./components/Login";
import AllProducts from "./pages/AllProducts";
import SpecificProduct from "./pages/SpecificProduct";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <Navbar />

      <Toaster />

      <div className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:pathName" element={<Products />} />
          <Route
            path="/products/:category/:productId"
            element={<SpecificProduct />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Login />
      </div>
      <Footer />
    </div>
  );
};

export default App;
