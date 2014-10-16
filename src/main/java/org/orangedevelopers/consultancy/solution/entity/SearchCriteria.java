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
@Table(name = "SEARCH_CRITERIA")
public @Data class SearchCriteria {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "SEARCH_CRITERIA_ID")
	private int searchCriteriaId;
	
	@Column(name = "COUNTRY")
	private String country;
	
	@Column(name = "INSTITUTE_TYPE")
	private String instituteType;
	
	@Column(name = "INSTITUTE")
	private String institute;
	
	@Column(name = "PROGRAM_OFFERED")
	private String programOffered;
	
	@OneToOne
	@JoinColumn(name = "GENERAL_DETAIL_ID")
	private Client generalDetailId;
}
