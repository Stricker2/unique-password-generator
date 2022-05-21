// password variables
var passwordLength = '';
var choiceArray = [];
var getLowers = ('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
var getUppers = ('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
var getNumbers = ('1','2','3','4','5','6','7','8','9','0');
var getSymbols = ('!','@','#','$','%','^','&','*','(',')','_','-','<','>','/','?');
 
// define generatePassword function
function generatePassword(){

}

// password prompts
function passwordPrompts() {
  passwordLength = parseInt(window.prompt("Please input a number between 8 and 128 to declare the character length of your password:"));
  if (passwordLength < 8 || passwordLength > 128 || passwordLength('')) {
    window.alert("The number you provided is invalid. Please provide a number between 8 and 128");
    return false;
  }

  if (confirm("Do you want to include lowercase letters in your password? Click 'OK' if yes, or 'Cancel' if not.")) {
    choiceArray = choiceArray.concat(getLowers);
  }

  if (confirm("Do you want to include uppercase letters in your password? Click 'OK' if yes, or 'Cancel' if not.")) {
    choiceArray = choiceArray.concat(getUppers);
  }

  if (confirm("Do you want to include numbers in your password? Click 'OK' if yes, or 'Cancel' if not.")) {
    choiceArray = choiceArray.concat(getNumbers);
  }

  if (confirm("Do you want to include symbols in your password? Click 'OK' if yes, or 'Cancel' if not.")) {
    choiceArray = choiceArray.concat(getSymbols);
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

