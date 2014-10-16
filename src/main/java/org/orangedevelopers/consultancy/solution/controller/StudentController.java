package org.orangedevelopers.consultancy.solution.controller;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.orangedevelopers.consultancy.solution.backingBeanForLists.EducationalDetailList;
import org.orangedevelopers.consultancy.solution.backingBeanForLists.LanguageList;
import org.orangedevelopers.consultancy.solution.backingBeanForLists.MultiFile;
import org.orangedevelopers.consultancy.solution.backingBeanForLists.ProgramOfStudyList;
import org.orangedevelopers.consultancy.solution.backingBeanForLists.ReferenceList;
import org.orangedevelopers.consultancy.solution.backingBeanForLists.WorkExperienceList;
import org.orangedevelopers.consultancy.solution.dao.PersonalDetailsDAO;
import org.orangedevelopers.consultancy.solution.email.EmailSender;
import org.orangedevelopers.consultancy.solution.entity.Admin;
import org.orangedevelopers.consultancy.solution.entity.Client;
import org.orangedevelopers.consultancy.solution.entity.CurrentStudy;
import org.orangedevelopers.consultancy.solution.entity.PersonalDetail;
import org.orangedevelopers.consultancy.solution.entity.PersonalStatement;
import org.orangedevelopers.consultancy.solution.entity.ProgramOfStudy;
import org.orangedevelopers.consultancy.solution.entity.SearchCriteria;
import org.orangedevelopers.consultancy.solution.service.PersonalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;

@Controller
@RequestMapping("consultancy")
public class StudentController {

	private static final String STUDENT_PORTAL = "redirect:/consultancy/studentPortal";

	@Autowired
	private PersonalDetailsService personalDetailsService;

	@Autowired
	private PersonalDetailsDAO personalDetailsDAO;

	@RequestMapping(value = "/saveCurrentStudies", method = RequestMethod.GET)
	public String addCurrentStudies(
			@ModelAttribute("currentStudies") CurrentStudy currentStudy) {
		if (currentStudy.getCurrentStudiesId() == 0) {
			personalDetailsService.save(currentStudy);
		} else {
			personalDetailsService.update(currentStudy);
		}
		return STUDENT_PORTAL;
	}

	@RequestMapping(value = "/savePersonalDetail", method = RequestMethod.GET)
	public String addCurrentStudies(
			@ModelAttribute("personalDetail") PersonalDetail personalDetail) {
		System.out.println(personalDetail.getPersonalDetailId());
		if (personalDetail.getPersonalDetailId() == 0) {
			personalDetailsService.save(personalDetail);
		} else {
			personalDetailsService.update(personalDetail);
		}
		return STUDENT_PORTAL;
	}

	@RequestMapping(value = "/saveProgramOfStudy", method = RequestMethod.GET)
	public String addProgramOfStudy(
			@ModelAttribute("programOfStudyList") ProgramOfStudyList programOfStudyList,
			HttpServletRequest req) {
		for (ProgramOfStudy programOfStudy : programOfStudyList
				.getProgramOfStudyList()) {
			if (programOfStudy.getProgramOfStudyId() == 0) {
				personalDetailsService.save(programOfStudy);
			} else {
				personalDetailsService.update(programOfStudy);
			}
		}
		/*
		 * if(programOfStudyList.getProgramOfStudyList().get(0).getProgramOfStudyId
		 * () == 0){
		 * 
		 * }
		 * personalDetailsService.updateAll(programOfStudyList.getProgramOfStudyList
		 * ());
		 */
		System.out.println(programOfStudyList.getProgramOfStudyList().size());
		return STUDENT_PORTAL;
	}

	@RequestMapping(value = "/saveLanguageDetail", method = RequestMethod.GET)
	public String addLanguageDetail(
			@ModelAttribute("languageList") LanguageList languageList,
			HttpServletRequest req) {
		personalDetailsService.updateAll(languageList.getLanguageList());
		System.out.println(languageList.getLanguageList().size());
		return STUDENT_PORTAL;
	}

	@RequestMapping(value = "/saveEducationalDetail", method = RequestMethod.GET)
	public String addEducationalDetail(
			@ModelAttribute("educationalDetailList") EducationalDetailList educationalDetailList,
			HttpServletRequest req) {
		personalDetailsService.updateAll(educationalDetailList
				.getEducationalDetailList());
		System.out.println(educationalDetailList.getEducationalDetailList()
				.size());
		return STUDENT_PORTAL;
	}

