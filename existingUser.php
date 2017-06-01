<html>

		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			<meta http-equiv="Content-Language" content="English" />
			
			<link rel="stylesheet" type="text/css" href="existingUser.css">
			</link>
			
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
			<script src="existingUser.js"></script>
			<script src="existingUser_Validations.js"></script>
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
			<h1>Welcome Again...</h1>
			<div id="outerDiv">
			
			 <div id="innerDiv">
			 <div class="fields">
					<label for="UserName">UserName:</label>
						<input id="username" name="username" type="text"/></div>
						<div id="userNameAlertDiv" class="alertDivs"><image class="warningImg" src="red-warning-sign.jpg"><p id="userNamePara" class="paragraph"></p></div>
						<div class="imageDiv" id="usDiv"><image class="correctImg" id="image3" src="correct.gif"><image class="wrongImg" id="image4" src="wrong.gif"></div>

					<div class="fields"><label for="Password">Password:</label>
						<input id="password" name="password" type="password"/></div>
						<div id="passwordAlertDiv" class="alertDivs"><image class="warningimg" src="red-warning-sign.jpg"><p id="passwordPara" class="paragraph"></p></div>
						<div class="imageDiv" id="passDiv"><image id="image9" class="correctImg" src="correct.gif"><image class="wrongImg" id="image10" src="wrong.gif"></div>

					<input type="button" id="login" value="Login">
					<a href="Welcome.php">Create New Account?</a>
				
			 </div>
			 
			</div>
			
			<div id="authFailureDiv"><p id="alertParagraph"><strong>Authentication details are incorrect</strong></p><span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span></div>
        </div>
		</body>
</html>



