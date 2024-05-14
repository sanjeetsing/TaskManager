import * as actionTypes from "./actionTypes";

export const addTask = (task) => {
  return {
    type: actionTypes.ADD_TASK,
    payload: task,
  };
};

export const editTask = (taskId, updatedTask) => {
  return {
    type: actionTypes.EDIT_TASK,
    payload: { id: taskId, task: updatedTask },
  };
};

export const deleteTask = (taskId) => {
  return {
    type: actionTypes.DELETE_TASK,
    payload: taskId,
  };
};

export const completeTask = (taskId) => {
  return {
    type: actionTypes.COMPLETE_TASK,
    payload: taskId,
  };
};
