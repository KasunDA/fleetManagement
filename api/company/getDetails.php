<?php

include '../configFunction.php';
// Create connection
$con = connectDB();

$connQuery = '';
if($_REQUEST['id'] !== 'all'){
	$connQuery = " WHERE id=".$_REQUEST['id'];
}
$result = mysqli_query($con,"SELECT * FROM companylist".$connQuery) or die(mysql_errno()."error in query execution") ;

$json_response = array();
while($row = mysqli_fetch_array($result)) {
    $row_array['id'] = $row['id'];
    $row_array['companyName'] = $row['companyName'];
    $row_array['ssiNo'] = $row['SSINo'];
    $row_array['panNumber'] = $row['PANNo'];
    $row_array['address'] = $row['address'];
    $row_array['owners'] = $row['owners'];
    $row_array['typeOfCompany'] = $row['companyType'];
    $row_array['email'] = $row['email'];
    $row_array['phone'] = $row['phone'];
    $row_array['tanNo'] = $row['tanNo'];
    $row_array['serviceTaxNumber'] = $row['serviceTax'];
    array_push($json_response,$row_array);
}

echo json_encode($json_response);

mysqli_close($con);
?>