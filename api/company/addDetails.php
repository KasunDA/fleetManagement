<?php
// Create connection
include '../configFunction.php';

$objData = getPOSTData();

if($objData->id){
	$id = $objData->id;
}

$companyName 		= $objData->companyName;
$ssiNo 				= $objData->ssiNo;
$panNo 				= $objData->panNumber;
$tanNo 				= $objData->tanNo;
$serviceTaxNumber 	= $objData->serviceTaxNumber;
$phone 				= $objData->phone;
$address 			= $objData->address;
$owners 			= $objData->owners;
$typeOfCompany 		= $objData->typeOfCompany;
$email 				= $objData->email;
$phone 				= $objData->phone;


if($id){
	$sql = "UPDATE companylist SET companyName='$companyName',  SSINo='$ssiNo', PANNo='$panNo', tanNo='$tanNo', serviceTax='$serviceTaxNumber', address='$address', owners='$owners', companyType='$typeOfCompany', email='$email', phone='$phone' WHERE id='$id'";
}else{
	$sql = "INSERT INTO companylist (companyName, SSINo, PANNo, tanNo, serviceTax, address, owners, companyType, email, phone) VALUES ('$companyName', '$ssiNo', '$panNo', '$tanNo', '$serviceTaxNumber', '$address', '$owners', '$typeOfCompany', '$email', '$phone')";
}


$result = mysqli_query($con, $sql) or die(mysql_errno()."error in query execution") ;

mysqli_close($con);
?>