import React, { useState } from 'react';
import './ExamCreationForm.css'; // Import CSS file for styling

const ExamCreationForm = () => {
  const [examTitle, setExamTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [questions, setQuestions] = useState([{ text: '', options: ['', ''], correctAnswer: '' }]);
  const [creationStatus, setCreationStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddQuestion = () => {
    setQuestions([...questions, { text: '', options: ['', ''], correctAnswer: '' }]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!examTitle || !duration || !scheduleDate || !scheduleTime || questions.some(question => !question.text || !question.correctAnswer || question.options.some(option => !option))) {
      setErrorMessage('Please fill out all fields for the exam.');
      return;
    }

    // Implement logic to save exam data
    console.log('Exam created:', { examTitle, duration, questions, scheduleDate, scheduleTime });
    // Set creation status
    setCreationStatus('success');
    // Clear error message
    setErrorMessage('');
  };

  return (
    <div className="exam-creation-form">
      <h2>Create New Exam</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Exam Title:
          <input type="text" value={examTitle} onChange={(e) => setExamTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Duration (in minutes):
          <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </label>
        <br />
        <label>
          Schedule Date:
          <input type="date" value={scheduleDate} onChange={(e) => setScheduleDate(e.target.value)} />
        </label>
        <br />
        <label>
          Schedule Time:
          <input type="time" value={scheduleTime} onChange={(e) => setScheduleTime(e.target.value)} />
        </label>
        <br />
        {questions.map((question, index) => (
          <div key={index}>
            <label>
              Question {index + 1}:
              <input type="text" value={question.text} onChange={(e) => handleQuestionChange(index, 'text', e.target.value)} />
            </label>
            <br />
            {question.options.map((option, optionIndex) => (
              <label key={optionIndex}>
                Option {optionIndex + 1}:
                <input type="text" value={option} onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)} />
              </label>
            ))}
            <br />
            <label>
              Correct Answer:
              <input type="text" value={question.correctAnswer} onChange={(e) => handleQuestionChange(index, 'correctAnswer', e.target.value)} />
            </label>
            <br />
            <button type="button" onClick={() => handleRemoveQuestion(index)}>Remove Question</button>
            
            <br />
          </div>
        ))}
        <button type="button" onClick={handleAddQuestion}>Add Question</button>
        <br />
        <button type="submit">Create Exam</button>
      </form>
      {creationStatus === 'success' && <p>Exam successfully created!</p>}
    </div>
  );
};

export default ExamCreationForm;
