import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'

function UserManagement() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'teacher', subject: 'Mathematics', status: 'active', email: 'john@school.com' },
    { id: 2, name: 'Jane Smith', role: 'teacher', subject: 'Science', status: 'active', email: 'jane@school.com' },
    { id: 3, name: 'Mike Johnson', role: 'student', grade: '10', section: 'A', status: 'active', email: 'mike@school.com' }
  ])

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'student',
    grade: '',
    section: '',
    subject: '',
    password: '',
    status: 'active'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1
    setUsers([...users, { ...newUser, id: newId }])
    toast.success(`${newUser.name} added successfully!`)
    setNewUser({
      name: '',
      email: '',
      role: 'student',
      grade: '',
      section: '',
      subject: '',
      password: '',
      status: 'active'
    })
  }

  const handleStatusChange = (id, newStatus) => {
    setUsers(users.map(user => user.id === id ? { ...user, status: newStatus } : user))
    toast.success(`User status updated to ${newStatus}`)
  }

  const handleDelete = (id) => {
    const user = users.find(u => u.id === id)
    setUsers(users.filter(u => u.id !== id))
    toast.success(`${user.name} has been deleted!`)
  }

  return (
    <div className="space-y-6">
      <Toaster position="top-right" />

      {/* Add New User Form */}
      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Add New User</h3>
            <p className="mt-1 text-sm text-gray-500">Create a new student or teacher account.</p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                  <select
                    id="role"
                    required
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-sm"
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    id="password"
                    required
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    id="status"
                    value={newUser.status}
                    onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-sm"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                {newUser.role === 'student' ? (
                  <>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade</label>
                      <input
                        type="text"
                        id="grade"
                        required
                        value={newUser.grade}
                        onChange={(e) => setNewUser({ ...newUser, grade: e.target.value })}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="section" className="block text-sm font-medium text-gray-700">Section</label>
                      <input
                        type="text"
                        id="section"
                        required
                        value={newUser.section}
                        onChange={(e) => setNewUser({ ...newUser, section: e.target.value })}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                  </>
                ) : (
                  <div className="col-span-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={newUser.subject}
                      onChange={(e) => setNewUser({ ...newUser, subject: e.target.value })}
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                )}
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* User List */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">User Management</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Details</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map(user => (
                  <tr key={user.id}>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.role === 'teacher' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {user.role === 'teacher' ? user.subject : `Grade ${user.grade}-${user.section}`}
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={user.status}
                        onChange={(e) => handleStatusChange(user.id, e.target.value)}
                        className={`text-sm rounded-full px-2 py-1 ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-right text-sm">
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserManagement
