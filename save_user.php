<?php 
require('db_con.php');
$name=$username=$email=$dob=$password="";

if(isset($_POST['name'])){ $name = $_POST['name'];} 
if(isset($_POST['username'])){ $username = $_POST['username'];} 
if(isset($_POST['email'])){ $email = $_POST['email'];} 
if(isset($_POST['dob'])){ $dob = $_POST['dob'];} 
if(isset($_POST['pass'])){  $password = $_POST['pass'];} 

$sql = "INSERT INTO user_information (name,username,email,dob) VALUES ('$name','$username','$email','$dob')";
$sql1 = "INSERT INTO user_password (username,password) VALUES ('$username','$password')";
if (mysqli_query($conn, $sql) && mysqli_query($conn, $sql1)){ 
echo "true";
return;
} 
else {
echo "false";
return;
}

$conn->close();
?>	