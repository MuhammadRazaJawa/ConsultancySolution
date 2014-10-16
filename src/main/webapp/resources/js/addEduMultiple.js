// JavaScript Document


var rowNum = 1;

function addRow(frm) {
	
	var idEDJS = document.getElementById("idED").value;
	
	var row = '<div id="rowNum'+rowNum+'"> <input type="hidden" name="educationalDetailList['+rowNum+'].generalDetailId.generalDetailId"  value='+idEDJS+'> <div id="first" style="float:left;"> <div class="item"> <label> <span>Institute Name:</span> <input type="text" name="educationalDetailList['+ rowNum +'].instituteName"  required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Institue Name here</p> </div></div></div> <div class="item"> <label> <span>Address:</span> <input class="inputClass" type="text" name="educationalDetailList['+ rowNum +'].instituteName" required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Institute Address here</p> </div></div></div> <br/> <div class="item"> <label> <span>Degree:</span> <input type="text" name="educationalDetailList['+ rowNum +'].degreeName" required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Degree Program here</p> </div></div></div> <br/> <div class="item"> <label> <span>Subject</span> <input type="text" name="educationalDetailList['+ rowNum +'].subject" required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Major Subject here</p> </div></div></div> <br/><div class="item"> <label> <span>Grade Awarded</span> <input type="text" name="educationalDetailList['+ rowNum +'].gradeAwarded" required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Grade Awarded here</p> </div></div></div> <br/> <div class="item"> <label> <span>Date Awarded</span> <input type="date" name="educationalDetailList['+ rowNum +'].dateAwarded" required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Date Awarded here</p> </div></div></div> </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> <input style="margin-right:0px; background: transparent;	 border: none !important;" type="image" src="./resources/Interface/icons/delete.png" value="" onclick="removeRow('+rowNum+');"><br/><br/> <p>----------------------------------------------------------------------</p> </div>';
	
	

	jQuery('#itemRows').append(row);
	//frm.add_qty.value = '';
	//frm.add_name.value = '';
	rowNum ++;
}

function removeRow(rnum) {
	jQuery('#rowNum'+rnum).remove();
}

