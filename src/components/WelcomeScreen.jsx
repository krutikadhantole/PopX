import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomeCard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-cream-50">
      {/* Card */}
      <div className="bg-[#F7F8F9] w-80 h-135 pt-75 p-6  shadow border border-gray-300 flex flex-col">
        {/* Text Section */}
        <div className="mb-6">
          <h1 className="text-lg font-semibold text-gray-900">
            Welcome to PopX
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit,
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-3">
          <button
            onClick={() => {
              navigate("/Signup");
            }}
            className="w-full py-2 rounded-md bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
          >
            Create Account
          </button>
          <button
            onClick={() => {
              navigate("/Login");
            }}
            className="w-full py-2 rounded-md bg-purple-200 text-gray-800 font-medium hover:bg-purple-300 transition"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
