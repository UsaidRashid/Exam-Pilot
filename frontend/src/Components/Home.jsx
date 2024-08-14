import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-emerald-500 to-teal-400">
      <h1 className="text-white text-5xl font-bold">Welcome to Exam Pilot</h1>
      <div className="logo-container my-10">
        <img src="assets/favicon.jpg" alt="Exam Pilot Logo" className="logo" />
      </div>
      <button className="get-started-btn " onClick={() => navigate("/login")}>
        Get Started
      </button>
    </div>
  );
}
