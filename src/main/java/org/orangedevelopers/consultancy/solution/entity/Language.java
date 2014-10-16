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
@Table(name = "LANGUAGE")
public @Data class Language {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "LANGUAGE_DETAIL_ID")
	private int languageDetailId;
	
	@Column(name = "TEST_NAME")
	private String testName;
	
	@Column(name = "TEST_SCORE")
	private String testScore;
	
	@Column(name = "VALIDITY_DATE")
	private String validityDate;
	
	@Column(name = "TEST_DATE")
	private String testDate;

	@ManyToOne
	@JoinColumn(name = "GENERAL_DETAIL_ID")
	private Client generalDetailId;
}
