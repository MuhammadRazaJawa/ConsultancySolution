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
@Table(name = "PERSONAL_STATEMENT")
public @Data class PersonalStatement {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "PERSONAL_STATEMENT_ID")
	private int personalStatementId;
	
	@Column(name = "PERSONAL_STATEMENT" , length = 1000)
	private String personalStatement;

	@OneToOne
	@JoinColumn(name = "GENERAL_DETAIL_ID")
	private Client generalDetailId;
}
