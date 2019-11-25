//Main function to generate table. Everything goes through this function.
function generateTable(multplierMin, multplierMax, multiplicandMin, multiplicandMax) {
  var table = document.getElementById("resultTable");
  table.innerHTML = ""; //Clears table contents in case there was previously cells in there

  var multiplier1 = multplierMin.value;
  var multiplier2 = multplierMax.value;
  var multiplicand1 = multiplicandMin.value;
  var multiplicand2 = multiplicandMax.value;

  //Pass as strings to handle input "-"
  if(validateInput(multiplier1, multiplier2, multiplicand1, multiplicand2) == false){
    return;
  }

  //convert to Number to handle floating point inputs
  multiplier1 = Number(multiplier1);
  multiplier2 = Number(multiplier2);
  multiplicand1 = Number(multiplicand1);
  multiplicand2 = Number(multiplicand2);

  var rowHead = table.insertRow(0);
  var cell = rowHead.insertCell(-1);
  cell.innerHTML = ''; //Fills in blank cell that is at the crossing point of the two headers

  //Fills in horizontal header
  for (i = multiplier1; i <= multiplier2; i++) {
    console.log(i);
    var cell = rowHead.insertCell(-1);
    cell.innerHTML = i;
  }

  //Fills in cells
  for (i = multiplicand1; i <= multiplicand2; i++) {
    var row = table.insertRow(-1);
    var cell = row.insertCell(-1);
    cell.innerHTML = i; //Fills in vertical header
    for (j = multiplier1; j <= multiplier2; j++) {
      var cell = row.insertCell(-1);
      cell.innerHTML = i * j;
    }
  }
}

//Validates input to generateTable function
function validateInput(multiplier1, multiplier2, multiplicand1, multiplicand2) {
  if (multiplier1 == "" || multiplier2 == "" || multiplicand1 == "" || multiplicand2 == "") {
    alert("You must enter a number in all of the boxes!");
    return false;
  }

  //Convert to Number to compare numerical value rather than first digit
  multiplier1 = Number(multiplier1);
  multiplier2 = Number(multiplier2);
  multiplicand1 = Number(multiplicand1);
  multiplicand2 = Number(multiplicand2);

  if (multiplier1 > multiplier2) {
    alert("The first multiplier must be less than or equal to the second multiplier!");
    return false;
  }
  else if (multiplicand1 > multiplicand2) {
    alert("The first multiplicand must be less than or equal to the second multiplicand!");
    return false;
  }
  else {
    return true;
  }
}
