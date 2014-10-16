package org.orangedevelopers.consultancy.solution.service;

import java.util.List;

import org.orangedevelopers.consultancy.solution.entity.City;
import org.orangedevelopers.consultancy.solution.entity.Client;
import org.orangedevelopers.consultancy.solution.entity.Country;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public interface PersonalDetailsService {

	<T> int save(T entity);
	
	<T> boolean update(T entity);
	
	<T> boolean remove(T entity);
	
	<T> T get(int id);
	
	<T> List<T> getAll(String entityName);
	
	Client searchClient(String attribute, String keyword);
	
	Model getClientDetailToUpdate(int id, Model model);
	
	<T> T loginUser(String userName, String password);
	
	boolean changePassword(String currentPassword, String newPassword, String email);
	
	boolean sendSingleEmail(String sendTo, String subject, String message);
	
	boolean sendMultipleEmail(String[] sendTo, String subject, String message);
	
	boolean resetPassword(String email);
	
	List<Client> getAllClientsEmail();
	
	<T> void saveOrUpdate(T t);
	
	<T> boolean updateAll(List<T> list);
	
	List<Country> getCountryList();
	
	List<City> getCityList();
	
	List<City> getCityListForCountry(int countryId);
	
}