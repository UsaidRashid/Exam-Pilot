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
    <div>
      <nav className="flex w-full h-18 py-4 bg-black">
        <div className="h-full flex justify-center align-middle m-auto">
          <ul className="flex m-auto gap-11">
            <Link to="/dashboard">
              <li className="bg-gray-500 px-2 py-4 rounded-full text-white">
                Dashboard
              </li>
            </Link>
            {token && token.user && token.user.type === "Teacher" && (
              <Link to="/generate-exam">
                <li className="bg-gray-500 px-2 py-4 rounded-full text-white">
                  Generate Exam
                </li>
              </Link>
            )}
            <Link to={"/upcoming-exams"}>
              <li className="bg-gray-500 px-2 py-4 rounded-full text-white">
                Upcoming Exams
              </li>
            </Link>
            <li
              className="bg-gray-500 px-2 py-4 rounded-full text-white"
              onClick={() => {
                localStorage.clear();
                alert("Logged Out Successful!");
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
