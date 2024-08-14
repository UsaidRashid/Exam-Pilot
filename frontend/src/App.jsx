import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import UpcomingExams from "./Components/UpcomingExams";
import DisplayPaper from "./Components/DisplayPaper";
import Navbar from "./Components/Navbar";
import TeacherDashboard from "./Components/TeacherDashboard";
import StudentDashboard from "./Components/StudentDashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import ProtectPaper from "./Components/ProtectPaper";
import Home from "./Components/Home";
import ProtectStudent from "./Components/ProtectStudent";
import ProtectTeacher from "./Components/ProtectTeacher";

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
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/teacher-dashboard"
          element={
            <ProtectedRoute>
              <ProtectTeacher>
                <TeacherDashboard />
              </ProtectTeacher>
            </ProtectedRoute>
          }
        />
        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute>
              <ProtectStudent>
                <StudentDashboard />
              </ProtectStudent>
            </ProtectedRoute>
          }
        />
        <Route
          path="/display-paper"
          element={
            <ProtectedRoute>
              <ProtectPaper>
                <DisplayPaper />
              </ProtectPaper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/upcoming-exams"
          element={
            <ProtectedRoute>
              <UpcomingExams />
            </ProtectedRoute>
          }
        />
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
