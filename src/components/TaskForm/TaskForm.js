// TaskForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../actions/taskActions";
import "./TaskForm.css"; // Import your CSS file for styling
import CircularRadioButton from "../CircularRadioButton/CircularRadioButton"; // Import CircularRadioButton component

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [completed, setCompleted] = useState(false); // State for completion status

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const newTask = {
      title,
      description,
      priority,
      dueDate,
      completed, // Include completed status in the new task
    };

    // Dispatch action to add task to Redux store
    dispatch(addTask(newTask));

    // Save the task data to local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Clear the form fields
    setTitle("");
    setDescription("");
    setPriority("");
    setDueDate("");
    setCompleted(false); // Reset completed status

    // Reload the page URL
    window.location.reload();
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      <input
        type="text"
        placeholder="Due Date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      {/* Include CircularRadioButton for completion status */}
      <CircularRadioButton
        checked={completed}
        onChange={() => setCompleted(!completed)}
      />
      <div>
        <button onClick={handleSubmit}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskForm;
