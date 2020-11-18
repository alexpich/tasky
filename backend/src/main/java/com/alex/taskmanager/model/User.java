package com.alex.taskmanager.model;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
public class User {

	@Id
	private String id;

	@NotNull(message = "Email cannot be null")
	private String email;

	@NotNull(message = "First name cannot be null")
	private String firstName;

	@NotNull(message = "Last name cannot be null")
	private String lastName;

	@NotNull(message = "Password cannot be null")
	private String password;

	public User() {
	}

	public User(String id, @NotNull(message = "Email cannot be null") String email,
			@NotNull(message = "First name cannot be null") String firstName,
			@NotNull(message = "Last name cannot be null") String lastName,
			@NotNull(message = "Password cannot be null") String password) {
		super();
		this.id = id;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", email=" + email + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", password=" + password + "]";
	}

}
