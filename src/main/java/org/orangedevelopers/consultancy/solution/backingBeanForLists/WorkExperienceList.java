package org.orangedevelopers.consultancy.solution.backingBeanForLists;

import java.util.List;

import org.orangedevelopers.consultancy.solution.entity.Language;
import org.orangedevelopers.consultancy.solution.entity.WorkExperience;

import lombok.Data;

public @Data class WorkExperienceList {

	private List<WorkExperience> workExperienceList;
	
/*	private List<Language> languageList;*/
}
