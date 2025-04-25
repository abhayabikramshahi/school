import React, { useState } from 'react';
import PortalLayout from '../Components/PortalLayout';

const TeacherPortal = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [formData, setFormData] = useState({
        teacherId: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate login - in real app, this would be an API call
        setIsLoggedIn(true);
        console.log('Teacher login attempt:', formData);
    };

    if (isLoggedIn) {
        return (
            <PortalLayout>
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                            <h1 className="text-2xl font-semibold text-gray-900">Teacher Dashboard</h1>
                            <p className="mt-2 text-sm text-gray-700">
                                Welcome back! Manage your classes and student information here.
                            </p>
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Create Assignment
                            </button>
                        </div>
                    </div>
                    
                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Classes Card */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">Active Classes</dt>
                                            <dd className="flex items-baseline">
                                                <div className="text-2xl font-semibold text-gray-900">5</div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-5 py-3">
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">View all</a>
                                </div>
                            </div>
                        </div>

                        {/* Students Card */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">Total Students</dt>
                                            <dd className="flex items-baseline">
                                                <div className="text-2xl font-semibold text-gray-900">150</div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-5 py-3">
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">View details</a>
                                </div>
                            </div>
                        </div>

                        {/* Assignments Card */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">Pending Reviews</dt>
                                            <dd className="flex items-baseline">
                                                <div className="text-2xl font-semibold text-gray-900">12</div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-5 py-3">
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Grade now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Class Schedule */}
                    <div className="mt-8">
                        <h2 className="text-lg font-medium text-gray-900">Today's Schedule</h2>
                        <div className="mt-4 bg-white shadow rounded-lg">
                            <ul className="divide-y divide-gray-200">
                                <li className="px-5 py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-100">
                                                <span className="text-sm font-medium leading-none text-blue-800">1st</span>
                                            </span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900">Mathematics - Grade 10</p>
                                            <p className="text-sm text-gray-500">8:00 AM - 9:30 AM</p>
                                        </div>
                                        <div>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                In Progress
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="px-5 py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-100">
                                                <span className="text-sm font-medium leading-none text-gray-800">2nd</span>
                                            </span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900">Science - Grade 9</p>
                                            <p className="text-sm text-gray-500">10:00 AM - 11:30 AM</p>
                                        </div>
                                        <div>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                Upcoming
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </PortalLayout>
        );
    }

    return (
        <div className="min-h-screen bg-blue-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Teacher Portal
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Manage your classes, grades, and student information
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-lg rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="teacherId" className="block text-sm font-medium text-gray-700">
                                Teacher ID
                            </label>
                            <div className="mt-1">
                                <input
                                    id="teacherId"
                                    name="teacherId"
                                    type="text"
                                    required
                                    value={formData.teacherId}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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

export default TeacherPortal;
