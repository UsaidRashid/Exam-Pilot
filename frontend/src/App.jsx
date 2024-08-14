import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import UpcomingExams from "./Components/UpcomingExams";
import Exams from "./Components/Exams";
import DisplayPaper from "./Components/DisplayPaper";
import Navbar from "./Components/Navbar";

const AppContent = () => {
  const location = useLocation();
  let showNavbar = true;
  if (location.pathname === "/login" || location.pathname === "/signup")
    showNavbar = false;
  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/display-paper" element={<DisplayPaper />} />
        <Route path="/upcoming-exams" element={<UpcomingExams />} />
        <Route path="/exams" element={<Exams />} />
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
