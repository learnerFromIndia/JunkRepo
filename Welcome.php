<html>
	<head>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			<meta http-equiv="Content-Language" content="English" />
			
			<link rel="stylesheet" type="text/css" href="Welcome.css">
			</link>
			
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
			<script src="Welcome.js"/>"></script>
			<script src="Welcome_Validations.js"/>"></script>
			<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js"></script>
			<script>
					WebFont.load({
					  google: {
						families: ["Cookie:regular"]
					  }
					});
				</script>
	</head>
	<body>
		
		
		<div id="mainDiv">
			<div id="headerDiv">
					<span><image id="ApplicationHeaderImage" src="right.gif" /></span><span><p id="ApplicationHeader">To Do Application</p></span>
			</div>
			<h1>Sign up for free!!!</h1>
		    <div id="outerDiv">
		      <div id="innerDiv">
		  
			<form>
			
				<label for="Name">Name:</label>
				<input type="text" id="name" class="inputFields"/>
							<div id="nameAlertDiv" class="alertDivs"><image class="warningimg" src="red-warning-sign.jpg"><p id="namePara" class="paragraph"></p></div>
							<div class="imageDiv" id="nameDiv"><image class="correctImg" id="image1" src="correct.gif"><image class="wrongImg" id="image2" src="wrong.gif"></div>                        

			    <label for="UserName">UserName:</label>
				<input class="inputFields" id="username" type="text"/>
							<div id="usernameAlertDiv" class="alertDivs"><image class="warningimg" src="red-warning-sign.jpg"><p id="userNamePara" class="paragraph"></p></div>
							<div class="imageDiv" id="usDiv"><image class="correctImg" id="image3" src="correct.gif"><image class="wrongImg" id="image4" src="wrong.gif"></div>

				<label for="Email-ID">Email-id:</label>
				<input type="email" class="inputFields" id="email"/>
							<div id="emailAlertDiv" class="alertDivs"><image class="warningimg" src="red-warning-sign.jpg"><p id="emailPara" class="paragraph"></p></div>
				            <div class="imageDiv" id="emailDiv"><image class="correctImg" id="image5" src="correct.gif"><image class="wrongImg" id="image6"  src="wrong.gif"></div>
		
				<label for="DateOfBirth">DOB:</label>
				<input  class="inputFields" id="dob" type="date"/>
							<div id="dobAlertDiv" class="alertDivs"><image class="warningimg" src="red-warning-sign.jpg"><p id="dobPara" class="paragraph"></p></div>
							<div class="imageDiv" id="dobDiv"><image id="image7" class="correctImg" src="correct.gif"><image id="image8" class="wrongImg" src="wrong.gif"></div>

				<label for="Password">Password:</label>
				<input class="inputFields" id="password" type="password"/>
					<div id="passwordAlertDiv" class="alertDivs"><image class="warningimg" src="red-warning-sign.jpg"><p id="passwordPara" class="paragraph"></p></div>
					<div class="imageDiv" id="passDiv"><image id="image9" class="correctImg" src="correct.gif"><image class="wrongImg" id="image10" src="wrong.gif"></div>

				<input type="submit" id="createAccount" value="Create">
				<a style="margin-left: 160px" href="existingUser.php">Already user?</a>
				
			</form>
			
		  </div>
		  </div>
		</div>
	</body>
</html>
