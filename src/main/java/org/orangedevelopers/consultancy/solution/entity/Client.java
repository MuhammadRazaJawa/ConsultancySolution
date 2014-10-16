package org.orangedevelopers.consultancy.solution.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
@Entity
@Table(name = "CLIENT")
public @Data class Client {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "GENERAL_DETAIL_ID")
	private int generalDetailId;
	
	@Column(name = "FIRST_NAME")
	private String firstName;
	
	@Column(name = "FATHER_NAME")
	private String fatherName;

	//new
	@Column(name = "DATE_OF_BIRTH")
	private String dateOfBirth;
	
	//new
	@Column(name = "POSTAL_CODE")
	private String postalCode;
	
	@Column(name = "AGE")
	private int age;

	@Column(name = "COUNTRY")
	private String country;
	
	@Column(name = "CITY")
	private String city;
	
	@Column(name = "MOBILE_NUMBER")
	private String mobileNumber;
	
	@Column(name = "OTHER_CONTACT")
	private String otherContact;
	
	@Column(name = "FIRST_LANGUAGE")
	private String firstLanguage;
	
	@Column(name = "NIC")
	private String nic;
	
	@Column(name = "STATUS")
	private String status;
	
	@Column(name = "EMAIL")
	private String email;
	
	@Column(name = "PASSPORT")
	private String passport;

}
