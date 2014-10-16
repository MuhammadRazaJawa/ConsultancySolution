// JavaScript Document
function reset () {
			$("#toggleCSS").attr("href", "../themes/alertify.default.css");
			alertify.set({
				labels : {
					ok     : "OK",
					cancel : "Cancel"
				},
				delay : 5000,
				buttonReverse : false,
				buttonFocus   : "ok"
			});
		}

		// ==============================
		// Standard Dialogs
		$("#alert").on( 'click', function () {
			reset();
			alertify.alert("This is an alert dialog");
			return false;
		});

		$("#confirm").on( 'click', function () {
			reset();
			alertify.confirm("This is a confirm dialog", function (e) {
				if (e) {
					alertify.success("You've clicked OK");
					
				} else {
					alertify.error("You've clicked Cancel");
					
				}
			});
			return false;
		});

		$("#prompt").on( 'click', function () {
			reset();
			alertify.prompt("This is a prompt dialog", function (e, str) {
				if (e) {
					alertify.success("You've clicked OK and typed: " + str);
				} else {
					alertify.error("You've clicked Cancel");
				}
			}, "Default Value");
			return false;
		});

		// ==============================
		// Ajax
		$("#ajax").on("click", function () {
			reset();
			alertify.confirm("Confirm?", function (e) {
				if (e) {
					alertify.alert("Successful AJAX after OK");
				} else {
					alertify.alert("Successful AJAX after Cancel");
				}
			});
		});

		// ==============================
		// Standard Dialogs
		$("#notification").on( 'click', function () {
			reset();
			alertify.log("Standard log message");
			return false;
		});

		$("#success").on( 'click', function () {
			reset();
			alertify.success("Success log message");
			return false;
		});

		$("#error").on( 'click', function () {
			reset();
			alertify.error("Error log message");
			return false;
		});

		// ==============================
		// Custom Properties
		$("#delay").on( 'click', function () {
			reset();
			alertify.set({ delay: 10000 });
			alertify.log("Hiding in 10 seconds");
			return false;
		});

		$("#forever").on( 'click', function () {
			reset();
			alertify.log("Will stay until clicked", "", 0);
			return false;
		});

		$("#labels").on( 'click', function () {
			reset();
			alertify.set({ labels: { ok: "Accept", cancel: "Deny" } });
			alertify.confirm("Confirm dialog with custom button labels", function (e) {
				if (e) {
					alertify.success("You've clicked OK");
				} else {
					alertify.error("You've clicked Cancel");
				}
			});
			return false;
		});

		$("#focus").on( 'click', function () {
			reset();
			alertify.set({ buttonFocus: "cancel" });
			alertify.confirm("Confirm dialog with cancel button focused", function (e) {
				if (e) {
					alertify.success("You've clicked OK");
				} else {
					alertify.error("You've clicked Cancel");
				}
			});
			return false;
		});

		$("#order").on( 'click', function () {
			reset();
			alertify.set({ buttonReverse: true });
			alertify.confirm("Confirm dialog with reversed button order", function (e) {
				if (e) {
					alertify.success("You've clicked OK");
				} else {
					alertify.error("You've clicked Cancel");
				}
			});
			return false;
		});

		// ==============================
		// Custom Log
		$("#custom").on( 'click', function () {
			reset();
			alertify.custom = alertify.extend("custom");
			alertify.custom("I'm a custom log message");
			return false;
		});

		// ==============================
		// Custom Themes
		$("#bootstrap").on( 'click', function () {
			reset();
			$("#toggleCSS").attr("href", "../themes/alertify.bootstrap.css");
			alertify.prompt("Prompt dialog with bootstrap theme", function (e) {
				if (e) {
					alertify.success("You've clicked OK");
				} else {
					alertify.error("You've clicked Cancel");
				}
			}, "Default Value");
			return false;
		});


