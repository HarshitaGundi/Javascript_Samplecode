//livesearch.js demonstartes web page communicating with a web server while a user type characters in search input field

function showResult(str) 
{
  if (str.length==0) { 
    document.getElementById("search").innerHTML="";
    document.getElementById("search").style.border="0px";
    return;
  }
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("search").innerHTML=xmlhttp.responseText;
      document.getElementById("search").style.border="1px solid #A5ACB2";
    }
  }
  xmlhttp.open("GET","http://webdevelopement.netau.net/HarshitaGundi_Project/php/livesearch.php?q="+str,true);
  xmlhttp.send();
}
