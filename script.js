let word = "";
let guess = "";
var text1 = document.querySelector(".underscore");

let newWord = document.querySelector(".newWord");

newWord.addEventListener("click", function() {
  word = prompt("Please enter a new word!");
  console.log(word);

  let underScore = "_";
  console.log(underScore);

  for (let i = 1; i < word.length; i++) {
    underScore += " " + "_" + " ";
  }
  text1.innerText = underScore;
  console.log(text1.innerHTML);
});

var letters = document.querySelectorAll("#letters a");

for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener("click", function(e) {
    console.log(e.target.innerText);
  });
}
