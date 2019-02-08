//create function to generate of words but would like to be able to type any word in the dictionary
let word = "";
let guess = "";
var text1 = document.querySelector(".underscore");

//when "new word" button is clicked then a prompt for user input is initiated.

let newWord = document.querySelector(".newWord");

newWord.addEventListener("click", function() {
  word = prompt("Please enter a new word!");
  console.log(word);

  //create uderscores based on length of the word that is typed into the box
  let underScore = "_";
  console.log(underScore);

  for (let i = 1; i < word.length; i++) {
    underScore += " " + "_" + " ";
  }
  text1.innerText = underScore;
  console.log(text1.innerHTML);
});

// guess = setGuess(word);
//console.log("guess", guess);
// console.log(guess.length);
//});

//user is able to click button on keyboard for the guess

// //document.querySelector(".letters");
// letterA.addEventListener("click", function(event) {
//   //console.log(letters.value);
//   document.querySelector(".letters").disabled = true;
// });

//Getting guess from the player and ensuring that it is a single character

var guess;
var guessLetter;

// let guessArray = guess(wordArray.length);
// for (let i = 1; i < wordArray.length; i++) {
//   if (word === wordArray[i]) {
//     guessArray[i] = word;
//     console.log(word);
//   }
// }

//make buttons on keyboard only able to pressed once

var checkLetter = function(letters) {
  console.log(letters);
};

const letters = document.getElementById("letters");

letters.addEventListener("click", function(event) {
  //console.log("test");
});

// Make bowser jump when user does not guess word correctly because Mario died

// Make Luigi jump when user does guess word correctly because Mario was saved

//if user guesses the correct word then an alert box appears and says "Your answer is correct"

//if user guesses the incorrect answer then an alert box appears and says "Your answer is incorrect"

// if user does not guess correctly then head appears

// if user does not guess correctly then left arm appears

// if user does not guess correctly then right arm appears

// if user does not guess correctly then torso appears

// if user does not guess correctly then left leg appears

// if user does not guess correctly then right leg appears

// if user does not guess correctly then left foot appears

// if user does not guess correctly then right foot appears
