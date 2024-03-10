import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    id: '',
    marks: '',
  });
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    setStudentData({
      ...studentData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('/api/students', studentData); // Replace with your API endpoint
      setStudents([...students, response.data]); // Add newly created student to local state
      setStudentData({ name: '', id: '', marks: '' }); // Clear form fields after successful submission
      setSuccessMessage('Student created successfully!');
    } catch (error) {
      setErrorMessage('Error creating student: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteLowMarks = async () => {
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.delete('/api/students/low-marks', {
        data: { marks: [50, 70] }, // Specify marks to delete
      }); // Replace with your API endpoint

      if (response.data.deletedCount > 0) {
        setStudents(students.filter((student) => student.marks !== 50 && student.marks !== 70)); // Filter locally
        setSuccessMessage(`${response.data.deletedCount} students with marks 50 or 70 were deleted.`);
      } else {
        setSuccessMessage('No students found with marks 50 or 70.');
      }
    } catch (error) {
      setErrorMessage('Error deleting students: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('/api/students'); // Replace with your API endpoint
        setStudents(response.data);
      } catch (error) {
        setErrorMessage('Error fetching students: ' + error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}

      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={studentData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          ID:
          <input type="text" name="id" value={studentData.id} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Marks:
          <input type="number" name="marks" value={studentData.marks} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Create Student</button>
      </form>

      <h2>Students</h2>
      {students.length > 0 ? (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name} ({student.id}) - {student.marks}
            </li>
          ))}
        </ul>
      ) : (
        <p>No students found.</p>
      )}

      <button onClick={handleDeleteLowMarks} disabled={isLoading}>
        Delete Students with Marks 50 or 70
      </button>
    </div>
  );
};

export default StudentForm;
