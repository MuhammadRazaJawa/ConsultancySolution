// JavaScript Document


function validateForm()
  {
  	
 
	var sex=document.forms["formElem"]["sex"].value;
  	var familyName=document.forms["formElem"]["familyName"].value;
  	var firstName=document.forms["formElem"]["firstName"].value;
  	var agentAddress=document.forms["formElem"]["agentAddress"].value;
  	var country=document.forms["formElem"]["country"].value;
  	var postalCode=document.forms["formElem"]["postalCode"].value;
  	var telephoneNo=document.forms["formElem"]["telephoneNo"].value;
  	var cellNo=document.forms["formElem"]["cellNo"].value;
  	var email=document.forms["formElem"]["email"].value;
  	var homeAddress=document.forms["formElem"]["homeAddress"].value;
  	var studentCountry=document.forms["formElem"]["studentCountry"].value;
  	var studentPostalCode=document.forms["formElem"]["studentPostalCode"].value;
  	var dOB=document.forms["formElem"]["dOB"].value;
  	
  //	var dChk = new Boolean(false);
  	var sexTF= new Boolean(false);
  	var familyNameTF= new Boolean(false);
  	var firstNameTF = new Boolean(false);
   	var agentAddressTF = new Boolean(false);
  	var countryTF = new Boolean(false);
  	var postalCodeTF = new Boolean(false);
  	var telephoneNoTF = new Boolean(false);
  	var cellNoTF = new Boolean(false);
  	var emailTF = new Boolean(false);
  	var homeAddressTF = new Boolean(false);
  	var studentCountryTF = new Boolean(false);
  	var studentPostalCodeTF = new Boolean(false);
  	var dOBTF = new Boolean(false);
	
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
  	 
  	
    if (sex==null || sex=="")
    {
    alert("Select Title ???");
    return false;
    }
  else
  {
  	
  	sexTF = true;
  }

  	
  	
  if (familyName==null || familyName=="")
    {
    alert("Enter Family Name First !");
    return false;
    }
  else
  {
  	
  	familyNameTF = true;
  }
  
  

  	
  if  (firstName==null || firstName=="")
  {
      alert("What is your First Name ?");
      return false;
  }
  else 
  {
  	
  	firstNameTF = true;
  	
  }

  if  (agentAddress==null || agentAddress=="")
  {
      alert("Enter Agent Address");
      return false;
  }
  else 
  {
	  agentAddressTF = true;
  	
  }    
 
 
  if  (country==null || country=="")
	{
    alert("Select Country");
    return false;
 }
  else
  {
  	
  	countryTF = true;
  }
 
	  if  (postalCode==null || postalCode=="")
	  {
      alert("Enter Postal Code");
      return false;
      
    } 
	  else 
	  {
		  
		  postalCodeTF = true;
		  
	  }
  
  
  if  (telephoneNo==null || telephoneNo=="")
  {
      alert("Telephone No Missing !");
      return false;
      
   }
  else 
  {
  	
  	telephoneNoTF = true;
  	
  }
  
  if  (cellNo==null || cellNo=="")
  {
      alert("Cell No Missing");
      return false;
      
    } 
  else 
  {
  	cellNoTF = true;
  	
  }
  
  
  if  (email==null || email=="")
  {
      alert("Your Email is Required");
      return false;
      
    } 
  else 
  {
  	
  	emailTF = true;
  }
  
  if(homeAddress==null || homeAddress=="")
  {
      alert("Home Address is Required");
      return false;
      
    } 
  else 
  {
  	
  	homeAddressTF = true;
  	
  }

  if  (studentCountry==null || studentCountry=="")
  {
      alert("Select Student Country");
      return false;
      
    } 
  else 
  {
  	studentCountryTF = true;
  	
  }
  
  if  (studentPostalCode==null || studentPostalCode=="")
  {
      alert("Enter Postal Code");
      return false;
      
   }
  else 
  {
  	studentPostalCodeTF = true;
  	
  }

  if  (dOB==null || dOB=="")
  {
      alert("Select Date of Birth");
      return false;
      
    }
  else 
  {
  	
  	dOBTF = true;
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


  
if(dOBTF == true) 
{
	allFilled = true;
	//alert ("Data Saved Sucessfully");
}
else 
{
	return false;
	allFilled = false;
	alert("DATA NOT SAVED");	
}


var r=confirm("Are you sure you want to save");

if (r==true && allFilled == true)
  {
	
	window.alert("Data Saved Successfully");
	
  }
else
  {
	 window.alert("DATA NOT SAVED.");
	 return false;

  }

}