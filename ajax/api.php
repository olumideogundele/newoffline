<?php 

  //--------------------------------------------------------------------------
  // Example php script for fetching data from mysql database
  // by Trystan Lea : openenergymonitor.org : GNU GPL
  //--------------------------------------------------------------------------
  $host = "localhost";
  $user = "root";
  $pass = "";

  $databaseName = "auditz";
  $tableName = "users";

  //--------------------------------------------------------------------------
  // 1) Connect to mysql database
  //--------------------------------------------------------------------------
 // include 'DB.php';
  $con = mysql_connect($host,$user,$pass);
  $dbs = mysql_select_db($databaseName, $con);

  //--------------------------------------------------------------------------
  // 2) Query database for data
  //--------------------------------------------------------------------------
  $value = $_GET['value'];
  
  
  
  $result = mysql_query("SELECT * FROM $tableName WHERE `email` = '$value'");            //query
  $array = mysql_fetch_row($result);                          //fetch result    

  //--------------------------------------------------------------------------
  // 3) echo result as json 
  //--------------------------------------------------------------------------
  echo json_encode($array);

?>
