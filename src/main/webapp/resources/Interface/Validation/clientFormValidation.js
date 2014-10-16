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

	
		
	
	

function validateForm()
  {
  	
	
 
	var firstName=document.forms["formElem"]["firstName"].value;
  	var fatherName=document.forms["formElem"]["fatherName"].value;
  	var age=document.forms["formElem"]["age"].value;
  	var city=document.forms["formElem"]["city"].value;
  	var country=document.forms["formElem"]["country"].value;
  	var mobileNumber=document.forms["formElem"]["mobileNumber"].value;
  	var otherContact=document.forms["formElem"]["otherContact"].value;
  	var firstLanguage=document.forms["formElem"]["firstLanguage"].value;
  	var email=document.forms["formElem"]["email"].value;
  	var nic=document.forms["formElem"]["nic"].value;
  
  	
  //	var dChk = new Boolean(false);
  	var firstNameTF= new Boolean(false);
  	var fatherNameTF= new Boolean(false);
  	var ageTF = new Boolean(false);
   	var cityTF = new Boolean(false);
   	var countryTF = new Boolean(false);
  	var mobileNumberTF = new Boolean(false);
  	var otherContactTF = new Boolean(false);
  	var firstLanguageTF = new Boolean(false);
  	var emailTF = new Boolean(false);
  	var nicTF = new Boolean(false);
  
	
  	var xx = new Boolean(false);
  	var allFilled = new Boolean(false);
  
  	
  	
  	
  	/*  if (datte==null || datte=="")
       {
       alert("Date is not entered");
       return false;
       }
  	 else
  	 {
  		 dChk = true;
  		 alert("Date ho gai hai enter....");
  		 alert(dChk);
  		 
  	 } */
  	 
  	
    if (firstName==null || firstName=="")
    {
/*    	alert("Enter Your First Name !");*/
    	alertify.alert("Enter Your First Name !");
    return false;
    }
  else
  {
  	
	  firstNameTF = true;
	 
  }

  	
  	
  if (fatherName==null || fatherName=="")
    {
   // alert("Enter Your Fathers Name !");
    alertify.alert("Enter Your Fathers Name !");
    return false;
    }
  else
  {
  	
	  fatherNameTF = true;
  }
  
  

  	
  if  (age==null || age=="")
  {
      //alert("What is your Age ?");
      alertify.alert("What is your Age ?");
      return false;
  }
  else 
  {
  	
	  ageTF = true;
  	
  }

  if  (city==null || city=="")
  {
	  alertify.alert("Enter your City where you lived ?");
      return false;
  }
  else 
  {
	  cityTF = true;
  	
  }
  
  if  (country==null || country=="")
  {
	  alertify.alert("Enter your Country where you lived ?");
      return false;
  }
  else 
  {
	  countryTF = true;
  	
  }
 
 
  if  (mobileNumber==null || mobileNumber=="")
	{
	  alertify.alert("Enter Your Mobile Number");
    return false;
 }
  else
  {
  	
	  mobileNumberTF = true;
  }
 
	  if  (otherContact==null || otherContact=="")
	  {
		  alertify.alert("Enter Another Contact Number");
      return false;
      
    } 
	  else 
	  {
		  
		  otherContactTF = true;
		  
	  }
  
  
  if  (firstLanguage==null || firstLanguage=="")
  {
	  alertify.alert("Your First Language !");
      return false;
      
   }
  else 
  {
  	
	  firstLanguageTF = true;
  	
  }
  
  if  (email==null || email=="")
  {
	  alertify.alert("Email is Missing");
      return false;
      
    } 
  else 
  {
	  emailTF = true;
  	
  }
  
  
  if  (email==null || email=="")
  {
	  alertify.alert("Your Email is Required");
      return false;
      
    } 
  else 
  {
  	
  	emailTF = true;
  }
  
  if  (nic==null || nic=="")
  {
	  alertify.alert("NIC Number should be entered");
      return false;
      
    }
  else 
  {
  	
  	nicTF = true;
  }
  
  //if  (m==null || m=="")
//  {
//      alert("PLEASE ENTER THE RESULT TO SAVE THE DATA");
//      return false;
//  }
//  else 
//  {
//  	
//  	xx = true;
//  }
//  


  
if(nicTF == true) 
{
	allFilled = true;
	//alert ("Data Saved Sucessfully");
}
else 
{
	return false;
	allFilled = false;
	/*alertify.alert("DATA NOT SAVED");
	alertify.log("Warning: The Data Entered is not Saved Yet ! ");*/
}


var r = confirm("Are you sure you want to save");
//var r= alertify.confirm("Are you sure you want to save");


if (r == true && allFilled == true)
  {
	
	alertify.alert("Data Saved Successfully");
	//alertify.success("Data Saved Successfully");
	alertify.log("Notification: Your Client's Data has been Saved Successfully ! ");

	
  }
else
  {
	 //window.alert("DATA NOT SAVED.");
	alertify.alert("DATA NOT SAVED");
	alertify.log("Warning: The Data Entered is not Saved Yet ! ");
	 return false;

  }

}

