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
@Table(name = "PROGRAM_OF_STUDY")
public @Data class ProgramOfStudy {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "PROGRAM_OF_STUDY_ID")
	private int programOfStudyId;
	
	@Column(name = "AWARDING_BODY")
	private String awardingBody;
	
	@Column(name = "TITLE_OF_COURSE")
	private String titleOfCourse;
	
	@Column(name = "START_DATE")
	private String startDate;
	
	@Column(name = "YEAR_OF_ENTRY")
	private String yearOfEntry;

	@ManyToOne
	@JoinColumn(name = "GENERAL_DETAIL_ID")
	private Client generalDetailId;

}