function validateCurrentDetailForm()
 {
  	
	var programTitle=document.forms["formElemGD"]["programTitle"].value;
  	var university=document.forms["formElemGD"]["university"].value;
  	var city=document.forms["formElemGD"]["city"].value;
  	var country=document.forms["formElemGD"]["country"].value;
  	var startDate=document.forms["formElemGD"]["startDate"].value;
  	var endDate=document.forms["formElemGD"]["endDate"].value;
  	var higherLevelOfQualification=document.forms["formElemGD"]["higherLevelOfQualification"].value;
  	var expectedDateOfCompletion=document.forms["formElemGD"]["expectedDateOfCompletion"].value;
  	var haveStudiedAbroad=document.forms["formElemGD"]["haveStudiedAbroad"].value;
  

  
 	var programTitleTF = new Boolean(false);
  	var universityTF = new Boolean(false);
  	var cityTF = new Boolean(false);
  	var countryTF = new Boolean(false);
  	var startDateTF = new Boolean(false);
	var endDateTF = new Boolean(false);
	var higherLevelOfQualificationTF = new Boolean(false);
	var expectedDateOfCompletionTF = new Boolean(false);
	var haveStudiedAbroadTF = new Boolean(false);
  

  	var allFilled = new Boolean(false);
  

    if  (programTitle==null || programTitle=="")
    {
    	alertify.alert("Enter Program Title?");
    	
        return false;
    }
    else 
    {
    	programTitleTF = true;
    	
    }


  if  (university==null || university=="")
  {
	  alertify.alert("Enter University Name");
      return false;
  }
  else 
  {
	  universityTF = true;
  	
  }
  

 
 
  if  (city==null || city=="")
	{
	  alertify.alert("Select City");
    return false;
 }
  else
  {
  	
	  cityTF = true;
  }
 
	  if  (country==null || country=="")
	  {
		  alertify.alert("Select Country!");
      return false;
      
    } 
	  else 
	  {
		  
		  countryTF = true;
		  
	  }
  
  
  if  (startDate==null || startDate=="")
  {
	  alertify.alert("Select Date");
      return false;
      
   }
  else 
  {
  	
	  alertify.startDateTF = true;
  	
  }
  if  (endDate==null || endDate=="")
  {
	  alertify.alert("Select End  Date");
      return false;
      
   }
  else 
  {
  	
	  endDateTF = true;
  	
  }
  if  (higherLevelOfQualification==null || higherLevelOfQualification=="")
  {
	  alertify.alert("Select Highest Level of Education");
      return false;
      
   }
  else 
  {
  	
	  higherLevelOfQualificationTF = true;
  	
  }
  if  (expectedDateOfCompletion==null || expectedDateOfCompletion=="")
  {
	  alertify.alert("Select Expected Date of Completion");
      return false;
      
   }
  else 
  {
  	
	  expectedDateOfCompletionTF = true;
  	
  }
  
  if  (haveStudiedAbroad==null || haveStudiedAbroad=="")
  {
	  alertify.alert("Select Y/N");
      return false;
      
   }
  else 
  {
  	
	  haveStudiedAbroadTF= true;
  	
  }
  
 

  
if(haveStudiedAbroadTF == true) 
{
	allFilled = true;
	//alert ("Data Saved Sucessfully");
}
else 
{
	return false;
	allFilled = false;
	/*alert("DATA NOT SAVED");
	alertify.log("Warning: The Data Entered is not Saved Yet ! ");*/
}


var r = confirm("Are you sure you want to save");
//var r= alertify.confirm("Are you sure you want to save");


if (r == true && allFilled == true)
  {
	
	alert("Data Saved Successfully");
	//alertify.success("Data Saved Successfully");
	alertify.log("Notification: Your Client's Data has been Saved Successfully ! ");

	
  }
else
  {
	 //window.alert("DATA NOT SAVED.");
	alert("DATA NOT SAVED");
	alertify.log("Warning: The Data Entered is not Saved Yet ! ");
	 return false;

  }

}

