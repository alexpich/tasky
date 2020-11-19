import React from "react";
import { useSelector } from "react-redux";
import { selectTaskById } from "./taskSlice";

const SingleTaskPage = ({ match }) => {
  const { taskId } = match.params;
  
  const task = useSelector((state) => selectTaskById(state, taskId));

  return <div>SingleTaskPage</div>;
};

export default SingleTaskPage;
