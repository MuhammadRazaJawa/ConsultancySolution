// JavaScript Document

var rowNumREF = 1;

function addRowREF(frmREF) {
	
	var idREFJS = document.getElementById("idREF").value;
	
	var rowREF = '<div id="rowNumREF'+rowNumREF+'"><input type="hidden" name="referenceList['+rowNumREF+'].generalDetailId.generalDetailId"  value='+idREFJS+'> <div id="first" style="float:left;"> <div class="item"> <label> <span>Name:</span> <input type="text" name="referenceList['+ rowNumREF +'].name" placeholder="e.g Dr.Fareeha Zafar." required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Name of Reference Person</p> </div></div></div> <br/> <div class="item"> <label> <span>Designation:</span> <input type="text" name="referenceList['+ rowNumREF +'].designation" placeholder="e.g Dean of Computer Sc." required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Designation of Reference Person</p> </div></div></div> <br/> <div class="item"> <label> <span>Relationship:</span> <input type="text" name="referenceList['+ rowNumREF +'].relationship" placeholder="e.g Teacher." required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Relationship with the Reference Person</p> </div></div></div> <br/> <div class="item"> <label> <span>Address:</span> <input type="text" name="referenceList['+ rowNumREF +'].address" placeholder="e.g House.# 1,Town." required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Address as House.# ? Town,Block.#,City,Country</p> </div></div></div> <br/><div class="item"> <label> <span>Contact (M):</span> <input type="tel" name="referenceList['+ rowNumREF +'].mobileContact" placeholder="e.g +923110237824" required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Mobile Contact No <br/>Notice that for a phone number user can input a "+" sign, a dash "-" or a space " "</p> </div></div></div> <br/> <div class="item"> <label> <span>Contact (O):</span> <input type="tel" name="referenceList['+ rowNumREF +'].otherContact" placeholder="e.g +04235221255" required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Office Contact No <br/>Notice that for a phone number user can input a "+" sign, a dash "-" or a space " "</p> </div></div></div> <br/> <div class="item"> <label> <span>FAX:</span> <input type="number" placeholder="e.g +(country code)(area code)(fax number)" name="referenceList['+ rowNumREF +'].fax" required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Fax No here.</p> </div></div></div> <br/><div class="item"> <label> <span>Email:</span> <input type="email" name="referenceList['+ rowNumREF +'].email" placeholder="e.g dr.fareehazafar@gcu.com" required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter Email of Reference here.</p> </div></div></div> <br/><div class="item"> <label> <span>Years known:</span> <input type="number" name="referenceList['+ rowNumREF +'].yearsKnown" placeholder="e.g 5 (Years)"  required="required" value=""> </label> <div class="tooltip help"> <span>?</span> <div class="content"> <b></b> <p>Enter From How many Years you know the Person.</p> </div></div></div>  </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> <input style="margin-right:0px; background: transparent;	 border: none !important;" type="image" src="./resources/Interface/icons/delete.png" value="" onclick="removeRowREF('+rowNumREF+');"><br/><br/> <p>----------------------------------------------------------------------</p> </div>';
	

	
	jQuery('#itemRowsREF').append(rowREF);
	//frmREF.add_qty.value = '';
	//frmREF.add_name.value = '';
	rowNumREF ++;
}

function removeRowREF(rnum) {
	jQuery('#rowNumREF'+rnum).remove();
}





