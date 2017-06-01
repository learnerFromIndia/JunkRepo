<?php
require('db_con.php');
$user = $_POST['user'];
$sql = "SELECT username from user_information";
$result = $conn->query($sql);
$found = false;
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
       if($row["username"] == $user){
		   $found = true;
		   echo "true";
	   }
    }
	if($found == false ){echo "false";}
	
} else {
    echo "0 results";
}
$conn->close();
?>