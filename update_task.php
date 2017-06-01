<?php 
	require('db_con.php');
	include("auth.php");
	$taskName=$taskDescription=$taskExpiry=$taskPriority=$taskId="";

	if(isset($_POST['taskName'])){ $taskName = $_POST['taskName'];} 
	if(isset($_POST['taskDescription'])){ $taskDescription = $_POST['taskDescription'];} 
	if(isset($_POST['taskExpiry'])){ $taskExpiry = $_POST['taskExpiry'];} 
	if(isset($_POST['taskPriority'])){ $taskPriority = $_POST['taskPriority'];} 
	if(isset($_POST['taskId'])){  $taskId = $_POST['taskId'];} 
	$username = $_SESSION['username'];
	$sql = "UPDATE to_do_things SET task_name ='$taskName',task_priority='$taskPriority',task_description='$taskDescription',task_expiry_date='$taskExpiry' WHERE task_id='$taskId' && username='$username'";
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