	
	function validateName(name) {
		if (name == null || name == "") {
			$("#namePara").text("Name cannot be null");	
		    return false;
		} else if (checkForNameFormat(name)) {
			$("#namePara").html("Name is not in proper format");
			return false;
		} else {
			return true;
		}

	}
	
	function validateUserName(userName) {
		var userReg = /[a-zA-Z0-9_]+/;
		var result = userReg.test(userName);		
		if(userName==null || userName == ""){
			$("#userNamePara").text("user name cannot be null or empty");
			return false;
		}else if(!result){
			$("#userNamePara").text("User name cannot have illegal characters");
			return false;
        }else{
	        return true;
		}  
	}
	
    function validateEmail(email) {
        var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var result = emailReg.test(email);
		
		if(email==null || email == ""){
			$("#emailPara").text("email cannot be null");
			return false;
		}else if (!result){
            $("#emailPara").text("Email is not in proper format");
			return false;
		}else{
            return true;
        }
	}
	
	function validateDob(dob) {
		if(dob==null || dob == ""){
			$("#dobPara").text("dob cannot be null");
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
	
    function checkForNameFormat(name) {
		var myRe = /[a-zA-Z]+/;
		var res = myRe.exec(name);
			if (res == name) {
				return false;
			} else {
				return true;
			}
		return false;
	}
	function correct_details_enable(textField){
		
		if(textField == "name"){
			if($("#image2").is(":visible") == true){
               $("#image2").css("display","none");
             }
           $("#image1").css("display","inline-block");
			
		}else if(textField == "username"){
			if($("#image4").is(":visible") == true){
            $("#image4").css("display","none");
            }
			$("#image3").css("display","inline-block");
			
		}else if(textField == "email"){
			if($("#image6").is(":visible") == true){
            $("#image6").css("display","none");
            }
			$("#image5").css("display","inline-block");
			
			
		}else if(textField == "dob"){
			if($("#image8").is(":visible") == true){
            $("#image8").css("display","none");
            }
			$("#image7").css("display","inline-block");
			
			
		}else if(textField == "password"){
			if($("#image10").is(":visible") == true){
               $("#image10").css("display","none");
             }
           $("#image9").css("display","inline-block");
		}
		
	}
	function wrong_details_enable(textField){
		
		if(textField == "name"){
			$("#nameAlertDiv").css("display","inline-block");
            $("#nameAlertDiv").fadeOut(6000);
             if($("#image1").is(":visible") == true){
               $("#image1").css("display","none");
             }
             $("#image2").css("display","inline-block");
			
		}else if(textField == "username"){
			$("#usernameAlertDiv").css("display","inline-block");
             $("#usernameAlertDiv").fadeOut(6000);
			if($("#image3").is(":visible") == true){
               $("#image3").css("display","none");
             }
             $("#image4").css("display","inline-block");
			
			
		}else if(textField == "email"){
			$("#emailAlertDiv").css("display","inline-block");
             $("#emailAlertDiv").fadeOut(6000);
			if($("#image5").is(":visible") == true){
               $("#image5").css("display","none");
             }
             $("#image6").css("display","inline-block");
			
			
		}else if(textField == "dob"){
			$("#dobAlertDiv").css("display","inline-block");
             $("#dobAlertDiv").fadeOut(6000);
			if($("#image7").is(":visible") == true){
               $("#image7").css("display","none");
             }
             $("#image8").css("display","inline-block");
			
		}else if(textField == "password"){
			$("#passwordAlertDiv").css("display","inline-block");
             $("#passwordAlertDiv").fadeOut(6000);
			if($("#image9").is(":visible") == true){
               $("#image9").css("display","none");
             }
             $("#image10").css("display","inline-block");
			
			
		}
		
	}