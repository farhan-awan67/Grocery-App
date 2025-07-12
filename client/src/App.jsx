import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Navbar />

      <Toaster />

      <div className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:pathName" element={<Products />} />
        </Routes>

        <Login />
      </div>
      <Footer />
    </div>
  );
};

export default App;
