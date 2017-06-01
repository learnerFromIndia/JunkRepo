<?php
require('db_con.php');
session_start();
$username=$password="";

if(isset($_POST['username'])){ $username = $_POST['username'];} 
if(isset($_POST['password'])){  $password = $_POST['password'];} 

$sql = "SELECT * FROM user_password where username='$username' and password = '$password'";
$result = mysqli_query($conn,$sql);
$rows = mysqli_num_rows($result);

 if ($rows==1) {
 $_SESSION['username'] = $username;
 echo "true";
 }else{
	 echo "false";
 }
		

$conn->close();
?>