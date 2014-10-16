package org.orangedevelopers.consultancy.solution.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="COUNTRY")
public @Data class Country {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "COUNTRY_ID")
	private int countryId;
	
	@Column(name = "COUNTRY_NAME")
	private String countryName;
}
