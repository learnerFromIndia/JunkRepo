
		function validateUserName(userName) {
			
			if(userName==null || userName == ""){
				$("#userNamePara").text("user name cannot be null or empty");
				
				return false;
			}else{
				return true;
			}
		}

	 
		function validatePassword(password) {
			
			if(password==null || password.length < 10){
				$("#passwordPara").text("Password cannot be less than 10 digits");
				
				return false;
			}else{
				return true;
			}
		}
		
		

		 
		
		function correct_details_enable(textField){
			
			if(textField == "username"){
				if($("#image4").is(":visible") == true){
				$("#image4").css("display","none");
				}
				$("#image3").css("display","inline-block");
				
			}else if(textField == "password"){
				if($("#image10").is(":visible") == true){
				   $("#image10").css("display","none");
				 }
			   $("#image9").css("display","inline-block");

			}
			
		}
		function wrong_details_enable(textField){
			if(textField == "username"){
				 $("#userNameAlertDiv").css("display","inline-block");
				 $("#userNameAlertDiv").fadeOut(6000);
				 if($("#image3").is(":visible") == true){
				   $("#image3").css("display","none");
				 }
				 $("#image4").css("display","inline-block");
			}else if(textField == "password"){
				$("#passwordAlertDiv").css("display","inline-block");
				$("#passwordAlertDiv").fadeOut(6000);
				if($("#image9").is(":visible") == true){
				   $("#image9").css("display","none");
				 }
				 $("#image10").css("display","inline-block");

			}
			
		}