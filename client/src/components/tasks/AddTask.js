import React, { useState } from "react";
import styled from "styled-components";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
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

const AddTask = () => {
  const classes = useStyles();

  const initialState = {
    task: "",
    category: "",
    status: "",
  };
  const [item, setItem] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSelectChange = (value, action) => {
    setItem({
      ...item,
      [action.name]: value.value,
    });
    console.log(item);
  };

  const addTask = (e) => {
    // TODO: Call the task service and post
    e.preventDefault();
    console.log(item);
    console.log("Task added.");
  };

  return (
    <Container>
      <h3>Add a Task</h3>
      <Form>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Task</InputLabel>
          <Input type="text" name="task" onChange={handleInputChange} />
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Input type="text" name="category" onChange={handleInputChange} />
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="label"
            id="select"
            name="status"
            value={item.status}
            onChange={handleInputChange}
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

export default AddTask;
