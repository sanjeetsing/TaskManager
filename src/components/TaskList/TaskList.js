// TaskList.js
import React from "react";
import Task from "../Task/Task";
import "./TaskList.css"; // Import your CSS file for styling

const TaskList = ({ tasks, onEdit, onDelete, onComplete }) => {
  // Check if tasks is undefined or null before attempting to map over it
  if (!tasks) {
    return <div>No tasks available</div>;
  }
  return (
    <div className="task-list">
      {tasks?.map((task) => (
        <Task
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
