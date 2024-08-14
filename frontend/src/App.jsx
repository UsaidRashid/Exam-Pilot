import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import UpcomingExams from "./Components/UpcomingExams";
import DisplayPaper from "./Components/DisplayPaper";
import Navbar from "./Components/Navbar";
import TeacherDashboard from "./Components/TeacherDashboard";
import StudentDashboard from "./Components/StudentDashboard";

const AppContent = () => {
  const location = useLocation();
  let showNavbar = true;
  if (
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/display-paper"
  )
    showNavbar = false;
  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/display-paper" element={<DisplayPaper />} />
        <Route path="/upcoming-exams" element={<UpcomingExams />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  );
}

export default App;
