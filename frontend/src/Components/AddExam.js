import React, { useState } from 'react';
import axios from 'axios';

const AddExam = () => {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [schedule, setSchedule] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [percentage, setPercentage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulating submission logic
      // For demonstration purposes, let's assume the user's performance is calculated here and returned as a percentage
      const userPerformance = calculateUserPerformance(); // You need to implement this function

      // Display the percentage after submission
      setPercentage(userPerformance);

      // Clear input fields after successful submission
      setTitle('');
      setDuration('');
      setSchedule('');

      // Set submission status
      setSubmissionStatus('success');
    } catch (error) {
      console.error('Error submitting quiz:', error);
      // Set submission status
      setSubmissionStatus('fail');
    }
  };

  // Function to calculate user's performance percentage
  const calculateUserPerformance = () => {
    // Perform calculation based on the user's performance
    // For example, if the user answered 10 out of 15 questions correctly, the percentage could be calculated as (10 / 15) * 100
    const totalQuestions = 15; // Assuming there are 15 questions in the quiz
    const correctAnswers = 10; // Assuming the user answered 10 questions correctly
    return (correctAnswers / totalQuestions) * 100;
  };

  return (
    <div>
      <h2>Schedule Quiz</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Duration:</label>
          <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </div>
        <div>
          <label>Schedule:</label>
          <input type="datetime-local" value={schedule} onChange={(e) => setSchedule(e.target.value)} />
        </div>
        <button type="submit">Schedule Quiz</button>
      </form>
      {submissionStatus === 'success' && (
        <div>
          <p>Quiz submitted successfully!</p>
          <p>pass percentage: {percentage}%</p>
        </div>
      )}
      {submissionStatus === 'fail' && (
        <p>Error submitting quiz. Please try again.</p>
      )}
    </div>
  );
};

export default AddExam;
