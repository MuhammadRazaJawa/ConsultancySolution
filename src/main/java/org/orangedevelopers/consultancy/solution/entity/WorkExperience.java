package org.orangedevelopers.consultancy.solution.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
@Entity
@Table(name = "WORK_EXPERIENCE")
public @Data class WorkExperience {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "WORK_EXPERIENCE_ID")
	private int workExperienceId;
	
	@Column(name = "ORGANIZATION")
	private String organization;
	
	@Column(name = "DESIGNATION")
	private String designation;
	
	@Column(name = "duties")
	private String duties;
	
	@Column(name = "START_DATE")
	private String startDate;
	
	@Column(name = "END_DATE")
	private String endDate;

	@ManyToOne
	@JoinColumn(name = "GENERAL_DETAIL_ID")
	private Client generalDetailId;
}