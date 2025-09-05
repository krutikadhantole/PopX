import React from "react";
import girl from "../assets/girl.jpg";

const AccountSettings = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Card */}
      <div className="bg-[#F7F8F9] w-80 h-135 max-w-md border border-gray-300 shadow">
        {/* Header */}
        <div className="px-6 py-4 bg-white ">
          <h2 className="text-lg font-semibold">Account Settings</h2>
        </div>

        {/* Profile Info */}
        <div className="px-6 py-4 flex items-start space-x-4 ">
          <img
            src={girl}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />

          {/* User Info */}
          <div>
            <h3 className="font-semibold">Marry Doe</h3>
            <p className="text-gray-500 text-sm">Marry@gmail.com</p>
          </div>
        </div>

        {/* Bio */}
        <div className="px-6 py-4 text-sm text-gray-600">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
