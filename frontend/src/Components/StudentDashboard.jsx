import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function StudentDashboard() {
  const navigate = useNavigate();
  return (
    <>
      <div className=' bg-[url("./public/assets/dasboardBackground.jpeg")] bg-no-repeat bg-cover w-full h-screen'>
        <div className="flex flex-row justify-content-evenly mt-12">
          <div className=" ">
            <Sidebar />
          </div>
          <div>
            <button className="" onClick={() => navigate("/upcoming-exams")}>
              Upcoming Exams!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
