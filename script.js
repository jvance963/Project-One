var letters = document.querySelectorAll("#letters a");

let userClick = "";
let counter = 0;
let word = "";
let guess = "";
var text1 = document.querySelector(".underscore");
let splitword;
let newWord = document.querySelector(".newWord");
let emptyArray = [];

const newPrompt = () => {
  word = prompt("Please enter a new word!");
  console.log(word);
  word = word.toUpperCase();

  counter = 0;

  let underScore = "";
  console.log(underScore);

  for (let i = 0; i < word.length; i++) {
    // underScore += " " + "_" + " ";
    underScore += `<p id="underscore_${i}">_</p>`;
  }
  text1.innerHTML = underScore;
  console.log(text1.innerHTML);
  splitWord = word.split("");
  console.log("word", word, "splitWord", splitWord);
};

newPrompt();

for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener("click", function(e) {
    console.log(e.target.innerText);
    userClick = e.target.innerText;
    console.log("userClick", userClick);

    emptyArray = [];

    for (let i = 0; i < splitWord.length; i++) {
      if (userClick === splitWord[i]) {
        emptyArray.push(i);
        console.log("it's a match!");
        console.log("emptyArray", emptyArray);
      } else {
        console.log("WRONG");
      }
    }
    for (let i = 0; i < emptyArray.length; i++) {
      document.getElementById(
        `underscore_${emptyArray[i]}`
      ).innerText = userClick;
    }

    if (emptyArray.length < 1) {
      counter = counter + 1;
      console.log(counter);
    }
    if (counter === 1) {
      document.getElementById("head").innerHTML =
        "<img src='./imgs/Mario-Head.png' />";
    }
    if (counter === 2) {
      document.getElementById("torso").innerHTML =
        "<img src='./imgs/Torso.png' />";
    }

    if (counter === 3) {
      document.getElementById("left-arm").innerHTML =
        "<img src='./imgs/left-Arm.png' />";
    }

    if (counter === 4) {
      document.getElementById("right-arm").innerHTML =
        "<img src='./imgs/right-arm.png' />";
    }

    if (counter === 5) {
      document.getElementById("left-leg").innerHTML =
        "<img src='./imgs/left-leg.png' />";
    }

    if (counter === 6) {
      document.getElementById("right-leg").innerHTML =
        "<img src='./imgs/right-leg.png' />";
    }

    if (counter === 7) {
      alert("Game Over!");
      newPrompt();
    }
  });
}
