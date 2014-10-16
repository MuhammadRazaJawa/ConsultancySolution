package org.orangedevelopers.consultancy.solution.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;
@Entity
@Table(name = "PERSONAL_DETAIL")
public @Data class PersonalDetail {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "PERSONAL_DETAIL_ID")
	private int personalDetailId;

	@Column(name = "ADDRESS")
	private String address;
	
	@Column(name = "COUNTRY")
	private String country;
	
	@Column(name = "POSTAL_CODE")
	private String postalCode;
	
	@Column(name = "CONTACT_NUMBER")
	private String contactNumber;
	
	@Column(name = "OTHER_CONTACT_NUMBER")
	private String otherContactNumber;
	
	@Column(name = "EMAIL")
	private String email;
	
	@Column(name = "HOME_ADDRESS")
	private String homeAddress;
	
	@OneToOne
	@JoinColumn(name = "GENERAL_DETAIL_ID")
	private Client generalDetailId;
	
}
