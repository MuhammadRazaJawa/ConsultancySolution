// JavaScript Document



var rowNumWorkExp = 1;

function addRowWorkExp(frmWorkExp) {
	
	var idWEDJS = document.getElementById("idWED").value;
	
	var rowWorkExp = '<div id="rowNumWorkExp'+rowNumWorkExp+'"><input type="hidden" name="workExperienceList['+rowNumWorkExp+'].generalDetailId.generalDetailId"  value='+idWEDJS+'> <div id="first" style="float:left;"> <div class="item"> <label> <span>Organization:</span> <input type="text" name="workExperienceList['+ rowNumWorkExp +'].organization"  required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Orangization Name here</p> </div></div></div> <div class="item"> <label> <span>Job Title:</span> <input class="inputClass" type="text" name="workExperienceList['+ rowNumWorkExp +'].designation" required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Designation here</p> </div></div></div> <br/> <div class="item"> <label> <span>Job Description:</span> <input type="text" name="workExperienceList['+ rowNumWorkExp +'].duties" required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Your duties during Job here</p> </div></div></div> <br/> <div class="item"> <label> <span>Date:(From)</span> <input type="date" name="workExperienceList['+ rowNumWorkExp +'].startDate" required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Start Date here</p> </div></div></div> <br/> <div class="item"> <label> <span>Date:(To)</span> <input id="changeDateToPresent'+rowNumWorkExp+'" type="date" name="workExperienceList['+ rowNumWorkExp +'].endDate" required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter End Date here</p> </div></div></div> <br/>  <div class="item"> <label> <span><a href="#"><button id="'+rowNumWorkExp+'" style=" background: transparent;  border: none !important; text-decoration: underline;" onClick="changeDTP(this)">  Present </button></a></span></label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Select Present if your are currentlly working in this organization</p> </div></div></div> <div class="item"> <label> <span><a href="#"><button id="'+rowNumWorkExp+'" style=" background: transparent;  border: none !important; text-decoration: underline;" onClick="changePTD(this)">  Date </button></a></span></label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Select Date uptill when you work in this Organization</p> </div></div></div></div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> <input style="margin-right:0px; background: transparent;	 border: none !important;" type="image" src="./resources/Interface/icons/delete.png" value="" onclick="removeRowWorkExp('+rowNumWorkExp+');"> <p>----------------------------------------------------------------------</p> </div>';

	
	
	
	jQuery('#itemRowsWorkExp').append(rowWorkExp);
	rowNumWorkExp ++;
	
}

function removeRowWorkExp(rnum) {
	jQuery('#rowNumWorkExp'+rnum).remove();
}



