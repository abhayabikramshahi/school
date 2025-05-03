import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Curriculum from "./Pages/Curriculum"
import Faculty from "./Pages/Faculty"
import Admission from "./Pages/Admission"
import Sports from "./Pages/Sports"
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/ContactUs"
import Fotter from "./Components/Fotter"
import StudentPortal from "./Pages/StudentPortal"
import TeacherPortal from "./Pages/TeacherPortal"
import Blog from "./Pages/Blog"
import BlogPost from "./Pages/BlogPost"
import AdminPanel from "./Pages/AdminPanel"
import Notice from './Pages/Notices' 
import Vacancy from "./Pages/Vacancy"
import Header from "./Components/Header"
import TeacherProfile from './components/TeacherProfile';
import Developer from "./Pages/Developer"
import Scholarship from "./Scholarship"
import CreateAssignment from "./Pages/CreateAssignment"
import StudentsCard from "./Components/StudentsCard"
import ClassesCard from "./Components/ClassesCard"
import AssignmentsCard from "./Components/AssignmentsCard"
import Grades from "./Pages/Grades"
import AbhayaProfile from "./Pages/developer/AbhayaProfile"


function App() {
  const location = useLocation();
  const isPortalPage = ['/student-portal', '/teacher-portal', '/admin'].includes(location.pathname) ||
                      location.pathname.startsWith('/admin/');

  return (
    <>
      {!isPortalPage && <Header />}
      {!isPortalPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics"  >
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="admission" element={<Admission />} />
        </Route>
        <Route path="/activities">
          <Route path="sports" element={<Sports />} />
          <Route path="clubs" element={<Admission />} />
          <Route path="events" element={<Admission />} />
          <Route path="Notices" element={<Admission />} />
          <Route path="Vacancy" element={<Admission />} />
          <Route path="Teachers" element={<Admission />} />
          <Route path="Students" element={<Admission />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/student-portal" element={<StudentPortal />} />
        <Route path="/teacher-portal" element={<TeacherPortal />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/admin/*" element={<AdminPanel />} />
        <Route path="/fotter" element={<Fotter />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/faculty/profile/:profileLink" element={<TeacherProfile />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/create-assignment" element={<CreateAssignment />} />
        <Route path="/students-card" element={<StudentsCard />} />
        <Route path="/classes-card" element={<ClassesCard />} />
        <Route path="/assignments-card" element={<AssignmentsCard />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/developer/abhaya" element={<AbhayaProfile />} />
        {/* Add more routes as needed */}

      </Routes>
      {!isPortalPage && <Fotter />}
    </>
  )
}

export default App
