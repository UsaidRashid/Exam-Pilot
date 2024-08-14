import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
const api = import.meta.env.VITE_BACKEND_URL;

export default function DisplayPaper(props) {
  const [paper, setPaper] = useState();
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const paperData = location.state.paper;
    setPaper(paperData);
    const initialAnswers = Array(paperData.numQuestions).fill("NA");
    setAnswers(initialAnswers);
  }, [location.state.paper]);

  const token = localStorage.getItem("token");
  let userId = null;
  if (token) {
    const decodedToken = jwtDecode(token);
    userId = decodedToken.user._id;
  }

  const handleOptionChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const handleFinishExam = async () => {
    try {
      const paperId = paper._id;
      const response = await axios.post(api + "exams/check-exam", {
        answers,
        examId: paperId,
        studentId: userId,
      });
      if (response.status === 200) {
        alert("Exam Successfully Submitted");
        navigate("/student-dashboard");
      } else {
        alert(response.data.message || "An Error occured");
      }
    } catch (error) {
      console.error("Error in Displaying Paper:", error);
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

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-8">Exam Questions</h1>
      {paper?.questions?.length > 0 ? (
        <div className="space-y-6">
          {paper.questions.map((question, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg">
              <p className="font-semibold">
                {index + 1}. {question.question}
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li className="mt-1">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value="A"
                    checked={answers[index] === "A"}
                    onChange={() => handleOptionChange(index, "A")}
                    className="mr-2"
                  />
                  {question.optA}
                </li>
                <li className="mt-1">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value="B"
                    checked={answers[index] === "B"}
                    onChange={() => handleOptionChange(index, "B")}
                    className="mr-2"
                  />
                  {question.optB}
                </li>
                <li className="mt-1">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value="C"
                    checked={answers[index] === "C"}
                    onChange={() => handleOptionChange(index, "C")}
                    className="mr-2"
                  />
                  {question.optC}
                </li>
                <li className="mt-1">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value="D"
                    checked={answers[index] === "D"}
                    onChange={() => handleOptionChange(index, "D")}
                    className="mr-2"
                  />
                  {question.optD}
                </li>
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>No questions available.</p>
      )}
      <button
        onClick={handleFinishExam}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Finish Exam!
      </button>
    </div>
  );
}
