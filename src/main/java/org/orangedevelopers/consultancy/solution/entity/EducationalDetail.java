package org.orangedevelopers.consultancy.solution.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;
@Entity
@Table(name = "EDUCATIONAL_DETAIL")
public @Data class EducationalDetail {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "EDUCATIONAL_DETAIL_ID")
	private int educationalDetailId;
	
	@Column(name = "INSTITUTE_NAME")
	private String instituteName;
	
	@Column(name = "DEGREE_NAME")
	private String degreeName;
	
	@Column(name = "SUBJECT")
	private String subject;
	
	@Column(name = "GRADE_AWARDED")
	private String gradeAwarded;
	
	@Column(name = "DATE_AWARDED")
	private String dateAwarded;
	
	@ManyToOne
	@JoinColumn(name = "GENERAL_DETAIL_ID")
	private Client generalDetailId;
}