<?php 
	require('db_con.php');
	include("auth.php");
    $taskNumber = ""; 
	if(isset($_POST['taskNumber'])){ $taskNumber = $_POST['taskNumber'];} 
	$username = $_SESSION['username'];
	$sql = "DELETE from to_do_things WHERE username='$username' && task_id='$taskNumber'";
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