function fToM() {


  var measure = parseInt(document.getElementById("value1").value);
//This document calculates feet to meters//
  //Feet to Meters (measure = metres, 0.3048 = feet)//
  var Meters = measure * 0.3048;
  var message = measure + ' feet converts to ' + Meters + ' Meters.';
  console.log(message);
 //This documents the response from HTML for the answer//
 document.getElementById("resultsentence").innerHTML = message;
 
 
//This should cause an alert message if no values are entered//
 if (!measure) {
	 alert ("Please enter a value in the input field!");
 }
 
 //This should cause an alert message if negative values are entered//
 else if (measure < 0) {
	 alert ("No negative values allowed.");
}

 
 
}




//Inches to Centimetres//
function InToCm() {


  var measure = parseInt(document.getElementById("value2").value);

  //This calculates Centimeters from Inches (measure = Inches, 2.54 = CM)
  var Centimeters = measure * 2.54;
  var message = measure + ' Inches converts to ' + Centimeters + ' Centimeters.';
  console.log(message);
 //This documents the response from HTML for the answer//
 document.getElementById("resultsentence2").innerHTML = message;
 
 //This should cause an alert message if no values are entered//
 if (!measure) {
	 alert ("Please enter a value in the input field!");
 }
 
 //This should cause an alert message if negative values are entered//
 else if (measure < 0) {
	 alert ("No negative values allowed.");
}

}


//Yards to Meters//
function YtoM() {


  var measure = parseInt(document.getElementById("value3").value);

  //This calculates Meters from Yards (measure = Yards, 0.9144 = feet)
  var Meters = measure * 0.9144;
  var message = measure + ' yards converts to ' + Meters + ' Meters.';
  console.log(message);
 //This documents the response from HTML for the answer//
 document.getElementById("resultsentence3").innerHTML = message;
 
 //This should cause an alert message if no values are entered//
 if (!measure) {
	 alert ("Please enter a value in the input field!");
 }
 
 //This should cause an alert message if negative values are entered//
 else if (measure < 0) {
	 alert ("No negative values allowed.");
}

}

//Miles to Kilometres//
function MiToKM() {


  var measure = parseInt(document.getElementById("value4").value);

  //This calculates Kilometres from Miles (measure = Miles, 1.60934 = KM)
  var Kilometers = measure * 1.60934;
  var message = measure + ' miles converts to ' + Kilometers + ' Kilometers.';
  console.log(message);
 //This documents the response from HTML for the answer//
 document.getElementById("resultsentence4").innerHTML = message;
 
 
//This should cause an alert message if no values are entered//
 if (!measure) {
	 alert("Please enter a value in the input field!");
 }
 
 //This should cause an alert message if negative values are entered//
 else if (measure < 0) {
	 alert("No negative values allowed.");
}

}

