// App.js
import React from "react";
import { Provider } from "react-redux";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import TaskDisplay from "./components/TaskDisplay/TaskDisplay"; // Import TaskDisplay component
import store from "./store/store";
import "./App.css"; // Import your CSS file for styling

function App() {
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
            <TaskDisplay /> {/* Render TaskDisplay component */}
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
