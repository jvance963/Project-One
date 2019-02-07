//create function to generate of words but would like to be able to type any word in the dictionary
let word = "";
let guess = "";
let alphabet = [
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
  "z"
];

//when "new word" button is clicked then a prompt for user input is initiated.

let newWord = document.querySelector(".newWord");
newWord.addEventListener("click", function() {
  word = prompt("Please enter a new word!");
});

//create uderscores based on length of the word that is typed into the box

let underscore = [];
for (let i = 0; i < word.length; i++) {
  underscore.push("_");
}
console.log(underscore);
guess = setGuess(word);
console.log(guess);
console.log(guess.length);
// });

// when a user inputs a word (with prompt), make userGuess an equal length with underscores
//function setGuess(userInput)

let underscores = "";
for (let i = 0; i < userInput.length; i++) {
  underscores += "_";
}
// return underscores;

//Getting guess from the player and ensuring that it is a single character

//user is able to click button on keyboard for the guess

let pressLetter = document.getElementById("letters");
letterA.addEventListener("click", function(event) {
  //console.log(letterA.value);
  document.getElementById("letterA").disabled = true;
});

//make buttons on keyboard only able to pressed once

// Make bowser jump when user does not guess word correctly because Mario died

// Make Luigi jump when user does guess word correctly because Mario was saved

//if user guesses the correct word then an alert box appears and says "Your answer is correct"

//if user guesses the incorrect answer then an alert box appears and says "Your answee is incorrect"

// if user does not guess correctly then head appears

// if user does not guess correctly then left arm appears

// if user does not guess correctly then right arm appears

// if user does not guess correctly then torso appears

// if user does not guess correctly then left leg appears

// if user does not guess correctly then right leg appears

// if user does not guess correctly then left foot appears

// if user does not guess correctly then right foot appears
