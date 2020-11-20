import axios from "axios";
import { ADD_TASK, SET_FILTER } from "./actionTypes";

export const addTask = (formProps) => (dispatch) => {
  axios.post("http://localhost:8080/task", formProps);
};

export const getTasks = () => (dispatch) => {
  axios.get("http://localhost:8080/task");
};
