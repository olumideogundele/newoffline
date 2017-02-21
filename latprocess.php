 <?php
session_start();
include("config/DB_config.php");
	 // var dataString = 'outletname=' + item['outletname'] + '&address=' + item['address'] + '&landmaking=' + item['landmaking'] + '&address2='+ item['address2']+'&sticker=' + item['sticker'] +'&nivea=' + item['nivea']+ '&competitor=' + item['competitor']+'&lga=' + item['lga']+ '&contact=' + item['contact']+'&phone=' + item['phone']+'&outlettype=' + item['outlettype'] +'&aospw=' + item['aospw'] +'&callfrequency=' + item['callfrequency']+ '&purchase=' + item['purchase']+ '&currentdate=' + item['currentdate'];	
	 
	 
if(isset($_POST['outletname']))
{
$outletname = $_POST['outletname'];
 $address = $_POST['address'];
 $landmaking = $_POST['landmaking'];
 $address2 = $_POST['address2'];
 $sticker = $_POST['sticker'];
 $nivea = $_POST['nivea'];
 
 $competitor = $_POST['competitor'];
 $lga = $_POST['lga'];
 $contact = $_POST['contact'];
 $phone = $_POST['phone'];
 $outlettype = $_POST['outlettype'];
 $aospw = $_POST['aospw'];
 $callfrequency = $_POST['callfrequency'];
 $purchase = $_POST['purchase'];
 $currentdate = $_POST['currentdate'];
  $user  = $_POST['username'];
  
  
   $lat = $_POST['lat'];
  $long  = $_POST['long'];
	
	
date_default_timezone_set('Africa/Lagos');
			 $datetime=date("Y-m-d G:i:s");
	 
 
$sql = 	mysql_query("INSERT INTO `auditz_temp`
(`outletname`, `address`, `address2`, `contact`, `phone`, `outlettype`, `aospw`, `callfrequency`, `longitude`, `latitude`,`registeredby`, `created_date`, `landmark`, `lga`, `sticker`,`nivea`, `competitor`, `purchase`, `uploaded_at`) VALUES
('$outletname', '$address', '$address2', '$contact', '$phone', '$outlettype', '$aospw','$callfrequency','$long', '$lat', '$user', '$currentdate', '$landmaking', '$lga', '$sticker', '$nivea', '$competitor', '$purchase', '$datetime')") or die("ERROR OCCURED: ".mysql_error());

 
	
	
		 
}

?>

 