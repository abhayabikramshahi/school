import React, { useState } from 'react';

const Grades = () => {
    // Mock student name (replace with real data from auth or props)
    const [studentName] = useState('John Doe');

    // Empty grades data
    const grades = [];

    return (
        <main className="px-4 py-6 sm:px-6 lg:px-8 min-h-screen bg-gray-50">
            <div className="flex flex-col items-start space-y-2">
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Welcome, {studentName}
                </h1>
                <h2 className="text-lg sm:text-xl font-medium text-gray-900">Your Grades</h2>
                <p className="text-sm text-gray-700">
                    View your grades for assignments, quizzes, and exams across all courses.
                </p>
            </div>

            {/* No Data Message */}
            <div className="mt-6">
                <div className=" p-4 text-center">
                    <p className="text-sm text-gray-500">Wait for Admin Uploading</p>
                </div>
            </div>
        </main>
    );
};

export default Grades;