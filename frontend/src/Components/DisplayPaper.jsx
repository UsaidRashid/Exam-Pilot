// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// export default function DisplayPaper() {
//   const { id } = useParams();
//   const [questions, setQuestions] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {

//     async function fetchQuestions() {
//       try {
//         console.log("Fetching questions with ID:", id);
//         const response = await axios.post(
//           "http://localhost:3001/questions/fetch-questions/",
//           { _id: id }
//         );
//         setQuestions(response.data.questions);
//       } catch (error) {
//         console.error("Error fetching questions:", error);
//       }
//     }

//     fetchQuestions();
//   }, [id]);

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-2xl font-bold mb-8">Exam Questions</h1>
//       {questions && questions.length > 0 ? (
//         <div className="space-y-6">

//           {questions.map((question, index) => (
//             <div key={index} className="p-4 border border-gray-300 rounded-lg">
//               <p className="font-semibold">
//                 {index + 1}. {question.text}
//               </p>
//               <ul className="list-disc pl-5 mt-2">
//                 {question.options.map((option, i) => (
//                   <li key={i} className="mt-1">
//                     <input
//                       type="radio"
//                       name={`question-${index}`}
//                       value={option}
//                       className="mr-2"
//                     />
//                     {option}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No questions available.</p>
//       )}
//       <button
//         onClick={() => navigate(-1)}
//         className="mt-8 bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Back to Dashboard
//       </button>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export default function DisplayPaper(props) {
  // const { id } = useParams();
  // console.log("ID from URL:", id);
  const [paper, setPaper] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location.state.paper);
    setPaper(location.state.paper);
  }, []);

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
                    value={question.optA}
                    className="mr-2"
                  />
                  {question.optA}
                </li>
                <li className="mt-1">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={question.optB}
                    className="mr-2"
                  />
                  {question.optB}
                </li>
                <li className="mt-1">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={question.optC}
                    className="mr-2"
                  />
                  {question.optC}
                </li>
                <li className="mt-1">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={question.optD}
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
        onClick={() => navigate(-1)}
        className="mt-8 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Back to Dashboard
      </button>
    </div>
  );
}
