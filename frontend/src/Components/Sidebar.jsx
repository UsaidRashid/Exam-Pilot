import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export default function Sidebar() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    let storedToken = localStorage.getItem("token");
    if (storedToken) {
      let decodedToken = jwtDecode(storedToken);
      setToken(decodedToken);
    }
  }, []);

  return (
    <div className="w-72 bg-gray-800 text-white h-full py-8 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex items-center mb-6">
        <img
          className="inline-block h-16 w-16 rounded-full ring-2 ring-gray-300 shadow-md"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="User Profile"
        />
        <div className="ml-4">
          <h1 className="text-xl font-semibold">Welcome</h1>
          <p className="text-sm text-gray-400">{token?.user?.name}</p>
        </div>
      </div>
      <div className="space-y-6">
        <div className="my-4">
          <div className="text-lg font-bold text-gray-300">Contact</div>
          <div className="text-gray-400">{token?.user?.contact}</div>
        </div>
        <div className="my-4">
          <div className="text-lg font-bold text-gray-300">Email</div>
          <div className="text-gray-400">{token?.user?.email}</div>
        </div>
      </div>
      <div className="mt-8">
        
      </div>
    </div>
  );
}
