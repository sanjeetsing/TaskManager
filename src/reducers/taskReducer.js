// taskReducer.js
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case actionTypes.EDIT_TASK:
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, ...action.payload.task };
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTasks,
      };
    case actionTypes.DELETE_TASK:
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return {
        ...state,
        tasks: filteredTasks,
      };
    case actionTypes.COMPLETE_TASK:
      const completedTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      return {
        ...state,
        tasks: completedTasks,
      };
    default:
      return state;
  }
};

export default taskReducer;