	@RequestMapping(value = "/saveWorkExperience", method = RequestMethod.GET)
	public String addWorkExperience(
			@ModelAttribute("workExperienceList") WorkExperienceList workExperienceList,
			HttpServletRequest req) {
		personalDetailsService.updateAll(workExperienceList
				.getWorkExperienceList());
		System.out.println(workExperienceList.getWorkExperienceList().size());
		return STUDENT_PORTAL;
	}

	@RequestMapping(value = "/saveReference", method = RequestMethod.GET)
	public String addReference(
			@ModelAttribute("referenceList") ReferenceList referenceList,
			HttpServletRequest req) {
		personalDetailsService.updateAll(referenceList.getReferenceList());
		System.out.println(referenceList.getReferenceList().size());
		return STUDENT_PORTAL;
	}

	@RequestMapping(value = "/savePersonalStatement", method = RequestMethod.GET)
	public String addPersonalStatement(
			@ModelAttribute("referenceList") PersonalStatement statement,
			HttpServletRequest req) {
		if (statement.getPersonalStatementId() == 0) {
			personalDetailsService.save(statement);
			return STUDENT_PORTAL;
		} else {
			personalDetailsService.update(statement);
			return STUDENT_PORTAL;
		}
	}

	@RequestMapping(value = "/studentPortal", method = RequestMethod.GET)
	public String home(Model model, HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			model.addAttribute("countryList",
					personalDetailsService.getCountryList());
			model.addAttribute("cityList", personalDetailsService.getCityList());
			return "student/studentDetail";
		}
	}

	@RequestMapping(value = "/client", method = RequestMethod.GET)
	public String client(Model model, HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			model.addAttribute("countryList",
					personalDetailsService.getCountryList());
			model.addAttribute("cityList", personalDetailsService.getCityList());
			return "student/client";
		}
	}

	@RequestMapping(value = "/addClient", method = RequestMethod.GET)
	public String addClient(@ModelAttribute("client") Client client,
			Model model, HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			int id = personalDetailsService.save(client);
			model.addAttribute("id", id);
			System.out.println(id);
			//return "redirect:clientSearch";
			return "student/searchCriteriaRedirect";
		}
	}

	@RequestMapping(value = "/getCityListForCountry", method = RequestMethod.GET)
	public @ResponseBody String getCityList(@RequestParam("id") int countryId) {

		Gson json = new Gson();
		return json.toJson(personalDetailsService.getCityListForCountry(countryId));
	}

	@RequestMapping(value = "/updateClient", method = RequestMethod.GET)
	public String updateClient(@ModelAttribute("client") Client client,
			Model model, HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			boolean msg = personalDetailsDAO.saveOrUpdate(client);
			personalDetailsDAO.commitAndClose();
			model.addAttribute("id", msg);
			return "redirect:update";
		}
	}

	@RequestMapping(value = "/clientSearch", method = RequestMethod.GET)
	public String clientSearch(@ModelAttribute("id") int id, Model model,
			HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			model.addAttribute("id", id);
			model.addAttribute("countryList",
					personalDetailsService.getCountryList());
			model.addAttribute("cityList", personalDetailsService.getCityList());
			return "student/searchCriteria";
		}
	}

	@RequestMapping(value = "/saveSearchCriteria", method = RequestMethod.GET)
	public String saveClientSearch(
			@ModelAttribute("searchCriteria") SearchCriteria searchCriteria,
			HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			if (searchCriteria.getSearchCriteriaId() == 0) {
				personalDetailsService.save(searchCriteria);
			} else {
				personalDetailsService.saveOrUpdate(searchCriteria);
			}
			return "redirect:client";
		}
	}

	@RequestMapping(value = "/searchClient", method = RequestMethod.GET)
	public String searchClient(@RequestParam("attribute") String attribute,
			@RequestParam("keyword") String keyword, Model model,
			HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			Client client = personalDetailsService.searchClient(attribute,
					keyword);
			model.addAttribute("client", client);
			if (client.getGeneralDetailId() != 0) {
				model = personalDetailsService.getClientDetailToUpdate(
						client.getGeneralDetailId(), model);
			} else {
				model.addAttribute("countryList",
						personalDetailsService.getCountryList());
			}
			model.addAttribute("id", client.getGeneralDetailId());
			return "student/studentDetail";
		}
	}

	@RequestMapping(value = "/getClientDetail", method = RequestMethod.GET)
	public String getClientDetail(@RequestParam("id") int id, Model model) {
		// int idNew = Integer.parseInt(id);
		model = personalDetailsService.getClientDetailToUpdate(id, model);
		model.addAttribute("id", id);
		return STUDENT_PORTAL;
	}

	@RequestMapping(value = "/searchResultTest", method = RequestMethod.GET)
	public String searchResultTest(@ModelAttribute("client") Client client,
			Model model) {
		model.addAttribute("client", client);
		return "student/searchResultTest";
	}

	@RequestMapping(value = "/getClient", method = RequestMethod.GET)
	public String getClient(@RequestParam("attribute") String attribute,
			@RequestParam("keyword") String keyword, Model model,
			HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			Client client = personalDetailsService.searchClient(attribute,
					keyword);
			model.addAttribute("client", client);
			return "student/updateClient";
		}
	}

	@RequestMapping(value = "/update", method = RequestMethod.GET)
	public String update() {
		// Client client = personalDetailsService.get(id);
		// model.addAttribute("client", client);
		return "student/updateClient";
	}

	/*=====================WAQAS METHODS STARTS====================================*/
	
	/*@RequestMapping(value = "/viewAllCurrentStudies", method = RequestMethod.GET)
	public String viewAllCurrentStudy(Model model) {
		model.addAttribute("allCurrentStudiesList",
				personalDetailsService.getAll("CurrentStudy"));
		return "student/viewAllCurrentStudies";
	}

	@RequestMapping(value = "/viewAllClient", method = RequestMethod.GET)
	public String viewAllClient(Model model, HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			model.addAttribute("allClientList",
					personalDetailsService.getAll("Client"));
			return "student/viewAllClient";
		}
	}

	@RequestMapping(value = "/viewAllEducationalDetail", method = RequestMethod.GET)
	public String viewAllEducationalDetail(Model model) {
		model.addAttribute("allEducationalDetailList",
				personalDetailsService.getAll("EducationalDetail"));
		return "student/viewAllEducationalDetail";
	}

	@RequestMapping(value = "/viewAllLanguage", method = RequestMethod.GET)
	public String viewAllLanguage(Model model) {
		model.addAttribute("allLanguageList",
				personalDetailsService.getAll("Language"));
		return "student/viewAllLanguage";
	}

	@RequestMapping(value = "/viewAllPersonalDetail", method = RequestMethod.GET)
	public String viewAllPersonalDetail(Model model) {
		model.addAttribute("allPersonalDetailList",
				personalDetailsService.getAll("PersonalDetail"));
		return "student/viewAllPersonalDetail";
	}

	@RequestMapping(value = "/viewAllPersonalStatement", method = RequestMethod.GET)
	public String viewAllPersonalStatement(Model model) {
		model.addAttribute("allPersonalStatementList",
				personalDetailsService.getAll("PersonalStatement"));
		return "student/viewAllPersonalStatement";
	}

	@RequestMapping(value = "/viewAllProgramOfStudy", method = RequestMethod.GET)
	public String viewAllProgramOfStudy(Model model) {
		model.addAttribute("allProgramOfStudyList",
				personalDetailsService.getAll("ProgramOfStudy"));
		return "student/viewAllProgramOfStudy";
	}

	@RequestMapping(value = "/viewAllReference", method = RequestMethod.GET)
	public String viewAllReference(Model model) {
		model.addAttribute("allReferenceList",
				personalDetailsService.getAll("Reference"));
		return "student/viewAllReference";
	}

	@RequestMapping(value = "/viewAllSearchCriteria", method = RequestMethod.GET)
	public String viewAllSearchCriteria(Model model) {
		model.addAttribute("allSearchCriteriaList",
				personalDetailsService.getAll("SearchCriteria"));
		return "student/viewAllSearchCriteria";
	}

	@RequestMapping(value = "/viewAllWorkExperience", method = RequestMethod.GET)
	public @ResponseBody String viewAllWorkExperience(Model model) {
		model.addAttribute("allWorkExperienceList",
				personalDetailsService.getAll("WorkExperience"));

		return "student/viewAllWorkExperience";
	}*/
	
	/*=====================WAQAS METHODS ENDS====================================*/
	
	
	/*=====================RAZA METHODS STARTS====================================*/
	
	/*==============================VIEW CLIENT==================================================================*/

	@RequestMapping(value="/viewAllClientJson", method = RequestMethod.GET)
	public @ResponseBody String viewAllClientJson(Model model){

		Gson gson = new Gson();
		String list = 	gson.toJson(personalDetailsService.getAll("Client"));

		/*	model.addAttribute("allClientList", personalDetailsService.getAll("Client"));
return "student/listViews/viewAllClient";
		 */
		return list;
	}

	@RequestMapping(value="/viewAllClient", method = RequestMethod.GET)
	public String viewAllClient(){

		return "student/listViews/viewAllClient";

	}

	/*==============================VIEW CLIENT===========*********DATA TABLES*****===============================================*/
	@RequestMapping(value="/viewAllClientTwo", method = RequestMethod.GET)
	public String viewAllClientTwo(Model model){
		model.addAttribute("allClientList", personalDetailsService.getAll("Client"));
		return "student/listViews/viewAllClientTwo";
	}



	/*==============================VIEW CURRENT STUDIES==================================================================*/


	@RequestMapping(value="/viewAllCurrentStudiesJson", method = RequestMethod.GET)
	public @ResponseBody String viewAllCurrentStudyJson(Model model){

		Gson gson = new Gson();
		String list = 	gson.toJson(personalDetailsService.getAll("CurrentStudy"));

		return list;

		/*model.addAttribute("allCurrentStudiesList", personalDetailsService.getAll("CurrentStudy"));
return "student/listViews/viewAllCurrentStudies";*/
	}


	@RequestMapping(value="/viewAllCurrentStudies", method = RequestMethod.GET)
	public String viewAllCurrentStudy(Model model){

		return "student/listViews/viewAllCurrentStudies";
	}




	/*==============================VIEW EDUCATIONAL DETAILS==================================================================*/

	@RequestMapping(value="/viewAllEducationalDetailJson", method = RequestMethod.GET)
	public @ResponseBody  String viewGSONEducationalDetailJson(Model model){
		//model.addAttribute("allEducationalDetailList", personalDetailsService.getAll("EducationalDetail"));

		Gson gson = new Gson();
		String list = gson.toJson(personalDetailsService.getAll("EducationalDetail"));

		return list;
	}

	@RequestMapping(value="/viewAllEducationalDetail", method = RequestMethod.GET)
	public String viewAllEducationalDetail(Model model){

		//model.addAttribute("allEducationalDetailList", personalDetailsService.getAll("EducationalDetail"));
		return "student/listViews/viewAllEducationalDetail";
	}


	/*==============================VIEW LANGUAGE DETAILS==================================================================*/

	@RequestMapping(value="/viewAllLanguageJson", method = RequestMethod.GET)
	public @ResponseBody String viewAllLanguageJson(Model model){

		Gson gson = new Gson();
		String list = 	gson.toJson(personalDetailsService.getAll("Language"));

		return list;

		/*model.addAttribute("allLanguageList", personalDetailsService.getAll("Language"));
return "student/listViews/viewAllLanguage";*/
	}

	@RequestMapping(value="/viewAllLanguage", method = RequestMethod.GET)
	public String viewAllLanguage(Model model){

		//model.addAttribute("allLanguageList", personalDetailsService.getAll("Language"));
		return "student/listViews/viewAllLanguage";
	}


	/*==============================VIEW PERSONAL DETAILS==================================================================*/



	@RequestMapping(value="/viewAllPersonalDetailJson", method = RequestMethod.GET)
	public @ResponseBody String viewAllPersonalDetailJson(Model model){


		Gson gson = new Gson();
		String list = 	gson.toJson(personalDetailsService.getAll("PersonalDetail"));

		return list;

	/*	model.addAttribute("allPersonalDetailList", personalDetailsService.getAll("PersonalDetail"));
		return "student/listViews/viewAllPersonalDetail";*/
}


	@RequestMapping(value="/viewAllPersonalDetail", method = RequestMethod.GET)
	public String viewAllPersonalDetail(Model model){

		model.addAttribute("allPersonalDetailList", personalDetailsService.getAll("PersonalDetail"));
		return "student/listViews/viewAllPersonalDetail";
	}


	/*==============================VIEW PERSONAL STATEMENT==================================================================*/



	@RequestMapping(value="/viewAllPersonalStatementJson", method = RequestMethod.GET)
	public @ResponseBody String viewAllPersonalStatementJson(Model model){

		Gson gson = new Gson();
		String list = 	gson.toJson(personalDetailsService.getAll("PersonalStatement"));

		return list;

		/*model.addAttribute("allPersonalStatementList", personalDetailsService.getAll("PersonalStatement"));
return "student/listViews/viewAllPersonalStatement";*/
	}

	@RequestMapping(value="/viewAllPersonalStatement", method = RequestMethod.GET)
	public String viewAllPersonalStatement(Model model){

		//model.addAttribute("allPersonalStatementList", personalDetailsService.getAll("PersonalStatement"));
		return "student/listViews/viewAllPersonalStatement";
	}


	/*==============================VIEW PROGRAM OF STUDY==================================================================*/

	@RequestMapping(value="/viewAllProgramOfStudyJson", method = RequestMethod.GET)
	public @ResponseBody String viewAllProgramOfStudyJson(Model model){

		Gson gson = new Gson();
		String list = 	gson.toJson(personalDetailsService.getAll("ProgramOfStudy"));

		return list;


		/*model.addAttribute("allProgramOfStudyList", personalDetailsService.getAll("ProgramOfStudy"));
return "student/listViews/viewAllProgramOfStudy";*/
	}


	@RequestMapping(value="/viewAllProgramOfStudy", method = RequestMethod.GET)
	public String viewAllProgramOfStudy(Model model){

		//model.addAttribute("allProgramOfStudyList", personalDetailsService.getAll("ProgramOfStudy"));
		return "student/listViews/viewAllProgramOfStudy";
	}




	/*==============================VIEW REFERENCES ==================================================================*/



	@RequestMapping(value="/viewAllReferenceJson", method = RequestMethod.GET)
	public @ResponseBody String viewAllReferenceJson(Model model){
		
		Gson gson = new Gson();
		String list = 	gson.toJson(personalDetailsService.getAll("Reference"));

		return list;
		
		
		/*model.addAttribute("allReferenceList", personalDetailsService.getAll("Reference"));
		return "student/listViews/viewAllReference";*/
	}
	
	@RequestMapping(value="/viewAllReference", method = RequestMethod.GET)
	public String viewAllReference(Model model){
		model.addAttribute("allReferenceList", personalDetailsService.getAll("Reference"));
		return "student/listViews/viewAllReference";
	}

	/*==============================VIEW WORKEXPERIENCES ==================================================================*/

	@RequestMapping(value="/viewAllWorkExperienceJson", method = RequestMethod.GET)
	public @ResponseBody String viewAllWorkExperienceJson(Model model){
		
		Gson gson = new Gson();
		String list = 	gson.toJson(personalDetailsService.getAll("WorkExperience"));

		return list;
		
		/*model.addAttribute("allWorkExperienceList", personalDetailsService.getAll("WorkExperience"));
		return "student/listViews/viewAllWorkExperience";*/
	}
	
	
	@RequestMapping(value="/viewAllWorkExperience", method = RequestMethod.GET)
	public String viewAllWorkExperience(Model model){
		model.addAttribute("allWorkExperienceList", personalDetailsService.getAll("WorkExperience"));
		return "student/listViews/viewAllWorkExperience";
	}
	
	/*==============================VIEW SEARCH CRITERIA ==================================================================*/
	
	@RequestMapping(value="/viewAllSearchCriteria", method = RequestMethod.GET)
	public String viewAllSearchCriteria(Model model){
		model.addAttribute("allSearchCriteriaList", personalDetailsService.getAll("SearchCriteria"));
		return "student/listViews/viewAllSearchCriteria";
	}

	
	
	
	/*=====================RAZA METHODS ENDS====================================*/

	/*=================== Raza Dashboard Hirarchy Starts==============================*/
	
	@RequestMapping(value="/selectOption", method = RequestMethod.GET)
	public String selectOption(){
		return "student/selectOption";
	}
	
	@RequestMapping(value="/goToStudentPortal", method = RequestMethod.GET)
	public String goToStudentPortalMethod(){
		
		return "student/selectOptionForSP";
	}
	


	@RequestMapping(value="/goToGIQStudent", method = RequestMethod.GET)
	public String goToGIQStudentMethod(){
		return "student/client";
	}
	
	@RequestMapping(value="/goToRegisterStudent", method = RequestMethod.GET)
	public String goToRegisterStudentMethod(){
		
		return STUDENT_PORTAL;
	}
	
	
	@RequestMapping(value="/goToHome", method = RequestMethod.GET)
	public String goToHome(){
		
		return "student/home";
	}
	
	
	
	/*@RequestMapping(value="/goToStudentPortal", method = RequestMethod.GET)
	public String goToStudentPortal(){
		
		return STUDENT_PORTAL;
	}*/
	

	/*=================== Raza Dashboard Hirarchy Ends==============================*/
	
	/*
	 * @RequestMapping(value="/", method = RequestMethod.GET) public String
	 * home(){ return "Login/welcome"; }
	 * 
	 * @RequestMapping(value="/loginPage", method = RequestMethod.GET) public
	 * String login(){ return "Login/welcome"; }
	 */
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String loginUser(@RequestParam("username") String username,
			@RequestParam("password") String password,
			HttpServletRequest request, Model model) {
		Admin admin = personalDetailsService.loginUser(username, password);
		if (admin != null) {
			request.getSession().setAttribute("user", admin);
			return STUDENT_PORTAL;
			
		} else {
			return "student/error";
		}
	}

	@RequestMapping(value = "/changePasswordPage", method = RequestMethod.GET)
	public String changePasswordPage(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			return "student/changePassword";
		}
	}

	@RequestMapping(value = "/changePassword", method = RequestMethod.GET)
	public String changePassword(
			@RequestParam("currentPassword") String currentPassword,
			@RequestParam("newPassword") String newPassword,
			HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			String email = "vickyshah129@gmail.com";
			personalDetailsService.changePassword(currentPassword, newPassword,
					email);
			return STUDENT_PORTAL;
		}
	}

	@RequestMapping(value = "/resetPassword", method = RequestMethod.GET)
	public String resetPassword(@RequestParam("email") String email,
			HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			personalDetailsService.resetPassword(email);
			return STUDENT_PORTAL;
		}
	}

	@RequestMapping(value = "/sendMail", method = RequestMethod.POST)
	public String sendMail(@RequestParam("sendTo") String[] sendTo,
			@RequestParam("subject") String subject,
			@RequestParam("message") String message,
			HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			personalDetailsService.sendMultipleEmail(sendTo, subject, message);
			return STUDENT_PORTAL;
		}
	}
	
	
