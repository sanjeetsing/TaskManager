import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, completeTask, editTask } from "../../actions/taskActions";
import Modal from "react-modal";
import "./TaskDisplay.css";

const TaskDisplay = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({
    id: "",
    title: "",
    description: "",
    priority: "",
    dueDate: "",
  });

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleComplete = (taskId) => {
    dispatch(completeTask(taskId));
  };

  const openEditModal = (task) => {
    setCurrentTask(task);
    const isConfirmed = window.confirm(
      "Are you sure you want to edit this task?"
    );
    if (isConfirmed) {
      setModalIsOpen(true);
    }
  };

  const closeEditModal = () => {
    setModalIsOpen(false);
    setCurrentTask({
      id: "",
      title: "",
      description: "",
      priority: "",
      dueDate: "",
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentTask({ ...currentTask, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask(currentTask.id, currentTask));
    closeEditModal();
  };

  return (
    <div className="task-display">
      <h2>Task List</h2>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div className="task-box">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Priority: {task.priority}</p>
              <p>Due Date: {task.dueDate}</p>
              <button className="edit" onClick={() => openEditModal(task)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(task.id)}>
                Delete
              </button>
              <button
                className="complete"
                onClick={() => handleComplete(task.id)}
              >
                {task.completed ? "Undo Complete" : "Complete"}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeEditModal}
        contentLabel="Edit Task"
      >
        <div className="edit-task-form">
          <h2>Edit Task</h2>
          <form onSubmit={handleEditSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={currentTask.title}
              onChange={handleEditChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={currentTask.description}
              onChange={handleEditChange}
            />
            <input
              type="text"
              name="priority"
              placeholder="Priority (High, Medium, Low)"
              value={currentTask.priority}
              onChange={handleEditChange}
            />
            <input
              type="text"
              name="dueDate"
              placeholder="Due Date (dd/mm/yyyy)"
              value={currentTask.dueDate}
              onChange={handleEditChange}
            />
            <button type="submit">Save Changes</button>
            <button type="button" onClick={closeEditModal}>
              Cancel
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default TaskDisplay;
