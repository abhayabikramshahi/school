import React, { useState, useEffect } from "react";
import PortalLayout from "../Components/PortalLayout";
import Grades from "./Grades";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const StudentPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    studentId: "",
    password: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showComplaintForm, setShowComplaintForm] = useState(false);
  const [complaintData, setComplaintData] = useState({ message: "" });
  const [showNotification, setShowNotification] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [todoForm, setTodoForm] = useState({ description: "", dueDate: "" });

  // Mock data for pending assignments
  const pendingAssignments = [
    {
      id: 1,
      title: "Math Assignment - Algebra",
      dueDate: "April 25, 2025",
      description: "Solve problems from Chapter 5 on quadratic equations.",
    },
    {
      id: 2,
      title: "Science Project - Physics",
      dueDate: "April 28, 2025",
      description: "Create a model demonstrating Newton’s laws of motion.",
    },
    {
      id: 3,
      title: "English Essay",
      dueDate: "April 30, 2025",
      description: "Write a 500-word essay on a novel of your choice.",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleComplaintChange = (e) => {
    const { name, value } = e.target;
    setComplaintData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTodoChange = (e) => {
    const { name, value } = e.target;
    setTodoForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    console.log("Student login attempt:", formData);
  };

  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint submitted:", complaintData);
    setShowComplaintForm(false);
    setComplaintData({ message: "" });
    setShowNotification(true);
  };

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (todoForm.description.trim()) {
      setTodoList((prev) => [
        ...prev,
        {
          id: Date.now(), // Simple unique ID
          description: todoForm.description,
          dueDate: todoForm.dueDate || "",
        },
      ]);
      setTodoForm({ description: "", dueDate: "" });
      console.log("Todo added:", todoForm);
    }
  };

  const handleTodoDelete = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    console.log("Todo deleted:", id);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowComplaintForm(false);
  };

  const openComplaintForm = () => {
    setShowComplaintForm(true);
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000); // Notification disappears after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  if (isLoggedIn) {
    return (
      <PortalLayout>
        <div className="px-4 py-6 sm:px-6 lg:px-8 relative min-h-screen">
          {/* Notification */}
          {showNotification && (
            <div className="fixed top-4 right-4 z-[70] max-w-xs w-full bg-green-500 text-white rounded-md shadow-lg p-3 flex items-center justify-between transition-opacity duration-300">
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-sm">
                  Complaint submitted successfully!
                </span>
              </div>
              <button
                onClick={() => setShowNotification(false)}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          )}

          <div className="flex flex-col items-start">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Student Dashboard
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              Welcome back! Access your academic information and resources here.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4">
            {/* Assignments Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Pending Assignments
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-xl font-semibold text-gray-900">
                          {pendingAssignments.length + todoList.length}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3">
                <div className="text-sm">
                  <button
                    onClick={openModal}
                    className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
                  >
                    View all
                  </button>
                </div>
              </div>
            </div>

            {/* Attendance Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Attendance Rate
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-xl font-semibold text-gray-900">
                          95%
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    View details
                  </a>
                </div>
              </div>
            </div>

            {/* Grades Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-yellow-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Latest Grades
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-xl font-semibold text-gray-900">
                          A-
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3">
                <div className="text-sm">
                    <Link to="/grades" className="font-medium text-blue-600 hover:text-blue-500">
                    <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    View all grades
                  </a>
                </Link>
                </div>
              </div>
            </div>
          </div>

          {/* To-Do List */}
          <div className="mt-6">
            <h2 className="text-base sm:text-lg font-medium text-gray-900">
              To-Do List
            </h2>
            <div className="mt-4 bg-white shadow rounded-lg p-4">
              <form
                onSubmit={handleTodoSubmit}
                className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3"
              >
                <input
                  type="text"
                  name="description"
                  value={todoForm.description}
                  onChange={handleTodoChange}
                  placeholder="Enter task description"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                  required
                />
                <input
                  type="date"
                  name="dueDate"
                  value={todoForm.dueDate}
                  onChange={handleTodoChange}
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto"
                >
                  Add Task
                </button>
              </form>
              <ul className="mt-4 space-y-3">
                {todoList.length === 0 ? (
                  <li className="text-sm text-gray-500">No tasks added yet.</li>
                ) : (
                  todoList.map((todo) => (
                    <li
                      key={todo.id}
                      className="flex items-center justify-between border-b border-gray-200 pb-2"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {todo.description}
                        </p>
                        <p className="text-sm text-gray-500">
                          Due: {todo.dueDate || "No due date"}
                        </p>
                      </div>
                      <button
                        onClick={() => handleTodoDelete(todo.id)}
                        className="text-red-600 hover:text-red-700 focus:outline-none"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </button>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-6">
            <h2 className="text-base sm:text-lg font-medium text-gray-900">
              Recent Activity
            </h2>
            <div className="mt-4 bg-white shadow rounded-lg">
              <ul className="divide-y divide-gray-200">
                <li className="px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        New Math Assignment Posted
                      </p>
                      <p className="text-sm text-gray-500">
                        Due date: April 25, 2025
                      </p>
                    </div>
                    <div>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        New
                      </span>
                    </div>
                  </div>
                </li>
                <li className="px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        Science Quiz Graded
                      </p>
                      <p className="text-sm text-gray-500">Score: 92%</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Pending Assignments Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 overflow-y-auto">
              <div className="flex min-h-screen items-center justify-center px-4 py-6">
                <div
                  className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity"
                  onClick={closeModal}
                  aria-hidden="true"
                ></div>
                <div className="bg-white rounded-lg shadow-xl w-full max-w-md z-[60] relative">
                  <div className="p-4 sm:p-6">
                    {showComplaintForm ? (
                      <>
                        <h3 className="text-base sm:text-lg font-medium text-gray-900">
                          Submit Complaint
                        </h3>
                        <form
                          className="mt-4 space-y-4"
                          onSubmit={handleComplaintSubmit}
                        >
                          <div>
                            <label
                              htmlFor="message"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Complaint Message
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              rows="4"
                              required
                              value={complaintData.message}
                              onChange={handleComplaintChange}
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                              placeholder="Describe your complaint"
                            ></textarea>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-end space-y-3 sm:space-y-0 sm:space-x-3">
                            <button
                              type="button"
                              onClick={() => setShowComplaintForm(false)}
                              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </>
                    ) : (
                      <>
                        <h3 className="text-base sm:text-lg font-medium text-gray-900">
                          Pending Assignments
                        </h3>
                        <div className="mt-4 space-y-4">
                          <h4 className="text-sm font-medium text-gray-700">
                            Assignments
                          </h4>
                          {pendingAssignments.map((assignment) => (
                            <div
                              key={assignment.id}
                              className="border-b border-gray-200 pb-4 last:border-b-0"
                            >
                              <h5 className="text-sm font-medium text-gray-900">
                                {assignment.title}
                              </h5>
                              <p className="text-sm text-gray-500">
                                Due: {assignment.dueDate}
                              </p>
                              <p className="text-sm text-gray-600 mt-1">
                                {assignment.description}
                              </p>
                            </div>
                          ))}
                          <h4 className="text-sm font-medium text-gray-700 mt-6">
                            To-Do Tasks
                          </h4>
                          {todoList.length === 0 ? (
                            <p className="text-sm text-gray-500">
                              No to-do tasks added.
                            </p>
                          ) : (
                            todoList.map((todo) => (
                              <div
                                key={todo.id}
                                className="border-b border-gray-200 pb-4 last:border-b-0"
                              >
                                <h5 className="text-sm font-medium text-gray-900">
                                  {todo.description}
                                </h5>
                                <p className="text-sm text-gray-500">
                                  Due: {todo.dueDate || "No due date"}
                                </p>
                              </div>
                            ))
                          )}
                        </div>
                        <div className="mt-4 flex flex-col sm:flex-row sm:justify-between space-y-3 sm:space-y-0 sm:space-x-3">
                          <button
                            onClick={openComplaintForm}
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 w-full sm:w-auto"
                          >
                            Submit Complaint
                          </button>
                          <button
                            onClick={closeModal}
                            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto"
                          >
                            Close
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </PortalLayout>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center">
          Student Portal
        </h2>
        <p className="mt-2 text-sm text-gray-600 text-center">
          Access your academic information, assignments, and more
        </p>
      </div>

      <div className="mt-8 w-full max-w-md mx-auto">
        <div className="bg-white py-8 px-4 shadow-lg rounded-lg sm:px-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="studentId"
                className="block text-sm font-medium text-gray-700"
              >
                Student ID
              </label>
              <div className="mt-1">
                <input
                  id="studentId"
                  name="studentId"
                  type="text"
                  required
                  value={formData.studentId}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Enter your student ID"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;
