import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../actions/taskActions";
import "./TaskForm.css";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [dateError, setDateError] = useState("");
  const [priorityError, setPriorityError] = useState("");
  const [titleError, setTitleError] = useState(""); // State for title validation error
  const [descriptionError, setDescriptionError] = useState(""); // State for description validation error

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setTitleError("Title is required");
      return;
    } else {
      setTitleError("");
    }

    if (!description.trim()) {
      setDescriptionError("Description is required");
      return;
    } else {
      setDescriptionError("");
    }

    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dueDate)) {
      setDateError("Due date must be in dd/mm/yyyy format.");
      return;
    } else {
      setDateError("");
    }

    if (!/^(High|Medium|Low)$/i.test(priority)) {
      setPriorityError("Priority must be 'High', 'Medium', or 'Low'.");
      return;
    } else {
      setPriorityError("");
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      dueDate,
      completed,
    };

    dispatch(addTask(newTask));

    setTitle("");
    setDescription("");
    setPriority("");
    setDueDate("");
    setCompleted(false);
  };

  const handleDueDateChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,2}\/?\d{0,2}\/?\d{0,4}$/.test(value)) {
      setDueDate(value);
    }
  };

  return (
    <div className="task-form">
      {titleError && <p className="error">{titleError}</p>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {descriptionError && <p className="error">{descriptionError}</p>}
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Priority (High, Medium, Low)"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      {priorityError && <p className="error">{priorityError}</p>}
      <input
        type="text"
        placeholder="Due Date (dd/mm/yyyy)"
        value={dueDate}
        onChange={handleDueDateChange}
        pattern="\d{2}/\d{2}/\d{4}"
      />
      {dateError && <p className="error">{dateError}</p>}
      <div>
        <button onClick={handleSubmit}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskForm;
