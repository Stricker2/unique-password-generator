// Assignment code here
function lowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function upperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getNumber() {
  const numbers = "1234567890";
}
function getSymbol() {
  const symbol = "!@#$%^&*()-_/?.,><";
}

var min = parseInt('8');
var max = parseInt('128');

var generatePassword = function() {
  var passwordLength = window.prompt('Please type a number between 8 and 128 to declare how long you would like your password to be:');
  
  if (passwordLength < min || passwordLength > max) {
    alert("Please try again. Enter a number between 8 and 128 to declare the length of the password.");
    return generatePassword();
  }
  else {
    alert('Your password will be ' + passwordLength + ' characters long.');
  }
  console.log(passwordLength);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
