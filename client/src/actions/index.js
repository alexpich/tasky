import axios from "axios";
import { ADD_TASK } from "./types";

export const addTask = (formProps) => (dispatch) =>
  axios.post("http://localhost:8080/task");
