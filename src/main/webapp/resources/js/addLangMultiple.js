// JavaScript Document

var rowNumLang = 1;


function addRowLang(frmLang) {
	
	
	var idLDJS = document.getElementById("idLD").value;
	
	
	var rowLang = '<div id="rowNumLang'+rowNumLang+'"> <input type="hidden" name="languageList['+rowNumLang+'].generalDetailId.generalDetailId"  value='+idLDJS+'><div id="first" style="float:left;"> <div class="item"> <label> <span>Test Name:</span> <input type="text" name="languageList['+ rowNumLang +'].testName"  required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Test Name here</p> </div></div></div> <div class="item"> <label> <span>Test Score:</span> <input class="inputClass" type="text" name="languageList['+ rowNumLang +'].testScore" required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Test Score here</p> </div></div></div> <br/> <div class="item"> <label> <span>Test Date:</span> <input type="date" name="languageList['+ rowNumLang +'].validityDate" required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Test Date here</p> </div></div></div> <br/> <div class="item"> <label> <span>Validity Date:</span> <input type="date" name="languageList['+ rowNumLang +'].validityDate" required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Validity of Test here</p> </div></div></div> </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> <input style="margin-right:0px; background: transparent;	 border: none !important;" type="image" src="./resources/Interface/icons/delete.png" value="" onclick="removeRowLang('+rowNumLang+');"> <p>----------------------------------------------------------------------</p> </div>';;	

		
	
	jQuery('#itemRowsLang').append(rowLang);
	//frmLang.add_qty.value = '';
	//frmLang.add_name.value = '';
	rowNumLang ++;
}

function removeRowLang(rnum) {
	jQuery('#rowNumLang'+rnum).remove();
}

