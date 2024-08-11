import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UpcomingExams() {
  const [exam, setExam] = useState([]);
  const navigate = useNavigate();

  return (
    <>
      <div className=' bg-[url("./public/assets/dasboardBackground.jpeg")] bg-no-repeat bg-cover w-full h-screen overflow-y-auto'>
        <nav className="flex w-full h-22 py-4 sticky">
          <div className="h-full flex justify-center align-middle m-auto">
            <ul className="flex m-auto gap-11">
              <li className=" bg-gray-500 px-2 py-4 rounded-full text-white">
                dashboard
              </li>
              <Link to="/upcoming-exam">
                <li className=" bg-gray-500 px-2 py-4 rounded-full text-white">
                  upcoming exams
                </li>
              </Link>
              <li className=" bg-gray-500 px-2 py-4 rounded-full text-white">
                Leaderboard
              </li>
              <li className=" bg-gray-500 px-2 py-4 rounded-full text-white">
                Logout
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <div className=" w-[80%] m-auto bg-black bg-opacity-75 shadow-lg shadow-gray-700 rounded flex justify-center mt-11 ">
            <ul role="list" className="w-5/6 divide-gray-100 my-8">
              <h1 className="text-center text-3xl text-gray-500 font-bold mt-9">
                Upcoming Exams
              </h1>
              {exam &&
                exam.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex justify-between gap-x-6 py-5 border-b-2 border-gray-300"
                    >
                      <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                          <p className="text-lg font-semibold leading-6 text-gray-900">
                            {item.Name}
                          </p>
                          <p className="mt-1 truncate text-sm leading-5 text-gray-500 ml-4">
                            start at: {item.scheduledTime}
                          </p>
                        </div>
                        <div className="shrink-0 sm:flex sm:flex-col justify-start items-center">
                          <div className="mt-1 truncate text-sm leading-5 text-gray-500 flex gap-2">
                            <span>{item.numQuestions}</span> |{" "}
                            <span>{item.timeAllotted} h</span>
                          </div>
                          <button
                            className=" px-8 rounded-md cursor-pointer h-8 text-white bg-slate-500 hover:bg-slate-700"
                            // onClick={() => getdata(item)}
                          >
                            go to exam
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
