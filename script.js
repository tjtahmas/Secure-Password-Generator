// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/////////////////////////////////////////////////////////////////////////////
//TJ Tahmassebi's Code

//Initalize objects and arrays
//Password Object containing password name, length, and desired criteria
var password = {
  name:"", 
  characters: 0,
  lowercase: false,
  uppercase: false,
  numericChar: false,
  specialChar: false,
}
//Arrays of possible characters to make password string out of
var symbols = [".","/","!","@","#","$","%","^","&","*","(",")","-","_","=","+","`","~","?","<",">"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



//on click, form a series of prompts for the criteria

//plug in boxes and stuff

//password length prompt; at least 8 characters, no more than 128

//Password Length Selector
while (password.characters < 8 || password.characters > 128){
  password.characters = prompt("How many characters do you want your secure password to be?");
  if(password.characters < 8 || password.characters > 128){
    alert("Try again! Enter a number between 8 and 128 characters.");
  }
}

//confirm whether to include lowercase, uppercase, numberic, and/or speicla characters
  //prompts or boxes for each

//Password Criteria
while(password.lowercase == false && password.uppercase == false && password.numericChar == false && password.specialChar == false){ //while no characters are chosen
  password.lowercase = confirm("Do you want your password to include lowercase letters?");
  password.uppercase = confirm("Do you want your password to include uppercase letters?");
  password.numericChar = confirm("Do you want your password to include numbers?");
  password.specialChar = confirm("Do you want your password to include special characters?");
  if(password.lowercase == false && password.uppercase == false && password.numericChar == false && password.specialChar == false){ //input validated, at least one character type should be selected
    alert("Try again! Must select at least one type of character.")
  }
}

//when prompts are completed a matching password is generated

  // Password Generator
var arraySelector = [0, 1, 2, 3]; //to select lowercase(0), uppercase(1), numbers(2), and special characters(4)
while (password.name.length < password.characters){
  var characterSelector = arraySelector[Math.floor(Math.random()*arraySelector.length)]; //randomly select which type of character
  if (characterSelector == 0 && password.lowercase == true){ //if lowercase letter is randomly selected and lowercase is allowed
  var newCharacter = letters[Math.floor(Math.random()*letters.length)]; //selects a random letter from letters array
  password.name = password.name.concat(newCharacter); //adds letter to the end of password
  } else if (characterSelector == 1 && password.uppercase == true){ //elseif uppercase letter is randomly selected and uppercase is allowed
    var newCharacter = letters[Math.floor(Math.random()*letters.length)];
    newCharacter = newCharacter.toUpperCase();
    password.name = password.name.concat(newCharacter);
  } else if (characterSelector == 2 && password.numericChar == true){ //elseif number letter is randomly selected and number is allowed
    var newCharacter = numbers[Math.floor(Math.random()*numbers.length)];
    newCharacter = newCharacter.toUpperCase();
    password.name = password.name.concat(newCharacter);
  } else if (characterSelector == 3 && password.specialChar == true){ //elseif special character letter is randomly selected and special character is allowed
    var newCharacter = symbols[Math.floor(Math.random()*symbols.length)];
    newCharacter = newCharacter.toUpperCase();
    password.name = password.name.concat(newCharacter);
  }
}

//password is displayed in an alert or written on the page

console.log(password);
alert(password.name);