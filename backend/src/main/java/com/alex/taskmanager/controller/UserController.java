package com.alex.taskmanager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.alex.taskmanager.exception.UserCollectionException;
import com.alex.taskmanager.model.User;
import com.alex.taskmanager.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping(path = "/user")
	public User createUser(@RequestBody User user) {
		return userService.createUser(user);
	}

	@GetMapping(path = "/user")
	public List<User> getAllUsers() {
		List<User> users = userService.getAllUsers();
		return users;
	}

	@DeleteMapping(path = "/user/{id}")
	public ResponseEntity<String> deleteUserById(@PathVariable("id") String id) {
		try {
			userService.deleteUserById(id);
			return new ResponseEntity<>("Successfully deleted the user", HttpStatus.OK);
		} catch (UserCollectionException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/user/{id}")
	public User updateById(@PathVariable("id") String id, @RequestBody User newUser) {
		try {
			return userService.updateUser(id, newUser);
		} catch (UserCollectionException e) {
			e.printStackTrace();
		}
		return newUser;
	}

}
