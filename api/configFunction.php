<?php

function connectDB(){
	$conn = mysqli_connect("localhost","root","","logistics");

	// Check connection
	if (mysqli_connect_errno())
	{
	    echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}else{
		return $conn;
	}
}

function getPOSTData(){
	$data = file_get_contents("php://input");
	return json_decode($data);
}

?>