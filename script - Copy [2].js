// JavaScript Document

//  Declare SQL Query for SQLite
 
 
 
 
var createStatement = "CREATE TABLE IF NOT EXISTS Contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, outletname TEXT, address TEXT, landmaking TEXT, address2 TEXT, sticker TEXT,  nivea TEXT,  competitor TEXT, lga TEXT, contact TEXT, phone TEXT, outlettype TEXT, aospw TEXT, callfrequency TEXT, purchase TEXT, currentdate TEXT)";

var createStatement2 = "CREATE TABLE IF NOT EXISTS login_table (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT, UNIQUE(username) ON CONFLICT REPLACE)";


 
var selectAllStatement = "SELECT * FROM Contacts";
 
var insertStatement2 = "INSERT INTO login_table (username, password) VALUES (?,?)";


var insertStatement = "INSERT INTO Contacts (outletname, address, landmaking, address2, sticker,  nivea,  competitor, lga, contact, phone, outlettype, aospw, callfrequency, purchase, currentdate) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
 
var updateStatement = "UPDATE Contacts SET outletname = ?, address = ? ,  landmaking = ?, address2 = ?, sticker = ?, nivea = ?,  competitor = ? ,  lga = ? ,  contact = ? , phone = ?, outlettype = ?, aospw = ?, callfrequency = ? , purchase = ?  , currentdate = ?  WHERE id=?";
 
var deleteStatement = "DELETE FROM Contacts WHERE id=?";
 
var dropStatement = "DROP TABLE Contacts";
 
 var db = openDatabase("AddressBook", "1.0", "Address Book", 200000);  // Open SQLite Database
 
var dataset;
 
var DataType;
 
 function initDatabase()  // Function Call When Page is ready.
 
{
 
    try {
 
        if (!window.openDatabase)  // Check browser is supported SQLite or not.
 
        {
 
            alert('Databases are not supported in this browser.');
 
        }
 
        else {
 
            createTable();  // If supported then call Function for create table in SQLite
 
        }
 
    }
 
    catch (e) {
 
        if (e == 2) {
 
            // Version number mismatch. 
 
            console.log("Invalid database version.");
 
        } else {
 
            console.log("Unknown error " + e + ".");
 
        }
 
        return;
 
    }
 
}
 
function createTable()  // Function for Create Table in SQLite.
 
{
 
    db.transaction(function (tx) { tx.executeSql(createStatement, [], showRecords, onError); });
	db.transaction(function (tx) { tx.executeSql(createStatement2, [], showRecords, onError); });
 
}
 
function insertRecord() // Get value from Input and insert record . Function Call when Save/Submit Button Click..
 
{
  
        var outletnametemp = $('input:text[id=outletname]').val();
 
        var addresstemp = $('input:text[id=address]').val();
		
		var  landmaketemp = $('input:text[id=landmark]').val();
		
			var  address2temp = $('input:text[id=address_2]').val();
			
			var   stickertemp = $('input:text[id=txtsticker]').val();
			
			var   niveatemp = $('#txtnivea').val();
			
			var  competitortemp = $('#txtcompetitor').val();
			var  lgatemp = $('#txtlga').val();
				var  contacttemp = $('#txtcontact').val();
				var  phonetemp = $('#txtphone').val();
				var  outlettypetemp = $('#txtoutlettype').val();
				var  aospwtemp = $('#txtaospw').val();
				var callfrequencytemp = $('#txtcallfrequency').val();
				var purchasetemp = $('#txtpurchase').val();
				var created_date = getDateTime();
			
	 if(outletnametemp == "" || addresstemp == "" || stickertemp == "" || niveatemp == "" || competitortemp == ""|| lgatemp == ""|| contacttemp == ""|| phonetemp == ""|| outlettypetemp == ""|| aospwtemp == ""|| callfrequencytemp == ""|| purchasetemp == "" || address2temp == "" || landmaketemp == "")
	{
alert("One or More Fields are empty. Please check and try again.");		
	}
	else
	{
		
		
        db.transaction(function (tx) { tx.executeSql(insertStatement, [outletnametemp, addresstemp, landmaketemp, address2temp, stickertemp,niveatemp, competitortemp, lgatemp, contacttemp, phonetemp, outlettypetemp, aospwtemp, callfrequencytemp, purchasetemp, created_date ], loadAndReset, onError); });
 
	}
        //tx.executeSql(SQL Query Statement,[ Parameters ] , Sucess Result Handler Function, Error Result Handler Function );
 
}




