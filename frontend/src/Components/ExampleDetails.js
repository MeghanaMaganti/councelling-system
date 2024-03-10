import React, { useState } from 'react';
import exams from './Exam'; // Import the exams array

const ExampleDetails = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Rest of your component code...

  const handleSubmit = () => {
    // Calculate score and set submission status based on the score
    let correctCount = 0;
    let totalCount = 0;

    // Loop through each exam
    exams.forEach(exam => {
      // Loop through each question in the exam
      exam.questions.forEach(question => {
        // Increment total count
        totalCount++;

        // Get the selected answer for the question
        const selectedAnswer = selectedAnswers[question.id];

        // Check if the selected answer matches the correct answer
        if (selectedAnswer === question.correctAnswer) {
          // Increment correct count
          correctCount++;
        }
      });
    });

    // Calculate percentage score
    const score = (correctCount / totalCount) * 100;

    // Determine submission status based on score
    if (score === 100) {
      setSubmissionStatus('success');
    } else {
      setSubmissionStatus('fail');
    }
  };

  // Rest of your component code...

  return (
    // JSX code for the component...
  );
};

export default ExampleDetails;
