<?php 
require('db_con.php');
include("auth.php");

if(isset($_SESSION['username'])){$username = $_SESSION['username'];}
else{ echo "false";}

$query = "SELECT * FROM to_do_things where username='$username'";
$result =  mysqli_query($conn,$query);
$num_of_rows = $result->num_rows;

if($num_of_rows > 0){
	
	while($row = $result->fetch_assoc()){ 
		$id = $row['task_id'];
		$priority = $row['task_priority'];
		$name = $row['task_name'];
		$expiry = $row['task_expiry_date'];
		$desc = $row['task_description'];	
		$status = $row['task_status'];
		echo "$id" . "_" . "$name" . "_" . "$desc" . "_" ."$priority" . "_" . "$expiry" . "_" . "$status" . "|";
		
	}
}else{
  echo "no results";
}
?>