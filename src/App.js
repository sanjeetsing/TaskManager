// App.js
import React from "react";
import { Provider } from "react-redux";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskDisplay from "./components/TaskDisplay/TaskDisplay";
import store from "./store/store";
import Modal from "react-modal"; // Import react-modal
import "./App.css";

// Set the root element for react-modal
Modal.setAppElement("#root");

function App() {
  const handleEdit = (task) => {
    // Implement the logic to handle task edit, possibly using a state or modal
  };

  return (
    <Provider store={store}>
      <div className="App">
        <header className="header">
          <h1>TaskManager</h1>
        </header>
        <div className="task-container">
          <div className="task-box">
            <TaskForm />
          </div>
          <div className="task-box">
            <TaskDisplay onEdit={handleEdit} />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
