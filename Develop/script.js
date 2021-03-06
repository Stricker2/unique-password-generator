// password variables
var passwordLength = [];
var choiceArray = [];
var getLowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var getUppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var getNumbers = ['1','2','3','4','5','6','7','8','9','0'];
var getSymbols = ['!','@','#','$','%','^','&','*','(',')','_','-','<','>','/','?'];

// password prompts
function passwordPrompts() {
  choiceArray = [];

  passwordLength = parseInt(window.prompt("Please input a number between 8 and 128 to declare the character length of your password:"));
  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    window.alert("The number you provided is invalid. Please provide a number between 8 and 128");
    return passwordPrompts();
  }
  console.log(passwordLength);

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
  return true;
};

// define generatePassword function
function generatePassword(){
  var generatedPassword = '';
  for(var i = 0; i < passwordLength; i++) {
    var randomChoice = Math.floor(Math.random() * choiceArray.length)
    generatedPassword = generatedPassword + choiceArray[randomChoice];
  }
  console.log(generatedPassword);

  return generatedPassword
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() { 
  // adding if statement so password only gets generated when prompt function returns true
  var chosenPrompts = passwordPrompts();

  if(chosenPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

