//create function to generate of words but would like to be able to type any word in the dictionary

const word = ["mushroom", "yoshi", "princess", "bowser"];

let randNum = Math.floor(Math.random() * word.length);
let newWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];

let docUnderScore = document.getElementsByClassName("underscore");

console.log(newWord);

//create uderscores based on length of the word that is typed into the box

let assignunderScore = () => {
  for (let i = 0; i < newWord.length; i++) {
    underScore.push["_"];
  }
  return underScore;
};

console.log(assignunderScore());

// Make bowser jump when user does not guess word correctly because Mario died

// Make Luigi jump when user does guess word correctly because Mario was saved

function jumpHigh() {
  var luigi = luigi;
}

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
