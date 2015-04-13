<?php
// Create connection
$con=mysqli_connect("localhost","root","","logistics");

// Check connection
if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$data = file_get_contents("php://input");
$objData = json_decode($data);

if($objData->id){
	$id = $objData->id;
}

$companyName = $objData->companyName;
$ssiNo = $objData->ssiNo;
$panNo = $objData->panNumber;
$address = $objData->address;
$owners = $objData->owners;
$typeOfCompany = $objData->typeOfCompany;
$email = $objData->email;
$phone = $objData->phone;

if($id){
	$sql = "UPDATE companylist SET companyName='$companyName',  SSINo='$ssiNo', PANNo='$panNo', address='$address', owners='$owners', companyType='$typeOfCompany', email='$email', phone='$phone' WHERE id='$id'";
}else{
	$sql = "INSERT INTO companylist (companyName, SSINo, PANNo, address, owners, companyType, email, phone) VALUES ('$companyName', '$ssiNo', '$panNo', '$address', '$owners', '$typeOfCompany', '$email', '$phone')";
}


$result = mysqli_query($con, $sql) or die(mysql_errno()."error in query execution") ;

mysqli_close($con);
?>