package org.orangedevelopers.consultancy.solution.daoimpl;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.orangedevelopers.consultancy.solution.dao.PersonalDetailsDAO;
import org.orangedevelopers.consultancy.solution.entity.Admin;
import org.orangedevelopers.consultancy.solution.entity.City;
import org.orangedevelopers.consultancy.solution.entity.Client;
import org.orangedevelopers.consultancy.solution.entity.Country;
import org.springframework.stereotype.Repository;
@Repository
public class PersonalDetailsDAOImpl extends PersistanceDAOImpl implements PersonalDetailsDAO {

	@Override
	public <T> T loginUser(String userName, String password) {
		T t = null;		
		Query loginCheckQuery = this.getSessionAndBeginTransaction().createQuery("from Admin WHERE username=:username AND password=:password");
		loginCheckQuery.setString("username", userName);
		loginCheckQuery.setString("password", password);
		try{
			t = (T)loginCheckQuery.uniqueResult();
		}catch(HibernateException ex){
			ex.getStackTrace();
		}

		return t;
	}

	@Override
	public boolean changePassword(String currentPassword, String newPassword, String email) {
		Query changePasswordQuery = this.getSessionAndBeginTransaction().createQuery("UPDATE Admin set password = :newPassword "
				+ "WHERE email =:email AND password = :currentPassword");
		changePasswordQuery.setString("newPassword", newPassword);
		changePasswordQuery.setString("email", email);
		changePasswordQuery.setString("currentPassword", currentPassword);
		try{
			changePasswordQuery.executeUpdate();
		}catch(HibernateException ex){
			ex.getStackTrace();
		}
		return true;
	}

	@Override
	public String verifyEmail(String email) {
		Admin admin = null;
		String password = "";
		try{
			admin = (Admin) this.getSessionAndBeginTransaction().createQuery("from Admin where email = :email").setString("email", email).uniqueResult();
			if(admin != null){
				password = admin.getPassword();
		}
		}catch(HibernateException ex){
			ex.getStackTrace();
		}
		return password;
	}

	@Override
	public List<Country> getCountryList() {
		return this.getSessionAndBeginTransaction().createQuery("from Country").list();
	}

	@Override
	public List<City> getCityList() {
		return this.getSessionAndBeginTransaction().createQuery("from City").list();
	}

	@Override
	public List<Client> getAllClientsEmail() {
		return this.getSessionAndBeginTransaction().createQuery("from Client").list();
	}

	@Override
	public List<City> getCityListForCountry(int countryId) {
		Query query = this.getSessionAndBeginTransaction().createQuery("SELECT cityId,cityName from City where countryId = :countryId");
		query.setInteger("countryId", countryId);
		return query.list();
	}
	
}
