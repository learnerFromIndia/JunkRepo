function validateTaskName(taskName) {
		
		if(taskName==null){
			$('#alertPara').text('Name cannot be Null...');
			return false;
		}else if(taskName == " "){
			$('#alertPara').text('Name Cannot be Blank');
			return false;
        }else if(!taskNameFormatCheck(taskName)){
			$('#alertPara').text('Name cannot have Numbers,special symbols');
			return false;
        }else{
			return true;
		}
	}
   
	function validateTaskDescription(taskDescription) {
		
	if(taskDescription==null || taskDescription == " " || taskDescription == ""){
            $('#alertPara').text('Description Cannot be Null or empty');		
			return false;
		}else{
			return true;
		}
	}
	function validateTaskExpiry(taskExpiry) {
		
		if(taskExpiry==null || taskExpiry == " "){
			
			return false;
		}else if (!checkForExpiryDate(taskExpiry)){
			return false;
		}else{
			return true;
		}
	}

 
	function validateTaskPriority(taskPriority) {
		
		if(taskPriority == null || taskPriority == "none"){
			
			return false;
		}else{
			return true;
		}
	}
	function validateTaskRemind(taskRemind) {
		
		if(taskRemind == null || taskRemind == ""){			
			return false;
		}else if (!checkForRemindDate(taskRemind)){
			return false;
		}else{
			return true;
		}
	}
	

     function checkForReminAndExpiry(){
		 var expiry = $("#taskExpiry").val();
		 var remindDateArray = $("#taskRemind").val().split("T")[0].split("-");
		 var expiryDateArray = expiry.split("-");
		 
		 if(remindDateArray[0] < expiryDateArray[0]){	 
			 return true;
		 }else if(remindDateArray[0]  == expiryDateArray[0]){
			 if(remindDateArray[1] > expiryDateArray[1]){
				 return false;
			 }else if(remindDateArray[1] == expiryDateArray[1]){
				 if(remindDateArray[2] == expiryDateArray[2] || remindDateArray[2] < expiryDateArray[2]  )
				 { 
			         return true;
				 }
				 else 
				 {
					 return false;
				 }
				 
			 }else{
				 return true;
			 }
			 
		 }else{
			 return false;
		 }
		 
		 
	 }
	
	function correct_details_enable(textField){
		
		if(textField == "taskName"){
			if($("#image2").is(":visible") == true){
            $("#image2").css("display","none");
            }
			$("#image1").css("display","inline");
			
		}else if(textField == "taskDescription"){
			if($("#image4").is(":visible") == true){
               $("#image4").css("display","none");
             }
           $("#image3").css("display","inline");

		}else if(textField == "taskExpiry"){
			if($("#image6").is(":visible") == true){
               $("#image6").css("display","none");
             }
           $("#image5").css("display","inline");

		}else if(textField == "taskPriority"){
			if($("#image8").is(":visible") == true){
               $("#image8").css("display","none");
             }
           $("#image7").css("display","inline");

		}else if(textField == "taskRemind"){
			if($("#image10").is(":visible") == true){
               $("#image10").css("display","none");
             }
           $("#image9").css("display","inline");

		}
		
	}
	function wrong_details_enable(textField){
		if(textField == "taskName"){
             if($("#image1").is(":visible") == true){
               $("#image1").css("display","none");
             }
             $("#image2").css("display","inline");
		}else if(textField == "taskDescription"){
            if($("#image3").is(":visible") == true){
               $("#image3").css("display","none");
             }
             $("#image4").css("display","inline");

		}else if(textField == "taskExpiry"){
            if($("#image5").is(":visible") == true){
               $("#image5").css("display","none");
             }
             $("#image6").css("display","inline");

		}else if(textField == "taskPriority"){
            if($("#image7").is(":visible") == true){
               $("#image7").css("display","none");
             }
             $("#image8").css("display","inline");

		}else if(textField == "taskRemind"){
            if($("#image9").is(":visible") == true){
               $("#image9").css("display","none");
             }
             $("#image10").css("display","inline");

		}
		
	}
	
function taskNameFormatCheck(taskName){
	var reg = /^[a-zA-Z]+$/;
	var result = reg.test(taskName);
	return result;
}
	
