import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material'; // Import Material-UI components
import QuizResultPage from './QuizResultPage'; // Import the QuizResultPage component
import exams from './Exam'; // Import the exams array

const ExampleDetails = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Initialize selectedAnswers with default values for each question
  useEffect(() => {
    const initialSelectedAnswers = exams.reduce((acc, exam) => {
      exam.questions.forEach(question => {
        acc[question.id] = '';
      });
      return acc;
    }, {});
    setSelectedAnswers(initialSelectedAnswers);
  }, []);

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [remainingTime, setRemainingTime] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOptionChange = (questionId, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: option,
    });
  };

  const handleTickAll = () => {
    const updatedSelectedAnswers = {...selectedAnswers};
    exams.forEach(exam => {
      exam.questions.forEach(question => {
        updatedSelectedAnswers[question.id] = question.options[0]; // Assuming the first option is selected for all questions
      });
    });
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const handleSubmit = () => {
    // Simulating submission logic
    // For demonstration purposes, let's assume the quiz is considered successful if all questions are answered
    const allQuestionsAnswered = Object.values(selectedAnswers).every(answer => answer !== '');
    if (allQuestionsAnswered) {
      setSubmissionStatus('success');
    } else {
      setSubmissionStatus('fail');
    }
  };

  const convertToTimeFormat = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const isSubmitDisabled = () => {
    // Check if all questions are answered
    return !Object.values(selectedAnswers).every(answer => answer !== '');
  };

  return (
    <div>
      {submissionStatus ? (
        <QuizResultPage selectedAnswers={selectedAnswers} submissionStatus={submissionStatus} />
      ) : (
        <div style={{ padding: '20px', backgroundColor: '#e0e0e0', fontFamily: 'Arial, sans-serif' }}>
          <Typography variant="h2" style={{ marginBottom: '20px', textAlign: 'center' }}>Quiz</Typography>
          <Typography variant="h4" style={{ marginBottom: '10px', textAlign: 'center' }}>Remaining Time: {convertToTimeFormat(remainingTime)}</Typography>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <Button variant="contained" color="primary" onClick={handleTickAll}>Tick All Questions</Button>
          </div>
          <List>
            {exams.map(exam => (
              <ListItem key={exam.id} style={{ marginBottom: '30px' }}>
                <div>
                  <Typography variant="h3">{exam.title}</Typography>
                  <Typography variant="body1" style={{ marginBottom: '10px' }}>Duration: {exam.duration}</Typography>
                  <Typography variant="h4">Questions</Typography>
                  <List>
                    {exam.questions.map(question => (
                      <ListItem key={question.id}>
                        <div style={{ marginBottom: '10px' }}>
                          <Typography variant="body1">{question.text}</Typography>
                          <RadioGroup
                            aria-label="quiz"
                            name={`question-${question.id}`}
                            value={selectedAnswers[question.id]}
                            onChange={(event) => handleOptionChange(question.id, event.target.value)}
                          >
                            {question.options.map(option => (
                              <FormControlLabel
                                key={option}
                                value={option}
                                control={<Radio />}
                                label={option}
                                style={{ marginBottom: '5px' }}
                              />
                            ))}
                          </RadioGroup>
                        </div>
                      </ListItem>
                    ))}
                  </List>
                  
                </div>
              </ListItem>
            ))}
          </List>
          <div style={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" onClick={handleSubmit} disabled={isSubmitDisabled()}>Submit</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExampleDetails;
