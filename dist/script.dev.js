"use strict";

//function now shows the pos and neg result in a <p> under the <input>
function handleTestNumber() {
  var testNumber = document.getElementById("numberCheck");

  if (testNumber.value < 0) {
    return "negative";
  } else if (testNumber.value >= 0) {
    return "positive";
  } else {
    console.log("Value");
    return "Enter a valid Value";
  }
} // function for checking the largest value


function handleValueCheck() {
  var userNumbers = document.getElementById('userNumber');
  if (userNumbers.value > userNumbers.value) return userNumbers.value;
  console.log(userNumbers);
}