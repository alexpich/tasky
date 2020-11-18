package com.alex.taskmanager.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alex.taskmanager.exception.UserCollectionException;
import com.alex.taskmanager.model.User;
import com.alex.taskmanager.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepo;

	public User createUser(User user) {
		return userRepo.save(user);
	}

	public List<User> getAllUsers() {
		List<User> users = userRepo.findAll();

		if (users.size() > 0) {
			return users;
		} else {
			return new ArrayList<User>();
		}
	}

	public void deleteUserById(String id) throws UserCollectionException {
		Optional<User> userOptional = userRepo.findById(id);

		if (!userOptional.isPresent()) {
			throw new UserCollectionException(UserCollectionException.NotFoundException(id));
		} else {
			userRepo.deleteById(id);
		}
	}

	public User updateUser(String id, User newUser) throws UserCollectionException {
		Optional<User> userWithId = userRepo.findById(id);

		if (userWithId.isPresent()) {
			User userToUpdate = userWithId.get();
			BeanUtils.copyProperties(newUser, userToUpdate);

			// Ensure that newUser doesn't get added as a new document
			userToUpdate.setId(id);
			return userRepo.save(userToUpdate);
		} else {
			throw new UserCollectionException(UserCollectionException.NotFoundException(id));
		}
	}
}