function insertRecord2(user,pass)   
{
 
		
        db.transaction(function (tx) { tx.executeSql(insertStatement2, [user, pass], loadAndReset, onError); });
 
 
}
 

 
function deleteRecord(id) // Get id of record . Function Call when Delete Button Click..
 
{
 
    var iddelete = id.toString();
 
    db.transaction(function (tx) { tx.executeSql(deleteStatement, [id], showRecords, onError);
	// alert(iddelete+" Delete Sucessfully");
	 
	  });
 
    resetForm();
 
}
 
function updateRecord() //  Get id of record . Function Call when Delete Button Click..
 
{ 
 
    var outletnameupdate = $('input:text[id=outletname]').val().toString();
 
    var addressupdate = $('input:text[id=address]').val().toString();
	var  landmakeupdate = $('input:text[id=landmark]').val();
		var  address2update = $('input:text[id=address_2]').val();
		var   stickerupdate = $('input:text[id=txtsticker]').val();
		var   niveaupdate = $('#txtnivea').val();
			var  competitorupdate = $('#txtcompetitor').val();
			var  lgaupdate = $('#txtlga').val();
				var  contactupdate = $('#txtcontact').val();
					var  phoneupdate = $('#txtphone').val();
					var  outlettypeupdate = $('#txtoutlettype').val();
					var aospwupdate = $('#txtaospw').val();
					var callfrequencyupdate = $('#txtcallfrequency').val();
						var  purchaseupdate = $('#txtpurchase').val();
				
					var created_date = getDateTime();
 
    var useridupdate = $("#id").val();
 
    db.transaction(function (tx) { tx.executeSql(updateStatement, [outletnameupdate, addressupdate, landmakeupdate,address2update,stickerupdate,niveaupdate , competitorupdate, lgaupdate,lgacontact, phoneupdate, outlettypeupdate, aospwupdate, callfrequencyupdate,purchaseupdate, created_date,Number(useridupdate)], loadAndReset, onError); });
 
}
 
function dropTable() // Function Call when Drop Button Click.. Talbe will be dropped from database.
 
{
 
    db.transaction(function (tx) { tx.executeSql(dropStatement, [], showRecords, onError); });
 
    resetForm();
 
    initDatabase();
 
}
 
function loadRecord(i) // Function for display records which are retrived from database.
 
{
 
    var item = dataset.item(i);
 
    $("#outletname").val((item['outletname']).toString());
 
    $("#address").val((item['address']).toString());
	 $("#landmark").val((item['landmark']).toString());
	  $("#address_2").val((item['address2']).toString());
	    $("#txtsticker").val((item['sticker']).toString());
		
		  $("#txtnivea").val((item['nivea']).toString());
		  
		    $("#txtcompetitor").val((item['competitor']).toString());
			   $("#txtlga").val((item['lga']).toString());
			   
			     $("#txtcontact").val((item['contact']).toString());
				   $("#txtphone").val((item['phone']).toString());
				     $("#txtoutlettype").val((item['outlettype']).toString());
					  $("#txtaospw").val((item['aospw']).toString());
					    $("#txtcallfrequency").val((item['callfrequency']).toString());
						  $("#txtpurchase").val((item['purchase']).toString());
						
						
		  
		  
	 
		  
 //aospwupdate 
    $("#id").val((item['id']).toString());
 
}
 
function resetForm() // Function for reset form input values.
 
