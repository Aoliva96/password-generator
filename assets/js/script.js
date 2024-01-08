// Assignment code here

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

function generatePassword() {
  var numChoice = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var uppChoice = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowChoice = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var SpeChoice = [
    " !",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];
}

// // Var declare
// var numChoice = ["0123456789"];
// var uppChoice = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
// var lowChoice = ["abcdefghijklmnopqrstuvwxyz"];
// var SpeChoice = [" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];

// var userChoice = "";

// function generatePassword() {
//   // Prompt user choice for numbers
//   var numChoice = prompt(
//     "Include numbers in your new password? \n('Y' for yes, 'N' for no)"
//   );

//   if (numChoice == "N") {
//     confirm("You have chosen not to include numbers in your new password.");
//   } else if (numChoice === false) {
//     alert("Closing password generator, thank you.");
//   } else {
//     var userChoice = userChoice.push[i];
//   }
// }
