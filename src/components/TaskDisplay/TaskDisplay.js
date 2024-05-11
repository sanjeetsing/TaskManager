// TaskDisplay.js
import React from "react";
import "./TaskDisplay.css";

const TaskDisplay = ({ onEdit }) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    window.location.reload(); // Refresh the page to reflect the changes
  };

  return (
    <div className="task-display">
      <h2>Task List</h2>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <div className="task-box">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Priority: {task.priority}</p>
              <p>Due Date: {task.dueDate}</p>
              <button className="edit" onClick={() => onEdit(task)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDisplay;
