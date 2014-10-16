package org.orangedevelopers.consultancy.solution.dao;

import java.util.List;

import org.orangedevelopers.consultancy.solution.entity.City;
import org.orangedevelopers.consultancy.solution.entity.Client;
import org.orangedevelopers.consultancy.solution.entity.Country;
import org.orangedevelopers.consultancy.solution.persistanceDAO.PersistanceDAO;
public interface PersonalDetailsDAO extends PersistanceDAO {

	<T> T loginUser(String userName, String password);
	
	boolean changePassword(String oldPassword, String newPassword, String email);
	
	String verifyEmail(String email);
	
	List<Country> getCountryList();
	
	List<City> getCityList();
	
	List<Client> getAllClientsEmail();
	
	List<City> getCityListForCountry(int countryId);
	
}
