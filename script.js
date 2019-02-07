let word = "";

let newWord = document.querySelector(".newWord");
newWord.addEventListener("click", function() {
  word = prompt("Pleasse enter a word");
  //   console.log(word.length);

  let underscore = [];
  for (let i = 0; i < word.length; i++) {
    underscore.push("_");
  }
  console.log(underscore);
});

//when "new word" button is clicked then a prompt for user input is initiated.

//create function to generate of words but would like to be able to type any word in the dictionary

//const word = ["mushroom", "yoshi", "princess", "bowser"];

//let randNum = Math.floor(Math.random() * word.length);
//let newWord = word[randNum];

//let docUnderScore = document.getElementsByClassName("underscore");

//console.log(newWord);

// function newWord() {
//   var input = document.getElementById("userInput");
//   alert(input);
// }

//create uderscores based on length of the word that is typed into the box

// let assignunderScore = () => {
//   for (let i = 0; i < input.length; i++) {
//     assignunderScore.push["_"];
//   }
//   return assignunderScore;
// };

// console.log(assignunderScore());

var newButton = document.getElementById("newwordbutton");
// console.log(newButton);

//user is able to click button on keyboard for the guess

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
