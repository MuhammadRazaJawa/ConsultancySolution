package org.orangedevelopers.consultancy.solution.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

import org.springframework.context.annotation.Scope;
@Entity
@Table(name = "ADMIN")
public @Data class Admin {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "ADMIN_ID")
	private int adminId;
	private String username;
	private String password;
	private String email;
	private String mobileNumber;
	private String address;
	private String firstName;
	private String fatherName;
	
}
