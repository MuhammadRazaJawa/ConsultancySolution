package org.orangedevelopers.consultancy.solution.entity;

import java.sql.Date;

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
@Table(name = "CURRENT_STUDY")
public @Data class CurrentStudy {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "CURRENT_STUDIES_ID")
	private int currentStudiesId;

	@Column(name = "PROGRAM_TITLE")
	private String programTitle;
	
	@Column(name = "UNIVERSITY")
	private String university;
	
	@Column(name = "CITY")
	private String city;
	
	@Column(name = "COUNTRY")
	private String country;
	
	@Column(name = "START_DATE")
	private String startDate;
	
	@Column(name = "END_DATE")
	private String endDate;
	
	@Column(name = "HIGHER_LEVEL_OF_QUALIFICATION")
	private String higherLevelOfQualification;
	
	@Column(name = "EXPECTED_DATE_OF_COMPLETION")
	private String expectedDateOfCompletion;
	
	@Column(name = "have_studied_abroad")
	private boolean haveStudiedAbroad;

	@OneToOne
	@JoinColumn(name = "GENERAL_DETAIL_ID")
	private Client generalDetailId;
}
