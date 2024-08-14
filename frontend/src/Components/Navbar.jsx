import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Navbar() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  useEffect(() => {
    let storedToken = localStorage.getItem("token");
    if (storedToken) {
      let decodedToken = jwtDecode(storedToken);
      setToken(decodedToken);
    }
  }, []);

  return (
    <div className="shadow-lg">
      <nav className="flex w-full h-20 py-4 bg-gradient-to-r from-blue-900 to-indigo-600 text-white">
        <div className="container mx-auto flex justify-between items-center px-8">
          <div className="text-xl font-bold">
            <Link to="/">Exam-Pilot</Link>
          </div>
          <ul className="flex space-x-8 items-center">
            {token?.user?.type === "Teacher" ? (
              <Link to="/teacher-dashboard">
                <li className="px-4 py-2 rounded-full transition duration-300 hover:bg-indigo-500 hover:shadow-lg">
                  Dashboard
                </li>
              </Link>
            ) : (
              <Link to="/student-dashboard">
                <li className="px-4 py-2 rounded-full transition duration-300 hover:bg-indigo-500 hover:shadow-lg">
                  Dashboard
                </li>
              </Link>
            )}
            <Link to={"/upcoming-exams"}>
              <li className="px-4 py-2 rounded-full transition duration-300 hover:bg-indigo-500 hover:shadow-lg">
                Upcoming Exams
              </li>
            </Link>
            <li
              className="px-4 py-2 rounded-full cursor-pointer transition duration-300 hover:bg-red-500 hover:shadow-lg"
              onClick={() => {
                localStorage.clear();
                alert("Logged Out Successfully!");
                navigate("/login");
              }}
            >
              Logout
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
