<!---------------------------------------------------------------------------------------------
Example client script for JQUERY:AJAX -> PHP:MYSQL example
by Trystan Lea : openenergymonitor.org : GNU GPL

I recommend going to http://jquery.com/ for the great documentation there about all of this
---------------------------------------------------------------------------------------------->
<html>
  <head>
    <script language="javascript" type="text/javascript" src="jquery.js"></script>
  </head>
  <body>

  <!---------------------------------------------------------------------------------------------
  1) Create some html content that can be accessed by jquery
  ---------------------------------------------------------------------------------------------->
  <h2> Client example </h2>
  <h3>Output: </h3>
  <div id="output">this element will be accessed by jquery and this text will be replaced</div>

  <script id="source" language="javascript" type="text/javascript">

   function call () 
  {

	var  username = $('#username').val();
var user = "";
   
   
   
 
// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("username", username);
    // Retrieve
 user    = localStorage.getItem("username");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
 
 
 $reverse = 'api.php?value='+user;
  alert($reverse);
	
	
    $.ajax({                                      
      url: $reverse,                  //the script to call to get data          
      data: "",                        //you can insert url argumnets here to pass to api.php for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
        var id = data[0];              //get id
        var vname = data[1];           //get name
        //--------------------------------------------------------------------------------------
        // 3) Update html content
        //--------------------------------------------------------------------------------------
        $('#output').html("<b>id: </b>"+id+"<b> name: </b>"+vname);     //Set output element html
        //recommend reading up on jquery selectors they are awesome http://api.jquery.com/category/selectors/
      } 
    });
  
  } 
  </script>
   <form   id="contact">
               <div class="container">
 
                  
 
                            <div class="head">
      <h2>Login Information | Click Here</h2>
    </div>
 
  <input  type="text" id="username" name="username" placeholder="Username"  required>
  <br>
<br>
 

 
 
 
                      
                     </div>
                     
                     
                      <div align="center" style="width:100%">
      <button id="submitButton" type="submit" onClick="call()" >Login Now</button>
 
            
                </div>
             
              </form>
  </body>
</html>  
