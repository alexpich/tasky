import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/client";

const initialState = {
  tasks: [],
  status: "idle",
  error: null,
};

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await client.get("http://localhost:8080/task");
  console.log(response);
  return response.tasks;
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    taskAdded: {
      reducer(state, action) {
        state.tasks.push(action.payload);
      },
    },
    taskUpdated(state, action) {
      const { id, title, status, category } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (existingTask) {
        existingTask.title = title;
        existingTask.status = status;
        existingTask.category = category;
      }
    },
  },
});

export const { taskAdded, taskUpdated } = tasksSlice.actions;

export default tasksSlice.reducer;

export const selectAllTasks = (state) => state.tasks.tasks;

export const selectTaskById = (state, taskId) =>
  state.tasks.tasks.find((task) => task.id === taskId);
