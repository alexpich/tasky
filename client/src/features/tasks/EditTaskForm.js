import React from "react";
import { useSelector } from "react-redux";
import { taskUpdated, selectTaskById } from "./taskSlice";

const EditTaskForm = ({ match }) => {
  const { taskId } = match.params;
  
  const task = useSelector((state) => selectTaskById(state, taskId));

  return <div>EditTaskForm</div>;
};

export default EditTaskForm;
