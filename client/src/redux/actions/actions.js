import { ADD_TASK, SET_FILTER } from "./actionTypes";

export const addTask = (content) => ({
  type: ADD_TASK,
  payload: {
    content,
  },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});
