import React from 'react';

const TaskList = ({ tasks }) => {
  // Handling default prop values
  if (!tasks || tasks.length === 0) {
    return <p>No tasks available.</p>;
  }

  // Rendering dynamic content
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input type="checkbox" checked={task.completed} readOnly />
          <strong>{task.title}</strong>
          <p>{task.description}</p>
        </li>
      ))}
    </ul>
  );
};

// Default prop values
TaskList.defaultProps = {
  tasks: [],
};

export default TaskList;
