import React from "react";
import "./Task.css";

const Task = ({ task, onEdit, onDelete, onComplete }) => {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
      <button onClick={() => onEdit(task.id)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <label>
        Complete:
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onComplete(task.id)}
        />
      </label>
    </div>
  );
};

export default Task;
