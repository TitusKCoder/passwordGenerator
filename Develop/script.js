// Assignment Code
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1","2","3","4","5","6","7","8","9","0"]
var special = ["~","!","@","#","$","%","^","&","*","(",")","_","+"];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


function generatePassword(){
  var masterArray =[]
  // Ask the user a series of questions for their password criteria 
  // Ask the user how many chars  
  var charLength = window.prompt("how many characters do you want for your password? Choose a length of at least 8 characters and no more than 128 characters." );


  if (charLength <8 || charLength > 128){
    window.alert("Choose a length of at least 8 characters and no more than 128 characters");
    return "";
  }
  else{
    // Ask if they want uppercase letters in the password 
    var upperAnswer = window.confirm("Do you want uppercase letters in your password?");
    //Ask if they want lowercase letters
    var lowerAanwer = window.confirm("Do you want loweranwer letters in your password?");
    // Ask if they want numbers
    var numAnswer = window.confirm("Do you want numbers in your password?");
    // Ask if they want special characters
    var specAnswer = window.confirm("Do you want special characters in your password?");
  

  }
  // add if statements for each char type
  if(upperAnswer === true){
    masterArray= masterArray.concat(uppercase)
  }
  if(lowerAanwer){
    masterArray = masterArray.concat(lowerCase)
  }
  if(numAnswer) {
    masterArray = masterArray.concat(number);
  }
  if (specAnswer) {
    masterArray = masterArray.concat(special)
  }

if (masterArray.length === 0){
  window.alert("Please select at least one character type")
  return ""
}
  
var password = ""
for (var i = 0; i < charLength; i++) {
  var index = Math.floor(Math.random() * masterArray.length);
  password = password + masterArray[index]

}
return password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword();
