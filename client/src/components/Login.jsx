import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useValidate } from "../hooks/useValidate";

const Login = () => {
  const { showLogin, setShowLogin } = useAppContext();
  const [state, setState] = useState("login");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { validateForm } = useValidate(state);

  const handleSubmit = (e) => {
    e.preventDefault();

    // sent userData to validateForm
    const isValid = validateForm(userData);
    // preventing form from submitting
    if (!isValid) {
      return;
    }

    // otherwise print data
    console.log(userData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    showLogin && (
      <div
        onClick={() => setShowLogin(!showLogin)}
        className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center text-sm text-gray-600 bg-black/50"
      >
        <form
          onSubmit={handleSubmit}
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white"
          autoComplete="off"
        >
          <p className="text-2xl font-medium m-auto">
            <span className="text-indigo-500">User</span>
            {state === "login" ? "Login" : "Sign Up"}
          </p>
          {state === "register" && (
            <div className="w-full">
              <p>Name</p>
              <input
                onChange={handleChange}
                value={userData.name}
                name="name"
                placeholder="type here"
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
                type="text"
              />
            </div>
          )}
          <div className="w-full ">
            <p>Email</p>
            <input
              onChange={handleChange}
              value={userData.email}
              name="email"
              placeholder="type here"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
              type="email"
            />
          </div>
          <div className="w-full ">
            <p>Password</p>
            <input
              onChange={handleChange}
              value={userData.password}
              name="password"
              placeholder="type here"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
              type="password"
            />
          </div>
          {state === "register" ? (
            <p>
              Already have account?
              <span
                onClick={() => setState("login")}
                className="text-indigo-500 cursor-pointer"
              >
                click here
              </span>
            </p>
          ) : (
            <p>
              Create an account?
              <span
                onClick={() => setState("register")}
                className="text-indigo-500 cursor-pointer"
              >
                click here
              </span>
            </p>
          )}
          <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
            {state === "register" ? "Create Account" : "Login"}
          </button>
        </form>
      </div>
    )
  );
};

export default Login;
