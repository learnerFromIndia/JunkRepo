<html>
<head>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="Content-Language" content="English" />
	
	<link rel="stylesheet" type="text/css" href="Dashboard.css">
	</link>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js"></script>
	<script>
		WebFont.load({
		  google: {
			families: ["Cookie:regular"]
		  }
		});
	</script>
	<script src="Dashboard.js"></script>
	<script src="Dashboard_Validations.js"></script>
</head>
<body>
     <div id="headerDiv">
	   <div id="headTitleDiv"><span id="imageSpan"><image src="right.gif" /></span><p id="ApplicationHeader">To Do Application</p></div> 
	   <ul id="buttonList">
	   <li><input type="image" id="settings" class="headerButtonImages" src="setting.gif"><div class="toolTip" id="settingTip"><p class="tips" >Settings</p></div></input></li> 	
       <li><input type="image" id="profile" class="headerButtonImages" value="Profile" src="profile.png" ></input><div class="toolTip" id="profileTip"><p class="tips">Profile</p></div></li>  	
       <li><input type="image" id="notifications" class="headerButtonImages" value="Notifications" src="notifications.png" ></input><div class="toolTip" id="notificationTip"><p class="tips">Notifications</p></div></li> 
	   <li><input type="image" id="logout" class="headerButtonImages" src="logout4.gif" ></input><div class="toolTip" id="logoutTip"><p class="tips">Logout</p></div></li> 
	   </ul>   
	</div>
	
	<div id="alerts">
	<div id="alertBox"><p id="alertPara">Something wrong..Please Try Again</p></div> 
	</div>
	 <div id="mainDiv">
	   <div id="parallelDivLeft">
	   </div>
		
		
		<div id="paralleldivMiddle">
		<div id="bubbleDiv"><p id="bubblePara">To Do's</p></div>
		<br>
			<div id="innerDiv">
			  <div class="row" id="row0">
			  <ul>
			        <li class="cellHidden"><h4 style="display:none">TaskId</h4></li>
					<li class="cell1"><h4>Name</h4></li>
					<li class="cell2"><h4>Description</h4></li>
					<li class="cell3"><h4>Priority</h4></li>
					<li class="cell4"><h4>Expiry Date</h4></li>
					<li class="cell5"><h4>Status</h4></li>
			 </ul>
			  </div>
			  <div id="line0" class="lines">
			  <ul>
				  <li class="firstLine"></li>
				  <li class="secondLine"></li>
              </ul>				  
			  </div>
			</div>
		</div>
		
		<div id="parallelDivRight">
		</div>
		</div>
		<div id="optionsDiv">
		    <input type="button" id="createButton" class="formButtons" value="Create"/>
		    <input type="button" id="saveButton" class="formButtons" value="Save"/>
		</div>
		
		<div id="createToDoDiv" class="toDoBox animate" draggable="true"> 
		
			<div id="formHeader"><span class="closebtn" id="closeSpan" onclick="this.parentElement.parentElement.style.display='none';"><p>&times;</p></span></div>
			
			<div id="createForm">
					<label class="labels">Name</label><input type="text" class="createFormInputs" id="taskName"> </text><div class="imageDiv" ><image class="correctImg" id="image1" src="correct.gif"><image class="wrongImg" id="image2" src="wrong.gif"></div><br><br>
					<label class="labels">Description</label><textarea class="createFormInputs" id="taskDescription" rows='10' cols = '70'> </textarea><div class="imageDiv"><image class="correctImg" id="image3" src="correct.gif"><image class="wrongImg" id="image4" src="wrong.gif"></div><br><br>
					<label class="labels">Expiry-Date</label><input class="createFormInputs" id="taskExpiry" type="date" placeholder=""> </text><div class="imageDiv" ><image class="correctImg" id="image5" src="correct.gif"><image class="wrongImg" id="image6" src="wrong.gif"></div><br><br>
					<label class="labels">Priority</label><select  class="createFormInputs" id="taskPriority"><option value="none">none</option><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option></select><div class="imageDiv"><image class="correctImg" id="image7" src="correct.gif"><image class="wrongImg" id="image8" src="wrong.gif"></div><br><br>
					<label class="labels">Remind-me-on</label><input class="createFormInputs" id="taskRemind" type="datetime-local" placeholder=""> </text><div class="imageDiv"><image class="correctImg" id="image9" src="correct.gif"><image class="wrongImg" id="image10" src="wrong.gif"></div>
			</div>
			
			<div id="buttonDiv">
				<input type="button" id="createformButton" class="formButtons" value="Create"/>
				<input type="button" id="clearformButton"  class="formButtons" value="Clear"/>
				<input type="button" id="exitformButton" class="formButtons" value="Exit"/>
			</div>
			
		</div>
		<div id="alertBodyDiv" class="animate">
		<span id="questionMark"><input type="image" id="questionMarkImage" src="question_mark.png"/></span>
		<p id="alertBodyPara">Do you want to Continue??</p>
		<div id="alertButtonDiv" ><input type="button" id="yesButton" value="Yes"></input><input id="noButton" value="No" type="button"></input></div>
		
		</div>
</body>
</html>