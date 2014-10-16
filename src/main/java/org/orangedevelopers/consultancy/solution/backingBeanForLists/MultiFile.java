package org.orangedevelopers.consultancy.solution.backingBeanForLists;

import java.util.List;

import org.orangedevelopers.consultancy.solution.entity.Language;
import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

public @Data class MultiFile {

	private List<MultipartFile> files;
	
/*	private List<Language> languageList;
*/	
}
