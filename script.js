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

    counter = counter + 1;
    if (counter === 5) {
      alert("Game Over!");
      newPrompt();
    }
  });
}
