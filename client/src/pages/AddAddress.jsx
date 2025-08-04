import React, { useState } from "react";
import { assets } from "../assets/greencart_assets/assets";

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(address);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="mt-16 flex flex-col-reverse justify-between sm:flex-row">
      {/* left */}
      <form onSubmit={handleSubmit} className="w-full sm:basis-[40%] ">
        <h1 className="text-lg font-extrabold flex gap-1.5">
          add <span className="text-[#4ebf8b]">address</span>
        </h1>
        <div className="flex gap-2 mt-4 w-full">
          <input
            value={address.firstname}
            name="firstname"
            onChange={handleChange}
            className="text-[#62656b] outline-none w-full border p-1 rounded-sm border-[#d3daeb]"
            type="text"
            placeholder="firstname"
          />
          <input
            value={address.lastname}
            name="lastname"
            onChange={handleChange}
            className="text-[#62656b] outline-none w-full border p-1 rounded-sm border-[#d3daeb]"
            type="text"
            placeholder="lastname"
          />
        </div>

        <input
          value={address.email}
          name="email"
          onChange={handleChange}
          className="text-[#62656b] outline-none w-full border p-1 rounded-sm border-[#d3daeb] mt-4"
          type="email"
          placeholder="email"
        />

        <div className="flex gap-2 mt-4 w-full">
          <input
            value={address.street}
            name="street"
            onChange={handleChange}
            className="text-[#62656b] outline-none w-full border p-1 rounded-sm border-[#d3daeb]"
            type="text"
            placeholder="street"
          />
          <input
            value={address.city}
            name="city"
            onChange={handleChange}
            className="text-[#62656b] outline-none w-full border p-1 rounded-sm border-[#d3daeb]"
            type="text"
            placeholder="city"
          />
        </div>

        <div className="flex gap-2 mt-4 w-full">
          <input
            value={address.state}
            name="state"
            onChange={handleChange}
            className="text-[#62656b] outline-none w-full border p-1 rounded-sm border-[#d3daeb]"
            type="text"
            placeholder="state"
          />
          <input
            value={address.zipcode}
            name="zipcode"
            onChange={handleChange}
            className="text-[#62656b] outline-none w-full border p-1 rounded-sm border-[#d3daeb]"
            type="number"
            placeholder="zipcode"
          />
        </div>

        <div className="flex gap-2 mt-4 w-full">
          <input
            value={address.country}
            name="country"
            onChange={handleChange}
            className="text-[#62656b] outline-none w-full border p-1 rounded-sm border-[#d3daeb]"
            type="text"
            placeholder="country"
          />
          <input
            value={address.phone}
            name="phone"
            onChange={handleChange}
            className="text-[#62656b] outline-none w-full border p-1 rounded-sm border-[#d3daeb]"
            type="text"
            placeholder="phone"
          />
        </div>

        <button
          type="submit"
          className="bg-[#4ebf8b] px-2.5 py-2.5 w-full text-white rounded-sm mt-5 cursor-pointer"
        >
          add addres
        </button>
      </form>

      {/* right */}
      <div className="w-full sm:basis-[50%] mb-5 sm:mb-0 flex justify-center items-center">
        <img
          className=" object-cover"
          src={assets.add_address_iamge}
          alt="address image"
        />
      </div>
    </div>
  );
};

export default AddAddress;
