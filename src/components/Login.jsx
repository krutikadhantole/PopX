import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/AccountSetting");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cream-50">
      <div className="bg-[#F7F8F9] w-80 h-135 p-6  shadow border border-gray-300 flex flex-col">
        <>
          <div className="mb-6">
            <h1 className="text-lg w-1/2 font-semibold text-gray-900">
              Sign in to your PopX account
            </h1>
            <p className="text-sm w-2/3 text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-purple-600">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-purple-600">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              onClick={() => navigate("/AccountSetting")}
              className="w-full py-2 rounded-md bg-gray-300 text-gray-700 font-medium hover:bg-purple-400 transition"
            >
              Login
            </button>
          </form>
        </>
      </div>
    </div>
  );
};

export default Login;
