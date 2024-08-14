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
    <div>
      <div className="w-33%">
        <div className="flex">
          <img
            className="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="mx-3">
            <h1>Name</h1>
            <p>{token?.user?.name}</p>
          </div>
        </div>
        <div className="my-4">
          <div className="text-lg font-bold">Contact</div>
          <div>{token?.user?.contact}</div>
        </div>
        <div className="my-4">
          <div className="text-lg font-bold">Email</div>
          <div>{token?.user?.email}</div>
        </div>
      </div>
    </div>
  );
}
