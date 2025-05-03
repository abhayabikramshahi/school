import React from 'react';

function CreateAssignment() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create New Assignment</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Enter assignment title" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Enter assignment description"></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Due Date</label>
          <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
        <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Create Assignment
        </button>
      </form>
    </div>
  );
}

export default CreateAssignment;
