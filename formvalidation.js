function validateForm() {
    var x = document.forms["myFirstForm"]["firstname"].value;
    if (x.length < 6) {
        alert("First Name must contain minimum 6 characters");
        return false;
    }


var x = document.forms["myFirstForm"]["lastname"].value;
    if (x.length < 4) {
        alert("Last Name must contain minimum 4 characters");
        return false;
    }



var email= document.forms["myFirstForm"]["email"].value;
 invalidChars = " /:,;"
    if (email == "") {
		alert("Enter valid email address");
  return false
  }

  for (i=0; i<invalidChars.length; i++) {
    badChar = invalidChars.charAt(i)
    if (email.indexOf(badChar,0) > -1) {
		alert("Enter valid email address");
      return false
    }
  }

  atPos = email.indexOf("@",1)
  if (atPos == -1) {
	  alert("Enter valid email address");
    return false
  }

  if (email.indexOf("@",atPos+1) > -1) {
	  alert("Enter valid email address");
    return false
  }

  periodPos = email.indexOf(".",atPos)
  if (periodPos == -1) {
	  alert("Enter valid email address");
    return false
  }

  if (periodPos+2 > email.length) {
	  alert("Enter valid email address");
    return false
  }
    return true
}

