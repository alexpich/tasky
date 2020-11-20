import React, { useState } from "react";
import styled from "styled-components";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
}));

const TaskForm = () => {
  const classes = useStyles();

  const initialState = {
    task: "",
    category: "",
    status: "In Progress",
  };
  const [item, setItem] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
    // somehow "name" is blank
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const addTask = (e) => {
    // TODO: Call the task service and post
    e.preventDefault();

    console.log("Task added.");
  };

  return (
    <Container>
      <h3>Task Form</h3>
      <Form>
        <FormControl>
          <Input placeholder="Task" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <Input placeholder="Category" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <Select
            labelId="label"
            id="select"
            value="In Progress"
            onChange={handleChange}
          >
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Stuck">Stuck</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
          </Select>
        </FormControl>
      </Form>
      <Button variant="contained" color="primary" onClick={addTask}>
        Add
      </Button>
    </Container>
  );
};

export default TaskForm;