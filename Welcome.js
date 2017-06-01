
        $(document).ready(function(){
          
        var nameValid = false;
        var userNameValid = false;
        var emailValid = false;
        var dobValid = false;
        var passwordValid = false;

   
         $("#name").on({
         mouseenter: function(){
         $("#name").attr("placeholder","Please enter your name..");
         }, 
         blur: function(){
         var name = $("#name").val();
         if(!validateName(name)){
             nameValid = false;
             wrong_details_enable("name");
         }else{
             nameValid = true;
             correct_details_enable("name");
          }
         }, 
         });

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
			 $.ajax({
             url:"fetch_username.php",
			 data: {user: userName},
             type:"POST",
             success:function(res){
			 if(res == "0 results"){
			  correct_details_enable("username");
			  userNameValid = true;
			 }
			 else if(res == "false"){
			  correct_details_enable("username");
			  userNameValid = true;
			 }else{
				 wrong_details_enable("username");
				 userNameValid = false;
				 $("#userNamePara").text("User name already Taken!!");
			 }
             },
			 error:function(jqHXR,textstatus,errorThrown){
			 alert("error" +" " +textstatus +" " +errorThrown);	 
			 }
            });
          }
         }, 
        });


         $("#email").on({
         mouseenter: function(){
         $("#email").attr("placeholder","Please enter your email address..");
         }, 
         blur: function(){
         var email = $("#email").val();
         if(!validateEmail(email)){
             emailValid = false;
             wrong_details_enable("email");
         }else{
             emailValid = true;
             correct_details_enable("email");
          }
         }, 
         });

         $("#dob").on({
         mouseenter: function(){
         $("#dob").attr("placeholder","Please enter your dob..");
         }, 
         blur: function(){
         var dob = $("#dob").val();
         if(!validateDob(dob)){
             dobValid = false;
            wrong_details_enable("dob");
         }else{
             dobValid = true;
             correct_details_enable("dob");
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

         $("#submit").click(function(e){
			 if(nameValid && userNameValid && emailValid && dobValid && passwordValid){
			 var name = $("#name").val();
             var username = $("#username").val();
             var email = $("#email").val();
             var dob = $("#dob").val();
             var pass = $("#password").val();
			 e.preventDefault();
			 
             $.ajax({
             url:"save_user.php",
			 data: {name:name,username:username,email:email,dob:dob,pass:pass},
             type:"POST",
             success:function(res){
			 if(res == "false"){
		      
			 }else{
			    	window.location.href = "existingUser.php";  
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
           

			
		$("#closeingSpan").click(function(){
			$("#model-content").css("visibility","none");
		});
});	
	

	