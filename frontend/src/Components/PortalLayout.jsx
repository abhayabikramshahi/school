import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PortalLayout = ({ children }) => {
    const location = useLocation();
    const isStudentPortal = location.pathname === '/student-portal';
    const portalType = isStudentPortal ? 'Student' : 'Teacher';

    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <div className="hidden md:flex md:flex-shrink-0">
                <div className="flex flex-col w-64 bg-blue-800">
                    <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
                        <div className="flex items-center flex-shrink-0 px-4">
                            <Link to="/" className="text-white font-bold text-xl">
                                BMS School
                            </Link>
                        </div>
                        <div className="mt-5 flex-1 flex flex-col">
                            <nav className="flex-1 px-2 space-y-1">
                                <Link to="/" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-blue-700">
                                    <svg className="mr-3 h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    Back to Website
                                </Link>
                        
                            </nav>
                        </div>
                        <div className="flex-shrink-0 flex border-t border-blue-700 p-4">
                            <div className="flex items-center">
                                <div>
                                    <svg className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-white">
                                        {portalType} Portal
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile header */}
            <div className="md:hidden bg-blue-800 w-full fixed top-0 z-10">
                <div className="px-4 py-3 flex items-center justify-between">
                    <Link to="/" className="text-white font-bold text-xl">
                        BMS School
                    </Link>
                    <div className="text-white">
                        {portalType} Portal
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="flex flex-col w-0 flex-1 md:ml-64">
                <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                    <div className="md:py-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PortalLayout;
