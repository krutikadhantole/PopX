import React from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/AccountSetting");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Card */}
      <div className="bg-[#F7F8F9]e w-80 h-135  p-6  shadow border border-gray-300">
        <h2 className="text-2xl w-2/3 font-semibold mb-4">
          Create your PopX account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-2">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name<span className="text-purple-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className=" w-full border rounded-md px-3  focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Phone number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone number<span className="text-purple-600">*</span>
            </label>
            <input
              type="text"
              placeholder="*******"
              className="mt-1 w-full border rounded-md px-3  focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address<span className="text-purple-600">*</span>
            </label>
            <input
              type="email"
              placeholder="MarryDoe@gmail.com"
              className="mt-1 w-full border rounded-md px-3  focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password<span className="text-purple-600">*</span>
            </label>
            <input
              type="password"
              placeholder="Marry Doe"
              className="mt-1 w-full border rounded-md px-3  focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Company name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company name
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="mt-1 w-full border rounded-md px-3  focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Radio buttons */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Are you an Agency?<span className="text-purple-600">*</span>
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  defaultChecked
                  className="text-purple-600 focus:ring-purple-500"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  className="text-purple-600 focus:ring-purple-500"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Submit button */}
          <button
            onClick={() => {
              navigate("/AccountSetting");
            }}
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition mt-5 mb-0"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
