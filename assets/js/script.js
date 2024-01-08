// Assignment code here

// Generate password function
function generatePassword() {
  // Var declare
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

  var passChoice = [];

  // Prompt for password length
  var lenChoice = window.prompt(
    "Please choose the character length of your new password between 8 and 128."
  );

  if (lenChoice < 8 || lenChoice > 128) {
    window.alert("Please choose a value between 8 and 128.");
    return generatePassword();
  } else if (isNaN(lenChoice)) {
    window.alert("Value entered is not a number.");
    return generatePassword();
  } else {
    window.alert(
      "Your new password will be " + lenChoice + " characters long."
    );
  }

  // Prompt if password contains numbers
  var numChoice = window.confirm("Should the password contain numbers?");

  if (numChoice) {
    window.alert("New password will contain numbers.");
  } else {
    window.alert("New password will not contain numbers.");
  }

  // Prompt if password contains uppercase letters
  var uppChoice = window.confirm(
    "Should the password contain uppercase letters?"
  );

  if (uppChoice) {
    window.alert("New password will uppercase letters.");
  } else {
    window.alert("New password will not uppercase letters.");
  }

  // Prompt if password contains lowercase letters
  var lowChoice = window.confirm(
    "Should the password contain lowercase letters?"
  );

  if (lowChoice) {
    window.alert("New password will lowercase letters.");
  } else {
    window.alert("New password will not lowercase letters.");
  }

  // Prompt if password contains special characters
  var speChoice = window.confirm(
    "Should the password contain special characters?"
  );

  if (speChoice) {
    window.alert("New password will contain special characters.");
  } else {
    window.alert("New password will not contain special characters.");
  }

  // Check if any parameters entered
  if (!numChoice && !uppChoice && !lowChoice && !speChoice) {
    return "Password must contain at least one type of character.";
  }

  // Concat values
  if (numChoice) {
    passChoice = passChoice.concat(numChoice);
  }

  if (uppChoice) {
    passChoice = passChoice.concat(uppChoice);
  }

  if (lowChoice) {
    passChoice = passChoice.concat(lowChoice);
  }

  if (speChoice) {
    passChoice = passChoice.concat(speChoice);
  }

  // Generate Final Password
  var finalPass = "";

  for (var i = 0; i < lenChoice; i++) {
    var addPass = [Math.floor(Math.random() * passChoice.length)];
    finalPass = finalPass + passChoice[addPass];
  }

  return finalPass;
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
