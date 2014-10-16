// JavaScript Document

var rowNumPOS = 1;



function addRowPOS(frmPOS) {
	
	var idPOSJS = document.getElementById("idPOS").value;
	
	var rowPOS = '<div id="rowNumPOS'+rowNumPOS+'"> <input type="hidden" name="programOfStudyList['+rowNumPOS+'].generalDetailId.generalDetailId" value='+idPOSJS+'> <div id="first" style="float:left;"> <div class="item"> <label> <span>Awarding Body:</span> <input type="text" name="programOfStudyList['+rowNumPOS+'].awardingBody"  required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Awarding Body here</p> </div></div></div> <div class="item"> <label> <span>Title of Course:</span> <input class="inputClass" type="text" name="programOfStudyList['+rowNumPOS+'].titleOfCourse" required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Title of Course here</p> </div></div></div> <br/> <div class="item"> <label> <span>Start Date:</span> <input type="date" name="programOfStudyList['+rowNumPOS+'].startDate" required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Start Date here</p> </div></div></div> <br/> <div class="item"> <label> <span>Year of Entry:</span> <input type="text" name="programOfStudyList['+rowNumPOS+'].yearOfEntry" required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Year of Entry</p> </div></div></div> </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> <input style="margin-right:0px; background: transparent;	 border: none !important;" type="image" src="./resources/Interface/icons/delete.png" value="" onclick="removeRowPOS('+rowNumPOS+');"> <p>----------------------------------------------------------------------</p> </div>';

	jQuery('#itemRowsPOS').append(rowPOS);
	//frmPOS.add_qty.value = "";
	//frmPOS.add_name.value = "";
	rowNumPOS ++;
	
}

function removeRowPOS(rnum) {
	jQuery('#rowNumPOS'+rnum).remove();
}



				
		 