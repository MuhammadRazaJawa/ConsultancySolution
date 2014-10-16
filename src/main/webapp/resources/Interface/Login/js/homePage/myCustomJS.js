// JavaScript Document


$(document).ready(function(){
	
	var pdDivOn =  "false";
	var gdDivOn =  "false";
	var posDivOn =  "false";
	var languageDivOn =  "false";
	var eduDivOn =  "false";
	var workExpDivOn  =  "false";
	var psDivOn =  "false";
	var refDivOn =  "false";
	var declareDivOn =  "false";
	

	 $("#personalDetail").click(function(){
		 
	    $("#pdDiv").show(1000);
		$("#gdDiv").hide(1000);
		 $("#posDiv").hide(1000);
		  $("#languageDiv").hide(1000);
		  $("#eduDiv").hide(1000);
		   $("#workExpDiv").hide(1000);
		    $("#psDiv").hide(1000);
			 $("#refDiv").hide(1000);
			  $("#declareDiv").hide(1000);
			
  });

  $("#cancelPD").click(function(){
    $("#pdDiv").hide(1000);
		   
	
  });
  
  
  $("#generalDetail").click(function(){ 
  
  		
		$("#gdDiv").show(1000);
		 $("#pdDiv").hide(1000);
		 $("#posDiv").hide(1000);
		  $("#languageDiv").hide(1000);
		  $("#eduDiv").hide(1000);
		   $("#workExpDiv").hide(1000);
		    $("#psDiv").hide(1000);
			 $("#refDiv").hide(1000);
			  $("#declareDiv").hide(1000);
	

  });

  $("#cancelGD").click(function(){
    $("#gdDiv").hide(1000);
	
	
  });
  
  

  
  $("#posDetail").click(function(){
	  

		$("#posDiv").show(1000);
		 $("#pdDiv").hide(1000);
		$("#gdDiv").hide(1000);
		  $("#languageDiv").hide(1000);
		  $("#eduDiv").hide(1000);
		   $("#workExpDiv").hide(1000);
		    $("#psDiv").hide(1000);
			 $("#refDiv").hide(1000);
			  $("#declareDiv").hide(1000);
		
  
  
  });

  $("#cancelPOS").click(function(){
    $("#posDiv").hide(1000);
	
	
	
  });
  
  $("#languageDetail").click(function(){
	   
   		$("#languageDiv").show(1000);
		 $("#pdDiv").hide(1000);
		$("#gdDiv").hide(1000);
		 $("#posDiv").hide(1000);
		  $("#eduDiv").hide(1000);
		   $("#workExpDiv").hide(1000);
		    $("#psDiv").hide(1000);
			 $("#refDiv").hide(1000);
			  $("#declareDiv").hide(1000);
			
  });

  $("#cancelLang").click(function(){
   $("#languageDiv").hide(1000);
   
  
   
  });
  
   $("#educationalDetail").click(function(){
	  
	   
   	 $("#eduDiv").show(1000);
	  $("#pdDiv").hide(1000);
		$("#gdDiv").hide(1000);
		 $("#posDiv").hide(1000);
		  $("#languageDiv").hide(1000);
		   $("#workExpDiv").hide(1000);
		    $("#psDiv").hide(1000);
			 $("#refDiv").hide(1000);
			  $("#declareDiv").hide(1000);
	 	
	
  });

  $("#cancelEDU").click(function(){
    $("#eduDiv").hide(1000);
	
	
  });
  
  $("#workExperienceDetail").click(function(){
	  
	
    	$("#workExpDiv").show(1000);
		 $("#pdDiv").hide(1000);
		$("#gdDiv").hide(1000);
		 $("#posDiv").hide(1000);
		  $("#languageDiv").hide(1000);
		  $("#eduDiv").hide(1000);
		    $("#psDiv").hide(1000);
			 $("#refDiv").hide(1000);
			  $("#declareDiv").hide(1000);
	
	
  });

  $("#cancelworkEXP").click(function(){
    $("#workExpDiv").hide(1000);
	

	
  });
  
   $("#personalStatementDetail").click(function(){
	   
	  	$("#psDiv").show(1000);
		$("#pdDiv").hide(1000);
		$("#gdDiv").hide(1000);
		 $("#posDiv").hide(1000);
		  $("#languageDiv").hide(1000);
		  $("#eduDiv").hide(1000);
		   $("#workExpDiv").hide(1000);
			 $("#refDiv").hide(1000);
			  $("#declareDiv").hide(1000);
	   		
	   
	  
  });

  $("#cancelPS").click(function(){
    $("#psDiv").hide(1000);
	
	
  });
  
   $("#referencesDetail").click(function(){
	   
    	$("#refDiv").show(1000);
		 $("#pdDiv").hide(1000);
		$("#gdDiv").hide(1000);
		 $("#posDiv").hide(1000);
		  $("#languageDiv").hide(1000);
		  $("#eduDiv").hide(1000);
		   $("#workExpDiv").hide(1000);
		    $("#psDiv").hide(1000);
			  $("#declareDiv").hide(1000);
			
  
  });

  $("#cancelREF").click(function(){
    $("#refDiv").hide(1000);
	

	
  });
  
   $("#declarationDetail").click(function(){
	   
    	$("#declareDiv").show(1000);
		 $("#pdDiv").hide(1000);
		$("#gdDiv").hide(1000);
		 $("#posDiv").hide(1000);
		  $("#languageDiv").hide(1000);
		  $("#eduDiv").hide(1000);
		   $("#workExpDiv").hide(1000);
		    $("#psDiv").hide(1000);
			 $("#refDiv").hide(1000);
			
	   		
		
  });

  $("#cancelDEC").click(function(){
    $("#declareDiv").hide(1000);
	
	
	
  });

	$("#showAllDetail").click(function(){
	   
    	    $("#pdDiv").show(1000);
		$("#gdDiv").show(1000);
		 $("#posDiv").show(1000);
		  $("#languageDiv").show(1000);
		  $("#eduDiv").show(1000);
		   $("#workExpDiv").show(1000);
		    $("#psDiv").show(1000);
			 $("#refDiv").show(1000);
			  $("#declareDiv").show(1000);
			
	   		
		
  });

  $("#cancelDEC").click(function(){
	  
	 
			  $("#declareDiv").hide(1000);
   

  });
  
   $("#cancelAllDetail").click(function(){
	  
	      $("#pdDiv").hide(1000);
		$("#gdDiv").hide(1000);
		 $("#posDiv").hide(1000);
		  $("#languageDiv").hide(1000);
		  $("#eduDiv").hide(1000);
		   $("#workExpDiv").hide(1000);
		    $("#psDiv").hide(1000);
			 $("#refDiv").hide(1000);
			  $("#declareDiv").hide(1000);
   
	
	
	
  });
  

 
});
