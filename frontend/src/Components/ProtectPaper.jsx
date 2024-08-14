import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function ProtectPaper({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("You must be logged in!");
    <Navigate to="/login" />;
    return;
  }

  const decodedToken = jwtDecode(token);
  if (decodedToken.user.type !== "Student") {
    alert("You are not authorized to give an exam!");
    <Navigate to="/" />;
    return;
  }

  return children;
}
