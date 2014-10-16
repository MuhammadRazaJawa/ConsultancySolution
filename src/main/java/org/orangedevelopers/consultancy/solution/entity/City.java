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
@Table(name = "CITY")
public @Data class City {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "CITY_ID")
	private int cityId;

	@Column(name = "CITY_NAME")
	private String cityName;
	
	@ManyToOne
	@JoinColumn(name = "COUNTRY_ID")
	private Country countryId;
}