/*	@RequestMapping(value = "/sendMail", method = RequestMethod.POST)
	public String sendMail(@RequestParam("sendTo") String[] sendTo,
			@RequestParam("subject") String subject,
			@RequestParam("sendTo") String[] cc,
			@RequestParam("message") String message,
			HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			personalDetailsService.sendMultipleEmail(sendTo, subject, message);
			return STUDENT_PORTAL;
		}
	}
*/	
	/*@RequestMapping(value = "/sendMail", method = RequestMethod.POST)
	public String sendMail(@RequestParam("sendTo") String[] sendTo,
			@RequestParam("subject") String subject,
			@RequestParam("sendTo") String[] cc,
			@RequestParam("sendTo") String[] bcc,
			@RequestParam("message") String message,
			HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			personalDetailsService.sendMultipleEmail(sendTo, subject, message);
			return STUDENT_PORTAL;
		}
	}*/
	

	@RequestMapping(value = "/uploadFiles", method = RequestMethod.POST)
	public String uploadFiles(@ModelAttribute("files") MultiFile files,
			@RequestParam("id") int id, HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			String projectPath = "";
			String completePath = projectPath + id + "/docs/";
			Admin admin = (Admin) request.getSession().getAttribute("user");
			try {
				for (int i = 0; i < files.getFiles().size(); i++) {
					String name = files.getFiles().get(i).getOriginalFilename();
					// File dest = new File("D:/sample/" + name);
					File dest = new File(
							"D:/ainwain/ConsultancySolution/src/main/webapp/WEB-INF/documents/"
									+ admin.getAdminId() + "/" + name);
					FileUtils.writeByteArrayToFile(dest, files.getFiles()
							.get(i).getBytes());
				}
			} catch (IOException e) {
				e.printStackTrace();
			}

			return "student/uploadFiles";
		}
	}

	@RequestMapping(value = "/uploadFilesPage", method = RequestMethod.GET)
	public String uploadFilesPage(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		// model.addAttribute("clientEmailList",personalDetailsService.getAllClientsEmail());
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			return "student/uploadFiles";
		}
	}

	@RequestMapping(value = "/sendMail", method = RequestMethod.GET)
	public String sendMailPage(Model model, HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			model.addAttribute("clientEmailList",
					personalDetailsService.getAllClientsEmail());
			return "student/sendEmail";
		}
	}

	@RequestMapping(value = "/check", method = RequestMethod.GET)
	public String sendMailCheck(@RequestParam("sendTo") String[] sendTo,
			HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			return "student/sendEmail";
		}
	}

	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logout(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		if (request.getSession().getAttribute("user") == null) {
			response.sendRedirect("/project/");
			return null;
		} else {
			request.getSession().removeAttribute("user");
			return "redirect:/loginPage";
		}
	}

}
