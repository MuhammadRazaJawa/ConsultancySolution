package org.orangedevelopers.consultancy.solution.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.orangedevelopers.consultancy.solution.dao.PersonalDetailsDAO;
import org.orangedevelopers.consultancy.solution.entity.Admin;
import org.orangedevelopers.consultancy.solution.service.PersonalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserLogin {

	private static final String STUDENT_PORTAL = "redirect:/consultancy/studentPortal";
	
	@Autowired
	private PersonalDetailsService personalDetailsService;
	
	@Autowired
	private PersonalDetailsDAO personalDetailsDAO;
	
	@RequestMapping(value="/loginPage", method = RequestMethod.GET)
	public String login(){
		return "Login/welcome";
	}
	
	@RequestMapping(value="/", method = RequestMethod.GET)
	public String home(HttpServletRequest request, HttpServletResponse response) throws IOException{
		if(request.getSession().getAttribute("user") != null){
			return STUDENT_PORTAL;
		}else{
			return "Login/welcome";
		}
	}
	
	@RequestMapping(value="/login", method = RequestMethod.POST)
	public String loginUser(@RequestParam("username") String username, @RequestParam("password") String password,
			HttpServletRequest request, HttpServletResponse response, Model model) throws IOException{
		if(request.getSession().getAttribute("user") != null){
			response.sendRedirect("/project/home");
			return null;
		}else{
			Admin admin = personalDetailsService.loginUser(username, password);
			if(admin != null){
				request.getSession().setAttribute("user", admin);
				//return STUDENT_PORTAL;
				return "student/home";
			}else{
				return "student/error";
			}
		}
	}

}
