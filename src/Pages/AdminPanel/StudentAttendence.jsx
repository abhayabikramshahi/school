import { useState } from 'react';

function StudentAttendance() {
  const [classesData, setClassesData] = useState({});
  const [selectedClass, setSelectedClass] = useState('');
  const [newStudentName, setNewStudentName] = useState('');
  const [newClassName, setNewClassName] = useState('');

  // Select or create class
  const handleSelectClass = (e) => {
    const className = e.target.value;
    setSelectedClass(className);
  };

  const handleCreateClass = () => {
    if (newClassName.trim() === '') return alert('Enter class name!');

    if (!classesData[newClassName]) {
      setClassesData((prev) => ({
        ...prev,
        [newClassName]: [],
      }));
      setSelectedClass(newClassName);
      setNewClassName('');
    } else {
      alert('Class already exists!');
    }
  };

  // Add new student
  const handleAddStudent = () => {
    if (selectedClass === '') return alert('Select or create a class first!');
    if (newStudentName.trim() === '') return alert('Enter student name!');

    const newStudent = {
      id: Date.now(),
      name: newStudentName,
      status: 'present',
    };

    setClassesData((prev) => ({
      ...prev,
      [selectedClass]: [...(prev[selectedClass] || []), newStudent],
    }));

    setNewStudentName('');
  };

  // Toggle present/absent
  const toggleAttendance = (studentId) => {
    const updatedStudents = classesData[selectedClass].map((student) =>
      student.id === studentId
        ? { ...student, status: student.status === 'present' ? 'absent' : 'present' }
        : student
    );
    setClassesData((prev) => ({
      ...prev,
      [selectedClass]: updatedStudents,
    }));
  };

  // Save (still console for now)
  const handleSaveAttendance = () => {
    console.log('Saved Attendance:', classesData);
    alert('Attendance saved successfully!');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Student Attendance</h2>

      {/* Select Class */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Existing Class</label>
        <select
          value={selectedClass}
          onChange={handleSelectClass}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="">-- Select Class --</option>
          {Object.keys(classesData).map((className) => (
            <option key={className} value={className}>
              {className}
            </option>
          ))}
        </select>
      </div>

      {/* Create New Class */}
      <div className="mb-6 flex space-x-4">
        <input
          type="text"
          value={newClassName}
          onChange={(e) => setNewClassName(e.target.value)}
          placeholder="New Class Name (e.g., Class 5)"
          className="border rounded px-4 py-2 flex-1 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          onClick={handleCreateClass}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
        >
          Create Class
        </button>
      </div>

      {/* Add Student */}
      {selectedClass && (
        <div className="mb-6 flex space-x-4">
          <input
            type="text"
            value={newStudentName}
            onChange={(e) => setNewStudentName(e.target.value)}
            placeholder="Enter student name"
            className="border rounded px-4 py-2 flex-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={handleAddStudent}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Add Student
          </button>
        </div>
      )}

      {/* Student List */}
      {selectedClass && classesData[selectedClass] && classesData[selectedClass].length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {classesData[selectedClass].map((student) => (
                <tr key={student.id} className="border-b">
                  <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap capitalize">{student.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => toggleAttendance(student.id)}
                      className={`px-4 py-2 rounded text-white ${
                        student.status === 'present' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                      }`}
                    >
                      Mark {student.status === 'present' ? 'Absent' : 'Present'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : selectedClass ? (
        <p className="text-gray-500 mt-4">No students in this class yet.</p>
      ) : null}

      {/* Save */}
      <div className="mt-6">
        <button
          onClick={handleSaveAttendance}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg"
        >
          Save Attendance
        </button>
      </div>
    </div>
  );
}

export default StudentAttendance;