{
 
    $("#outletname").val("");
 
    $("#address").val("");
	$("#landmark").val("");
   $("#address_2").val("");
      $("#txtsticker").val("");
	    $("#txtnivea").val("");
		 $("#txtcompetitor").val("");
		  $("#txtlga").val("");
		    $("#txtcontact").val("");
			   $("#txtphone").val(""); 
			   $("#txtoutlettype").val("");
			     $("#txtaospw").val("");
				  $("#txtcallfrequency").val("");
				    $("#txtpurchase").val("");
				  
				 
		
		
	  
	  
    $("#id").val("");
 
}
 
function loadAndReset() //Function for Load and Reset...
 
{
 
    resetForm();
 
    showRecords()
 
}
 
function onError(tx, error) // Function for Hendeling Error...
 
{
 
    alert(error.message);
 
}
 
function showRecords() // Function For Retrive data from Database Display records as list
 
{
 
    $("#results").html('')
 
    db.transaction(function (tx) {
 
        tx.executeSql(selectAllStatement, [], function (tx, result) {
 
            dataset = result.rows;
 
            for (var i = 0, item = null; i < dataset.length; i++) {
 
                item = dataset.item(i);
 
  var linkeditdelete = '<li>' + item['outletname'] + ' | ' + item['address'] + ' |  '+' | ' + item['phone']+' | ' +
 
                                            '<a href="#" onclick="deleteRecord(' + item['id'] + ');">delete</a></li>';
 
                $("#results").append(linkeditdelete);
 
            }
 
        });
 
    });
 
}

function  sync() // Function Call when Drop Button Click.. Talbe will be dropped from database.
 
{
 
  $("#results").html('')
 
    db.transaction(function (tx) {
 
        tx.executeSql(selectAllStatement, [], function (tx, result) {
 
            dataset = result.rows;
 
            for (var i = 0, item = null; i < dataset.length; i++) {
 
                item = dataset.item(i);
 
											
 var dataString = 'outletname=' + item['outletname'] + '&address=' + item['address'] + '&landmaking=' + item['landmaking'] + '&address2='+ item['address2']+'&sticker=' + item['sticker'] +'&nivea=' + item['nivea']+ '&competitor=' + item['competitor']+'&lga=' + item['lga']+ '&contact=' + item['contact']+'&phone=' + item['phone']+'&outlettype=' + item['outlettype'] +'&aospw=' + item['aospw'] +'&callfrequency=' + item['callfrequency']+ '&purchase=' + item['purchase']+ '&currentdate=' + item['currentdate'];											
											
 
											
											//alert(dataString);
											
											
/*   $.ajax({
type: "POST",
url: "latprocess.php",
data: dataString,
cache: false,
success: function(html) {
  alert(item['outletname']+" value");
  deleteRecord(item['id']);
}
});  */
 $.ajax({
                type: 'POST',
                data: dataString,
                //change the url for your project
                url: 'latprocess.php',
                success: function(data){
                  //   deleteRecord(item['id']);
					
					//console.log(data);
                     alert('Your outlet was successfully added');
					
				   
 						 
					
                },
                error: function(){
                    console.log(data);
					
					// alert(item['outletname']+" value");
                    alert('There was an error adding the outlet '+item['outletname']);
                }
            });
 

  deleteRecord(item['id']);


 
 
                //$("#results").append(linkeditdelete);
 
            }
 
        });
 
    });
 
}
 
$(document).ready(function () // Call function when page is ready for load..
 {

 
    $("body").fadeIn(2000); // Fede In Effect when Page Load..
 
    initDatabase();
 
    $("#submitButton").click(insertRecord);  // Register Event Listener when button click.
 
    $("#btnUpdate").click(updateRecord);
 
    $("#btnReset").click(resetForm);
 
    $("#btnDrop").click(dropTable);
	
	 $("#btnSync").click(sync);
	 
	  $("#getButton").click(insertRecord);
 
});
 
 
 function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
        var month = '0'+month;
    }
    if(day.toString().length == 1) {
        var day = '0'+day;
    }   
    if(hour.toString().length == 1) {
        var hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
        var minute = '0'+minute;
    }
    if(second.toString().length == 1) {
        var second = '0'+second;
    }   
    var dateTime = year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second;   
     return dateTime;
}
