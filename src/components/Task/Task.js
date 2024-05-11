// Task.js
import React from "react";
import "./Task.css"; // Import your CSS file for styling
import CircularRadioButton from "../CircularRadioButton/CircularRadioButton"; // Import CircularRadioButton component

const Task = ({ task, onEdit, onDelete, onComplete }) => {
  return (
    <div className="task">
      {/* Include CircularRadioButton for completion status */}
      <CircularRadioButton
        checked={task.completed}
        onChange={() => onComplete(task.id)}
      />
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
      <button onClick={() => onEdit(task.id)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
