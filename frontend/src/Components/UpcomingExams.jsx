import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const api = import.meta.env.VITE_BACKEND_URL;

export default function UpcomingExams() {
  const [exams, setExams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const main = async () => {
      try {
        const response = await axios.post(api + "exams/upcoming-exams");
        if (response.status === 200) {
          setExams(response.data.exams);
        } else {
          alert("Error in fetching exams");
        }
      } catch (error) {
        console.error("Error in Fetching Exams:", error);
        if (error.response) {
          alert(
            "Error from server: " +
              error.response.status +
              " - " +
              error.response.data.message
          );
        } else if (error.request) {
          alert("No response from the server");
        } else {
          alert("Error setting up the request: " + error.message);
        }
      }
    };
    main();
  }, [exams]);

  const getdata = (paper) => {
    navigate(`/display-paper`, { state: { paper } });
  };

  return (
    <>
      <div className="bg-gradient-to-r from-gray-800 to-black w-full h-screen overflow-y-auto flex justify-center items-center">
        <div className="w-[80%] m-auto bg-gray-900 bg-opacity-80 shadow-2xl rounded-lg p-8">
          <h1 className="text-center text-4xl text-gray-300 font-bold mb-10">
            Upcoming Exams
          </h1>
          <ul role="list" className="w-full divide-y divide-gray-700">
            {exams &&
              exams.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-5 hover:bg-gray-700 transition duration-300 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-lg font-semibold text-gray-200">
                      {item.Name}
                    </div>
                    <div className="text-sm text-gray-400 ml-4">
                      Start at: {item.scheduledTime}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-400">
                      {item.numQuestions} Questions | {item.timeAllotted} h
                    </div>
                    <button
                      className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                      onClick={() => getdata(item)}
                    >
                      Go to Exam
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
