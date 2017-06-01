	 $(document).ready(function(){
				
		var userNameValid = false;
		var passwordValid = false;

		 $("#username").on({
				 mouseenter: function(){
				 $("#username").attr("placeholder","Please enter a user name..");
				 }, 
				 blur: function(){
				 var userName = $("#username").val();
				  if(!validateUserName(userName)){
					 userNameValid = false;
					 wrong_details_enable("username");
				 }else{
				   userNameValid = true;
				   correct_details_enable("username");
				  }
				 }, 
				 });



		 $("#password").on({
				 mouseenter: function(){
				 $("#password").attr("placeholder","Please enter a password");
				 }, 
				 blur: function(){
				 var password = $("#password").val();
				 if(!validatePassword(password)){
					 passwordValid = false;
					 wrong_details_enable("password");
				 }else{
					 passwordValid = true;
					 correct_details_enable("password");
				  }
				 }, 
				 });


		 $("#login").click(function(e){
			  if(userNameValid && passwordValid){
				 var userName = $("#username").val();
				 var password = $("#password").val();
				 $.ajax({
				 url:"authentication.php",
				 data: {username:userName,password:password},
				 type:"POST",
				 success:function(res){
				 if(res == "false"){
				 $("#authFailureDiv").css("display","inline");			 
				 }else if(res == "true"){
					window.location.href="Dashboard.php"; 
				 }else{
					 $("#alertParagraph").innerHTML = "res.substring(0,20)";
				 }
				 },
				 error:function(jqHXR,textstatus,errorThrown){
				 alert("error" +" " +textstatus +" " +errorThrown);	 
				 }
				});  
				  
				  
			   }else{
			   alert("Please Fill all fields");
			   return false;
			   }
	});
		
		
	});	
		