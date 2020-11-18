package com.alex.taskmanager.controller;

import java.util.List;

import javax.validation.ConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.alex.taskmanager.exception.TaskCollectionException;
import com.alex.taskmanager.model.Task;
import com.alex.taskmanager.service.TaskService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TaskController {

	@Autowired
	private TaskService taskService;

	@PostMapping(path = "/task")
	public Task createTask(@RequestBody Task task) {
		return taskService.createTask(task);
	}

	@GetMapping("/task")
	public List<Task> getAllTasks() {
		List<Task> tasks = taskService.getAllTasks();
		return tasks;
	}

	@DeleteMapping("/task/{id}")
	public ResponseEntity<String> deleteTaskById(@PathVariable("id") String id) {
		try {
			taskService.deleteTaskById(id);
			return new ResponseEntity<>("Sucessfully deleted task with id " + id, HttpStatus.OK);
		} catch (TaskCollectionException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/task/{id}")
	public Task updateById(@PathVariable("id") String id, @RequestBody Task newTask) {
			try {
				return taskService.updateTask(id, newTask);
			} catch (TaskCollectionException e) {
				e.printStackTrace();
			}
			return newTask;
	}

}