function checkForExpiryDate(taskExpiry){
	var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
    dd='0'+dd
    } 

    if(mm<10) {
    mm='0'+mm
    }  
 
   var expiry = taskExpiry.split("-");
	
	if(yyyy == expiry[0]){		
		if(mm == expiry[1]){
			if(dd < expiry[2]){
			return true;	
			}
		}else if(mm < expiry[1]){
			return true;
		}
		$('#alertPara').text('Expiry Date should be greater than todays Date');
		return false;
	}else if(yyyy < expiry[0]){
		return true;
	}else{
		$('#alertPara').text('Expiry Year Cannot be in the Past');
		return false;
	}
	
}	

function checkForRemindDate(taskRemindDate){
	var today = new Date();
	var hour = today.getHours();
	var minute = today.getMinutes();
	
	var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
    dd='0'+dd
    } 

    if(mm<10) {
    mm='0'+mm
    }  
 
   var taskRemindDateArray = taskRemindDate.split("T");
   var dateArray = taskRemindDateArray[0].split("-");
   var timeArray = taskRemindDateArray[1].split(":");
	if(yyyy == dateArray[0]){		
		if(mm == dateArray[1]){
			if(dd <= dateArray[2]){
			if(timeArray[0] >= hour){
		      if(timeArray[1] > minute){
				return true;
			    }
	         }
		    }
		}else if(mm < dateArray[1]){
			return true;
		}
	return false;
	}else if(yyyy  < dateArray[0]){
		return true;
	}else{
		return false;
	}
	
}
function returnTodayDate(){
	var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
    dd='0'+dd
    } 

    if(mm<10) {
    mm='0'+mm
    }  
	return  yyyy +"-" +mm +"-" +dd;
}
function clearTextBoxes(){
		taskNameValid = false;
        taskDescriptionValid = false;
	    taskExpiryValid = false;
        taskPriorityValid = false;
	    taskRemindValid = false;
		
		$("#taskName").val("");
		$("#taskDescription").val("");
		$("#taskExpiry").val("");
		$("#taskPriority").val("none");
		$("#taskRemind").val("");
		$(".imageDiv").css("display","none");	
}

function getParentId(event){
	
var parent = $(event.target).parent().parent().parent();
var parentId = parent[0].id;
			
return parentId;	
}

function displaySaveAndCancel(parentId){
	var saveId = '#save' +parentId.substring(parentId.length- 1,parentId.length);
	var cancelId = '#cancel' +parentId.substring(parentId.length- 1,parentId.length);
	$('#'+parentId).css('width','98%');
	$(saveId).css('display','inline-block');
    $(cancelId).css('display','inline-block');	
}

function getRowNumber(parentId){
return (parentId.substring(parentId.length- 1,parentId.length));
	
}
function returnAllTextBoxToDefault(rowNumber){
$('#select'+rowNumber).val($('#select'+rowNumber).attr('default-value'));	
$('#namePara'+rowNumber).text($('#namePara'+rowNumber).attr('default-value'));	
$('#expiry'+rowNumber).val($('#expiry'+rowNumber).attr('default-value'));	
$('#descPara'+rowNumber).text($('#descPara'+rowNumber).attr('default-value'));	
}
function displayFailureAlertBox(marginValue){
	$("#alertBox").css("background-color","#f44336");
    $('#alertBox').css('display','block');	
	$("#alertPara").css("margin-left",marginValue);
	$('#alertBox').fadeOut(8000);
	
}
function displaySuccessAlertBox(marginValue){
	$("#alertBox").css("background-color","#86C67C");
    $('#alertBox').css('display','block');	
	$("#alertPara").css("margin-left",marginValue);
	$('#alertBox').fadeOut(8000);
}
function defaultTheTextBox(textbox,rowNumber){
	if(textbox == 'descPara'){
		$('#'+textbox+rowNumber).text($('#'+textbox+rowNumber).attr('default-value'));
	}else if(textbox == 'namePara'){
		$('#'+textbox+rowNumber).text($('#'+textbox+rowNumber).attr('default-value'));
	}else{
		$('#'+textbox+rowNumber).val($('#'+textbox+rowNumber).attr('default-value'));
	}
}