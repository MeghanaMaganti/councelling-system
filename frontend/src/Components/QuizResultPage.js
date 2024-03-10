import React from 'react';
import { Typography } from '@mui/material';

const QuizResultPage = ({ selectedAnswers, submissionStatus }) => {
  // Calculate the score based on the selected answers
  const calculateScore = () => {
    const totalQuestions = Object.keys(selectedAnswers).length;
    const correctAnswers = Object.values(selectedAnswers).filter(answer => answer === 'correct').length;
    return Math.round((correctAnswers / totalQuestions) * 100); // Calculate percentage
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#e0e0e0', fontFamily: 'Arial, sans-serif' }}>
      <Typography variant="h2" style={{ marginBottom: '20px', textAlign: 'center' }}>Quiz Result</Typography>
      <Typography variant="h4" style={{ marginBottom: '10px', textAlign: 'center' }}>Submission Status: {submissionStatus}</Typography>
      <Typography variant="h4" style={{ marginBottom: '10px', textAlign: 'center' }}>Your Score: {calculateScore()}%</Typography>
    </div>
  );
};

export default QuizResultPage;
