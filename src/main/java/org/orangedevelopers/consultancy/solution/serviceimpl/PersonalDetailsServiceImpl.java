package org.orangedevelopers.consultancy.solution.serviceimpl;

import java.util.List;

import javax.transaction.Transactional;

import org.orangedevelopers.consultancy.solution.dao.PersonalDetailsDAO;
import org.orangedevelopers.consultancy.solution.email.EmailSender;
import org.orangedevelopers.consultancy.solution.entity.City;
import org.orangedevelopers.consultancy.solution.entity.Client;
import org.orangedevelopers.consultancy.solution.entity.Country;
import org.orangedevelopers.consultancy.solution.service.PersonalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
@Service
@Transactional
public class PersonalDetailsServiceImpl implements PersonalDetailsService {

	@Autowired
	private PersonalDetailsDAO personalDetailsDAO;

	@Autowired
	private EmailSender emailSender;
	
	@Override
	public <T> int save(T entity) {
		int id = personalDetailsDAO.save(entity);
		personalDetailsDAO.commitAndClose();
		return id;
	}

	@Override
	public <T> boolean update(T entity) {
		personalDetailsDAO.update(entity);
		personalDetailsDAO.commitAndClose();
		return false;
	}

	@Override
	public <T> boolean remove(T entity) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public <T> T get(int id) {
		T t = personalDetailsDAO.getById(id);
		personalDetailsDAO.commitAndClose();
		return t;
	}

	@Override
	public <T> List<T> getAll(String entityName) {
		List<T> list = personalDetailsDAO.getAll(entityName);
		personalDetailsDAO.closeSession();
		return list;
	}

	@Override
	public Client searchClient(String attribute, String keyword) {
		Client client = personalDetailsDAO.searchClient(attribute, keyword);
		personalDetailsDAO.commitAndClose();
		return client;
	}

	@Override
	public Model getClientDetailToUpdate(int id, Model model) {
		personalDetailsDAO.getClientDetailToUpdate(id, model);
		personalDetailsDAO.commitAndClose();
		return model;
	}

	@Override
	public <T> T loginUser(String userName, String password) {
		T t = personalDetailsDAO.loginUser(userName, password);
		personalDetailsDAO.commitAndClose();
		return t;
	}

	@Override
	public boolean changePassword(String currentPassword, String newPassword, String email) {
		
		personalDetailsDAO.changePassword(currentPassword, newPassword, email);
		personalDetailsDAO.commitAndClose();
		return true;
	}

	@Override
	public boolean sendSingleEmail(String sendTo, String subject, String message) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean sendMultipleEmail(String[] sendTo, String subject,
			String message) {
		//get Email Id and set it 
		emailSender.sendMultipleMail(sendTo, subject, message);
		return true;
	}

	@Override
	public boolean resetPassword(String email) {
		String password = personalDetailsDAO.verifyEmail(email);
		if(password.equalsIgnoreCase("") || password.length() >0){
			emailSender.sendSingleMail(email, "Password Recovery", "Your new Password is: "+password);
			return true;
		}else{
			return false;
		}
	}

	@Override
	public <T> void saveOrUpdate(T entity) {
		personalDetailsDAO.saveOrUpdate(entity);
		personalDetailsDAO.commitAndClose();
	}

	@Override
	public <T> boolean updateAll(List<T> list) {
		personalDetailsDAO.updateAll(list);
		personalDetailsDAO.commitAndClose();
		return true;
	}

	@Override
	public List<Country> getCountryList() {
		List<Country> list = personalDetailsDAO.getCountryList();
		personalDetailsDAO.commitAndClose();
		return list;
	}

	@Override
	public List<City> getCityList() {
		List<City> list = personalDetailsDAO.getCityList();
		personalDetailsDAO.commitAndClose();
		return list;
	}

	@Override
	public List<Client> getAllClientsEmail() {
		List<Client> list = personalDetailsDAO.getAllClientsEmail();
		personalDetailsDAO.commitAndClose();
		return list;
	}

	@Override
	public List<City> getCityListForCountry(int countryId) {
		List<City> list = personalDetailsDAO.getCityListForCountry(countryId);
		personalDetailsDAO.commitAndClose();
		return list;
	}
}
