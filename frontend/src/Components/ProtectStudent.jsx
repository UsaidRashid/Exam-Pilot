import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function ProtectStudent({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("You must be logged in!");
    return <Navigate to="/login" />;
  }

  const decodedToken = jwtDecode(token);
  if (decodedToken.user.type !== "Student") {
    alert("You are not authorized!");
    return <Navigate to="/" />;
  }

  return children;
}
