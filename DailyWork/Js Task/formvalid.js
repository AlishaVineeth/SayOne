var dataArray = [];
var fulldata = [];
//var namedata;
var h=0;
function formValidation() {
    var firstname = document.getElementById('firstname');
    var phone = document.getElementById('phone')
    var email = document.getElementById('email');
    var addr = document.getElementById('addr');
    var hdn =document.getElementById('hdn');
   
    var val = phone.value
    if (/^\d{10}$/.test(val)) {
        // value is ok, use it
    } else {
       // alert("Invalid number; must be ten digits")
       var alertmsg = "Enter 10 digits";
       document.getElementById("p2").innerHTML = alertmsg;
        phone.focus()
        return false
    }

    var x=document.getElementById("email").value;
    var atpos=x.indexOf("@");
    var dotpos=x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
      {
        var alertmsg = "Not a valid e-mail address";
        document.getElementById("p3").innerHTML = alertmsg;
        email.focus();
      //alert("Not a valid e-mail address");
      return false;
      }

    if(hdn.value!="")
    {
      if(dataArray.length>=hdn.value)
      {
   dataArray[hdn.value-1].Name= firstname.value;
   dataArray[hdn.value-1].PhoneNo= phone.value;
   dataArray[hdn.value-1].Email= email.value;
   dataArray[hdn.value-1].Address= addr.value;
   hdn.value="";
      }
      else{
        dataArray.push({"Name": firstname.value,"PhoneNo": phone.value,"Email":email.value, "Address": addr.value});
      }
    }
    else{
      dataArray.push({"Name": firstname.value,"PhoneNo": phone.value,"Email":email.value,"Address": addr.value});
    
    }
   firstname.value = "";
   phone.value = "";
   email.value = "";
   addr.value = "";
   document.getElementById("p2").innerHTML = "";
   document.getElementById("p3").innerHTML = "";
   autoHideDataEntry();
   listPopulate();
   return false;
  }

    function getFullData(item, index) {

     // namedata = item.Name;
      //return namedata;

        fulldata = [item.Name,item.PhoneNo,item.Email,item.Address,].join(" "); 
        return fulldata;

      }
    
    function myToggleFunction() {
      debugger
      var firstname = document.getElementById('firstname');
      var phone = document.getElementById('phone');
      var email = document.getElementById('email');
      var addr = document.getElementById('addr');
      var hdn =document.getElementById('hdn');
      firstname.value = "";
   phone.value = "";
   email.value = "";
   addr.value = "";
   hdn.value ="";
        var x = document.getElementById("data");
        if (x.style.display === "none") {
          x.style.display = "block";
    
        } else {
          x.style.display = "none";
        }
      }
      function autoHideDataEntry() {
        debugger
          var y = document.getElementById("data");
          y.style.display = "none";       
      }
      function listPopulate(){
        debugger
      var ul = document.querySelector("ul");
      ul.innerHTML="";
      h= 0;
      debugger;
      var mapp = dataArray.map(getFullData);
      for(var g =0;g<mapp.length;g++)
      {
        var topping = mapp[g];
        debugger; 
        var listItem = document.createElement("li");
        listItem.textContent = topping;
        topping="";
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.id = h;
        span.appendChild(txt);
        listItem.appendChild(span);
        var span1 = document.createElement("SPAN");

       h=h+1;
  var txt1 = document.createTextNode("Edit");
  span1.className = "editList";
  span1.id=h;
  span1.appendChild(txt1);
  listItem.appendChild(span1);
        ul.appendChild(listItem);
      }

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function(e) {
    var div = this.parentElement;
    div.style.display = "none";
    var idi2=this.id;
    debugger;
    var index =dataArray.indexOf(idi2);
    delete dataArray[idi2];
  }
}
var edit = document.getElementsByClassName("editList");
debugger;
        var t;
        for (t = 0; t < close.length; t++) {
          edit[t].onclick = function(e) {
            
            myToggleFunction();
            debugger
 var idi=this.id;
 
 var hdn =document.getElementById('hdn');
 hdn.value = idi;
            document.getElementById("firstname").value = dataArray[idi-1].Name;
            document.getElementById("phone").value = dataArray[idi-1].PhoneNo;
            document.getElementById("email").value =dataArray[idi-1].Email;
            document.getElementById("addr").value = dataArray[idi-1].Address;
          }
        }
      }




