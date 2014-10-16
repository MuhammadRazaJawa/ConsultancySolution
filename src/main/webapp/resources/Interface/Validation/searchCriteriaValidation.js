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

	
		
	
	

function validateSearchForm()
 {
  	
	var country=document.forms["formElem"]["country"].value;
  	var city=document.forms["formElem"]["city"].value;
  	var instituteType=document.forms["formElem"]["instituteType"].value;
  	var institute=document.forms["formElem"]["institute"].value;
  	var programOffered=document.forms["formElem"]["programOffered"].value;
  
  
  	

  
 	var countryTF = new Boolean(false);
  	var cityTF = new Boolean(false);
  	var instituteTypeTF = new Boolean(false);
  	var instituteTF = new Boolean(false);
  	var programOfferedTF = new Boolean(false);
  

  	var allFilled = new Boolean(false);
  

    if  (country==null || country=="")
    {
  	  alertify.alert("Your Desired Country to apply for ?");
        return false;
    }
    else 
    {
  	  countryTF = true;
    	
    }


  if  (city==null || city=="")
  {
	  alertify.alert("Your Desired City?");
      return false;
  }
  else 
  {
	  cityTF = true;
  	
  }
  

 
 
  if  (instituteType==null || instituteType=="")
	{
	  alertify.alert("Select Your Institute Type");
    return false;
 }
  else
  {
  	
	  instituteTypeTF = true;
  }
 
	  if  (institute==null || institute=="")
	  {
		  alertify.alert("Select Your Institute Accordingly !");
      return false;
      
    } 
	  else 
	  {
		  
		  instituteTF = true;
		  
	  }
  
  
  if  (programOffered==null || programOffered=="")
  {
	  alertify.alert("Select Program of Your Choice !");
      return false;
      
   }
  else 
  {
  	
	  programOfferedTF = true;
  	
  }
  
 

  
if(programOfferedTF == true) 
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

