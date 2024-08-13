import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import TeacherDashboard from './Components/TeacherDashboard'
import UpcomingExams from './Components/UpcomingExams'
import Exams from './Components/Exams'
import DisplayPaper from './Components/DisplayPaper'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/> } />
          <Route path='/login' element={<Login/> } />
          <Route path='/' element={<Home/> } />
          <Route path='/teacher-dashboard' element={<TeacherDashboard />} />
          <Route path='/display-paper/:id' element={<DisplayPaper />} />
          <Route path='/upcoming-exams' element={<UpcomingExams/> } />
          <Route path='/exams' element={<Exams/> } />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App