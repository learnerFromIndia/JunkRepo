<?php 
	require('db_con.php');
	include("auth.php");
	$taskName=$taskDescription=$taskExpiry=$taskPriority=$taskRemind=$creationDate="";

	if(isset($_POST['taskName'])){ $taskName = $_POST['taskName'];} 
	if(isset($_POST['taskDescription'])){ $taskDescription = $_POST['taskDescription'];} 
	if(isset($_POST['taskExpiry'])){ $taskExpiry = $_POST['taskExpiry'];} 
	if(isset($_POST['taskPriority'])){ $taskPriority = $_POST['taskPriority'];} 
	if(isset($_POST['taskRemind'])){  $taskRemind = $_POST['taskRemind'];} 
	if(isset($_POST['date'])){  $creationDate = $_POST['date'];} 
	$username = $_SESSION['username'];
	$sql = "INSERT INTO to_do_things (username,task_priority,task_creation_date,task_expiry_date,task_name,task_description,task_status,remind_date) VALUES ('$username','$taskPriority','$creationDate','$taskExpiry','$taskName','$taskDescription','0','$taskRemind')";
	if (mysqli_query($conn, $sql)){ 
	echo "true";
	return;
	} 
	else {
	echo "false";
	return;
	} 

	$conn->close();
?>