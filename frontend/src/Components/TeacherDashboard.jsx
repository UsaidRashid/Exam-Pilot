import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
const api = import.meta.env.VITE_BACKEND_URL;

export default function TeacherDashboard() {
  const [paper, setPaper] = useState({
    name: "",
    numQuestions: 0,
    scheduledTime: "",
    timeAllotted: 0,
    syllabusImage: null,
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaper((old) => ({
      ...old,
      [name]: value,
    }));
  };

  const getFile = (e) => {
    const { name, files } = e.target;
    setPaper((old) => ({
      ...old,
      [name]: files[0],
    }));
  };

  const postData = async (e) => {
    e.preventDefault();

    setLoading(true);
    const formData = new FormData();
    formData.append("name", paper.name);
    formData.append("numQuestions", paper.numQuestions);
    formData.append("scheduledTime", paper.scheduledTime);
    formData.append("timeAllotted", paper.timeAllotted);
    formData.append("syllabusImage", paper.syllabusImage);

    try {
      const response = await axios.post(
        api + "exams/generate-questions",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        alert("Paper Generated Successfully!");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error in Generating Paper:", error);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-dashboard bg-cover bg-center min-h-screen flex">
      <Sidebar />
      {loading ? (
        <p className="text-lg font-semibold text-gray-600 animate-pulse">
          Loading... Generating Exam, please wait.
        </p>
      ) : (
        <div className="flex-grow p-8">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-gray-700 text-center mb-8">
              Create Exam Paper
            </h1>
            <form onSubmit={postData}>
              <div className="space-y-6">
                <div className="flex items-center">
                  <label
                    htmlFor="Name"
                    className="w-44 text-center text-lg font-semibold text-gray-700"
                  >
                    Subject:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={paper.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    id="Name"
                  />
                </div>
                <div className="flex items-center">
                  <label
                    htmlFor="numQuestions"
                    className="w-44 text-center text-lg font-semibold text-gray-700"
                  >
                    Questions:
                  </label>
                  <input
                    type="number"
                    name="numQuestions"
                    value={paper.numQuestions}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    id="numQuestions"
                  />
                </div>
                <div className="flex items-center">
                  <label
                    htmlFor="scheduledTime"
                    className="w-44 text-center text-lg font-semibold text-gray-700"
                  >
                    Starting Time:
                  </label>
                  <input
                    type="datetime-local"
                    name="scheduledTime"
                    value={paper.scheduledTime}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    id="scheduledTime"
                  />
                </div>
                <div className="flex items-center">
                  <label
                    htmlFor="timeAllotted"
                    className="w-44 text-center text-lg font-semibold text-gray-700"
                  >
                    Allotted Time:
                  </label>
                  <input
                    type="number"
                    name="timeAllotted"
                    value={paper.timeAllotted}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    id="timeAllotted"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center w-64">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer transition hover:bg-indigo-50"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-10 h-10 mb-4 text-indigo-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          SVG, PNG, JPG, or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        name="syllabusImage"
                        onChange={getFile}
                      />
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-indigo-500 text-white rounded-full py-3 px-8 transition hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Generate
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
