import React, { useState, useEffect } from 'react';

const ExamList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Dummy data with student details and exam scores
    const sampleStudents = [
      {
        id: 1,
        name: '',
        exams: [
          { id: 1, title: 'Math Exam', score: 85 },
          { id: 2, title: 'Science Exam', score: 90 },
          { id: 3, title: 'History Exam', score: 78 },
          // Add more sample exams as needed
        ],
      },
      // Add more sample students as needed
    ];

    setStudents(sampleStudents);
  }, []);

  // Function to calculate grades based on scores
  const calculateGrade = score => {
    if (score >= 90) {
      return 'A';
    } else if (score >= 80) {
      return 'B';
    } else if (score >= 70) {
      return 'C';
    } else if (score >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  };

  return (
    <div>
      <h2>Progress Cards</h2>
      {students.map(student => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <table>
            <thead>
              <tr>
                <th>Exam Title</th>
                <th>Score</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {student.exams.map(exam => (
                <tr key={exam.id}>
                  <td>{exam.title}</td>
                  <td>{exam.score}</td>
                  <td>{calculateGrade(exam.score)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ExamList;
