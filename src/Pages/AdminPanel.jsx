import { Link, Routes, Route } from 'react-router-dom';
import BlogManagement from './AdminPanel/BlogManagement';
import UserManagement from './AdminPanel/UserManagement';
import Dashboard from './AdminPanel/Dashboard';
import VacancyNoticeUploader from './AdminPanel/Vacancy-Notice-Uploader';
import StudentAttendance from './AdminPanel/StudentAttendence'; // (btw spelling still wrong: should be Attendance)

function AdminPanel() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Top Navbar */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              </div>

              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <NavLink to="dashboard" label="Dashboard" />
                <NavLink to="users" label="User Management" />
                <NavLink to="blog" label="Blog Management" />
                <NavLink to="class-progress" label="Class Progress" />
                <NavLink to="vacancy-notice-uploader" label="Vacancy Notice Uploader" />
                <NavLink to="student-attendance" label="Student Attendance" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="blog" element={<BlogManagement />} />
          {/* Placeholder if you plan to add Class Progress later */}
          {/* <Route path="class-progress" element={<ClassProgress />} /> */}
          <Route path="vacancy-notice-uploader" element={<VacancyNoticeUploader />} />
          <Route path="student-attendance" element={<StudentAttendance />} />

          {/* Default fallback */}
          <Route index element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

/* Reusable NavLink */
function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
    >
      {label}
    </Link>
  );
}

export default AdminPanel;
