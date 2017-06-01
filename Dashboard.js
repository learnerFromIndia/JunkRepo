
$(document).ready(function(){
	
	 var taskNameValid = false;
     var taskDescriptionValid = false;
	 var taskExpiryValid = false;
     var taskPriorityValid = false;
	 var taskRemindValid = false;
	
	$.ajax({
				 url:"get_to_do.php",
				 type:"POST",
				 success:function(res){
				 if(res == "false"){
					 
				 }else if(res == "no results"){
					 var lineDivId = "#line" + 0;
					  $(lineDivId).after('<div id="noResultsDiv"><p id="noResultsPara">NO TO-DOS TO DISPLAY</p><p id="suggestionPara"><strong>To Create a new To-Do Task</strong>,Please select Create button and fill in the details..</p><p id="suggestionParaSpan">Have Fun!!!!!!</p><span><input type="image" id="noResultsDivImg" src="smiley.PNG"/></span></div>');
					  //$('#noResultsDiv').after('<div id="arrow"></div>');
				 }else{
					var result = res.trim();
					var divs = result.split("|");
					var counter = divs.length;
					for(var i=0;i < counter-1;i++){
						 var div = divs[i];				
						 var fields = div.split("_");
						 var rowDivId = "#row" + (i+1);
						 var lineDivId = "#line" + i;
						 var selectId = 'select' + (i+1);
						 var nameParaId = 'namePara' + (i+1);
						 var checkId = 'check' + (i+1);
						 var descParaId = 'descPara' + (i+1);
						 var creationId = 'creation' + (i+1);
						 var expiryId = 'expiry' + (i+1);
						 var saveId = 'save' + (i+1);
						 var cancelId = 'cancel' + (i+1);
						 var idCellId = 'idCell' + (i+1);
							 $(lineDivId).after('<div id="'+rowDivId.replace('#','')+'" class="tasks"><ul><li class="idCell"><h4 style="display:none" id="'+idCellId+'">'+fields[0]+'</h4></li><li class="nameCell"><p contenteditable="true" class="paragraphs" id="'+nameParaId+'">'+fields[1]+'</p></li><li class="descCell"><p class="paragraphs" contenteditable="true" id="'+descParaId+'">'+fields[2]+'</p></li><li class="priorityCell"><select class="selects" id="'+selectId+'"><option value="high">High</option><option value="low">Low</option><option value="medium">Medium</option></select></li><li class="expiryCell"><input class="dates" type="date" id="'+expiryId+'"></input></li><li class="statusCell"><input class="checks" id="'+checkId+'" checked type="checkbox"></input></li><li><input type="image" id="'+saveId+'" class="saveImage" src="saveImage.png"/></li><li><input type="image" id="'+cancelId+'" class="cancelImage" src="cancel.png"/></li></ul></div>'); 
							 $('#'+selectId).val(fields[3]);
							 $('#'+selectId).attr('default-value',fields[3]);
							 $('#'+nameParaId).val(fields[1]);
							 $('#'+nameParaId).attr('default-value',fields[1]);
							 $('#'+descParaId).val(fields[2]);
							 $('#'+descParaId).attr('default-value',fields[2]);
							 $('#'+expiryId).val(fields[4]);
							 $('#'+expiryId).attr('default-value',fields[4]);
							 
							 if(fields[5] == "0"){
								 $('#'+checkId).removeAttr("checked");
								 $('#'+checkId).val('off');
							 }else{
								$('#'+checkId).attr('checked','true');
								$('#'+checkId).val('on');
							 }
						 
						 $(rowDivId).after('<div id="line'+(i+1)+'" class="lines"><ul><li class="firstLine"></li><li class="secondLine"></li></ul>');
						 
					} 
						
				 }
				 },
				 error:function(jqHXR,textstatus,errorThrown){
				 alert("error" +" " +textstatus +" " +errorThrown);	 
				 }
				});  
	
	
	
	
	
	$("#createButton").click(function(){
		$("#createToDoDiv").css("display","inline-block");
      
	});
		
	$(document.body).bind("drop",function(event){
		var dm = document.getElementById('createToDoDiv');
		var offset = event.originalEvent.dataTransfer.getData("text").split(',');
		dm.style.left = ((event.clientX + parseInt(offset[0],10)) * 100) / window.innerWidth + '%';
		dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
		event.preventDefault();
		return false;
	});
	$(document.body).bind("dragover",function(event){
		event.preventDefault(); 
         return false; 
	});
	$("#exitformButton").click(function(){
		$("#createToDoDiv").hide("slow");
	});
	$("#createToDoDiv").bind("dragstart",function(event){
			// Only allow dragging when it's from the 'title bar' area. Only need to test Y position of cursor.
			bound = document.getElementById("createToDoDiv");
			box = bound.getBoundingClientRect();
			

			// Grab all computed styles of the dragged object
			var style = window.getComputedStyle(event.target, null);
			// dataTransfer sets data that is being dragged. In this case, the current X and Y values (ex. "1257,104")
			event.originalEvent.dataTransfer.setData("text",
			(parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
	});
	
	$("#createformButton").click(function(){
		if(taskDescriptionValid && taskNameValid && taskExpiryValid && taskPriorityValid && taskRemindValid){
			
			if(!checkForReminAndExpiry()){
				taskRemindValid = false;
				wrong_details_enable("taskRemind");
				return false;
			}
			var taskName = $("#taskName").val();
            var taskDescription  = $("#taskDescription").val();
	        var taskExpiry = $("#taskExpiry").val();            
			var taskPriority = $("#taskPriority").val();
	        var taskRemind = $("#taskRemind").val();
			var date = returnTodayDate();
			
			
			$.ajax({
				 url:"save_task.php",
				 data: {taskName:taskName,taskDescription:taskDescription,taskExpiry:taskExpiry,taskPriority:taskPriority,taskRemind:taskRemind,date:date},
				 type:"POST",
				 success:function(res){
				 if(res == "false"){
					 $("#createToDoDiv").css("display","none");
					 $("#alertBox").css("background-color","#f44336");
					 $("#alertPara").css("margin-left","50px");
					 $("#alertPara").text("Something wrong..Please Try Again");	
					 $("#alertBox").css("display","block");
					 $("#alertBox").fadeOut(8000);
					clearTextBoxes();	
				 }else if(res == "true"){
					$("#createToDoDiv").css("display","none");
					$("#alertBox").css("background-color","#86C67C");
					$("#alertBox").css("display","block");
					$("#alertPara").css("margin-left","100px");
					$("#alertPara").text("Task added successfully...");
					$("#alertBox").fadeOut(8000);
					clearTextBoxes();
					 window.setTimeout('location.reload()', 8000);
				 }
				 },
				 error:function(jqHXR,textstatus,errorThrown){
				 alert("error" +" " +textstatus +" " +errorThrown);	 
				 }
				});  
		}else{
			alert("Please fill all the fields...");
		}
		
	});
	//$("#exitformButton").click(function(){
		//$("#createToDoDiv").css("display","none");
		//
	//});
	$("#clearformButton").click(function(){
		clearTextBoxes();
	});
	
	
        

 $("#taskName").on({
         mouseenter: function(){
         $("#taskName").attr("placeholder","Input a task name...");
         }, 
         blur: function(){
         var taskName = $("#taskName").val();
          if(!validateTaskName(taskName)){
             taskNameValid = false;
             wrong_details_enable("taskName");
         }else{
		   taskNameValid = true;
           correct_details_enable("taskName");
          }
         }, 
    });



  $("#taskDescription").on({
         mouseenter: function(){
         $("#taskDescription").attr("placeholder","describe the task...");
         }, 
         blur: function(){
         var taskDescription = $("#taskDescription").val();
         if(!validateTaskDescription(taskDescription)){
             taskDescriptionValid = false;
             wrong_details_enable("taskDescription");
         }else{
             taskDescriptionValid = true;
             correct_details_enable("taskDescription");
          }
         }, 
         });
		 
		  

 $("#taskExpiry").on({
         blur: function(){
         var taskExpiry = $("#taskExpiry").val();
          if(!validateTaskExpiry(taskExpiry)){
             taskExpiryValid = false;
             wrong_details_enable("taskExpiry");
         }else{
		   taskExpiryValid = true;
           correct_details_enable("taskExpiry");
          }
         }, 
         });


		 $("#logout").on({
			click:function(){
				window.location = "logout.php";
				
			} 
		 });

  $("#taskPriority").on({
         blur: function(){
         var taskPriority = $("#taskPriority").val();
         if(!validateTaskPriority(taskPriority)){
             taskPriorityValid = false;
             wrong_details_enable("taskPriority");
         }else{
             taskPriorityValid = true;
             correct_details_enable("taskPriority");
          }
         }, 
    });
 $("#taskRemind").on({
         blur: function(){
         var taskRemind = $("#taskRemind").val();
          if(!validateTaskRemind(taskRemind)){
             taskRemindValid = false;
             wrong_details_enable("taskRemind");
         }else{
		  taskRemindValid = true;
           correct_details_enable("taskRemind");
          }
         }, 
         });
	 
	 
		$(document.body).on('change','.selects',function(event){
		   var parentId = getParentId(event);
		   
		   displaySaveAndCancel(parentId);
		   
		});

		$(document.body).on('change','.dates',function(event){
		   var parentId = getParentId(event);
		   displaySaveAndCancel(parentId); 
		});
		$(document.body).on('keyup','.paragraphs',function(event){
			var parentId = getParentId(event);
			displaySaveAndCancel(parentId);
		   
		});
		$(document.body).on('change','.checks',function(event){
			var parentId = getParentId(event);
			var rowNumber = getRowNumber(parentId);
			if($('#check'+rowNumber).val() == 'off'){
				$('#check'+rowNumber).val('on');
				displaySaveAndCancel(parentId);
			}else{
				$('#check'+rowNumber).val('off');
			}
		});

		$(document.body).on('click','.cancelImage',function(event){
		 var parentId = getParentId(event);
		 var rowNumber = getRowNumber(parentId);
		 $('#save'+rowNumber).css('display','none');
		 $('#cancel'+rowNumber).css('display','none');
		 $('#'+parentId).css('width','95%');
		 returnAllTextBoxToDefault(rowNumber);
			
		});
		
		$('#yesButton').on({
		click:function(event){
		 $(document.body).css('pointer-events','auto');	
		 $('#alertBodyDiv').css('display','none');
		 var task_id = $('#idCell'+rowToBeDeleted).text();
		 $.ajax({
						 url:"delete_task.php",
						 data: {taskNumber:task_id},
						 type:"POST",
						 success:function(res){
						 if(res == "false"){
							 $("#alertPara").text("Something wrong..Please Try Again");	
							 displayFailureAlertBox('50px');
						 }else if(res == "true"){
							$("#alertPara").text("Task Removed Successfully...");
							displaySuccessAlertBox('100px');
							window.setTimeout('location.reload()', 1000);
						 }
						 },
						 error:function(jqHXR,textstatus,errorThrown){
						 alert("error" +" " +textstatus +" " +errorThrown);	 
						 }
						});
		 
		}		
		});
		$('#noButton').on({
		click:function(event){
			 $(document.body).css('pointer-events','auto');		
			 $('#alertBodyDiv').css('display','none');
			 $('#check'+rowToBeDeleted).val('off');
			 $('#check'+rowToBeDeleted).removeAttr('checked');
		}		
		});
        
		$('#alertCloseSpan').on({
		click:function(event){
			$(document.body).css('pointer-events','auto');
			$('#check'+rowToBeDeleted).val('off');
			$('#check'+rowToBeDeleted).removeAttr('checked');
			$('#alertBodyDiv').css('display','none');		
		}		
		
		});
		
		$(document.body).on('click','.saveImage',function(event){
		 var parentId = getParentId(event);
		 var rowNumber = getRowNumber(parentId);
		  if($('#check'+rowNumber).val() == 'on'){
			     $('#check'+rowNumber).attr('checked');
				 $('#alertBodyPara').text('Task Will be deleted from Database Continue??');
				 $(document.body).css('pointer-events','none');
				 $('#alertBodyDiv').css('display','inline-block');
				 $('#alertBodyDiv').css('pointer-events','auto');
				 rowToBeDeleted = rowNumber;
		 }else{
		 var priority = $('#select'+rowNumber).val(); 
		 var name = $('#namePara'+rowNumber).text();
		 var expiry = $('#expiry'+rowNumber).val();
		 var id = $('#idCell'+rowNumber).text();
		 var description = $('#descPara'+rowNumber).text();
		 if(validateTaskName(name)){
			 if(validateTaskExpiry(expiry)){
				 if(validateTaskDescription(description)){
					 $('#save'+rowNumber).css('display','none');
					 $('#cancel'+rowNumber).css('display','none');
					 $('#alertPara').text('Saved Successfully...');
					 $('#'+parentId).css('width','95%');
					 
					 $.ajax({
						 url:"update_task.php",
						 data: {taskId:id,taskDescription:description,taskExpiry:expiry,taskName:name,taskPriority:priority},
						 type:"POST",
						 success:function(res){
						 if(res == "false"){
							 $("#alertPara").text("Something wrong..Please Try Again");	
							 displayFailureAlertBox('50px');
						 }else if(res == "true"){
							$("#alertPara").text("Task updated successfully...");
							displaySuccessAlertBox('100px');
							window.setTimeout('location.reload()', 8000);
						 }
						 },
						 error:function(jqHXR,textstatus,errorThrown){
						 alert("error" +" " +textstatus +" " +errorThrown);	 
						 }
						});
				 }else{
					 displayFailureAlertBox('20px');
					 defaultTheTextBox('descPara',rowNumber);			 
				 }
			 }else{
				displayFailureAlertBox('-20px');
				defaultTheTextBox('expiry',rowNumber);		
			 }
		 }else{
			 displayFailureAlertBox('-10px');
			 defaultTheTextBox('namePara',rowNumber);
		 } 
		 }
		 
		});
			
		});