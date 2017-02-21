<?php

  include_once('config.php'); 
$link = mysql_connect(_DB_SERVER_, _DB_USER_, _DB_PASSWD_) or die('Could not connect: ' . mysql_error());

// Select your database
$db = mysql_select_db (_DB_NAME_) or die('Could not connect: ' . mysql_error());

 

  /*$db = @mysql_connect(_DB_SERVER_, _DB_USER_, _DB_PASSWD_) or die(mysql_error());
    @mysql_select_db(_DB_NAME_, $db) or die(mysql_error()); */

?>