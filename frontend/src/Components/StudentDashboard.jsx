import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className='bg-[url("./public/assets/dasboardBackground.jpeg")] bg-no-repeat bg-cover w-full h-screen flex'>
      <Sidebar />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-row justify-between w-3/4 mb-16">
          <div className="w-1/2 mx-4 p-8 bg-white/50 backdrop-blur-lg shadow-xl rounded-lg text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Exams Given</h2>
            <p className="text-2xl text-gray-600">12</p>
          </div>
          <div className="w-1/2 mx-4 p-8 bg-white/50 backdrop-blur-lg shadow-xl rounded-lg text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Average Score</h2>
            <p className="text-2xl text-gray-600">85%</p>
          </div>
        </div>

        <button
          className="mt-8 px-10 py-5 bg-blue-600 text-white text-2xl font-semibold rounded-full shadow-lg transform transition duration-500 hover:bg-blue-700 hover:scale-105"
          onClick={() => navigate("/upcoming-exams")}
        >
          Go to Upcoming Exams!
        </button>
      </div>
    </div>
  );
}
