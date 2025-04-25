import { Link, Routes, Route } from 'react-router-dom'
import BlogManagement from './AdminPanel/BlogManagement'
import UserManagement from './AdminPanel/UserManagement'
import Dashboard from './AdminPanel/Dashboard'
import Home from '../Pages/Home'
function AdminPanel() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Nav */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link 
                  to="/home"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/admin/dashboard"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  to="/admin/users"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  User Management
                </Link>
                <Link
                  to="/admin/blog"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Blog Management
                </Link>
                <Link
                  to="/admin/class-progress"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Class Progress
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/blog" element={<BlogManagement />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}

export default AdminPanel
