import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/greencart_assets/assets";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, getCartCount } = useAppContext();
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to="/" onClick={() => setOpen(!open)}>
        <img className="h-7 sm:h-9" src={assets.logo} alt="Logo" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center sm:gap-6 md:gap-8">
        {/* seller dashboard */}
        <Link
          to={"/seller-dashboard"}
          className="border border-[#E1D3D7] py-1 px-2 rounded-full text-[#B28682] text-sm whitespace-nowrap"
        >
          {" "}
          seller dashboard
        </Link>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">All Products</NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="search_icon" />
        </div>

        <div className="relative cursor-pointer">
          <img className="w-5 h-5" src={assets.cart_icon} alt="cart_icon" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>

        {user ? (
          <div className="group relative">
            <img src={assets.profile_icon} alt="profile" className="w-4 h-4" />
            <ul className="hidden group:hover-block w-8 rounded bg-[#FFFFFF]">
              <li>Products</li>
              <li>Logout</li>
            </ul>
          </div>
        ) : (
          <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
            Login
          </button>
        )}
      </div>

      <div className="flex sm:hidden gap-7 items-center">
        <div className="relative cursor-pointer">
          <img className="w-5 h-5" src={assets.cart_icon} alt="cart_icon" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>
        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden cursor-pointer"
        >
          {/* Menu Icon SVG */}
          <img src={assets.menu_icon} alt="menu_icon" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[80px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <NavLink to="/" className="block">
          Home
        </NavLink>
        <NavLink to="/about" className="block">
          All Products
        </NavLink>
        <NavLink to="/contact" className="block">
          Contact
        </NavLink>
        <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
