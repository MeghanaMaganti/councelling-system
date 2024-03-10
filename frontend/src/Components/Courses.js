import React, { useState, useEffect } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from an API or any external source
    // Replace the URL with the actual endpoint from where you fetch the data
    fetch('https://example.com/api/courses')
      .then(response => response.json())
      .then(data => {
        setCourses(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // List of allowed courses
  const allowedCourses = ['AOOP', 'DAA', 'MSWD', 'PSQRT', 'DS'];

  // Check if the searched course exists in the list of allowed courses
  const isCourseAllowed = allowedCourses.includes(searchQuery.toUpperCase());

  // Filter courses based on the search query
  const filteredCourses = courses.filter(course =>
    course.name.toUpperCase() === searchQuery.toUpperCase()
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search courses"
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: '10px', width: '100%', padding: '5px', fontSize: '16px' }}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        isCourseAllowed ? (
          filteredCourses.map((course, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
              <h3>{course.name}</h3>
              <p>Category: {course.category}</p>
              {/* Add more details or actions related to the course */}
            </div>
          ))
        ) : (
          <p>Sorry, unable to find.</p>
        )
      )}
    </div>
  );
};

export default Courses;
