package org.orangedevelopers.consultancy.solution.sessionmanager;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
@Component
public class SessionManager {

	@Autowired
	private SessionFactory sessionFactory;
	
	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public Session getSession(){
		Session session = null;
		try{
			session = sessionFactory.openSession();
		}catch(HibernateException ex){
			ex.printStackTrace();
		}
		return session;
	}
}
