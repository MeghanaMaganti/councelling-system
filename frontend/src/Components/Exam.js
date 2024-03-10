
const Exam = [
    {
      id: 1,
      title: 'Math Exam',
      duration: 10, // Duration in minutes
      questions: [
        { id: 1, text: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correctAnswer: '4' },
        { id: 2, text: 'What is the square root of 16?', options: ['2', '4', '6', '8'], correctAnswer: '4' },
        // Add more questions as needed
      ]
    },
    {
      id: 2,
      title: 'Science Exam',
      duration: 10,
      questions: [
        { id: 1, text: 'What is the chemical symbol for water?', options: ['H2O', 'CO2', 'O2', 'HCl'], correctAnswer: 'H2O' },
        { id: 2, text: 'What is the largest planet in our solar system?', options: ['Earth', 'Jupiter', 'Saturn', 'Mars'], correctAnswer: 'Jupiter' },
        // Add more questions as needed
      ]
    },
    
    
    // Add more exams as needed
  ];
  
  export default Exam;
  