// JavaScript Document


$(document).ready(function(){
	

	var addClientDivOn =  "false";
	var searchCriteriaDivOn =  "false";
	
	

	 $("#addClientDetail").click(function(){
		 
	    $("#addClientDiv").show(500);
		$("#searchCriteriaDiv").hide(500);
	
			
  });

  $("#cancelACD").click(function(){
    $("#addClientDiv").hide(500);
		   
	
  });
  
  
  $("#searchCriteriaDetail").click(function(){ 
  
  		
		$("#searchCriteriaDiv").show(500);
		 $("#addClientDiv").hide(500);
		
	

  });

  $("#cancelSCD").click(function(){
    $("#searchCriteriaDiv").hide(500);
	
	
  });
  
  

  
  

	$("#showAllDetail").click(function(){
	   
    	    $("#addClientDiv").show(500);
		$("#searchCriteriaDiv").show(500);
		
	   		
		
  });


   $("#cancelAllDetail").click(function(){
	  
	      $("#addClientDiv").hide(500);
		$("#searchCriteriaDiv").hide(500);
	
	
	
	
  });
  

 
});
