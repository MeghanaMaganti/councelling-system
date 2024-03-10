import React from 'react';

// Course component representing a single course
const Courses = ({ name, category }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      {/* Add more details or actions related to the course */}
    </div>
  );
};

// Parent component to display multiple courses
const CoursesList = () => {
  return (
    <div>
      <h1>All Courses</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Courses name="Introduction to JavaScript" category="Programming" />
        <Courses name="HTML and CSS Basics" category="Web Development" />
        <Courses name="Python for Data Science" category="Data Science" />
        <Courses name="Java Fundamentals" category="Programming" />
        <Courses name="React.js Crash Course" category="Web Development" />
        <Courses name="Machine Learning Fundamentals" category="Data Science" />
        {/* Add more Course components as needed */}
      </div>
    </div>
  );
};

export default CoursesList;
