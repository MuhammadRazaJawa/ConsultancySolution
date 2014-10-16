package org.orangedevelopers.consultancy.solution.entity;

import java.util.Date;

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
@Table(name = "REFERENCE")
public @Data class Reference {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "REFERENCE_ID")
	private int referenceId;
	
	@Column(name = "NAME")
	private String name;
	
	@Column(name = "DESIGNATION")
	private String designation;
	
	@Column(name = "RELATIONSHIP")
	private String relationship;
	
	@Column(name = "ADDRESS")
	private String address;
	
	@Column(name = "MOBILE_CONTACT")
	private String mobileContact;
	
	@Column(name = "OTHER_CONTACT")
	private String otherContact;
	
	@Column(name = "FAX")
	private String fax;
	
	@Column(name = "EMAIL")
	private String email;
	
	@Column(name = "YEARS_KNOWN")
	private String yearsKnown;

	@OneToOne
	@JoinColumn(name = "GENERAL_DETAIL_ID")
	private Client generalDetailId;
}
