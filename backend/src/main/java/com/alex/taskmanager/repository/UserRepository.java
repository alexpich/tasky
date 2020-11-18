package com.alex.taskmanager.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.alex.taskmanager.model.User;

public interface UserRepository extends MongoRepository<User, String> {

}
