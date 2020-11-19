import React from "react";
import { useSelector } from "react-redux";
import { selectAllTasks } from "./taskSlice";

const TasksList = () => {
  const tasks = useSelector(selectAllTasks);

  return <div>TasksList</div>;
};

export default TasksList;
